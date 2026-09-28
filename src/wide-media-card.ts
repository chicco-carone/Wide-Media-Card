import { LitElement, html, nothing, type PropertyValues } from "lit";
import "./wide-media-card-editor";
import { formatTime } from "./format";
import { styles } from "./wide-media-card.styles";
import type { CardConfig, HassEntity, HomeAssistant, MassQueueItem, QueueDetails } from "./types";

class MusicAssistantMediaCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    queue: { state: true },
    fullQueue: { state: true },
    showPreviousQueueItems: { state: true },
  };

  declare hass?: HomeAssistant;
  declare config?: CardConfig;
  declare private queue?: QueueDetails;
  declare private fullQueue?: MassQueueItem[];
  declare private showPreviousQueueItems: boolean;
  private queueKey?: string;
  private queueFetchInFlight = false;
  private timer?: number;
  private resizeObserver?: ResizeObserver;

  constructor() {
    super();
    this.showPreviousQueueItems = false;
  }

  static styles = styles;

  connectedCallback(): void {
    super.connectedCallback();
    this.style.setProperty(
      "--cover-size",
      "clamp(6rem, calc(var(--card-height, 420px) * .38), 17.5rem)",
    );
    this.timer = window.setInterval(() => this.requestUpdate(), 1000);
    this.resizeObserver = new ResizeObserver(([entry]) => {
      this.style.setProperty("--card-height", `${entry.contentRect.height}px`);
    });
    this.resizeObserver.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.timer) window.clearInterval(this.timer);
    this.resizeObserver?.disconnect();
  }

  setConfig(config: CardConfig): void {
    if (!config.entity || !config.entity.startsWith("media_player.")) {
      throw new Error("Set entity to a media_player entity.");
    }
    this.config = config;
    this.showPreviousQueueItems = false;
    this.style.setProperty(
      "--queue-visible-items",
      String(Math.max(1, Math.floor(config.queue_visible_items ?? 7))),
    );
    this.queue = undefined;
    this.fullQueue = undefined;
    this.queueKey = undefined;
  }

  getCardSize(): number {
    return 6;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("wide-media-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): CardConfig {
    const entity = Object.keys(hass.states).find((entityId) =>
      entityId.startsWith("media_player."),
    );
    return { entity: entity ?? "media_player.example" };
  }

  getGridOptions(): Record<string, number> {
    return { min_rows: 4, min_columns: 6 };
  }

  protected updated(changed: PropertyValues<this>): void {
    if (changed.has("hass") || changed.has("config")) this.refreshQueue();
  }

  private get entity(): HassEntity | undefined {
    return this.config && this.hass ? this.hass.states[this.config.entity] : undefined;
  }

  private async refreshQueue(): Promise<void> {
    const entity = this.entity;
    if (
      !this.hass ||
      !this.config ||
      !entity ||
      this.config.show_queue === false ||
      this.queueFetchInFlight
    )
      return;
    const key = `${entity.state}:${entity.last_updated}`;
    if (key === this.queueKey) return;
    this.queueFetchInFlight = true;
    try {
      const fullQueue = await this.getMassQueue();
      if (fullQueue) {
        this.fullQueue = fullQueue;
        this.queue = undefined;
        this.queueKey = key;
        return;
      }
      this.fullQueue = undefined;
      const response = (await this.hass.callService(
        "music_assistant",
        "get_queue",
        {},
        { entity_id: this.config.entity },
        undefined,
        true,
      )) as Record<string, QueueDetails> | { response: Record<string, QueueDetails> };
      const details = ("response" in response ? response.response : response) as Record<
        string,
        QueueDetails
      >;
      this.queue = details[this.config.entity] ?? Object.values(details)[0];
      this.queueKey = key;
    } catch {
      // Non-Music-Assistant players do not expose a queue service.
      this.queue = undefined;
      this.queueKey = key;
    } finally {
      this.queueFetchInFlight = false;
    }
  }

  private async getMassQueue(): Promise<MassQueueItem[] | undefined> {
    if (!this.hass || !this.config) return undefined;
    try {
      const response = (await this.hass.callService(
        "mass_queue",
        "get_queue_items",
        {
          entity: this.config.entity,
          limit: this.config.queue_limit ?? 100,
          limit_before: this.showPreviousQueueItems ? 5 : 0,
          limit_after: this.config.queue_limit ?? 100,
        },
        undefined,
        undefined,
        true,
      )) as Record<string, MassQueueItem[]> | { response: Record<string, MassQueueItem[]> };
      const items = ("response" in response ? response.response : response) as Record<
        string,
        MassQueueItem[]
      >;
      return items[this.config.entity] ?? Object.values(items)[0] ?? [];
    } catch {
      return undefined;
    }
  }

  private queueImage(item: MassQueueItem): string | undefined {
    const localImage = item.local_image_encoded?.trim();
    if (localImage) {
      if (localImage.startsWith("data:")) {
        return localImage.endsWith(",") ? undefined : localImage;
      }
      return `data:image/jpeg;base64,${localImage}`;
    }
    return item.media_image || undefined;
  }

  private queueItems(items: MassQueueItem[], currentMediaId: unknown): MassQueueItem[] {
    if (typeof currentMediaId !== "string") return items;
    const currentIndex = items.findIndex((item) => item.media_content_id === currentMediaId);
    if (currentIndex < 0) return items;
    return this.showPreviousQueueItems
      ? items.slice(0, currentIndex)
      : items.slice(currentIndex + 1);
  }

  private editQueue(service: string, queueItemId: string): void {
    if (!this.hass || !this.config) return;
    void this.hass
      .callService("mass_queue", service, {
        entity: this.config.entity,
        queue_item_id: queueItemId,
      })
      .then(() => {
        this.queueKey = undefined;
        this.refreshQueue();
      });
  }

  private call(service: string, data: Record<string, unknown> = {}): void {
    if (!this.hass || !this.config) return;
    void this.hass.callService("media_player", service, data, { entity_id: this.config.entity });
  }

  private toggleQueueDirection(): void {
    this.showPreviousQueueItems = !this.showPreviousQueueItems;
    this.queueKey = undefined;
    void this.refreshQueue();
  }

  private sliderValue(event: Event): number {
    return Number((event as CustomEvent<{ value: number }>).detail.value);
  }

  private position(entity: HassEntity): number {
    const base = Number(entity.attributes.media_position) || 0;
    const updated = entity.attributes.media_position_updated_at;
    if (entity.state !== "playing" || typeof updated !== "string") return base;
    return base + Math.max(0, (Date.now() - new Date(updated).getTime()) / 1000);
  }

  private renderArtwork(url?: string): unknown {
    return html`<div class="artwork">
      ${url ? html`<img src=${url} alt="Album artwork" />` : html`<ha-icon icon="mdi:music"></ha-icon>`}
    </div>`;
  }

  render() {
    const entity = this.entity;
    if (!this.config) return nothing;
    if (!entity)
      return html`<ha-card
        ><div class="player">Entity ${this.config.entity} is unavailable.</div></ha-card
      >`;
    const attrs = entity.attributes;
    const duration = Number(attrs.media_duration) || 0;
    const position = Math.min(this.position(entity), duration || Infinity);
    const positionProgress = duration ? Math.min(100, Math.max(0, (position / duration) * 100)) : 0;
    const isPlaying = entity.state === "playing";
    const isOff = entity.state === "off";
    const volume = Math.round((Number(attrs.volume_level) || 0) * 100);
    const queueItem = this.queue?.next_item;
    const media = queueItem?.media_item;
    const artist =
      media?.artists
        ?.map((item) => item.name)
        .filter(Boolean)
        .join(", ") || media?.album?.name;
    const fullQueue = this.fullQueue;
    const visibleQueue = fullQueue && this.queueItems(fullQueue, attrs.media_content_id);

    return html` <ha-card>
      <div class="shell">
        <section class="player">
          ${this.renderArtwork(typeof attrs.entity_picture === "string" ? attrs.entity_picture : undefined)}
          <div class="identity">
            <span class="name">${attrs.friendly_name ?? this.config.entity}</span>
            <div class="title">
              ${isOff ? "Player is off" : (attrs.media_title ?? "Nothing playing")}
            </div>
            <div class="artist">
              ${isOff ? "Turn on the player to start music" : (attrs.media_artist ?? attrs.media_album_name ?? "Select music in Music Assistant")}
            </div>
          </div>
          <button
            class="power ${isOff ? "" : "active"}"
            @click=${() => this.call(isOff ? "turn_on" : "turn_off")}
            aria-label=${isOff ? "Turn on" : "Turn off"}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="timeline">
            <span>${formatTime(position)}</span>
            <ha-slider
              id="position-slider"
              min="0"
              max=${duration || 0}
              .value=${position}
              style=${`--position-slider-progress: ${positionProgress}%;`}
              ?disabled=${!duration}
              @value-changed=${(event: Event) => this.call("media_seek", { seek_position: this.sliderValue(event) })}
              aria-label="Playback position"
            ></ha-slider>
            <span>${formatTime(duration)}</span>
          </div>
          <div class="controls">
            <button
              class=${attrs.shuffle ? "active" : ""}
              @click=${() => this.call("shuffle_set", { shuffle: !attrs.shuffle })}
              aria-label="Shuffle"
            >
              <ha-icon icon="mdi:shuffle"></ha-icon>
            </button>
            <button @click=${() => this.call("media_previous_track")} aria-label="Previous track">
              <ha-icon icon="mdi:skip-previous"></ha-icon>
            </button>
            <button
              class="primary"
              @click=${() => this.call("media_play_pause")}
              aria-label=${isPlaying ? "Pause" : "Play"}
            >
              <ha-icon icon=${isPlaying ? "mdi:pause" : "mdi:play"}></ha-icon>
            </button>
            <button @click=${() => this.call("media_next_track")} aria-label="Next track">
              <ha-icon icon="mdi:skip-next"></ha-icon>
            </button>
            <button
              class=${attrs.repeat && attrs.repeat !== "off" ? "active" : ""}
              @click=${() => this.call("repeat_set", { repeat: attrs.repeat === "all" ? "one" : attrs.repeat === "one" ? "off" : "all" })}
              aria-label="Repeat"
            >
              <ha-icon icon=${attrs.repeat === "one" ? "mdi:repeat-once" : "mdi:repeat"}></ha-icon>
            </button>
          </div>
          <div class="volume">
            <button
              @click=${() => this.call("volume_mute", { is_volume_muted: !attrs.is_volume_muted })}
              aria-label="Mute"
            >
              <ha-icon
                icon=${attrs.is_volume_muted ? "mdi:volume-off" : "mdi:volume-high"}
              ></ha-icon>
            </button>
            <ha-slider
              min="0"
              max="100"
              .value=${volume}
              @value-changed=${(event: Event) => this.call("volume_set", { volume_level: this.sliderValue(event) / 100 })}
              aria-label="Volume"
            ></ha-slider>
          </div>
        </section>
        ${
          this.config.show_queue === false
            ? nothing
            : html` <aside class="queue">
                <div class="queue-heading">
                  <span
                    >${fullQueue ? (this.showPreviousQueueItems ? "Queue history" : "Up next") : "Up next"}</span
                  >
                  <div class="queue-heading-actions">
                    ${fullQueue ? html`<span class="queue-count">${visibleQueue!.length} tracks</span><button class="queue-toggle ${this.showPreviousQueueItems ? "active" : ""}" @click=${this.toggleQueueDirection} aria-pressed=${String(this.showPreviousQueueItems)} aria-label=${this.showPreviousQueueItems ? "Show next tracks" : "Show previous tracks"}>${this.showPreviousQueueItems ? "Next tracks" : "Previous tracks"}</button>` : this.queue ? html`<span class="queue-count">${this.queue.items} in queue</span>` : nothing}
                  </div>
                </div>
                ${
                  visibleQueue
                    ? html`
                          <div class="queue-list">
                            ${visibleQueue.map((item) => {
                              const isCurrent = Boolean(
                                item.media_content_id &&
                                item.media_content_id === attrs.media_content_id,
                              );
                              return html` <div
                            class="queue-row ${isCurrent ? "current" : ""}"
                            @click=${() => this.editQueue("play_queue_item", item.queue_item_id)}
                          >
                            <div class="queue-art">
                              ${this.queueImage(item) ? html`<img src=${this.queueImage(item)!} alt="" />` : html`<ha-icon icon="mdi:music-note"></ha-icon>`}
                            </div>
                            <div>
                              <div class="queue-title">${item.media_title}</div>
                              <div class="queue-meta">
                                <div class="queue-subtitle">
                                  ${item.media_artist ?? item.media_album_name ?? "Music Assistant"}
                                </div>
                                ${isCurrent ? html`<span class="waveform ${isPlaying ? "playing" : ""}" aria-label=${isPlaying ? "Playing" : "Paused"}>${[".35rem", ".8rem", ".5rem", ".7rem"].map((height, index) => html`<span style=${`--wave-height:${height};--wave-delay:${index * 120}ms`}></span>`)}</span>` : nothing}
                              </div>
                            </div>
                            <div
                              class="queue-actions"
                              @click=${(event: Event) => event.stopPropagation()}
                            >
                              <button
                                @click=${() => this.editQueue("move_queue_item_up", item.queue_item_id)}
                                aria-label="Move up"
                              >
                                <ha-icon icon="mdi:chevron-up"></ha-icon>
                              </button>
                              <button
                                @click=${() => this.editQueue("move_queue_item_down", item.queue_item_id)}
                                aria-label="Move down"
                              >
                                <ha-icon icon="mdi:chevron-down"></ha-icon>
                              </button>
                              <button
                                @click=${() => this.editQueue("move_queue_item_next", item.queue_item_id)}
                                aria-label="Play next"
                              >
                                <ha-icon icon="mdi:skip-next"></ha-icon>
                              </button>
                              <button
                                @click=${() => this.editQueue("remove_queue_item", item.queue_item_id)}
                                aria-label="Remove from queue"
                              >
                                <ha-icon icon="mdi:close"></ha-icon>
                              </button>
                            </div>
                          </div>`;
                            })}
                          </div>
                        `
                    : html` <div class="next">
                            ${
                              queueItem
                                ? html` <span class="next-label"
                                  >Next from ${this.queue?.name ?? "queue"}</span
                                >
                                <div class="queue-item">
                                  <div class="queue-art">
                                    ${media?.image ? html`<img src=${media.image} alt="" />` : html`<ha-icon icon="mdi:music-note"></ha-icon>`}
                                  </div>
                                  <div>
                                    <div class="queue-title">${media?.name ?? queueItem.name}</div>
                                    <div class="queue-subtitle">${artist ?? "Music Assistant"}</div>
                                  </div>
                                </div>`
                                : html`<div class="empty">
                                ${this.queue ? "No track queued next" : "Queue unavailable"}
                              </div>`
                            }
                          </div>
                          <div class="queue-footer">
                            Install mass_queue for the full editable queue.
                          </div>`
                }
              </aside>`
        }
      </div>
    </ha-card>`;
  }
}

customElements.define("wide-media-card", MusicAssistantMediaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "wide-media-card",
  name: "Wide Media Card",
  description: "Responsive landscape media player controls and Music Assistant queue context.",
});

declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string }>;
  }
}

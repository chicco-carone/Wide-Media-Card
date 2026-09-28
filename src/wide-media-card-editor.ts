import { LitElement, css, html } from "lit";
import type { CardConfig, HassEntity, HomeAssistant } from "./types";

class MusicAssistantMediaCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
  };

  declare hass?: HomeAssistant;
  declare private config?: CardConfig;

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    .editor {
      display: grid;
      gap: 1rem;
      padding: 1rem;
    }
    label {
      display: grid;
      gap: 0.35rem;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
    select,
    input[type="number"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 2.5rem;
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 8px);
      padding: 0 0.75rem;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      font: inherit;
    }
    .toggle {
      grid-template-columns: 1fr auto;
      align-items: center;
      min-height: 2.5rem;
    }
    .hint {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      line-height: 1.35;
    }
  `;

  setConfig(config: CardConfig): void {
    this.config = config;
  }

  private updateConfig(update: Partial<CardConfig>): void {
    const config = { ...this.config, ...update } as CardConfig;
    this.config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get mediaPlayers(): Array<[string, HassEntity]> {
    if (!this.hass) return [];
    return Object.entries(this.hass.states)
      .filter(([entityId]) => entityId.startsWith("media_player."))
      .sort(([first], [second]) => first.localeCompare(second));
  }

  render() {
    const config = this.config ?? { entity: "" };
    return html` <div class="editor">
      <label>
        Music Assistant player
        <select
          .value=${config.entity}
          @change=${(event: Event) => this.updateConfig({ entity: (event.target as HTMLSelectElement).value })}
        >
          <option value="" disabled>Select a media player</option>
          ${this.mediaPlayers.map(([entityId, state]) => html`<option value=${entityId}>${state.attributes.friendly_name ?? entityId}</option>`)}
        </select>
      </label>
      <label class="toggle">
        <span>Show queue</span>
        <input
          type="checkbox"
          .checked=${config.show_queue !== false}
          @change=${(event: Event) => this.updateConfig({ show_queue: (event.target as HTMLInputElement).checked })}
        />
      </label>
      <label>
        Queue items to load
        <input
          type="number"
          min="1"
          max="500"
          step="1"
          .value=${String(config.queue_limit ?? 100)}
          @change=${(event: Event) => this.updateConfig({ queue_limit: Math.max(1, Number((event.target as HTMLInputElement).value) || 100) })}
        />
        <span class="hint">Maximum number of full queue entries requested from mass_queue.</span>
      </label>
      <label>
        Queue items visible before scrolling
        <input
          type="number"
          min="1"
          max="50"
          step="1"
          .value=${String(config.queue_visible_items ?? 7)}
          @change=${(event: Event) => this.updateConfig({ queue_visible_items: Math.max(1, Number((event.target as HTMLInputElement).value) || 7) })}
        />
        <span class="hint"
          >Additional loaded items remain available by scrolling the queue panel.</span
        >
      </label>
    </div>`;
  }
}

customElements.define("wide-media-card-editor", MusicAssistantMediaCardEditor);

import { afterEach, expect, test } from "bun:test";
import { Window } from "happy-dom";

const window = new Window();
for (const name of [
  "window",
  "document",
  "customElements",
  "HTMLElement",
  "Document",
  "CSSStyleSheet",
  "ShadowRoot",
  "ResizeObserver",
  "Event",
  "CustomEvent",
]) {
  globalThis[name] = name === "window" ? window : window[name];
}

// Model ha-slider's property notifications separately from committed user changes.
window.customElements.define(
  "ha-slider",
  class extends window.HTMLElement {
    get value() {
      return this._value;
    }

    set value(value) {
      this._value = value;
      this.dispatchEvent(new CustomEvent("value-changed", { detail: { value } }));
    }
  },
);

await import("../src/wide-media-card.ts");

afterEach(() => {
  document.body.replaceChildren();
});

async function createCard() {
  const calls = [];
  const card = document.createElement("wide-media-card");
  card.setConfig({ entity: "media_player.test", show_queue: false });
  card.hass = {
    states: {
      "media_player.test": {
        state: "paused",
        attributes: { volume_level: 0.35, media_duration: 240, media_position: 20 },
        last_changed: "2026-01-01T00:00:00Z",
        last_updated: "2026-01-01T00:00:00Z",
      },
    },
    callService: async (...args) => calls.push(args),
  };
  document.body.append(card);
  await card.updateComplete;
  return { card, calls, slider: card.shadowRoot.querySelector('[aria-label="Volume"]') };
}

test("rendering and external volume updates do not send commands", async () => {
  const { card, calls, slider } = await createCard();
  expect(slider.value).toBe(35);
  card.hass = {
    ...card.hass,
    states: {
      "media_player.test": {
        ...card.hass.states["media_player.test"],
        attributes: { volume_level: 0.6 },
      },
    },
  };
  await card.updateComplete;
  expect(slider.value).toBe(60);
  expect(calls).toEqual([]);
});

for (const value of [0, 47, 100]) {
  test(`committing volume ${value} sends the normalized slider value`, async () => {
    const { calls, slider } = await createCard();
    slider.value = value;
    slider.dispatchEvent(new Event("change", { bubbles: true }));
    expect(calls).toEqual([
      [
        "media_player",
        "volume_set",
        { volume_level: value / 100 },
        { entity_id: "media_player.test" },
      ],
    ]);
  });
}

test("drag input waits for the committed change", async () => {
  const { calls, slider } = await createCard();
  for (const value of [40, 50, 60]) {
    slider.value = value;
    slider.dispatchEvent(new Event("input", { bubbles: true }));
  }
  expect(calls).toEqual([]);
  slider.dispatchEvent(new Event("change", { bubbles: true }));
  expect(calls).toHaveLength(1);
  expect(calls[0][2]).toEqual({ volume_level: 0.6 });
});

test("playback seeking reads the committed value in seconds", async () => {
  const { card, calls } = await createCard();
  const slider = card.shadowRoot.querySelector("#position-slider");
  slider.value = 125;
  slider.dispatchEvent(new Event("change", { bubbles: true }));
  expect(calls).toEqual([
    ["media_player", "media_seek", { seek_position: 125 }, { entity_id: "media_player.test" }],
  ]);
});

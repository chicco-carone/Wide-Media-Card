# Wide Media Card

A responsive landscape touchscreen card for Music Assistant media players in Home Assistant. The layout follows the supplied reference: now-playing controls on the left and queue context on the right.

## Install

### HACS

Add this repository to HACS as a custom repository with the **Dashboard** category, then install **Wide Media Card**. Releases provide the built JavaScript bundle, so install a published release in HACS. Add the installed resource to your dashboard if Home Assistant does not add it automatically.

**Requirement:** install the [mass_queue integration](https://github.com/droans/mass_queue) through HACS to enable full queue browsing and editing, including previous tracks. Without it, the card shows limited queue information using Music Assistant's built-in services.

### Manual

Run `bun install` and `bun run build`, then copy the generated `wide-media-card.js` into your Home Assistant `www` directory and add `/local/wide-media-card.js` as a dashboard resource with type `JavaScript module`.

To publish a release, push a version tag such as `v0.1.0`. GitHub Actions builds the card and attaches `wide-media-card.js` to the release for HACS to install.

## Development

Run `bun install`, `bun run build`, and `bun run dev`. The card is served and rebuilt on each request at `http://<this-machine-ip>:5173/wide-media-card.js`.

Add that URL as a temporary Home Assistant dashboard resource with type `JavaScript module`. The server includes the required CORS header and disables caching, so refresh the dashboard after each source change.

## Dashboard configuration

```yaml
type: custom:wide-media-card
entity: media_player.living_room
show_queue: true
queue_limit: 100
queue_visible_items: 7
```

`entity` is required. Set `show_queue: false` for a compact now-playing-only card. `queue_limit` defaults to `100` and limits the number of entries loaded when [mass_queue](https://github.com/droans/mass_queue) is installed. `queue_visible_items` defaults to `7`; remaining loaded entries are available by scrolling the queue panel. When mass_queue is available, the queue header includes a Previous tracks/Next tracks toggle; it always starts on upcoming tracks.

The same options are available in Home Assistant's visual card editor.

## Material You Theme

The card uses Home Assistant's `ha-slider`, not native browser range inputs. When [Material You Theme](https://github.com/Nerwyn/material-you-theme) and its Material You Utilities companion module are present, the position slider is automatically recognized as its media slider and receives the themed wavy progress treatment. No card setting is required.

The card fills the height allocated by a Sections dashboard tile. Its artwork, controls, and queue panel scale with that tile. It is designed for landscape displays and collapses to the player view on narrow screens.

## Queue support

When [mass_queue](https://github.com/droans/mass_queue) is installed, the card uses its `get_queue_items` action to display the full queue. Tap an item to play it, or use its controls to move it up/down, make it play next, or remove it.

When mass_queue is not available, the card automatically uses the official `music_assistant.get_queue` service. That fallback shows the next item and total queue count, which are the queue details available from the official integration.

All visual colors use Home Assistant theme CSS variables. No color values need to be changed to match a theme.

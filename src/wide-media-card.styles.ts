import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    height: 100%;
    min-height: 250px;
  }
  ha-card {
    height: 100%;
    min-height: 250px;
    overflow: hidden;
    color: var(--primary-text-color);
    background: var(--ha-card-background, var(--card-background-color));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  .shell {
    height: 100%;
    min-height: 250px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 1.04fr);
  }
  .player {
    position: relative;
    min-width: 0;
    padding: clamp(0.75rem, 1.6vw, 1.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.55rem, 1vw, 0.8rem);
  }
  .artwork {
    flex: none;
    width: var(--cover-size);
    height: var(--cover-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    background: var(--secondary-background-color);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  .artwork img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .artwork ha-icon {
    display: block;
    width: 44%;
    height: 44%;
    translate: 0 1px;
    color: var(--secondary-text-color);
  }
  .identity {
    width: 100%;
    min-width: 0;
    text-align: center;
  }
  .name {
    display: block;
    color: var(--secondary-text-color);
    font-size: clamp(0.76rem, 1.4vw, 0.95rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title {
    margin-top: 0.18rem;
    font-size: clamp(1.05rem, 2.2vw, 1.55rem);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .artist {
    margin-top: 0.18rem;
    color: var(--secondary-text-color);
    font-size: clamp(0.86rem, 1.7vw, 1.08rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .power {
    position: absolute;
    top: clamp(0.75rem, 1.6vw, 1.5rem);
    right: clamp(0.75rem, 1.6vw, 1.5rem);
  }
  .timeline {
    width: 100%;
    margin-top: auto;
    display: grid;
    grid-template-columns: auto minmax(5rem, 1fr) auto;
    align-items: center;
    gap: 0.65rem;
    font-variant-numeric: tabular-nums;
    font-size: 0.82rem;
    color: var(--secondary-text-color);
  }
  ha-slider {
    width: 100%;
    --ha-slider-track-size: 6px;
  }
  ha-slider#position-slider {
    --ha-slider-track-size: 4px;
    --ha-slider-track-color: linear-gradient(
      to right,
      transparent var(--position-slider-progress),
      var(--slider-track-color, var(--ha-progress-bar-track-color))
        var(--position-slider-progress)
    );
  }
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.25rem, 1.1vw, 0.75rem);
  }
  button {
    width: 2.65rem;
    height: 2.65rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    display: inline-grid;
    place-items: center;
    color: var(--primary-text-color);
    background: transparent;
    cursor: pointer;
  }
  button:hover {
    background: var(--secondary-background-color);
  }
  button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  button ha-icon {
    width: 1.45rem;
    height: 1.45rem;
  }
  .primary {
    width: 3.7rem;
    height: 3.7rem;
    background: var(--primary-color);
    color: var(--text-primary-color, var(--primary-text-color));
  }
  .primary:hover {
    background: var(--primary-color);
    filter: brightness(1.08);
  }
  .active {
    color: var(--primary-color);
  }
  .volume {
    width: 100%;
    display: grid;
    grid-template-columns: auto minmax(5rem, 1fr);
    gap: 0.55rem;
    align-items: center;
  }
  .volume button {
    width: 2.2rem;
    height: 2.2rem;
  }
  .volume button ha-icon {
    width: 1.3rem;
    height: 1.3rem;
  }
  .queue {
    border-left: 1px solid var(--divider-color);
    min-width: 0;
    padding: clamp(0.75rem, 1.6vw, 1.5rem);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 0.8rem;
  }
  .queue-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: var(--secondary-text-color);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .queue-heading-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }
  .queue-count {
    letter-spacing: 0;
    text-transform: none;
    font-weight: 400;
  }
  .queue-toggle {
    width: auto;
    height: 1.9rem;
    border-radius: var(--ha-card-border-radius, 8px);
    padding: 0 0.55rem;
    color: var(--secondary-text-color);
    font: inherit;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    white-space: nowrap;
  }
  .queue-toggle.active {
    color: var(--primary-color);
    background: var(--secondary-background-color);
  }
  .next {
    min-height: 0;
    display: grid;
    align-content: center;
    gap: 0.75rem;
  }
  .next-label {
    color: var(--secondary-text-color);
    font-size: 0.8rem;
  }
  .queue-item {
    min-width: 0;
    display: grid;
    grid-template-columns: 3.8rem minmax(0, 1fr);
    gap: 0.85rem;
    align-items: center;
  }
  .queue-art {
    width: 3.8rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(var(--ha-card-border-radius, 12px) / 1.8);
    overflow: hidden;
    background: var(--secondary-background-color);
  }
  .queue-art img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .queue-art ha-icon {
    display: block;
    flex: none;
    width: 45%;
    height: 45%;
    color: var(--secondary-text-color);
  }
  .queue-title,
  .queue-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .queue-title {
    font-size: clamp(0.95rem, 1.75vw, 1.15rem);
  }
  .queue-subtitle {
    margin-top: 0.2rem;
    color: var(--secondary-text-color);
    font-size: 0.9rem;
  }
  .empty {
    color: var(--secondary-text-color);
    font-size: 0.95rem;
  }
  .queue-footer {
    padding-top: 1rem;
    border-top: 1px solid var(--divider-color);
    color: var(--secondary-text-color);
    font-size: 0.86rem;
  }
  .queue-list {
    min-height: 0;
    max-height: calc(var(--queue-visible-items, 7) * 3.5rem);
    overflow: auto;
    display: grid;
    align-content: start;
    gap: 0.35rem;
    padding-right: 0.2rem;
  }
  .queue-row {
    min-width: 0;
    display: grid;
    grid-template-columns: 2.8rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.65rem;
    border-radius: calc(var(--ha-card-border-radius, 12px) / 1.8);
    padding: 0.35rem;
    cursor: pointer;
  }
  .queue-row:hover {
    background: var(--secondary-background-color);
  }
  .queue-row.current {
    background: var(--secondary-background-color);
    box-shadow: inset 3px 0 0 var(--primary-color);
  }
  .queue-row .queue-art {
    width: 2.8rem;
    height: 2.8rem;
  }
  .queue-row .queue-title {
    font-size: 0.94rem;
  }
  .queue-row .queue-subtitle {
    font-size: 0.8rem;
  }
  .queue-row.current .queue-title {
    color: var(--primary-color);
    font-weight: 600;
  }
  .queue-meta {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .waveform {
    height: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    color: var(--primary-color);
  }
  .waveform span {
    width: 2px;
    height: var(--wave-height);
    border-radius: var(--ha-card-border-radius, 12px);
    background: currentColor;
    animation: queue-wave 700ms ease-in-out infinite alternate;
    animation-delay: var(--wave-delay);
    animation-play-state: paused;
  }
  .waveform.playing span {
    animation-play-state: running;
  }
  @keyframes queue-wave {
    from {
      transform: scaleY(0.45);
    }
    to {
      transform: scaleY(1);
    }
  }
  .queue-actions {
    display: flex;
    align-items: center;
    gap: 0.05rem;
  }
  .queue-actions button {
    width: 1.75rem;
    height: 1.75rem;
    color: var(--secondary-text-color);
  }
  .queue-actions button:hover {
    color: var(--primary-text-color);
  }
  .queue-actions button ha-icon {
    width: 1.05rem;
    height: 1.05rem;
  }
  @media (max-width: 700px) {
    .shell {
      grid-template-columns: 1fr;
    }
    .queue {
      display: none;
    }
  }
  @media (max-height: 390px) {
    :host,
    ha-card,
    .shell {
      min-height: 220px;
    }
    .volume {
      display: none;
    }
  }
`;

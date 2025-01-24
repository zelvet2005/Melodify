import "./ButtonsPanel.css";

export default function ButtonsPanel() {
  return (
    <div role="buttons-panel" className="buttons-panel">
      <button>
        <img src="/images/previous.svg" alt="previous" />
      </button>
      <button>
        <img src="/images/random.svg" alt="random" />
      </button>
      <button>
        <img src="/images/play.svg" alt="play or stop" />
      </button>
      <button>
        <img src="/images/repeat.svg" alt="repeat" />
      </button>
      <button>
        <img src="/images/next.svg" alt="next" />
      </button>
    </div>
  );
}

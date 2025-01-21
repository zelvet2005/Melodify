import "./ManageButtons.css";

export default function ManageButtons() {
  return (
    <div role="manage-buttons" className="manage-buttons">
      <button>
        <img src="/images/previous.svg" alt="previous" draggable={false} />
      </button>
      <button>
        <img src="/images/random.svg" alt="random" draggable={false} />
      </button>
      <button>
        <img src="/images/repeat.svg" alt="repeat" draggable={false} />
      </button>
      <button>
        <img src="/images/next.svg" alt="next" draggable={false} />
      </button>
    </div>
  );
}

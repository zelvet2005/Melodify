import "./Search.css";

export default function Search() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Enter song name"
      />
      <button type="submit" className="search-btn">
        <img src="/images/search.svg" alt="search" draggable={false} />
      </button>
    </form>
  );
}

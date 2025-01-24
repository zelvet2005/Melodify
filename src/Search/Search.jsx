import "./Search.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Search({ allMusics, setSearchedMusics }) {
  const [songSubname, setSongSubname] = useState("");

  useEffect(() => {
    setSearchedMusics([]);
    setSongSubname("");
  }, [allMusics]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchedMusics(
      allMusics.filter((music) => music.name.includes(songSubname))
    );
  }

  return (
    <form className="search-form" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter song name"
        value={songSubname}
        onChange={(e) => setSongSubname(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <img src="/images/search.svg" alt="search" draggable={false} />
      </button>
    </form>
  );
}

Search.propTypes = {
  allMusics: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchedMusics: PropTypes.func.isRequired,
};

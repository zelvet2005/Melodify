import "./SongsList.css";
import PropTypes from "prop-types";
import Search from "../Search/Search";
import Song from "../Song/Song";
import { useState } from "react";

export default function SongsList({ musics }) {
  const [searchedMusics, setSearchedMusics] = useState([]);

  return (
    <section>
      <Search allMusics={musics} setSearchedMusics={setSearchedMusics} />
      <ul className="song-list">
        {searchedMusics.length === 0 &&
          musics.map((music) => (
            <li key={`searched ${music.name}`}>
              <Song music={music} />
            </li>
          ))}
        {searchedMusics.length > 0 &&
          searchedMusics.map((music) => (
            <li key={music.name}>
              <Song music={music} />
            </li>
          ))}
      </ul>
    </section>
  );
}

SongsList.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

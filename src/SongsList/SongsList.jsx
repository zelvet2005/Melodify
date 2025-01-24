import "./SongsList.css";
import PropTypes from "prop-types";
import Search from "../Search/Search";
import Song from "../Song/Song";
import { createContext, useState } from "react";

export const SongsListContext = createContext();

export default function SongsList({ musics }) {
  const [searchedMusics, setSearchedMusics] = useState([]);

  return (
    <SongsListContext.Provider value={musics}>
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
    </SongsListContext.Provider>
  );
}

SongsList.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

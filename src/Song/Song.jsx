import "./Song.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FavoriteMusicsContext } from "../App/App";
import { SongsListContext } from "../SongsList/SongsList";

export default function Song({ music }) {
  const { removeFavoriteMusic, addFavoriteMusic } = useContext(
    FavoriteMusicsContext
  );
  const musics = useContext(SongsListContext);
  const [isFavorite, setIsFavorite] = useState(music.isFavorite);

  function handleFavorite(e) {
    e.preventDefault();
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    if (newIsFavorite) {
      addFavoriteMusic(music);
    } else {
      removeFavoriteMusic(music);
    }
  }

  return (
    <Link to={`/player/${music.name}`} state={musics} className="song">
      <h2>{music.name}</h2>
      <button className="favorite-btn" onClick={(e) => handleFavorite(e)}>
        <img
          src={isFavorite ? "/images/full-like.svg" : "/images/empty-like.svg"}
          alt="favorite"
        />
      </button>
    </Link>
  );
}

Song.propTypes = {
  music: PropTypes.object.isRequired,
};

import "./Song.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FavoriteMusicsContext } from "../App/App";

export default function Song({ music }) {
  const { removeFavoriteMusic, addFavoriteMusic } = useContext(
    FavoriteMusicsContext
  );
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
    <Link to={"/player"} className="song">
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

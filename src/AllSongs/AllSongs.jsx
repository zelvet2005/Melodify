import "./AllSongs.css";
import Audio from "../Audio/Audio";
import PropTypes from "prop-types";

export default function AllSongs({ musics }) {
  return (
    <div role="musics" className="all-musics-container">
      <ul>
        {musics.map((src) => (
          <li key={src}>
            <Audio src={src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

AllSongs.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

import "./Songs.css";
import Audio from "../Audio/Audio";
import PropTypes from "prop-types";

export default function Songs({ musics }) {
  return (
    <section className="musics-container">
      <ul>
        {musics.map((music) => (
          <li key={music.src}>
            <Audio music={music} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Songs.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

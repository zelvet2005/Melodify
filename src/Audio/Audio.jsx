import classes from "./Audio.module.css";
import PropTypes from "prop-types";

export default function Audio({ src, name }) {
  const playStopSvgUrl = "/images/play.svg"; // "/images/stop.svg"
  const muteUnmuteSvgUrl = "/images/unmute.svg"; // /images/mute.svg
  const emptyFullLikeSvgUrl = "/images/empty-like.svg"; // "/images/full-like.svg"

  return (
    <div role="music-player" className={classes.container}>
      <button aria-label="play or stop">
        <img src={playStopSvgUrl} alt="" draggable={false} />
      </button>

      <div role="music-info" className={classes.info}>
        <h2>{name}</h2>
        <div role="duration" className={classes.duration}>
          <time aria-label="current">00:00</time>/
          <time aria-label="duration">00:00</time>
          <input type="range" className={classes.range} />
        </div>
      </div>

      <button aria-label="mute or unmute">
        <img src={muteUnmuteSvgUrl} alt="" draggable={false} />
      </button>

      <label htmlFor="favorite">
        <img src={emptyFullLikeSvgUrl} alt="" draggable={false} />
      </label>
      <input id="favorite" type="checkbox" style={{ display: "none" }} />

      <audio src={src}></audio>
    </div>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

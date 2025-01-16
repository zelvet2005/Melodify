import classes from "./Audio.module.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

export default function Audio({ src, name }) {
  const audio = useRef(null);

  const [isPlay, setIsPlay] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  function handlePlay() {
    const newIsPlay = !isPlay;
    setIsPlay(newIsPlay);
    if (newIsPlay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }
  function handleMute() {
    const newIsMute = !isMute;
    setIsMute(!isMute);
    if (newIsMute) {
      audio.current.muted = true;
    } else {
      audio.current.muted = false;
    }
  }
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div role="music-player" className={classes.container}>
      <audio src={src} ref={audio}></audio>

      <button aria-label="play or stop" onClick={handlePlay}>
        <img
          src={isPlay ? "/images/stop.svg" : "/images/play.svg"}
          alt=""
          draggable={false}
        />
      </button>

      <div role="music-info" className={classes.info}>
        <h2>{name}</h2>
        <div role="duration" className={classes.duration}>
          <time aria-label="current">00:00</time>/
          <time aria-label="duration">00:00</time>
          <input type="range" className={classes.range} />
        </div>
      </div>

      <button aria-label="mute or unmute" onClick={handleMute}>
        <img
          src={isMute ? "/images/mute.svg" : "/images/unmute.svg"}
          alt=""
          draggable={false}
        />
      </button>

      <label htmlFor="favorite" onClick={handleFavorite}>
        <img
          src={isFavorite ? "/images/full-like.svg" : "/images/empty-like.svg"}
          alt=""
          draggable={false}
        />
      </label>
      <input id="favorite" type="checkbox" style={{ display: "none" }} />
    </div>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

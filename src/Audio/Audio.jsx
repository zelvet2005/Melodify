import classes from "./Audio.module.css";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

export default function Audio({ src }) {
  const audio = useRef(null);

  const [isPlay, setIsPlay] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [timer, setTimer] = useState(null);

  function handlePlay() {
    const newIsPlay = !isPlay;
    setIsPlay(newIsPlay);
    if (newIsPlay) {
      setTimer(
        setInterval(() => {
          setCurrentTime(Math.round(audio.current.currentTime));
        }, 1000)
      );
      audio.current.play();
    } else {
      clearInterval(timer);
      setTimer(null);
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
  function handleRewind(e) {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audio.current.currentTime = newTime;
  }

  function getFormattedTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`
    }`;
  }
  function getSongNameFromSrc() {
    let from = 0;
    for (let i = src.length - 1; i > 0; i--) {
      if (src[i] === ".") {
        from = i;
        break;
      }
    }

    let to = 0;
    for (let j = from; j > 0; j--) {
      if (src[j] === "/") {
        to = j + 1;
        break;
      }
    }

    return src.slice(to, from);
  }

  return (
    <div role="music-player" className={classes.container}>
      <audio
        src={src}
        ref={audio}
        onLoadedMetadata={() => setDuration(audio.current.duration)}
      ></audio>

      <button aria-label="play or stop" onClick={handlePlay}>
        <img
          src={isPlay ? "/images/stop.svg" : "/images/play.svg"}
          alt=""
          draggable={false}
        />
      </button>

      <div role="music-info" className={classes.info}>
        <h2>{getSongNameFromSrc()}</h2>
        <div role="duration" className={classes.duration}>
          <time aria-label="current">{getFormattedTime(currentTime)}</time>/
          <time aria-label="duration">{getFormattedTime(duration)}</time>
          <input
            type="range"
            className={classes.range}
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => handleRewind(e)}
          />
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
};

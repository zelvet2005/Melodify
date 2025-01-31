import "./ButtonsPanel.css";
import PropTypes from "prop-types";

export default function ButtonsPanel({
  audio,
  timer,
  isPlay,
  isRepeatable,
  isRandom,
  setIsRandom,
  setIsRepeatable,
  setIsPlay,
  setTimer,
  setCurrentTime,
  nextSong,
  previousSong,
}) {
  const base = import.meta.env.BASE_URL;

  function handlePlay() {
    const newIsPlaying = !isPlay;
    setIsPlay(newIsPlaying);
    if (newIsPlaying) {
      playAudio();
    } else {
      stopAudio();
    }
  }
  function playAudio() {
    audio.current.play();
    setTimer(
      setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000)
    );
  }
  function stopAudio() {
    audio.current.pause();
    clearInterval(timer);
    setTimer(null);
  }

  return (
    <div role="buttons-panel" className="buttons-panel">
      <button
        onClick={() => {
          previousSong();
          setIsPlay(false);
          stopAudio();
        }}
      >
        <img
          src={`${base}/images/previous.svg`}
          alt="previous"
          draggable={false}
        />
      </button>
      <button
        style={{ filter: isRandom ? "brightness(1.4)" : "" }}
        onClick={() => {
          setIsRandom(!isRandom);
          setIsRepeatable(false);
        }}
      >
        <img src={`${base}/images/random.svg`} alt="random" draggable={false} />
      </button>
      <button onClick={handlePlay}>
        <img
          src={isPlay ? `${base}/images/stop.svg` : `${base}/images/play.svg`}
          alt="play or stop"
          draggable={false}
        />
      </button>
      <button
        style={{ filter: isRepeatable ? "brightness(1.4)" : "" }}
        onClick={() => {
          setIsRepeatable(!isRepeatable);
          setIsRandom(false);
        }}
      >
        <img src={`${base}/images/repeat.svg`} alt="repeat" draggable={false} />
      </button>
      <button
        onClick={() => {
          nextSong();
          setIsPlay(false);
          stopAudio();
        }}
      >
        <img src={`${base}/images/next.svg`} alt="next" draggable={false} />
      </button>
    </div>
  );
}

ButtonsPanel.propTypes = {
  audio: PropTypes.object.isRequired,
  timer: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  isRepeatable: PropTypes.bool.isRequired,
  isRandom: PropTypes.bool.isRequired,
  setIsRandom: PropTypes.func.isRequired,
  setIsRepeatable: PropTypes.func.isRequired,
  setIsPlay: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  setCurrentTime: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  previousSong: PropTypes.func.isRequired,
};

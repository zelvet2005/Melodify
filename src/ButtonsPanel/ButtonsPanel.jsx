import "./ButtonsPanel.css";
import PropTypes from "prop-types";

export default function ButtonsPanel({
  audio,
  timer,
  isPlay,
  setIsPlay,
  setTimer,
  setCurrentTime,
  nextSong,
  previousSong,
}) {
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
        <img src="/images/previous.svg" alt="previous" draggable={false} />
      </button>
      <button>
        <img src="/images/random.svg" alt="random" draggable={false} />
      </button>
      <button onClick={handlePlay}>
        <img
          src={isPlay ? "/images/stop.svg" : "/images/play.svg"}
          alt="play or stop"
          draggable={false}
        />
      </button>
      <button>
        <img src="/images/repeat.svg" alt="repeat" draggable={false} />
      </button>
      <button
        onClick={() => {
          nextSong();
          setIsPlay(false);
          stopAudio();
        }}
      >
        <img src="/images/next.svg" alt="next" draggable={false} />
      </button>
    </div>
  );
}

ButtonsPanel.propTypes = {
  audio: PropTypes.object.isRequired,
  timer: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  setIsPlay: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  setCurrentTime: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  previousSong: PropTypes.func.isRequired,
};

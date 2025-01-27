import { useLocation, useParams } from "react-router-dom";
import "./Player.css";
import ButtonsPanel from "../ButtonsPanel/ButtonsPanel";
import { useEffect, useRef, useState } from "react";

export default function Player() {
  const location = useLocation();
  const musics = location.state;
  const { name } = useParams();
  const audioElement = useRef();

  const [currentMusicIndex, setCurrentMusicIndex] = useState(
    musics.findIndex((music) => music.name === name)
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(-1);
  const [timer, setTimer] = useState(null);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (currentTime === Math.floor(duration)) {
      nextSong();
      clearInterval(timer);
      setTimer(null);
      setIsPlay(false);
    }
  }, [currentTime]);

  function handleRewind(e) {
    const newTime = e.target.value;
    setCurrentTime(+newTime);
    audioElement.current.currentTime = newTime;
  }
  function nextSong() {
    setCurrentMusicIndex(
      currentMusicIndex === musics.length - 1 ? 0 : currentMusicIndex + 1
    );
    setCurrentTime(0);
  }
  function previousSong() {
    setCurrentMusicIndex(
      currentMusicIndex === 0 ? musics.length - 1 : currentMusicIndex - 1
    );
    setCurrentTime(0);
  }
  function getFormattedTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`
    }`;
  }

  return (
    <section className="player-container">
      <audio
        src={musics[currentMusicIndex].src}
        ref={audioElement}
        onLoadedMetadata={() => setDuration(audioElement.current.duration)}
      ></audio>
      <img
        src="/images/record.svg"
        alt=""
        className="record-img"
        draggable={false}
      />
      <h3 className="song-name">{musics[currentMusicIndex].name}</h3>
      <input
        type="range"
        className="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => handleRewind(e)}
      />
      <div role="time-block" className="time-block">
        <time>{getFormattedTime(currentTime)}</time>
        <time>{getFormattedTime(duration)}</time>
      </div>
      <ButtonsPanel
        audio={audioElement}
        timer={timer}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        setTimer={setTimer}
        setCurrentTime={setCurrentTime}
        nextSong={nextSong}
        previousSong={previousSong}
      />
    </section>
  );
}

import { useLocation, useParams } from "react-router-dom";
import "./Player.css";
import ButtonsPanel from "../ButtonsPanel/ButtonsPanel";
import { useEffect, useRef, useState } from "react";

export default function Player() {
  const location = useLocation();
  const musics = location.state;
  const { name } = useParams();
  const audioElement = useRef();
  const recordImgElement = useRef();

  const [currentMusicIndex, setCurrentMusicIndex] = useState(
    musics.findIndex((music) => music.name === name)
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(-1);
  const [timer, setTimer] = useState(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isRepeatable, setIsRepeatable] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [animAngle, setAnimAngle] = useState(10);

  useEffect(() => {
    if (currentTime === Math.floor(duration)) {
      clearInterval(timer);
      setTimer(null);
      if (isRepeatable) {
        setCurrentTime(0);
        audioElement.current.currentTime = 0;
        audioElement.current.play();
        setTimer(
          setInterval(() => {
            setCurrentTime((prev) => prev + 1);
          }, 1000)
        );
      } else if (isRandom) {
        randomSong();
        setIsPlay(false);
      } else {
        nextSong();
        setIsPlay(false);
      }
    }
    if (isPlay) {
      recordImgElement.current.style.transform = `rotate(${animAngle}deg)`;
      setAnimAngle(animAngle + 10);
    }
  }, [currentTime]);

  function handleRewind(e) {
    const newTime = e.target.value;
    setCurrentTime(+newTime);
    audioElement.current.currentTime = newTime;
  }
  function randomSong() {
    const newIndex = getRandomIndex();
    setCurrentMusicIndex(newIndex);
    setCurrentTime(0);
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
  function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * musics.length);
    return randomIndex === currentMusicIndex
      ? currentMusicIndex === musics.length - 1
        ? 0
        : currentMusicIndex + 1
      : randomIndex;
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
        src={`${import.meta.env.BASE_URL}/images/record.svg`}
        alt=""
        className="record-img"
        draggable={false}
        ref={recordImgElement}
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
        isRepeatable={isRepeatable}
        isRandom={isRandom}
        setIsRandom={setIsRandom}
        setIsRepeatable={setIsRepeatable}
        setIsPlay={setIsPlay}
        setTimer={setTimer}
        setCurrentTime={setCurrentTime}
        nextSong={nextSong}
        previousSong={previousSong}
      />
    </section>
  );
}

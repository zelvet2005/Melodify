import { useLocation, useParams } from "react-router-dom";
import "./Player.css";
import ButtonsPanel from "../ButtonsPanel/ButtonsPanel";

export default function Player() {
  const location = useLocation();
  const musics = location.state;
  const { name } = useParams();

  return (
    <section className="player-container">
      <img src="/images/record.svg" alt="" className="record-img" />
      <h3 className="song-name">{name}</h3>
      <input type="range" className="range" />
      <div role="time-block" className="time-block">
        <time>00:00</time>
        <time>03:23</time>
      </div>
      <ButtonsPanel />
    </section>
  );
}

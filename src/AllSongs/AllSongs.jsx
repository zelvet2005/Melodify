import "./AllSongs.css";
import Audio from "../Audio/Audio";

export default function AllSongs() {
  return (
    <section>
      <div role="musics">
        <ul>
          <li>
            <Audio src={"/music/Back In Black.mp3"} />
            <Audio src={"/music/Eruption - One Way Ticket.mp3"} />
          </li>
        </ul>
      </div>
    </section>
  );
}

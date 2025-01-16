import "./AllSongs.css";
import Audio from "../Audio/Audio";

export default function AllSongs() {
  return (
    <section>
      <div role="musics">
        <ul>
          <li>
            <Audio src={"/music/Back In Black.mp3"} name={"Back In Black"} />
            <Audio
              src={"/music/Eruption - One Way Ticket.mp3"}
              name={"Eruption - One Way Ticket"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

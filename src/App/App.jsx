import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";
import AllSongs from "../AllSongs/AllSongs";
import Search from "../Search/Search";
import ManageButtons from "../ManageButtons/ManageButtons";

const allMusics = [
  "/music/Back In Black.mp3",
  "/music/Eruption - One Way Ticket.mp3",
  "/music/PSY - GANGNAM STYLE(강남스타일) MV.mp3",
  "/music/Shocking Blue - Venus.mp3",
  "/music/The Weeknd - Blinding Lights.mp3",
];

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Search />
        <ManageButtons />
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route path="/all" element={<AllSongs musics={allMusics} />} />
          <Route path="/favorite" element={<FavoriteSongs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

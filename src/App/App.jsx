import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";
import AllSongs from "../AllSongs/AllSongs";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/all" element={<AllSongs />} />
          <Route path="/favorite" element={<FavoriteSongs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

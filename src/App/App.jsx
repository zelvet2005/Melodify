import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";
import AllSongs from "../AllSongs/AllSongs";
import Search from "../Search/Search";
import ManageButtons from "../ManageButtons/ManageButtons";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Search />
        <ManageButtons />
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route path="/all" element={<AllSongs />} />
          <Route path="/favorite" element={<FavoriteSongs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

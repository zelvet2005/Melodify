import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Songs from "../AllSongs/Songs";
import Search from "../Search/Search";
import ManageButtons from "../ManageButtons/ManageButtons";
import { getMusics, saveMusics } from "../services";
import { createContext, useEffect, useState } from "react";

export const ManageFavoriteSongsContext = createContext();

const allMusics = getMusics();

export default function App() {
  const [favoriteSongs, setFavoriteSongs] = useState(
    allMusics.filter((music) => music.isFavorite)
  );

  useEffect(() => saveMusics(allMusics), [favoriteSongs]);

  function addToFavorite(music) {
    setFavoriteSongs([...favoriteSongs, music]);
  }
  function removeFromFavorite(deletedMusic) {
    setFavoriteSongs(favoriteSongs.filter((music) => music !== deletedMusic));
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Search />
        <ManageButtons />
        <ManageFavoriteSongsContext.Provider
          value={{ addToFavorite, removeFromFavorite }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/all" />} />
            <Route path="/all" element={<Songs musics={allMusics} />} />
            <Route
              path="/favorite"
              element={<Songs musics={favoriteSongs} />}
            />
          </Routes>
        </ManageFavoriteSongsContext.Provider>
      </main>
    </BrowserRouter>
  );
}

import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { getMusics, saveMusics } from "../services";
import Header from "../Header/Header";
import SongsList from "../SongsList/SongsList";
import { createContext, useEffect, useState } from "react";

export const FavoriteMusicsContext = createContext();

const allMusics = getMusics();

export default function App() {
  const [favoriteMusics, setFavoriteMusics] = useState(
    allMusics.filter((music) => music.isFavorite)
  );

  useEffect(() => saveMusics(allMusics), [favoriteMusics]);

  function removeFavoriteMusic(music) {
    setFavoriteMusics(
      favoriteMusics.filter((favoriteMusic) => favoriteMusic !== music)
    );
    music.isFavorite = false;
  }
  function addFavoriteMusic(music) {
    setFavoriteMusics([...favoriteMusics, music]);
    music.isFavorite = true;
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <FavoriteMusicsContext.Provider
          value={{ removeFavoriteMusic, addFavoriteMusic }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/all" />} />
            <Route path="/all" element={<SongsList musics={allMusics} />} />
            <Route
              path="/favorite"
              element={<SongsList musics={favoriteMusics} />}
            />
          </Routes>
        </FavoriteMusicsContext.Provider>
      </main>
    </BrowserRouter>
  );
}

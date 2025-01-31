import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { getMusics, saveMusics } from "../services";
import Header from "../Header/Header";
import SongsList from "../SongsList/SongsList";
import { createContext, useEffect, useState } from "react";
import Player from "../Player/Player";

export const FavoriteMusicsContext = createContext();

const allMusics = getMusics();

export default function App() {
  const base = import.meta.env.BASE_URL;
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
            <Route path={`${base}`} element={<Navigate to={`${base}all`} />} />
            <Route
              path={`${base}all`}
              element={<SongsList musics={allMusics} />}
            />
            <Route
              path={`${base}favorite`}
              element={<SongsList musics={favoriteMusics} />}
            />
            <Route path={`${base}player/:name`} element={<Player />} />
          </Routes>
        </FavoriteMusicsContext.Provider>
      </main>
    </BrowserRouter>
  );
}

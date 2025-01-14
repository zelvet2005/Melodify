import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/all" />
          <Route path="/favorite" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

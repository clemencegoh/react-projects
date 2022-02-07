import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToePage from "pages/tic-tac-toe/TicTacToePage";
import WordlePage from "pages/wordle/WordlePage";

const baseUrl = process.env.PUBLIC_URL;
const paths = {
  home: `/${baseUrl}`,
  tictactoe: `/${baseUrl}/games/tictactoe`,
  wordle: `/${baseUrl}/games/wordle`,
};

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to={paths.home}>Home</Link>
        <br />
        <Link to={paths.tictactoe}>Tic tac toe</Link>
        <br />
        <Link to={paths.wordle}>Wordle</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.tictactoe} element={<TicTacToePage />} />
        <Route path={paths.wordle} element={<WordlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

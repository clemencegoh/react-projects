import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToePage from "pages/tic-tac-toe/TicTacToePage";
import WordlePage from "pages/wordle/WordlePage";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/games/tictactoe">Tic tac toe</Link>
        <br />
        <Link to="/games/wordle">Wordle</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/tictactoe" element={<TicTacToePage />} />
        <Route path="/games/wordle" element={<WordlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

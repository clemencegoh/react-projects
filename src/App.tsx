import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TicTacToePage from "pages/games/tic-tac-toe/TicTacToePage";
import WordlePage from "pages/games/wordle/WordlePage";
import CoolAndImpracticalComponents from "pages/cool-and-impractical-components/CoolAndImpracticalComponents";

const baseUrl = process.env.PUBLIC_URL;
const paths = {
  home: `/${baseUrl}`,
  tictactoe: `/${baseUrl}/games/tictactoe`,
  wordle: `/${baseUrl}/games/wordle`,
  coolComponents: `${baseUrl}/cool-and-impractical-components/`
};

function Home() {
  return (
    <div className={'home-wrapper'}>
      <h1>Hi!</h1>
      <h2>If you're here, you're most likely lost or just looking around.</h2>
      <nav>
        <ul>
          <li>Games</li>
          <ul>
            <li><Link to="games/tictactoe">Tic tac toe</Link></li>
            <li><Link to="games/wordle">Wordle</Link></li>
          </ul>
          <li>Cool and impractical components</li>
          <ul>
            <li><Link to="cool-and-impractical-components">Cool Components</Link></li>
          </ul>
        </ul>
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
        <Route path={paths.coolComponents} element={<CoolAndImpracticalComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

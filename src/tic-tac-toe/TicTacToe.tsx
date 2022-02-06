import React from "react";
import "./TicTacToe.css";

export default function Tictactoe() {
  const [gameboard, setGameboard] = React.useState<string[]>(Array(9).fill(""));

  const clickBehavior = (pos: number) => {
    const toggleInput = (item: string) => {
      if (item === "") {
        return "X";
      }
      if (item === "X") {
        return "O";
      }
      return "";
    };

    setGameboard(
      gameboard.map((val, i) => (i === pos ? toggleInput(val) : val))
    );
  };

  return (
    <div className="game-board">
      {gameboard.map((item, pos) => (
        <div className="box" onClick={() => clickBehavior(pos)}>
          {item}
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import Messages from "./components/Messages";
import Board from "./components/Board";
import Restart from "./components/Restart";

const App = () => {
  //9 talik katak uchun
  const [squares, setSquares] = useState(Array(9).fill(""));

  //default holatdagi player
  const [xTurn, setXTurn] = useState(true);
  //X player uchun text
  const [message, setMessage] = useState("X o'yinchi X");
  // O'yin yakuni uchun
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    let boardTemp = [...squares];

    if(!gameOver){
      if(boardTemp[index]!=="")return

      boardTemp[index]=xTurn?"X":"O"

      setXTurn(!xTurn)
      setSquares(boardTemp)
      setMessage (xTurn?"O o'yinchi 😄":" X o'yinchi 😒")
    }

    if (checkWinner(boardTemp)) {
      setMessage(xTurn ? "X o'yinchi yutdi" : "0 o'yinhi yutdi");
      setGameOver(true);
    }
    if (
      boardTemp.every((i) => i === "X" || i === "O") &&
      !checkWinner(boardTemp)
    ) {
      setMessage("Durang");
      setGameOver(true)
    }
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][
        (0, 4, 8)
      ][(2, 4, 6)],
    ];
    let turnHolder = xTurn ? "X" : "0";

    let resultArr = [];

    winConditions.forEach((combination) => {
      let row = [
        board[combination[0]],
        board[combination[1]],
        board[combination[2]],
      ];
      let results = row.every((currentValue) => currentValue === turnHolder);
      resultArr.push(results);
    });
    if (resultArr.includes(true)) return true;
  };

  const resetGame=()=>{
    setSquares(Array(9).fill(""))
    setMessage("X o'yinchi 😒")
    setGameOver(false )
  }

  return( <main className="flex items-center flex-col" >
    <Messages msg={message} />
    <Board squares={squares} handleClick={handleClick} />
    <Restart resetGame={resetGame} />
    

  </main>
  )
};

export default App;
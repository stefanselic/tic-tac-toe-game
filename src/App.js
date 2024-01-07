/** @format */
import { useState, useEffect } from 'react';
import './App.css';
import Square from './Components/Square';

export default function App() {
  // box index
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  // player turn
  const [player, setPlayer] = useState('🟡');

  useEffect(() => {
    if (player === '❌') {
      setPlayer('🟡');
    } else {
      setPlayer('❌');
    }
  }, [board]);

  const handleClick = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === '') {
          return player;
        }
        return val;
      }),
    );
  };
  return (
    <div className="App">
      <div className="board">
        <h1 className="title">
          Let's Play <br />
          Tic Tac Toe
        </h1>
        <div className="row">
          <Square chooseSquare={() => handleClick(0)} val={board[0]} />
          <Square chooseSquare={() => handleClick(1)} val={board[1]} />
          <Square chooseSquare={() => handleClick(2)} val={board[2]} />
        </div>
        <div className="row">
          <Square chooseSquare={() => handleClick(3)} val={board[3]} />
          <Square chooseSquare={() => handleClick(4)} val={board[4]} />
          <Square chooseSquare={() => handleClick(5)} val={board[5]} />
        </div>
        <div className="row">
          <Square chooseSquare={() => handleClick(6)} val={board[6]} />
          <Square chooseSquare={() => handleClick(7)} val={board[7]} />
          <Square chooseSquare={() => handleClick(8)} val={board[8]} />
        </div>
      </div>
    </div>
  );
}

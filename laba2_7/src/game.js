import React, { useState, useEffect } from 'react';
import './App.css';

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(squares)
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
  const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
  };
  
  const getComputerMove = (squares) => {
    const emptySquares = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
  
    if (emptySquares.length > 0) {
      return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    }
    return null;
  };
  
  const Square = ({ value, onClick }) => {
    return (
      <div className="square" onClick={onClick}>
        {value}
      </div>
    );
  };
  
  const Board = ({ squares, onClick }) => {
    return (
      <div className="board">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
    );
  };
  
  const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState('След. Игрок: X');
  
    const resetGame = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setStatus('След. Игрок: X');
    };
  
    const handleClick = (i) => {
      const newSquares = squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      newSquares[i] = xIsNext ? 'X' : 'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);
    };
  
    useEffect(() => {
      const winner = calculateWinner(squares);
      if (winner) {
        setStatus(`Победитель: ${winner}`);
        setTimeout(resetGame, 2000);
      } else if (isBoardFull(squares)) {
        setStatus('Ничья');
        setTimeout(resetGame, 2000);
      } else {
        setStatus(`След. Игрок: ${xIsNext ? 'X' : 'O'}`);
      }
    }, [squares, xIsNext]);
  
    useEffect(() => {
      if (!xIsNext) {
        const move = getComputerMove(squares);
        if (move !== null) {
          setTimeout(() => handleClick(move), 500);
        }
      }
    }, [xIsNext, squares]);
  
    return (
      <div className="game">
        <div className="game-info">
          <div>{status}</div>
        </div>
        <div className="game-board">
          <Board squares={squares} onClick={handleClick} />
        </div>
      </div>
    );
  };
  
  export default Game;
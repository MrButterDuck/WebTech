import React, { useState } from 'react';

const ScoreBoard = () => {
  const [xWins, setXWins] = useState(0);
//   const [oWins, setOWins] = useState(0);
//   const [draws, setDraws] = useState(0);

  const incrementXWins = () => setXWins(xWins + 1);
//   const incrementOWins = () => setOWins(oWins + 1);
//   const incrementDraws = () => setDraws(draws + 1);

  return (
    <div className="score-board">
        <h3>Здесь вы можете считать ваши победы!</h3>
        <p>Даже если вы не выиграли, можете кликнуть<br/>мы не узнаем, что вы неумете принимать поражения</p>
        <div onClick={incrementXWins}>Победы: {xWins}</div>
        {/* <div onClick={incrementOWins}>Победы O: {oWins}</div>
        <div onClick={incrementDraws}>Ничьи: {draws}</div> */}
    </div>
  );
};

export default ScoreBoard;
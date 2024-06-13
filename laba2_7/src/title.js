import React, { useState, useEffect } from 'react';

const Title = () => {
  const [symbol, setSymbol] = useState('X');

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(symbol === 'X' ? 'O' : 'X');
    }, 200);

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <header className="title">
      <h1>Крестики-Нолики <span>{symbol}</span></h1>
    </header>
  );
};

export default Title;
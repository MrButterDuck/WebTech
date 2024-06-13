import React, { useEffect, useState } from 'react';
import Game from './game';
import Title from './title';
import ScoreBoard from './scoreboard'
import Footer from './footer';
import RandomFact from './randFacts';
import Container from './container';

const links = [
  { text: "Мой ВК", url: "https://vk.com/mrbutterduck" },
  { text: "Мой Телеграм Канал", url: "https://t.me/butterduck" },
  { text: "Мой GitHub", url: "https://github.com/MrButterDuck?tab=repositories" }
];

const App = () => {
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {setRotated(prev => !prev);}, 1000);
    return () => clearInterval(interval);
    }, []);
  return (
    <div className={`App ${rotated ? 'rotated' : ''}`}>
      <div className="background"></div>
      <Title />
      <Container backgroundColor="rgba(255, 255, 255, 0.8)">
        <RandomFact />
        <Game />
        <ScoreBoard />
      </Container>
      <Footer links={links}/>
    </div>
  );
};

export default App;
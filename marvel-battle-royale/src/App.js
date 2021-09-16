import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import CharSelection from './CharSelection/CharSelection';
import ArenaSection from './ArenaSection/ArenaSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [hero, setHero] = useState(null);
  const [villain, setVillain] = useState(null);
  const [freezeCarousel, setFreezeCarousel] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialHeroData = await fetch(
          'http://localhost:3001?name=Captain America'
        );
        const initialVillainData = await fetch(
          'http://localhost:3001?name=Red Skull'
        );
        const initialHero = await initialHeroData.json();
        const inititalVillain = await initialVillainData.json();
        setHero(initialHero[0]);
        setVillain(inititalVillain[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleCharacterChange = async (name, hero) => {
    try {
      const data = await fetch(`http://localhost:3001?name=${name}`);
      const char = await data.json();
      hero ? setHero(char[0]) : setVillain(char[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFreezeCarousel = () => {
    setFreezeCarousel(!freezeCarousel);
  };

  return (
    <div>
      <Header />
      <CharSelection
        handleCharacterChange={handleCharacterChange}
        freezeCarousel={freezeCarousel}
      />
      <ArenaSection
        hero={hero}
        villain={villain}
        handleFreezeCarousel={handleFreezeCarousel}
      />
    </div>
  );
};

export default App;

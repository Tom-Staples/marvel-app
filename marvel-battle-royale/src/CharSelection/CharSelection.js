import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Stats from './Stats/Stats';
import hulk from '../images/hulk.png';
import captainAmerica from '../images/captainAmerica.png';
import ironman from '../images/ironman.png';
import thor from '../images/thor.png';
import spiderman from '../images/spiderman.png';
import blackPanther from '../images/blackPanther.png';
import redSkull from '../images/redSkull.png';
import mandarin from '../images/mandarin.jpg';
import loki from '../images/loki.png';
import greenGoblin from '../images/greenGoblin.jpg';
import abomination from '../images/abomination.png';
import killmonger from '../images/killmonger.jpg';

const CharSelection = props => {
  const [activeHero, setActiveHero] = useState(0);
  const [activeVillain, setActiveVillain] = useState(0);

  const handleCharacterSelect = (index, hero) => {
    let charName = '';
    if (hero) {
      setActiveHero(index);
      charName = heroes[index][0];
    } else {
      setActiveVillain(index);
      charName = villains[index][0];
    }
    props.handleCharacterChange(charName, hero);
  };

  const charStyle = {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Marvel Font',
    paddingTop: '10px'
  };

  const heroes = [
    ['Captain America', captainAmerica],
    ['Iron Man', ironman],
    ['Thor', thor],
    ['Spiderman', spiderman],
    ['Hulk', hulk],
    ['Black Panther', blackPanther]
  ];
  const villains = [
    ['Red Skull', redSkull],
    ['Mandarin', mandarin],
    ['Loki', loki],
    ['Green Goblin', greenGoblin],
    ['Abomination', abomination],
    ['Killmonger', killmonger]
  ];

  const heroArray = heroes.map((hero, index) => {
    return (
      <Carousel.Item key={index} style={charStyle}>
        <img alt='hero artwork' src={hero[1]} className='d-block w-50 m-auto' />
        <h2>{hero[0]}</h2>
        <Stats name={hero[0]} colour={'success'} />
      </Carousel.Item>
    );
  });

  const villainArray = villains.map((villain, index) => {
    return (
      <Carousel.Item key={index} style={charStyle}>
        <img
          alt='villain artwork'
          src={villain[1]}
          className='d-block w-50 m-auto'
        />
        <h2>{villain[0]}</h2>
        <Stats name={villain[0]} colour={'warning'} />
      </Carousel.Item>
    );
  });
  return (
    <Container id='charSelect'>
      <Row>
        <Col style={{ border: 'solid #000000 2px' }}>
          <Carousel
            activeIndex={activeHero}
            onSelect={
              props.freezeCarousel
                ? null
                : selectedIndex => {
                    const hero = true;
                    handleCharacterSelect(selectedIndex, hero);
                  }
            }
            interval={null}
            nextLabel=''
            prevLabel=''
          >
            {heroArray}
          </Carousel>
        </Col>
        <Col style={{ border: 'solid #000000 2px' }}>
          <Carousel
            activeIndex={activeVillain}
            onSelect={
              props.freezeCarousel
                ? null
                : selectedIndex => {
                    const hero = false;
                    handleCharacterSelect(selectedIndex, hero);
                  }
            }
            interval={null}
            nextLabel=''
            prevLabel=''
          >
            {villainArray}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CharSelection;

import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BattleBars from './BattleBars';

const ArenaSection = props => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
    props.handleFreezeCarousel();
  };

  if (!props.hero || !props.villain) {
    return null;
  } else {
    const heroArray = Object.entries(props.hero);
    const villainArray = Object.entries(props.villain);

    let heroCount = 0;
    let villainCount = 0;
    for (let i = 0; i < heroArray.length; i++) {
      if (heroArray[i][1] > villainArray[i][1]) {
        heroCount += heroCount + 1;
      } else if (heroArray[i][1] < villainArray[i][1]) {
        villainCount += villainCount + 1;
      }
    }

    let name;
    if (heroCount > villainCount) {
      name = props.hero.name;
    }
    if (heroCount < villainCount) {
      name = props.villain.name;
    }

    const battleArray = heroArray.map((item, index) => {
      if (index < 2) {
        return null;
      }
      return (
        <BattleBars
          heroStat={item[1]}
          villainStat={villainArray[index][1]}
          name={heroArray[index][0]}
          key={index}
          display={display}
        />
      );
    });

    return (
      <Container
        style={{
          marginTop: '10px',
          fontFamily: 'Marvel Font',
          fontSize: '1.5em'
        }}
      >
        <Row className='justify-content-center'>
          <Button
            variant='dark'
            size='lg'
            style={{
              backgroundColor: '#ed1d24'
            }}
            onClick={handleClick}
          >
            {display ? 'Reset Battle' : 'Battle'}
          </Button>
        </Row>
        <Container
          style={{
            display: display ? 'block' : null,
            backgroundColor: '#ed1d24',
            height: display ? '100%' : '0',
            borderRadius: '10px',
            border: display ? 'solid #000000 2px' : null,
            marginTop: '5px'
          }}
        >
          {display ? battleArray : null}
          <Row>
            <h2 style={{ textAlign: 'center', marginTop: '5px' }}>
              {display ? `${name} Wins` : null}
            </h2>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default ArenaSection;

import React, { useEffect, useState } from 'react';
import { ProgressBar, Row, Col, Container } from 'react-bootstrap';

const Stats = props => {
  const [character, setCharacter] = useState(null);
  const [charBars, setCharBars] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(`http://localhost:3001?name=${props.name}`);
        data = await data.json();
        setCharacter(data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [props.name]);

  useEffect(() => {
    if (character) {
      const progressDisplay = Object.entries(character).map((item, index) => {
        if (index > 1) {
          return (
            <Row key={index}>
              <Col xl={3} style={{ fontSize: '1.1em' }}>
                <h4>{item[0]}</h4>
              </Col>
              <Col xl={9} style={{ fontFamily: 'sans-serif' }}>
                <ProgressBar
                  variant={props.colour}
                  now={item[1]}
                  label={`${item[1]} / 100`}
                />
              </Col>
            </Row>
          );
        }
        return null;
      });
      setCharBars(progressDisplay);
    }
    return;
  }, [character, props.colour]);

  return (
    <Container style={{ display: character ? 'block' : null }}>
      {charBars && charBars}
    </Container>
  );
};

export default Stats;

import React from 'react';
import { ProgressBar, Row } from 'react-bootstrap';

const BattleBars = props => {
  const heroPercent = Math.round(
    (props.heroStat / (props.heroStat + props.villainStat)) * 100
  );

  const villainPercent = Math.round(
    (props.villainStat / (props.heroStat + props.villainStat)) * 100
  );

  let heroLabel;
  let villainLabel;
  if (heroPercent > villainPercent) {
    heroLabel = 'Winner!';
    villainLabel = null;
  }
  if (heroPercent < villainPercent) {
    heroLabel = null;
    villainLabel = 'Winner!';
  }
  if (heroPercent === villainPercent) {
    heroLabel = 'Tie!';
    villainLabel = 'Tie!';
  }

  return (
    <Row
      style={{
        margin: '10px 0px 5px 0px',
        textAlign: 'center'
      }}
      key={props.key}
    >
      <h4>{props.name}</h4>
      <ProgressBar style={{ height: '25px', fontSize: '0.75em' }}>
        <ProgressBar
          now={heroPercent}
          variant='success'
          label={heroLabel}
        ></ProgressBar>
        <ProgressBar
          now={villainPercent}
          variant='warning'
          label={villainLabel}
        ></ProgressBar>
      </ProgressBar>
    </Row>
  );
};

export default BattleBars;

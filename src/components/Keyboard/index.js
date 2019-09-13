import React from 'react';
import styled from 'styled-components';
import Function from '../Function';
import ArrowPad from '../ArrowPad';
import Alphanumeric from '../Alphanumeric';
import ControlPad from '../ControlPad';
import NumPad from '../Numpad';
import keys from '../../keys.json';

const Grid = styled.div`
  background: #444441;
  display: grid;
  border: 1px solid;
  border-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  grid-template-columns: 70% 15% 15%;
  grid-template-areas:
    'function function function'
    'alphanumeric controlpad numpad'
    'alphanumeric arrowpad numpad';
`;
const GridItem = styled.div`
  grid-area: ${props => props.area};
`;

const Keyboard = () => {
  return (
    <Grid>
      <GridItem area="function">
        <Function keys={keys.fn} />
      </GridItem>
      <GridItem area="controlpad">
        <ControlPad keys={keys.controlPad} />
      </GridItem>
      <GridItem area="numpad">
        <NumPad keys={keys.numPad} />
      </GridItem>
      <GridItem area="arrowpad">
        <ArrowPad keys={keys.arrowPad} />
      </GridItem>
      <GridItem area="alphanumeric">
        <Alphanumeric keys={keys.alphanumeric} />
      </GridItem>
    </Grid>
  );
};

export default Keyboard;

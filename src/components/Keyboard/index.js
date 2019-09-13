import React from 'react';
import styled from 'styled-components';
import Function from '../Function';
import ArrowPad from '../ArrowPad';
import Alphanumeric from '../Alphanumeric';
import ControlPad from '../ControlPad';
import NumPad from '../Numpad';
import keys from '../../keys.json';
import KeyIndicator from '../KeyIndicator';

const Grid = styled.div`
  background: #c1c1b3;
  display: grid;
  border: 1px solid;
  border-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  grid-template-columns: 70% 15% 15%;
  grid-template-areas:
    'function function light light'
    'alphanumeric controlpad numpad numpad'
    'alphanumeric arrowpad numpad numpad';
`;
const GridItem = styled.div`
  grid-area: ${props => props.area};
`;


const Keyboard = ({ state, handleKeyPress }) => {
  return (
    <Grid>
      <GridItem area="light">
        <KeyIndicator state={state} />
      </GridItem>
      <GridItem area="function">
        <Function state={state} keys={keys.fn} handleKeyPress={handleKeyPress('function')} />
      </GridItem>
      <GridItem area="controlpad">
        <ControlPad state={state} keys={keys.controlPad} handleKeyPress={handleKeyPress('controlpad')} />
      </GridItem>
      <GridItem area="numpad">
        <NumPad state={state} keys={keys.numPad} handleKeyPress={handleKeyPress('numpad')} />
      </GridItem>
      <GridItem area="arrowpad">
        <ArrowPad state={state} keys={keys.arrowPad} handleKeyPress={handleKeyPress('arrowpad')} />
      </GridItem>
      <GridItem area="alphanumeric">
        <Alphanumeric state={state} keys={keys.alphanumeric} handleKeyPress={handleKeyPress('alphanumeric')} />
      </GridItem>
    </Grid>
  );
};

export default Keyboard;

import React from 'react';
import styled from 'styled-components';
import Function from '../Function';
import ArrowPad from '../ArrowPad';
import Alphanumeric from '../Alphanumeric';
import ControlPad from '../ControlPad';
import NumPad from '../Numpad';

const Grid = styled.div`
  display: grid;
  border: 1px solid;
  border-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  grid-template-areas:
    'function function function'
    'alphanumeric controlpad numpad'
    'alphanumeric arrowpad numpad';
`;
const GridItem = styled.div`
  grid-area: ${(props) => props.area};
`;

const Keyboard = () => {
  return (
    <Grid>
      <GridItem area="function">
        <Function />
      </GridItem>
      <GridItem area="controlpad">
        <ControlPad />
      </GridItem>
      <GridItem area="numpad">
        <NumPad />
      </GridItem>
      <GridItem area="arrowpad">
        <ArrowPad />
      </GridItem>
      <GridItem area="alphanumeric">
        <Alphanumeric />
      </GridItem>
    </Grid>
  );
};

export default Keyboard;

import React from 'react';
import styled from 'styled-components';
import Key from '../Key';

const KeyRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 5% 15% 15% 15% 15%;
  grid-column-gap: 5%;
  grid-template-areas: 'seg1 seg2 seg3 seg4 seg5';
  padding: 10px;
  grid-row-gap: 2px;

`;

const GridItem = styled.div`
  grid-area: ${props => props.area};
  display: grid;
  grid-column-gap: 2px;
  grid-auto-flow: column;
  grid-row-gap: 2px;
`;
const Function = ({ keys, handleKeyPress }) => {
  return (
    <KeyRow>
      {Object.keys(keys).map(key => (
        <GridItem area={key} key={key}>
          {keys[key].map(item => (
            <Key handleKeyPress={handleKeyPress} label={item.label} key={item.id} id={item.id} />
          ))}
        </GridItem>
      ))}
    </KeyRow>
  );
};

export default Function;

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
`;

const GridItem = styled.div`
  grid-area: ${props => props.area};
  display: grid;
  grid-column-gap: 1px;
  grid-auto-flow: column;
`;
const Function = ({ keys }) => {
  return (
    <KeyRow>
      {Object.keys(keys).map(key => (
        <GridItem area={key} key={key}>
          {keys[key].map(item => (
            <Key label={item.label} key={item.id} id={item.id} />
          ))}
        </GridItem>
      ))}
    </KeyRow>
  );
};

export default Function;

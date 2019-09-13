import React from 'react';
import styled from 'styled-components';
import Key from '../Key';
import Multikey from '../MultiKey';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 10px;
  grid-row-gap: 5px;
`;
const GridRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1px;
  grid-template-columns: repeat(1f);
  grid-template-rows: repeat(1f);
`;
const Alphanumeric = ({ state, keys, handleKeyPress }) => {
  return (
    <Wrapper>
      {Object.keys(keys).map((key) => (
        <GridRow key={key}>
          {keys[key].map((item, index) =>
            Array.isArray(item) ? (
              <Multikey state={state} handleKeyPress={handleKeyPress} key={index} keys={item} />
            ) : (
                <Key state={state} handleKeyPress={handleKeyPress} {...item} id={item.id || item.label} key={index} />
              )
          )}
        </GridRow>
      ))}
    </Wrapper>
  );
};
export default Alphanumeric;

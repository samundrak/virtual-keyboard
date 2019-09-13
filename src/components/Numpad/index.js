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
grid-template-rows: repeat(4, 1.5fr) 1fr;
  grid-column-gap: 1px;
  grid-row-gap:5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 1fr;
`;
const Numpad = ({ keys }) => {
  return (
    <Wrapper>
      {Object.keys(keys).map((key) => (
        <GridRow key={key}>
          {keys[key].map((item, index) =>
            Array.isArray(item) ? (
              <Multikey key={index} keys={item} />
            ) : (
              <Key {...item} id={item.id || item.label} key={index} />
            )
          )}
        </GridRow>
      ))}
    </Wrapper>
  );
};
export default Numpad;

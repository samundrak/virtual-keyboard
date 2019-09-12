import React from 'react';
import styled from 'styled-components';
import Key from '../Key';
import Multikey from '../MultiKey';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 10px;
  grid-row-gap: 1px;
`;
const GridRow = styled.div`
  grid-column-gap: 1px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
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

import React from 'react';
import styled from 'styled-components';
import Key from '../Key';
import Multikey from '../MultiKey';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 10px;
`;
const GridRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(1f);
`;
const Alphanumeric = ({ keys }) => {
  return (
    <Wrapper>
      {Object.keys(keys).map(key => (
        <GridRow key={key}>
          {keys[key].map((item, index) =>
            Array.isArray(item) ? (
              <Multikey key={index} keys={item} />
            ) : (
              <Key id={item.id || item.label} label={item.label} key={index} />
            ),
          )}
        </GridRow>
      ))}
    </Wrapper>
  );
};
export default Alphanumeric;

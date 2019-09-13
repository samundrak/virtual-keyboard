import React from 'react';
import styled from 'styled-components';
import Key from '../Key';
import Multikey from '../MultiKey';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1px;
  padding: 10px;
`;
const GridRow = styled.div`
  grid-column-gap: 1px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
`;
const ControlPad = ({ keys, handleKeyPress }) => {
  return (
    <Wrapper>
      {Object.keys(keys).map(key => (
        <GridRow key={key}>
          {keys[key].map((item, index) =>
            Array.isArray(item) ? (
              <Multikey handleKeyPress={handleKeyPress} key={index} keys={item} />
            ) : (
                <Key handleKeyPress={handleKeyPress} id={item.id || item.label} label={item.label} key={index} />
              ),
          )}
        </GridRow>
      ))}
    </Wrapper>
  );
};
export default ControlPad;

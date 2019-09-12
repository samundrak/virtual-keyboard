import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-flow: column;
`;

const KeyRow = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default KeyRow;

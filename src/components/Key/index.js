import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background: #2f2a2a;
  color: white;
  line-height: 50px;
  text-overflow: clip;
  max-height: inherit;
  border-radius: 10px;
  cursor: pointer;
`;

const Key = ({ id, label }) => {
  return <Button>{label}</Button>;
};
export default Key;

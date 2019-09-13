import React from 'react';
import styled from 'styled-components';

const StyledScreen = styled.div`
  background: #464643;
  max-height: 200px;
  min-height:200px;
  color:white;
  border: 1px dashed black;
  border-radius: 5px;
  font-size: 20px;
`;
const Screen = ({ text }) => {
  return <StyledScreen>{text}</StyledScreen>;
};

export default Screen;

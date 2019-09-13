import React from 'react';
import styled from 'styled-components';

const StyledScreen = styled.div`
background: #464643;
color:white;
  border: 1px dashed black;
  padding: 5%;
  border-radius: 20px;
  font-size: 20px;
`;
const Screen = () => {
  return <StyledScreen>Hi I am screen</StyledScreen>;
};

export default Screen;

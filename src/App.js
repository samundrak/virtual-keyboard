import React from 'react';
import './App.css';
import styled from 'styled-components';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';
import CopyButton from './components/CopyButton';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: 'screen copybutton' 'keyboard keyboard';
  grid-template-columns: 90% 10%;
  margin: auto;
  padding: 10px;
  grid-row-gap: 10px;
`;
const GridItem = styled.div`
  grid-area: ${(props) => props.area};
`;
function App() {
  return (
    <StyledApp className="App">
      <GridItem area="screen">
        <Screen />
      </GridItem>
      <GridItem area="keyboard">
        <Keyboard />
      </GridItem>
      <GridItem area="copybutton">
        <CopyButton />
      </GridItem>
    </StyledApp>
  );
}

export default App;

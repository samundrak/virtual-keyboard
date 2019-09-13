import React from 'react';
import img from './keyboard-sections.png';
import './App.css';
import styled from 'styled-components';
import Screen from './components/Screen';
import Keyboard from './components/Keyboard';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: 'screen screen' 'keyboard keyboard' 'layout layout';
  grid-template-columns: 100%;
  margin: auto;
  padding: 10px;
  grid-row-gap: 10px;
`;
const GridItem = styled.div`
  grid-area: ${(props) => props.area};
`;
class App extends React.Component {
  state = {
    text: '',
    isCapsLock: false,
    isNumLock: false,
    isShift: false,
  }

  toggler(key) {
    this.setState({
      [key]: !this.state[key]
    })
  }
  printText(key) {

    let text = ''
    if (key.printable === undefined) {
      try {
        text = this.state.text + (this.state.isCapsLock ? key.label.toUpperCase() : key.label.toLowerCase());

      } catch (err) {
        text = this.state.text + (key.label + '')
      }
    }
    if (key.printable === false) {
      switch ((key.label || '').toLowerCase()) {
        case 'enter':
          text = this.state.text + '\\r'
          break;
        case 'tab':
          text = this.state.text + '  '
          break;
        case 'space':
          text = this.state.text + ' '
          break;
        case 'backspace':
          text = this.state.text.substring(0, this.state.text.length - 1);
          break;
        default: break;
      }
    }
    this.setState({
      text
    })

  }
  handleKeyPress = group => (key) => {
    return () => {
      switch (key.code) {
        case 20:
          this.toggler('isCapsLock')
          return
        case 16:
          this.toggler('isShift')
          return;
        case 144:
          this.toggler('isNumLock')
          return;
        default: break;

      }
      if (group === 'alphanumeric' || group === 'numpad') {
        if (group === 'numpad' && !this.state.isNumLock) {
          return;
        }
        this.printText(key);
      }
    }
  }
  render() {
    return <StyledApp className="App">
      <GridItem area="screen">
        <Screen text={this.state.text} />
      </GridItem>
      <GridItem area="keyboard">
        <Keyboard
          state={this.state}
          handleKeyPress={this.handleKeyPress} />
      </GridItem>
      <GridItem area="layout">
        <img src={img} alt="layout" />
      </GridItem>
    </StyledApp>
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10%;
  background: #2f2a2a;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  text-shadow:1px 1px 1px #b6b6ff;
  box-shadow: 1px 3px #888888;

  &:hover {
    box-shadow: 4px 8px #888888;
    text-shadow: 2px 1px 1px #b6b6ff;

  }
`;
const Mask = styled.div`
width: 50%;
height: 5px;
background: ${props => props.glow ? 'green' : 'grey'};
border-radius: 2px;
margin-left: 25%;
box-shadow:  ${props => props.glow ? '2px 2px 18px 3px green' : ''};
`;
const Char = styled.div`
`;


const makeCustomStyles = (props) => {
  const style = {};
  if (props.rowSpan) {
    style.gridRow = `span ${props.rowSpan}`;
  }
  if (props.colSpan) {
    style.gridColumn = `span ${props.colSpan}`;
  }
  if (props.columnStart) {
    style.gridColumnStart = props.columnStart;
  }
  return style;
};
const Key = ({
  indicator, disabled,
  glow,
  state, handleKeyPress, id, label, ...rest }) => {
  return <Button
    disabled={disabled}
    onClick={handleKeyPress && handleKeyPress({ id, label, ...rest })} role="button" style={makeCustomStyles(rest)}>
    <Char>{label}</Char>
    {indicator &&
      <Mask glow={glow} />
    }
  </Button>;
};
export default Key;

import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
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
const Key = ({ id, label, ...rest }) => {
  return <Button role="button" style={makeCustomStyles(rest)}>
  <Mask />
  <Char>{label}</Char>
  </Button>;
};
export default Key;

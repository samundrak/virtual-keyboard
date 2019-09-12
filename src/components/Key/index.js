import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  padding: 10%;
  background: #2f2a2a;
  color: white;
  text-overflow: clip;
  max-height: inherit;
  border-radius: 10px;
  cursor: pointer;
`;

const makeCustomStyles = (props) => {
  console.log(props);
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
  return <Button style={makeCustomStyles(rest)}>{label}</Button>;
};
export default Key;

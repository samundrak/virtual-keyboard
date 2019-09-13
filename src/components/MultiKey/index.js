import React from 'react';
import Key from '../Key';

const Multikey = ({ keys, handleKeyPress, state }) => {
  const key = state.isShift ? keys[1] : keys[0];
  return (
    <Key handleKeyPress={handleKeyPress} state={state} {...key} id={key.id || key.label} />
  );
};
export default Multikey;

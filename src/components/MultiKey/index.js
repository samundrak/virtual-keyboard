import React from 'react';
import Key from '../Key';

const Multikey = ({ keys, isSuper = false }) => {
  const key = isSuper ? keys[1] : keys[0];
  return (
    <React.Fragment>
      <Key {...key} id={key.id || key.label} />
    </React.Fragment>
  );
};
export default Multikey;

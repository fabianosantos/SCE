import React from 'react';

import { Divisor as DivisorStyle } from '../styles'

const Divisor = ({ children, spacing }) => {
  return (
    <DivisorStyle
      {...{spacing}}
    >
      <span>{children}</span>
    </DivisorStyle>
  );
};

export default Divisor;
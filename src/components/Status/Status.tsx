import * as React from 'react';

import { StatusStyled } from './styles';

interface StatusProps {
  status: string;
  onReset: () => void;
}

const Status = ({ status, onReset }: StatusProps) => {
  return <StatusStyled>
      <p>{status}</p>
      <button onClick={() => onReset()}>Reset</button>
  </StatusStyled>;
};

export default Status;

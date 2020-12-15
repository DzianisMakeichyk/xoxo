import * as React from 'react';

import { SquareButton } from './styles';

interface SquareProps {
  onSelectSquare: (i: number) => void;
  i: number;
  value: string;
}

const Square = ({ i, value, onSelectSquare }: SquareProps) => {
  return <SquareButton
    color={value === 'X' ? 'red' : 'blue'}
    onClick={() => onSelectSquare(i)}
  >
    {value}
  </SquareButton>;
};

export default Square;

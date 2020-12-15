import * as React from 'react';
import Confetti from 'react-confetti';

interface WinnerProps {
  winner: string;
}

const End = ({ winner }: WinnerProps) => {
  return <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
    colors={[winner === 'X' ? '#d76050' : '#509ed7', 'white']}
  />;
};

export default End;

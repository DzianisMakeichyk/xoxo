import * as React from 'react';
/* tslint:disable-next-line */
import { useState } from 'react';
import { Main, MainWrapper, BodyWrapper, Board } from '../utils/constant/styles';

import Header from '../components/Header';
import Status from '../components/Status';
import End from '../components/End';
import Square from '../components/Square';

const LayoutContainer = () => {
  const defaultSquares = Array(9).fill(null);
  const defaultValue = 'X';

  const [value, setValue] = useState(defaultValue);
  const [squares, setSquares] = useState(defaultSquares);
  const [winner, setWinner] = useState(null);

  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const nextValue = () => {
    return squares.filter((r) => r === 'O').length === squares.filter((r) => r === 'X').length ? 'X' : 'O';
  };

  const reset = () => {
    setSquares(defaultSquares);
    setValue(defaultValue);
    setWinner(null);
  };

  const getWinner = (): any => {
    lines.map(line => {
      const [a, b, c] = line;

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
      }
    });
  };

  const status = () => {
    return winner ? `Winner: ${winner}` : `Next player: ${value}`;
  };

  const selectSquare = (square: number) => {
    if (winner || squares[square]) { return; }

    const newSquares = squares;
    newSquares[square] = nextValue();
    
    setSquares(newSquares);
    setValue(nextValue());

    getWinner();
  };

  return <BodyWrapper>
    <MainWrapper>
      <Header />
      <Main>
        <Status
          status={status()}
          onReset={() => reset()}
        />
        <Board>
          {squares.map((sq, field) => (
            <Square
              key={field}
              i={field}
              value={sq}
              onSelectSquare={() => selectSquare(field)}
            />
          ))}
        </Board>
        {winner && <End winner={winner} />}
      </Main>
    </MainWrapper>
  </BodyWrapper>;
};

export default LayoutContainer;

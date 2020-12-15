import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const SquareButton = styled.button`
  cursor: pointer;
  font-family: "Sniglet", cursive;
  font-size: 4rem;
  font-weight: 100;
  line-height: 5rem;
  height: 5rem;
  padding: 0;
  text-align: center;
  width: 5rem;
  border: none;
  background: #efefef;
  color: ${props => styles.colors[props.color]};
  border-radius: 0.85rem;
  box-shadow: 0.25rem 0.25rem 1rem 0 rgba(0, 0, 0, 0.02);
  text-shadow: 0.25rem 0.25rem 0.75rem rgba(${props => props.color === 'red' ? '255, 164, 176' : '164 230 255'}, 0.75);
`;

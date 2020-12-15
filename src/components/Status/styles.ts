import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const StatusStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${styles.colors.gray};

  & > button {
    font-family: "Inter", sans-serif;
    cursor: pointer;
    font-size: 1rem;
    color: ${styles.colors.red};
    border: none;
    text-align: right;
    background: transparent;
  }
`;

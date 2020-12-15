import styled from 'styled-components';

import { styles } from '../../utils/constant/styles';

export const HeaderStyled = styled.header`
  padding: ${115 / 1600 * 100}% 0 ${75 / 1600 * 100}%;
`;

export const HeaderTitle = styled.h1`
  font-family: "Sniglet", cursive;
  font-size: 12rem;
  line-height: 12rem;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 100%;
  color: ${styles.colors.red};
  text-shadow: 0 0.25rem 0.75rem rgb(255, 164, 176);

  span {
    color: ${styles.colors.blue};
    text-shadow: 0.25rem 0.25rem 0.75rem rgb(164, 230, 255);
  }
`;

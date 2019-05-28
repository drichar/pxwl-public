import styled from 'styled-components';
import theme from 'constants/theme';

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease, padding 0.3s ease;
  background-color: transparent;
  padding: 5rem;
  z-index: 9;

  &.fixed-nav {
    background-color: ${theme.midnightBase};
    padding: 3rem 5rem;
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

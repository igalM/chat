import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`
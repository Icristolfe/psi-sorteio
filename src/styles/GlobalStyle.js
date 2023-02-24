import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(0,48,255);
    background: radial-gradient(circle, rgba(0,48,255,1) 0%, rgba(32,42,74,1) 100%);
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobalStyle;

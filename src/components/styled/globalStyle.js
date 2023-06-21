import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;

    h1 {
      font-size: 3vw;
      font-family: Poppins;
      font-weight: 700;
    }

    h2 {
      font-size: 1.5vw;
      font-family: Poppins;
      font-weight: 600;
    }

    h3 {
      font-size: 1vw;
      font-family: Poppins;
      font-weight: 500;
    }
  }
`;

export default GlobalStyle;

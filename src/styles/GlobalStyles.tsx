import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

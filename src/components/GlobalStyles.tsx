import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: var(--color-background);
    color: var(--color-text);
    font-family: "source sans pro", sans-serif;
  }
  h1 {
    font-family: "playfair display", serif;
  }
  h3 {
    font-family: oswald, sans-serif;
    color: var(--color-accent1);
    text-transform: uppercase;
  }
`;

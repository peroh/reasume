import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from "styled-components"

import { COLORS } from '../contants/colors';

export const ThemeContext = React.createContext(null);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #141821;
  }
`

const theme = {
  colors: {
    bg: "var(--color-background)",
    primary: "var(--color-primary)",
    text: "var(--color-text)"
  }
}

const DefaultLayout = ({ children }: any) => {
  const [
    colorMode,
    rawSetColorMode
  ] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue =
      root.style.getPropertyValue('--initial-color-mode');
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue: any) => {
    const root = window.document.documentElement;
    rawSetColorMode(newValue);
    localStorage.setItem('color-mode', newValue);
    root.style.setProperty(
      '--color-text',
      newValue === 'light'
        ? COLORS.light.text
        : COLORS.dark.text
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light'
        ? COLORS.light.background
        : COLORS.dark.background
    );
    root.style.setProperty(
      '--color-primary',
      newValue === 'light'
        ? COLORS.light.primary
        : COLORS.dark.primary
    );
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ colorMode, setColorMode }}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default DefaultLayout

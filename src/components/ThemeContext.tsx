import * as React from 'react';

import { COLORS } from '../contants/colors';

export const ThemeContext = React.createContext(null);

export const ColorModeThemeProvider = ({ children }: any) => {
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
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

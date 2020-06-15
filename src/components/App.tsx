import React from "react";

import { ColorModeThemeProvider } from "./ThemeContext";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "../constants/theme";
import { StyledThemeProvider } from "./StyledThemeContext";

function App({ children }: any) {
  return (
    <ColorModeThemeProvider>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ColorModeThemeProvider>
  );
}

export default App;

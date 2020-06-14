import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../constants/theme';

export const StyledThemeProvider = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

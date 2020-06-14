import React from 'react';

import { COLORS } from './src/contants/colors';

const ColourModeScriptTag = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference =
      window.localStorage.getItem('color-mode');
    const hasPersistedPreference =
      typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    return 'light';
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;

  root.style.setProperty(
    '--color-text',
    colorMode === 'light'
      ? '${COLORS.light.text}'
      : '${COLORS.dark.text}'
  );

  root.style.setProperty(
    '--color-background',
    colorMode === 'light'
      ? '${COLORS.light.background}'
      : '${COLORS.dark.background}'
  );

  root.style.setProperty(
    '--color-primary',
    colorMode === 'light'
      ? '${COLORS.light.primary}'
      : '${COLORS.dark.primary}'
  );

  root.style.setProperty('--initial-color-mode', colorMode);
})()`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  );
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ColourModeScriptTag />);
};
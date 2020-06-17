import React, { useContext } from "react";
import Toggle from "react-dark-mode-toggle";

import { ThemeContext } from "./ThemeContext";

const DarkModeToggle = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { colorMode, setColorMode } = useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }

  const isDark = colorMode === "dark";

  return (
    <Toggle
      onChange={() => {
        isDark ? setColorMode("light") : setColorMode("dark");
      }}
      checked={isDark}
      size={60}
    />
  );
};

export default DarkModeToggle;

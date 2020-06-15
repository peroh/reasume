import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "./ThemeContext";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bg};
  color: var(--color-text);
  border: 1px solid var(--color-primary);
`;

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
    <Button
      onClick={() => {
        isDark ? setColorMode("light") : setColorMode("dark");
      }}
    >
      {isDark ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default DarkModeToggle;

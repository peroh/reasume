import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import styled from "styled-components";

const Toggle = styled.div`
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: 1rem;
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
    <Toggle
      onClick={() => {
        isDark ? setColorMode("light") : setColorMode("dark");
      }}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </Toggle>
  );
};

export default DarkModeToggle;

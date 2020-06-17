import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
  position: absolute;
  stroke: ${({ stroke }) => (stroke ? stroke : "")};
  fill: ${({ color }) => (color ? color : "")};
  width: ${({ width }) => width};
  left: ${({ left }) => (left ? left : 0)};
  top: ${({ top }) => (top ? top : 0)};
`;

const SVG = ({ path, ...styling }) => (
  <StyledSVG {...styling}>{path}</StyledSVG>
);

export default SVG;

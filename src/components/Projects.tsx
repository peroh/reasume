import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import data from "../data/data.yaml";
import { media } from "../constants/breakpoints";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const ProjectContainer = styled(Container)`
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: 1fr 1fr;
  padding: 1rem;

  ${media.md.css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  `}
`;

const { diagonalPolygonRight } = shapes;

const CMA = ({ offset, speed, factor = 1 }: RotationsProps) => {
  const styledContext = useContext(ThemeContext);
  const bgColor = styledContext.colors.bgTertiary;
  const { grad1, grad2 } = styledContext.gradients;
  const { projects } = data;

  return (
    <>
      <Layer
        offset={offset}
        speed={speed}
        factor={factor}
        clipPath={diagonalPolygonRight}
        bgColor={bgColor}
      />
      <Layer offset={offset} speed={speed - 0.2} factor={factor}>
        <ProjectContainer>
          <ProjectCard {...projects[0]} background={grad1} />
          <ProjectCard {...projects[1]} background={grad2} />
        </ProjectContainer>
      </Layer>
    </>
  );
};

export default CMA;

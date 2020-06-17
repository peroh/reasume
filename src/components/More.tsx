import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Rotation from "./Rotation";
import Container from "./Container";
import Experience from "../data/Experience.mdx";
import Interests from "../data/Interests.mdx";
import Section from "./Section";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const { diagonalPolygonLeft } = shapes;

const CMA = ({ offset, speed, factor = 1 }: RotationsProps) => {
  const styledContext = useContext(ThemeContext);
  const bgColor = styledContext.colors.bgSecondary;

  return (
    <>
      <Layer
        offset={offset}
        speed={speed}
        factor={factor}
        clipPath={diagonalPolygonLeft}
        bgColor={bgColor}
      />
      <Layer offset={offset} speed={speed - 0.2} factor={factor}>
        <Container>
          <Section
            title="More about me"
            subTitle1="Pre-REA"
            subTitle2="Outside of Work"
            Component1={Experience}
            Component2={Interests}
          />
        </Container>
      </Layer>
    </>
  );
};

export default CMA;

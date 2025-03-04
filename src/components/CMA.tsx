import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Rotation from "./Rotation";
import Container from "./Container";
import Learnings from "../data/CMALearnings.mdx";
import Work from "../data/CMAWork.mdx";
import ReactLogo from "../images/react-logo.svg";
import GraphQL from "../images/graphql.svg";

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
          <Rotation
            title="3 - CMA"
            Learnings={Learnings}
            Work={Work}
            icons={[ReactLogo, GraphQL]}
          />
        </Container>
      </Layer>
    </>
  );
};

export default CMA;

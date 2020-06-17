import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Rotation from "./Rotation";
import Container from "./Container";
import Learnings from "../data/SpacelyLearnings.mdx";
import Work from "../data/SpacelyWork.mdx";
import ReactLogo from "../images/react-logo.svg";
import CssLogo from "../images/css.svg";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const { diagonalPolygonRight } = shapes;

const Spacely = ({ offset, speed, factor = 1 }: RotationsProps) => {
  const styledContext = useContext(ThemeContext);
  const bgColor = styledContext.colors.bgTertiary;

  return (
    <>
      <Layer
        offset={offset}
        speed={speed}
        factor={factor}
        clipPath={diagonalPolygonRight}
        bgColor={bgColor}
      />
      <Layer offset={offset} speed={speed + 0.2} factor={factor}>
        <Container>
          <Rotation
            title="2 - Spacely"
            Learnings={Learnings}
            icons={[ReactLogo, CssLogo]}
            Work={Work}
          />
        </Container>
      </Layer>
    </>
  );
};

export default Spacely;

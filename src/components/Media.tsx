import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Rotation from "./Rotation";
import Container from "./Container";
import Learnings from "../data/MediaLearnings.mdx";
import Work from "../data/MediaWork.mdx";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const { diagonalPolygonLeft } = shapes;

const Media = ({ offset, speed, factor = 1 }: RotationsProps) => {
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
      <Layer offset={offset} speed={speed + 0.2} factor={factor}>
        <Container>
          <Rotation title="Media" Learnings={Learnings} Work={Work} />
        </Container>
      </Layer>
    </>
  );
};

export default Media;

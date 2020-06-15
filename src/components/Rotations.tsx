import React from "react";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const { diagonalPolygonRight } = shapes;

const Rotations = ({ offset, speed, factor = 1 }: RotationsProps) => {
  return (
    <Layer
      offset={offset}
      speed={speed}
      factor={factor}
      clipPath={diagonalPolygonRight}
      bgColor="lightsalmon"
    >
      <h1>Placeholder content</h1>
    </Layer>
  );
};

export default Rotations;

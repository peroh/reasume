import React from 'react'

import Layer from './Layer';
import { shapes } from '../constants/shapes';
import Rotation from './Rotation';
import Container from './Container';
import Learnings from "../data/SpacelyLearnings";
import Work from "../data/SpacelyWork";

type RotationsProps = {
  offset: number,
  speed: number,
  factor?: number
}

const { diagonalPolygonRight } = shapes;

const Spacely = ({ offset, speed, factor = 1 }: RotationsProps) => {

  return (
    <Layer offset={offset} speed={speed} factor={factor} clipPath={diagonalPolygonRight} bgColor="green">
      <Container>
        <Rotation title="Spacely" Learnings={Learnings} Work={Work} />
      </Container>
    </Layer>
  )
};

export default Spacely;

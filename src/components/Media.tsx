import React from 'react'

import Layer from './Layer';
import { shapes } from '../constants/shapes';
import Rotation from './Rotation';
import Container from './Container';
import Learnings from "../data/MediaLearnings";
import Work from "../data/MediaWork";

type RotationsProps = {
  offset: number,
  speed: number,
  factor?: number
}

const { diagonalPolygonLeft } = shapes;

const Media = ({ offset, speed, factor = 1 }: RotationsProps) => {

  return (
    <Layer offset={offset} speed={speed} factor={factor} clipPath={diagonalPolygonLeft} bgColor="green">
      <Container>
        <Rotation title="Media" Learnings={Learnings} Work={Work} />
      </Container>
    </Layer>
  )
};

export default Media;

import React from 'react'

import Layer from './Layer';
import { shapes } from '../constants/shapes';

type RotationsProps = {
  offset: number,
  speed: number,
  factor?: number
}

const { diagonalPolygonLeft } = shapes;

const Rotations1 = ({ offset, speed, factor = 1 }: RotationsProps) => {
  return (
    <Layer offset={offset} speed={speed} factor={factor} clipPath={diagonalPolygonLeft} bgColor="green">
      <h1>Rotations content</h1>
    </Layer>
  )
};

export default Rotations1;

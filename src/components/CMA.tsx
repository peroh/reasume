import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Layer from './Layer';
import { shapes } from '../constants/shapes';
import Rotation from './Rotation';
import Container from './Container';
import Learnings from "../data/CMALearnings";
import Work from "../data/CMAWork";

type RotationsProps = {
  offset: number,
  speed: number,
  factor?: number
}

const { diagonalPolygonLeft } = shapes;

const CMA = ({ offset, speed, factor = 1 }: RotationsProps) => {
  const styledContext = useContext(ThemeContext);
  const bgColor = styledContext.colors.bgTertiary;

  return (
    <Layer offset={offset} speed={speed} factor={factor} clipPath={diagonalPolygonLeft} bgColor={bgColor}>
      <Container>
        <Rotation title="CMA" Learnings={Learnings} Work={Work} />
      </Container>
    </Layer>
  )
};

export default CMA;

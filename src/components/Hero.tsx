import React from 'react'

import Layer from './Layer';

type HeroProps = {
  offset: number,
  speed: number,
  factor?: number
}

const Hero = ({ offset, speed, factor = 1 }: HeroProps) => {
  return (
    <Layer offset={offset} speed={speed} factor={factor}>
      <h1>Hero content</h1>
    </Layer>
  )
};

export default Hero;

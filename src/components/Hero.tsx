import React from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import Layer from './Layer';
import Logo from '../images/rea-logo.svg';

type HeroProps = {
  offset: number,
  speed: number,
  factor?: number
}

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  text-align: left;
  padding: 5rem;
  display: flex;
  align-items: center;
`

const ReaLogo = styled(Logo)`
  margin-right: 1rem;
`

const Hero = ({ offset, speed, factor = 1 }: HeroProps) => {
  return (
    <>
      <Layer offset={offset} speed={speed} factor={factor}>
        <Container>
          <ReaLogo />
          <div>
            <h1>Matt Perrott - REAsume</h1>
            <h2>Graduate Developer (UI)</h2>
          </div>
        </Container>
        <ParallaxLayer offset={0.4} speed={-0.3} factor={factor}>
        </ParallaxLayer>
      </Layer>
    </>
  )
};

export default Hero;

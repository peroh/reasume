import React from "react";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";

import Layer from "./Layer";
import Logo from "../images/rea-logo.svg";
import Container from "./Container";
import { media } from "../constants/breakpoints";

type HeroProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const ReaLogo = styled(Logo)`
  margin-right: 1rem;
`;

const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${media.md.css`
    justify-content: flex-start;
    flex-direction: row;
    text-align: left;
  `}
`;

const Hero = ({ offset, speed, factor = 1 }: HeroProps) => {
  return (
    <>
      <Layer offset={offset} speed={speed} factor={factor}>
        <HeroContainer>
          <ReaLogo />
          <div>
            <h1>Matt Perrott - REAsume</h1>
            <h2>Graduate Developer (UI)</h2>
          </div>
        </HeroContainer>
      </Layer>
    </>
  );
};

export default Hero;

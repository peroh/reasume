import React from "react";
import styled from "styled-components";

import Layer from "./Layer";
import { breakpoints } from "../constants/breakpoints";
import Wave from "../images/wave.svg";
import DarkModeToggle from "./DarkModeToggle";

type RotationsProps = {
  offset: number;
  speed: number;
  factor?: number;
};

const StyledWave = styled(Wave)`
  fill: ${({ theme }) => theme.colors.bgTertiary};
  min-width: ${breakpoints.md}px;
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;

const ContactLayer = styled(Layer)`
  align-items: flex-end;
`;

const Links = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    white-space: nowrap;
  }
  margin-bottom: 2rem;
`;

const Info = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Toggle = styled.div`
  margin-bottom: 3rem;
`;

const Contact = ({ offset, speed, factor = 1 }: RotationsProps) => {
  return (
    <>
      <ContactLayer offset={offset} speed={speed} factor={factor}>
        <Info>
          <Toggle>
            <DarkModeToggle />
          </Toggle>
          <Links>
            <a href="https://cara.lekoarts.de/" target="_blank">
              Design inspo
            </a>
            <a href="https://github.com/peroh/reasume/" target="_blank">
              Source
            </a>
          </Links>
        </Info>
        <StyledWave />
      </ContactLayer>
    </>
  );
};

export default Contact;

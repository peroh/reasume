import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import Layer from "./Layer";
import { shapes } from "../constants/shapes";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import data from "../data/data.yaml";
import { media, breakpoints } from "../constants/breakpoints";
import Section from "./Section";
import Wave from "../images/wave.svg";

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
  margin-bottom: 1rem;
  z-index: 1;
  a {
    color: ${({ theme }) => theme.colors.text};
    margin-right: 1rem;
  }
`;

const Contact = ({ offset, speed, factor = 1 }: RotationsProps) => {
  return (
    <>
      <ContactLayer offset={offset} speed={speed} factor={factor}>
        <Links>
          <a href="https://cara.lekoarts.de/" target="_blank">
            Design inspo
          </a>
          <a href="https://github.com/peroh/reasume/" target="_blank">
            Source
          </a>
        </Links>
        <StyledWave />
      </ContactLayer>
    </>
  );
};

export default Contact;

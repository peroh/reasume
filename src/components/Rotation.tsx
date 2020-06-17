import React from "react";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { media } from "../constants/breakpoints";
import Section from "./Section";

type RotationProps = {
  title: string;
  Learnings: React.ComponentType;
  Work: React.ComponentType;
  icons: [React.ComponentType];
};

const Rotation = ({ title, Learnings, Work, icons }: RotationProps) => {
  return (
    <Section
      title={title}
      subTitle1="Learnings"
      subTitle2="Work"
      Component1={Learnings}
      Component2={Work}
      icons={icons}
    />
  );
};

export default Rotation;

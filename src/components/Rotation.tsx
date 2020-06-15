import React from "react";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { media } from "../constants/breakpoints";

type RotationsProps = {
  title: String;
  Learnings: React.ComponentType;
  Work: React.ComponentType;
};

const Container = styled.div`
  padding: 2rem;
  overflow: auto;
`;

const Title = styled.h1``;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md.css`
    flex-direction: row;
  `}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0rem 1rem 0.5rem 1rem;
    position: relative;

    &:before {
      position: absolute;
      content: "–";
      transform: translateX(-15px);
    }
  }
`;

const SubContent = styled.div`
  ${media.md &&
  css`
    flex-basis: 50%;
  `}
`;

const HighlightedText = styled.span`
  color: pink;
`;

const components = {
  ul: List,
  highlight: HighlightedText,
};

const Rotation = ({ title, Learnings, Work }: RotationsProps) => {
  return (
    <MDXProvider components={components}>
      <Container>
        <Title>{title}</Title>
        <Separator />
        <Content>
          <SubContent>
            <h3>Learnings</h3>
            <Learnings />
          </SubContent>
          <SubContent>
            <h3>Work</h3>
            <Work />
          </SubContent>
        </Content>
      </Container>
    </MDXProvider>
  );
};

export default Rotation;

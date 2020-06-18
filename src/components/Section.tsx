import React from "react";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { media } from "../constants/breakpoints";

type SectionProps = {
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  Component1: React.ComponentType;
  Component2: React.ComponentType;
  icons?: [React.ComponentType];
};

const Container = styled.div`
  padding: 2rem;
  overflow: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-left: 0.25rem;
  }
`;

const SubTitle = styled.h3`
  margin-top: 0;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: 1fr 1fr;

  ${media.md.css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
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
  color: ${({ theme }) => theme.colors.accent2};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.accent2};
`;

const components = {
  ul: List,
  highlight: HighlightedText,
  a: Link,
};

const Section = ({
  title,
  subTitle1,
  subTitle2,
  Component1,
  Component2,
  icons,
}: SectionProps) => {
  return (
    <MDXProvider components={components}>
      <Container>
        <TitleContainer>
          <h1>{title}</h1>
          <Icons>{icons && icons.map((Icon) => <Icon />)}</Icons>
        </TitleContainer>
        <Separator />
        <Content>
          <SubContent>
            {subTitle1 && <SubTitle>{subTitle1}</SubTitle>}
            <Component1 />
          </SubContent>
          <SubContent>
            {subTitle2 && <SubTitle>{subTitle2}</SubTitle>}
            <Component2 />
          </SubContent>
        </Content>
      </Container>
    </MDXProvider>
  );
};

export default Section;

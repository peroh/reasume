import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from "@mdx-js/react"

// import Learnings from '../data/Learnings.mdx'

type RotationsProps = {
  title: String,
  Learnings: React.ReactNode,
  Work: React.ReactNode
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`

const Content = styled.div`
  display: flex;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

const HighlightedText = styled.span`
  color: pink;
`

const components = {
  ul: List,
  highlight: HighlightedText
}

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
  )
}

export default Rotation;
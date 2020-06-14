import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components';

import Layout from '../components/layout';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layer = styled(ParallaxLayer)`
  background-color: lightsalmon;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layer2 = styled(ParallaxLayer)`
  background-color: lightslategray;
`;

const Main = (props: IndexPageProps, context: any) => {
  const parallax = useRef(null);
  const scroll = (to: any) => parallax.current.scrollTo(to);

  return (
    <Layout>
      <Parallax pages={3} ref={parallax}>
        <Layer offset={0} speed={0.2} factor={1}>
          <h1 onClick={() => scroll(2)}>{props.data.site.siteMetadata.title}</h1>
        </Layer>
        <Layer2 offset={1} speed={-0.2} factor={1}>
          <strong>Second Section</strong>
        </Layer2>
      </Parallax>
    </Layout>
  )
}

export default Main;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

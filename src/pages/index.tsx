import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Rotations from '../components/Rotations';
import Rotations1 from '../components/Rotations1';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Main = (props: IndexPageProps, context: any) => {
  const parallax = useRef(null);
  const scroll = (to: any) => parallax.current.scrollTo(to);

  return (
    <Layout>
      <Parallax pages={3} ref={parallax}>
        <Hero offset={0} speed={0.2} />
        <Rotations offset={1} speed={-0.2} />
        <Rotations1 offset={2} speed={0.5} />
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

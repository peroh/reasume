import React, { useRef } from 'react'
import { Parallax } from 'react-spring/renderprops-addons'

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Rotations from '../components/Rotations';
import Media from '../components/Media';
import Spacely from '../components/Spacely';

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
      <Parallax pages={4} ref={parallax}>
        <Hero offset={0} speed={0.2} />
        <Rotations offset={1} speed={-0.2} />
        <Media offset={2} speed={0.5} />
        <Spacely offset={3} speed={0.5} />
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

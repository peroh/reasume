import React, { useRef } from "react";
import { Parallax } from "react-spring/renderprops-addons";
import { useMediaQueries } from "@react-hook/media-query";
import styled from "styled-components";

import { mediaSizes } from "../constants/breakpoints";
import { getFactor } from "../utils/helpers";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Rotations from '../components/Rotations';
import Media from "../components/Media";
import Spacely from "../components/Spacely";
import CMA from "../components/CMA";
import Projects from "../components/Projects";
import More from "../components/More";
import DarkModeToggle from "../components/DarkModeToggle";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const FACTORS = {
  mobile: 1.8,
  tablet: 1.3,
  desktop: 1.1,
};

const Toggle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Main = (props: IndexPageProps, context: any) => {
  const parallax = useRef(null);
  const scroll = (to: number) => parallax.current.scrollTo(to);
  const { matches } = useMediaQueries(mediaSizes);

  return (
    <>
      <Layout>
        <Parallax pages={7} ref={parallax}>
          <Hero offset={0} speed={0.2} />
          {/* <Rotations offset={1} speed={-0.2} /> */}
          <Media
            offset={1}
            speed={matches.mobile ? 1 : -0.2}
            factor={getFactor(1, matches, FACTORS)}
          />
          <Spacely
            offset={2}
            speed={0.2}
            factor={getFactor(1, matches, FACTORS)}
          />
          <CMA
            offset={3}
            speed={matches.mobile ? 1 : 0}
            factor={getFactor(1, matches, FACTORS)}
          />
          <Projects
            offset={4}
            speed={matches.mobile ? 1 : 0}
            factor={getFactor(1, matches, FACTORS)}
          />
          <More
            offset={5}
            speed={matches.mobile ? 1 : 0}
            factor={getFactor(1, matches, FACTORS)}
          />
        </Parallax>
      </Layout>
      <Toggle>
        <DarkModeToggle />
      </Toggle>
    </>
  );
};

export default Main;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

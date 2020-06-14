import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components';

import Layout from '../components/Layout';
import { ThemeContext } from '../components/ThemeContext';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bg};
  color: var(--color-text);
  border: 1px solid var(--color-primary);
`

const DarkModeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(
    ThemeContext
  );
  if (!colorMode) {
    return null;
  }

  const isDark = colorMode === "dark";

  return (
    <Button
      onClick={() => {
        isDark ? setColorMode("light") : setColorMode("dark")
      }}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </Button>
  )
}

const Layer = styled(ParallaxLayer)`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layer2 = styled(ParallaxLayer)`
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Main = (props: IndexPageProps, context: any) => {
  const parallax = useRef(null);
  const scroll = (to: any) => parallax.current.scrollTo(to);

  return (
    <Layout>
      <Parallax pages={3} ref={parallax}>
        <DarkModeToggle />
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

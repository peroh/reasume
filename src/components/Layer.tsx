import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

type LayerProps = {
  clipPath?: String;
  bgColor?: String;
}

const Layer = styled(ParallaxLayer)<LayerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ bgColor }) => bgColor && `
    background-color: ${bgColor};
  `};

  ${({ clipPath }) => clipPath && `
    clip-path: ${clipPath};
  `}
`;

export default Layer;

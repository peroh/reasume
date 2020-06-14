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
  background-color: ${({ theme, bgColor }) => (
    bgColor ? bgColor : theme.colors.bg
  )};
  ${({ clipPath }) => clipPath && `
    clip-path: ${clipPath};
  `}
`;

export default Layer;

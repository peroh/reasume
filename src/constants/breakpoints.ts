import { mapValues } from "lodash";
import { css } from "styled-components";

export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

type MediaSizes = {
  mobile: string;
  desktop: string;
};

export const mediaSizes: MediaSizes = {
  mobile: `(max-width: ${breakpoints.xs}px)`,
  desktop: `(min-width: ${breakpoints.md}px)`,
};

/* Source: Spacely */
export const media = mapValues(breakpoints, (width) => ({
  css: (...args: TemplateStringsArray) => css`
    @media (min-width: ${width}px) {
      ${css(args)}
    }
  `,
}));

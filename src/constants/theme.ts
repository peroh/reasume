import { colorDefs } from "./colors";

export const theme = {
  colors: {
    bg: "var(--color-background)",
    bgSecondary: "var(--color-backgroundSecondary)",
    bgTertiary: "var(--color-backgroundTertiary)",
    primary: "var(--color-primary)",
    text: "var(--color-text)",
    accent1: "var(--color-accent1)",
  },
  gradients: {
    grad1: `linear-gradient(90deg, ${colorDefs.roman} 0%, ${colorDefs.mango} 100%)`,
    grad2: `linear-gradient(90deg, ${colorDefs.viking} 0%, ${colorDefs.shamrock} 100%)`,
  },
};

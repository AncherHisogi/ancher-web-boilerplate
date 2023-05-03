import { DefaultTheme } from "styled-components";
import { breakpoints, maxWidth, minWidth } from "./breakpoints";
import { typography } from "./commonStyles";

export const theme: DefaultTheme = {
  colors: {
    primary: "#24CAE2",
    secondary: "#1692A4",
    black: "#000000",
    white: "#ffffff",
    vividRed: "#cf2e2e"
  },
  typography,
  gradients: {
    blueToPurple: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  },
  breakpoint: {
    max: maxWidth,
    min: minWidth,
    val: breakpoints
  }
};

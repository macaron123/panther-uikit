import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#05386B",
  primaryBright: "#5CDB95",
  primaryDark: "#05386B",
  secondary: "#379683",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#EDF5E1",
  backgroundDisabled: "#E9EAEB",
  contrast: "#05386B",
  invertedContrast: "#5CDB95",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#EDF5E1",
  textDisabled: "#BDC2C4",
  textSubtle: "#8EE4AF",
  borderColor: "#05386B",
  card: "#05386B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};

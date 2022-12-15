"use client";
import { createTheme } from "@mui/material";
import tailwind, { theme } from "./tailwind.config";
const colors = { ...tailwind.theme.extend.colors };

const themeOptions = createTheme(theme, {
  palette: {
    type: "light",
    primary: {
      main: "#069B3E",
    },
    secondary: {
      main: "#FFCC07",
      dark: "#408C32",
      light: "#069B3E",
    },
    paper: {
      main: "#FFF",
      dark: "#FFF",
      light: "#FFF",
    },
  },
  components: {
    MuiButtonContained: {
      styleOverrides: {
        root: {
          background: `${colors.secondary.dark} !important`,
        },
      },
    },
  },
});

export default themeOptions;

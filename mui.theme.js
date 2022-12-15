"use client";
import createTheme from "@mui/material/styles/createTheme";
import tailwind, { theme } from "./tailwind.config";
const colors = { ...tailwind.theme.extend.colors };

const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#069B3E",
      light: "rgb(4, 108, 43)",
      dark: "rgb(4, 108, 43)",
    },
    secondary: {
      main: "#FFCC07",
      dark: "#408C32",
      light: "#069B3E",
    },
    info: {
      main: "rgb(55, 175, 100)",
      light: "rgb(55, 175, 100)",
      dark: "rgb(55, 175, 100)",
    },
    paper: {
      main: "#FFF",
      dark: "#FFF",
      light: "#FFF",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "9999px !important",
        },
      },
    },
  },
});

export default themeOptions;

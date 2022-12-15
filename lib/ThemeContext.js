"use client";
import { ThemeProvider } from "@mui/material";
import theme from "../mui.theme";

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <>{props.children}</>
  </ThemeProvider>
);

export default Theme;

"use client";
import "@/styles/globals.css";
import ThemeContext from "@/lib/ThemeContext";
import { StyledEngineProvider } from "@mui/material/styles";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body id="__next">
        <StyledEngineProvider injectFirst={true}>
          <ThemeContext>{children}</ThemeContext>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

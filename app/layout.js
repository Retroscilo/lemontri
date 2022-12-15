"use client";
import "@/styles/globals.css";
import ThemeContext from "@/lib/ThemeContext";
import { StyledEngineProvider } from "@mui/material/styles";
import localFont from "@next/font/local";
import { HomeButtonContext } from "@/lib/HomeButtonContext";
import { useState } from "react";
import HomeButton from "@/components/HomeButton";

const edo = localFont({ src: "../assets/fonts/edosz.ttf", variable: "--font-edo" });

export default function RootLayout({ children }) {
  const [visible, setVisible] = useState(false);
  const [styles, setStyles] = useState({});
  return (
    <html>
      <head />
      <body id="__next" className={edo.variable}>
        <StyledEngineProvider injectFirst={true}>
          <HomeButtonContext.Provider value={{ styles, setStyles, visible, setVisible }}>
            <ThemeContext>{children}</ThemeContext>
            <HomeButton />
          </HomeButtonContext.Provider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}

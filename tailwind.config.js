/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  important: "#__next",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stateMachines/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-edo)", ...fontFamily.sans],
      },
      colors: {
        primary: "#FFCC07", // jaune
        secondary: {
          light: "#069B3E",
          dark: "#408C32",
        }, // vert
        light: "#F8F7D3", // jaune pale
        gray: "#969696",
        dark: "#4B4B4B",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

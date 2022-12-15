/** @type {import('tailwindcss').Config} */

module.exports = {
  important: "#__next",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./stateMachines/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC07", // jaune
        secondary: {
          light: "#069B3E",
          dark: "#408C32",
        }, // vert
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

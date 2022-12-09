/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5cc07",
        secondary: "#389c3e",
        highlight: "#F28482",
      },
    },
  },
  plugins: [],
};

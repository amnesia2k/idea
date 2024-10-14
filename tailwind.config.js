/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#9E78CF",
        primarybg: "#1D1825",
        secondarybg: "#0c0715",
        textalt: "#78CFB0",
        placeholdertext: "#777777",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        mono: ["Roboto Mono", "Monospace"],
      },
    },
  },
  plugins: [],
};

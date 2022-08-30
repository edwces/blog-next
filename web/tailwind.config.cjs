const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata", ...defaultTheme.fontFamily.sans],
        header: ["Inconsolata"],
      },
      colors: {
        black: "#2E3440",
        lighter: "#3B4252",
        3: "#434C5E",
        4: "#4C566A",
        white: "#ECEFF4",
        dimmed: colors.gray[400],
        primary: "#88C0D0",
        secondary: "#A3BE8C",
        yellow: "#EBCB8B",
      },
    },
  },
  plugins: [],
};

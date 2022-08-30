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
        "black-2": "#3B4252",
        "black-3": "#434C5E",
        "black-4": "#4C566A",
        white: "#ECEFF4",
        dimmed: colors.gray[400],
        primary: "#88C0D0",
        interactive: "#A3BE8C",
        anchor: "#EBCB8B",
      },
    },
  },
  plugins: [],
};

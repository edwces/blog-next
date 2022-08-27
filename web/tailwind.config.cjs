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
        primary: colors.white,
        secondary: colors.green,
      },
    },
  },
  plugins: [],
};

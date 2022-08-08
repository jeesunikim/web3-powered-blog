const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: [
          "Playfair Display",
          "Cormorant Garamond",
          "Georgia",
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      height: {
        image: "38rem",
      },
    },
  },
  plugins: [],
};

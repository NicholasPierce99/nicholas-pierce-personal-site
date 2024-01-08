/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#30456C",
        secondary: "#30456C",
        textPrimary: "#B6A59B",
        textSecondary: "#B6A59B",
        accent: "#30456C",
        hoverSecondary: "#027378",
        hoverPrimary: "#292d33",
        divider: "#222831",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};

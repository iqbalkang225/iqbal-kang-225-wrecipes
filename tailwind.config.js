/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
    },
    colors: {
      accent: "#fe746f",
      "accent-light": "#fde0dc",
    },
  },
  plugins: [],
};

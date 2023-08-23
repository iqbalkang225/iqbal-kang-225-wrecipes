/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        accent: "#fe746f",
        "accent-light": "#fde0dc",
      },
    },
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
    },
  },
  plugins: [],
};

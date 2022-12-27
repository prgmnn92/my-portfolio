/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    extend: {
      colors: {
        "brick-red": "#d44d5cff",
      },
    },
  },
  // mode: "jit",
  variants: ["responsive"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

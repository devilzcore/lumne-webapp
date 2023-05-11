/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        menu: "#191919",
        main: "#232323",
        content_loading: "#414141",
        t_white: "#F5F5F5",
        t_red: "#FF1F3D",
        t_pink: "#F50045",
      },
    },
  },
  plugins: [],
};

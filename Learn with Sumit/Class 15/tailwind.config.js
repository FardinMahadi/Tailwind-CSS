const tailwindcss = require("tailwindcss");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  content: ["index.html"],
  theme: {
    screens: {
      sm: "540",
      lg: "1000",
      "4k": "2560",
    },
    fontFamily: {
      sans: ["Roboto", fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};

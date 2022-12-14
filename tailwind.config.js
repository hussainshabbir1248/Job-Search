const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-grey-1": "#dadce0",
        "brand-green-1": "#137333",
        "brand-blue-1": "#1967d2",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4385f4",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({});
    }),
  ],
};

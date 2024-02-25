/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      cream: "hsl(27, 66%, 92%)",
      "dark-brown": "hsl(25, 47%, 15%)",
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      "very-pale-orange": "hsl(33, 100%, 98%)",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

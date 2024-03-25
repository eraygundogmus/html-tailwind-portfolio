/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-img": "url('./background.png')",
      },
    },
  },
  plugins: [],
};

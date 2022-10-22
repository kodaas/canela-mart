/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      DMSans: "'DM Sans', sans-serif;",
    },

    colors: {
      dark: '#06161C',
      grey: '#979899',
      white: '#FFFFFF',
      pry: '#23AA49',
      sec: '#FF324B',
      'stroke-light': '#F1F1F5',
      'light-grey': '#E0E0E0',
      'light-grey2': '#DBDBDB',
      'light-bg': '#DBDBDB',
      'dark-grey': '#617986',
      'dark-bg': '#0D1F29',
      'dark-bg2': '#1A3848',
      'dark-bg3': '#2D5368',
      'dark-stroke': '#203744',

    },

    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1024': '1024px'
      }
    },
    screens: {
      'xs' : '480px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}


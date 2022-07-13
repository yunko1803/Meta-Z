/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    colors: {
      blue: '#1A1A1A',
      disable: '#D6D4D4',
      gray: {
        100: '#666666',
        200: '#B3B3B3',
        300: '#F2F2F2',
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      custom: ['Balsamiq Sans', 'cursive'],
    },
  },
}

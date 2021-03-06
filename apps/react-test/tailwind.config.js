/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    colors: {
      black: '#1A1A1A',
      disable: '#D6D4D4',
      ghost: 'rgba(0, 0, 0, .14)',
      gray: {
        100: '#666666',
        200: '#B3B3B3',
        300: '#F2F2F2',
      },
      white: '#FFFFFF',
    },
    extend: {
      screens: {
        mobile: {max: '639px'},
      },
    },
    fontFamily: {
      custom: ['Balsamiq Sans', 'cursive'],
    },
  },
}

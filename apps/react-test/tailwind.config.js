/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      color: {
        'custom-gray': '#F2F2F2',
      },
    },
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // обов'язково вкажи шляхи до файлів з класами
  theme: {
    extend: {
      colors: {
        yellow: '#fed138',
        gray: '#9d9d9d',
        cardWhite: '#f7f7f7',
      },
    },
  },
  plugins: [],
}

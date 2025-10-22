/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea', // Morado principal
        secondary: '#f3e8ff', // Lila claro
        accent: '#ec4899', // Rosa acento
        background: '#f9fafb', // Fondo claro
      },
    },
  },
  plugins: [],
}

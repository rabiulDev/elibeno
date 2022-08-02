/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      colors: {
        'pink': '#FA5C6D',
        'darkBlue': '#1A1E49',
        'lightBlue': '#1E2356'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'syne': ['Syne', 'sans-serif']
      }
    },
  },
  plugins: [],
}

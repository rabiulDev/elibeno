/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1320px'
    },
    extend: {
      colors: {
        'pink': '#FA5C6D',
        'darkBlue': '#1A1E49',
        'lightBlue': '#1E2356'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'syne': ['Syne', 'sans-serif']
      },

    },
  },
  plugins: [],
}

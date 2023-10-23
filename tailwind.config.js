/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    container: {
      center: true,
      padding: '48px',
    },
    fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        sky: '#0F2C59',
        fresh: '#ffc700',
        night: '#F0F0F0',
        dark: '#3f3f3f',
        grey: '#bcbcbc'
      },
    },
  },
  plugins: [],
}

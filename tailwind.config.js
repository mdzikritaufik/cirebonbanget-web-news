/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
    extend: {
      colors: {
        primary: '#5887c2',
        secondary: '#999999',
        ternary: '#ffc512',
        dark: '#3f3f3f'
      },
    },
  },
  plugins: [],
}

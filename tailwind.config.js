/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './app.tsx', './views/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Inter Variable', 'sans-serif'],
      secondary: ['Roboto Slab Variable', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}


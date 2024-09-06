/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './app.tsx', './views/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Inter Variable', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}


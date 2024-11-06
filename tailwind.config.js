/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
      DEFAULT: '8px',
      md: '6px',
      lg: '2rem',
  },
    },
    fontFamily:{
      "rubik" :["Rubik", "sans-serif"]
    },
  plugins: [],
  }
}
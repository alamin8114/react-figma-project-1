/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brand-color'     : '#F53838',
        'secondary-color' :"#0B132A",
        'paragraph-color' :"#4F5665",
      },
    },
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
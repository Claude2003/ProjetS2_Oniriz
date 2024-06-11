/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['router-link-active'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
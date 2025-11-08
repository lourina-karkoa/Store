/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-identity': '#374151',
        'dark-mode': '#090D1F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      screens: {

        'desktop': '1500px',
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': 'hsl(209, 23%, 22%)',
        'Very-Dark-Blue': 'hsl(207, 26%, 17%)',
        'Very-Dark-Blue-(Light Mode Text)': 'hsl(200, 15%, 8%)',
        'Dark-Gray': 'hsl(0, 0%, 52%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
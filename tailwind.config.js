/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zahir-purple': '#6B2C91',
        'zahir-green': '#22c55e',
      }
    },
  },
  plugins: [],
}
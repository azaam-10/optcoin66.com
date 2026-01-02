
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        binance: {
          yellow: '#f0b90b',
          black: '#0b0e11',
          gray: '#1e2329',
          textGray: '#848e9c',
        }
      }
    },
  },
  plugins: [],
}

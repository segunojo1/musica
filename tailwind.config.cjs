/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bla' : '#1D2123',
        'dark' : '#1A1E1F'
      }
    },
  },
  plugins: [],
}

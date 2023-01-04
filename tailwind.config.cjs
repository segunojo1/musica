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
        'dark' : '#1A1E1F',
        'text-col' : 'rgb(255,255,255,50%)',
        'red' : 'red',
        'transp' : 'rgba(0, 0, 0, 0.200)',
        'bgg' : 'rgba(51,55,59,37%)'
      }
    },
  },
  plugins: [],
}

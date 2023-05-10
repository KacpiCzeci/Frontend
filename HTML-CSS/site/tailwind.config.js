/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'daher-blue': '#002a60',
        'daher-red': '#f5000c',
        'daher-darkgray': '#3a3a3a',
        'daher-gray': '#565656'
      }
    },
  },
  plugins: [],
}


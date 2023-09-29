/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'about-bg': '#171717',
      },
      // screens: {
      //   sm: '600px',
      //   md: '728px',
      //   lg: '984px',
      //   xl: '1240px',
      //   '2xl': '1496px',
      // },
    },
  },
  plugins: [],
}
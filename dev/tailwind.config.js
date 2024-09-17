/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'sc-beige': '#FFF4D8'
      }
    },
    fontFamily : {
      'display': ['Itim'],
      'body': ['Itim'],
    }
  },
  plugins: [],
}

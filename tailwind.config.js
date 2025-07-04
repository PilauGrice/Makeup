/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.antlers.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#dc9eab',
        twoPink: '#fce6e6',
        darkPink: '#A3004C',
      },
      backgroundImage: {
        heroRight: "url('/assets/darkfeather.jpg')",
      },
      screens: {
        'md-lg': '991px',
        '1lg': '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

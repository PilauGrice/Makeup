module.exports = {
  content: [
    './resources/views/**/*.antlers.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      
        colors: {
        // Add your custom colors here
        brandPink: '#dc9eab',
    },
  },
},
  plugins: [require('@tailwindcss/typography')],
};

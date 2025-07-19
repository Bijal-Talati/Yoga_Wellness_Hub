// --------------------------
// tailwind.config.js
// --------------------------
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: '#f5f3ea',
        clay: '#e0d7c6',
        forest: '#47624f',
        sky: '#cfe8e2',
        earth: '#a58b6f',
        sage: '#DDEAD5',
        skyblue: '#CBE6F2',
        beige: '#F5F0E6',
        warmgray: '#D1CBC3',
        offwhite: '#FAFAF7',
        accenttext: '#3C3C3B',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
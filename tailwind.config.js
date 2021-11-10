module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'mountain': "url('/src/assets/mountain.jpg')",
       }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      darkPurple: '#434870',
      stripePurple: '#635BFF',
      stripeBlue: '#C5F1FF'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

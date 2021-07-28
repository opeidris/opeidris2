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
    maxWidth: {
      '3/5': '60%',
    },
    rotate: {
      '-20' : '-20deg',
      '20' : '20deg'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

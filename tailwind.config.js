module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      darkPurple: '#434870',
      stripePurple: '#635BFF',
      stripeBlue: '#C5F1FF',
      stripeHover: '#615AE9',
      stripeHoverLight: '#DFDDFF',
      darkest: '#222831',
			dark: '#393e46',
			light: '#00adb5',
			lightest: '#eeeeee',
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

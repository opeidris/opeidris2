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
      'orange-100': '#FFEDD5',
      'orange-300': '#FDBA74',
      'orange-500': '#FF6600',
      'orange-700': '#EA580C',
      'orange-800': '#9A3412',
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

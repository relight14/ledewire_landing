import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandYellow: '#fff38D',
        brandWhite: '#FFFFFF',
        brandOffWhite: '#F1F1F1',
        brandGray: '#464646',
        brandBlue: '#dae6ef',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Merriweather', ...fontFamily.serif], // Use for headlines
      },
    },
  },
  plugins: [],
};



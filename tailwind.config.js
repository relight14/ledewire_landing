/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FFF38D',     // Highlighter yellow
        background: '#FFFFFF', // Pure white
        surface: '#F1F1F1',   // Light grey background
        ink: '#464646',       // Dark grey for text
        accent: '#DAE6EF',    // Muted blue-grey for contrast
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean and modern
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

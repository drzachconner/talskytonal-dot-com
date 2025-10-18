/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6383ab',
          dark: '#002d4e',
          light: '#73b7ce',
          accent: '#405e84',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ttc: {
          blue: '#4A6BA5',
          navy: '#2C3E50',
          cream: '#E8DCC8',
          'blue-hover': '#3D5481',
        },
        text: {
          dark: '#333333',
          light: '#666666',
          neutral: '#555555',
        },
        border: {
          light: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Work Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
        script: ['cursive'],
      },
      letterSpacing: {
        wider: '0.08em',
      },
    },
  },
  plugins: [],
};

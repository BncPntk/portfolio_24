/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#E2E8F0',
        fontMain: '#333333',
        fontSecondary: '#555555',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};

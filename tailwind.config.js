/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F8F7',
        fontMain: '#333333',
        fontSecondary: '#555555',
        actionMain: '#1d4ed8',
        actionSecondary: '#0384C7',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};

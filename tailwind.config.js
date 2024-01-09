/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F8F7',
        blackMain: '#333333',
        blackSecondary: '#555555',
        blackTertiary: '#404040',
        actionMain: '#1d4ed8',
        actionSecondary: '#0384C7',
        titleOne: '#40C3CA',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};

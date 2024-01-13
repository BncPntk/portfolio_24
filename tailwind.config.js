/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F8F7',
        title: '#333333',
        textImportant: '#525660',
        text: '#5e6472',
        titleName: '#42A5F5',

        highlight: '#26C5F3',
        success: '#7fc8f8',

        trivial: '#0D47A1',

        blueMedium: '#2196F3',
        blueLight: '#2EE3DA',

        action: '#2B2D42',
        actionHover: '#1E88E5',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};

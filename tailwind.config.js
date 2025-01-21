/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magenta: '#D5006D',
        darkMagenta: '#8A0047',
        brightPink: '#FF3D81',
        brightYellow: '#FFEB3B',
        teal: '#00BFAE',
        lightTeal: '#00FAE5',
        darkTeal: '#005F5A',
        darkerTeal: '#00473F',
      },
    },
  },
  plugins: [],
};

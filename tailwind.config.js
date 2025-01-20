/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      colors: {
        magenta: '#D5006D',
        darkMagenta: '#8A0047',
        brightPink: '#FF3D81',
        citrusOrange: '#FFB74D',
        brightYellow: '#FFEB3B',
        teal: '#00BFAE',
        lightTeal: '#00FAE5',
        darkBg: '#1E293B',
        lightBg: '#FFFFFF',
        darkText: '#E2E8F0',
        lightText: '#1E293B',
      },
    },
  },
  plugins: [],
};

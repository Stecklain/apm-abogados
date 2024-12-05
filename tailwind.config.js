/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: '#013E6E',
        secondary: '#014F8D',
        base: '#F7F7F7',
        baseDark: '#303131',
      },
      fontFamily: {
        serif: ['serif'],
        sans: ['Viga', 'Roboto'],
      },
    },
  },
  plugins: [],
};

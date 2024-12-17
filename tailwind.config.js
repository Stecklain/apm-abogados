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
         customBlue: '#23314B',
         customGrey: '#3F4A5D',
      },
      fontFamily: {
        serif: ['serif'],
        sans: ['Viga', 'Roboto'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        'primary': '#F8FAFC',
        'primary-dark': '#23282f',
        'secondary': '#45505E',
        'secondary-dark': '#E2E8F0',
        'tertiary': '#1CB47C',
      }
    },
  },
  plugins: [],
};

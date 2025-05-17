/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'Tajawal', 'sans-serif'],
      },
      colors: {
        'success-green': '#4ade80',
        'navy-blue': '#312e81',
      },
      textColor: {
        'success': '#4ade80',
        'headline': '#312e81',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
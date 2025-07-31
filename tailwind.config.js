/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'color-white-solid': '#FFFFFF',
        'color-black-solid': '#000000',
        'color-grey-13': '#1A1A1A',
        'color-grey-95': '#F2F2F2',
        'color-spring-green-19': '#00FF88',
      },
      fontFamily: {
        'Ovo': ['Ovo', 'serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
      maxWidth: {
        '1280': '1280px',
        '1360': '1360px',
      },
      backgroundImage: {
        'gradient-amber': 'linear-gradient(135deg, #92400e, #b45309, #d97706)',
        'gradient-amber-light': 'linear-gradient(135deg, #fef3c7, #fde68a)',
        'gradient-amber-cards': 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        'gradient-amber-cards-2': 'linear-gradient(135deg, #f59e0b, #d97706)',
      },
    },
  },
  plugins: [],
} 
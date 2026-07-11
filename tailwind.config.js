/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F7E7B0',
          dark: '#A8842A',
        },
        rose: {
          DEFAULT: '#B76E79',
          light: '#E8B4B8',
          dark: '#8C4F58',
        },
        ink: {
          DEFAULT: '#000000',
          soft: '#1A1A1A',
          charcoal: '#252220',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(110deg, #A8842A 20%, #F7E7B0 40%, #D4AF37 60%, #A8842A 80%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.25)',
        'rose-glow': '0 0 30px rgba(183, 110, 121, 0.35)',
      },
    },
  },
  plugins: [],
}

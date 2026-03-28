/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#a67143',
          light: '#c88d59',
          muted: 'rgba(166,113,67,0.22)',
        },
        cedar: {
          DEFAULT: '#8f5a33',
          light: '#b27144',
        },
        sand: '#dfbf96',
        bark: '#241813',
        cream: '#efe6da',
        'warm-white': '#f8f2e9',
        charcoal: '#261b16',
        mid: '#4b382d',
        stone: '#7d6b5d',
        'light-stone': '#d7c5b0',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}

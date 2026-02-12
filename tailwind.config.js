/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#B08D57',
        maroon: '#4C0D02',
        cream: '#E6D3B1',
        dark: '#2A0701',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'slow-pan': 'pan 20s linear infinite',
        'subtle-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pan: {
          '0%, 100%': { transform: 'scale(1.1) translateX(0)' },
          '50%': { transform: 'scale(1.1) translateX(-2%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

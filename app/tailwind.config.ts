// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-y 8s linear infinite',
      },
      keyframes: {
        'spin-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
};
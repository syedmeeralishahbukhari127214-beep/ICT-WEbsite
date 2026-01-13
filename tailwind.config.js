/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router ke liye
    "./components/**/*.{js,ts,jsx,tsx}" // Agar tum components folder use karte ho
  ],
  theme: {
    extend: {
      fontSize: {
        base: '14px',
        lg: '16px',
        xl: '18px',
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [],
}

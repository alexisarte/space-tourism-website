/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-black': '#0B0D17',
        'pale-blue': '#D0D6F9',
        'primary-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
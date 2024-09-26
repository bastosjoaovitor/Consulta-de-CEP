/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': 'var(--A-color)',
        'color-2': 'var(--B-color)',
        'color-3': 'var(--C-color)',
      },
    },
  },
  plugins: [],
}
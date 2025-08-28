/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        gold: '#C6A15B',
        gold2: '#E0C27A',
        card: '#111111',
        border: '#1E1E1E',
        muted: '#9ca3af'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(198,161,91,0.15)'
      }
    },
  },
  plugins: [],
}

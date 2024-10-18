/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10px 10px #252525',
        'custom2': '0px 0px 10px 10px #2947be',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.8)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 20px rgba(0, 0, 255, 0.8), 0 0 40px rgba(0, 0, 255, 0.8)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.8)' },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}


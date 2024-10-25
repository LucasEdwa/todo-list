/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'app-bg': "url('./src/images/bg1.png')", // Replace with the actual path to your image

        'gradient-bl-tr': 'linear-gradient(to top right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082)',
      },
    },
  },
  plugins: [],
}
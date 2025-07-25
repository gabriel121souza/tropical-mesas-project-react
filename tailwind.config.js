/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['"Fira Code"', 'monospace'],
      },
      colors: {
        primary: {
          500: "#FF6B35",
          600: "#E05A2C",
        },
        background: "#FFFFFF",
      },
    },
  },
  // Only include plugins you've installed:
  plugins: [], // Removed forms plugin
};
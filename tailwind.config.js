/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "rgb(228, 255, 51)",
        whitesmoke: "rgb(245, 245, 247)",
      }
    },
  },
  plugins: [],
}
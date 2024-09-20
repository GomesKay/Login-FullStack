/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Archivo Narrow", "sans-serif"],
    },
    screens: {
      // => @media (max-width: 600px)
      "mobile": { max: "600px"}
    }
  },
  plugins: [],
}


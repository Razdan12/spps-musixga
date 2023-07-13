/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E64F0",
       secondary: "#00D1FF"
      },
    },
  },
  plugins: [require("daisyui")],
}


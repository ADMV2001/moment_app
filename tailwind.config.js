/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#1DA1F2',
      },
      fontFamily:{
        sans: ['LatoRegular', 'sans-serif'],
        bold: ['LatoBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


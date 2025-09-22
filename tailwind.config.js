/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#CFFFE2',
        secondary: '#A2D5C6',
        third: '#F6F6F6',
        background: '#000000',
      },
      fontFamily:{
        sans: ['LatoRegular', 'sans-serif'],
        bold: ['LatoBold', 'sans-serif'],
      },
      arbitrary: ['width', 'height'],
    },
  },
  plugins: [],
}


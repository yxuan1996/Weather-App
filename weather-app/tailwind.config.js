/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('./src/assets/city-background-night-1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      } 
    },
  },
  // darkMode: "class",
  // plugins: [nextui()],
  plugins: [require("daisyui")],
}


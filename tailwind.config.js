/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // warna aksen sesuai desain Figma (orange highlight di teks "stronger")
        accent: "#c86139",
        dark: "#0c0c0c",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { dark: "#0F0F0F", lightgray: "#f1f3f5", light: "#fff" },
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: ["tailwindcss", "autoprefixer", require("tailwind-scrollbar-hide")],
  darkMode: "class",
};

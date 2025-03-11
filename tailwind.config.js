/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    
    "./src/**/*.{js,jsx,ts,tsx}"], // Make sure all files using Tailwind are included
  safelist: [
    "text-1xl", "font-semibold", "underline", "rounded", "bg-green"
  ], // Keep these classes in production
  theme: {
    extend: {},
  },
  plugins: [],
};

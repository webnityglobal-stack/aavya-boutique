/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors: { ink: "#292521", cream: "#f8f5f0", rose: "#a65e55", sand: "#e9dfd2" },
    fontFamily: { display: ["Playfair Display", "serif"], sans: ["DM Sans", "sans-serif"] }
  }},
  plugins: []
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Elegant Typography System
      Croissant: "'Croissant One', cursive",
      Playfair: "'Playfair Display', serif", 
      Source: "'Source Sans Pro', sans-serif",
      Inter: "'Inter', sans-serif",
      // Legacy fonts (keeping for compatibility)
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#F6F5F4",        // inverted to light cream
        secondary: "#7291A2",      // inverted rich blue-gray
        accent: "#29486F",         // inverted deep blue
        bg_light_primary: "#050608",     // inverted to deep black
        gray: "#3A4550",           // inverted dark gray
        dark: "#7291A2",
        velvet: "#A7E7BA",         // inverted to light mint
        background: "#050608",     // inverted to deep black
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #060A10 0%, #0D1623 50%, #000000 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(32, 26, 19, 0.9)",
      },
    },
  },
  plugins: [],
};

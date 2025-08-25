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
        dark_primary: "#0C0A09",        // deep velvet burgundy
        secondary: "#8D6E63",      // rich classical gold
        accent: "#D6B370",         // antique muted gold
        bg_light_primary: "#FAF9F7",     // soft parchment
        gray: "#C5BAAF",           // old paper gray
        dark: "#8D6E63",
        velvet: "#581845",
        background: "#FAF9F7",     
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #F9F5EF 0%, #F2E9DC 50%, #FFFFFF 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};

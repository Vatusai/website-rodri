/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Updated Typography System with Cardo and Arial/Bunya
      Display: "'Cardo', 'Georgia', serif",            // Main headlines - elegant serif
      Heading: "'Cardo', 'Georgia', serif",            // Section headings - consistent with display
      Body: "'Arial', 'Helvetica Neue', sans-serif",  // Body text - clean sans-serif
      Secondary: "'Bunya', 'Arial', sans-serif",      // Secondary text - Bunya preferred, Arial fallback
      Mono: "'JetBrains Mono', 'Fira Code', monospace", // Code/tech elements
      
      // Legacy fonts (keeping for compatibility)
      Croissant: "'Croissant One', cursive",
      Playfair: "'Playfair Display', serif", 
      Source: "'Source Sans Pro', sans-serif",
      Inter: "'Inter', sans-serif",
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
        // Pop Artist Color Palette - Modern & Vibrant
        primary: "#0A0A0A",           // Deep Black - main text
        secondary: "#FF6B35",         // Electric Orange - accent
        accent: "#8B5CF6",           // Purple - highlights
        tertiary: "#06D6A0",         // Teal Green - success/music elements
        
        // Backgrounds
        background: "#0F0F23",       // Dark Navy - main background
        bg_light: "#1A1A2E",        // Lighter Navy - card backgrounds
        bg_gradient_start: "#16213E", // Gradient start
        bg_gradient_end: "#0F0F23",  // Gradient end
        
        // Text Colors
        text_primary: "#FFFFFF",     // White - main text
        text_secondary: "#B8BCC8",   // Light Gray - secondary text
        text_muted: "#6C7293",       // Muted Blue - captions
        
        // Music Industry Colors
        gold: "#FFD700",            // Gold - achievements/premium
        silver: "#C0C0C0",          // Silver - secondary achievements
        pink: "#FF1B8D",            // Hot Pink - pop elements
        cyan: "#00FFFF",            // Cyan - modern tech elements
        
        // Utility Colors
        success: "#10B981",         // Green - success states
        warning: "#F59E0B",         // Amber - warnings
        error: "#EF4444",           // Red - errors
        info: "#3B82F6",            // Blue - info
        
        // Legacy (keeping for compatibility)
        dark_primary: "#FFFFFF",     // Updated to white for new design
        gray: "#6C7293",            // Updated to match new muted color
        dark: "#1A1A2E",            // Updated card background
        velvet: "#8B5CF6",          // Updated to purple accent
      },
      backgroundImage: {
        // Modern Pop Artist Gradients
        primaryLinear: "linear-gradient(135deg, #16213E 0%, #0F0F23 50%, #1A1A2E 100%)",
        heroGradient: "linear-gradient(135deg, #8B5CF6 0%, #FF6B35 50%, #06D6A0 100%)",
        musicGradient: "linear-gradient(45deg, #FF1B8D 0%, #8B5CF6 50%, #00FFFF 100%)",
        glowGradient: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
        cardGradient: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(32, 26, 19, 0.9)",
      },
    },
  },
  plugins: [],
};

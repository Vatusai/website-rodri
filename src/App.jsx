// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import ContactWizard from "./components/ContactWizard";
import SpotifyAlbum from "./components/SpotifyAlbum";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
// Preloader component - non-invasive loading animation
import Preloader from "./components/Preloader";
// Floating Action Button for better CTA accessibility
import FloatingActionButton from "./components/FloatingActionButton";
// Moving glowing orbs background effect
import MovingOrbs from "./components/MovingOrbs";
// Mouse-following glow effect utility
import { initGlowEffect } from "./utils/glowEffect";
// Mobile centering enforcement utility
import { initMobileCentering } from "./utils/mobileCenter";

const App = () => {
  // Initialize effects when component mounts
  useEffect(() => {
    // Initialize mobile centering first (highest priority)
    const mobileCleanup = initMobileCentering();
    
    // Delay glow effect initialization to ensure all components are rendered
    const glowTimer = setTimeout(() => {
      initGlowEffect();
    }, 1000);

    return () => {
      clearTimeout(glowTimer);
      if (mobileCleanup) mobileCleanup();
    };
  }, []);

  // AOS is now initialized by the Preloader component after it finishes
  return (
    <div className="bg-background min-h-screen pop-artist-theme">
      {/* Preloader - displays while assets load, then disappears automatically */}
      <Preloader />
      
      {/* Subtle moving glowing orbs background effect */}
      <MovingOrbs />
      
      {/* Original application content - with new pop artist styling */}
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <SpotifyAlbum />
      <Testimonials />
      <Hireme />
      <ContactWizard />
      
      {/* Floating Action Button for improved CTA accessibility */}
      <FloatingActionButton />
      
      <footer className="section-pop-artist py-8 text-center border-t border-accent/20">
        <div className="container mx-auto px-6">
          <h3 className="artist-name text-2xl mb-2">RODRIGO LAGUNAS</h3>
          <p className="text-text_muted text-sm">© All Rights Reserved 2025 • Professional Musician</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-text_muted">
            <span>🎻 Elegant Performances</span>
            <span>🎼 Custom Arrangements</span>
            <span>🎵 Professional Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

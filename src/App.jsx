// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import ContactWizard from "./components/ContactWizard";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
// Preloader component - non-invasive loading animation
import Preloader from "./components/Preloader";
// Floating Action Button for better CTA accessibility
import FloatingActionButton from "./components/FloatingActionButton";
// Musical Galaxy background component
import MusicalGalaxy from "./components/MusicalGalaxy";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);
  return (
    <div className="">
      {/* Musical Galaxy Background - animated musical elements */}
      <MusicalGalaxy />
      
      {/* Preloader - displays while assets load, then disappears automatically */}
      <Preloader />
      
      {/* Original application content - unchanged */}
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <ContactWizard />
      
      {/* Floating Action Button for improved CTA accessibility */}
      <FloatingActionButton />
      
      <footer className="p-3 text-center">
        <h6 className="mb-3">FABIAN OROZCO</h6>
        <p> © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;

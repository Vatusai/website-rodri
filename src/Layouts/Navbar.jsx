import { useState, useEffect } from "react";
import { content } from "../Content";

const Navbar = () => {
  const { nav } = content;
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Set sticky navbar background
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "skills", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className={`text-2xl font-Croissant font-normal transition-colors duration-300 ${
                isScrolled ? "text-dark_primary" : "text-white"
              }`}
              style={{ letterSpacing: '0.05em' }}
            >
              Fabian Orozco
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {nav.map((item, index) => {
                const sectionId = item.link.replace("#", "");
                const isActive = activeSection === sectionId;
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.link)}
                    className={`group flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? isScrolled
                          ? "bg-gray text-white shadow-md"
                          : "bg-white/20 text-white backdrop-blur-sm"
                        : isScrolled
                        ? "text-gray-700 hover:bg-gray-100 hover:text-dark_primary"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`mr-2 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-105"
                      }`}
                      size={18}
                    />
                    <span className="capitalize">
                      {sectionId === "home"
                        ? "Inicio"
                        : sectionId === "skills"
                        ? "Habilidades"
                        : sectionId === "services"
                        ? "Servicios"
                        : sectionId === "projects"
                        ? "Proyectos"
                        : "Contacto"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menú principal"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          {nav.map((item, index) => {
            const sectionId = item.link.replace("#", "");
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className={`group w-full flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-dark_primary text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-dark_primary"
                }`}
              >
                <Icon
                  className={`mr-3 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                  size={20}
                />
                <span className="capitalize">
                  {sectionId === "home"
                    ? "Inicio"
                    : sectionId === "skills"
                    ? "Habilidades"
                    : sectionId === "services"
                    ? "Servicios"
                    : sectionId === "projects"
                    ? "Proyectos"
                    : "Contacto"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

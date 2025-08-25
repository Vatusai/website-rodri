import { useState, useEffect } from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show FAB after scrolling past hero section (500px)
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); // Close when not visible
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsExpanded(false);
  };

  const contactActions = [
    {
      icon: MdEmail,
      label: "Email",
      action: () => window.open("mailto:fabanorgo@gmail.com", "_blank"),
      bgColor: "bg-blue-500 hover:bg-blue-600",
      delay: "delay-75",
    },
    {
      icon: BsWhatsapp,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/50664559354", "_blank"),
      bgColor: "bg-green-500 hover:bg-green-600",
      delay: "delay-100",
    },
    {
      icon: MdCall,
      label: "Llamar",
      action: () => window.open("tel:+50664559354", "_blank"),
      bgColor: "bg-purple-500 hover:bg-purple-600",
      delay: "delay-150",
    },
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
      {/* Action buttons */}
      {isExpanded && (
        <>
          {contactActions.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`
                  ${item.bgColor} ${item.delay}
                  text-white p-3 rounded-full shadow-lg 
                  transform transition-all duration-300 ease-out
                  ${isExpanded ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                  hover:scale-110 hover:shadow-xl
                  group relative
                `}
                aria-label={item.label}
              >
                <Icon size={20} />
                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                </div>
              </button>
            );
          })}
          
          {/* Main quote button */}
          <button
            onClick={scrollToContact}
            className="bg-dark_primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl text-sm font-semibold"
          >
            Cotización Gratis
          </button>
        </>
      )}

      {/* Main FAB button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          bg-gradient-to-r from-dark_primary to-blue-600 
          text-white p-4 rounded-full shadow-2xl 
          transform transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-xl
          ${isExpanded ? "rotate-45" : "rotate-0"}
          group relative
        `}
        aria-label={isExpanded ? "Cerrar menú" : "Opciones de contacto"}
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isExpanded ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          )}
        </svg>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-dark_primary to-blue-600 animate-ping opacity-20"></div>
      </button>

      {/* Mobile-specific styling */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;
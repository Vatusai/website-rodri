import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import './Preloader.css';

/**
 * Enhanced Preloader Component - Displays fancy logo animation while site assets load
 * Features:
 * - Fancy multi-layered animations with particles
 * - Extended loading time for better visual impact
 * - Smooth fade-out transition when loading completes
 * - Non-invasive: doesn't affect other components
 */
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    // Extended 5-second timer for logo and text animation
    const logoTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup
    return () => {
      clearTimeout(logoTimer);
    };
  }, []);

  // Skip button handler
  const handleSkip = () => {
    setIsLoading(false);
  };

  // Don't render preloader if loading is complete
  if (!isLoading) {
    return null;
  }

  return (
    <div className="preloader">
      {/* Simple logo container with elegant zoom animation */}
      <div className="preloader-logo-simple">
        <img 
          src={logo} 
          alt="Logo" 
          className="preloader-image-large"
          onError={(e) => {
            // Fallback if logo doesn't load - show text instead
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        {/* Fallback logo text (hidden by default) */}
        <div className="logo-fallback-large" style={{display: 'none'}}>
          FABIAN OROZCO
        </div>
        
        {/* Name text below logo with delayed animation */}
        <div className="preloader-name">
          Fabian Orozco
        </div>
      </div>
    </div>
  );
};

export default Preloader;
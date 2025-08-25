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
    // Show skip button after 800ms
    const skipButtonTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 800);

    /**
     * Simulate loading progress for visual effect
     */
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    /**
     * Handle window load event with optimized loading time
     * Waits for all assets AND ensures reasonable display time
     */
    const handleLoad = () => {
      // Optimized delay for better UX (1.5 seconds maximum)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // Minimum loading time regardless of actual load status
    const minLoadTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        handleLoad();
      }
    }, 1000);

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Listen for window load event
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(progressInterval);
      clearTimeout(minLoadTime);
      clearTimeout(skipButtonTimer);
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
      {/* Animated background particles */}
      <div className="preloader-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Animated circles behind logo */}
      <div className="preloader-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Main logo container with enhanced animation */}
      <div className="preloader-logo">
        <div className="logo-wrapper">
          <img 
            src={logo} 
            alt="Loading..." 
            className="preloader-image"
            onError={(e) => {
              // Fallback if logo doesn't load - show text instead
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback logo text (hidden by default) */}
          <div className="logo-fallback" style={{display: 'none'}}>
            FABIAN OROZCO
          </div>
        </div>
        
        {/* Enhanced loading text with typewriter effect */}
        <div className="preloader-text">
          <span className="loading-dots">Loading</span>
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${Math.min(loadingProgress, 100)}%`}}
            ></div>
          </div>
          <div className="progress-text">{Math.floor(Math.min(loadingProgress, 100))}%</div>
        </div>
      </div>

      {/* Skip button */}
      {showSkipButton && (
        <button 
          className="skip-button"
          onClick={handleSkip}
          aria-label="Saltar animación de carga"
        >
          Saltar
        </button>
      )}

      {/* Glowing effect overlay */}
      <div className="glow-effect"></div>
    </div>
  );
};

export default Preloader;
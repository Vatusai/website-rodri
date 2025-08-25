import { useEffect, useRef, useState } from 'react';
import './SpawningImage.css';

/**
 * Spawning Image Component
 * 
 * Creates a spectacular spawning animation for images as they come into view
 * Features:
 * - Intersection Observer for triggering animation
 * - Particle spawning effects
 * - Smooth scaling and opacity transitions
 * - Musical note particle effects
 */
const SpawningImage = ({ src, alt, className = "", onLoad, ...props }) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  // Musical symbols for particle effects
  const musicalParticles = ['♪', '♫', '♬', '♭', '♯', '𝄞', '♩', '♮'];

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          generateSpawningParticles();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  // Generate spawning particles
  const generateSpawningParticles = () => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: musicalParticles[Math.floor(Math.random() * musicalParticles.length)],
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 200 - 50, // -50% to 150%
      endY: Math.random() * 200 - 50,
      delay: Math.random() * 1.5, // 0-1.5s delay
      duration: Math.random() * 2 + 2, // 2-4s duration
      size: Math.random() * 0.8 + 0.5, // 0.5-1.3 size multiplier
    }));

    setParticles(newParticles);

    // Clean up particles after animation
    setTimeout(() => {
      setParticles([]);
    }, 4000);
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div 
      ref={containerRef}
      className={`spawning-image-container ${className}`}
      {...props}
    >
      {/* Spawning particles */}
      {particles.length > 0 && (
        <div className="spawning-particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="spawn-particle"
              style={{
                '--start-x': `${particle.startX}%`,
                '--start-y': `${particle.startY}%`,
                '--end-x': `${particle.endX}%`,
                '--end-y': `${particle.endY}%`,
                '--delay': `${particle.delay}s`,
                '--duration': `${particle.duration}s`,
                '--size': particle.size,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            >
              {particle.symbol}
            </div>
          ))}
        </div>
      )}

      {/* Glow effect background */}
      <div 
        className={`image-glow-bg ${isVisible ? 'glow-active' : ''}`}
      ></div>

      {/* Main image with spawning animation */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`
          spawning-image
          ${isVisible ? 'spawn-active' : ''}
          ${isLoaded ? 'loaded' : ''}
        `}
        onLoad={handleImageLoad}
      />

      {/* Energy rings effect */}
      <div className={`energy-rings ${isVisible ? 'rings-active' : ''}`}>
        <div className="energy-ring ring-1"></div>
        <div className="energy-ring ring-2"></div>
        <div className="energy-ring ring-3"></div>
      </div>

      {/* Sparkle effects */}
      <div className={`sparkle-effects ${isVisible ? 'sparkles-active' : ''}`}>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`sparkle sparkle-${i + 1}`}
            style={{
              '--delay': `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SpawningImage;
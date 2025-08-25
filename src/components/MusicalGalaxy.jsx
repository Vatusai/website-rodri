import { useEffect, useRef, useState } from 'react';
import './MusicalGalaxy.css';

/**
 * Musical Galaxy Background Component
 * 
 * Creates an interactive animated background with:
 * - Musical notes and symbols floating like stars
 * - Scroll-based parallax movement
 * - Glowing particle effects
 * - Black and white aesthetic
 */
const MusicalGalaxy = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Musical symbols and notes for the galaxy
  const musicalElements = [
    '♪', '♫', '♬', '♭', '♯', '𝄞', '𝄢', '𝄡', '𝅘𝅥', '𝅘𝅥𝅮', 
    '𝅘𝅥𝅯', '𝅘𝅥𝅰', '𝅘𝅥𝅱', '𝅘𝅥𝅲', '♩', '♪', '♫', '♬', '♮',
    '𝄆', '𝄇', '𝄀', '𝄁', '𝄂', '𝄃', '𝄄', '𝄅'
  ];

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for interactive particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('interactive-particles');
      if (!container) return;

      // Create particle at mouse position
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      particle.textContent = musicalElements[Math.floor(Math.random() * musicalElements.length)];
      
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.fontSize = (Math.random() * 8 + 8) + 'px';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 2000);
    };

    // Throttle mouse events for performance
    let throttleTimer;
    const throttledMouseMove = (e) => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        handleMouseMove(e);
        throttleTimer = null;
      }, 100);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [musicalElements]);

  // Generate random musical elements
  const generateElements = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: musicalElements[Math.floor(Math.random() * musicalElements.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1-4 size multiplier
      opacity: Math.random() * 0.7 + 0.3, // 0.3-1.0 opacity
      animationDelay: Math.random() * 5, // 0-5s delay
      speed: Math.random() * 0.5 + 0.2, // 0.2-0.7 speed multiplier
      glowIntensity: Math.random() * 0.5 + 0.3, // glow effect
      rotationSpeed: (Math.random() - 0.5) * 2, // -1 to 1 rotation
    }));
  };

  // Different layers for parallax effect
  const backgroundElements = generateElements(60); // Far background
  const midgroundElements = generateElements(40);  // Middle layer
  const foregroundElements = generateElements(25); // Close layer

  return (
    <div 
      ref={containerRef} 
      className="musical-galaxy-container"
      style={{ '--scroll-y': scrollY }}
    >
      {/* Background Layer - Slowest movement */}
      <div className="galaxy-layer galaxy-background">
        {backgroundElements.map(element => (
          <div
            key={`bg-${element.id}`}
            className="musical-element background-element"
            style={{
              '--x': `${element.x}%`,
              '--y': `${element.y}%`,
              '--size': element.size,
              '--opacity': element.opacity,
              '--delay': `${element.animationDelay}s`,
              '--speed': element.speed,
              '--glow': element.glowIntensity,
              '--rotation-speed': element.rotationSpeed,
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      {/* Midground Layer - Medium movement */}
      <div className="galaxy-layer galaxy-midground">
        {midgroundElements.map(element => (
          <div
            key={`mg-${element.id}`}
            className="musical-element midground-element"
            style={{
              '--x': `${element.x}%`,
              '--y': `${element.y}%`,
              '--size': element.size,
              '--opacity': element.opacity,
              '--delay': `${element.animationDelay}s`,
              '--speed': element.speed,
              '--glow': element.glowIntensity,
              '--rotation-speed': element.rotationSpeed,
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      {/* Foreground Layer - Fastest movement */}
      <div className="galaxy-layer galaxy-foreground">
        {foregroundElements.map(element => (
          <div
            key={`fg-${element.id}`}
            className="musical-element foreground-element"
            style={{
              '--x': `${element.x}%`,
              '--y': `${element.y}%`,
              '--size': element.size,
              '--opacity': element.opacity,
              '--delay': `${element.animationDelay}s`,
              '--speed': element.speed,
              '--glow': element.glowIntensity,
              '--rotation-speed': element.rotationSpeed,
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      {/* Glow Effects Layer */}
      <div className="galaxy-glow-effects">
        {/* Large ambient glow spots */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="glow-orb glow-orb-4"></div>
      </div>

      {/* Interactive Particles - respond to mouse movement */}
      <div className="interactive-particles" id="interactive-particles"></div>
    </div>
  );
};

export default MusicalGalaxy;
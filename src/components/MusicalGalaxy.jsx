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

  // Musical symbols and notes for the galaxy
  const musicalElements = [
    '♪', '♫', '♬', '♭', '♯', '𝄞', '𝄢', '𝄡', '𝅘𝅥', '𝅘𝅥𝅮', 
    '𝅘𝅥𝅯', '♩', '♪', '♫', '♬', '♮',
    '𝄆', '𝄇'
  ];

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

  // Generate random musical elements - larger and simpler
  const generateElements = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: musicalElements[Math.floor(Math.random() * musicalElements.length)],
      x: Math.random() * 90 + 5, // 5-95% to avoid edges
      y: Math.random() * 90 + 5, // 5-95% to avoid edges
      size: Math.random() * 2 + 2, // 2-4 size multiplier (larger)
      opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6 opacity (maximum 60%)
      animationDelay: Math.random() * 8, // 0-8s delay
      speed: Math.random() * 0.3 + 0.4, // 0.4-0.7 speed multiplier
      glowIntensity: Math.random() * 0.3 + 0.2, // subtle glow
    }));
  };

  // Single layer of elements - no parallax complexity
  const floatingElements = generateElements(30); // Reduced count for better performance

  return (
    <div 
      ref={containerRef} 
      className="musical-galaxy-container"
    >
      {/* Single floating layer - no scroll interaction */}
      <div className="galaxy-layer">
        {floatingElements.map(element => (
          <div
            key={`float-${element.id}`}
            className="musical-element floating-element"
            style={{
              '--x': `${element.x}%`,
              '--y': `${element.y}%`,
              '--size': element.size,
              '--opacity': element.opacity,
              '--delay': `${element.animationDelay}s`,
              '--speed': element.speed,
              '--glow': element.glowIntensity,
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
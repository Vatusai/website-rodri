import { useEffect, useState } from 'react';
import './MovingOrbs.css';

/**
 * Moving Glowing Orbs Background Effect
 * 
 * Creates subtle floating orbs with dark red, purple, and blue colors
 * Features:
 * - Smooth floating animations
 * - Respects user motion preferences
 * - Mobile optimized
 * - Low opacity for subtlety
 */
const MovingOrbs = ({ className = "" }) => {
  const [orbs, setOrbs] = useState([]);

  // Orb colors matching the theme
  const orbColors = [
    { name: 'dark-red', color: '#8B0000', shadow: 'rgba(139, 0, 0, 0.3)' },
    { name: 'purple', color: '#8B5CF6', shadow: 'rgba(139, 92, 246, 0.3)' },
    { name: 'blue', color: '#1E3A8A', shadow: 'rgba(30, 58, 138, 0.3)' }
  ];

  // Initialize orbs
  useEffect(() => {
    const generateOrbs = () => {
      const newOrbs = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        color: orbColors[i % orbColors.length],
        startX: Math.random() * 110, // 0% to 110%
        startY: Math.random() * 110,
        size: Math.random() * 30 + 20, // 20-50px (small spore-like)
        duration: Math.random() * 30 + 40, // 40-70s (slow spore drift)
        delay: Math.random() * 15, // 0-15s delay
        direction: Math.random() > 0.5 ? 1 : -1,
        drift: Math.random() * 0.4 + 0.2, // 0.2-0.6 drift factor
      }));

      setOrbs(newOrbs);
    };

    generateOrbs();
  }, []);

  return (
    <div className={`moving-orbs-container ${className}`}>
      {orbs.map(orb => (
        <div
          key={orb.id}
          className={`moving-orb orb-${orb.color.name}`}
          style={{
            '--start-x': `${orb.startX}%`,
            '--start-y': `${orb.startY}%`,
            '--size': `${orb.size}px`,
            '--duration': `${orb.duration}s`,
            '--delay': `${orb.delay}s`,
            '--direction': orb.direction,
            '--drift': orb.drift,
            '--color': orb.color.color,
            '--shadow': orb.color.shadow,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MovingOrbs;
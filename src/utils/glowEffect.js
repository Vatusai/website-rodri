/**
 * Mouse-following Glow Effect Utility
 * Creates interactive glow effects that follow the mouse cursor
 */

export const initGlowEffect = () => {
  // Disable glow effect on mobile devices to prevent positioning conflicts
  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, just reset glow positions to center and return
    const glowElements = document.querySelectorAll('.glow-effect');
    glowElements.forEach((element) => {
      element.style.setProperty('--x', '50%');
      element.style.setProperty('--y', '50%');
    });
    return;
  }
  
  // Get all elements with glow effect
  const glowElements = document.querySelectorAll('.glow-effect');
  
  if (glowElements.length === 0) return;

  // Mouse move event handler
  const handleMouseMove = (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    // Update glow position for each element
    glowElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementX = rect.left + window.pageXOffset;
      const elementY = rect.top + window.pageYOffset;

      // Calculate relative mouse position
      const distanceX = mouseX - elementX;
      const distanceY = mouseY - elementY;

      // Set CSS custom properties for glow position
      element.style.setProperty('--x', `${distanceX}px`);
      element.style.setProperty('--y', `${distanceY}px`);
    });
  };

  // Add mouse move listener
  document.addEventListener('mousemove', handleMouseMove);

  // Optional: Add mouse leave handler to reset glow
  const handleMouseLeave = () => {
    glowElements.forEach((element) => {
      element.style.setProperty('--x', '50%');
      element.style.setProperty('--y', '50%');
    });
  };

  document.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlowEffect);
  } else {
    initGlowEffect();
  }
}
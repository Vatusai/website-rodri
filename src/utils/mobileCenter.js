/**
 * Mobile Centering Enforcer - JavaScript solution
 * Forces all elements to be centered on mobile devices
 */

export const initMobileCentering = () => {
  // Only run on mobile devices
  const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (!isMobile) return;

  console.log('Mobile Centering: Initializing mobile centering enforcement');

  const forceCenter = () => {
    // Target all major content elements
    const selectors = [
      'section',
      '.section-pop-artist',
      '.hero-pop-artist',
      '.container',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'div:not(input):not(textarea):not(select)',
      '.card-pop-artist',
      '.service-card-pop',
      '.glass-card',
      '.glass-text',
      '.glow-effect',
      '.stat-item-pop',
      '.glow-effect-content'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Skip input elements
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
          return;
        }

        // Apply centering styles directly
        element.style.textAlign = 'center';
        element.style.marginLeft = 'auto';
        element.style.marginRight = 'auto';
        
        // For flex containers
        if (element.classList.contains('flex') || getComputedStyle(element).display === 'flex') {
          element.style.justifyContent = 'center';
          element.style.alignItems = 'center';
        }

        // For grid containers
        if (element.classList.contains('grid') || getComputedStyle(element).display === 'grid') {
          element.style.justifyContent = 'center';
          element.style.justifyItems = 'center';
        }
      });
    });

    // Special handling for hero section
    const heroSection = document.querySelector('.hero-pop-artist');
    if (heroSection) {
      heroSection.style.textAlign = 'center';
      const heroContent = heroSection.querySelectorAll('*:not(input):not(textarea):not(select)');
      heroContent.forEach(el => {
        el.style.textAlign = 'center';
        el.style.marginLeft = 'auto';
        el.style.marginRight = 'auto';
      });
    }

    // Override any problematic Tailwind classes
    const problematicClasses = [
      '.text-left',
      '.lg\\:text-left',
      '.md\\:text-left',
      '.justify-start',
      '.lg\\:justify-start',
      '.items-start',
      '.lg\\:items-start'
    ];

    problematicClasses.forEach(className => {
      try {
        const elements = document.querySelectorAll(className);
        elements.forEach(el => {
          if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' && el.tagName !== 'SELECT') {
            el.style.textAlign = 'center';
            el.style.justifyContent = 'center';
            el.style.alignItems = 'center';
            el.style.marginLeft = 'auto';
            el.style.marginRight = 'auto';
          }
        });
      } catch (e) {
        // Ignore selector errors for escaped classes
      }
    });
  };

  // Run centering immediately
  forceCenter();

  // Run centering after DOM changes
  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldUpdate = true;
      }
    });
    
    if (shouldUpdate) {
      setTimeout(forceCenter, 100);
    }
  });

  // Observe the document body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Run centering after page load events
  window.addEventListener('load', forceCenter);
  document.addEventListener('DOMContentLoaded', forceCenter);

  // Run centering after resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const isMobileNow = window.innerWidth <= 768;
      if (isMobileNow) {
        forceCenter();
      }
    }, 250);
  });

  // Return cleanup function
  return () => {
    observer.disconnect();
    window.removeEventListener('load', forceCenter);
    document.removeEventListener('DOMContentLoaded', forceCenter);
    window.removeEventListener('resize', forceCenter);
  };
};

// Auto-initialize when DOM is loaded
if (typeof window !== 'undefined') {
  // Run after a small delay to ensure all other scripts have loaded
  setTimeout(() => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initMobileCentering, 500);
      });
    } else {
      setTimeout(initMobileCentering, 500);
    }
  }, 100);
}
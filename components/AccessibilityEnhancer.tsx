import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  // Add any props if needed
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Listen for preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Escape key to close modals or menus
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Add focus indicator for keyboard navigation
      if (target.matches('button, a, input, textarea, select, [tabindex]')) {
        target.classList.add('keyboard-focus');
      }
    };

    const handleFocusOut = (e: Event) => {
      const target = e.target as HTMLElement;
      target.classList.remove('keyboard-focus');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast ${!isHighContrast ? 'enabled' : 'disabled'}`);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
      announceToScreenReader(`Font size increased to ${fontSize + 2}px`);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
      announceToScreenReader(`Font size decreased to ${fontSize - 2}px`);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
    announceToScreenReader('Font size reset to default');
  };

  return (
    <>
      {/* Accessibility Controls */}
      <div 
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
        role="region"
        aria-label="Accessibility controls"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute top-0 right-0 p-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label={isVisible ? 'Hide accessibility controls' : 'Show accessibility controls'}
          aria-expanded={isVisible}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>

        {isVisible && (
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg backdrop-blur-sm min-w-[280px]">
            <h3 className="text-white font-semibold mb-4 text-lg">Accessibility Options</h3>
            
            <div className="space-y-4">
              {/* High Contrast Toggle */}
              <div className="flex items-center justify-between">
                <label htmlFor="high-contrast" className="text-gray-300 text-sm">
                  High Contrast
                </label>
                <button
                  id="high-contrast"
                  onClick={toggleHighContrast}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isHighContrast ? 'bg-cyan-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={isHighContrast}
                  aria-label="Toggle high contrast mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isHighContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Font Size Controls */}
              <div>
                <label className="text-gray-300 text-sm block mb-2">Font Size</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Decrease font size"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <span className="text-white text-sm min-w-[3rem] text-center">{fontSize}px</span>
                  
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Increase font size"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={resetFontSize}
                    className="px-3 py-2 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Reset font size to default"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Motion Reduction */}
              <div className="flex items-center justify-between">
                <label htmlFor="reduced-motion" className="text-gray-300 text-sm">
                  Reduced Motion
                </label>
                <button
                  id="reduced-motion"
                  onClick={() => setIsReducedMotion(!isReducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isReducedMotion ? 'bg-cyan-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={isReducedMotion}
                  aria-label="Toggle reduced motion mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isReducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Skip Links */}
              <div className="pt-2 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-2">Quick Navigation:</p>
                <div className="space-y-1">
                  <a
                    href="#main"
                    className="block text-cyan-400 hover:text-cyan-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      const main = document.querySelector('main');
                      if (main) {
                        (main as HTMLElement).focus();
                        announceToScreenReader('Navigated to main content');
                      }
                    }}
                  >
                    Skip to main content
                  </a>
                  <a
                    href="#navigation"
                    className="block text-cyan-400 hover:text-cyan-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      const nav = document.querySelector('nav');
                      if (nav) {
                        (nav as HTMLElement).focus();
                        announceToScreenReader('Navigated to navigation');
                      }
                    }}
                  >
                    Skip to navigation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Only Class */}
      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .keyboard-focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }

        .high-contrast {
          --tw-text-opacity: 1;
          --tw-bg-opacity: 1;
        }

        .high-contrast * {
          border-color: #ffffff !important;
          color: #ffffff !important;
          background-color: #000000 !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }

        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
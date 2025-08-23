import React, { useEffect, useState } from 'react';

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Listen for preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    mediaQuery.addEventListener('change', handleMotionChange);
    highContrastQuery.addEventListener('change', handleContrastChange);

    // Keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardMode(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardMode(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [isHighContrast, isReducedMotion, fontSize]);

  const applyAccessibilityFeatures = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#9ca3af');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#111827');
      root.style.setProperty('--accent-color', '#06b6d4');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--transition-duration', '0.3s');
      root.style.setProperty('--animation-duration', '0.6s');
    }

    // Apply font size
    root.style.setProperty('--font-size-base', `${fontSize}px`);
    root.style.setProperty('--font-size-lg', `${fontSize * 1.125}px`);
    root.style.setProperty('--font-size-xl', `${fontSize * 1.25}px`);
    root.style.setProperty('--font-size-2xl', `${fontSize * 1.5}px`);
    root.style.setProperty('--font-size-3xl', `${fontSize * 1.875}px`);
    root.style.setProperty('--font-size-4xl', `${fontSize * 2.25}px`);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => !prev);
  };

  // Skip to content functionality
  useEffect(() => {
    const skipLink = document.getElementById('skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        id="skip-to-content"
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-400 focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold"
        tabIndex={0}
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-black/90 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-4 text-white shadow-lg">
        <h3 className="text-sm font-semibold mb-3 text-cyan-400">Accessibility</h3>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-base font-bold transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isHighContrast 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-black' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'High Contrast: ON' : 'High Contrast: OFF'}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isReducedMotion 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {isReducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
          </button>
        </div>

        {/* Keyboard Navigation Indicator */}
        {isKeyboardMode && (
          <div className="mt-3 p-2 bg-green-600/20 border border-green-500/50 rounded text-xs text-green-400">
            ⌨️ Keyboard navigation active
          </div>
        )}
      </div>

      {/* Focus indicator styles */}
      <style jsx global>{`
        .keyboard-navigation *:focus {
          outline: 3px solid #ffff00 !important;
          outline-offset: 2px !important;
        }

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

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          border: 2px solid #ffff00;
          background: #000000;
          color: #ffff00;
          z-index: 9999;
        }

        /* High contrast mode styles */
        [data-high-contrast="true"] {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent-color: #ffff00 !important;
        }

        /* Reduced motion styles */
        [data-reduced-motion="true"] * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }

        /* Focus visible styles */
        *:focus-visible {
          outline: 3px solid var(--accent-color, #06b6d4) !important;
          outline-offset: 2px !important;
        }

        /* Skip link styles */
        #skip-to-content:focus {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
          background: #ffff00;
          color: #000000;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
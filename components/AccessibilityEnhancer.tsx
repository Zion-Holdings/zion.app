import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility features when preferences change
    applyAccessibilityFeatures();
  }, [isHighContrast, isReducedMotion, fontSize]);

  const applyAccessibilityFeatures = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--accent-color', '#0000ff');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--transition-duration', '0.01ms');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.style.removeProperty('--transition-duration');
      root.style.removeProperty('--animation-duration');
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`;
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

  return (
    <>
      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Accessibility</h3>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Font Size</label>
            <div className="flex space-x-2">
              <button
                onClick={decreaseFontSize}
                className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Reset font size"
              >
                Reset
              </button>
              <button
                onClick={increaseFontSize}
                className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={toggleHighContrast}
                className="rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-600">High Contrast</span>
            </label>
          </div>

          {/* Reduced Motion Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={toggleReducedMotion}
                className="rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-xs text-gray-600">Reduced Motion</span>
            </label>
          </div>
        </div>

        {/* Keyboard Shortcuts Info */}
        <details className="mt-3">
          <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
            Keyboard Shortcuts
          </summary>
          <div className="mt-2 text-xs text-gray-600 space-y-1">
            <div>Tab: Navigate</div>
            <div>Enter/Space: Activate</div>
            <div>Escape: Close/Cancel</div>
            <div>Arrow Keys: Navigate options</div>
          </div>
        </details>
      </div>

      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Main Content Wrapper */}
      <div id="main-content">
        {children}
      </div>

      {/* Focus Indicator Styles */}
      <style jsx global>{`
        /* Custom focus styles */
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        :root[style*="--text-color"] {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
        }

        :root[style*="--text-color"] * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
        }

        /* Reduced motion */
        :root[style*="--transition-duration"] * {
          transition-duration: var(--transition-duration) !important;
          animation-duration: var(--animation-duration) !important;
        }

        /* Focus visible only for keyboard navigation */
        *:focus:not(:focus-visible) {
          outline: none !important;
        }

        /* Ensure sufficient color contrast */
        .text-gray-400 {
          color: #6b7280 !important;
        }

        .text-gray-300 {
          color: #d1d5db !important;
        }

        /* Skip link focus styles */
        a[href="#main-content"]:focus {
          outline: 3px solid #ffffff !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
}
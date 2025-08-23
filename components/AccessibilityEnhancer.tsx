import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  // Add any props if needed
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(prefersReducedMotion.matches);

    // Check for user's color scheme preferences
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(prefersHighContrast.matches);

    // Listen for changes in user preferences
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    prefersHighContrast.addEventListener('change', handleContrastChange);

    // Apply initial accessibility settings
    applyAccessibilitySettings();

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      prefersHighContrast.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings when they change
    applyAccessibilitySettings();
  }, [isHighContrast, isReducedMotion, fontSize]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#111111');
    } else {
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--animation-duration', '0.1s');
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
    setIsHighContrast(!isHighContrast);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
  };

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with 'S' key
      if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        const mainContent = document.getElementById('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with 'N' key
      if (e.key === 'n' && e.ctrlKey) {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          navigation.focus();
          navigation.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to footer with 'F' key
      if (e.key === 'f' && e.ctrlKey) {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          footer.focus();
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus management for modals and dropdowns
  useEffect(() => {
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    // Only apply focus trap when modals or dropdowns are open
    const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
    if (modals.length > 0) {
      document.addEventListener('keydown', handleFocusTrap);
      return () => document.removeEventListener('keydown', handleFocusTrap);
    }
  }, []);

  return (
    <>
      {/* Accessibility Controls - Hidden by default, shown on focus */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:bg-black focus:text-white focus:p-4 focus:rounded focus:shadow-lg">
        <h3 className="text-lg font-bold mb-4">Accessibility Controls</h3>
        
        <div className="space-y-4">
          {/* Font Size Controls */}
          <div>
            <label htmlFor="font-size" className="block text-sm font-medium mb-2">
              Font Size: {fontSize}px
            </label>
            <div className="flex space-x-2">
              <button
                onClick={decreaseFontSize}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                aria-label="Reset font size"
              >
                Reset
              </button>
              <button
                onClick={increaseFontSize}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
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
                className="rounded"
              />
              <span className="text-sm">High Contrast</span>
            </label>
          </div>

          {/* Reduced Motion Toggle */}
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={toggleReducedMotion}
                className="rounded"
              />
              <span className="text-sm">Reduced Motion</span>
            </label>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="text-sm">
            <h4 className="font-medium mb-2">Keyboard Shortcuts:</h4>
            <ul className="space-y-1 text-xs">
              <li><kbd className="bg-gray-700 px-1 rounded">Ctrl + S</kbd> Skip to main content</li>
              <li><kbd className="bg-gray-700 px-1 rounded">Ctrl + N</kbd> Skip to navigation</li>
              <li><kbd className="bg-gray-700 px-1 rounded">Ctrl + F</kbd> Skip to footer</li>
              <li><kbd className="bg-gray-700 px-1 rounded">Tab</kbd> Navigate through elements</li>
              <li><kbd className="bg-gray-700 px-1 rounded">Enter/Space</kbd> Activate buttons/links</li>
              <li><kbd className="bg-gray-700 px-1 rounded">Escape</kbd> Close modals/dropdowns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Live Region for Screen Readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="accessibility-announcements"
      />

      {/* Skip Links */}
      <nav className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:w-full focus:bg-black focus:text-white focus:p-4">
        <ul className="space-y-2">
          <li>
            <a href="#main" className="block hover:text-cyan-400">
              Skip to main content
            </a>
          </li>
          <li>
            <a href="#navigation" className="block hover:text-cyan-400">
              Skip to navigation
            </a>
          </li>
          <li>
            <a href="#footer" className="block hover:text-cyan-400">
              Skip to footer
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AccessibilityEnhancer;
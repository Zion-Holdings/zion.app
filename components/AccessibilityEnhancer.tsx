import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, 
  Contrast, ZoomIn, ZoomOut, CheckCircle, AlertTriangle
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility menu
      if (e.key === 'Escape') {
        setShowAccessibilityMenu(false);
      }

      // Handle arrow key navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).findIndex(
          (el) => el === document.activeElement
        );

        if (currentIndex !== -1) {
          let nextIndex;
          if (e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % focusableElements.length;
          } else {
            nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          }
          (focusableElements[nextIndex] as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle focus management
  useEffect(() => {
    const handleFocusIn = () => setFocusVisible(true);
    const handleFocusOut = () => setFocusVisible(false);

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    root.style.fontSize = `${fontSize}px`;
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Handle high contrast toggle
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
  }, [isHighContrast]);

  // Handle reduced motion toggle
  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(!isReducedMotion);
  }, [isReducedMotion]);

  // Handle font size changes
  const increaseFontSize = useCallback(() => {
    setFontSize(prev => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize(prev => Math.max(prev - 2, 12));
  }, []);

  // Reset accessibility settings
  const resetAccessibility = useCallback(() => {
    setIsHighContrast(false);
    setIsReducedMotion(false);
    setFontSize(16);
  }, []);

  return (
    <>
      {children}
      
      {/* Accessibility Menu Toggle */}
      <button
        onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
        className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        aria-label="Toggle accessibility menu"
        aria-expanded={showAccessibilityMenu}
        aria-controls="accessibility-menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility Menu */}
      {showAccessibilityMenu && (
        <div
          id="accessibility-menu"
          className="fixed top-20 left-4 z-50 w-80 bg-black/95 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl"
          role="dialog"
          aria-labelledby="accessibility-menu-title"
          aria-describedby="accessibility-menu-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-menu-title" className="text-lg font-semibold text-white">
              Accessibility Options
            </h2>
            <button
              onClick={() => setShowAccessibilityMenu(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close accessibility menu"
            >
              ×
            </button>
          </div>
          
          <p id="accessibility-menu-description" className="text-gray-400 text-sm mb-6">
            Customize your experience with these accessibility features
          </p>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-white text-sm">
                High Contrast
              </label>
              <button
                id="high-contrast"
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isHighContrast ? 'bg-cyan-500' : 'bg-gray-600'
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

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-white text-sm">
                Reduced Motion
              </label>
              <button
                id="reduced-motion"
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isReducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={isReducedMotion}
                aria-label="Toggle reduced motion"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isReducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-2">
              <label className="text-white text-sm">Font Size</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <span className="text-white text-sm min-w-[3rem] text-center">{fontSize}px</span>
                <button
                  onClick={increaseFontSize}
                  className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAccessibility}
              className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Reset accessibility settings to default"
            >
              Reset to Default
            </button>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <h3 className="text-white text-sm font-medium mb-2">Keyboard Shortcuts</h3>
            <div className="text-gray-400 text-xs space-y-1">
              <p><kbd className="bg-gray-700 px-1 py-0.5 rounded">Tab</kbd> Navigate between elements</p>
              <p><kbd className="bg-gray-700 px-1 py-0.5 rounded">Alt + Tab</kbd> Skip to main content</p>
              <p><kbd className="bg-gray-700 px-1 py-0.5 rounded">Escape</kbd> Close menus</p>
              <p><kbd className="bg-gray-700 px-1 py-0.5 rounded">↑↓</kbd> Navigate with arrow keys</p>
            </div>
          </div>
        </div>
      )}

      {/* Skip to Content Link */}
      <a
        href="#main"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Focus Indicator Styles */}
      <style jsx global>{`
        .skip-link:focus {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
        }

        /* High Contrast Mode */
        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
        }

        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--accent-color) !important;
        }

        /* Reduced Motion Mode */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Focus Styles */
        *:focus-visible {
          outline: 3px solid #0ea5e9 !important;
          outline-offset: 2px !important;
        }

        /* Screen Reader Only */
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

        /* High Contrast Focus */
        .high-contrast *:focus-visible {
          outline: 3px solid #000000 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Check user preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(prefersReducedMotion.matches);

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(prefersHighContrast.matches);

    const prefersLargeText = window.matchMedia('(prefers-contrast: more)');
    setIsLargeText(prefersLargeText.matches);
  }, []);

  // Apply accessibility features
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isLargeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (isKeyboardMode) {
      root.classList.add('keyboard-mode');
    } else {
      root.classList.remove('keyboard-mode');
    }
  }, [isHighContrast, isLargeText, isReducedMotion, isKeyboardMode]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Tab navigation enhancement
      if (e.key === 'Tab') {
        setIsKeyboardMode(true);
        
        // Add focus indicator
        const focusableElements = document.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach((el) => {
          el.addEventListener('focus', () => setCurrentFocus(el as HTMLElement));
          el.addEventListener('blur', () => setCurrentFocus(null));
        });
      }

      // Escape key to close modals/panels
      if (e.key === 'Escape') {
        setShowAccessibilityPanel(false);
      }

      // Arrow key navigation for custom components
      if (e.key.startsWith('Arrow')) {
        const focusableElements = Array.from(
          document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];

        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        let nextIndex = currentIndex;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          nextIndex = (currentIndex + 1) % focusableElements.length;
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        }

        focusableElements[nextIndex]?.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus indicator
  useEffect(() => {
    if (currentFocus && isKeyboardMode) {
      currentFocus.style.outline = '3px solid #06b6d4';
      currentFocus.style.outlineOffset = '2px';
      
      return () => {
        currentFocus.style.outline = '';
        currentFocus.style.outlineOffset = '';
      };
    }
  }, [currentFocus, isKeyboardMode]);

  // Skip to main content link
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      (mainContent as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Toggle accessibility features
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast ${!isHighContrast ? 'enabled' : 'disabled'}`);
  }, [isHighContrast, announceToScreenReader]);

  const toggleLargeText = useCallback(() => {
    setIsLargeText(!isLargeText);
    announceToScreenReader(`Large text ${!isLargeText ? 'enabled' : 'disabled'}`);
  }, [isLargeText, announceToScreenReader]);

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(`Reduced motion ${!isReducedMotion ? 'enabled' : 'disabled'}`);
  }, [isReducedMotion, announceToScreenReader]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        onClick={handleSkipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Accessibility Panel Toggle */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-4 left-4 bg-cyan-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-cyan-700 transition-colors"
        onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
        aria-label="Open accessibility options"
        aria-expanded={showAccessibilityPanel}
      >
        <Eye className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-80 bg-gray-900 text-white p-6 shadow-2xl z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Accessibility Options</h2>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">High Contrast</h3>
                  <p className="text-sm text-gray-400">Increase text and background contrast</p>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`p-2 rounded-lg transition-colors ${
                    isHighContrast ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Large Text</h3>
                  <p className="text-sm text-gray-400">Increase text size for better readability</p>
                </div>
                <button
                  onClick={toggleLargeText}
                  className={`p-2 rounded-lg transition-colors ${
                    isLargeText ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Reduced Motion</h3>
                  <p className="text-sm text-gray-400">Reduce or eliminate animations</p>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`p-2 rounded-lg transition-colors ${
                    isReducedMotion ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                  aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <MousePointer className="w-4 h-4" />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Keyboard Navigation</h3>
                  <p className="text-sm text-gray-400">Enhanced keyboard navigation support</p>
                </div>
                <div className={`p-2 rounded-lg transition-colors ${
                  isKeyboardMode ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}>
                  <Keyboard className="w-4 h-4" />
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span className="text-gray-400">Navigate between elements</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arrow Keys</span>
                    <span className="text-gray-400">Navigate custom components</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escape</span>
                    <span className="text-gray-400">Close panels/modals</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span className="text-gray-400">Activate buttons/links</span>
                  </div>
                </div>
              </div>

              {/* Screen Reader Announcements */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Screen Reader Support</h3>
                <p className="text-sm text-gray-400">
                  This website includes comprehensive screen reader support with proper ARIA labels, 
                  semantic HTML, and live announcements for dynamic content changes.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>

      {/* Focus indicator styles */}
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

        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #111827;
          --accent: #06b6d4;
        }

        .large-text {
          font-size: 1.2em;
        }

        .large-text h1 { font-size: 3.5rem; }
        .large-text h2 { font-size: 2.5rem; }
        .large-text h3 { font-size: 2rem; }
        .large-text p { font-size: 1.3rem; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .keyboard-mode *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        /* High contrast overrides */
        .high-contrast .bg-gray-900 { background-color: #000000 !important; }
        .high-contrast .text-gray-300 { color: #ffffff !important; }
        .high-contrast .text-gray-400 { color: #e5e7eb !important; }
        .high-contrast .border-gray-600 { border-color: #ffffff !important; }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
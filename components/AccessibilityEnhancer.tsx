import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, Keyboard, MousePointer } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.3s');
    }

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
  };

  // Check for user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Check for large text preference
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsLargeText(prefersLargeText);

    // Apply accessibility settings
    applyAccessibilitySettings();
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings();
  }, [isReducedMotion, isHighContrast, isLargeText]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Toggle accessibility panel
      if (event.key === 'F1') {
        event.preventDefault();
        setShowAccessibilityPanel(!showAccessibilityPanel);
      }

      // Escape key to close panels
      if (event.key === 'Escape') {
        setShowAccessibilityPanel(false);
      }
    };

    // Focus management
    const handleFocusIn = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('accessibility-focus');
    };

    const handleFocusOut = (event: Event) => {
      const target = event.target as HTMLElement;
      target.classList.remove('accessibility-focus');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [showAccessibilityPanel]);

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

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
    announceToScreenReader(`Audio ${!isMuted ? 'muted' : 'unmuted'}`);
  };

  // Toggle high contrast
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    announceToScreenReader(`High contrast ${!isHighContrast ? 'enabled' : 'disabled'}`);
  };

  // Toggle large text
  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    announceToScreenReader(`Large text ${!isLargeText ? 'enabled' : 'disabled'}`);
  };

  // Toggle reduced motion
  const toggleReducedMotion = () => {
    setIsReducedMotion(!isReducedMotion);
    announceToScreenReader(`Reduced motion ${!isReducedMotion ? 'enabled' : 'disabled'}`);
  };

  return (
    <>
      {children}

      {/* Accessibility Panel Toggle Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
        className="fixed top-32 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Accessibility Settings (F1)"
        aria-label="Open accessibility settings panel"
      >
        <Eye className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed top-48 right-6 bg-black/95 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 shadow-xl min-w-[280px] z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Audio Control */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isMuted ? <VolumeX className="w-5 h-5 text-gray-400" /> : <Volume2 className="w-5 h-5 text-green-400" />}
                  <span className="text-white text-sm">Audio</span>
                </div>
                <button
                  onClick={toggleMute}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isMuted 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}
                  aria-label={`${isMuted ? 'Unmute' : 'Mute'} audio`}
                >
                  {isMuted ? 'Muted' : 'On'}
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-blue-400" />
                  <span className="text-white text-sm">High Contrast</span>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isHighContrast 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}
                  aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  {isHighContrast ? 'On' : 'Off'}
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">Large Text</span>
                </div>
                <button
                  onClick={toggleLargeText}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isLargeText 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}
                  aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
                >
                  {isLargeText ? 'On' : 'Off'}
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-purple-400" />
                  <span className="text-white text-sm">Reduced Motion</span>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    isReducedMotion 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}
                  aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  {isReducedMotion ? 'On' : 'Off'}
                </button>
              </div>

              {/* Keyboard Navigation Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Keyboard className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-xs">Keyboard Shortcuts</span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>F1 - Open accessibility panel</div>
                  <div>Alt + Tab - Skip to main content</div>
                  <div>Escape - Close panels</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to Content Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Focus Indicator Styles */}
      <style jsx global>{`
        .accessibility-focus {
          outline: 3px solid #00d4ff !important;
          outline-offset: 2px !important;
        }

        .high-contrast {
          --text-color: #ffffff;
          --bg-color: #000000;
          --border-color: #ffffff;
        }

        .large-text {
          font-size: 1.2em;
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

        /* High contrast mode styles */
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        /* Large text mode styles */
        .large-text h1 { font-size: 3.5rem !important; }
        .large-text h2 { font-size: 3rem !important; }
        .large-text h3 { font-size: 2.5rem !important; }
        .large-text p { font-size: 1.3rem !important; }
        .large-text button { font-size: 1.2rem !important; padding: 1rem 2rem !important; }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
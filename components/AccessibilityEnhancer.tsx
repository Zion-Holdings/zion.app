import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Contrast, 
  Type, ZoomIn, ZoomOut, RotateCcw, Accessibility
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  showControls?: boolean;
  autoEnhance?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  showControls = true, 
  autoEnhance = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highSaturation, setHighSaturation] = useState(false);
  const [showFocusIndicators, setShowFocusIndicators] = useState(true);

  // Initialize accessibility features
  useEffect(() => {
    if (autoEnhance) {
      // Check user preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setReducedMotion(prefersReducedMotion);
      setHighContrast(prefersHighContrast);
      
      // Apply initial accessibility settings
      applyAccessibilitySettings();
    }
  }, [autoEnhance]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${fontSize}px`;
    
    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // High saturation
    if (highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
    
    // Focus indicators
    if (showFocusIndicators) {
      root.classList.add('show-focus');
    } else {
      root.classList.remove('show-focus');
    }
  }, [fontSize, highContrast, reducedMotion, highSaturation, showFocusIndicators]);

  // Apply settings when they change
  useEffect(() => {
    applyAccessibilitySettings();
  }, [applyAccessibilitySettings]);

  // Font size controls
  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  // Toggle accessibility features
  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  const toggleHighSaturation = () => {
    setHighSaturation(prev => !prev);
  };

  const toggleFocusIndicators = () => {
    setShowFocusIndicators(prev => !prev);
  };

  // Add skip links for keyboard navigation
  useEffect(() => {
    if (autoEnhance) {
      addSkipLinks();
      enhanceKeyboardNavigation();
      enhanceScreenReaderSupport();
    }
  }, [autoEnhance]);

  const addSkipLinks = () => {
    // Check if skip links already exist
    if (document.getElementById('skip-links')) return;

    const skipLinks = document.createElement('div');
    skipLinks.id = 'skip-links';
    skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-cyan-500 focus:text-white focus:rounded-lg';
    
    skipLinks.innerHTML = `
      <a href="#main" class="block mb-2 hover:underline">Skip to main content</a>
      <a href="#navigation" class="block mb-2 hover:underline">Skip to navigation</a>
      <a href="#footer" class="block hover:underline">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  const enhanceKeyboardNavigation = () => {
    // Add keyboard navigation to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    
    interactiveElements.forEach(element => {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
      
      // Add keyboard event listeners
      element.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (element instanceof HTMLElement) {
            element.click();
          }
        }
      });
    });
  };

  const enhanceScreenReaderSupport = () => {
    // Add ARIA labels to elements that need them
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement && !img.alt) {
        img.alt = 'Decorative image';
        img.setAttribute('aria-hidden', 'true');
      }
    });
    
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (button instanceof HTMLButtonElement && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  };

  if (!showControls) {
    return null;
  }

  return (
    <>
      {/* Accessibility Controls Toggle */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Toggle accessibility controls"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Controls Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                aria-label="Close accessibility panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-6">
              {/* Font Size Controls */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium min-w-[3rem] text-center">{fontSize}px</span>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Reset font size"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Enhancements */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Visual Enhancements</h4>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highContrast}
                    onChange={toggleHighContrast}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <Contrast className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">High Contrast</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highSaturation}
                    onChange={toggleHighSaturation}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">High Saturation</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showFocusIndicators}
                    onChange={toggleFocusIndicators}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Show Focus Indicators</span>
                </label>
              </div>

              {/* Motion Controls */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Motion</h4>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={reducedMotion}
                    onChange={toggleReducedMotion}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  {reducedMotion ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                  <span className="text-gray-300">Reduce Motion</span>
                </label>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-gray-700/50">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setHighContrast(true);
                      setShowFocusIndicators(true);
                      setFontSize(18);
                    }}
                    className="px-3 py-2 text-xs bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    High Visibility
                  </button>
                  <button
                    onClick={() => {
                      setReducedMotion(true);
                      setHighContrast(false);
                      setHighSaturation(false);
                    }}
                    className="px-3 py-2 text-xs bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    Low Motion
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for accessibility features */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          --tw-text-opacity: 1;
          --tw-bg-opacity: 1;
        }
        
        .high-contrast * {
          color: #000000 !important;
          background-color: #ffffff !important;
          border-color: #000000 !important;
        }
        
        .high-contrast .bg-gradient-to-r {
          background: linear-gradient(to right, #000000, #000000) !important;
        }
        
        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* High Saturation */
        .high-saturation * {
          filter: saturate(1.5) contrast(1.2) !important;
        }
        
        /* Focus Indicators */
        .show-focus *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip Links */
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
          padding: 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
=======
  // Toggle accessibility features
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => {
      const newValue = !prev;
      announceToScreenReader(`High contrast mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const toggleLargeText = useCallback(() => {
    setIsLargeText(prev => {
      const newValue = !prev;
      announceToScreenReader(`Large text mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => {
      const newValue = !prev;
      announceToScreenReader(`Reduced motion mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
    loadPreferences();
  }, [loadPreferences]);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [applyAccessibilityFeatures]);

  useEffect(() => {
    const cleanup = enhanceFocusManagement();
    return cleanup;
  }, [enhanceFocusManagement]);

  // Add CSS variables for accessibility
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-color: #ffffff !important;
        --bg-color: #000000 !important;
        --accent-color: #ffff00 !important;
        --border-color: #ffff00 !important;
      }
      
      .large-text {
        --font-size-base: 18px !important;
        --font-size-lg: 20px !important;
        --font-size-xl: 24px !important;
        --line-height: 1.6 !important;
      }
      
      .reduced-motion {
        --animation-duration: 0.01ms !important;
        --transition-duration: 0.01ms !important;
      }
      
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .focus-visible {
        outline: 3px solid var(--accent-color, #3b82f6) !important;
        outline-offset: 2px !important;
      }
      
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      
      .skip-link:focus {
        transform: translateY(0);
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
      
      .tab-navigated {
        outline: 2px solid var(--accent-color, #3b82f6) !important;
        outline-offset: 2px !important;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enabled]);

  if (!enabled || !showControls) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={`${isVisible ? 'Hide' : 'Show'} accessibility controls`}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {isVisible && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-sm">
              High Contrast
            </label>
            <button
              id="high-contrast"
              onClick={toggleHighContrast}
              className={`w-12 h-6 rounded-full transition-colors ${
                isHighContrast ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isHighContrast}
              aria-label="Toggle high contrast mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isHighContrast ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="large-text" className="text-sm">
              Large Text
            </label>
            <button
              id="large-text"
              onClick={toggleLargeText}
              className={`w-12 h-6 rounded-full transition-colors ${
                isLargeText ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isLargeText}
              aria-label="Toggle large text mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isLargeText ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-sm">
              Reduced Motion
            </label>
            <button
              id="reduced-motion"
              onClick={toggleReducedMotion}
              className={`w-12 h-6 rounded-full transition-colors ${
                isReducedMotion ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isReducedMotion}
              aria-label="Toggle reduced motion mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isReducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="pt-2 border-t border-white/20">
            <button
              onClick={() => {
                const mainContent = document.querySelector('main') || document.querySelector('#main');
                if (mainContent) {
                  (mainContent as HTMLElement).focus();
                  announceToScreenReader('Moved to main content');
                }
              }}
              className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
              aria-label="Skip to main content"
            >
              Skip to Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
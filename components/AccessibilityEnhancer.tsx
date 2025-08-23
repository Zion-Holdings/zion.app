import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  Palette, 
  Type, 
  Zap, 
  Focus, 
  Volume2
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [screenReader, setScreenReader] = useState(false);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [highContrast, largeText, reducedMotion, focusIndicator]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const firstFocusable = document.querySelector('[data-accessibility-focus]') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isOpen]);

  const toggleSetting = (setting: string) => {
    switch (setting) {
      case 'highContrast':
        setHighContrast(!highContrast);
        break;
      case 'largeText':
        setLargeText(!largeText);
        break;
      case 'reducedMotion':
        setReducedMotion(!reducedMotion);
        break;
      case 'focusIndicator':
        setFocusIndicator(!focusIndicator);
        break;
      case 'screenReader':
        setScreenReader(!screenReader);
        break;
    }
  };

  const resetSettings = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setFocusIndicator(true);
    setScreenReader(false);
  };

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-20 z-50 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-cyan-400/30">
              <div className="flex items-center justify-between">
                <h2 id="accessibility-title" className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <p id="accessibility-description" className="text-sm text-gray-300 mt-1">
                Customize your viewing experience
              </p>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="high-contrast" className="text-white font-medium">
                      High Contrast
                    </label>
                    <p className="text-xs text-gray-400">Enhanced color contrast</p>
                  </div>
                </div>
                <button
                  id="high-contrast"
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-pressed={highContrast}
                  data-accessibility-focus
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Type className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="large-text" className="text-white font-medium">
                      Large Text
                    </label>
                    <p className="text-xs text-gray-400">Increased font size</p>
                  </div>
                </div>
                <button
                  id="large-text"
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black ${
                    largeText ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-pressed={largeText}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="reduced-motion" className="text-white font-medium">
                      Reduced Motion
                    </label>
                    <p className="text-xs text-gray-400">Minimize animations</p>
                  </div>
                </div>
                <button
                  id="reduced-motion"
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black ${
                    reducedMotion ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                  aria-pressed={reducedMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Focus className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="focus-indicator" className="text-white font-medium">
                      Focus Indicator
                    </label>
                    <p className="text-xs text-gray-400">Enhanced focus visibility</p>
                  </div>
                </div>
                <button
                  id="focus-indicator"
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
                    focusIndicator ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                  aria-pressed={focusIndicator}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader Support */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="screen-reader" className="text-white font-medium">
                      Screen Reader
                    </label>
                    <p className="text-xs text-gray-400">Enhanced ARIA support</p>
                  </div>
                </div>
                <button
                  id="screen-reader"
                  onClick={() => toggleSetting('screenReader')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black ${
                    screenReader ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                  aria-pressed={screenReader}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 border-t border-cyan-400/30">
              <div className="flex gap-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  Apply
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Press Alt + A to toggle this panel
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent-primary: #00ffff !important;
          --accent-secondary: #ff00ff !important;
        }

        .large-text {
          font-size: 1.2em !important;
        }

        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.5em !important; }
        .large-text p { font-size: 1.2em !important; }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible *:focus {
          outline: 3px solid #00ffff !important;
          outline-offset: 2px !important;
        }

        .screen-reader-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
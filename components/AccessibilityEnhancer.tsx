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
      document.body.style.filter = 'contrast(150%) brightness(110%)';
    } else {
      root.classList.remove('high-contrast');
      document.body.style.filter = 'none';
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

  // Keyboard shortcut to toggle panel (Alt + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleSetting = (setting: 'highContrast' | 'largeText' | 'reducedMotion' | 'focusIndicator' | 'screenReader') => {
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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-4 z-50 w-80 bg-black/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-2xl overflow-hidden"
            id="accessibility-panel"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-cyan-400/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Accessibility Settings
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="high-contrast" className="text-white font-medium">
                      High Contrast
                    </label>
                    <div className="text-gray-400 text-xs">Enhanced color contrast</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Type className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="large-text" className="text-white font-medium">
                      Large Text
                    </label>
                    <div className="text-gray-400 text-xs">Increased font size</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${largeText ? 'Disable' : 'Enable'} large text`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
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
                    <div className="text-gray-400 text-xs">Minimize animations</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
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
                    <div className="text-gray-400 text-xs">Enhanced focus visibility</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="screen-reader" className="text-white font-medium">
                      Screen Reader
                    </label>
                    <div className="text-gray-400 text-xs">Enhanced screen reader support</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('screenReader')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    screenReader ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${screenReader ? 'Disable' : 'Enable'} screen reader support`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-cyan-400/30">
              <button
                onClick={resetSettings}
                className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
        }
        
        .large-text {
          font-size: 1.2em !important;
        }
        
        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.5em !important; }
        .large-text p { font-size: 1.1em !important; }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
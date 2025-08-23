import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer } from 'lucide-react';

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setReducedMotion(prefersReducedMotion);
    setHighContrast(prefersHighContrast);

    // Apply accessibility settings
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Show accessibility button after a delay
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [highContrast, reducedMotion]);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Implement actual audio muting logic here
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    document.documentElement.classList.toggle('high-contrast', newValue);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    document.documentElement.classList.toggle('reduced-motion', newValue);
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

  if (!isVisible) return null;

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
        aria-label="Accessibility options"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Eye className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {showAccessibilityMenu && (
          <motion.div
            className="fixed bottom-24 left-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl min-w-[280px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-bold mb-4 text-center">Accessibility Options</h3>
            
            <div className="space-y-4">
              {/* Audio Controls */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Audio</span>
                <button
                  onClick={toggleMute}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isMuted ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                  }`}
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">High Contrast</span>
                <button
                  onClick={toggleHighContrast}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    highContrast ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
                  }`}
                  aria-label="Toggle high contrast"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Reduced Motion</span>
                <button
                  onClick={toggleReducedMotion}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    reducedMotion ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-500/20 text-gray-400'
                  }`}
                  aria-label="Toggle reduced motion"
                >
                  <MousePointer className="w-4 h-4" />
                </button>
              </div>

              {/* Font Size Controls */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Font Size</span>
                  <span className="text-cyan-400 text-sm font-mono">{fontSize}px</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="flex-1 py-2 px-3 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors duration-200 text-sm"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="flex-1 py-2 px-3 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors duration-200 text-sm"
                    aria-label="Reset font size"
                  >
                    Reset
                  </button>
                  <button
                    onClick={increaseFontSize}
                    className="flex-1 py-2 px-3 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors duration-200 text-sm"
                    aria-label="Increase font size"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Keyboard Navigation Info */}
              <div className="pt-2 border-t border-white/20">
                <div className="text-center">
                  <Keyboard className="w-4 h-4 mx-auto text-gray-400 mb-1" />
                  <p className="text-xs text-gray-400">
                    Use Tab to navigate, Enter/Space to activate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High Contrast Styles */}
      <style jsx global>{`
        .high-contrast {
          --tw-text-opacity: 1;
          --tw-bg-opacity: 1;
        }
        
        .high-contrast * {
          border-color: white !important;
          color: white !important;
          background-color: black !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .reduced-motion .animate-pulse {
          animation: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
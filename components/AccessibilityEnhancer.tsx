import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Eye, EyeOff, 
  Contrast, RotateCcw, Accessibility,
  Pause, X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [wordSpacing, setWordSpacing] = useState(0);
  const [showFocusIndicator, setShowFocusIndicator] = useState(true);
  
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (highContrast) {
      root.style.setProperty('--neon-cyan', '#00ffff');
      root.style.setProperty('--neon-purple', '#ff00ff');
      root.style.setProperty('--neon-pink', '#ff80ff');
      root.style.setProperty('--neon-blue', '#0080ff');
      root.style.setProperty('--neon-green', '#00ff80');
      root.style.setProperty('--neon-red', '#ff4040');
      root.style.setProperty('--neon-yellow', '#ffff00');
      root.style.setProperty('--neon-orange', '#ff8000');
      root.style.setProperty('--neon-indigo', '#8080ff');
      root.style.setProperty('--neon-teal', '#00ffff');
    } else {
      root.style.removeProperty('--neon-cyan');
      root.style.removeProperty('--neon-purple');
      root.style.removeProperty('--neon-pink');
      root.style.removeProperty('--neon-blue');
      root.style.removeProperty('--neon-green');
      root.style.removeProperty('--neon-red');
      root.style.removeProperty('--neon-yellow');
      root.style.removeProperty('--neon-orange');
      root.style.removeProperty('--neon-indigo');
      root.style.removeProperty('--neon-teal');
    }

    if (largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.8';
    } else {
      root.style.fontSize = '16px';
      root.style.lineHeight = '1.6';
    }

    if (reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Apply custom font settings
    root.style.setProperty('--font-size', `${fontSize}px`);
    root.style.setProperty('--line-height', lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${letterSpacing}px`);
    root.style.setProperty('--word-spacing', `${wordSpacing}px`);
  }, [highContrast, largeText, reducedMotion, fontSize, lineHeight, letterSpacing, wordSpacing]);

  // Focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
      
      if (e.key === 'Tab' && isOpen) {
        const focusableElements = panelRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
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

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus indicator
  useEffect(() => {
    if (showFocusIndicator) {
      document.body.classList.add('show-focus-indicator');
    } else {
      document.body.classList.remove('show-focus-indicator');
    }
  }, [showFocusIndicator]);

  // Announce changes to screen readers
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

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    announceToScreenReader(`Audio ${!isMuted ? 'muted' : 'unmuted'}`);
  };

  const handleToggleContrast = () => {
    setHighContrast(!highContrast);
    announceToScreenReader(`High contrast ${!highContrast ? 'enabled' : 'disabled'}`);
  };

  const handleToggleLargeText = () => {
    setLargeText(!largeText);
    announceToScreenReader(`Large text ${!largeText ? 'enabled' : 'disabled'}`);
  };

  const handleToggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
    announceToScreenReader(`Reduced motion ${!reducedMotion ? 'enabled' : 'disabled'}`);
  };

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
    announceToScreenReader(`Font size changed to ${newSize}px`);
  };

  const handleReset = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setFontSize(16);
    setLineHeight(1.6);
    setLetterSpacing(0);
    setWordSpacing(0);
    setShowFocusIndicator(true);
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black ${
          isOpen ? 'ring-4 ring-cyan-500/50' : ''
        }`}
        aria-label="Open accessibility panel"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-24 right-6 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-6 ${className}`}
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="accessibility-panel-title" className="text-xl font-bold text-white">
                  Accessibility Settings
                </h2>
                <p id="accessibility-panel-description" className="text-sm text-gray-400">
                  Customize your experience for better accessibility
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={handleToggleMute}
                className={`p-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  isMuted 
                    ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                    : 'bg-green-500/20 border-green-500/50 text-green-400'
                }`}
                aria-label={`${isMuted ? 'Unmute' : 'Mute'} audio`}
              >
                {isMuted ? <VolumeX className="w-5 h-5 mx-auto" /> : <Volume2 className="w-5 h-5 mx-auto" />}
                <span className="block text-xs mt-1">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>

              <button
                onClick={handleToggleContrast}
                className={`p-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  highContrast 
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' 
                    : 'bg-gray-500/20 border-gray-500/50 text-gray-400'
                }`}
                aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <Contrast className="w-5 h-5 mx-auto" />
                <span className="block text-xs mt-1">Contrast</span>
              </button>
            </div>

            {/* Text Settings */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-white">Text Settings</h3>
              
              <div>
                <label htmlFor="font-size" className="block text-sm text-gray-300 mb-2">
                  Font Size: {fontSize}px
                </label>
                <input
                  id="font-size"
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => handleFontSizeChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  aria-valuemin={12}
                  aria-valuemax={24}
                  aria-valuenow={fontSize}
                />
              </div>

              <div>
                <label htmlFor="line-height" className="block text-sm text-gray-300 mb-2">
                  Line Height: {lineHeight.toFixed(1)}
                </label>
                <input
                  id="line-height"
                  type="range"
                  min="1.2"
                  max="2.4"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  aria-valuemin={1.2}
                  aria-valuemax={2.4}
                  aria-valuenow={lineHeight}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleToggleLargeText}
                  className={`p-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    largeText 
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' 
                      : 'bg-gray-500/20 border-gray-500/50 text-gray-400'
                  }`}
                  aria-label={`${largeText ? 'Disable' : 'Enable'} large text`}
                >
                  {largeText ? <Eye className="w-5 h-5 mx-auto" /> : <EyeOff className="w-5 h-5 mx-auto" />}
                  <span className="block text-xs mt-1">Large Text</span>
                </button>

                <button
                  onClick={handleToggleReducedMotion}
                  className={`p-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    reducedMotion 
                      ? 'bg-purple-500/20 border-purple-500/50 text-purple-400' 
                      : 'bg-gray-500/20 border-gray-500/50 text-gray-400'
                  }`}
                  aria-label={`${reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <Pause className="w-5 h-5 mx-auto" />
                  <span className="block text-xs mt-1">Reduced Motion</span>
                </button>
              </div>
            </div>

            {/* Focus Settings */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-white">Focus Settings</h3>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Show Focus Indicator</span>
                <button
                  onClick={() => setShowFocusIndicator(!showFocusIndicator)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    showFocusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={showFocusIndicator}
                  aria-label="Toggle focus indicator"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      showFocusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="w-full p-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50 flex items-center justify-center gap-2"
              aria-label="Reset all accessibility settings to default"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
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
        
        .show-focus-indicator *:focus {
          outline: 3px solid #00d4ff !important;
          outline-offset: 2px !important;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00d4ff;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #00d4ff;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
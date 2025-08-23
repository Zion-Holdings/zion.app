import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Keyboard, 
  Volume2, 
  VolumeX, 
  Settings,
  X,
  Check,
  Plus,
  Minus
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showFocusIndicator, setShowFocusIndicator] = useState(true);

  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem('zion-font-size');
    const savedHighContrast = localStorage.getItem('zion-high-contrast');
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion');
    const savedKeyboardNavigation = localStorage.getItem('zion-keyboard-navigation');
    const savedSoundEnabled = localStorage.getItem('zion-sound-enabled');
    const savedShowFocusIndicator = localStorage.getItem('zion-show-focus-indicator');

    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
    if (savedReducedMotion) setReducedMotion(savedReducedMotion === 'true');
    if (savedKeyboardNavigation) setKeyboardNavigation(savedKeyboardNavigation === 'true');
    if (savedSoundEnabled) setSoundEnabled(savedSoundEnabled === 'true');
    if (savedShowFocusIndicator) setShowFocusIndicator(savedShowFocusIndicator === 'true');

    // Apply initial settings
    applyAccessibilitySettings();
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = () => {
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
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.setProperty('--motion-reduce', '0');
    }
    
    // Focus indicator
    if (showFocusIndicator) {
      root.classList.add('show-focus-indicator');
    } else {
      root.classList.remove('show-focus-indicator');
    }
  };

  // Save and apply font size
  const handleFontSizeChange = (newSize: number) => {
    const clampedSize = Math.max(12, Math.min(24, newSize));
    setFontSize(clampedSize);
    localStorage.setItem('zion-font-size', clampedSize.toString());
    applyAccessibilitySettings();
  };

  // Save and apply high contrast
  const handleHighContrastChange = (enabled: boolean) => {
    setHighContrast(enabled);
    localStorage.setItem('zion-high-contrast', enabled.toString());
    applyAccessibilitySettings();
  };

  // Save and apply reduced motion
  const handleReducedMotionChange = (enabled: boolean) => {
    setReducedMotion(enabled);
    localStorage.setItem('zion-reduced-motion', enabled.toString());
    applyAccessibilitySettings();
  };

  // Save and apply keyboard navigation
  const handleKeyboardNavigationChange = (enabled: boolean) => {
    setKeyboardNavigation(enabled);
    localStorage.setItem('zion-keyboard-navigation', enabled.toString());
    applyAccessibilitySettings();
  };

  // Save and apply sound settings
  const handleSoundChange = (enabled: boolean) => {
    setSoundEnabled(enabled);
    localStorage.setItem('zion-sound-enabled', enabled.toString());
    applyAccessibilitySettings();
  };

  // Save and apply focus indicator
  const handleFocusIndicatorChange = (enabled: boolean) => {
    setShowFocusIndicator(enabled);
    localStorage.setItem('zion-show-focus-indicator', enabled.toString());
    applyAccessibilitySettings();
  };

  // Reset all settings to default
  const resetToDefaults = () => {
    setFontSize(16);
    setHighContrast(false);
    setReducedMotion(false);
    setKeyboardNavigation(true);
    setSoundEnabled(true);
    setShowFocusIndicator(true);
    
    localStorage.removeItem('zion-font-size');
    localStorage.removeItem('zion-high-contrast');
    localStorage.removeItem('zion-reduced-motion');
    localStorage.removeItem('zion-keyboard-navigation');
    localStorage.removeItem('zion-sound-enabled');
    localStorage.removeItem('zion-show-focus-indicator');
    
    applyAccessibilitySettings();
  };

  // Apply settings whenever they change
  useEffect(() => {
    applyAccessibilitySettings();
  }, [fontSize, highContrast, reducedMotion, keyboardNavigation, soundEnabled, showFocusIndicator]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <Accessibility className="w-5 h-5 mr-2 text-cyan-400" />
                    Accessibility Settings
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                    aria-label="Close accessibility settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-400 mt-2">
                  Customize your experience to make it more accessible and comfortable
                </p>
              </div>

              {/* Settings Content */}
              <div className="p-6 space-y-6">
                {/* Font Size */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Type className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-medium text-white">Font Size</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleFontSizeChange(fontSize - 1)}
                      disabled={fontSize <= 12}
                      className="p-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg transition-colors duration-200"
                      aria-label="Decrease font size"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-white font-medium min-w-[3rem] text-center">{fontSize}px</span>
                    <button
                      onClick={() => handleFontSizeChange(fontSize + 1)}
                      disabled={fontSize >= 24}
                      className="p-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-600 text-white rounded-lg transition-colors duration-200"
                      aria-label="Increase font size"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    Current size: {fontSize < 16 ? 'Small' : fontSize > 18 ? 'Large' : 'Medium'}
                  </div>
                </div>

                {/* High Contrast */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-medium text-white">High Contrast</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleHighContrastChange(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        highContrast
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Check className="w-4 h-4 inline mr-2" />
                      Enabled
                    </button>
                    <button
                      onClick={() => handleHighContrastChange(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        !highContrast
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Disabled
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    {highContrast ? 'Enhanced contrast for better readability' : 'Standard contrast mode'}
                  </div>
                </div>

                {/* Reduced Motion */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-medium text-white">Reduced Motion</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleReducedMotionChange(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        reducedMotion
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Check className="w-4 h-4 inline mr-2" />
                      Enabled
                    </button>
                    <button
                      onClick={() => handleReducedMotionChange(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        !reducedMotion
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Disabled
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    {reducedMotion ? 'Minimized animations for motion sensitivity' : 'Full motion experience'}
                  </div>
                </div>

                {/* Keyboard Navigation */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Keyboard className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-medium text-white">Keyboard Navigation</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleKeyboardNavigationChange(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        keyboardNavigation
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Check className="w-4 h-4 inline mr-2" />
                      Enabled
                    </button>
                    <button
                      onClick={() => handleKeyboardNavigationChange(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        !keyboardNavigation
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Disabled
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    {keyboardNavigation ? 'Enhanced keyboard navigation support' : 'Standard navigation mode'}
                  </div>
                </div>

                {/* Focus Indicator */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-medium text-white">Focus Indicator</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleFocusIndicatorChange(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        showFocusIndicator
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Check className="w-4 h-4 inline mr-2" />
                      Visible
                    </button>
                    <button
                      onClick={() => handleFocusIndicatorChange(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        !showFocusIndicator
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Hidden
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    {showFocusIndicator ? 'Clear focus indicators for keyboard users' : 'Minimal focus indicators'}
                  </div>
                </div>

                {/* Sound Settings */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    {soundEnabled ? (
                      <Volume2 className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <VolumeX className="w-5 h-5 text-red-400" />
                    )}
                    <h3 className="text-lg font-medium text-white">Sound</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleSoundChange(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        soundEnabled
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Volume2 className="w-4 h-4 inline mr-2" />
                      Enabled
                    </button>
                    <button
                      onClick={() => handleSoundChange(false)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        !soundEnabled
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <VolumeX className="w-4 h-4 inline mr-2" />
                      Disabled
                    </button>
                  </div>
                  <div className="text-sm text-gray-400">
                    {soundEnabled ? 'Audio feedback enabled' : 'Audio feedback disabled'}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700/50 bg-gray-800/30 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <button
                    onClick={resetToDefaults}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Reset to Defaults
                  </button>
                  <div className="text-sm text-gray-400">
                    Settings are automatically saved
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #111827 !important;
          --accent-color: #06b6d4 !important;
        }

        .high-contrast * {
          color: var(--text-primary) !important;
          background-color: var(--bg-primary) !important;
          border-color: var(--accent-color) !important;
        }

        .high-contrast .bg-gray-900 {
          background-color: #000000 !important;
        }

        .high-contrast .text-gray-400 {
          color: #e5e7eb !important;
        }

        .show-focus-indicator *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        [style*="--motion-reduce: 1"] * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        [style*="--motion-reduce: 1"] .motion-reduce {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
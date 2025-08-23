import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Move, 
  Focus, 
  Settings,
  X,
  Accessibility,
  SkipForward
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  increasedSpacing: boolean;
  focusVisible: boolean;
}

const AccessibilityEnhancer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    increasedSpacing: false,
    focusVisible: false
  });

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.increasedSpacing) {
      root.classList.add('increased-spacing');
    } else {
      root.classList.remove('increased-spacing');
    }
    
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSkipToContent = () => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNavigation = () => {
    const navigation = document.querySelector('nav') || document.querySelector('#navigation');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <button
          onClick={handleSkipToNavigation}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
        >
          <SkipForward className="w-4 h-4 inline mr-2" />
          Skip to Navigation
        </button>
        <button
          onClick={handleSkipToContent}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-300 focus:outline-none ml-2"
        >
          <SkipForward className="w-4 h-4 inline mr-2" />
          Skip to Main Content
        </button>
      </div>

      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-4 right-20 z-40 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl w-80"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Accessibility className="w-5 h-5 mr-2 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-white">High Contrast</span>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Move className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-white">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Type className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-white">Large Text</span>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Increased Spacing */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Move className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-white">Increased Spacing</span>
                </div>
                <button
                  onClick={() => toggleSetting('increasedSpacing')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.increasedSpacing ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.increasedSpacing ? 'Disable' : 'Enable'} increased spacing`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.increasedSpacing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Visible */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Focus className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-white">Focus Indicators</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusVisible')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusVisible ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.focusVisible ? 'Disable' : 'Enable'} focus indicators`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusVisible ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSettings({
                    highContrast: true,
                    reducedMotion: false,
                    largeText: true,
                    increasedSpacing: true,
                    focusVisible: true
                  })}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs px-3 py-2 rounded-lg transition-colors"
                >
                  Vision Friendly
                </button>
                <button
                  onClick={() => setSettings({
                    highContrast: false,
                    reducedMotion: true,
                    largeText: false,
                    increasedSpacing: false,
                    focusVisible: true
                  })}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs px-3 py-2 rounded-lg transition-colors"
                >
                  Motion Sensitive
                </button>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="mt-4 text-xs text-gray-400 text-center">
              {Object.values(settings).filter(Boolean).length > 0 ? (
                <span className="text-cyan-400">
                  {Object.values(settings).filter(Boolean).length} accessibility features active
                </span>
              ) : (
                <span>Default accessibility settings</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children */}
      {children}
    </>
  );
};

export default AccessibilityEnhancer;
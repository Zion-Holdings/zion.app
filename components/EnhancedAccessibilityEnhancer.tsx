<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Listen for preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    mediaQuery.addEventListener('change', handleMotionChange);
    highContrastQuery.addEventListener('change', handleContrastChange);

    // Keyboard navigation detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardMode(true);
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardMode(false);
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [isHighContrast, isReducedMotion, fontSize]);

  const applyAccessibilityFeatures = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
=======
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCcw, Accessibility, CheckCircle, AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);

  // Load saved settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applyAccessibilitySettings(parsed);
    }
  }, []);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
>>>>>>> origin/main
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
<<<<<<< HEAD
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#9ca3af');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#111827');
      root.style.setProperty('--accent-color', '#06b6d4');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--transition-duration', '0.1s');
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--transition-duration', '0.3s');
      root.style.setProperty('--animation-duration', '0.6s');
    }

    // Apply font size
    root.style.setProperty('--font-size-base', `${fontSize}px`);
    root.style.setProperty('--font-size-lg', `${fontSize * 1.125}px`);
    root.style.setProperty('--font-size-xl', `${fontSize * 1.25}px`);
    root.style.setProperty('--font-size-2xl', `${fontSize * 1.5}px`);
    root.style.setProperty('--font-size-3xl', `${fontSize * 1.875}px`);
    root.style.setProperty('--font-size-4xl', `${fontSize * 2.25}px`);
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

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => !prev);
  };

  // Skip to content functionality
  useEffect(() => {
    const skipLink = document.getElementById('skip-to-content');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
=======
      root.style.setProperty('--accent-color', '#fbbf24');
    } else {
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
>>>>>>> origin/main
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation', '1.5');
    } else {
      root.style.removeProperty('--saturation');
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.removeProperty('--focus-ring');
    }

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
  }, []);

<<<<<<< HEAD
  return (
    <>
      {/* Skip to content link */}
      <a
        id="skip-to-content"
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-400 focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold"
        tabIndex={0}
      >
        Skip to main content
      </a>

      {/* Accessibility Controls */}
      <div className="fixed top-4 right-4 z-50 bg-black/90 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-4 text-white shadow-lg">
        <h3 className="text-sm font-semibold mb-3 text-cyan-400">Accessibility</h3>
        
        <div className="space-y-3">
          {/* Font Size Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={decreaseFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold transition-colors"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={resetFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded text-base font-bold transition-colors"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isHighContrast 
                ? 'bg-yellow-600 hover:bg-yellow-700 text-black' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          >
            {isHighContrast ? 'High Contrast: ON' : 'High Contrast: OFF'}
          </button>

          {/* Reduced Motion Toggle */}
          <button
            onClick={toggleReducedMotion}
            className={`w-full px-3 py-2 rounded text-sm transition-colors ${
              isReducedMotion 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
          >
            {isReducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
          </button>
        </div>

        {/* Keyboard Navigation Indicator */}
        {isKeyboardMode && (
          <div className="mt-3 p-2 bg-green-600/20 border border-green-500/50 rounded text-xs text-green-400">
            ⌨️ Keyboard navigation active
          </div>
=======
  // Update individual setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  // Reset all settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    setFontSize(16);
    setLineHeight(1.5);
    setLetterSpacing(0);
  }, [applyAccessibilitySettings]);

  // Apply font size changes
  const applyFontSize = useCallback((size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}px`;
  }, []);

  // Apply line height changes
  const applyLineHeight = useCallback((height: number) => {
    setLineHeight(height);
    document.documentElement.style.setProperty('--line-height', height.toString());
  }, []);

  // Apply letter spacing changes
  const applyLetterSpacing = useCallback((spacing: number) => {
    setLetterSpacing(spacing);
    document.documentElement.style.setProperty('--letter-spacing', `${spacing}px`);
  }, []);

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-cyan-400" />
                  Accessibility
                </h3>
                <button
                  onClick={resetSettings}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                  aria-label="Reset all settings"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Visual Settings */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Visual Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">High Contrast</span>
                      <button
                        onClick={() => updateSetting('highContrast', !settings.highContrast)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: settings.highContrast ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Large Text</span>
                      <button
                        onClick={() => updateSetting('largeText', !settings.largeText)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: settings.largeText ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </label>

                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">High Saturation</span>
                      <button
                        onClick={() => updateSetting('highSaturation', !settings.highSaturation)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.highSaturation ? 'bg-cyan-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${settings.highSaturation ? 'Disable' : 'Enable'} high saturation`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: settings.highSaturation ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </label>
                  </div>
                </div>

                {/* Motion Settings */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Motion Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Reduced Motion</span>
                      <button
                        onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: settings.reducedMotion ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </label>
                  </div>
                </div>

                {/* Focus Settings */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Focus Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Focus Indicator</span>
                      <button
                        onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                        }`}
                        aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                      >
                        <motion.div
                          className="w-5 h-5 bg-white rounded-full shadow-md"
                          animate={{ x: settings.focusIndicator ? 24 : 2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </button>
                    </label>
                  </div>
                </div>

                {/* Text Customization */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-3">Text Customization</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Font Size: {fontSize}px</label>
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={fontSize}
                        onChange={(e) => applyFontSize(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Line Height: {lineHeight}</label>
                      <input
                        type="range"
                        min="1.2"
                        max="2.0"
                        step="0.1"
                        value={lineHeight}
                        onChange={(e) => applyLineHeight(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Letter Spacing: {letterSpacing}px</label>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.1"
                        value={letterSpacing}
                        onChange={(e) => applyLetterSpacing(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Settings applied</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <AlertCircle className="w-3 h-3 text-yellow-400" />
                    <span>Changes saved automatically</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
>>>>>>> origin/main
        )}
      </div>

<<<<<<< HEAD
      {/* Focus indicator styles */}
      <style jsx global>{`
        .keyboard-navigation *:focus {
          outline: 3px solid #ffff00 !important;
          outline-offset: 2px !important;
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

        .sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
          border: 2px solid #ffff00;
          background: #000000;
          color: #ffff00;
          z-index: 9999;
        }

        /* High contrast mode styles */
        [data-high-contrast="true"] {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent-color: #ffff00 !important;
        }

        /* Reduced motion styles */
        [data-reduced-motion="true"] * {
          animation-duration: 0.1s !important;
          transition-duration: 0.1s !important;
        }

        /* Focus visible styles */
        *:focus-visible {
          outline: 3px solid var(--accent-color, #06b6d4) !important;
          outline-offset: 2px !important;
        }

        /* Skip link styles */
        #skip-to-content:focus {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 9999;
          background: #ffff00;
          color: #000000;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-weight: bold;
          text-decoration: none;
=======
      {/* Custom CSS for slider styling */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
>>>>>>> origin/main
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
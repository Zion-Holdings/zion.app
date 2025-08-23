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
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
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
        )}
      </AnimatePresence>

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
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
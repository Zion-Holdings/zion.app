import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Accessibility,
  Settings,
  X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--accent-color', '#06b6d6');
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
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Font size adjustment
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings]);

  // Update settings and apply them
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Toggle high contrast
  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  // Toggle large text
  const toggleLargeText = useCallback(() => {
    updateSetting('largeText', !settings.largeText);
  }, [settings.largeText, updateSetting]);

  // Toggle reduced motion
  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  // Toggle screen reader mode
  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  // Increase font size
  const increaseFontSize = useCallback(() => {
    updateSetting('fontSize', Math.min(settings.fontSize + 2, 24));
  }, [settings.fontSize, updateSetting]);

  // Decrease font size
  const decreaseFontSize = useCallback(() => {
    updateSetting('fontSize', Math.max(settings.fontSize - 2, 12));
  }, [settings.fontSize, updateSetting]);

  // Increase line height
  const increaseLineHeight = useCallback(() => {
    updateSetting('lineHeight', Math.min(settings.lineHeight + 0.1, 2.0));
  }, [settings.lineHeight, updateSetting]);

  // Decrease line height
  const decreaseLineHeight = useCallback(() => {
    updateSetting('lineHeight', Math.max(settings.lineHeight - 0.1, 1.0));
  }, [settings.lineHeight, updateSetting]);

  // Increase letter spacing
  const increaseLetterSpacing = useCallback(() => {
    updateSetting('letterSpacing', Math.min(settings.letterSpacing + 0.5, 3));
  }, [settings.letterSpacing, updateSetting]);

  // Decrease letter spacing
  const decreaseLetterSpacing = useCallback(() => {
    updateSetting('letterSpacing', Math.max(settings.letterSpacing - 0.5, 0));
  }, [settings.letterSpacing, updateSetting]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-7 h-7 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Accessibility className="w-5 h-5 mr-2" />
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

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={toggleHighContrast}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.highContrast
                        ? 'bg-cyan-500 border-cyan-400 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                    aria-label="Toggle high contrast"
                  >
                    <div className="flex items-center justify-center">
                      {settings.highContrast ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                      <span className="text-sm">High Contrast</span>
                    </div>
                  </button>

                  <button
                    onClick={toggleLargeText}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.largeText
                        ? 'bg-cyan-500 border-cyan-400 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                    aria-label="Toggle large text"
                  >
                    <div className="flex items-center justify-center">
                      <Type className="w-4 h-4 mr-2" />
                      <span className="text-sm">Large Text</span>
                    </div>
                  </button>

                  <button
                    onClick={toggleReducedMotion}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.reducedMotion
                        ? 'bg-cyan-500 border-cyan-400 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                    aria-label="Toggle reduced motion"
                  >
                    <div className="flex items-center justify-center">
                      {settings.reducedMotion ? <VolumeX className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
                      <span className="text-sm">Reduced Motion</span>
                    </div>
                  </button>

                  <button
                    onClick={toggleScreenReader}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      settings.screenReader
                        ? 'bg-cyan-500 border-cyan-400 text-white'
                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                    aria-label="Toggle screen reader mode"
                  >
                    <div className="flex items-center justify-center">
                      <Accessibility className="w-4 h-4 mr-2" />
                      <span className="text-sm">Screen Reader</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Font Size Controls */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Font Size</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={decreaseFontSize}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium">{settings.fontSize}px</span>
                  <button
                    onClick={increaseFontSize}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Line Height Controls */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Line Height</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={decreaseLineHeight}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Decrease line height"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium">{settings.lineHeight.toFixed(1)}</span>
                  <button
                    onClick={increaseLineHeight}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Increase line height"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Letter Spacing Controls */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Letter Spacing</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={decreaseLetterSpacing}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Decrease letter spacing"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium">{settings.letterSpacing.toFixed(1)}px</span>
                  <button
                    onClick={increaseLetterSpacing}
                    className="w-10 h-10 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                    aria-label="Increase letter spacing"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full p-3 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                aria-label="Reset all accessibility settings"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset to Default
              </button>

              {/* Help Text */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">
                  These accessibility features help make our website more usable for everyone. 
                  Your preferences are saved and will be remembered on your next visit.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityEnhancer;
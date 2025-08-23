import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Keyboard, MousePointer, 
  Contrast, Type, ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  zoomLevel: number;
}

const EnhancedAccessibility: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    zoomLevel: 100
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
    }

    // Zoom level
    root.style.zoom = `${newSettings.zoomLevel / 100}`;

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: string | number | boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={togglePanel}
        className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-20 right-4 z-50 w-80 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 text-white"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-cyan-400">Accessibility</h2>
              <button
                onClick={togglePanel}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility settings"
              >
                <EyeOff className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Contrast className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">High Contrast</span>
                </div>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Type className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Large Text</span>
                </div>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MousePointer className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Reduced Motion</span>
                </div>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Zoom Control */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Zoom Level</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateSetting('zoomLevel', Math.max(50, settings.zoomLevel - 10))}
                    className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center text-sm bg-gray-700 px-3 py-2 rounded-lg">
                    {settings.zoomLevel}%
                  </span>
                  <button
                    onClick={() => updateSetting('zoomLevel', Math.min(200, settings.zoomLevel + 10))}
                    className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">Keyboard Navigation</span>
                </div>
                <button
                  onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                    settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Default</span>
              </button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">Keyboard Shortcuts</h3>
              <div className="text-xs text-gray-400 space-y-1">
                <div>Tab: Navigate between elements</div>
                <div>Enter/Space: Activate buttons</div>
                <div>Escape: Close panels</div>
                <div>Ctrl + +/-: Zoom in/out</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedAccessibility;
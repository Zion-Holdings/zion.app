import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, Type, Palette, Volume2,
  MousePointer, Monitor, X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ onSettingsChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
      root.style.setProperty('--font-size-2xl', '28px');
    } else {
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
      root.style.removeProperty('--font-size-2xl');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
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

    // Screen reader announcements
    if (newSettings.screenReader) {
      announceToScreenReader('Accessibility settings applied');
    }
  };

  // Announce to screen readers
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

  // Handle setting changes
  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }

    // Announce change to screen reader
    if (newSettings.screenReader) {
      announceToScreenReader(`${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`);
    }
  };

  // Reset all settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(defaultSettings));
    
    if (onSettingsChange) {
      onSettingsChange(defaultSettings);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-20 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Accessibility</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-medium text-white">High Contrast</div>
                    <div className="text-xs text-gray-400">Enhanced color contrast</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
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

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Large Text</div>
                    <div className="text-xs text-gray-400">Increased font sizes</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('largeText', !settings.largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-purple-500' : 'bg-gray-600'
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

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Reduced Motion</div>
                    <div className="text-xs text-gray-400">Minimize animations</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-green-500' : 'bg-gray-600'
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

              {/* High Saturation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="text-sm font-medium text-white">High Saturation</div>
                    <div className="text-xs text-gray-400">Enhanced color vibrancy</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('highSaturation', !settings.highSaturation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highSaturation ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.highSaturation ? 'Disable' : 'Enable'} high saturation`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highSaturation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Focus Indicator</div>
                    <div className="text-xs text-gray-400">Enhanced focus rings</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-pink-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Screen Reader</div>
                    <div className="text-xs text-gray-400">Audio announcements</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('screenReader', !settings.screenReader)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.screenReader ? 'bg-pink-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/30 rounded-b-xl">
              <div className="flex gap-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only" aria-live="polite">
        Accessibility settings panel is available. Use the accessibility button in the top right corner to open it.
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
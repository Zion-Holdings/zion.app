import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Eye, EyeOff, Contrast, Type, 
  MousePointer, Keyboard, Monitor, Smartphone,
  Settings, X, CheckCircle, AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
      root.style.lineHeight = '1.8';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.filter = 'saturate(1.5) contrast(1.2)';
    } else {
      root.style.filter = '';
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '0 0 0 3px rgba(59, 130, 246, 0.5)');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      // Add screen reader specific classes
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Show notification
    addNotification('Accessibility settings updated');
  }, []);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        setSettings(savedSettings);
        applySettings(savedSettings);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }

    // Show accessibility button after a delay
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Add notification
  const addNotification = (message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, message]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n !== message));
    }, 3000);
  };

  // Toggle setting
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Reset to defaults
  const resetToDefaults = () => {
    const defaults: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false
    };
    setSettings(defaults);
    addNotification('Settings reset to defaults');
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Alt + A to open accessibility panel
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const firstButton = document.querySelector('[data-accessibility-first]') as HTMLElement;
      if (firstButton) {
        firstButton.focus();
      }
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        title="Accessibility Settings (Ctrl + Alt + A)"
      >
        <Settings className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-blue-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Contrast className="w-5 h-5 mr-3 text-blue-400" />
                    <div>
                      <div className="text-white font-medium">High Contrast</div>
                      <div className="text-sm text-gray-400">Enhanced color contrast</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                    data-accessibility-first
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Type className="w-5 h-5 mr-3 text-green-400" />
                    <div>
                      <div className="text-white font-medium">Large Text</div>
                      <div className="text-sm text-gray-400">Increased font size</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.largeText ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-3 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Reduced Motion</div>
                      <div className="text-sm text-gray-400">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* High Saturation */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Monitor className="w-5 h-5 mr-3 text-yellow-400" />
                    <div>
                      <div className="text-white font-medium">High Saturation</div>
                      <div className="text-sm text-gray-400">Enhanced colors</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highSaturation')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.highSaturation ? 'bg-yellow-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.highSaturation ? 'Disable' : 'Enable'} high saturation`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.highSaturation ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <MousePointer className="w-5 h-5 mr-3 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Focus Indicator</div>
                      <div className="text-sm text-gray-400">Enhanced focus rings</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.focusIndicator ? 'bg-cyan-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Keyboard className="w-5 h-5 mr-3 text-red-400" />
                    <div>
                      <div className="text-white font-medium">Screen Reader</div>
                      <div className="text-sm text-gray-400">Optimized for assistive tech</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('screenReader')}
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.screenReader ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader optimization`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={resetToDefaults}
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Close
                </button>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <div className="text-sm text-gray-400">
                  <strong>Keyboard Shortcuts:</strong>
                  <br />
                  <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + Alt + A</kbd> Open accessibility
                  <br />
                  <kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Esc</kbd> Close panel
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-6 right-6 z-50 space-y-2">
        {notifications.map((notification, index) => (
          <motion.div
            key={index}
            className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span>{notification}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
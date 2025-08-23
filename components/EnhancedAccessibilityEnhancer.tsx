import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Palette, 
  ZoomIn, ZoomOut, RotateCcw, Settings, X,
  Accessibility, Contrast, Text, Highlighter
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  contrast: 'normal' | 'high' | 'inverted';
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  spacing: 'normal' | 'large' | 'extra-large';
  focusIndicator: boolean;
  screenReader: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    contrast: 'normal',
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    spacing: 'normal',
    focusIndicator: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }

    // Show accessibility button after a delay
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply contrast
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${newSettings.contrast}`);
    
    // Apply spacing
    root.classList.remove('spacing-normal', 'spacing-large', 'spacing-extra-large');
    root.classList.add(`spacing-${newSettings.spacing}`);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, [settings, applySettings]);

  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      contrast: 'normal',
      reducedMotion: false,
      highContrast: false,
      largeText: false,
      spacing: 'normal',
      focusIndicator: true,
      screenReader: false
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  }, [applySettings]);

  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReader]);

  // Quick actions
  const quickActions = [
    {
      icon: ZoomIn,
      label: 'Increase Font',
      action: () => {
        const newSize = Math.min(settings.fontSize + 2, 24);
        updateSetting('fontSize', newSize);
        announceToScreenReader(`Font size increased to ${newSize}px`);
      }
    },
    {
      icon: ZoomOut,
      label: 'Decrease Font',
      action: () => {
        const newSize = Math.max(settings.fontSize - 2, 12);
        updateSetting('fontSize', newSize);
        announceToScreenReader(`Font size decreased to ${newSize}px`);
      }
    },
    {
      icon: Highlighter,
      label: 'Toggle Contrast',
      action: () => {
        const newContrast = settings.highContrast ? 'normal' : 'high';
        updateSetting('highContrast', !settings.highContrast);
        announceToScreenReader(`Contrast set to ${newContrast}`);
      }
    },
    {
      icon: RotateCcw,
      label: 'Reset All',
      action: () => {
        resetSettings();
        announceToScreenReader('Accessibility settings reset to default');
      }
    }
  ];

  return (
    <>
      {/* Accessibility Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePanel}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
            aria-label="Open accessibility settings"
            aria-expanded={isOpen}
            aria-controls="accessibility-panel"
          >
            <Accessibility className="w-7 h-7 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            id="accessibility-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-title"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <h2 id="accessibility-title" className="text-2xl font-bold flex items-center gap-3">
                  <Accessibility className="w-6 h-6" />
                  Accessibility
                </h2>
                <button
                  onClick={togglePanel}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      aria-label={action.label}
                    >
                      <action.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Text className="w-5 h-5" />
                  Font Size
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Current: {settings.fontSize}px</span>
                    <button
                      onClick={() => updateSetting('fontSize', 16)}
                      className="text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                      Reset
                    </button>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    step="2"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    aria-label="Adjust font size"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>12px</span>
                    <span>24px</span>
                  </div>
                </div>
              </div>

              {/* Contrast */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Contrast className="w-5 h-5" />
                  Contrast
                </h3>
                <div className="space-y-3">
                  {(['normal', 'high', 'inverted'] as const).map((contrast) => (
                    <label key={contrast} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="contrast"
                        value={contrast}
                        checked={settings.contrast === contrast}
                        onChange={(e) => updateSetting('contrast', e.target.value)}
                        className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                        {contrast}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Spacing */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Spacing
                </h3>
                <div className="space-y-3">
                  {(['normal', 'large', 'extra-large'] as const).map((spacing) => (
                    <label key={spacing} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="spacing"
                        value={spacing}
                        checked={settings.spacing === spacing}
                        onChange={(e) => updateSetting('spacing', e.target.value)}
                        className="w-4 h-4 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                        {spacing.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Toggle Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Options
                </h3>
                <div className="space-y-3">
                  {[
                    { key: 'highContrast', label: 'High Contrast Mode' },
                    { key: 'largeText', label: 'Large Text Mode' },
                    { key: 'focusIndicator', label: 'Focus Indicators' },
                    { key: 'reducedMotion', label: 'Reduced Motion' },
                    { key: 'screenReader', label: 'Screen Reader Support' }
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings[key as keyof AccessibilitySettings] as boolean}
                        onChange={(e) => updateSetting(key as keyof AccessibilitySettings, e.target.checked)}
                        className="w-4 h-4 text-cyan-600 focus:ring-cyan-500 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Reset all accessibility settings to default"
                >
                  Reset All Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={togglePanel}
            aria-hidden="true"
          />
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
        
        .high-contrast {
          filter: contrast(150%);
        }
        
        .large-text {
          font-size: 1.2em;
          line-height: 1.6;
        }
        
        .spacing-large * {
          letter-spacing: 0.05em;
          word-spacing: 0.1em;
        }
        
        .spacing-extra-large * {
          letter-spacing: 0.1em;
          word-spacing: 0.2em;
        }
        
        .focus-visible *:focus {
          outline: 3px solid #06b6d4;
          outline-offset: 2px;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          box-shadow: 0 0 6px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 6px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
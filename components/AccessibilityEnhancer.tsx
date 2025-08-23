import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accessibility,
  Eye,
  Volume2,
  VolumeX,
  Palette,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Sun,
  Moon,
  Contrast
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high' | 'inverted';
  reduceMotion: boolean;
  reduceTransparency: boolean;
  highContrast: boolean;
  darkMode: boolean;
  soundEnabled: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    contrast: 'normal',
    reduceMotion: false,
    reduceTransparency: false,
    highContrast: false,
    darkMode: true,
    soundEnabled: true
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--font-size-multiplier', 
      newSettings.fontSize === 'small' ? '0.875' : 
      newSettings.fontSize === 'large' ? '1.25' : '1'
    );

    // Contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Motion reduction
    if (newSettings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Transparency reduction
    if (newSettings.reduceTransparency) {
      root.classList.add('reduce-transparency');
    } else {
      root.classList.remove('reduce-transparency');
    }

    // Dark mode
    if (newSettings.darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Update settings and apply them
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: unknown) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  }, [settings, applySettings]);

  // Reset all settings to defaults
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'medium',
      contrast: 'normal',
      reduceMotion: false,
      reduceTransparency: false,
      highContrast: false,
      darkMode: true,
      soundEnabled: true
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  }, [applySettings]);

  // Toggle sound
  const toggleSound = useCallback(() => {
    updateSetting('soundEnabled', !settings.soundEnabled);
  }, [settings.soundEnabled, updateSetting]);

  // Font size controls
  const increaseFontSize = useCallback(() => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex < sizes.length - 1) {
      updateSetting('fontSize', sizes[currentIndex + 1]);
    }
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(settings.fontSize);
    if (currentIndex > 0) {
      updateSetting('fontSize', sizes[currentIndex - 1]);
    }
  }, [settings.fontSize, updateSetting]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-4 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <h3 className="text-white font-semibold text-lg flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-blue-400" />
                <span>Accessibility</span>
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Settings Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Font Size Control */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Font Size</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize === 'small'}
                    className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Decrease font size"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white text-sm min-w-[60px] text-center">
                    {settings.fontSize === 'small' ? 'Small' : 
                     settings.fontSize === 'large' ? 'Large' : 'Medium'}
                  </span>
                  <button
                    onClick={increaseFontSize}
                    disabled={settings.fontSize === 'large'}
                    className="p-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Increase font size"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium flex items-center space-x-2">
                  <Contrast className="w-4 h-4 text-yellow-400" />
                  <span>High Contrast</span>
                </label>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.highContrast}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium flex items-center space-x-2">
                  {settings.darkMode ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-yellow-400" />}
                  <span>Dark Mode</span>
                </label>
                <button
                  onClick={() => updateSetting('darkMode', !settings.darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.darkMode ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.darkMode}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduce Motion */}
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-green-400" />
                  <span>Reduce Motion</span>
                </label>
                <button
                  onClick={() => updateSetting('reduceMotion', !settings.reduceMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.reduceMotion ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.reduceMotion}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reduceMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduce Transparency */}
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span>Reduce Transparency</span>
                </label>
                <button
                  onClick={() => updateSetting('reduceTransparency', !settings.reduceTransparency)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.reduceTransparency ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.reduceTransparency}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reduceTransparency ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Sound Control */}
              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium flex items-center space-x-2">
                  {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-green-400" /> : <VolumeX className="w-4 h-4 text-red-400" />}
                  <span>Sound</span>
                </label>
                <button
                  onClick={toggleSound}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.soundEnabled ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.soundEnabled}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Button */}
              <div className="pt-2">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Defaults</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-800/50">
              <p className="text-xs text-gray-400 text-center">
                These settings are saved to your browser and will persist across sessions.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Variables for Dynamic Styling */}
      <style jsx global>{`
        :root {
          --font-size-multiplier: 1;
        }

        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent-color: #ffff00 !important;
        }

        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .reduce-transparency * {
          opacity: 1 !important;
          backdrop-filter: none !important;
        }

        body {
          font-size: calc(16px * var(--font-size-multiplier));
        }

        .text-sm {
          font-size: calc(14px * var(--font-size-multiplier));
        }

        .text-base {
          font-size: calc(16px * var(--font-size-multiplier));
        }

        .text-lg {
          font-size: calc(18px * var(--font-size-multiplier));
        }

        .text-xl {
          font-size: calc(20px * var(--font-size-multiplier));
        }

        .text-2xl {
          font-size: calc(24px * var(--font-size-multiplier));
        }

        .text-3xl {
          font-size: calc(30px * var(--font-size-multiplier));
        }

        .text-4xl {
          font-size: calc(36px * var(--font-size-multiplier));
        }

        .text-5xl {
          font-size: calc(48px * var(--font-size-multiplier));
        }

        .text-6xl {
          font-size: calc(60px * var(--font-size-multiplier));
        }

        .text-7xl {
          font-size: calc(72px * var(--font-size-multiplier));
        }

        .text-8xl {
          font-size: calc(96px * var(--font-size-multiplier));
        }

        .text-9xl {
          font-size: calc(128px * var(--font-size-multiplier));
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
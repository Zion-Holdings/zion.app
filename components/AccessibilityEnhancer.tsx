import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  VolumeX, 
  Type, 
  Keyboard,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  colorBlindFriendly: boolean;
  focusIndicators: boolean;
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  deviceOptimization: string;
  theme: string;
}

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    colorBlindFriendly: false,
    focusIndicators: true,
    keyboardNavigation: true,
    screenReaderSupport: true,
    deviceOptimization: 'auto',
    theme: 'auto'
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcement, setAnnouncement] = useState('');
  
  const settingsRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Load saved settings from localStorage
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

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to the document
  const applySettings = useCallback((settings: AccessibilitySettings) => {
    try {
      const root = document.documentElement;
      
      // Apply font size
      if (settings.fontSize) {
        root.style.setProperty('--font-size-custom', `${settings.fontSize}px`);
      }
      
      // Apply line height
      if (settings.lineHeight) {
        root.style.setProperty('--line-height-custom', settings.lineHeight.toString());
      }
      
      // Apply letter spacing
      if (settings.letterSpacing !== undefined) {
        root.style.setProperty('--letter-spacing-custom', `${settings.letterSpacing}px`);
      }
      
      // Apply word spacing
      if (settings.wordSpacing !== undefined) {
        root.style.setProperty('--word-spacing-custom', `${settings.wordSpacing}px`);
      }
      
      // Apply high contrast
      if (settings.highContrast) {
        root.setAttribute('data-high-contrast', 'true');
      } else {
        root.removeAttribute('data-high-contrast');
      }
      
      // Apply reduced motion
      if (settings.reducedMotion) {
        root.setAttribute('data-reduced-motion', 'true');
      } else {
        root.removeAttribute('data-reduced-motion');
      }
      
      // Apply high saturation
      if (settings.highSaturation) {
        root.setAttribute('data-high-saturation', 'true');
      } else {
        root.removeAttribute('data-high-saturation');
      }
      
      // Apply large text
      if (settings.largeText) {
        root.setAttribute('data-large-text', 'true');
      } else {
        root.removeAttribute('data-large-text');
      }
      
      // Apply color blind friendly
      if (settings.colorBlindFriendly) {
        root.setAttribute('data-color-blind-friendly', 'true');
      } else {
        root.removeAttribute('data-color-blind-friendly');
      }
      
      // Apply focus indicators
      if (settings.focusIndicators) {
        root.setAttribute('data-focus-indicators', 'true');
      } else {
        root.removeAttribute('data-focus-indicators');
      }
      
      // Apply keyboard navigation
      if (settings.keyboardNavigation) {
        root.setAttribute('data-keyboard-navigation', 'true');
      } else {
        root.removeAttribute('data-keyboard-navigation');
      }
      
      // Apply screen reader support
      if (settings.screenReaderSupport) {
        root.setAttribute('data-screen-reader-support', 'true');
      } else {
        root.removeAttribute('data-screen-reader-support');
      }
      
      // Apply device optimization
      if (settings.deviceOptimization) {
        root.setAttribute('data-device-optimization', settings.deviceOptimization);
      } else {
        root.removeAttribute('data-device-optimization');
      }
      
      // Apply theme
      if (settings.theme) {
        root.setAttribute('data-theme', settings.theme);
      } else {
        root.removeAttribute('data-theme');
      }
      
      announceToScreenReader('Accessibility settings applied');
    } catch {
      // Silently handle errors to avoid breaking the app
    }
  }, []);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Track focus for better accessibility
  useEffect(() => {
    const handleFocusChange = (event: globalThis.FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && target !== currentFocus) {
        setCurrentFocus(target);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [currentFocus]);

  // Show accessibility panel when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Announce text to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      // Clear after a short delay
      setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = '';
        }
      }, 1000);
    }
  }, []);

  // Reset all settings to default
  const resetSettings = useCallback(() => {
    try {
      const root = document.documentElement;
      
      // Remove all custom properties
      root.style.removeProperty('--font-size-custom');
      root.style.removeProperty('--line-height-custom');
      root.style.removeProperty('--letter-spacing-custom');
      root.style.removeProperty('--word-spacing-custom');
      
      // Remove all data attributes
      root.removeAttribute('data-high-contrast');
      root.removeAttribute('data-reduced-motion');
      root.removeAttribute('data-high-saturation');
      root.removeAttribute('data-large-text');
      root.removeAttribute('data-color-blind-friendly');
      root.removeAttribute('data-focus-indicators');
      root.removeAttribute('data-keyboard-navigation');
      root.removeAttribute('data-screen-reader-support');
      root.removeAttribute('data-device-optimization');
      root.removeAttribute('data-theme');
      
      // Reset local state
      setSettings({
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        highSaturation: false,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0,
        wordSpacing: 0,
        colorBlindFriendly: false,
        focusIndicators: true,
        keyboardNavigation: true,
        screenReaderSupport: true,
        deviceOptimization: 'auto',
        theme: 'auto'
      });
      
      announceToScreenReader('Settings reset to default');
    } catch {
      // Silently handle errors to avoid breaking the app
    }
  }, []);

  // Toggle individual settings
  const toggleSetting = useCallback((key: keyof AccessibilitySettings, value?: boolean | string | number) => {
    setSettings(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key]
    }));
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
    
    // Ctrl + Alt + A to toggle accessibility panel
    if (event.ctrlKey && event.altKey && event.key === 'a') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && settingsRef.current) {
      const firstButton = settingsRef.current.querySelector('button');
      if (firstButton) {
        (firstButton as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
        aria-label="Accessibility announcements"
      >
        {announcement}
      </div>

      {/* Accessibility Panel Toggle Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Open accessibility settings"
            aria-expanded={isOpen}
            aria-controls="accessibility-panel"
          >
            <Eye className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Accessibility Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-400/20 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            <div className="p-6" ref={settingsRef}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 
                  id="accessibility-panel-title"
                  className="text-xl font-bold text-white flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              <p 
                id="accessibility-panel-description"
                className="text-gray-300 text-sm mb-6"
              >
                Customize your viewing experience for better accessibility and comfort.
              </p>

              {/* Quick Toggle Settings */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white cursor-pointer">
                    <Eye className="w-4 h-4 mr-2 text-cyan-400" />
                    High Contrast
                  </label>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                    aria-label="Toggle high contrast mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white cursor-pointer">
                    <Type className="w-4 h-4 mr-2 text-purple-400" />
                    Large Text
                  </label>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      settings.largeText ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                    aria-label="Toggle large text mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        settings.largeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white cursor-pointer">
                    <VolumeX className="w-4 h-4 mr-2 text-green-400" />
                    Reduced Motion
                  </label>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      settings.reducedMotion ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                    aria-label="Toggle reduced motion mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white cursor-pointer">
                    <Type className="w-4 h-4 mr-2 text-yellow-400" />
                    High Saturation
                  </label>
                  <button
                    onClick={() => toggleSetting('highSaturation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      settings.highSaturation ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.highSaturation}
                    aria-label="Toggle high saturation mode"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        settings.highSaturation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Custom Font Size Controls */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Text Customization</h3>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Font Size: {settings.fontSize}px
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={settings.fontSize}
                    onChange={(e) => toggleSetting('fontSize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    aria-label="Adjust font size"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Line Height: {settings.lineHeight}
                  </label>
                  <input
                    type="range"
                    min="1.2"
                    max="2.0"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => toggleSetting('lineHeight', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                    aria-label="Adjust line height"
                  />
                </div>
              </div>

              {/* Reset Button */}
              <div className="flex justify-center">
                <button
                  onClick={resetSettings}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/50"
                  aria-label="Reset all accessibility settings to default"
                >
                  <RotateCcw className="w-4 h-4 mr-2 inline" />
                  Reset to Default
                </button>
              </div>

              {/* Keyboard Shortcuts Info */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                  <Keyboard className="w-4 h-4 mr-2 text-cyan-400" />
                  Keyboard Shortcuts
                </h4>
                <div className="text-xs text-gray-300 space-y-1">
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Ctrl + Alt + A</kbd> Toggle accessibility panel</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Tab</kbd> Navigate between elements</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Enter</kbd> Activate buttons and links</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Escape</kbd> Close panels and dialogs</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apply accessibility styles to children */}
      <div className="accessibility-enhanced">
        {children}
      </div>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .accessibility-enhanced {
          --font-size-custom: ${settings.fontSize}px;
          --line-height-custom: ${settings.lineHeight};
          --letter-spacing-custom: ${settings.letterSpacing}px;
          --word-spacing-custom: ${settings.wordSpacing}px;
        }

        .accessibility-enhanced * {
          font-size: var(--font-size-custom, inherit);
          line-height: var(--line-height-custom, inherit);
          letter-spacing: var(--letter-spacing-custom, inherit);
          word-spacing: var(--word-spacing-custom, inherit);
        }

        /* High contrast mode */
        .accessibility-enhanced[data-high-contrast="true"] {
          background-color: var(--bg-primary, #000000) !important;
          color: var(--text-primary, #ffffff) !important;
        }

        .accessibility-enhanced[data-high-contrast="true"] * {
          background-color: var(--bg-secondary, #1a1a1a) !important;
          color: var(--text-primary, #ffffff) !important;
          border-color: var(--border-color, #ffffff) !important;
        }

        /* Reduced motion */
        .accessibility-enhanced[data-reduced-motion="true"] *,
        .accessibility-enhanced[data-reduced-motion="true"] *::before,
        .accessibility-enhanced[data-reduced-motion="true"] *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* High saturation */
        .accessibility-enhanced[data-high-saturation="true"] * {
          filter: saturate(var(--saturation, 1.5)) brightness(var(--brightness, 1.2)) !important;
        }

        /* Focus indicators */
        .accessibility-enhanced *:focus {
          outline: 3px solid var(--accent-color, #06b6d4) !important;
          outline-offset: 2px !important;
        }

        /* Screen reader only content */
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

        /* Custom slider styles */
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: 2px solid #ffffff;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
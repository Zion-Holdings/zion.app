import React, { useEffect, useState } from 'react';
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
  Accessibility,
  Keyboard,
  MousePointer
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onAccessibilityChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  zoomLevel: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onAccessibilityChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    zoomLevel: 100
  });

  useEffect(() => {
    // Load saved accessibility settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error);
      }
    }

    // Check for system preferences
    checkSystemPreferences();
  }, []);

  const checkSystemPreferences = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));
  };

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply large text
    if (newSettings.largeText) {
      root.style.fontSize = '120%';
    } else {
      root.style.fontSize = '100%';
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply zoom level
    root.style.zoom = `${newSettings.zoomLevel}%`;
    
    // Notify parent component
    onAccessibilityChange?.(newSettings);
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
    applyAccessibilitySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
        onClick={togglePanel}
        onKeyDown={handleKeyDown}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Accessibility className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onKeyDown={handleKeyDown}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Accessibility className="w-5 h-5 mr-2" />
                Accessibility
              </h3>
              <button
                onClick={togglePanel}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <EyeOff className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-white cursor-pointer">
                  <Contrast className="w-5 h-5 mr-3" />
                  High Contrast
                </label>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 ${
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
                <label className="flex items-center text-white cursor-pointer">
                  <Type className="w-5 h-5 mr-3" />
                  Large Text
                </label>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 ${
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

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-white cursor-pointer">
                  <MousePointer className="w-5 h-5 mr-3" />
                  Reduced Motion
                </label>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 ${
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

              {/* Zoom Level */}
              <div className="space-y-2">
                <label className="flex items-center text-white">
                  <ZoomIn className="w-5 h-5 mr-3" />
                  Zoom Level: {settings.zoomLevel}%
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateSetting('zoomLevel', Math.max(50, settings.zoomLevel - 10))}
                    className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Decrease zoom"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((settings.zoomLevel - 50) / 150) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => updateSetting('zoomLevel', Math.min(200, settings.zoomLevel + 10))}
                    className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Increase zoom"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Keyboard Navigation Info */}
              <div className="bg-gray-800 rounded-lg p-3">
                <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                  <Keyboard className="w-4 h-4 mr-2" />
                  Keyboard Shortcuts
                </h4>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>• Tab: Navigate between elements</div>
                  <div>• Enter/Space: Activate buttons</div>
                  <div>• Escape: Close panels</div>
                  <div>• Arrow keys: Navigate menus</div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --tw-bg-opacity: 1;
          --tw-text-opacity: 1;
        }
        
        .high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Focus indicators for keyboard navigation */
        *:focus {
          outline: 2px solid #0891b2 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip link for screen readers */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #0891b2;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
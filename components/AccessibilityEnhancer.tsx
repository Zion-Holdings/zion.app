import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Contrast, 
  Type, ZoomIn, ZoomOut, RotateCcw, Accessibility
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  fontSize: number;
  zoom: number;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    fontSize: 16,
    zoom: 100
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }

    // Check for user's system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersReducedMotion || prefersHighContrast) {
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast
      }));
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
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
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply high saturation
    if (newSettings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply zoom
    root.style.zoom = `${newSettings.zoom / 100}`;
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      fontSize: 16,
      zoom: 100
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };

  const toggleHighContrast = () => updateSetting('highContrast', !settings.highContrast);
  const toggleLargeText = () => updateSetting('largeText', !settings.largeText);
  const toggleReducedMotion = () => updateSetting('reducedMotion', !settings.reducedMotion);
  const toggleHighSaturation = () => updateSetting('highSaturation', !settings.highSaturation);

  const increaseFontSize = () => {
    if (settings.fontSize < 24) {
      updateSetting('fontSize', settings.fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 12) {
      updateSetting('fontSize', settings.fontSize - 2);
    }
  };

  const increaseZoom = () => {
    if (settings.zoom < 200) {
      updateSetting('zoom', settings.zoom + 25);
    }
  };

  const decreaseZoom = () => {
    if (settings.zoom > 50) {
      updateSetting('zoom', settings.zoom - 25);
    }
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed left-4 bottom-20 z-50 w-80 bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-panel-title" className="text-xl font-semibold text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <EyeOff className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Visual Enhancements */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Visual Enhancements</h3>
                  <div className="space-y-3">
                    <button
                      onClick={toggleHighContrast}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        settings.highContrast
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                          : 'bg-white/5 border-gray-600 text-gray-300 hover:bg-white/10'
                      }`}
                      aria-pressed={settings.highContrast}
                    >
                      <span className="flex items-center gap-2">
                        <Contrast className="w-4 h-4" />
                        High Contrast
                      </span>
                      {settings.highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleLargeText}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        settings.largeText
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                          : 'bg-white/5 border-gray-600 text-gray-300 hover:bg-white/10'
                      }`}
                      aria-pressed={settings.largeText}
                    >
                      <span className="flex items-center gap-2">
                        <Type className="w-4 h-4" />
                        Large Text
                      </span>
                      {settings.largeText ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleHighSaturation}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        settings.highSaturation
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                          : 'bg-white/5 border-gray-600 text-gray-300 hover:bg-white/10'
                      }`}
                      aria-pressed={settings.highSaturation}
                    >
                      <span className="flex items-center gap-2">
                        <Contrast className="w-4 h-4" />
                        High Saturation
                      </span>
                      {settings.highSaturation ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Motion Settings */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Motion & Animation</h3>
                  <button
                    onClick={toggleReducedMotion}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                      settings.reducedMotion
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                        : 'bg-white/5 border-gray-600 text-gray-300 hover:bg-white/10'
                    }`}
                    aria-pressed={settings.reducedMotion}
                  >
                    <span className="flex items-center gap-2">
                      <VolumeX className="w-4 h-4" />
                      Reduce Motion
                    </span>
                    {settings.reducedMotion ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                </div>

                {/* Font Size Control */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Font Size</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decreaseFontSize}
                      disabled={settings.fontSize <= 12}
                      className="p-2 bg-white/10 border border-gray-600 rounded-lg text-gray-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center text-white font-medium">
                      {settings.fontSize}px
                    </span>
                    <button
                      onClick={increaseFontSize}
                      disabled={settings.fontSize >= 24}
                      className="p-2 bg-white/10 border border-gray-600 rounded-lg text-gray-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Zoom Control */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Page Zoom</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decreaseZoom}
                      disabled={settings.zoom <= 50}
                      className="p-2 bg-white/10 border border-gray-600 rounded-lg text-gray-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Decrease zoom"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center text-white font-medium">
                      {settings.zoom}%
                    </span>
                    <button
                      onClick={increaseZoom}
                      disabled={settings.zoom >= 200}
                      className="p-2 bg-white/10 border border-gray-600 rounded-lg text-gray-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Increase zoom"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-gray-700">
                  <button
                    onClick={resetSettings}
                    className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    aria-label="Reset all accessibility settings"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset All Settings
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AccessibilityEnhancer;
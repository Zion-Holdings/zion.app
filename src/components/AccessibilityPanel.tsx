import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  Type, 
  Volume2, 
  X,
  Settings,
  Contrast,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  highContrastMode: 'default' | 'high' | 'ultra';
}

export const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 100,
    reducedMotion: false,
    highContrastMode: 'default'
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      if (newSettings.highContrastMode === 'ultra') {
        root.classList.add('ultra-contrast');
      }
    } else {
      root.classList.remove('high-contrast', 'ultra-contrast');
    }
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}%`;
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 100,
      reducedMotion: false,
      highContrastMode: 'default'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibilitySettings');
  };

  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 10, 200);
    updateSetting('fontSize', newSize);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 10, 80);
    updateSetting('fontSize', newSize);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 z-40"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-zion-cyan" />
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div>
                  <label className="flex items-center gap-3 text-white font-medium mb-3">
                    <Contrast className="w-5 h-5 text-zion-cyan" />
                    High Contrast Mode
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-zion-slate-light">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                        className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-cyan/30 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      Enable high contrast
                    </label>
                    {settings.highContrast && (
                      <div className="ml-6 space-y-2">
                        <label className="flex items-center gap-2 text-zion-slate-light">
                          <input
                            type="radio"
                            name="contrastMode"
                            value="high"
                            checked={settings.highContrastMode === 'high'}
                            onChange={(e) => updateSetting('highContrastMode', e.target.value)}
                            className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-cyan/30 focus:ring-zion-cyan focus:ring-2"
                          />
                          High contrast
                        </label>
                        <label className="flex items-center gap-2 text-zion-slate-light">
                          <input
                            type="radio"
                            name="contrastMode"
                            value="ultra"
                            checked={settings.highContrastMode === 'ultra'}
                            onChange={(e) => updateSetting('highContrastMode', e.target.value)}
                            className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-cyan/30 focus:ring-zion-cyan focus:ring-2"
                          />
                          Ultra high contrast
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <label className="flex items-center gap-3 text-white font-medium mb-3">
                    <Type className="w-5 h-5 text-zion-cyan" />
                    Font Size: {settings.fontSize}%
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decreaseFontSize}
                      className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <div className="flex-1 bg-zion-blue-light/20 rounded-lg h-2">
                      <div
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-lg transition-all duration-300"
                        style={{ width: `${((settings.fontSize - 80) / 120) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={increaseFontSize}
                      className="p-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan/20 transition-colors"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Reduced Motion */}
                <div>
                  <label className="flex items-center gap-3 text-white font-medium mb-3">
                    <Eye className="w-5 h-5 text-zion-cyan" />
                    Motion Preferences
                  </label>
                  <label className="flex items-center gap-2 text-zion-slate-light">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-light/20 border-zion-cyan/30 rounded focus:ring-zion-cyan focus:ring-2"
                    />
                    Reduce motion and animations
                  </label>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-zion-cyan/20">
                  <button
                    onClick={resetSettings}
                    className="w-full px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset to Default
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                <p className="text-xs text-zion-slate-light text-center">
                  These settings are saved locally and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
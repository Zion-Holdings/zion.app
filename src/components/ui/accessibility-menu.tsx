import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, FileText, Eye, Zap, Volume2, VolumeX } from 'lucide-react';
import { Button } from './button';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    soundEnabled: true
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applySettings(settings);
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--font-size-multiplier', 
      newSettings.fontSize === 'small' ? '0.875' : 
      newSettings.fontSize === 'large' ? '1.125' : '1'
    );
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateFontSize = (size: 'small' | 'medium' | 'large') => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      soundEnabled: true
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="h-5 w-5" />
      </motion.button>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-32 right-8 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-md rounded-2xl border border-zion-purple/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetSettings}
                  className="text-zion-cyan hover:text-zion-cyan-light text-sm"
                >
                  Reset
                </Button>
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <label className="flex items-center gap-3 text-white mb-3">
                  <FileText className="h-4 w-4 text-zion-cyan" />
                  <span className="text-sm font-medium">Font Size</span>
                </label>
                <div className="flex gap-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <Button
                      key={size}
                      variant={settings.fontSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => updateFontSize(size)}
                      className={`text-xs capitalize ${
                        settings.fontSize === size 
                          ? 'bg-zion-cyan text-zion-blue-dark' 
                          : 'text-zion-slate-light hover:text-white'
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="mb-6">
                <label className="flex items-center gap-3 text-white mb-3">
                  <Eye className="h-4 w-4 text-zion-cyan" />
                  <span className="text-sm font-medium">High Contrast</span>
                </label>
                <Button
                  variant={settings.highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-full ${
                    settings.highContrast 
                      ? 'bg-zion-cyan text-zion-blue-dark' 
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  {settings.highContrast ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Reduced Motion */}
              <div className="mb-6">
                <label className="flex items-center gap-3 text-white mb-3">
                  <Zap className="h-4 w-4 text-zion-cyan" />
                  <span className="text-sm font-medium">Reduced Motion</span>
                </label>
                <Button
                  variant={settings.reducedMotion ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`w-full ${
                    settings.reducedMotion 
                      ? 'bg-zion-cyan text-zion-blue-dark' 
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  {settings.reducedMotion ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Sound Toggle */}
              <div className="mb-6">
                <label className="flex items-center gap-3 text-white mb-3">
                  {settings.soundEnabled ? (
                    <Volume2 className="h-4 w-4 text-zion-cyan" />
                  ) : (
                    <VolumeX className="h-4 w-4 text-zion-cyan" />
                  )}
                  <span className="text-sm font-medium">Sound Effects</span>
                </label>
                <Button
                  variant={settings.soundEnabled ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSetting('soundEnabled')}
                  className={`w-full ${
                    settings.soundEnabled 
                      ? 'bg-zion-cyan text-zion-blue-dark' 
                      : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  {settings.soundEnabled ? 'Enabled' : 'Disabled'}
                </Button>
              </div>

              {/* Info */}
              <div className="text-xs text-zion-slate-light text-center">
                Settings are automatically saved and applied across your session
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
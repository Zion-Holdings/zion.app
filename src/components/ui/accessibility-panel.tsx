'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Volume2, 
  Settings,
  X,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

export interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  fontSize: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  reducedMotion: boolean;
  screenReader: boolean;
  focusIndicator: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityPanelProps {
  enabled?: boolean;
  defaultSettings?: Partial<AccessibilitySettings>;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
  className?: string;
}

const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  enabled = true,
  defaultSettings = {},
  onSettingsChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    fontSize: 16,
    colorBlindMode: 'none',
    reducedMotion: false,
    screenReader: false,
    focusIndicator: true,
    keyboardNavigation: true,
    ...defaultSettings
  });

  const [notifications, setNotifications] = useState<Array<{
    id: string;
    message: string;
    type: 'success' | 'info' | 'warning';
    timestamp: number;
  }>>([]);

  // Apply accessibility settings to the document
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.style.setProperty('--high-contrast', 'true');
      root.classList.add('high-contrast');
    } else {
      root.style.removeProperty('--high-contrast');
      root.classList.remove('high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.style.setProperty('--large-text', 'true');
      root.classList.add('large-text');
    } else {
      root.style.removeProperty('--large-text');
      root.classList.remove('large-text');
    }

    // Font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);

    // Color blind modes
    root.style.setProperty('--color-blind-mode', settings.colorBlindMode);

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'true');
      root.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--reduced-motion');
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-indicator', 'true');
      root.classList.add('focus-indicator');
    } else {
      root.style.removeProperty('--focus-indicator');
      root.classList.remove('focus-indicator');
    }

    // Keyboard navigation
    if (settings.keyboardNavigation) {
      root.style.setProperty('--keyboard-navigation', 'true');
      root.classList.add('keyboard-navigation');
    } else {
      root.style.removeProperty('--keyboard-navigation');
      root.classList.remove('keyboard-navigation');
    }

    // Notify parent component
    onSettingsChange?.(settings);
  }, [settings, enabled, onSettingsChange]);

  // Screen reader announcements
  useEffect(() => {
    if (!enabled || !settings.screenReader) return;

    const announce = (message: string) => {
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

    // Announce important changes
    if (settings.highContrast) {
      announce('High contrast mode enabled');
    }
    if (settings.largeText) {
      announce('Large text mode enabled');
    }
    if (settings.reducedMotion) {
      announce('Reduced motion enabled');
    }
  }, [settings.highContrast, settings.largeText, settings.reducedMotion, enabled, settings.screenReader]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: AccessibilitySettings[keyof AccessibilitySettings]) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      
      // Add notification
      const notification = {
        id: Date.now().toString(),
        message: `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`,
        type: 'success' as const,
        timestamp: Date.now()
      };
      
      setNotifications(prev => [notification, ...prev.slice(0, 2)]);
      
      return newSettings;
    });
  }, []);

  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      fontSize: 16,
      colorBlindMode: 'none',
      reducedMotion: false,
      screenReader: false,
      focusIndicator: true,
      keyboardNavigation: true
    };
    
    setSettings(defaultSettings);
    
    const notification = {
      id: Date.now().toString(),
      message: 'Accessibility settings reset to defaults',
      type: 'info' as const,
      timestamp: Date.now()
    };
    
    setNotifications(prev => [notification, ...prev.slice(0, 2)]);
  }, []);

  const increaseFontSize = useCallback(() => {
    updateSetting('fontSize', Math.min(settings.fontSize + 2, 24));
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    updateSetting('fontSize', Math.max(settings.fontSize - 2, 12));
  }, [settings.fontSize, updateSetting]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'h':
            e.preventDefault();
            updateSetting('highContrast', !settings.highContrast);
            break;
          case 'l':
            e.preventDefault();
            updateSetting('largeText', !settings.largeText);
            break;
          case 'r':
            e.preventDefault();
            updateSetting('reducedMotion', !settings.reducedMotion);
            break;
          case 'a':
            e.preventDefault();
            setIsOpen(!isOpen);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled, settings.highContrast, settings.largeText, settings.reducedMotion, isOpen, updateSetting]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-zion-blue-dark border-2 border-zion-cyan/50 rounded-full shadow-2xl hover:bg-zion-blue hover:border-zion-cyan transition-all duration-200 ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6 text-white" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-96 bg-zion-blue-dark/95 backdrop-blur-xl border-l border-zion-cyan/30 shadow-2xl z-40 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-zion-blue-dark/80 backdrop-blur-sm border-b border-zion-cyan/30 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 text-zion-cyan" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-zion-blue/20 rounded-lg transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-zinc-300 mt-2 text-sm">
                Customize your experience with keyboard shortcuts (Ctrl/Cmd + H, L, R, A)
              </p>
            </div>

            {/* Settings Content */}
            <div className="p-6 space-y-6">
              {/* Visual Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-zion-cyan" />
                  Visual Settings
                </h3>
                
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    High Contrast
                  </label>
                  <span className="text-xs text-zinc-400">Ctrl/Cmd + H</span>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={(e) => updateSetting('largeText', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    Large Text
                  </label>
                  <span className="text-xs text-zinc-400">Ctrl/Cmd + L</span>
                </div>

                {/* Font Size Control */}
                <div className="space-y-2">
                  <label className="text-white text-sm">Font Size: {settings.fontSize}px</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decreaseFontSize}
                      className="p-2 bg-zion-blue/20 hover:bg-zion-blue/30 rounded-lg transition-colors"
                      aria-label="Decrease font size"
                    >
                      <Type className="w-4 h-4 text-white" />
                    </button>
                    <div className="flex-1 h-2 bg-zion-blue/20 rounded-full">
                      <div 
                        className="h-full bg-zion-cyan rounded-full transition-all duration-200"
                        style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={increaseFontSize}
                      className="p-2 bg-zion-blue/20 hover:bg-zion-blue/30 rounded-lg transition-colors"
                      aria-label="Increase font size"
                    >
                      <Type className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Color Blind Mode */}
                <div className="space-y-2">
                  <label className="text-white text-sm">Color Blind Mode</label>
                  <select
                    value={settings.colorBlindMode}
                                         onChange={(e) => updateSetting('colorBlindMode', e.target.value as AccessibilitySettings['colorBlindMode'])}
                    className="w-full p-2 bg-zion-blue/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>

              {/* Motion & Audio Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-zion-cyan" />
                  Motion & Audio
                </h3>
                
                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    Reduced Motion
                  </label>
                  <span className="text-xs text-zinc-400">Ctrl/Cmd + R</span>
                </div>

                {/* Screen Reader */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.screenReader}
                      onChange={(e) => updateSetting('screenReader', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    Screen Reader Support
                  </label>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-zion-cyan" />
                  Navigation
                </h3>
                
                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.focusIndicator}
                      onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    Focus Indicator
                  </label>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-white cursor-pointer flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.keyboardNavigation}
                      onChange={(e) => updateSetting('keyboardNavigation', e.target.checked)}
                      className="w-4 h-4 text-zion-cyan bg-zion-blue-dark border-zion-cyan/50 rounded focus:ring-zion-cyan/50"
                    />
                    Keyboard Navigation
                  </label>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-zion-cyan/30">
                <button
                  onClick={resetToDefaults}
                  className="w-full p-3 bg-zion-blue/20 hover:bg-zion-blue/30 border border-zion-cyan/30 rounded-lg text-white transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <div className="fixed top-6 right-6 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`p-4 rounded-lg shadow-lg border-l-4 flex items-center gap-3 ${
                notification.type === 'success' 
                  ? 'bg-green-500/20 border-green-500 text-green-300'
                  : notification.type === 'warning'
                  ? 'bg-yellow-500/20 border-yellow-500 text-yellow-300'
                  : 'bg-blue-500/20 border-blue-500 text-blue-300'
              }`}
            >
              {notification.type === 'success' && <Check className="w-5 h-5" />}
              {notification.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
              {notification.type === 'info' && <Info className="w-5 h-5" />}
              <span className="text-sm font-medium">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CSS Variables for Accessibility */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --font-size: ${settings.fontSize}px;
            --color-blind-mode: ${settings.colorBlindMode};
          }

          .high-contrast {
            --bg-primary: #000000;
            --bg-secondary: #1a1a1a;
            --text-primary: #ffffff;
            --text-secondary: #e0e0e0;
            --border-color: #ffffff;
          }

          .large-text {
            --font-size-base: 18px;
            --font-size-lg: 22px;
            --font-size-xl: 26px;
            --font-size-2xl: 32px;
          }

          .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .focus-indicator *:focus {
            outline: 3px solid #00d4ff !important;
            outline-offset: 2px !important;
          }

          .keyboard-navigation *:focus-visible {
            outline: 3px solid #00d4ff !important;
            outline-offset: 2px !important;
          }

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

          /* Color blind mode filters */
          [style*="--color-blind-mode: protanopia"] {
            filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="protanopia"><feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/></filter></svg>#protanopia');
          }

          [style*="--color-blind-mode: deuteranopia"] {
            filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="deuteranopia"><feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/></filter></svg>#deuteranopia');
          }

          [style*="--color-blind-mode: tritanopia"] {
            filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="tritanopia"><feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/></filter></svg>#tritanopia');
          }
        `
      }} />
    </>
  );
};

export default AccessibilityPanel;
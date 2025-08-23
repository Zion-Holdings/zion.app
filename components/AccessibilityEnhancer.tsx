import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Sun, Moon, 
  ZoomIn, ZoomOut, RotateCcw, Accessibility, 
  Keyboard, MousePointer, Contrast, 
  Type, Palette, Settings, X
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  colorBlindness: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  theme: 'auto' | 'light' | 'dark';
}

interface AccessibilityEnhancerProps {
  showPanel?: boolean;
  autoHide?: boolean;
  className?: string;
}

const defaultSettings: AccessibilitySettings = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  highSaturation: false,
  focusIndicator: true,
  screenReader: false,
  keyboardNavigation: true,
  colorBlindness: 'none',
  fontSize: 'medium',
  theme: 'auto'
};

export default function AccessibilityEnhancer({ 
  showPanel = false, 
  autoHide = true,
  className = '' 
}: AccessibilityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'>('general');

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // High saturation
    if (newSettings.highSaturation) {
      root.classList.add('high-saturation');
    } else {
      root.classList.remove('high-saturation');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
    
    // Color blindness
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      root.classList.add(newSettings.colorBlindness);
    }
    
    // Font size
    root.classList.remove('text-small', 'text-medium', 'text-large', 'text-extra-large');
    root.classList.add(`text-${newSettings.fontSize}`);
    
    // Theme
    root.classList.remove('theme-light', 'theme-dark');
    if (newSettings.theme !== 'auto') {
      root.classList.add(`theme-${newSettings.theme}`);
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        console.warn('Failed to parse saved accessibility settings');
      }
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
      
      // Ctrl/Cmd + Shift + L to toggle large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
      }
      
      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Auto-hide functionality
  useEffect(() => {
    if (autoHide && isOpen) {
      const timer = setTimeout(() => setIsVisible(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, isOpen]);

  // Update setting
  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  // Reset to defaults
  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  // Announce changes to screen readers
  const announceChange = (message: string) => {
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
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute top-16 right-0 w-96 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <Accessibility className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 id="accessibility-title" className="font-semibold text-white">
                    Accessibility Settings
                  </h2>
                  <p id="accessibility-description" className="text-sm text-gray-400">
                    Customize your browsing experience
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700/50">
              {[
                { id: 'general', label: 'General', icon: Settings },
                { id: 'visual', label: 'Visual', icon: Palette },
                { id: 'navigation', label: 'Navigation', icon: Keyboard }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === id
                      ? 'text-purple-400 border-b-2 border-purple-400 bg-purple-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  aria-selected={activeTab === id}
                  role="tab"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-4" role="tabpanel" aria-labelledby="general-tab">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">General Settings</h3>
                    
                    {/* Theme Selection */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 text-gray-300">
                        <input
                          type="radio"
                          name="theme"
                          value="auto"
                          checked={settings.theme === 'auto'}
                          onChange={(e) => {
                            updateSetting('theme', e.target.value as any);
                            announceChange('Theme set to automatic');
                          }}
                          className="text-purple-500 focus:ring-purple-400"
                        />
                        <Sun className="w-4 h-4" />
                        <span>Auto</span>
                      </label>
                      <label className="flex items-center space-x-3 text-gray-300">
                        <input
                          type="radio"
                          name="theme"
                          value="light"
                          checked={settings.theme === 'light'}
                          onChange={(e) => {
                            updateSetting('theme', e.target.value as any);
                            announceChange('Theme set to light');
                          }}
                          className="text-purple-500 focus:ring-purple-400"
                        />
                        <Sun className="w-4 h-4" />
                        <span>Light</span>
                      </label>
                      <label className="flex items-center space-x-3 text-gray-300">
                        <input
                          type="radio"
                          name="theme"
                          value="dark"
                          checked={settings.theme === 'dark'}
                          onChange={(e) => {
                            updateSetting('theme', e.target.value as any);
                            announceChange('Theme set to dark');
                          }}
                          className="text-purple-500 focus:ring-purple-400"
                        />
                        <Moon className="w-4 h-4" />
                        <span>Dark</span>
                      </label>
                    </div>

                    {/* Font Size */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Font Size
                      </label>
                      <select
                        value={settings.fontSize}
                        onChange={(e) => {
                          updateSetting('fontSize', e.target.value as any);
                          announceChange(`Font size set to ${e.target.value}`);
                        }}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Tab */}
              {activeTab === 'visual' && (
                <div className="space-y-4" role="tabpanel" aria-labelledby="visual-tab">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Visual Settings</h3>
                    
                    {/* High Contrast */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Contrast className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">High Contrast</div>
                          <div className="text-sm text-gray-400">Enhanced color contrast</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => {
                          updateSetting('highContrast', e.target.checked);
                          announceChange(`High contrast ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* Large Text */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Type className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">Large Text</div>
                          <div className="text-sm text-gray-400">Increased text size</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => {
                          updateSetting('largeText', e.target.checked);
                          announceChange(`Large text ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* Reduced Motion */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <RotateCcw className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">Reduced Motion</div>
                          <div className="text-sm text-gray-400">Minimize animations</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => {
                          updateSetting('reducedMotion', e.target.checked);
                          announceChange(`Reduced motion ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* High Saturation */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Palette className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">High Saturation</div>
                          <div className="text-sm text-gray-400">Enhanced color vibrancy</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.highSaturation}
                        onChange={(e) => {
                          updateSetting('highSaturation', e.target.checked);
                          announceChange(`High saturation ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* Color Blindness */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Color Blindness Support
                      </label>
                      <select
                        value={settings.colorBlindness}
                        onChange={(e) => {
                          updateSetting('colorBlindness', e.target.value as any);
                          announceChange(`Color blindness support set to ${e.target.value}`);
                        }}
                        className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="none">None</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Tab */}
              {activeTab === 'navigation' && (
                <div className="space-y-4" role="tabpanel" aria-labelledby="navigation-tab">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Navigation Settings</h3>
                    
                    {/* Focus Indicator */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <MousePointer className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">Focus Indicator</div>
                          <div className="text-sm text-gray-400">Highlight focused elements</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.focusIndicator}
                        onChange={(e) => {
                          updateSetting('focusIndicator', e.target.checked);
                          announceChange(`Focus indicator ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* Screen Reader */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Volume2 className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">Screen Reader</div>
                          <div className="text-sm text-gray-400">Enhanced announcements</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={(e) => {
                          updateSetting('screenReader', e.target.checked);
                          announceChange(`Screen reader ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>

                    {/* Keyboard Navigation */}
                    <label className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Keyboard className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="font-medium text-white">Keyboard Navigation</div>
                          <div className="text-sm text-gray-400">Enhanced keyboard support</div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={(e) => {
                          updateSetting('keyboardNavigation', e.target.checked);
                          announceChange(`Keyboard navigation ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-purple-500 focus:ring-purple-400 rounded"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-800/30">
              <div className="flex space-x-2">
                <button
                  onClick={resetSettings}
                  className="flex-1 px-4 py-2 text-sm bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  Reset to Defaults
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg transition-all duration-200"
                >
                  Close
                </button>
              </div>
              
              {/* Keyboard Shortcuts Help */}
              <div className="mt-3 text-xs text-gray-400">
                <p>Keyboard shortcuts: Ctrl+Shift+A (toggle), Ctrl+Shift+H (contrast), Ctrl+Shift+L (text), Ctrl+Shift+M (motion)</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
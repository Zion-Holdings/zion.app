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
  const [announcements, setAnnouncements] = useState<string[]>([]);

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

  // Enhanced screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      setAnnouncements(prev => [...prev, message]);
      
      // Create live region for screen readers
      let liveRegion = document.getElementById('accessibility-live-region');
      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'accessibility-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
      
      liveRegion.textContent = message;
      
      // Clear announcement after a delay
      setTimeout(() => {
        setAnnouncements(prev => prev.filter(a => a !== message));
      }, 5000);
    }
  }, [settings.screenReader]);

  // Enhanced settings application
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size with better scaling
    const baseFontSize = 16;
    const scaleFactor = newSettings.fontSize / baseFontSize;
    root.style.fontSize = `${newSettings.fontSize}px`;
    root.style.setProperty('--font-scale', scaleFactor.toString());
    
    // Apply contrast with better color schemes
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-inverted');
    root.classList.add(`contrast-${newSettings.contrast}`);
    
    // Enhanced high contrast mode
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--high-contrast', 'true');
    } else {
      root.classList.remove('high-contrast');
      root.style.setProperty('--high-contrast', 'false');
    }
    
    // Apply spacing with better ratios
    const spacingValues = {
      'normal': 1,
      'large': 1.5,
      'extra-large': 2
    };
    const spacing = spacingValues[newSettings.spacing] || 1;
    root.style.setProperty('--spacing-multiplier', spacing.toString());
    
    // Apply focus indicator with better visibility
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
      root.style.setProperty('--focus-visible', 'true');
    } else {
      root.classList.remove('focus-visible');
      root.style.setProperty('--focus-visible', 'false');
    }
    
    // Apply reduced motion with better transitions
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--reduced-motion', 'true');
    } else {
      root.classList.remove('reduced-motion');
      root.style.setProperty('--reduced-motion', 'false');
    }
    
    // Announce changes to screen reader
    announceToScreenReader(`Accessibility settings updated: ${Object.keys(newSettings).join(', ')}`);
  }, [announceToScreenReader]);

  // Enhanced keyboard navigation
  const handleKeyNavigation = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      // Add visual focus indicators
      document.body.classList.add('keyboard-navigation');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyNavigation);
    return () => document.removeEventListener('keydown', handleKeyNavigation);
  }, [handleKeyNavigation]);

  // Enhanced update setting with better feedback
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Provide feedback
    const feedbackMessages = {
      fontSize: `Font size changed to ${value}px`,
      contrast: `Contrast changed to ${value}`,
      reducedMotion: `Reduced motion ${value ? 'enabled' : 'disabled'}`,
      highContrast: `High contrast ${value ? 'enabled' : 'disabled'}`,
      largeText: `Large text ${value ? 'enabled' : 'disabled'}`,
      spacing: `Spacing changed to ${value}`,
      focusIndicator: `Focus indicator ${value ? 'enabled' : 'disabled'}`,
      screenReader: `Screen reader support ${value ? 'enabled' : 'disabled'}`
    };
    
    announceToScreenReader(feedbackMessages[key] || 'Setting updated');
  }, [settings, applySettings, announceToScreenReader]);

  // Enhanced quick actions
  const quickActions = [
    {
      label: 'Increase Font Size',
      action: () => updateSetting('fontSize', Math.min(settings.fontSize + 2, 24)),
      icon: <ZoomIn className="w-4 h-4" />
    },
    {
      label: 'Decrease Font Size',
      action: () => updateSetting('fontSize', Math.max(settings.fontSize - 2, 12)),
      icon: <ZoomOut className="w-4 h-4" />
    },
    {
      label: 'Toggle High Contrast',
      action: () => updateSetting('highContrast', !settings.highContrast),
      icon: <Contrast className="w-4 h-4" />
    },
    {
      label: 'Toggle Reduced Motion',
      action: () => updateSetting('reducedMotion', !settings.reducedMotion),
      icon: <Settings className="w-4 h-4" />
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Live Region for Screen Reader Announcements */}
      <div id="accessibility-live-region" className="sr-only" aria-live="polite" aria-atomic="true" />
      
      {/* Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed bottom-20 left-4 z-50 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-blue-500" />
                <h2 id="accessibility-title" className="font-semibold text-gray-900 dark:text-white">
                  Accessibility
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Close accessibility settings"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex items-center justify-center space-x-2 p-2 text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label={action.label}
                  >
                    {action.icon}
                    <span className="text-gray-700 dark:text-gray-300">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Font Size: {settings.fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-valuemin={12}
                  aria-valuemax={24}
                  aria-valuenow={settings.fontSize}
                />
              </div>

              {/* Contrast */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Contrast
                </label>
                <select
                  value={settings.contrast}
                  onChange={(e) => updateSetting('contrast', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="inverted">Inverted</option>
                </select>
              </div>

              {/* Toggle Settings */}
              <div className="space-y-3">
                {[
                  { key: 'highContrast', label: 'High Contrast', icon: <Contrast className="w-4 h-4" /> },
                  { key: 'largeText', label: 'Large Text', icon: <Text className="w-4 h-4" /> },
                  { key: 'reducedMotion', label: 'Reduced Motion', icon: <Settings className="w-4 h-4" /> },
                  { key: 'focusIndicator', label: 'Focus Indicator', icon: <Eye className="w-4 h-4" /> },
                  { key: 'screenReader', label: 'Screen Reader Support', icon: <Volume2 className="w-4 h-4" /> }
                ].map(({ key, label, icon }) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[key as keyof AccessibilitySettings] as boolean}
                      onChange={(e) => updateSetting(key as keyof AccessibilitySettings, e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">{label}</span>
                    {icon}
                  </label>
                ))}
              </div>

              {/* Spacing */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Spacing
                </label>
                <select
                  value={settings.spacing}
                  onChange={(e) => updateSetting('spacing', e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <p id="accessibility-description" className="text-xs text-gray-600 dark:text-gray-400 text-center">
                These settings help make our website more accessible to everyone.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Announcements Display */}
      {announcements.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg max-w-sm"
            >
              {announcement}
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
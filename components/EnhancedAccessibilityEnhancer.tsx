import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Contrast, 
  MousePointer, Keyboard, Monitor, Smartphone, 
  Settings, X, CheckCircle, AlertCircle, Info
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
  fontSize: 'normal' | 'large' | 'xlarge';
  lineSpacing: 'normal' | 'relaxed' | 'very-relaxed';
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindness: 'none',
    fontSize: 'normal',
    lineSpacing: 'normal'
  });

  const [isActive, setIsActive] = useState(false);
  const [announcement, setAnnouncement] = useState<string>('');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (e) {
        console.error('Failed to parse accessibility settings:', e);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--accent-color', '#ffff00');
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
      root.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
      root.classList.remove('reduced-motion');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.filter = 'saturate(1.5) contrast(1.2)';
    } else {
      root.style.filter = 'none';
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #00ffff');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[newSettings.colorBlindness];
    }

    // Font size
    const fontSizes = {
      normal: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.setProperty('--font-size-base', fontSizes[newSettings.fontSize]);

    // Line spacing
    const lineSpacings = {
      normal: '1.5',
      relaxed: '1.8',
      'very-relaxed': '2.2'
    };
    root.style.setProperty('--line-height-base', lineSpacings[newSettings.lineSpacing]);

    // Save to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Announce changes for screen readers
    announceChange(key, value);
  }, [settings, applySettings]);

  // Announce changes for screen readers
  const announceChange = useCallback((key: string, value: any) => {
    const announcements = {
      highContrast: `High contrast ${value ? 'enabled' : 'disabled'}`,
      largeText: `Large text ${value ? 'enabled' : 'disabled'}`,
      reducedMotion: `Reduced motion ${value ? 'enabled' : 'disabled'}`,
      highSaturation: `High saturation ${value ? 'enabled' : 'disabled'}`,
      focusIndicator: `Focus indicator ${value ? 'enabled' : 'disabled'}`,
      screenReader: `Screen reader mode ${value ? 'enabled' : 'disabled'}`,
      keyboardNavigation: `Keyboard navigation ${value ? 'enabled' : 'disabled'}`,
      colorBlindness: `Color blindness mode set to ${value}`,
      fontSize: `Font size set to ${value}`,
      lineSpacing: `Line spacing set to ${value}`
    };

    setAnnouncement(announcements[key as keyof typeof announcements] || 'Setting updated');
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  // Toggle accessibility panel
  const togglePanel = useCallback(() => {
    setIsOpen(!isOpen);
    setIsActive(!isOpen);
  }, [isOpen]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        togglePanel();
      }
      
      // Alt + H to toggle high contrast
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        handleSettingChange('highContrast', !settings.highContrast);
      }
      
      // Alt + L to toggle large text
      if (e.altKey && e.key === 'l') {
        e.preventDefault();
        handleSettingChange('largeText', !settings.largeText);
      }
      
      // Alt + M to toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        handleSettingChange('reducedMotion', !settings.reducedMotion);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePanel, handleSettingChange, settings]);

  // Screen reader announcements
  useEffect(() => {
    if (announcement) {
      const announcementEl = document.createElement('div');
      announcementEl.setAttribute('aria-live', 'polite');
      announcementEl.setAttribute('aria-atomic', 'true');
      announcementEl.className = 'sr-only';
      announcementEl.textContent = announcement;
      
      document.body.appendChild(announcementEl);
      
      setTimeout(() => {
        document.body.removeChild(announcementEl);
      }, 100);
    }
  }, [announcement]);

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={togglePanel}
        className={`fixed bottom-4 left-4 z-50 p-3 rounded-full transition-all duration-300 ${
          isActive 
            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
            : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white'
        }`}
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-panel"
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-4 bottom-20 z-40 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div>
                <h2 id="accessibility-title" className="text-lg font-semibold text-white">
                  Accessibility Settings
                </h2>
                <p id="accessibility-description" className="text-sm text-gray-400">
                  Customize your experience for better accessibility
                </p>
              </div>
              <button
                onClick={togglePanel}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6 max-h-96 overflow-y-auto">
              {/* Visual Enhancements */}
              <div className="space-y-3">
                <h3 className="text-md font-medium text-white flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Visual Enhancements
                </h3>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">High Contrast</span>
                  <span className="ml-2 text-xs text-gray-500">(Alt + H)</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">Large Text</span>
                  <span className="ml-2 text-xs text-gray-500">(Alt + L)</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highSaturation}
                    onChange={(e) => handleSettingChange('highSaturation', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">High Saturation</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.focusIndicator}
                    onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">Enhanced Focus Indicator</span>
                </label>
              </div>

              {/* Motion & Interaction */}
              <div className="space-y-3">
                <h3 className="text-md font-medium text-white flex items-center">
                  <MousePointer className="w-4 h-4 mr-2" />
                  Motion & Interaction
                </h3>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">Reduced Motion</span>
                  <span className="ml-2 text-xs text-gray-500">(Alt + M)</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.keyboardNavigation}
                    onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">Enhanced Keyboard Navigation</span>
                </label>
              </div>

              {/* Typography */}
              <div className="space-y-3">
                <h3 className="text-md font-medium text-white flex items-center">
                  <Type className="w-4 h-4 mr-2" />
                  Typography
                </h3>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Font Size</label>
                  <select
                    value={settings.fontSize}
                    onChange={(e) => handleSettingChange('fontSize', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Line Spacing</label>
                  <select
                    value={settings.lineSpacing}
                    onChange={(e) => handleSettingChange('lineSpacing', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="normal">Normal</option>
                    <option value="relaxed">Relaxed</option>
                    <option value="very-relaxed">Very Relaxed</option>
                  </select>
                </div>
              </div>

              {/* Color Blindness */}
              <div className="space-y-3">
                <h3 className="text-md font-medium text-white flex items-center">
                  <Contrast className="w-4 h-4 mr-2" />
                  Color Vision
                </h3>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Color Blindness Mode</label>
                  <select
                    value={settings.colorBlindness}
                    onChange={(e) => handleSettingChange('colorBlindness', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="none">None</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>

              {/* Screen Reader */}
              <div className="space-y-3">
                <h3 className="text-md font-medium text-white flex items-center">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Screen Reader
                </h3>
                
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.screenReader}
                    onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-300">Enhanced Screen Reader Support</span>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/50">
              <div className="text-xs text-gray-400 space-y-1">
                <p>Keyboard shortcuts: Alt + A (toggle), Alt + H (contrast), Alt + L (text), Alt + M (motion)</p>
                <p>Settings are automatically saved and will persist across sessions.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Color Blindness SVG Filters */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="protanopia">
            <feColorMatrix
              type="matrix"
              values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix
              type="matrix"
              values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0"
            />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix
              type="matrix"
              values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
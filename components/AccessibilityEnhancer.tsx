import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Sun, Moon, 
  Monitor, Smartphone, Tablet, Settings, X,
  Contrast, Type, ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
  fontSize: number;
  zoomLevel: number;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    theme: 'dark',
    fontSize: 16,
    zoomLevel: 100
  });
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
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

    // Theme
    root.setAttribute('data-theme', newSettings.theme);

    // Font size
    root.style.fontSize = `${newSettings.fontSize}px`;

    // Zoom level
    root.style.zoom = `${newSettings.zoomLevel / 100}`;

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  // Handle setting changes
  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Reset to default settings
  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      soundEnabled: true,
      theme: 'dark',
      fontSize: 16,
      zoomLevel: 100
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };

  // Toggle panel visibility
  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsVisible(true);
    }
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 300);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  };

  // Announce accessibility changes to screen readers
  const announceChange = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePanel}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 z-50 flex items-center justify-center"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onKeyDown={handleKeyDown}
          >
            <motion.div
              ref={panelRef}
              initial={{ x: '100%' }}
              animate={{ x: isOpen ? 0 : '100%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-96 bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 shadow-2xl"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <h2 className="text-xl font-bold text-white">Accessibility Settings</h2>
                <button
                  onClick={togglePanel}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Panel Content */}
              <div className="p-6 space-y-6 overflow-y-auto h-full">
                {/* Visual Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    Visual Settings
                  </h3>
                  
                  {/* High Contrast */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">High Contrast</label>
                      <p className="text-sm text-gray-400">Enhanced color contrast for better visibility</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSettingChange('highContrast', !settings.highContrast);
                        announceChange(`High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.highContrast}
                      aria-label="Toggle high contrast"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Large Text */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Large Text</label>
                      <p className="text-sm text-gray-400">Increase text size for better readability</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSettingChange('largeText', !settings.largeText);
                        announceChange(`Large text ${!settings.largeText ? 'enabled' : 'disabled'}`);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.largeText}
                      aria-label="Toggle large text"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.largeText ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-2">
                    <label className="text-white font-medium">Font Size: {settings.fontSize}px</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const newSize = Math.max(12, settings.fontSize - 2);
                          handleSettingChange('fontSize', newSize);
                          announceChange(`Font size set to ${newSize} pixels`);
                        }}
                        className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                        aria-label="Decrease font size"
                      >
                        <ZoomOut className="w-4 h-4 text-gray-400" />
                      </button>
                      <div className="flex-1 bg-gray-800/50 rounded-lg h-2">
                        <div 
                          className="bg-cyan-500 h-2 rounded-lg transition-all duration-200"
                          style={{ width: `${((settings.fontSize - 12) / 20) * 100}%` }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          const newSize = Math.min(32, settings.fontSize + 2);
                          handleSettingChange('fontSize', newSize);
                          announceChange(`Font size set to ${newSize} pixels`);
                        }}
                        className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                        aria-label="Increase font size"
                      >
                        <ZoomIn className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Motion Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-purple-400" />
                    Motion & Interaction
                  </h3>
                  
                  {/* Reduced Motion */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Reduced Motion</label>
                      <p className="text-sm text-gray-400">Minimize animations and transitions</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSettingChange('reducedMotion', !settings.reducedMotion);
                        announceChange(`Reduced motion ${!settings.reducedMotion ? 'enabled' : 'disabled'}`);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.reducedMotion ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.reducedMotion}
                      aria-label="Toggle reduced motion"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sound */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Sound Effects</label>
                      <p className="text-sm text-gray-400">Enable audio feedback and notifications</p>
                    </div>
                    <button
                      onClick={() => {
                        handleSettingChange('soundEnabled', !settings.soundEnabled);
                        announceChange(`Sound effects ${!settings.soundEnabled ? 'enabled' : 'disabled'}`);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        settings.soundEnabled ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                      role="switch"
                      aria-checked={settings.soundEnabled}
                      aria-label="Toggle sound effects"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Theme Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    Theme & Display
                  </h3>
                  
                  {/* Theme Selection */}
                  <div className="space-y-2">
                    <label className="text-white font-medium">Theme</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'light', icon: Sun, label: 'Light' },
                        { value: 'dark', icon: Moon, label: 'Dark' },
                        { value: 'auto', icon: Monitor, label: 'Auto' }
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => {
                            handleSettingChange('theme', theme.value);
                            announceChange(`${theme.label} theme selected`);
                          }}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            settings.theme === theme.value
                              ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                              : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:bg-gray-700/50'
                          }`}
                          aria-label={`Select ${theme.label} theme`}
                        >
                          <theme.icon className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">{theme.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Zoom Level */}
                  <div className="space-y-2">
                    <label className="text-white font-medium">Zoom Level: {settings.zoomLevel}%</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const newZoom = Math.max(50, settings.zoomLevel - 25);
                          handleSettingChange('zoomLevel', newZoom);
                          announceChange(`Zoom level set to ${newZoom} percent`);
                        }}
                        className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                        aria-label="Decrease zoom level"
                      >
                        <ZoomOut className="w-4 h-4 text-gray-400" />
                      </button>
                      <div className="flex-1 bg-gray-800/50 rounded-lg h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-lg transition-all duration-200"
                          style={{ width: `${((settings.zoomLevel - 50) / 150) * 100}%` }}
                        />
                      </div>
                      <button
                        onClick={() => {
                          const newZoom = Math.min(200, settings.zoomLevel + 25);
                          handleSettingChange('zoomLevel', newZoom);
                          announceChange(`Zoom level set to ${newZoom} percent`);
                        }}
                        className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                        aria-label="Increase zoom level"
                      >
                        <ZoomIn className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => {
                      resetSettings();
                      announceChange('Accessibility settings reset to default');
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium rounded-lg transition-all duration-200"
                    aria-label="Reset all accessibility settings to default"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset to Default
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #00ffff;
        }

        .large-text {
          font-size: 1.2em;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        [data-theme="light"] {
          --text-primary: #111827;
          --text-secondary: #374151;
          --bg-primary: #ffffff;
          --bg-secondary: #f9fafb;
        }

        [data-theme="dark"] {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #111827;
          --bg-secondary: #1f2937;
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
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
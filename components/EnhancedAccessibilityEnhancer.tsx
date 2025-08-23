import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, Type, Volume2, VolumeX, Sun, Moon, 
  Contrast, Palette, Settings, X, Accessibility, 
  Smartphone, Monitor, Tablet
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  darkMode: boolean;
  soundEnabled: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  colorScheme: 'default' | 'high-contrast' | 'colorblind-friendly';
}

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    darkMode: false,
    soundEnabled: true,
    fontSize: 'medium',
    colorScheme: 'default'
  });

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applyAccessibilitySettings();
    
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--neon-cyan', '#00ffff');
      root.style.setProperty('--neon-purple', '#ff00ff');
      root.style.setProperty('--neon-pink', '#ff0080');
      root.style.setProperty('--neon-blue', '#0080ff');
      root.style.setProperty('--neon-green', '#00ff80');
      root.style.setProperty('--neon-red', '#ff0000');
      root.style.setProperty('--neon-yellow', '#ffff00');
      root.style.setProperty('--neon-orange', '#ff8000');
      root.style.setProperty('--neon-indigo', '#8000ff');
      root.style.setProperty('--neon-teal', '#00ffff');
    } else {
      // Reset to default colors
      root.style.removeProperty('--neon-cyan');
      root.style.removeProperty('--neon-purple');
      root.style.removeProperty('--neon-pink');
      root.style.removeProperty('--neon-blue');
      root.style.removeProperty('--neon-green');
      root.style.removeProperty('--neon-red');
      root.style.removeProperty('--neon-yellow');
      root.style.removeProperty('--neon-orange');
      root.style.removeProperty('--neon-indigo');
      root.style.removeProperty('--neon-teal');
    }

    // Large text
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.fontSize = fontSizeMap[settings.fontSize];

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      document.body.classList.add('reduce-motion');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      document.body.classList.remove('reduce-motion');
    }

    // High saturation
    if (settings.highSaturation) {
      root.style.filter = 'saturate(1.5)';
    } else {
      root.style.filter = 'none';
    }

    // Dark mode
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    // Color scheme
    if (settings.colorScheme === 'high-contrast') {
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--surface-color', '#ffffff');
      root.style.setProperty('--border-color', '#ffffff');
    } else if (settings.colorScheme === 'colorblind-friendly') {
      root.style.setProperty('--neon-cyan', '#00b4d8');
      root.style.setProperty('--neon-purple', '#7209b7');
      root.style.setProperty('--neon-pink', '#f72585');
      root.style.setProperty('--neon-blue', '#4361ee');
      root.style.setProperty('--neon-green', '#06ffa5');
      root.style.setProperty('--neon-red', '#ff006e');
      root.style.setProperty('--neon-yellow', '#ffbe0b');
      root.style.setProperty('--neon-orange', '#fb8500');
      root.style.setProperty('--neon-indigo', '#3a0ca3');
      root.style.setProperty('--neon-teal', '#06ffa5');
    } else {
      // Reset to default
      root.style.removeProperty('--background-color');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--surface-color');
      root.style.removeProperty('--border-color');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({
      ...prev,
      fontSize: size
    }));
  };

  const updateColorScheme = (scheme: AccessibilitySettings['colorScheme']) => {
    setSettings(prev => ({
      ...prev,
      colorScheme: scheme
    }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      darkMode: false,
      soundEnabled: true,
      fontSize: 'medium',
      colorScheme: 'default'
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Open accessibility settings"
      >
        <Accessibility className="w-7 h-7 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Accessibility className="w-6 h-6 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-6">
              {/* Visual Settings */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  Visual
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={() => toggleSetting('highContrast')}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-gray-300">High Contrast</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.largeText}
                      onChange={() => toggleSetting('largeText')}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-gray-300">Large Text</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highSaturation}
                      onChange={() => toggleSetting('highSaturation')}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-gray-300">High Saturation</span>
                  </label>
                </div>
              </div>

              {/* Font Size */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Type className="w-5 h-5 text-cyan-400" />
                  Font Size
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFontSize(size)}
                      className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        settings.fontSize === size
                          ? 'bg-cyan-500 text-black font-semibold'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Scheme */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-cyan-400" />
                  Color Scheme
                </h3>
                <div className="space-y-2">
                  {(['default', 'high-contrast', 'colorblind-friendly'] as const).map((scheme) => (
                    <button
                      key={scheme}
                      onClick={() => updateColorScheme(scheme)}
                      className={`w-full px-3 py-2 rounded-lg text-sm text-left transition-all duration-200 ${
                        settings.colorScheme === scheme
                          ? 'bg-cyan-500 text-black font-semibold'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {scheme.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motion Settings */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-cyan-400" />
                  Motion
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={() => toggleSetting('reducedMotion')}
                      className="w-4 h-4 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-gray-300">Reduce Motion</span>
                  </label>
                </div>
              </div>

              {/* Theme */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  {settings.darkMode ? <Moon className="w-5 h-5 text-cyan-400" /> : <Sun className="w-5 h-5 text-cyan-400" />}
                  Theme
                </h3>
                <button
                  onClick={() => toggleSetting('darkMode')}
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  Switch to {settings.darkMode ? 'Light' : 'Dark'} Mode
                </button>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
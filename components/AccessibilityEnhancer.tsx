import React, { useEffect, useState, useCallback, useRef } from 'react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  highContrast: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  className?: string;
  showUI?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className = '',
  showUI = false,
  onSettingsChange
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);
  const settingsRef = useRef<AccessibilitySettings>(settings);

  // Load settings from localStorage
  const loadSettings = useCallback(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedSettings = localStorage.getItem('zion-accessibility-settings');
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          setSettings(parsedSettings);
          settingsRef.current = parsedSettings;
          applySettings(parsedSettings);
        }
      }
    } catch {
      // Silently handle localStorage errors
    }
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
      }
    } catch {
      // Silently handle localStorage errors
    }
  }, []);

  // Apply accessibility settings to the document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--accessibility-font-size', getFontSizeValue(newSettings.fontSize));
    
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
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
    
    // Screen reader optimizations
    if (newSettings.screenReader) {
      root.classList.add('screen-reader-optimized');
    } else {
      root.classList.remove('screen-reader-optimized');
    }
  }, []);

  // Get font size value
  const getFontSizeValue = (size: string): string => {
    switch (size) {
      case 'small': return '0.875rem';
      case 'medium': return '1rem';
      case 'large': return '1.125rem';
      case 'x-large': return '1.25rem';
      default: return '1rem';
    }
  };

  // Update settings
  const updateSettings = useCallback((key: keyof AccessibilitySettings, value: AccessibilitySettings[keyof AccessibilitySettings]) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    settingsRef.current = newSettings;
    applySettings(newSettings);
    saveSettings(newSettings);
    
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  }, [settings, applySettings, saveSettings, onSettingsChange]);

  // Reset to default settings
  const resetToDefaults = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      focusIndicator: true,
      screenReader: false
    };
    
    setSettings(defaultSettings);
    settingsRef.current = defaultSettings;
    applySettings(defaultSettings);
    saveSettings(defaultSettings);
    
    if (onSettingsChange) {
      onSettingsChange(defaultSettings);
    }
  }, [applySettings, saveSettings, onSettingsChange]);

  // Toggle UI visibility
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Initialize accessibility features
  useEffect(() => {
    loadSettings();
    
    // Add CSS variables for accessibility
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --accessibility-font-size: 1rem;
        --focus-ring-color: #3b82f6;
        --focus-ring-width: 3px;
      }
      
      .high-contrast {
        --text-color: #ffffff;
        --bg-color: #000000;
        --accent-color: #ffff00;
        --border-color: #ffffff;
      }
      
      .high-contrast * {
        color: var(--text-color) !important;
        background-color: var(--bg-color) !important;
        border-color: var(--border-color) !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .focus-indicator *:focus {
        outline: var(--focus-ring-width) solid var(--focus-ring-color) !important;
        outline-offset: 2px !important;
      }
      
      .screen-reader-optimized .sr-only {
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
      
      body {
        font-size: var(--accessibility-font-size);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [loadSettings]);

  // Apply settings when component mounts
  useEffect(() => {
    applySettings(settings);
  }, [applySettings, settings]);

  if (!showUI) {
    return null;
  }

  return (
    <div className={`fixed top-4 left-4 z-50 ${className}`}>
      {/* Accessibility Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Accessibility settings"
        aria-expanded={isVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="absolute left-0 top-16 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Accessibility</h3>
            <button
              onClick={toggleVisibility}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
              aria-label="Close accessibility settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Font Size
              </label>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSettings('fontSize', e.target.value as AccessibilitySettings['fontSize'])}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                High Contrast
              </label>
              <button
                onClick={() => updateSettings('highContrast', !settings.highContrast)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  settings.highContrast ? 'bg-green-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.highContrast}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                Reduced Motion
              </label>
              <button
                onClick={() => updateSettings('reducedMotion', !settings.reducedMotion)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  settings.reducedMotion ? 'bg-green-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.reducedMotion}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                Focus Indicator
              </label>
              <button
                onClick={() => updateSettings('focusIndicator', !settings.focusIndicator)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  settings.focusIndicator ? 'bg-green-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.focusIndicator}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Screen Reader Optimizations */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                Screen Reader
              </label>
              <button
                onClick={() => updateSettings('screenReader', !settings.screenReader)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                  settings.screenReader ? 'bg-green-500' : 'bg-gray-600'
                }`}
                role="switch"
                aria-checked={settings.screenReader}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={resetToDefaults}
                className="w-full bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <details className="text-sm text-gray-400">
              <summary className="cursor-pointer hover:text-white transition-colors">
                Keyboard Shortcuts
              </summary>
              <div className="mt-2 space-y-1 text-xs">
                <div>Tab: Navigate between elements</div>
                <div>Enter/Space: Activate buttons</div>
                <div>Escape: Close panels</div>
                <div>Ctrl + Plus: Increase font size</div>
                <div>Ctrl + Minus: Decrease font size</div>
              </div>
            </details>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
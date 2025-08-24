import React, { useEffect, useState } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export function AccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false,
  });

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const handleSettingChange = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: false,
    };
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
        <a href="#main-content" className="bg-zion-cyan text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>
        <a href="#navigation" className="bg-zion-cyan text-white px-4 py-2 rounded-md ml-2">
          Skip to navigation
        </a>
      </div>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 hover:bg-zion-cyan/10 p-2 rounded border"
        aria-label="Accessibility Settings"
      >
        <span className="text-zion-cyan">A</span>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed top-16 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 shadow-2xl rounded-lg border p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="text-zion-cyan">A</span>
              Accessibility Settings
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-zion-cyan"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Visual Enhancements */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>👁️</span>
                Visual Enhancements
              </h4>
              
              <div className="flex items-center justify-between">
                <label htmlFor="high-contrast" className="text-sm">
                  High Contrast
                </label>
                <input
                  type="checkbox"
                  id="high-contrast"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="large-text" className="text-sm">
                  Large Text
                </label>
                <input
                  type="checkbox"
                  id="large-text"
                  checked={settings.largeText}
                  onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="focus-indicator" className="text-sm">
                  Enhanced Focus
                </label>
                <input
                  type="checkbox"
                  id="focus-indicator"
                  checked={settings.focusIndicator}
                  onChange={(e) => handleSettingChange('focusIndicator', e.target.checked)}
                  className="rounded"
                />
              </div>
            </div>
            
            <hr className="border-border" />
            
            {/* Motion and Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🖱️</span>
                Navigation & Motion
              </h4>
              
              <div className="flex items-center justify-between">
                <label htmlFor="reduced-motion" className="text-sm">
                  Reduced Motion
                </label>
                <input
                  type="checkbox"
                  id="reduced-motion"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label htmlFor="keyboard-nav" className="text-sm">
                  Keyboard Navigation
                </label>
                <input
                  type="checkbox"
                  id="keyboard-nav"
                  checked={settings.keyboardNavigation}
                  onChange={(e) => handleSettingChange('keyboardNavigation', e.target.checked)}
                  className="rounded"
                />
              </div>
            </div>
            
            <hr className="border-border" />
            
            {/* Screen Reader */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <span>🔊</span>
                Screen Reader
              </h4>
              
              <div className="flex items-center justify-between">
                <label htmlFor="screen-reader" className="text-sm">
                  Enhanced Support
                </label>
                <input
                  type="checkbox"
                  id="screen-reader"
                  checked={settings.screenReader}
                  onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                  className="rounded"
                />
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="pt-2">
              <button
                onClick={resetSettings}
                className="w-full p-2 border border-border rounded hover:bg-muted"
              >
                <span className="mr-2">⚙️</span>
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Type, 
  Keyboard,
  Accessibility,
  X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const focusableElements = useRef<HTMLElement[]>([]);
  const currentFocusIndex = useRef(0);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...prev, ...parsed });
      } catch (error) {
        console.error('Failed to parse saved accessibility settings:', error);
      }
    }

    // Apply initial settings
    applySettings(settings);

    // Set up keyboard navigation
    setupKeyboardNavigation();

    // Announce component availability
    setTimeout(() => {
      announceToScreenReader('Accessibility panel available. Press Tab to navigate.');
    }, 1000);

    return () => {
      cleanupKeyboardNavigation();
    };
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '16px';
      root.style.lineHeight = '1.5';
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    // Apply custom typography
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);

    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    // Notify parent component
    onSettingsChange?.(newSettings);
  };

  const setupKeyboardNavigation = () => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;

      switch (event.key) {
        case 'Tab':
          event.preventDefault();
          navigateFocus(event.shiftKey ? -1 : 1);
          break;
        case 'Escape':
          if (isOpen) setIsOpen(false);
          break;
        case 'Enter':
        case ' ':
          if (document.activeElement === document.body) {
            event.preventDefault();
            setIsOpen(true);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  };

  const cleanupKeyboardNavigation = () => {
    document.removeEventListener('keydown', setupKeyboardNavigation as any);
  };

  const navigateFocus = (direction: number) => {
    if (!focusableElements.current.length) {
      focusableElements.current = Array.from(
        document.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])')
      ).filter(el => el.offsetParent !== null) as HTMLElement[];
    }

    if (focusableElements.current.length === 0) return;

    currentFocusIndex.current = (currentFocusIndex.current + direction + focusableElements.current.length) % focusableElements.current.length;
    focusableElements.current[currentFocusIndex.current]?.focus();
  };

  const announceToScreenReader = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 3000);
  };

  const handleSettingChange = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    
    // Announce changes to screen readers
    const settingNames: Record<string, string> = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader mode',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicator'
    };
    
    announceToScreenReader(`${settingNames[key]} ${value ? 'enabled' : 'disabled'}`);
  };

  const handleFontSizeChange = (newSize: number) => {
    const newSettings = { ...settings, fontSize: newSize };
    setSettings(newSettings);
    applySettings(newSettings);
    announceToScreenReader(`Font size changed to ${newSize} pixels`);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0
    };
    
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    announceToScreenReader('Accessibility settings reset to default');
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-6 bottom-24 z-40 bg-gray-900 text-white p-6 rounded-2xl shadow-2xl border border-gray-700 max-w-sm w-full"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 id="accessibility-panel-title" className="text-xl font-bold">
                  Accessibility Settings
                </h2>
                <p id="accessibility-panel-description" className="text-sm text-gray-400">
                  Customize your experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Contrast className="w-5 h-5" />
                  <span>High Contrast</span>
                </label>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.highContrast}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Type className="w-5 h-5" />
                  <span>Large Text</span>
                </label>
                <button
                  onClick={() => handleSettingChange('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.largeText}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Eye className="w-5 h-5" />
                  <span>Reduced Motion</span>
                </label>
                <button
                  onClick={() => handleSettingChange('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.reducedMotion}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Keyboard className="w-5 h-5" />
                  <span>Keyboard Navigation</span>
                </label>
                <button
                  onClick={() => handleSettingChange('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.keyboardNavigation}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Eye className="w-5 h-5" />
                  <span>Focus Indicator</span>
                </label>
                <button
                  onClick={() => handleSettingChange('focusIndicator', !settings.focusIndicator)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  aria-pressed={settings.focusIndicator}
                  role="switch"
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Font Size Slider */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <ZoomIn className="w-5 h-5" />
                  <span>Font Size: {settings.fontSize}px</span>
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  aria-valuemin={12}
                  aria-valuemax={24}
                  aria-valuenow={settings.fontSize}
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Reset to Default
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Keyboard Shortcuts</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Tab: Navigate focus</div>
                <div>Enter/Space: Activate</div>
                <div>Escape: Close panel</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="accessibility-announcements"
      >
        {announcement}
      </div>

      {/* Global CSS Variables for Accessibility */}
      <style jsx global>{`
        :root {
          --font-size: ${settings.fontSize}px;
          --line-height: ${settings.lineHeight};
          --letter-spacing: ${settings.letterSpacing}px;
          --focus-visible: ${settings.focusIndicator ? '2px solid #3b82f6' : 'none'};
          --reduced-motion: ${settings.reducedMotion ? 'reduce' : 'no-preference'};
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

        .high-contrast button,
        .high-contrast a {
          border: 2px solid var(--accent-color) !important;
        }

        *:focus-visible {
          outline: var(--focus-visible) !important;
          outline-offset: 2px !important;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
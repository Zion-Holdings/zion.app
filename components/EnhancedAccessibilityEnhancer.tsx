import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer, 
  Smartphone, Monitor, Sun, Moon, Contrast, Accessibility,
  SkipForward, SkipBack, Play, Pause, RotateCcw
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onAccessibilityChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onAccessibilityChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('dark');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [lineSpacing, setLineSpacing] = useState<'normal' | 'relaxed' | 'loose'>('normal');

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--contrast-multiplier', '1.5');
      root.style.setProperty('--border-width', '2px');
    } else {
      root.style.setProperty('--contrast-multiplier', '1');
      root.style.setProperty('--border-width', '1px');
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.setProperty('--animation-duration', '0.3s');
      root.style.setProperty('--transition-duration', '0.3s');
    }
    
    // Large text
    if (settings.largeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
    } else {
      root.style.setProperty('--font-size-base', '16px');
      root.style.setProperty('--font-size-lg', '18px');
      root.style.setProperty('--font-size-xl', '20px');
    }
    
    // High saturation
    if (settings.highSaturation) {
      root.style.setProperty('--saturation-multiplier', '1.3');
    } else {
      root.style.setProperty('--saturation-multiplier', '1');
    }
    
    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-ring-width', '3px');
      root.style.setProperty('--focus-ring-color', '#06b6d4');
    } else {
      root.style.setProperty('--focus-ring-width', '0px');
    }
    
    // Notify parent component
    onAccessibilityChange?.(settings);
  }, [settings, onAccessibilityChange]);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    
    if (currentTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (currentTheme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      // Auto theme based on system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        root.classList.remove('light');
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    }
  }, [currentTheme]);

  // Apply font size
  useEffect(() => {
    const root = document.documentElement;
    
    switch (fontSize) {
      case 'large':
        root.style.fontSize = '18px';
        break;
      case 'xlarge':
        root.style.fontSize = '20px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  }, [fontSize]);

  // Apply line spacing
  useEffect(() => {
    const root = document.documentElement;
    
    switch (lineSpacing) {
      case 'relaxed':
        root.style.setProperty('--line-height', '1.6');
        break;
      case 'loose':
        root.style.setProperty('--line-height', '1.8');
        break;
      default:
        root.style.setProperty('--line-height', '1.5');
    }
  }, [lineSpacing]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Alt + T to toggle theme
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
      }
      
      // Alt + M to toggle reduced motion
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
      }
      
      // Alt + C to toggle high contrast
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Skip to main content functionality
  const handleSkipToContent = useCallback(() => {
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Reset all settings
  const handleReset = useCallback(() => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      largeText: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false
    });
    setCurrentTheme('dark');
    setFontSize('normal');
    setLineSpacing('normal');
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
        onClick={handleSkipToContent}
      >
        Skip to main content
      </a>

      {/* Accessibility toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-7 h-7 mx-auto" />
      </button>

      {/* Accessibility panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 id="accessibility-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  Accessibility Settings
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close accessibility settings"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
              
              <p id="accessibility-description" className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                Customize your experience with these accessibility options. Use Alt + A to quickly open this panel.
              </p>

              {/* Theme Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Theme
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['light', 'dark', 'auto'] as const).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setCurrentTheme(theme)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        currentTheme === theme
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                      aria-pressed={currentTheme === theme}
                    >
                      {theme === 'light' && <Sun className="w-5 h-5 mx-auto text-yellow-600" />}
                      {theme === 'dark' && <Moon className="w-5 h-5 mx-auto text-blue-600" />}
                      {theme === 'auto' && <Monitor className="w-5 h-5 mx-auto text-gray-600" />}
                      <span className="block text-xs mt-1 capitalize">{theme}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Font Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        fontSize === size
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                      aria-pressed={fontSize === size}
                    >
                      <span className={`block font-bold ${
                        size === 'normal' ? 'text-base' : size === 'large' ? 'text-lg' : 'text-xl'
                      }`}>
                        Aa
                      </span>
                      <span className="block text-xs mt-1 capitalize">{size}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Line Spacing */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Line Spacing
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'relaxed', 'loose'] as const).map((spacing) => (
                    <button
                      key={spacing}
                      onClick={() => setLineSpacing(spacing)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        lineSpacing === spacing
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                      aria-pressed={lineSpacing === spacing}
                    >
                      <div className={`text-center ${
                        spacing === 'normal' ? 'space-y-1' : spacing === 'relaxed' ? 'space-y-2' : 'space-y-3'
                      }`}>
                        <div className="w-8 h-1 bg-gray-400 rounded"></div>
                        <div className="w-8 h-1 bg-gray-400 rounded"></div>
                        <div className="w-8 h-1 bg-gray-400 rounded"></div>
                      </div>
                      <span className="block text-xs mt-1 capitalize">{spacing}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessibility Options */}
              <div className="space-y-4 mb-6">
                {[
                  { key: 'highContrast', label: 'High Contrast', icon: Contrast },
                  { key: 'reducedMotion', label: 'Reduced Motion', icon: Pause },
                  { key: 'largeText', label: 'Large Text', icon: Eye },
                  { key: 'highSaturation', label: 'High Saturation', icon: Sun },
                  { key: 'focusIndicator', label: 'Focus Indicator', icon: Keyboard },
                  { key: 'screenReader', label: 'Screen Reader Mode', icon: Volume2 }
                ].map(({ key, label, icon: Icon }) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[key as keyof AccessibilitySettings] as boolean}
                      onChange={(e) => setSettings(prev => ({ ...prev, [key]: e.target.checked }))}
                      className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
                  </label>
                ))}
              </div>

              {/* Keyboard Shortcuts */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Keyboard Shortcuts
                </h3>
                <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Alt + A</kbd> Toggle panel</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Alt + T</kbd> Toggle theme</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Alt + M</kbd> Toggle motion</div>
                  <div><kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-600 rounded">Alt + C</kbd> Toggle contrast</div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                aria-label="Reset all accessibility settings to default"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Default</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;
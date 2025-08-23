import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  X,
  Accessibility,
  Highlighter,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highlighter: boolean;
  fontSize: number;
  colorScheme: 'light' | 'dark' | 'auto';
  focusIndicator: boolean;
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highlighter: false,
    fontSize: 16,
    colorScheme: 'auto',
    focusIndicator: true,
    screenReader: false
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--border-color', '#ffff00');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--border-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
    } else {
      root.style.setProperty('--focus-outline', 'none');
    }

    // Color scheme
    if (settings.colorScheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (settings.colorScheme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
  }, [settings]);

  // Track focus changes
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        // console.log('Failed to parse saved accessibility settings');
      }
    }
  }, [applySettings]);

  // Focus management
  const handleFocusChange = useCallback((e: FocusEvent) => {
    const target = e.target as HTMLElement;
    if (target) {
      setCurrentFocus(target);
      announceToScreenReader(`Focused on ${target.textContent || target.tagName.toLowerCase()}`);
    }
  }, []);

  // Keyboard navigation enhancements
  const handleKeyDown = useCallback((e: Event) => {
    // Tab navigation detected
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    // setAnnouncements(prev => [...prev, message]); // This line was removed
    
    // Create live region for screen readers
    if (!announcementRef.current) {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
      announcementRef.current = liveRegion;
    }
    
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
    
    // Remove announcement after a delay
    setTimeout(() => {
      // setAnnouncements(prev => prev.filter(a => a !== message)); // This line was removed
    }, 5000);
  }, []);

  // Auto-optimize accessibility
  useEffect(() => {
    if (!autoOptimize) return;
    
    const checkAccessibility = () => {
      const issues: string[] = [];
      
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt) {
          issues.push(`Image missing alt text: ${img.src}`);
        }
      }
    };

  // Set up event listeners
  useEffect(() => {
    const handleFocusChangeWrapper = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        setCurrentFocus(target);
        announceToScreenReader(`Focused on ${target.textContent || target.tagName.toLowerCase()}`);
      }
    };

    document.addEventListener('focusin', handleFocusChangeWrapper);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChangeWrapper);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Highlighter effect
  useEffect(() => {
    if (!settings.highlighter) return;

    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, div');
    
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        element.style.color = '#000000';
        element.style.padding = '2px 4px';
        element.style.borderRadius = '4px';
      }
    });

    return () => {
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.backgroundColor = '';
          element.style.color = '';
          element.style.padding = '';
          element.style.borderRadius = '';
        }
      });
    };
  }, [settings.highlighter]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
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
  }, [settings.screenReader]);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: !prev[key] };
      announceToScreenReader(`${key} ${newSettings[key] ? 'enabled' : 'disabled'}`);
      return newSettings;
    });
  }, [announceToScreenReader]);

  // Update setting
  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    announceToScreenReader(`${key} updated to ${value}`);
  }, [announceToScreenReader]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    const defaults: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highlighter: false,
      fontSize: 16,
      colorScheme: 'auto',
      focusIndicator: true,
      screenReader: false
    };
    setSettings(defaults);
    announceToScreenReader('Settings reset to defaults');
  }, [announceToScreenReader]);

  // Increase/decrease font size
  const changeFontSize = useCallback((increment: boolean) => {
    setSettings(prev => {
      const newSize = increment ? prev.fontSize + 2 : prev.fontSize - 2;
      const clampedSize = Math.max(12, Math.min(24, newSize));
      announceToScreenReader(`Font size ${clampedSize}px`);
      return { ...prev, fontSize: clampedSize };
    });
  }, [announceToScreenReader]);

  // Get accessibility score
  const getAccessibilityScore = () => {
    let score = 0;
    let totalChecks = 0;

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    let imagesWithAlt = 0;
    images.forEach(img => {
      if (img.alt && img.alt.trim() !== '') imagesWithAlt++;
    });
    if (images.length > 0) {
      totalChecks++;
      score += (imagesWithAlt / images.length) * 100;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let properStructure = 0;
    let currentLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level <= currentLevel + 1) {
        properStructure++;
        currentLevel = level;
      }
    });
    if (headings.length > 0) {
      totalChecks++;
      score += (properStructure / headings.length) * 100;
    }

    // Check for form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    let labeledControls = 0;
    formControls.forEach(control => {
      if (control.hasAttribute('aria-label') || 
          control.hasAttribute('aria-labelledby') ||
          control.closest('label')) {
        labeledControls++;
      }
    });
    if (formControls.length > 0) {
      totalChecks++;
      score += (labeledControls / formControls.length) * 100;
    }

    // Check for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    let keyboardAccessible = 0;
    focusableElements.forEach(element => {
      if (element instanceof HTMLElement && element.tabIndex >= 0) {
        keyboardAccessible++;
      }
    });
    if (focusableElements.length > 0) {
      totalChecks++;
      score += (keyboardAccessible / focusableElements.length) * 100;
    }

    return totalChecks > 0 ? Math.round(score / totalChecks) : 100;
  };

  const accessibilityScore = getAccessibilityScore();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        className="fixed top-4 left-4 z-50"
      >
        {/* Main Accessibility Panel */}
        <motion.div
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden max-w-sm"
          layout
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Accessibility className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm">Accessibility</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${
                    accessibilityScore >= 90 ? 'text-green-600 dark:text-green-400' :
                    accessibilityScore >= 70 ? 'text-blue-600 dark:text-blue-400' :
                    accessibilityScore >= 50 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    Score: {accessibilityScore}%
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 p-1"
                aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 p-1"
                aria-label="Close accessibility panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => toggleSetting('highContrast')}
                className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-2 ${
                  settings.highContrast
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-500 text-yellow-700 dark:text-yellow-300'
                    : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
              >
                <Contrast className="w-5 h-5" />
                <span className="text-xs font-medium">High Contrast</span>
              </button>

              <button
                onClick={() => toggleSetting('largeText')}
                className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-2 ${
                  settings.largeText
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-label={`${settings.largeText ? 'Disable' : 'Enable'} large text`}
              >
                <Type className="w-5 h-5" />
                <span className="text-xs font-medium">Large Text</span>
              </button>

              <button
                onClick={() => toggleSetting('reducedMotion')}
                className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-2 ${
                  settings.reducedMotion
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                    : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
              >
                <Eye className="w-5 h-5" />
                <span className="text-xs font-medium">Reduced Motion</span>
              </button>

              <button
                onClick={() => toggleSetting('highlighter')}
                className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-2 ${
                  settings.highlighter
                    ? 'bg-purple-100 dark:bg-purple-900/30 border-purple-500 text-purple-700 dark:text-purple-300'
                    : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-label={`${settings.highlighter ? 'Disable' : 'Enable'} text highlighter`}
              >
                <Highlighter className="w-5 h-5" />
                <span className="text-xs font-medium">Highlighter</span>
              </button>
            </div>

            {/* Font Size Controls */}
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{settings.fontSize}px</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeFontSize(false)}
                  disabled={settings.fontSize <= 12}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  aria-label="Decrease font size"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
                  <div 
                    className="h-2 bg-blue-500 rounded-full transition-all duration-200"
                    style={{ width: `${((settings.fontSize - 12) / 12) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => changeFontSize(true)}
                  disabled={settings.fontSize >= 24}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  aria-label="Increase font size"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['light', 'dark', 'auto'] as const).map((scheme) => (
                  <button
                    key={scheme}
                    onClick={() => updateSetting('colorScheme', scheme)}
                    className={`p-2 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1 ${
                      settings.colorScheme === scheme
                        ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    aria-label={`Switch to ${scheme} theme`}
                  >
                    {scheme === 'light' && <Sun className="w-4 h-4" />}
                    {scheme === 'dark' && <Moon className="w-4 h-4" />}
                    {scheme === 'auto' && <Monitor className="w-4 h-4" />}
                    <span className="text-xs font-medium capitalize">{scheme}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-blue-500/20 overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {/* Additional Settings */}
                  <div className="space-y-3">
                    <h4 className="text-gray-900 dark:text-white font-medium text-sm">Additional Settings</h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
                      <button
                        onClick={() => toggleSetting('focusIndicator')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
                      <button
                        onClick={() => toggleSetting('screenReader')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          settings.screenReader ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader announcements`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Current Focus Info */}
                  {currentFocus && (
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-gray-700 dark:text-gray-300 text-sm mb-2">Current Focus</h5>
                      <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        <div className="font-mono break-all">
                          {currentFocus.tagName.toLowerCase()}
                          {currentFocus.id && `#${currentFocus.id}`}
                          {currentFocus.className && `.${currentFocus.className.split(' ').join('.')}`}
                        </div>
                        {currentFocus.textContent && (
                          <div className="mt-1 text-gray-500 dark:text-gray-500 truncate">
                            "{currentFocus.textContent.trim().substring(0, 50)}..."
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Focus History */}
                  {focusHistory.length > 0 && (
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-gray-700 dark:text-gray-300 text-sm mb-2">Focus History</h5>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {focusHistory.map((element, index) => (
                          <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                            <div className="font-mono">
                              {element.tagName.toLowerCase()}
                              {element.id && `#${element.id}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reset Button */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={resetToDefaults}
                      className="w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
                      aria-label="Reset accessibility settings to defaults"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span className="text-sm font-medium">Reset to Defaults</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Toggle Button */}
        <motion.button
          onClick={() => setIsVisible(false)}
          className="mt-2 w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Hide accessibility panel"
        >
          <Accessibility className="w-4 h-4" />
          <span className="text-sm font-medium">Hide Panel</span>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default AccessibilityEnhancer;
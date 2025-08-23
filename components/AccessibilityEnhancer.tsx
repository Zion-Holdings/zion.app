import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, Palette, 
  MousePointer, Keyboard, Smartphone, Monitor,
  X, Settings, CheckCircle, AlertTriangle, Info,
  ZoomIn, ZoomOut, RotateCcw, Accessibility,
  Contrast, Sun, Moon, Highlighter, FontSize
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
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  theme: 'light' | 'dark' | 'auto';
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  toggle: () => void;
  category: 'visual' | 'navigation' | 'audio' | 'cognitive';
}

const AccessibilityEnhancer: React.FC<{ 
  showPanel?: boolean; 
  autoOptimize?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}> = ({ 
  showPanel = false, 
  autoOptimize = false,
  onSettingsChange 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string>('');
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [keyboardShortcuts, setKeyboardShortcuts] = useState<Map<string, string>>(new Map());
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);
  const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
  
  const settingsRef = useRef<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: boolean,
    screenReader: false,
    keyboardNavigation: true,
    colorBlindness: 'none',
    fontSize: 'medium',
    theme: 'auto'
  });

  const [settings, setSettings] = useState<AccessibilitySettings>(settingsRef.current);

  // Accessibility features configuration
  const accessibilityFeatures: AccessibilityFeature[] = [
    {
      id: 'high-contrast',
      name: 'High Contrast',
      description: 'Increase contrast for better visibility',
      icon: <Contrast className="w-5 h-5" />,
      enabled: settings.highContrast,
      toggle: () => toggleSetting('highContrast'),
      category: 'visual'
    },
    {
      id: 'large-text',
      name: 'Large Text',
      description: 'Increase text size for better readability',
      icon: <FontSize className="w-5 h-5" />,
      enabled: settings.largeText,
      toggle: () => toggleSetting('largeText'),
      category: 'visual'
    },
    {
      id: 'reduced-motion',
      name: 'Reduced Motion',
      description: 'Reduce animations for motion sensitivity',
      icon: <RotateCcw className="w-5 h-5" />,
      enabled: settings.reducedMotion,
      toggle: () => toggleSetting('reducedMotion'),
      category: 'visual'
    },
    {
      id: 'high-saturation',
      name: 'High Saturation',
      description: 'Increase color saturation for color blindness',
      icon: <Highlighter className="w-5 h-5" />,
      enabled: settings.highSaturation,
      toggle: () => toggleSetting('highSaturation'),
      category: 'visual'
    },
    {
      id: 'focus-indicator',
      name: 'Focus Indicator',
      description: 'Enhanced focus indicators for keyboard navigation',
      icon: <MousePointer className="w-5 h-5" />,
      enabled: settings.focusIndicator,
      toggle: () => toggleSetting('focusIndicator'),
      category: 'navigation'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader',
      description: 'Enhanced screen reader support',
      icon: <Volume2 className="w-5 h-5" />,
      enabled: settings.screenReader,
      toggle: () => toggleSetting('screenReader'),
      category: 'audio'
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support',
      icon: <Keyboard className="w-5 h-5" />,
      enabled: settings.keyboardNavigation,
      toggle: () => toggleSetting('keyboardNavigation'),
      category: 'navigation'
    }
  ];

  // Toggle accessibility setting
  const toggleSetting = useCallback((setting: keyof AccessibilitySettings) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: !prev[setting] };
      settingsRef.current = newSettings;
      
      // Apply settings immediately
      applyAccessibilitySettings(newSettings);
      
      // Notify parent component
      if (onSettingsChange) {
        onSettingsChange(newSettings);
      }
      
      return newSettings;
    });
  }, [onSettingsChange]);

  // Apply accessibility settings to the document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--contrast-multiplier', '1.5');
      root.style.setProperty('--text-shadow', '0 0 1px currentColor');
    } else {
      root.style.removeProperty('--contrast-multiplier');
      root.style.removeProperty('--text-shadow');
    }
    
    // Large text
    if (newSettings.largeText) {
      root.style.setProperty('--font-size-multiplier', '1.25');
    } else {
      root.style.removeProperty('--font-size-multiplier');
    }
    
    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.1s');
      root.style.setProperty('--transition-duration', '0.1s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }
    
    // High saturation
    if (newSettings.highSaturation) {
      root.style.setProperty('--saturation-multiplier', '1.3');
    } else {
      root.style.removeProperty('--saturation-multiplier');
    }
    
    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #06b6d4');
      root.style.setProperty('--focus-outline-offset', '2px');
    } else {
      root.style.removeProperty('--focus-outline');
      root.style.removeProperty('--focus-outline-offset');
    }
    
    // Color blindness simulation
    if (newSettings.colorBlindness !== 'none') {
      const filters = {
        protanopia: 'url("#protanopia-filter")',
        deuteranopia: 'url("#deuteranopia-filter")',
        tritanopia: 'url("#tritanopia-filter")'
      };
      root.style.setProperty('--color-blindness-filter', filters[newSettings.colorBlindness]);
    } else {
      root.style.removeProperty('--color-blindness-filter');
    }
    
    // Font size
    const fontSizeMap = {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem'
    };
    root.style.setProperty('--base-font-size', fontSizeMap[newSettings.fontSize]);
    
    // Theme
    if (newSettings.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (newSettings.theme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      // Auto theme based on system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.remove('light', 'dark');
      root.classList.add(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (settings.screenReader) {
      // Create live region for screen reader announcements
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
      
      // Add to announcements list
      setAnnouncements(prev => [...prev.slice(-4), message]);
    }
  }, [settings.screenReader]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          handleTabNavigation(event);
          break;
        case 'Escape':
          // Close modals or return to previous focus
          handleEscapeKey();
          break;
        case 'Enter':
        case ' ':
          // Activate focused elements
          handleActivationKey(event);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          // Arrow key navigation
          handleArrowNavigation(event);
          break;
      }
    };

    const handleTabNavigation = (event: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
      let nextIndex = 0;
      
      if (event.shiftKey) {
        // Shift+Tab: go backwards
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      } else {
        // Tab: go forwards
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      }
      
      const nextElement = focusableElements[nextIndex] as HTMLElement;
      if (nextElement) {
        nextElement.focus();
        event.preventDefault();
        
        // Announce navigation to screen reader
        announceToScreenReader(`Focused on ${nextElement.textContent || nextElement.tagName.toLowerCase()}`);
      }
    };

    const handleEscapeKey = () => {
      // Close any open modals or panels
      if (isVisible) {
        setIsVisible(false);
        announceToScreenReader('Accessibility panel closed');
      }
      
      // Return to last focused element
      if (lastFocused) {
        lastFocused.focus();
        setLastFocused(null);
      }
    };

    const handleActivationKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.click) {
        target.click();
        event.preventDefault();
      }
    };

    const handleArrowNavigation = (event: KeyboardEvent) => {
      // Implement arrow key navigation for custom components
      const target = event.target as HTMLElement;
      const parent = target.parentElement;
      
      if (parent) {
        const siblings = Array.from(parent.children) as HTMLElement[];
        const currentIndex = siblings.indexOf(target);
        
        let nextIndex = currentIndex;
        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            nextIndex = (currentIndex + 1) % siblings.length;
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            nextIndex = currentIndex > 0 ? currentIndex - 1 : siblings.length - 1;
            break;
        }
        
        if (nextIndex !== currentIndex) {
          siblings[nextIndex].focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isVisible, lastFocused, announceToScreenReader]);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target) {
        setFocusHistory(prev => [...prev.slice(-9), target]);
        setLastFocused(target);
        
        // Enhanced focus indicator
        if (settings.focusIndicator) {
          target.style.outline = '3px solid #06b6d4';
          target.style.outlineOffset = '2px';
        }
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (target && settings.focusIndicator) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.focusIndicator]);

  // Auto-optimization
  useEffect(() => {
    if (!autoOptimize) return;

    // Auto-detect and apply accessibility improvements
    const autoDetectAccessibility = () => {
      const improvements: string[] = [];
      
      // Check for images without alt text
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
      if (imagesWithoutAlt.length > 0) {
        improvements.push(`Found ${imagesWithoutAlt.length} images without alt text`);
        // Auto-add alt text for decorative images
        imagesWithoutAlt.forEach(img => {
          if (!img.alt) {
            img.alt = 'Decorative image';
            img.setAttribute('aria-hidden', 'true');
          }
        });
      }
      
      // Check for form labels
      const inputsWithoutLabels = document.querySelectorAll('input:not([id]), label:not([for])');
      if (inputsWithoutLabels.length > 0) {
        improvements.push(`Found ${inputsWithoutLabels.length} form elements without proper labels`);
      }
      
      // Check for heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (headings.length > 0) {
        const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
        let hasSkippedLevels = false;
        for (let i = 1; i < headingLevels.length; i++) {
          if (headingLevels[i] - headingLevels[i-1] > 1) {
            hasSkippedLevels = true;
            break;
          }
        }
        if (hasSkippedLevels) {
          improvements.push('Found skipped heading levels - consider restructuring');
        }
      }
      
      if (improvements.length > 0) {
        announceToScreenReader(`Auto-detected ${improvements.length} accessibility improvements`);
        setAnnouncements(prev => [...prev.slice(-4), ...improvements]);
      }
    };

    // Run auto-detection after page load
    if (document.readyState === 'complete') {
      autoDetectAccessibility();
    } else {
      window.addEventListener('load', autoDetectAccessibility);
      return () => window.removeEventListener('load', autoDetectAccessibility);
    }
  }, [autoOptimize, announceToScreenReader]);

  // Keyboard shortcuts
  useEffect(() => {
    const shortcuts = new Map([
      ['Alt + A', 'Toggle accessibility panel'],
      ['Alt + H', 'Toggle high contrast'],
      ['Alt + L', 'Toggle large text'],
      ['Alt + R', 'Toggle reduced motion'],
      ['Alt + F', 'Toggle focus indicators'],
      ['Alt + S', 'Toggle screen reader mode'],
      ['Escape', 'Close panels / Return to previous focus'],
      ['Tab', 'Navigate between focusable elements'],
      ['Shift + Tab', 'Navigate backwards'],
      ['Enter / Space', 'Activate focused element'],
      ['Arrow Keys', 'Navigate within components']
    ]);
    
    setKeyboardShortcuts(shortcuts);
  }, []);

  // Initialize settings on mount
  useEffect(() => {
    applyAccessibilitySettings(settings);
  }, [applyAccessibilitySettings]);

  if (!showPanel) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
            isVisible 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
          aria-label="Toggle accessibility panel"
          aria-expanded={isVisible}
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-24 right-8 z-50 w-96 max-h-[80vh] overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border border-green-500/30 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-500/30">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-green-500" />
                  <h3 className="text-gray-900 dark:text-white font-semibold">Accessibility</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 text-green-500 hover:text-green-600 transition-colors"
                    aria-label="Toggle expanded view"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                    aria-label="Close accessibility panel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {/* Quick Actions */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {accessibilityFeatures.slice(0, 4).map(feature => (
                      <button
                        key={feature.id}
                        onClick={feature.toggle}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          feature.enabled
                            ? 'bg-green-500/20 border-green-500/30 text-green-700 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        aria-pressed={feature.enabled}
                      >
                        <div className="flex items-center gap-2">
                          {feature.icon}
                          <span className="text-xs font-medium">{feature.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* All Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">All Features</h4>
                  <div className="space-y-2">
                    {accessibilityFeatures.map(feature => (
                      <div
                        key={feature.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {feature.icon}
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {feature.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={feature.toggle}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            feature.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          role="switch"
                          aria-checked={feature.enabled}
                          aria-label={`Toggle ${feature.name}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              feature.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Settings */}
                {isExpanded && (
                  <>
                    {/* Color Blindness */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Color Blindness Support</h4>
                      <select
                        value={settings.colorBlindness}
                        onChange={(e) => {
                          setSettings(prev => ({ ...prev, colorBlindness: e.target.value as any }));
                          applyAccessibilitySettings({ ...settings, colorBlindness: e.target.value as any });
                        }}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="none">No Color Blindness</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>

                    {/* Font Size */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Font Size</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
                          <button
                            key={size}
                            onClick={() => {
                              setSettings(prev => ({ ...prev, fontSize: size }));
                              applyAccessibilitySettings({ ...settings, fontSize: size });
                            }}
                            className={`p-2 rounded-lg border transition-colors ${
                              settings.fontSize === size
                                ? 'bg-green-500/20 border-green-500/30 text-green-700 dark:text-green-400'
                                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            <span className="text-xs font-medium capitalize">{size}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Theme */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Theme</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {(['light', 'dark', 'auto'] as const).map(theme => (
                          <button
                            key={theme}
                            onClick={() => {
                              setSettings(prev => ({ ...prev, theme }));
                              applyAccessibilitySettings({ ...settings, theme });
                            }}
                            className={`p-2 rounded-lg border transition-colors ${
                              settings.theme === theme
                                ? 'bg-green-500/20 border-green-500/30 text-green-700 dark:text-green-400'
                                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              {theme === 'light' && <Sun className="w-3 h-3" />}
                              {theme === 'dark' && <Moon className="w-3 h-3" />}
                              {theme === 'auto' && <Monitor className="w-3 h-3" />}
                              <span className="text-xs font-medium capitalize">{theme}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Keyboard Shortcuts */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Keyboard Shortcuts</h4>
                  <div className="space-y-1">
                    {Array.from(keyboardShortcuts.entries()).map(([shortcut, description]) => (
                      <div key={shortcut} className="flex items-center justify-between text-xs">
                        <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded font-mono text-gray-800 dark:text-gray-200">
                          {shortcut}
                        </kbd>
                        <span className="text-gray-600 dark:text-gray-400">{description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Announcements */}
                {announcements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Recent Announcements</h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                          {announcement}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Focus History */}
                {focusHistory.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Focus History</h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {focusHistory.slice(-5).map((element, index) => (
                        <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                          {element.textContent?.slice(0, 50) || element.tagName.toLowerCase()}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Live Region */}
      <div
        id="accessibility-live-region"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
};

export default AccessibilityEnhancer;
import React, { useState, useEffect, useCallback, FocusEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, Keyboard, MousePointer, Sun,
  Accessibility, CheckCircle, X
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  theme: 'light' | 'dark' | 'auto';
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicators: true,
    colorBlindMode: 'none',
    theme: 'auto'
  });
  const [isOpen, setIsOpen] = useState(false);

  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Apply accessibility settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    root.classList.toggle('high-contrast', newSettings.highContrast);
    
    // Reduced motion
    root.classList.toggle('reduced-motion', newSettings.reducedMotion);
    
    // Large text
    root.classList.toggle('large-text', newSettings.largeText);
    
    // Color blind modes
    root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindMode !== 'none') {
      root.classList.add(newSettings.colorBlindMode);
    }
    
    // Theme
    root.classList.remove('light-theme', 'dark-theme');
    if (newSettings.theme !== 'auto') {
      root.classList.add(`${newSettings.theme}-theme`);
    }
    
    // Focus indicators
    root.classList.toggle('focus-indicators', newSettings.focusIndicators);
    
    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Keyboard navigation enhancement
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input, textarea, or select
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation
          if (e.shiftKey) {
            // Shift+Tab: navigate backwards
            const focusableElements = getFocusableElements();
            const currentIndex = focusableElements.indexOf(target);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            focusableElements[prevIndex]?.focus();
            e.preventDefault();
          }
          break;
          
        case 'Enter':
        case ' ':
          // Enter/Space: activate buttons and links
          if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.getAttribute('role') === 'button') {
            target.click();
            e.preventDefault();
          }
          break;
          
        case 'Escape': {
          // Escape: close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
              if (closeButton instanceof HTMLElement) {
                closeButton.click();
              }
            }
          });
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus management
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      
      // Announce focus changes for screen readers
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('title') || 
                     target.textContent?.trim();
        if (label) {
          announceToScreenReader(label);
        }
      }
      
      // Enhanced focus indicators
      if (settings.focusIndicators) {
        target.style.outline = '3px solid #3b82f6';
        target.style.outlineOffset = '2px';
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (settings.focusIndicators) {
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
  }, [settings.screenReader, settings.focusIndicators]);

  // Get all focusable elements
  const getFocusableElements = (): HTMLElement[] => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="tab"]',
      '[role="menuitem"]'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(','))) as HTMLElement[];
  };

  // Announce to screen reader
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
    
    // Add to announcements list
    setAnnouncements(prev => [...prev, message]);
  };

  // Toggle setting
  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Update setting
  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Quick accessibility actions
  const quickActions = [
    {
      label: 'Toggle High Contrast',
      icon: <Eye className="w-4 h-4" />,
      action: () => toggleSetting('highContrast'),
      active: settings.highContrast
    },
    {
      label: 'Toggle Large Text',
      icon: <Accessibility className="w-4 h-4" />,
      action: () => toggleSetting('largeText'),
      active: settings.largeText
    },
    {
      label: 'Toggle Reduced Motion',
      icon: <MousePointer className="w-4 h-4" />,
      action: () => toggleSetting('reducedMotion'),
      active: settings.reducedMotion
    }
  ];

  return (
    <>
      {children}
      
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-20 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 z-50 w-96 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-700">
              <h4 className="text-sm font-semibold text-white mb-3">Quick Actions</h4>
              <div className="grid grid-cols-3 gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      action.active
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50'
                    }`}
                    aria-label={action.label}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {action.icon}
                      <span className="text-xs text-center">{action.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* Visual Settings */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Visual Settings</h4>
                
                {/* High Contrast */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-white">High Contrast</div>
                      <div className="text-xs text-gray-400">Enhanced color contrast</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.highContrast ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                  >
                    <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Accessibility className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-white">Large Text</div>
                      <div className="text-xs text-gray-400">Increased font sizes</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('largeText')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.largeText ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.largeText}
                  >
                    <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MousePointer className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-white">Reduced Motion</div>
                      <div className="text-xs text-gray-400">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Navigation Settings */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Navigation</h4>
                
                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-white">Keyboard Navigation</div>
                      <div className="text-xs text-gray-400">Enhanced keyboard support</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.keyboardNavigation ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.keyboardNavigation}
                  >
                    <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Focus Indicators */}
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-white">Focus Indicators</div>
                      <div className="text-xs text-gray-400">Visible focus outlines</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSetting('focusIndicators')}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.focusIndicators ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicators}
                  >
                    <div className={`w-4 h-4 h-4 bg-white rounded-full transition-transform ${
                      settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Color Blind Mode */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Color Blind Support</h4>
                <div className="p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-sm text-white">Color Blind Mode</div>
                      <div className="text-xs text-gray-400">Adjust colors for accessibility</div>
                    </div>
                  </div>
                  <select
                    value={settings.colorBlindMode}
                    onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
                  >
                    <option value="none">No Adjustment</option>
                    <option value="protanopia">Protanopia (Red-Blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                  </select>
                </div>
              </div>

              {/* Theme Selection */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Theme</h4>
                <div className="p-3 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-white">Theme Preference</div>
                      <div className="text-xs text-gray-400">Choose your preferred theme</div>
                    </div>
                  </div>
                  <select
                    value={settings.theme}
                    onChange={(e) => updateSetting('theme', e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
                  >
                    <option value="auto">Auto (System)</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                Settings are automatically saved and applied
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>

      {/* Global Accessibility Styles */}
      <style jsx global>{`
        /* High Contrast Mode */
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
          --accent: #ffff00 !important;
          --border: #ffffff !important;
        }

        /* Large Text Mode */
        .large-text {
          font-size: 1.2em !important;
        }
        .large-text h1 { font-size: 2.5em !important; }
        .large-text h2 { font-size: 2em !important; }
        .large-text h3 { font-size: 1.75em !important; }
        .large-text p { font-size: 1.3em !important; }

        /* Reduced Motion */
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Color Blind Modes */
        .protanopia {
          filter: url('#protanopia-filter') !important;
        }
        .deuteranopia {
          filter: url('#deuteranopia-filter') !important;
        }
        .tritanopia {
          filter: url('#tritanopia-filter') !important;
        }

        /* Focus Indicators */
        .focus-indicators *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Screen Reader Only */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        /* Skip Links */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 10000;
        }
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
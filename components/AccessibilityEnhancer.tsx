import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Type, 
  Contrast, 
  MousePointer,
  Keyboard,
  X,
  Settings,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  toggle: () => void;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: true,
    focusIndicator: true
  });

  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  // Initialize accessibility features
  useEffect(() => {
    setIsVisible(true);
    loadAccessibilitySettings();
    setupKeyboardNavigation();
    setupFocusIndicators();
  }, []);

  const loadAccessibilitySettings = useCallback(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.error('Failed to load accessibility settings:', error);
      }
    }
  }, []);

  const saveAccessibilitySettings = useCallback((newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(updatedSettings));
    applyAccessibilitySettings(updatedSettings);
  }, [settings]);

  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
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
    
    // Focus indicators
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, []);

  const setupKeyboardNavigation = useCallback(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!settings.keyboardNavigation) return;
      
      // Skip to main content
      if (event.key === 'Tab' && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          announceToScreenReader('Skipped to main content');
        }
      }
      
      // Toggle accessibility panel
      if (event.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation, isExpanded]);

  const setupFocusIndicators = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible *:focus {
        outline: 3px solid #06b6d4 !important;
        outline-offset: 2px !important;
        border-radius: 4px !important;
      }
      
      .high-contrast {
        --text-primary: #ffffff !important;
        --text-secondary: #e5e7eb !important;
        --bg-primary: #000000 !important;
        --bg-secondary: #1f2937 !important;
        --accent: #ffff00 !important;
      }
      
      .large-text {
        font-size: 1.2em !important;
      }
      
      .large-text h1 { font-size: 2.5em !important; }
      .large-text h2 { font-size: 2em !important; }
      .large-text h3 { font-size: 1.75em !important; }
      .large-text p { font-size: 1.3em !important; }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    if (!settings.screenReader) return;
    
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
    setAnnouncements(prev => [...prev.slice(-4), message]);
  }, [settings.screenReader]);

  const toggleFeature = useCallback((feature: keyof AccessibilitySettings) => {
    const newValue = !settings[feature];
    saveAccessibilitySettings({ [feature]: newValue });
    
    const featureNames = {
      highContrast: 'High contrast',
      largeText: 'Large text',
      reducedMotion: 'Reduced motion',
      screenReader: 'Screen reader',
      keyboardNavigation: 'Keyboard navigation',
      focusIndicator: 'Focus indicators'
    };
    
    announceToScreenReader(
      `${featureNames[feature]} ${newValue ? 'enabled' : 'disabled'}`
    );
  }, [settings, saveAccessibilitySettings, announceToScreenReader]);

  const accessibilityFeatures: AccessibilityFeature[] = [
    {
      id: 'highContrast',
      name: 'High Contrast',
      description: 'Increase contrast for better visibility',
      icon: <Contrast className="w-5 h-5" />,
      enabled: settings.highContrast,
      toggle: () => toggleFeature('highContrast')
    },
    {
      id: 'largeText',
      name: 'Large Text',
      description: 'Increase text size for better readability',
      icon: <Type className="w-5 h-5" />,
      enabled: settings.largeText,
      toggle: () => toggleFeature('largeText')
    },
    {
      id: 'reducedMotion',
      name: 'Reduced Motion',
      description: 'Reduce animations and transitions',
      icon: <Eye className="w-5 h-5" />,
      enabled: settings.reducedMotion,
      toggle: () => toggleFeature('reducedMotion')
    },
    {
      id: 'screenReader',
      name: 'Screen Reader',
      description: 'Enable screen reader announcements',
      icon: <Volume2 className="w-5 h-5" />,
      enabled: settings.screenReader,
      toggle: () => toggleFeature('screenReader')
    },
    {
      id: 'keyboardNavigation',
      name: 'Keyboard Navigation',
      description: 'Enhanced keyboard navigation support',
      icon: <Keyboard className="w-5 h-5" />,
      enabled: settings.keyboardNavigation,
      toggle: () => toggleFeature('keyboardNavigation')
    },
    {
      id: 'focusIndicator',
      name: 'Focus Indicators',
      description: 'Show focus indicators for keyboard users',
      icon: <MousePointer className="w-5 h-5" />,
      enabled: settings.focusIndicator,
      toggle: () => toggleFeature('focusIndicator')
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 left-6 z-50"
        >
          {/* Accessibility Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Accessibility settings"
            aria-expanded={isExpanded}
            aria-controls="accessibility-panel"
          >
            <Accessibility className="w-6 h-6" />
          </motion.button>

          {/* Expanded Accessibility Panel */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-16 left-0 w-96 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                id="accessibility-panel"
                role="dialog"
                aria-labelledby="accessibility-title"
                aria-describedby="accessibility-description"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Accessibility className="w-5 h-5 text-white" />
                      <h3 id="accessibility-title" className="text-white font-semibold">
                        Accessibility Settings
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white hover:text-gray-200 transition-colors"
                      aria-label="Close accessibility panel"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p id="accessibility-description" className="text-sm text-purple-100 mt-1">
                    Customize your experience for better accessibility
                  </p>
                </div>

                {/* Accessibility Features */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                  {accessibilityFeatures.map((feature) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-purple-400">
                            {feature.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {feature.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={feature.toggle}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                            feature.enabled ? 'bg-purple-600' : 'bg-gray-600'
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
                    </motion.div>
                  ))}

                  {/* Keyboard Shortcuts */}
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-medium text-white mb-2">Keyboard Shortcuts</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <div>• <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Alt + Tab</kbd> Skip to main content</div>
                      <div>• <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Escape</kbd> Close panels</div>
                      <div>• <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Tab</kbd> Navigate elements</div>
                    </div>
                  </div>

                  {/* Recent Announcements */}
                  {announcements.length > 0 && (
                    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                      <h4 className="text-sm font-medium text-white mb-2">Recent Updates</h4>
                      <div className="space-y-1">
                        {announcements.map((announcement, index) => (
                          <div key={index} className="text-xs text-gray-400 flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{announcement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccessibilityEnhancer;
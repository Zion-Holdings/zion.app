import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, 
  Contrast, ZoomIn, ZoomOut, CheckCircle, AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  showControls?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  showControls = false
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(showControls);
  const [currentZoom, setCurrentZoom] = useState(100);
  const [accessibilityIssues, setAccessibilityIssues] = useState<string[]>([]);

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }

    // Apply initial settings
    applyAccessibilitySettings(settings);
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply settings
    applyAccessibilitySettings(settings);
  }, [settings]);

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--accent-color', '#fbbf24');
    } else {
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.lineHeight = '1.6';
    } else {
      root.style.fontSize = '';
      root.style.lineHeight = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // High saturation
    if (newSettings.highSaturation) {
      root.style.filter = 'saturate(1.5) contrast(1.2)';
    } else {
      root.style.filter = '';
    }

    // Focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Screen reader optimizations
    if (newSettings.screenReader) {
      document.body.setAttribute('aria-live', 'polite');
      document.body.setAttribute('aria-atomic', 'true');
    } else {
      document.body.removeAttribute('aria-live');
      document.body.removeAttribute('aria-atomic');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const zoomIn = () => {
    const newZoom = Math.min(currentZoom + 25, 200);
    setCurrentZoom(newZoom);
    document.documentElement.style.zoom = `${newZoom}%`;
  };

  const zoomOut = () => {
    const newZoom = Math.max(currentZoom - 25, 50);
    setCurrentZoom(newZoom);
    document.documentElement.style.zoom = `${newZoom}%`;
  };

  const resetZoom = () => {
    setCurrentZoom(100);
    document.documentElement.style.zoom = '100%';
  };

  const scanAccessibility = () => {
    const issues: string[] = [];
    
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
      }
      previousLevel = level;
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label) {
          issues.push(`Form input ${index + 1} missing label`);
        }
      }
    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push(`Potential contrast issue: text color matches background`);
      }
    });

    setAccessibilityIssues(issues);
  };

  const announceToScreenReader = (message: string) => {
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
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-4 right-4 z-50 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl max-w-sm"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Accessibility</h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  ×
                </button>
              </div>

              {/* Zoom Controls */}
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-medium text-sm mb-2">Zoom Controls</h4>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-white text-sm min-w-[3rem] text-center">
                    {currentZoom}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={resetZoom}
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                    aria-label="Reset zoom"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Accessibility Toggles */}
              <div className="space-y-3 mb-4">
                <h4 className="text-white font-medium text-sm">Accessibility Features</h4>
                
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.highContrast 
                      ? 'bg-yellow-600 text-black' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.highContrast}
                >
                  <div className="flex items-center space-x-2">
                    <Contrast className="w-4 h-4" />
                    <span>High Contrast</span>
                  </div>
                  {settings.highContrast ? <CheckCircle className="w-4 h-4" /> : null}
                </button>

                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.largeText 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.largeText}
                >
                  <div className="flex items-center space-x-2">
                    <Type className="w-4 h-4" />
                    <span>Large Text</span>
                  </div>
                  {settings.largeText ? <CheckCircle className="w-4 h-4" /> : null}
                </button>

                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.reducedMotion 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.reducedMotion}
                >
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Reduced Motion</span>
                  </div>
                  {settings.reducedMotion ? <CheckCircle className="w-4 h-4" /> : null}
                </button>

                <button
                  onClick={() => toggleSetting('highSaturation')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.highSaturation 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.highSaturation}
                >
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>High Saturation</span>
                  </div>
                  {settings.highSaturation ? <CheckCircle className="w-4 h-4" /> : null}
                </button>

                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.focusIndicator 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.focusIndicator}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Focus Indicator</span>
                  </div>
                  {settings.focusIndicator ? <CheckCircle className="w-4 h-4" /> : null}
                </button>

                <button
                  onClick={() => toggleSetting('screenReader')}
                  className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                    settings.screenReader 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  aria-pressed={settings.screenReader}
                >
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4" />
                    <span>Screen Reader</span>
                  </div>
                  {settings.screenReader ? <CheckCircle className="w-4 h-4" /> : null}
                </button>
              </div>

              {/* Accessibility Scanner */}
              <div className="mb-4">
                <button
                  onClick={scanAccessibility}
                  className="w-full p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                  aria-label="Scan for accessibility issues"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Scan Accessibility</span>
                </button>
              </div>

              {/* Accessibility Issues */}
              {accessibilityIssues.length > 0 && (
                <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg">
                  <h4 className="text-red-400 font-medium text-sm mb-2">
                    Found {accessibilityIssues.length} issue(s)
                  </h4>
                  <ul className="space-y-1">
                    {accessibilityIssues.slice(0, 3).map((issue, index) => (
                      <li key={index} className="text-red-300 text-xs">
                        • {issue}
                      </li>
                    ))}
                    {accessibilityIssues.length > 3 && (
                      <li className="text-red-300 text-xs">
                        • And {accessibilityIssues.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Keyboard Shortcuts Info */}
              <div className="p-3 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-medium text-sm mb-2">Keyboard Shortcuts</h4>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>• <kbd className="bg-gray-700 px-1 rounded">Tab</kbd> Navigate</div>
                  <div>• <kbd className="bg-gray-700 px-1 rounded">Enter</kbd> Activate</div>
                  <div>• <kbd className="bg-gray-700 px-1 rounded">Escape</kbd> Close</div>
                  <div>• <kbd className="bg-gray-700 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-700 px-1 rounded">+</kbd> Zoom In</div>
                  <div>• <kbd className="bg-gray-700 px-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-700 px-1 rounded">-</kbd> Zoom Out</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="fixed top-4 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Open accessibility panel"
        >
          <Eye className="w-5 h-5" />
        </motion.button>
      )}

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel opened. Use Tab to navigate between options and Enter to activate.
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
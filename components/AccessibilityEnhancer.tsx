import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, Contrast, Eye, Volume2, 
  VolumeX, ZoomIn, ZoomOut, RotateCcw,
  Keyboard, MousePointer, Monitor, Smartphone
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
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  lineSpacing: 'tight' | 'normal' | 'loose';
  cursorSize: 'small' | 'medium' | 'large';
}

const AccessibilityEnhancer: React.FC<{
  showPanel?: boolean;
  autoOptimize?: boolean;
}> = ({ showPanel = true, autoOptimize = true }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highSaturation: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: false,
    colorBlindness: 'none',
    fontSize: 'medium',
    lineSpacing: 'normal',
    cursorSize: 'medium'
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply large text
    if (newSettings.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Apply high saturation
    if (newSettings.highSaturation) {
      document.documentElement.classList.add('high-saturation');
    } else {
      document.documentElement.classList.remove('high-saturation');
    }

    // Apply focus indicator
    if (newSettings.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }

    // Apply color blindness filters
    document.documentElement.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (newSettings.colorBlindness !== 'none') {
      document.documentElement.classList.add(newSettings.colorBlindness);
    }

    // Apply font size
    document.documentElement.classList.remove('text-small', 'text-medium', 'text-large', 'text-extra-large');
    document.documentElement.classList.add(`text-${newSettings.fontSize}`);

    // Apply line spacing
    document.documentElement.classList.remove('line-tight', 'line-normal', 'line-loose');
    document.documentElement.classList.add(`line-${newSettings.lineSpacing}`);

    // Apply cursor size
    document.documentElement.classList.remove('cursor-small', 'cursor-medium', 'cursor-large');
    document.documentElement.classList.add(`cursor-${newSettings.cursorSize}`);

    // Save to localStorage
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
  const handleKeyDown = useCallback((_e: KeyboardEvent) => {
    // Tab navigation detected
    setIsKeyboardUser(true);
  }, []);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
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
      });

      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push(`Heading structure issue: ${heading.tagName} follows ${previousLevel > 0 ? `h${previousLevel}` : 'no heading'}`);
        }
        previousLevel = level;
      });

      // Check form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const id = input.getAttribute('id');
        if (id && !document.querySelector(`label[for="${id}"]`)) {
          issues.push(`Input missing label: ${id}`);
        }
      });

      // Check color contrast
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach(element => {
        const style = window.getComputedStyle(element);
        const color = style.color;
        const backgroundColor = style.backgroundColor;
        // Basic contrast check (simplified)
        if (color && backgroundColor && color === backgroundColor) {
          issues.push(`Potential contrast issue: ${element.tagName}`);
        }
      });

      if (issues.length > 0) {
        announceToScreenReader(`Found ${issues.length} accessibility issues`);
      } else {
        announceToScreenReader('No accessibility issues found');
      }
    };
    
    // Run check after page load
    const timer = setTimeout(checkAccessibility, 2000);
    return () => clearTimeout(timer);
  }, [autoOptimize, announceToScreenReader]);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFocusChange, handleKeyDown]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsPanelOpen(prev => !prev);
      }

      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        applySettings({ ...settings, highContrast: !settings.highContrast });
      }

      // Ctrl/Cmd + Shift + L to toggle large text
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        applySettings({ ...settings, largeText: !settings.largeText });
      }

      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        applySettings({ ...settings, reducedMotion: !settings.reducedMotion });
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [settings, applySettings]);

  // Quick accessibility shortcuts
  const toggleHighContrast = () => {
    applySettings({ ...settings, highContrast: !settings.highContrast });
  };

  const toggleLargeText = () => {
    applySettings({ ...settings, largeText: !settings.largeText });
  };

  const toggleReducedMotion = () => {
    applySettings({ ...settings, reducedMotion: !settings.reducedMotion });
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highSaturation: false,
      focusIndicator: true,
      screenReader: false,
      keyboardNavigation: false,
      colorBlindness: 'none',
      fontSize: 'medium',
      lineSpacing: 'normal',
      cursorSize: 'medium'
    };
    applySettings(defaultSettings);
  };

  if (!showPanel && !isPanelOpen) {
    return null;
  }

  return (
    <>
      {/* Accessibility Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-4 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 w-96 shadow-2xl z-50"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="accessibility-panel-title" className="text-xl font-semibold text-white flex items-center">
                <Accessibility className="w-6 h-6 mr-2 text-cyan-400" />
                Accessibility
              </h2>
              <button
                onClick={() => setIsPanelOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>
            
            <div id="accessibility-panel-description" className="text-sm text-gray-400 mb-6">
              Customize your viewing experience with these accessibility options
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Contrast className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">High Contrast</div>
                    <div className="text-sm text-gray-400">Enhanced color contrast</div>
                  </div>
                </div>
                <button
                  onClick={toggleHighContrast}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.highContrast}
                  aria-label="Toggle high contrast"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Large Text</div>
                    <div className="text-sm text-gray-400">Increased font size</div>
                  </div>
                </div>
                <button
                  onClick={toggleLargeText}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.largeText ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.largeText}
                  aria-label="Toggle large text"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.largeText ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Reduced Motion</div>
                    <div className="text-sm text-gray-400">Minimize animations</div>
                  </div>
                </div>
                <button
                  onClick={toggleReducedMotion}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  aria-label="Toggle reduced motion"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Font Size Control */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <ZoomIn className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Font Size</div>
                    <div className="text-sm text-gray-400">Adjust text size</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {(['small', 'medium', 'large', 'extra-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => applySettings({ ...settings, fontSize: size })}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        settings.fontSize === size
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Blindness Support */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Color Vision</div>
                    <div className="text-sm text-gray-400">Color blindness support</div>
                  </div>
                </div>
                <select
                  value={settings.colorBlindness}
                  onChange={(e) => applySettings({ ...settings, colorBlindness: e.target.value as any })}
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                >
                  <option value="none">Normal Vision</option>
                  <option value="protanopia">Protanopia (Red-Blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                </select>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Keyboard Navigation</div>
                    <div className="text-sm text-gray-400">Enhanced keyboard support</div>
                  </div>
                </div>
                <button
                  onClick={() => applySettings({ ...settings, keyboardNavigation: !settings.keyboardNavigation })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.keyboardNavigation}
                  aria-label="Toggle keyboard navigation"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Default</span>
              </button>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => setShowKeyboardShortcuts(!showKeyboardShortcuts)}
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center space-x-2"
              >
                <Keyboard className="w-4 h-4" />
                <span>Keyboard Shortcuts</span>
              </button>
              
              {showKeyboardShortcuts && (
                <div className="mt-3 p-3 bg-gray-800/50 rounded text-xs text-gray-300">
                  <div className="space-y-1">
                    <div><kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl/Cmd + Shift + A</kbd> Toggle panel</div>
                    <div><kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl/Cmd + Shift + H</kbd> High contrast</div>
                    <div><kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl/Cmd + Shift + L</kbd> Large text</div>
                    <div><kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl/Cmd + Shift + M</kbd> Reduced motion</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Open accessibility panel"
        title="Accessibility Options"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Screen Reader Announcements */}
      <div ref={announcementRef} className="sr-only" aria-live="polite" aria-atomic="true" />
    </>
  );
};

export default AccessibilityEnhancer;
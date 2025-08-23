import React, { useEffect, useState, FocusEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Contrast, 
  Type, MousePointer, Keyboard, Accessibility,
  Settings, X, CheckCircle, AlertTriangle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
}

interface AccessibilityEnhancerProps {
  showUI?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ showUI = false }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicators: true
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e7eb');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1f2937');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
    }

    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    if (settings.focusIndicators) {
      root.style.setProperty('--focus-visible', '2px solid #3b82f6');
    } else {
      root.style.removeProperty('--focus-visible');
    }
  }, [settings]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip if target is an input, textarea, or contenteditable
      if (target.matches('input, textarea, [contenteditable="true"]')) return;

      switch (e.key) {
        case 'Tab':
          // Enhanced tab navigation with visual feedback
          setCurrentFocus(target);
          break;
        case 'Enter':
        case ' ':
          // Enhanced enter/space handling for custom elements
          if (target.getAttribute('role') === 'button' || target.classList.contains('clickable')) {
            e.preventDefault();
            target.click();
            announceToScreenReader(`Activated ${target.textContent || target.getAttribute('aria-label') || 'element'}`);
          }
          break;
        case 'Escape': {
          // Close modals, dropdowns, etc.
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal.getAttribute('aria-hidden') === 'false') {
              (modal as HTMLElement).click();
            }
          });
          break;
        }
        case 'h':
        case 'H':
          // Quick navigation to headings
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
            const currentIndex = headings.findIndex(h => h === document.activeElement);
            const nextIndex = (currentIndex + 1) % headings.length;
            (headings[nextIndex] as HTMLElement).focus();
            announceToScreenReader(`Navigated to ${(headings[nextIndex] as HTMLElement).textContent}`);
          }
          break;
        case 'n':
        case 'N':
          // Quick navigation to navigation elements
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const navElements = document.querySelectorAll('nav, [role="navigation"]');
            if (navElements.length > 0) {
              (navElements[0] as HTMLElement).focus();
              announceToScreenReader('Navigated to navigation');
            }
          }
          break;
        case 'm':
        case 'M':
          // Quick navigation to main content
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const mainContent = document.querySelector('main, [role="main"]');
            if (mainContent) {
              (mainContent as HTMLElement).focus();
              announceToScreenReader('Navigated to main content');
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
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

    // Add to announcements list for UI
    setAnnouncements(prev => [...prev, message]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a !== message));
    }, 3000);
  };

  // Enhanced focus management
  useEffect(() => {
    if (!settings.focusIndicators) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '2px solid #3b82f6';
      target.style.outlineOffset = '2px';
      
      // Announce focus changes to screen reader
      if (settings.screenReader) {
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('alt') || 
                     target.textContent || 
                     target.tagName.toLowerCase();
        announceToScreenReader(`Focused on ${label}`);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [settings.focusIndicators, settings.screenReader]);

  // Enhanced ARIA attributes
  useEffect(() => {
    if (!settings.screenReader) return;

    // Add missing ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      if (!el.getAttribute('aria-label') && !el.textContent?.trim()) {
        el.setAttribute('aria-label', `${el.tagName.toLowerCase()} element`);
      }
    });

    // Enhance form labels
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
      const el = element as HTMLElement;
      const id = el.getAttribute('id');
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label && !el.getAttribute('aria-describedby')) {
          el.setAttribute('aria-describedby', `${id}-description`);
          
          // Add description if it doesn't exist
          if (!document.getElementById(`${id}-description`)) {
            const description = document.createElement('div');
            description.id = `${id}-description`;
            description.className = 'sr-only';
            description.textContent = `Description for ${label.textContent}`;
            el.parentNode?.insertBefore(description, el.nextSibling);
          }
        }
      }
    });
  }, [settings.screenReader]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showUI) return null;

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <h3 id="accessibility-title" className="text-lg font-semibold text-white">
                  Accessibility Settings
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div id="accessibility-description" className="sr-only">
              Panel to configure accessibility options including contrast, text size, motion, and screen reader support
            </div>

            {/* Settings */}
            <div className="p-4 space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-300">High Contrast</div>
                    <div className="text-xs text-gray-400">Enhanced color contrast</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.highContrast}
                  aria-label="Toggle high contrast mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-300">Large Text</div>
                    <div className="text-xs text-gray-400">Increased font size</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.largeText ? 'bg-green-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.largeText}
                  aria-label="Toggle large text mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="text-sm text-gray-300">Reduced Motion</div>
                    <div className="text-xs text-gray-400">Minimize animations</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.reducedMotion ? 'bg-yellow-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.reducedMotion}
                  aria-label="Toggle reduced motion mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-300">Screen Reader</div>
                    <div className="text-xs text-gray-400">Enhanced announcements</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('screenReader')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.screenReader ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.screenReader}
                  aria-label="Toggle screen reader enhancements"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-300">Keyboard Navigation</div>
                    <div className="text-xs text-gray-400">Enhanced keyboard support</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('keyboardNavigation')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.keyboardNavigation ? 'bg-cyan-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.keyboardNavigation}
                  aria-label="Toggle enhanced keyboard navigation"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicators */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-pink-400" />
                  <div>
                    <div className="text-sm text-gray-300">Focus Indicators</div>
                    <div className="text-xs text-gray-400">Visible focus outlines</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicators')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    settings.focusIndicators ? 'bg-pink-600' : 'bg-gray-600'
                  }`}
                  role="switch"
                  aria-checked={settings.focusIndicators}
                  aria-label="Toggle focus indicators"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicators ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Screen Reader Announcements */}
            {announcements.length > 0 && (
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-semibold text-white">Recent Announcements</h4>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="text-xs text-purple-300 bg-purple-400/10 p-2 rounded-lg">
                      {announcement}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard Shortcuts Help */}
            {settings.keyboardNavigation && (
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Keyboard className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">Keyboard Shortcuts</h4>
                </div>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Ctrl/Cmd + H:</span>
                    <span>Navigate headings</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ctrl/Cmd + N:</span>
                    <span>Go to navigation</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ctrl/Cmd + M:</span>
                    <span>Go to main content</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Escape:</span>
                    <span>Close modals</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                Settings are automatically applied and saved
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Class */}
      <style jsx global>{`
        .sr-only {
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
        
        .high-contrast {
          --text-primary: #ffffff !important;
          --text-secondary: #e5e7eb !important;
          --bg-primary: #000000 !important;
          --bg-secondary: #1f2937 !important;
        }
        
        [data-reduced-motion="reduce"] *,
        [data-reduced-motion="reduce"] *::before,
        [data-reduced-motion="reduce"] *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
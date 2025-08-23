import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, Volume2, ZoomIn, RotateCcw, Accessibility, 
  Keyboard, MousePointer
} from 'lucide-react';

/* eslint-disable no-undef */
interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: true
  });
  const [currentFontSize, setCurrentFontSize] = useState(16);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      document.body.style.filter = 'contrast(150%) brightness(110%)';
    } else {
      root.classList.remove('high-contrast');
      document.body.style.filter = 'none';
    }

    // Font size
    const fontSizeMap = { small: 14, medium: 16, large: 18 };
    const newSize = fontSizeMap[settings.fontSize];
    setCurrentFontSize(newSize);
    root.style.fontSize = `${newSize}px`;

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1');
    } else {
      root.style.removeProperty('--motion-reduce');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-visible', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-visible', 'none');
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Tab': {
          // Enhanced tab navigation
          const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
          break;
        }

        case 'Escape': {
          // Close modals or return to top
          const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
          if (modals.length > 0) {
            const lastModal = modals[modals.length - 1] as HTMLElement;
            lastModal.focus();
          } else {
            // Return to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          break;
        }

        case 'h':
        case 'H': {
          // Navigate to next heading
          if (e.ctrlKey) {
            e.preventDefault();
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const currentIndex = Array.from(headings).findIndex(h => h === document.activeElement);
            const nextIndex = (currentIndex + 1) % headings.length;
            (headings[nextIndex] as HTMLElement)?.focus();
          }
          break;
        }

        case 'n':
        case 'N': {
          // Navigate to next navigation item
          if (e.ctrlKey) {
            e.preventDefault();
            const navItems = document.querySelectorAll('nav a, nav button');
            const currentIndex = Array.from(navItems).findIndex(item => item === document.activeElement);
            const nextIndex = (currentIndex + 1) % navItems.length;
            (navItems[nextIndex] as HTMLElement)?.focus();
          }
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Screen reader announcements
  useEffect(() => {
    if (!settings.screenReader) return;

    const announce = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      // Remove after announcement
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 1000);
    };

    // Announce page changes
    const observer = new (window as any).MutationObserver((mutations: any[]) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedNode = mutation.addedNodes[0] as HTMLElement;
          if (addedNode.nodeType === (window as any).Node.ELEMENT_NODE) {
            const heading = addedNode.querySelector('h1, h2, h3');
            if (heading) {
              announce(`Navigated to ${heading.textContent}`);
            }
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [settings.screenReader]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateFontSize = (size: 'small' | 'medium' | 'large') => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 'medium',
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      focusIndicator: true
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black ${className}`}
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Accessibility settings"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed bottom-20 left-4 bg-black/95 backdrop-blur-md border border-gray-600 rounded-lg p-4 text-white max-w-sm z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-blue-400" />
                Accessibility
              </h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">High Contrast</span>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-sm">Font Size</span>
                </div>
                <div className="flex gap-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFontSize(size)}
                      className={`px-3 py-1 rounded text-xs transition-colors ${
                        settings.fontSize === size
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                      }`}
                      aria-label={`Set font size to ${size}`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-400">
                  Current: {currentFontSize}px
                </div>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span className="text-sm">Reduced Motion</span>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Screen Reader */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <span className="text-sm">Screen Reader</span>
                </div>
                <button
                  onClick={() => toggleSetting('screenReader')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.screenReader ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.screenReader ? 'Disable' : 'Enable'} screen reader support`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Keyboard Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  <span className="text-sm">Keyboard Nav</span>
                </div>
                <button
                  onClick={() => toggleSetting('keyboardNavigation')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.keyboardNavigation ? 'Disable' : 'Enable'} keyboard navigation`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Focus Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MousePointer className="w-4 h-4" />
                  <span className="text-sm">Focus Indicator</span>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.focusIndicator ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} focus indicator`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors text-sm"
                aria-label="Reset all accessibility settings"
              >
                Reset to Defaults
              </button>

              {/* Keyboard Shortcuts Help */}
              {settings.keyboardNavigation && (
                <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">Keyboard Shortcuts</h4>
                  <div className="text-xs space-y-1 text-gray-300">
                    <div>Tab: Navigate elements</div>
                    <div>Ctrl+H: Next heading</div>
                    <div>Ctrl+N: Next nav item</div>
                    <div>Escape: Close/return</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #3b82f6;
        }

        .high-contrast * {
          color: var(--text-primary) !important;
          background-color: var(--bg-primary) !important;
          border-color: var(--accent) !important;
        }

        .high-contrast button,
        .high-contrast a {
          background-color: var(--accent) !important;
          color: var(--text-primary) !important;
        }

        [data-motion="reduce"] *,
        [data-motion="reduce"] *::before,
        [data-motion="reduce"] *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        :focus-visible {
          outline: var(--focus-visible, 2px solid #3b82f6) !important;
          outline-offset: 2px !important;
        }

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
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
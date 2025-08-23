import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableLargeText?: boolean;
  enableFocusIndicators?: boolean;
  showAccessibilityPanel?: boolean;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicators: boolean;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export default function AccessibilityEnhancer({
  children,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableLargeText = true,
  enableFocusIndicators = true,
  showAccessibilityPanel = false
}: AccessibilityEnhancerProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusIndicators: true,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [announcement, setAnnouncement] = useState<string>('');

  // Load saved accessibility settings
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

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
    }

    // Large text
    if (settings.largeText) {
      root.style.setProperty('--font-size-base', '20px');
      root.style.setProperty('--line-height-base', '1.6');
    } else {
      root.style.setProperty('--font-size-base', '16px');
      root.style.setProperty('--line-height-base', '1.5');
    }

    // Focus indicators
    if (settings.focusIndicators) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Custom font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    root.style.setProperty('--line-height', settings.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
  }, [settings]);

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 3000);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsPanelOpen(prev => !prev);
        announceChange('Accessibility panel toggled');
      }

      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
        announceChange(`High contrast ${!settings.highContrast ? 'enabled' : 'disabled'}`);
      }

      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
        announceChange(`Reduced motion ${!settings.reducedMotion ? 'enabled' : 'disabled'}`);
      }

      // Ctrl/Cmd + Shift + L to toggle large text
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'L') {
        event.preventDefault();
        setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
        announceChange(`Large text ${!settings.largeText ? 'enabled' : 'disabled'}`);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.highContrast, settings.reducedMotion, settings.largeText, announceChange]);

  // Focus management for accessibility
  useEffect(() => {
    if (isPanelOpen) {
      const firstFocusable = document.querySelector('.accessibility-panel button') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isPanelOpen]);

  // Trap focus in accessibility panel when open
  useEffect(() => {
    if (!isPanelOpen) return;

    const panel = document.querySelector('.accessibility-panel');
    if (!panel) return;

    const focusableElements = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isPanelOpen]);

  return (
    <>
      {/* Accessibility Panel Toggle Button */}
      {showAccessibilityPanel && (
        <button
          onClick={() => setIsPanelOpen(prev => !prev)}
          className="fixed top-4 right-4 z-50 p-3 bg-cyan-500 text-white rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-200"
          aria-label="Open accessibility settings"
          aria-expanded={isPanelOpen}
          aria-controls="accessibility-panel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="accessibility-panel fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50 z-40 overflow-y-auto"
            role="dialog"
            aria-label="Accessibility settings"
            aria-modal="true"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Accessibility Settings</h2>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {/* High Contrast */}
                {enableHighContrast && (
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={(e) => {
                          setSettings(prev => ({ ...prev, highContrast: e.target.checked }));
                          announceChange(`High contrast ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-white font-medium">High Contrast</span>
                    </label>
                    <p className="text-sm text-gray-400">Increase contrast for better visibility</p>
                  </div>
                )}

                {/* Reduced Motion */}
                {enableReducedMotion && (
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={(e) => {
                          setSettings(prev => ({ ...prev, reducedMotion: e.target.checked }));
                          announceChange(`Reduced motion ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-white font-medium">Reduced Motion</span>
                    </label>
                    <p className="text-sm text-gray-400">Reduce animations and transitions</p>
                  </div>
                )}

                {/* Large Text */}
                {enableLargeText && (
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={(e) => {
                          setSettings(prev => ({ ...prev, largeText: e.target.checked }));
                          announceChange(`Large text ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-white font-medium">Large Text</span>
                    </label>
                    <p className="text-sm text-gray-400">Increase text size for better readability</p>
                  </div>
                )}

                {/* Focus Indicators */}
                {enableFocusIndicators && (
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.focusIndicators}
                        onChange={(e) => {
                          setSettings(prev => ({ ...prev, focusIndicators: e.target.checked }));
                          announceChange(`Focus indicators ${e.target.checked ? 'enabled' : 'disabled'}`);
                        }}
                        className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-white font-medium">Focus Indicators</span>
                    </label>
                    <p className="text-sm text-gray-400">Show focus indicators for keyboard navigation</p>
                  </div>
                )}

                {/* Font Size Slider */}
                <div className="space-y-3">
                  <label className="block text-white font-medium">
                    Font Size: {settings.fontSize}px
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={settings.fontSize}
                    onChange={(e) => {
                      setSettings(prev => ({ ...prev, fontSize: parseInt(e.target.value) }));
                      announceChange(`Font size set to ${e.target.value} pixels`);
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <p className="text-sm text-gray-400">Adjust text size to your preference</p>
                </div>

                {/* Line Height Slider */}
                <div className="space-y-3">
                  <label className="block text-white font-medium">
                    Line Height: {settings.lineHeight.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1.2"
                    max="2.0"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(e) => {
                      setSettings(prev => ({ ...prev, lineHeight: parseFloat(e.target.value) }));
                      announceChange(`Line height set to ${e.target.value}`);
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <p className="text-sm text-gray-400">Adjust spacing between lines</p>
                </div>

                {/* Keyboard Shortcuts Help */}
                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-3">Keyboard Shortcuts</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div><kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl/Cmd + Shift + A</kbd> Toggle panel</div>
                    <div><kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl/Cmd + Shift + H</kbd> High contrast</div>
                    <div><kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl/Cmd + Shift + M</kbd> Reduced motion</div>
                    <div><kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl/Cmd + Shift + L</kbd> Large text</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Announcements */}
      <div
        id="accessibility-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </div>

      {/* Main Content */}
      <div className={settings.reducedMotion ? 'reduced-motion' : ''}>
        {children}
      </div>

      {/* Focus Trap Overlay */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setIsPanelOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

// Accessibility utilities
export const accessibilityUtils = {
  // Announce to screen readers
  announce: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Focus management
  focusFirstElement: (container: HTMLElement) => {
    const focusable = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    
    if (focusable) {
      focusable.focus();
    }
  },

  // Trap focus
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    
    return () => document.removeEventListener('keydown', handleTabKey);
  },

  // Skip link functionality
  createSkipLink: (targetId: string, text: string = 'Skip to main content') => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400';
    
    return skipLink;
  }
};
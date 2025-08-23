import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, X, Eye, EyeOff, Volume2, VolumeX, Type, Contrast, 
  Zap, Sun, Moon, Monitor, Smartphone, Tablet, RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  audioMuted: boolean;
  focusIndicator: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium',
    audioMuted: false,
    focusIndicator: false
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply font size
    root.style.setProperty('--font-size-multiplier', 
      settings.fontSize === 'small' ? '0.875' : 
      settings.fontSize === 'large' ? '1.125' : '1'
    );
    
    // Apply focus indicator
    if (settings.focusIndicator) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      fontSize: 'medium',
      audioMuted: false,
      focusIndicator: false
    });
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }
      
      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        updateSetting('reducedMotion', !settings.reducedMotion);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.highContrast, settings.reducedMotion, updateSetting]);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                  Accessibility
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Contrast className="w-5 h-5 mr-3 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">High Contrast</div>
                      <div className="text-gray-400 text-sm">Enhanced color contrast</div>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting('highContrast', !settings.highContrast)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.highContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.highContrast ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Reduced Motion</div>
                      <div className="text-gray-400 text-sm">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.reducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.reducedMotion ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Font Size */}
                <div>
                  <div className="flex items-center mb-3">
                    <Type className="w-5 h-5 mr-3 text-cyan-400" />
                    <div className="text-white font-medium">Font Size</div>
                  </div>
                  <div className="flex gap-2">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => updateSetting('fontSize', size)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          settings.fontSize === size
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                        aria-label={`Set font size to ${size}`}
                      >
                        {size === 'small' && <span className="text-xs">A</span>}
                        {size === 'medium' && <span className="text-base">A</span>}
                        {size === 'large' && <span className="text-lg">A</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Audio Mute */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {settings.audioMuted ? (
                      <VolumeX className="w-5 h-5 mr-3 text-cyan-400" />
                    ) : (
                      <Volume2 className="w-5 h-5 mr-3 text-cyan-400" />
                    )}
                    <div>
                      <div className="text-white font-medium">Audio</div>
                      <div className="text-gray-400 text-sm">
                        {settings.audioMuted ? 'Muted' : 'Enabled'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting('audioMuted', !settings.audioMuted)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.audioMuted ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.audioMuted ? 'Enable' : 'Mute'} audio`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.audioMuted ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>

                {/* Enhanced Focus */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-3 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">Enhanced Focus</div>
                      <div className="text-gray-400 text-sm">Better focus indicators</div>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${settings.focusIndicator ? 'Disable' : 'Enable'} enhanced focus`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                      animate={{ x: settings.focusIndicator ? 24 : 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center"
                  aria-label="Reset all accessibility settings to default"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset to Default
                </button>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                <h3 className="text-white font-medium mb-3">Keyboard Shortcuts</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + Shift + A</kbd> Toggle panel</div>
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + Shift + H</kbd> High contrast</div>
                  <div><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl/Cmd + Shift + M</kbd> Reduced motion</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for accessibility features */}
      <style jsx global>{`
        :root {
          --font-size-multiplier: 1;
        }
        
        .high-contrast {
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --bg-primary: #000000;
          --bg-secondary: #1f2937;
          --accent: #06b6d4;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .enhanced-focus *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        body {
          font-size: calc(1rem * var(--font-size-multiplier));
        }
      });

      // Add labels to links without text
      document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])').forEach(link => {
        if (!link.textContent?.trim()) {
          const icon = link.querySelector('svg, img');
          if (icon) {
            const iconText = icon.getAttribute('aria-label') || icon.getAttribute('alt') || 'Link';
            link.setAttribute('aria-label', iconText);
          }
        }
      });

      // Add role to navigation
      document.querySelectorAll('nav').forEach(nav => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
      });

      // Add role to main content
      document.querySelectorAll('main').forEach(main => {
        if (!main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }
      });

      // Add role to footer
      document.querySelectorAll('footer').forEach(footer => {
        if (!footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      });
    };

    enhanceARIA();

    // Re-run ARIA enhancement when DOM changes
    const observer = new MutationObserver(enhanceARIA);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enabled]);

  // Announce page changes to screen readers
  useEffect(() => {
    if (!enabled) return;

    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${document.title}`;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce on route change
    const handleRouteChange = () => {
      setTimeout(announcePageChange, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for Next.js route changes
    if (typeof window !== 'undefined' && (window as any).__NEXT_DATA__) {
      const originalPushState = history.pushState;
      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        handleRouteChange();
      };
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enabled]);

  // Auto-hide controls
  useEffect(() => {
    if (autoHide && showControls) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, showControls]);

  // Don't render controls in production unless explicitly enabled
  if (!enabled || (!showControls && process.env.NODE_ENV === 'production')) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg backdrop-blur-sm border border-gray-700 max-w-sm z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle accessibility controls"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
    </>
  );
};

// Skip Link Component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
  >
    {children}
  </a>
);

// Screen Reader Only Text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Export the main provider component as default
export default AccessibilityProvider;
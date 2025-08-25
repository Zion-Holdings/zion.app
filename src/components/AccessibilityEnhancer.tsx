import React, { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Eye, EyeOff, Keyboard, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  soundEnabled: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    soundEnabled: true,
    keyboardNavigation: false,
    focusIndicator: true
  });

  const [showPanel, setShowPanel] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    if (settings.focusIndicator) {
      root.classList.add('focus-indicator');
    } else {
      root.classList.remove('focus-indicator');
    }
  }, [settings]);

  // Keyboard navigation support
  useEffect(() => {
    if (!settings.keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          break;
          
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          (focusableElements[prevIndex] as HTMLElement)?.focus();
          break;
          
        case 'Enter':
        case ' ':
          if (document.activeElement instanceof HTMLElement) {
            e.preventDefault();
            document.activeElement.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [settings.keyboardNavigation]);

  // Focus tracking for screen readers
  useEffect(() => {
    const handleFocusChange = () => {
      setCurrentFocus(document.activeElement as HTMLElement);
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, []);

  // Announce focus changes to screen readers
  useEffect(() => {
    if (currentFocus && settings.keyboardNavigation) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Focused: ${currentFocus.textContent || currentFocus.getAttribute('aria-label') || 'Element'}`;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [currentFocus, settings.keyboardNavigation]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetSettings = () => {
    setSettings({
      highContrast: false,
      reducedMotion: false,
      largeText: false,
      soundEnabled: true,
      keyboardNavigation: false,
      focusIndicator: true
    });
  };

  return (
    <>
      {children}
      
      {/* Accessibility Panel Toggle */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
        aria-label="Accessibility Settings"
        aria-expanded={showPanel}
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-zion-blue-dark border border-zion-cyan/30 rounded-xl shadow-2xl backdrop-blur-md"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-zion-cyan" />
                Accessibility Settings
              </h3>

              <div className="space-y-4">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    High Contrast
                  </label>
                  <Button
                    variant={settings.highContrast ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('highContrast')}
                    className={settings.highContrast ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.highContrast ? 'On' : 'Off'}
                  </Button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    Reduced Motion
                  </label>
                  <Button
                    variant={settings.reducedMotion ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('reducedMotion')}
                    className={settings.reducedMotion ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.reducedMotion ? 'On' : 'Off'}
                  </Button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    Large Text
                  </label>
                  <Button
                    variant={settings.largeText ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('largeText')}
                    className={settings.largeText ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.largeText ? 'On' : 'Off'}
                  </Button>
                </div>

                {/* Sound */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    Sound Effects
                  </label>
                  <Button
                    variant={settings.soundEnabled ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('soundEnabled')}
                    className={settings.soundEnabled ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Keyboard Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    Keyboard Navigation
                  </label>
                  <Button
                    variant={settings.keyboardNavigation ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('keyboardNavigation')}
                    className={settings.keyboardNavigation ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.keyboardNavigation ? <Keyboard className="w-4 h-4" /> : <MousePointer className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <label className="text-zion-slate-light text-sm">
                    Focus Indicator
                  </label>
                  <Button
                    variant={settings.focusIndicator ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleSetting('focusIndicator')}
                    className={settings.focusIndicator ? 'bg-zion-cyan' : 'border-zion-cyan/30 text-zion-cyan'}
                  >
                    {settings.focusIndicator ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-6 pt-4 border-t border-zion-blue-light/20">
                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                >
                  Reset to Defaults
                </Button>
              </div>

              {/* Keyboard Shortcuts Help */}
              {settings.keyboardNavigation && (
                <div className="mt-4 p-3 bg-zion-blue-light/10 rounded-lg border border-zion-cyan/20">
                  <h4 className="text-sm font-medium text-white mb-2">Keyboard Shortcuts</h4>
                  <div className="text-xs text-zion-slate-light space-y-1">
                    <div>Arrow Keys: Navigate between elements</div>
                    <div>Enter/Space: Activate element</div>
                    <div>Tab: Normal tab navigation</div>
                    <div>Escape: Close dialogs</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Indicator */}
      {settings.focusIndicator && currentFocus && (
        <div
          className="fixed pointer-events-none z-40 border-2 border-zion-cyan rounded transition-all duration-200"
          style={{
            top: currentFocus.offsetTop - 2,
            left: currentFocus.offsetLeft - 2,
            width: currentFocus.offsetWidth + 4,
            height: currentFocus.offsetHeight + 4,
          }}
        />
      )}
    </>
  );
};

// Screen reader only text
export const SrOnly: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Skip to main content link
export const SkipToMainContent: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-white px-4 py-2 rounded-lg z-50"
  >
    Skip to main content
  </a>
);

// Focus trap for modals
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive]);
};
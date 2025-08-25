import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  Sun, 
  Moon, 
  Monitor,
  Accessibility,
  Settings,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Accessibility Context
interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  setColorBlindMode: (mode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

// Accessibility Provider Component
export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [colorBlindMode, setColorBlindMode] = useState<'none' | 'protanopia' | 'deuteranopia' | 'tritanopia'>('none');

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setHighContrast(settings.highContrast || false);
      setReducedMotion(settings.reducedMotion || false);
      setFontSize(settings.fontSize || 'medium');
      setColorBlindMode(settings.colorBlindMode || 'none');
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    const settings = {
      highContrast,
      reducedMotion,
      fontSize,
      colorBlindMode
    };
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
  }, [highContrast, reducedMotion, fontSize, colorBlindMode]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Font size
    root.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';

    // Color blind mode
    root.style.filter = colorBlindMode === 'none' ? 'none' : 
      colorBlindMode === 'protanopia' ? 'url(#protanopia)' :
      colorBlindMode === 'deuteranopia' ? 'url(#deuteranopia)' :
      'url(#tritanopia)';
  }, [highContrast, reducedMotion, fontSize, colorBlindMode]);

  const toggleHighContrast = () => setHighContrast(!highContrast);
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);

  const value: AccessibilityContextType = {
    highContrast,
    reducedMotion,
    fontSize,
    colorBlindMode,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    setColorBlindMode
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Accessibility Panel Component
export const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    highContrast,
    reducedMotion,
    fontSize,
    colorBlindMode,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    setColorBlindMode
  } = useAccessibility();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to open accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
      
      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }
      
      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        toggleReducedMotion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleHighContrast, toggleReducedMotion]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover:shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300"
        aria-label="Open Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-zion-cyan" />
                  Accessibility Settings
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">High Contrast</h3>
                    <p className="text-sm text-zion-slate-light">Increase contrast for better visibility</p>
                  </div>
                  <Button
                    variant={highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={toggleHighContrast}
                    className={highContrast ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                  >
                    {highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">Reduced Motion</h3>
                    <p className="text-sm text-zion-slate-light">Minimize animations and transitions</p>
                  </div>
                  <Button
                    variant={reducedMotion ? "default" : "outline"}
                    size="sm"
                    onClick={toggleReducedMotion}
                    className={reducedMotion ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                  >
                    {reducedMotion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Font Size */}
                <div>
                  <h3 className="text-white font-medium mb-3">Font Size</h3>
                  <div className="flex gap-2">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <Button
                        key={size}
                        variant={fontSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFontSize(size)}
                        className={fontSize === size ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Color Blind Mode */}
                <div>
                  <h3 className="text-white font-medium mb-3">Color Blind Support</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {(['none', 'protanopia', 'deuteranopia', 'tritanopia'] as const).map((mode) => (
                      <Button
                        key={mode}
                        variant={colorBlindMode === mode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setColorBlindMode(mode)}
                        className={colorBlindMode === mode ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}
                      >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-zion-cyan" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-zion-slate-light">
                    <div className="flex justify-between">
                      <span>Open Panel:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>High Contrast:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Reduced Motion:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + M</kbd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                <p className="text-xs text-zion-slate-light text-center">
                  These settings are saved locally and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Skip to Content Link
export const SkipToContent: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hover:bg-zion-cyan-light transition-colors duration-300"
  >
    Skip to main content
  </a>
);

// Focus Trap Hook
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const container = document.activeElement?.closest('[data-focus-trap]');
    
    if (!container) return;

    const focusableContent = container.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0] as HTMLElement;
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isActive]);
};

// Screen Reader Only Text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

export default AccessibilityPanel;
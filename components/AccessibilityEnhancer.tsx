import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  Eye, 
  Contrast, 
  Type, 
  Keyboard,
  HelpCircle,
  X,
  Accessibility,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  fontSize: number;
  zoomLevel: number;
}

const AccessibilityEnhancer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    fontSize: 16,
    zoomLevel: 100
  });

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
        applySettings({ ...settings, ...parsed });
      } catch (error) {
        // Silently handle parsing errors
      }
    }
  }, []);

  // Apply accessibility settings
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // High contrast
    if (newSettings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e0e0e0');
      root.style.setProperty('--accent-color', '#00ffff');
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (newSettings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.classList.add('reduced-motion');
    } else {
      root.style.removeProperty('--animation-duration');
      root.classList.remove('reduced-motion');
    }

    // Font size adjustment
    root.style.setProperty('--font-size', `${newSettings.fontSize}px`);
    
    // Zoom level
    root.style.setProperty('--zoom-level', `${newSettings.zoomLevel}%`);
  }, []);

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    setSettings(newSettings);
    applySettings(newSettings);
  }, [applySettings]);

  // Toggle setting
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Update numeric setting
  const updateNumericSetting = useCallback((key: 'fontSize' | 'zoomLevel', value: number) => {
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    const defaultSettings: AccessibilitySettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false,
      fontSize: 16,
      zoomLevel: 100
    };
    saveSettings(defaultSettings);
  }, [saveSettings]);

  // Keyboard navigation handler
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
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
          
          if (e.shiftKey) {
            // Shift + Tab: go backwards
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
            (focusableElements[prevIndex] as HTMLElement)?.focus();
          } else {
            // Tab: go forwards
            const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
            (focusableElements[nextIndex] as HTMLElement)?.focus();
          }
          e.preventDefault();
          break;
        }
          
        case 'Escape': {
          // Close modals, dropdowns, etc.
          const activeModals = document.querySelectorAll('[data-modal="true"]');
          activeModals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
        }
          
        case 'h':
        case 'H': {
          // Go to home page
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/';
          }
          break;
        }
          
        case 's':
        case 'S': {
          // Go to services page
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/services';
          }
          break;
        }
          
        case 'c':
        case 'C': {
          // Go to contact page
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/contact';
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

    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce page changes
    const observer = new (window as any).MutationObserver((mutations: any[]) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const newNodes = Array.from(mutation.addedNodes);
          newNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.tagName === 'H1') {
              announceToScreenReader(`Page loaded: ${node.textContent}`);
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [settings.screenReader]);

  // Apply settings on mount
  useEffect(() => {
    applySettings(settings);
  }, [applySettings, settings]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              id="accessibility-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-6 z-50 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6"
              role="dialog"
              aria-labelledby="accessibility-title"
              aria-describedby="accessibility-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 id="accessibility-title" className="text-xl font-bold text-white">
                    Accessibility Settings
                  </h2>
                  <p id="accessibility-description" className="text-sm text-white/70">
                    Customize your experience for better accessibility
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                  aria-label="Close accessibility panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* Visual Settings */}
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-3">Visual</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.highContrast}
                        onChange={() => toggleSetting('highContrast')}
                        className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <Contrast className="w-4 h-4 text-white/70" />
                      <span className="text-sm text-white">High Contrast</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.largeText}
                        onChange={() => toggleSetting('largeText')}
                        className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <Type className="w-4 h-4 text-white/70" />
                      <span className="text-sm text-white">Large Text</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.reducedMotion}
                        onChange={() => toggleSetting('reducedMotion')}
                        className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <Eye className="w-4 h-4 text-white/70" />
                      <span className="text-sm text-white">Reduced Motion</span>
                    </label>
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-3">
                    Font Size: {settings.fontSize}px
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateNumericSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                      aria-label="Decrease font size"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      step="2"
                      value={settings.fontSize}
                      onChange={(e) => updateNumericSetting('fontSize', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <button
                      onClick={() => updateNumericSetting('fontSize', Math.min(24, settings.fontSize + 2))}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                      aria-label="Increase font size"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Zoom Level */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-3">
                    Zoom Level: {settings.zoomLevel}%
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateNumericSetting('zoomLevel', Math.max(50, settings.zoomLevel - 25))}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <input
                      type="range"
                      min="50"
                      max="200"
                      step="25"
                      value={settings.zoomLevel}
                      onChange={(e) => updateNumericSetting('zoomLevel', parseInt(e.target.value))}
                      className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <button
                      onClick={() => updateNumericSetting('zoomLevel', Math.min(200, settings.zoomLevel + 25))}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/70 hover:text-white"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Navigation Settings */}
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-3">Navigation</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.keyboardNavigation}
                        onChange={() => toggleSetting('keyboardNavigation')}
                        className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <Keyboard className="w-4 h-4 text-white/70" />
                      <span className="text-sm text-white">Enhanced Keyboard Navigation</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.screenReader}
                        onChange={() => toggleSetting('screenReader')}
                        className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <Volume2 className="w-4 h-4 text-white/70" />
                      <span className="text-sm text-white">Screen Reader Support</span>
                    </label>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset to Defaults</span>
                </button>

                {/* Help */}
                <div className="text-center">
                  <a
                    href="/accessibility-help"
                    className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Accessibility Help</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
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
          --bg-primary: #000000 !important;
          --bg-secondary: #1a1a1a !important;
          --text-primary: #ffffff !important;
          --text-secondary: #e0e0e0 !important;
          --accent-color: #00ffff !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #8b5cf6);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #8b5cf6);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
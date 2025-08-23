import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut,
  Keyboard,
  Accessibility,
  HelpCircle
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  onAccessibilityChange?: (settings: AccessibilitySettings) => void;
}

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  onAccessibilityChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false,
    focusIndicator: false
  });

  const [currentZoom, setCurrentZoom] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Load saved accessibility settings from localStorage
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        console.warn('Failed to parse saved accessibility settings:', error);
      }
    }

    // Check for system preferences
    checkSystemPreferences();
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
    
    // Apply settings
    applyAccessibilitySettings(settings);
    
    // Notify parent component
    if (onAccessibilityChange) {
      onAccessibilityChange(settings);
    }
  }, [settings, onAccessibilityChange]);

  const checkSystemPreferences = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    if (prefersHighContrast) {
      setSettings(prev => ({ ...prev, highContrast: true }));
    }
  };

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply large text
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleZoom = (direction: 'in' | 'out') => {
    const newZoom = direction === 'in' ? currentZoom + 25 : currentZoom - 25;
    if (newZoom >= 50 && newZoom <= 200) {
      setCurrentZoom(newZoom);
      document.documentElement.style.zoom = `${newZoom}%`;
    }
  };

  const resetZoom = () => {
    setCurrentZoom(100);
    document.documentElement.style.zoom = '100%';
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Implement audio muting logic here
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

  const handleKeyboardShortcuts = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case '=':
          event.preventDefault();
          handleZoom('in');
          announceToScreenReader('Zoomed in');
          break;
        case '-':
          event.preventDefault();
          handleZoom('out');
          announceToScreenReader('Zoomed out');
          break;
        case '0':
          event.preventDefault();
          resetZoom();
          announceToScreenReader('Zoom reset');
          break;
        case 'm':
          event.preventDefault();
          toggleMute();
          announceToScreenReader(isMuted ? 'Audio unmuted' : 'Audio muted');
          break;
        case 'h':
          event.preventDefault();
          toggleSetting('highContrast');
          announceToScreenReader(settings.highContrast ? 'High contrast disabled' : 'High contrast enabled');
          break;
        case 'l':
          event.preventDefault();
          toggleSetting('largeText');
          announceToScreenReader(settings.largeText ? 'Large text disabled' : 'Large text enabled');
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [settings, isMuted]);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility menu"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Accessibility className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            aria-describedby="accessibility-panel-description"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="accessibility-panel-title" className="text-xl font-bold text-white">
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close accessibility menu"
              >
                <span className="sr-only">Close</span>
                ×
              </button>
            </div>
            
            <p id="accessibility-panel-description" className="text-gray-300 text-sm mb-6">
              Customize your experience with these accessibility features. Use keyboard shortcuts for quick access.
            </p>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => handleZoom('in')}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Zoom in (Ctrl/Cmd + =)"
              >
                <ZoomIn className="w-4 h-4" />
                Zoom In
              </button>
              <button
                onClick={() => handleZoom('out')}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Zoom out (Ctrl/Cmd + -)"
              >
                <ZoomOut className="w-4 h-4" />
                Zoom Out
              </button>
              <button
                onClick={resetZoom}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Reset zoom (Ctrl/Cmd + 0)"
              >
                <Type className="w-4 h-4" />
                Reset Zoom
              </button>
              <button
                onClick={toggleMute}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Toggle audio (Ctrl/Cmd + M)"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {isMuted ? 'Unmute' : 'Mute'}
              </button>
            </div>

            {/* Current Zoom Level */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Zoom Level: {currentZoom}%
              </label>
              <input
                type="range"
                min="50"
                max="200"
                step="25"
                value={currentZoom}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setCurrentZoom(value);
                  document.documentElement.style.zoom = `${value}%`;
                }}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                aria-label="Adjust zoom level"
              />
            </div>

            {/* Accessibility Toggles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5 text-cyan-400" />
                  <div>
                    <label className="text-white font-medium">High Contrast</label>
                    <p className="text-xs text-gray-400">Enhanced color contrast</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('highContrast')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    settings.highContrast ? 'bg-cyan-500' : 'bg-white/20'
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

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-blue-400" />
                  <div>
                    <label className="text-white font-medium">Large Text</label>
                    <p className="text-xs text-gray-400">Increased font sizes</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('largeText')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    settings.largeText ? 'bg-blue-500' : 'bg-white/20'
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

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <div>
                    <label className="text-white font-medium">Reduced Motion</label>
                    <p className="text-xs text-gray-400">Minimize animations</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('reducedMotion')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    settings.reducedMotion ? 'bg-purple-500' : 'bg-white/20'
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

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-green-400" />
                  <div>
                    <label className="text-white font-medium">Focus Indicator</label>
                    <p className="text-xs text-gray-400">Enhanced focus visibility</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting('focusIndicator')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                    settings.focusIndicator ? 'bg-green-500' : 'bg-white/20'
                  }`}
                  role="switch"
                  aria-checked={settings.focusIndicator}
                  aria-label="Toggle focus indicator mode"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Keyboard Shortcuts</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div>Ctrl/Cmd + = : Zoom In</div>
                <div>Ctrl/Cmd + - : Zoom Out</div>
                <div>Ctrl/Cmd + 0 : Reset Zoom</div>
                <div>Ctrl/Cmd + M : Toggle Mute</div>
                <div>Ctrl/Cmd + H : High Contrast</div>
                <div>Ctrl/Cmd + L : Large Text</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Accessibility panel {isOpen ? 'opened' : 'closed'}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;
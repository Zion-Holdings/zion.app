import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Volume2, VolumeX, Type, 
  Contrast, ZoomIn, ZoomOut, RotateCcw,
  Settings, X, Accessibility, Sun, Moon,
  Highlighter, TextCursor, AlignJustify
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highlighter: boolean;
  fontSize: number;
  lineSpacing: number;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highlighter: false,
    fontSize: 16,
    lineSpacing: 1.5,
    colorBlindMode: 'none'
  });
  const [isReading, setIsReading] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [speechRate, setSpeechRate] = useState(1);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '16px';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Font size
    root.style.setProperty('--font-size', `${settings.fontSize}px`);
    
    // Line spacing
    root.style.setProperty('--line-spacing', settings.lineSpacing.toString());

    // Color blind modes
    if (settings.colorBlindMode !== 'none') {
      const filters = {
        protanopia: 'url(#protanopia)',
        deuteranopia: 'url(#deuteranopia)',
        tritanopia: 'url(#tritanopia)'
      };
      root.style.filter = filters[settings.colorBlindMode];
    } else {
      root.style.filter = 'none';
    }
  }, [settings]);

  // Handle click outside to close settings
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Text-to-speech functionality
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speechRate;
      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  // Screen reader mode
  const toggleScreenReader = () => {
    if (isReading) {
      stopSpeaking();
    } else {
      // Get main content text
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const text = mainContent.textContent || '';
        speakText(text.substring(0, 500) + '...'); // Limit text length
      }
    }
  };

  // Highlighter mode
  const toggleHighlighter = () => {
    setSettings(prev => ({ ...prev, highlighter: !prev.highlighter }));
  };

  // Font size controls
  const increaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 2, 24) }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 2, 12) }));
  };

  // Line spacing controls
  const increaseLineSpacing = () => {
    setSettings(prev => ({ ...prev, lineSpacing: Math.min(prev.lineSpacing + 0.1, 2.5) }));
  };

  const decreaseLineSpacing = () => {
    setSettings(prev => ({ ...prev, lineSpacing: Math.max(prev.lineSpacing - 0.1, 1.0) }));
  };

  // Reset all settings
  const resetSettings = () => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      highlighter: false,
      fontSize: 16,
      lineSpacing: 1.5,
      colorBlindMode: 'none'
    });
  };

  return (
    <>
      {/* Accessibility Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300/50"
        aria-label="Accessibility options"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
            ref={settingsRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">Accessibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 space-y-3">
              {/* Screen Reader */}
              <button
                onClick={toggleScreenReader}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  isReading 
                    ? 'bg-red-500/20 border border-red-500/50 text-red-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label={isReading ? 'Stop reading' : 'Start reading'}
              >
                <span className="flex items-center space-x-2">
                  {isReading ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isReading ? 'Stop Reading' : 'Screen Reader'}</span>
                </span>
              </button>

              {/* High Contrast Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.highContrast 
                    ? 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle high contrast"
              >
                <span className="flex items-center space-x-2">
                  <Contrast className="w-4 h-4" />
                  <span>High Contrast</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.highContrast ? 'bg-yellow-400 border-yellow-400' : 'border-gray-500'
                }`} />
              </button>

              {/* Large Text Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, largeText: !prev.largeText }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.largeText 
                    ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle large text"
              >
                <span className="flex items-center space-x-2">
                  <Type className="w-4 h-4" />
                  <span>Large Text</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.largeText ? 'bg-blue-400 border-blue-400' : 'border-gray-500'
                }`} />
              </button>

              {/* Reduced Motion Toggle */}
              <button
                onClick={() => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }))}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  settings.reducedMotion 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                aria-label="Toggle reduced motion"
              >
                <span className="flex items-center space-x-2">
                  <EyeOff className="w-4 h-4" />
                  <span>Reduced Motion</span>
                </span>
                <div className={`w-4 h-4 rounded border-2 ${
                  settings.reducedMotion ? 'bg-green-400 border-green-400' : 'border-gray-500'
                }`} />
              </button>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-700/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Font Size Controls */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Font Size</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseFontSize}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Decrease font size"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </button>
                        <span className="text-white min-w-[3rem] text-center">{settings.fontSize}px</span>
                        <button
                          onClick={increaseFontSize}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Increase font size"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Line Spacing Controls */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Line Spacing</h4>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseLineSpacing}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Decrease line spacing"
                        >
                          <AlignJustify className="w-4 h-4" />
                        </button>
                        <span className="text-white min-w-[3rem] text-center">{settings.lineSpacing.toFixed(1)}</span>
                        <button
                          onClick={increaseLineSpacing}
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                          aria-label="Increase line spacing"
                        >
                          <AlignJustify className="w-4 h-4 rotate-90" />
                        </button>
                      </div>
                    </div>

                    {/* Color Blind Mode */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Color Blind Mode</h4>
                      <select
                        value={settings.colorBlindMode}
                        onChange={(e) => setSettings(prev => ({ ...prev, colorBlindMode: e.target.value as any }))}
                        className="w-full p-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="none">None</option>
                        <option value="protanopia">Protanopia (Red-Blind)</option>
                        <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                        <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                      </select>
                    </div>

                    {/* Speech Rate */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Speech Rate</h4>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={speechRate}
                        onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                        className="w-full"
                        aria-label="Speech rate"
                      />
                      <div className="text-xs text-gray-400 text-center">
                        {speechRate.toFixed(1)}x
                      </div>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={resetSettings}
                      className="w-full p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset All Settings</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children with accessibility enhancements */}
      {children}
    </>
=======
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoHide?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  autoHide = true,
}) => {
  const [isVisible, setIsVisible] = useState(showControls);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  // Detect keyboard user
  useEffect(() => {
    const handleKeyDown = () => setIsKeyboardUser(true);
    const handleMouseDown = () => setIsKeyboardUser(false);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Apply accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
    
    // Apply focus visible
    if (focusVisible) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [enabled, fontSize, highContrast, reducedMotion, focusVisible]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Navigation shortcuts
      if (e.altKey) {
        switch (e.key) {
          case 'h':
            e.preventDefault();
            document.querySelector('main')?.focus();
            break;
          case 'n':
            e.preventDefault();
            document.querySelector('nav')?.focus();
            break;
          case 'f':
            e.preventDefault();
            document.querySelector('footer')?.focus();
            break;
          case 's':
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"], .search-input') as HTMLElement;
            if (searchInput) searchInput.focus();
            break;
        }
      }

      // Skip to content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        e.preventDefault();
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Enhanced focus management
  useEffect(() => {
    if (!enabled) return;

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        .high-contrast {
          filter: contrast(1.5) brightness(1.2) !important;
        }
        
        .high-contrast * {
          border-color: #ffffff !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000000;
          color: #ffffff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
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
      `;
      document.head.appendChild(style);
    };

    addFocusIndicators();

    // Add skip links
    const addSkipLinks = () => {
      const main = document.querySelector('main');
      if (main && !document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    addSkipLinks();

    // Add ARIA labels to interactive elements
    const enhanceARIA = () => {
      // Add labels to buttons without text
      document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
        if (!button.textContent?.trim()) {
          const icon = button.querySelector('svg, img');
          if (icon) {
            const iconText = icon.getAttribute('aria-label') || icon.getAttribute('alt') || 'Button';
            button.setAttribute('aria-label', iconText);
          }
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
      
      {isVisible && (
        <div className="space-y-4">
          {/* Font Size Control */}
          <div>
            <label htmlFor="font-size" className="block text-xs mb-2">
              Font Size: {fontSize}px
            </label>
            <input
              id="font-size"
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-xs">
              High Contrast
            </label>
            <input
              id="high-contrast"
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-xs">
              Reduced Motion
            </label>
            <input
              id="reduced-motion"
              type="checkbox"
              checked={reducedMotion}
              onChange={(e) => setReducedMotion(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Focus Indicators Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="focus-visible" className="text-xs">
              Focus Indicators
            </label>
            <input
              id="focus-visible"
              type="checkbox"
              checked={focusVisible}
              onChange={(e) => setFocusVisible(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Keyboard Navigation Help */}
          <div className="pt-2 border-t border-gray-600">
            <h4 className="text-xs font-medium mb-2">Keyboard Shortcuts:</h4>
            <div className="text-xs space-y-1 text-gray-300">
              <div>Alt + H: Skip to main content</div>
              <div>Alt + N: Skip to navigation</div>
              <div>Alt + F: Skip to footer</div>
              <div>Alt + S: Focus search</div>
              <div>Tab: Navigate elements</div>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="pt-2 border-t border-gray-600">
            <div className="text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span>Keyboard User:</span>
                <span className={isKeyboardUser ? 'text-green-400' : 'text-gray-400'}>
                  {isKeyboardUser ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Screen Reader:</span>
                <span className="text-blue-400">Supported</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Focus Trap Hook
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

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

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive]);

  return containerRef;
};

// Screen Reader Announcement Hook
export const useScreenReaderAnnouncement = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return announce;
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
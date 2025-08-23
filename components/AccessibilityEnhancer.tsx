import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  reducedMotion: boolean;
  focusIndicator: boolean;
  voiceNavigation: boolean;
  screenReaderOptimized: boolean;
  colorBlindFriendly: boolean;
}

interface AccessibilityEnhancerProps {
  showControls?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ showControls = false }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 'medium',
    reducedMotion: false,
    focusIndicator: true,
    voiceNavigation: false,
    screenReaderOptimized: false,
    colorBlindFriendly: false
  });

  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      document.body.style.setProperty('--bg-primary', '#000000');
      document.body.style.setProperty('--text-primary', '#ffffff');
      document.body.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      document.body.style.removeProperty('--bg-primary');
      document.body.style.removeProperty('--text-primary');
      document.body.style.removeProperty('--accent-color');
    }

    // Font size
    const fontSizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px'
    };
    document.body.style.fontSize = fontSizeMap[settings.fontSize];

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Color blind friendly
    if (settings.colorBlindFriendly) {
      root.classList.add('color-blind-friendly');
    } else {
      root.classList.remove('color-blind-friendly');
    }

    // Screen reader optimizations
    if (settings.screenReaderOptimized) {
      optimizeForScreenReaders();
    }

    // Save settings to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.log('Failed to load accessibility settings');
      }
    }
  }, []);

  // Voice navigation setup
  useEffect(() => {
    if (settings.voiceNavigation && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsVoiceListening(true);
        announceToScreenReader('Voice navigation activated');
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        
        setVoiceTranscript(transcript);
        processVoiceCommand(transcript);
      };

      recognition.onend = () => {
        setIsVoiceListening(false);
      };

      recognition.onerror = (event: any) => {
        console.log('Voice recognition error:', event.error);
        setIsVoiceListening(false);
      };

      if (isVoiceListening) {
        recognition.start();
      }

      return () => {
        recognition.stop();
      };
    }
  }, [settings.voiceNavigation, isVoiceListening]);

  const optimizeForScreenReaders = () => {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element, index) => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', `Interactive element ${index + 1}`);
      }
    });

    // Add skip links
    addSkipLinks();

    // Enhance form labels
    enhanceFormLabels();

    // Add live regions
    addLiveRegions();
  };

  const addSkipLinks = () => {
    if (!document.getElementById('skip-main')) {
      const skipLink = document.createElement('a');
      skipLink.id = 'skip-main';
      skipLink.href = '#main';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  };

  const enhanceFormLabels = () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      
      if (label && !input.getAttribute('aria-describedby')) {
        const descriptionId = `desc-${id}`;
        const description = document.createElement('div');
        description.id = descriptionId;
        description.className = 'sr-only';
        description.textContent = `Enter your ${label.textContent?.toLowerCase()}`;
        
        if (input.parentNode) {
          input.parentNode.insertBefore(description, input.nextSibling);
        }
        
        input.setAttribute('aria-describedby', descriptionId);
      }
    });
  };

  const addLiveRegions = () => {
    if (!document.getElementById('live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }
  };

  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  };

  const processVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('navigate') || lowerCommand.includes('go to')) {
      if (lowerCommand.includes('home')) {
        window.location.href = '/';
        announceToScreenReader('Navigating to home page');
      } else if (lowerCommand.includes('services')) {
        window.location.href = '/services';
        announceToScreenReader('Navigating to services page');
      } else if (lowerCommand.includes('contact')) {
        window.location.href = '/contact';
        announceToScreenReader('Navigating to contact page');
      }
    } else if (lowerCommand.includes('increase font') || lowerCommand.includes('bigger text')) {
      const currentSize = settings.fontSize;
      const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'xlarge'];
      const currentIndex = sizes.indexOf(currentSize);
      if (currentIndex < sizes.length - 1) {
        setSettings(prev => ({ ...prev, fontSize: sizes[currentIndex + 1] }));
        announceToScreenReader('Font size increased');
      }
    } else if (lowerCommand.includes('decrease font') || lowerCommand.includes('smaller text')) {
      const currentSize = settings.fontSize;
      const sizes: AccessibilitySettings['fontSize'][] = ['small', 'medium', 'large', 'xlarge'];
      const currentIndex = sizes.indexOf(currentSize);
      if (currentIndex > 0) {
        setSettings(prev => ({ ...prev, fontSize: sizes[currentIndex - 1] }));
        announceToScreenReader('Font size decreased');
      }
    } else if (lowerCommand.includes('high contrast')) {
      setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
      announceToScreenReader(settings.highContrast ? 'High contrast disabled' : 'High contrast enabled');
    }
  };

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateFontSize = (size: AccessibilitySettings['fontSize']) => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };

  if (!showControls) return null;

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setShowAccessibilityPanel(!showAccessibilityPanel)}
        className="fixed top-4 left-4 z-50 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        aria-label="Accessibility settings"
        aria-expanded={showAccessibilityPanel}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {showAccessibilityPanel && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-cyan-500/30 z-40 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Accessibility</h2>
                <button
                  onClick={() => setShowAccessibilityPanel(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close accessibility panel"
                >
                  ×
                </button>
              </div>

              {/* Voice Navigation Status */}
              {settings.voiceNavigation && (
                <div className="mb-6 p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-cyan-400">Voice Navigation</span>
                    <div className={`w-3 h-3 rounded-full ${isVoiceListening ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                  </div>
                  {isVoiceListening && (
                    <p className="text-xs text-gray-300">Listening... Say "navigate to home" or "increase font"</p>
                  )}
                  {voiceTranscript && (
                    <p className="text-xs text-gray-300 mt-2">Heard: "{voiceTranscript}"</p>
                  )}
                </div>
              )}

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">High Contrast</label>
                  <button
                    onClick={() => toggleSetting('highContrast')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.highContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.highContrast}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Font Size */}
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Font Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => updateFontSize(size)}
                        className={`px-3 py-2 text-xs rounded transition-colors ${
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

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">Reduced Motion</label>
                  <button
                    onClick={() => toggleSetting('reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.reducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.reducedMotion}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Indicator */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">Focus Indicator</label>
                  <button
                    onClick={() => toggleSetting('focusIndicator')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.focusIndicator ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.focusIndicator}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Voice Navigation */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">Voice Navigation</label>
                  <button
                    onClick={() => toggleSetting('voiceNavigation')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.voiceNavigation ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.voiceNavigation}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.voiceNavigation ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Screen Reader Optimized */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">Screen Reader Optimized</label>
                  <button
                    onClick={() => toggleSetting('screenReaderOptimized')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.screenReaderOptimized ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.screenReaderOptimized}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.screenReaderOptimized ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Color Blind Friendly */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white">Color Blind Friendly</label>
                  <button
                    onClick={() => toggleSetting('colorBlindFriendly')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.colorBlindFriendly ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={settings.colorBlindFriendly}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.colorBlindFriendly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-medium text-white mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSettings(prev => ({ ...prev, fontSize: 'large', highContrast: true }));
                      announceToScreenReader('Accessibility enhanced');
                    }}
                    className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition-colors"
                  >
                    Enhance Accessibility
                  </button>
                  <button
                    onClick={() => {
                      setSettings(prev => ({ ...prev, fontSize: 'medium', highContrast: false, reducedMotion: false }));
                      announceToScreenReader('Settings reset to default');
                    }}
                    className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded transition-colors"
                  >
                    Reset to Default
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Styles */}
      <style jsx global>{`
        .high-contrast {
          --bg-primary: #000000 !important;
          --text-primary: #ffffff !important;
          --accent-color: #ffff00 !important;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .focus-visible button:focus,
        .focus-visible a:focus,
        .focus-visible input:focus,
        .focus-visible select:focus,
        .focus-visible textarea:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        .color-blind-friendly {
          filter: grayscale(100%) contrast(150%);
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
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
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
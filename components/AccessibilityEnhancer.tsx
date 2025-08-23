import React, { useEffect, useState } from 'react';
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Eye, EyeOff, Keyboard, Accessibility } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    highlighter: false,
    fontSize: 16,
    colorScheme: 'auto',
    focusIndicator: true,
    screenReader: false
  });

  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [focusHistory, setFocusHistory] = useState<HTMLElement[]>([]);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch {
        // Silently handle parsing errors
      }
    ];
    
    // High contrast
    if (settings.highContrast) {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e5e5e5');
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--border-color', '#ffff00');
    } else {
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--bg-secondary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--text-secondary');
      root.style.removeProperty('--accent-color');
      root.style.removeProperty('--border-color');
    }

    // Large text
    if (settings.largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.style.setProperty('--focus-outline', '3px solid #0066cc');
    } else {
      root.style.setProperty('--focus-outline', 'none');
    }

    // Color scheme
    if (settings.colorScheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else if (settings.colorScheme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('light', 'dark');
    }
  }, [settings]);

  // Track focus changes
  useEffect(() => {
    const handleFocusChange = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target !== currentFocus) {
        setCurrentFocus(target);
        setFocusHistory(prev => [target, ...prev.slice(0, 9)]);
        
        // Add focus indicator
        if (settings.focusIndicator) {
          target.style.outline = '3px solid #0066cc';
          target.style.outlineOffset = '2px';
        }
      }
    };

    const handleBlur = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target) {
        target.style.outline = '';
        target.style.outlineOffset = '';
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleBlur);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    if (isLargeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (isSpacing) {
      document.documentElement.classList.add('increased-spacing');
    } else {
      document.documentElement.classList.remove('increased-spacing');
    }

    if (isFocusVisible) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [isHighContrast, isReducedMotion, isLargeText, isSpacing, isFocusVisible]);

  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);
  const toggleReducedMotion = () => setIsReducedMotion(!isReducedMotion);
  const toggleLargeText = () => setIsLargeText(!isLargeText);
  const toggleSpacing = () => setIsSpacing(!isSpacing);
  const toggleFocusVisible = () => setIsFocusVisible(!isFocusVisible);

  const handleSkipToContent = () => {
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNavigation = () => {
    const navigation = document.querySelector('nav') || document.querySelector('#navigation');
    if (navigation) {
      navigation.focus();
      navigation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100]">
        <button
          onClick={handleSkipToNavigation}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-lg focus-ring-cyan"
        >
          Skip to Navigation
        </button>
        <button
          onClick={handleSkipToContent}
          className="ml-2 px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-lg focus-ring-cyan"
        >
          Skip to Main Content
        </button>
      </div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Accessibility className="w-5 h-5 mr-2 text-cyan-400" />
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
                  <label className="text-white text-sm">High Contrast</label>
                  <button
                    onClick={toggleHighContrast}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isHighContrast ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isHighContrast ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <label className="text-white text-sm">Reduced Motion</label>
                  <button
                    onClick={toggleReducedMotion}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isReducedMotion ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isReducedMotion ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Large Text */}
                <div className="flex items-center justify-between">
                  <label className="text-white text-sm">Large Text</label>
                  <button
                    onClick={toggleLargeText}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isLargeText ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isLargeText ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Increased Spacing */}
                <div className="flex items-center justify-between">
                  <label className="text-white text-sm">Increased Spacing</label>
                  <button
                    onClick={toggleSpacing}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isSpacing ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${isSpacing ? 'Disable' : 'Enable'} increased spacing`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isSpacing ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Focus Visible */}
                <div className="flex items-center justify-between">
                  <label className="text-white text-sm">Focus Indicators</label>
                  <button
                    onClick={toggleFocusVisible}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isFocusVisible ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                    aria-label={`${isFocusVisible ? 'Disable' : 'Enable'} focus indicators`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isFocusVisible ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  These settings are saved in your browser and will persist across visits.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-40 p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus-ring-cyan"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility panel"
        aria-expanded={isVisible}
      >
        <Accessibility className="w-5 h-5" />
      </motion.button>

      {/* Render children with accessibility context */}
      <div className={`
        ${isHighContrast ? 'high-contrast' : ''}
        ${isReducedMotion ? 'reduced-motion' : ''}
        ${isLargeText ? 'large-text' : ''}
        ${isSpacing ? 'increased-spacing' : ''}
        ${isFocusVisible ? 'focus-visible' : ''}
      `}>
        {children}
      </div>
    </>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
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
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Eye, EyeOff, Keyboard, Accessibility } from 'lucide-react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isSpacing, setIsSpacing] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

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
  );
};

export default AccessibilityEnhancer;
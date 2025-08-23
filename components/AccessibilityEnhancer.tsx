import React, { useEffect, useState } from 'react';
import { Eye, Type, Volume2, MousePointer, Contrast } from 'lucide-react';

interface AccessibilityEnhancerProps {
  showUI?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ showUI = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedLargeText = localStorage.getItem('accessibility-large-text') === 'true';
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';
    const savedFocusIndicator = localStorage.getItem('accessibility-focus-indicator') !== 'false';

    setHighContrast(savedHighContrast);
    setLargeText(savedLargeText);
    setReducedMotion(savedReducedMotion);
    setFocusIndicator(savedFocusIndicator);

    // Apply saved preferences
    applyAccessibilitySettings(savedHighContrast, savedLargeText, savedReducedMotion, savedFocusIndicator);
  }, []);

  const applyAccessibilitySettings = (
    highContrast: boolean,
    largeText: boolean,
    reducedMotion: boolean,
    focusIndicator: boolean
  ) => {
    const root = document.documentElement;

    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--bg-primary');
      root.style.removeProperty('--text-primary');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (largeText) {
      root.style.fontSize = '18px';
      root.style.setProperty('--text-scale', '1.2');
    } else {
      root.style.fontSize = '16px';
      root.style.setProperty('--text-scale', '1');
    }

    // Reduced motion
    if (reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.setProperty('--reduced-motion', 'no-preference');
    }

    // Focus indicator
    if (focusIndicator) {
      root.style.setProperty('--focus-indicator', 'visible');
    } else {
      root.style.setProperty('--focus-indicator', 'hidden');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('accessibility-high-contrast', newValue.toString());
    applyAccessibilitySettings(newValue, largeText, reducedMotion, focusIndicator);
  };

  const toggleLargeText = () => {
    const newValue = !largeText;
    setLargeText(newValue);
    localStorage.setItem('accessibility-large-text', newValue.toString());
    applyAccessibilitySettings(highContrast, newValue, reducedMotion, focusIndicator);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('accessibility-reduced-motion', newValue.toString());
    applyAccessibilitySettings(highContrast, largeText, newValue, focusIndicator);
  };

  const toggleFocusIndicator = () => {
    const newValue = !focusIndicator;
    setFocusIndicator(newValue);
    localStorage.setItem('accessibility-focus-indicator', newValue.toString());
    applyAccessibilitySettings(highContrast, largeText, reducedMotion, newValue);
  };

  const resetToDefaults = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setFocusIndicator(true);
    
    localStorage.removeItem('accessibility-high-contrast');
    localStorage.removeItem('accessibility-large-text');
    localStorage.removeItem('accessibility-reduced-motion');
    localStorage.removeItem('accessibility-focus-indicator');
    
    applyAccessibilitySettings(false, false, false, true);
  };

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A to toggle accessibility panel
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsVisible(!isVisible);
      }

      // Ctrl/Cmd + Shift + H to toggle high contrast
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }

      // Ctrl/Cmd + Shift + T to toggle large text
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleLargeText();
      }

      // Ctrl/Cmd + Shift + M to toggle reduced motion
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
        event.preventDefault();
        toggleReducedMotion();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, highContrast, largeText, reducedMotion]);

  // Add focus management for better keyboard navigation
  useEffect(() => {
    if (isVisible) {
      // Focus the first focusable element in the panel
      const firstButton = document.querySelector('[data-accessibility-panel] button') as HTMLElement;
      if (firstButton) {
        firstButton.focus();
      }
    }
  }, [isVisible]);

  if (!showUI) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
        title="Accessibility Options (Ctrl+Shift+A)"
        aria-label="Toggle accessibility options"
        aria-expanded={isVisible}
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div 
          className="absolute bottom-16 left-0 w-80 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-lg shadow-2xl p-4 text-gray-900"
          data-accessibility-panel
          role="dialog"
          aria-labelledby="accessibility-panel-title"
          aria-describedby="accessibility-panel-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 id="accessibility-panel-title" className="text-lg font-semibold flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              Accessibility Options
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-label="Close accessibility panel"
            >
              ×
            </button>
          </div>

          <p id="accessibility-panel-description" className="text-sm text-gray-600 mb-4">
            Customize your browsing experience with these accessibility features.
          </p>

          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
            <div className="flex items-center gap-3">
              <Contrast className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">High Contrast</div>
                <div className="text-sm text-gray-500">Enhanced color contrast</div>
              </div>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                highContrast ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              role="switch"
              aria-checked={highContrast}
              aria-label="Toggle high contrast mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Large Text Toggle */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Large Text</div>
                <div className="text-sm text-gray-500">Increase font size</div>
              </div>
            </div>
            <button
              onClick={toggleLargeText}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                largeText ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              role="switch"
              aria-checked={largeText}
              aria-label="Toggle large text mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  largeText ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Reduced Motion</div>
                <div className="text-sm text-gray-500">Minimize animations</div>
              </div>
            </div>
            <button
              onClick={toggleReducedMotion}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                reducedMotion ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              role="switch"
              aria-checked={reducedMotion}
              aria-label="Toggle reduced motion mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Focus Indicator Toggle */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <MousePointer className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Focus Indicator</div>
                <div className="text-sm text-gray-500">Show focus outlines</div>
              </div>
            </div>
            <button
              onClick={toggleFocusIndicator}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                focusIndicator ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              role="switch"
              aria-checked={focusIndicator}
              aria-label="Toggle focus indicator mode"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  focusIndicator ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="border-t border-gray-200 pt-3 mb-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-700">Keyboard Shortcuts</h4>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Toggle Panel:</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Shift+A</kbd>
              </div>
              <div className="flex justify-between">
                <span>High Contrast:</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Shift+H</kbd>
              </div>
              <div className="flex justify-between">
                <span>Large Text:</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Shift+T</kbd>
              </div>
              <div className="flex justify-between">
                <span>Reduced Motion:</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Shift+M</kbd>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={resetToDefaults}
              className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Reset to Defaults
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
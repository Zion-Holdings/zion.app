import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Volume2, VolumeX, Sun, Moon, Monitor, Settings } from 'lucide-react';

interface AccessibilityEnhancerProps {
  className?: string;
}

export function AccessibilityEnhancer({ className }: AccessibilityEnhancerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedLargeText = localStorage.getItem('zion-large-text') === 'true';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';
    const savedFocusIndicator = localStorage.getItem('zion-focus-indicator') !== 'false';

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
    
    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus indicator
    if (focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('zion-high-contrast', newValue.toString());
    applyAccessibilitySettings(newValue, largeText, reducedMotion, focusIndicator);
  };

  const toggleLargeText = () => {
    const newValue = !largeText;
    setLargeText(newValue);
    localStorage.setItem('zion-large-text', newValue.toString());
    applyAccessibilitySettings(highContrast, newValue, reducedMotion, focusIndicator);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('zion-reduced-motion', newValue.toString());
    applyAccessibilitySettings(highContrast, largeText, newValue, focusIndicator);
  };

  const toggleFocusIndicator = () => {
    const newValue = !focusIndicator;
    setFocusIndicator(newValue);
    localStorage.setItem('zion-focus-indicator', newValue.toString());
    applyAccessibilitySettings(highContrast, largeText, reducedMotion, newValue);
  };

  const resetToDefaults = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setFocusIndicator(true);
    
    localStorage.removeItem('zion-high-contrast');
    localStorage.removeItem('zion-large-text');
    localStorage.removeItem('zion-reduced-motion');
    localStorage.removeItem('zion-focus-indicator');
    
    applyAccessibilitySettings(false, false, false, true);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-zion-purple hover:bg-zion-purple-dark text-white shadow-lg ${className || ''}`}
        aria-label="Toggle accessibility options"
        aria-expanded={isVisible}
      >
        <Settings className="w-5 h-5" />
      </Button>

      {/* Accessibility Panel */}
      {isVisible && (
        <div className="fixed top-20 right-4 z-50 w-80 bg-white dark:bg-zion-slate-dark rounded-lg shadow-2xl border border-zion-purple/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white">
              Accessibility Options
            </h3>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="text-zion-slate-light hover:text-zion-slate-dark dark:hover:text-white"
            >
              ×
            </Button>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {highContrast ? <Eye className="w-4 h-4 text-zion-cyan" /> : <EyeOff className="w-4 h-4 text-zion-slate-light" />}
                <span className="text-sm text-zion-slate-dark dark:text-white">High Contrast</span>
              </div>
              <Button
                onClick={toggleHighContrast}
                variant={highContrast ? "default" : "outline"}
                size="sm"
                className={highContrast ? "bg-zion-cyan" : ""}
              >
                {highContrast ? "On" : "Off"}
              </Button>
            </div>

            {/* Large Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zion-slate-dark dark:text-white">Large Text</span>
              </div>
              <Button
                onClick={toggleLargeText}
                variant={largeText ? "default" : "outline"}
                size="sm"
                className={largeText ? "bg-zion-cyan" : ""}
              >
                {largeText ? "On" : "Off"}
              </Button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zion-slate-dark dark:text-white">Reduced Motion</span>
              </div>
              <Button
                onClick={toggleReducedMotion}
                variant={reducedMotion ? "default" : "outline"}
                size="sm"
                className={reducedMotion ? "bg-zion-cyan" : ""}
              >
                {reducedMotion ? "On" : "Off"}
              </Button>
            </div>

            {/* Focus Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-zion-slate-dark dark:text-white">Focus Indicator</span>
              </div>
              <Button
                onClick={toggleFocusIndicator}
                variant={focusIndicator ? "default" : "outline"}
                size="sm"
                className={focusIndicator ? "bg-zion-cyan" : ""}
              >
                {focusIndicator ? "On" : "Off"}
              </Button>
            </div>

            {/* Reset Button */}
            <Button
              onClick={resetToDefaults}
              variant="outline"
              className="w-full mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
            >
              Reset to Defaults
            </Button>

            {/* Help Text */}
            <div className="text-xs text-zion-slate-light mt-4 p-3 bg-zion-slate-light/10 rounded">
              <p className="mb-2">These settings help make Zion Tech Group more accessible for all users.</p>
              <p>Changes are saved automatically and will persist across sessions.</p>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Navigation Instructions */}
      <div className="sr-only">
        <h2>Keyboard Navigation</h2>
        <ul>
          <li>Tab: Navigate between interactive elements</li>
          <li>Enter/Space: Activate buttons and links</li>
          <li>Escape: Close modals and panels</li>
          <li>Arrow keys: Navigate within components</li>
        </ul>
      </div>
    </>
  );
}

// CSS classes for accessibility features
export const accessibilityStyles = `
  /* High Contrast Mode */
  .high-contrast {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --border: 0 0% 100%;
    --input: 0 0% 100%;
    --ring: 0 0% 100%;
  }

  /* Large Text Mode */
  .large-text {
    font-size: 1.2em;
  }

  .large-text h1 { font-size: 2.5em; }
  .large-text h2 { font-size: 2em; }
  .large-text h3 { font-size: 1.75em; }
  .large-text p { font-size: 1.2em; }

  /* Reduced Motion */
  .reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Focus Indicators */
  .focus-visible *:focus {
    outline: 3px solid #22ddd2 !important;
    outline-offset: 2px !important;
  }

  /* Screen Reader Only */
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
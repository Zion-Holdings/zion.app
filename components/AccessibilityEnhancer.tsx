import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, Volume2, ZoomIn, RotateCcw, Accessibility, 
  Keyboard, MousePointer
} from 'lucide-react';

/* eslint-disable no-undef */
interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  highContrast?: boolean;
  largeText?: boolean;
  reducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  highContrast = false,
  largeText = false,
  reducedMotion = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(highContrast);
  const [isLargeText, setIsLargeText] = useState(largeText);
  const [isReducedMotion, setIsReducedMotion] = useState(reducedMotion);
  const [isVisible, setIsVisible] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  // Apply accessibility features
  const applyAccessibilityFeatures = useCallback(() => {
    if (!enabled || typeof document === 'undefined') return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (isHighContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Large text mode
    if (isLargeText) {
      root.classList.add('large-text');
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
      root.style.setProperty('--line-height', '1.6');
    } else {
      root.classList.remove('large-text');
      root.style.removeProperty('--font-size-base');
      root.style.removeProperty('--font-size-lg');
      root.style.removeProperty('--font-size-xl');
      root.style.removeProperty('--line-height');
    }

    // Reduced motion mode
    if (isReducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Save preferences to localStorage
    localStorage.setItem('accessibility-high-contrast', isHighContrast.toString());
    localStorage.setItem('accessibility-large-text', isLargeText.toString());
    localStorage.setItem('accessibility-reduced-motion', isReducedMotion.toString());
  }, [enabled, isHighContrast, isLargeText, isReducedMotion]);

  // Load accessibility preferences
  const loadPreferences = useCallback(() => {
    if (typeof localStorage === 'undefined') return;

    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedLargeText = localStorage.getItem('accessibility-large-text') === 'true';
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';

    setIsHighContrast(savedHighContrast);
    setIsLargeText(savedLargeText);
    setIsReducedMotion(savedReducedMotion);
  }, []);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    if (!enabled || typeof document === 'undefined') return;

    // Add focus-visible class for better focus indicators
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList) {
        target.classList.add('focus-visible');
        setFocusVisible(true);
      }
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList) {
        target.classList.remove('focus-visible');
        setFocusVisible(false);
      }
    };

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Enhanced tab navigation
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const currentIndex = Array.from(focusableElements).indexOf(target);
        if (currentIndex !== -1) {
          target.classList.add('tab-navigated');
        }
      }
    };

    // Add ARIA live regions for dynamic content
    const addLiveRegions = () => {
      const existingLiveRegion = document.getElementById('aria-live-region');
      if (!existingLiveRegion) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Add skip links
    const addSkipLinks = () => {
      const existingSkipLinks = document.querySelector('.skip-links');
      if (!existingSkipLinks) {
        const skipLinks = document.createElement('div');
        skipLinks.className = 'skip-links';
        skipLinks.innerHTML = `
          <a href="#main" class="skip-link">Skip to main content</a>
          <a href="#navigation" class="skip-link">Skip to navigation</a>
          <a href="#footer" class="skip-link">Skip to footer</a>
        `;
        document.body.insertBefore(skipLinks, document.body.firstChild);
      }
    };

    // Initialize accessibility features
    addLiveRegions();
    addSkipLinks();

    // Add event listeners
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);

  // Announce changes to screen readers
  const announceToScreenReader = useCallback((message: string) => {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }, []);

  // Toggle accessibility features
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => {
      const newValue = !prev;
      announceToScreenReader(`High contrast mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const toggleLargeText = useCallback(() => {
    setIsLargeText(prev => {
      const newValue = !prev;
      announceToScreenReader(`Large text mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(prev => {
      const newValue = !prev;
      announceToScreenReader(`Reduced motion mode ${newValue ? 'enabled' : 'disabled'}`);
      return newValue;
    });
  }, [announceToScreenReader]);

  // Initialize accessibility features
  useEffect(() => {
    loadPreferences();
  }, [loadPreferences]);

  useEffect(() => {
    applyAccessibilityFeatures();
  }, [applyAccessibilityFeatures]);

  useEffect(() => {
    const cleanup = enhanceFocusManagement();
    return cleanup;
  }, [enhanceFocusManagement]);

  // Add CSS variables for accessibility
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --text-color: #ffffff !important;
        --bg-color: #000000 !important;
        --accent-color: #ffff00 !important;
        --border-color: #ffff00 !important;
      }
      
      .large-text {
        --font-size-base: 18px !important;
        --font-size-lg: 20px !important;
        --font-size-xl: 24px !important;
        --line-height: 1.6 !important;
      }
      
      .reduced-motion {
        --animation-duration: 0.01ms !important;
        --transition-duration: 0.01ms !important;
      }
      
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .focus-visible {
        outline: 3px solid var(--accent-color, #3b82f6) !important;
        outline-offset: 2px !important;
      }
      
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      
      .skip-link:focus {
        transform: translateY(0);
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
      
      .tab-navigated {
        outline: 2px solid var(--accent-color, #3b82f6) !important;
        outline-offset: 2px !important;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enabled]);

  if (!enabled || !showControls) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={`${isVisible ? 'Hide' : 'Show'} accessibility controls`}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {isVisible && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-sm">
              High Contrast
            </label>
            <button
              id="high-contrast"
              onClick={toggleHighContrast}
              className={`w-12 h-6 rounded-full transition-colors ${
                isHighContrast ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isHighContrast}
              aria-label="Toggle high contrast mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isHighContrast ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="large-text" className="text-sm">
              Large Text
            </label>
            <button
              id="large-text"
              onClick={toggleLargeText}
              className={`w-12 h-6 rounded-full transition-colors ${
                isLargeText ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isLargeText}
              aria-label="Toggle large text mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isLargeText ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-sm">
              Reduced Motion
            </label>
            <button
              id="reduced-motion"
              onClick={toggleReducedMotion}
              className={`w-12 h-6 rounded-full transition-colors ${
                isReducedMotion ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-pressed={isReducedMotion}
              aria-label="Toggle reduced motion mode"
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                isReducedMotion ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="pt-2 border-t border-white/20">
            <button
              onClick={() => {
                const mainContent = document.querySelector('main') || document.querySelector('#main');
                if (mainContent) {
                  (mainContent as HTMLElement).focus();
                  announceToScreenReader('Moved to main content');
                }
              }}
              className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
              aria-label="Skip to main content"
            >
              Skip to Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
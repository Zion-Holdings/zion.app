import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoEnhance?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  autoEnhance = true
}) => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    screenReader: false,
    keyboardNavigation: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Detect accessibility preferences
  const detectAccessibilityPreferences = useCallback(() => {
    if (!enabled) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    setFeatures(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));

    // Apply preferences automatically
    if (autoEnhance) {
      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }
      
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
      
      if (prefersLargeText) {
        document.documentElement.style.fontSize = '18px';
      }
    }
  }, [enabled, autoEnhance]);

  // Monitor focus for keyboard navigation
  const monitorFocus = useCallback(() => {
    if (!enabled) return;

    const handleFocusChange = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Add focus indicator
      if (target && target.classList) {
        target.classList.add('focus-visible');
        setTimeout(() => target.classList.remove('focus-visible'), 2000);
      }
    };

    document.addEventListener('focusin', handleFocusChange);
    return () => document.removeEventListener('focusin', handleFocusChange);
  }, [enabled]);

  // Detect screen reader usage
  const detectScreenReader = useCallback(() => {
    if (!enabled) return;

    // Check for common screen reader indicators
    const isScreenReader = 
      navigator.userAgent.includes('NVDA') ||
      navigator.userAgent.includes('JAWS') ||
      navigator.userAgent.includes('VoiceOver') ||
      navigator.userAgent.includes('TalkBack') ||
      window.speechSynthesis !== undefined;

    setFeatures(prev => ({ ...prev, screenReader: isScreenReader }));
  }, [enabled]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input or textarea
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Ensure focus is visible
          document.documentElement.classList.add('keyboard-navigation');
          break;
        case 'Escape':
          // Close modals or dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
        case 'Enter':
        case ' ':
          // Handle click events for keyboard users
          if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
            event.preventDefault();
            target.click();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Add skip links for better navigation
  const addSkipLinks = useCallback(() => {
    if (!enabled) return;

    const skipLinks = [
      { href: '#main', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.setAttribute('aria-label', 'Skip navigation links');

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLinksContainer.appendChild(skipLink);
    });

    // Insert at the beginning of body
    if (document.body) {
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    }
  }, [enabled]);

  // Add ARIA labels and roles
  const enhanceARIA = useCallback(() => {
    if (!enabled) return;

    // Add missing ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
      if (element instanceof HTMLElement) {
        // Add role if missing
        if (!element.getAttribute('role')) {
          if (element.tagName === 'BUTTON') {
            element.setAttribute('role', 'button');
          } else if (element.tagName === 'A' && element.getAttribute('href')) {
            element.setAttribute('role', 'link');
          }
        }

        // Add aria-label if no text content
        if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
          const placeholder = element.getAttribute('placeholder');
          const title = element.getAttribute('title');
          if (placeholder) {
            element.setAttribute('aria-label', placeholder);
          } else if (title) {
            element.setAttribute('aria-label', title);
          }
        }
      }
    });
  }, [enabled]);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    detectAccessibilityPreferences();
    detectScreenReader();
    
    const focusCleanup = monitorFocus();
    const keyboardCleanup = enhanceKeyboardNavigation();
    
    // Add skip links after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addSkipLinks);
    } else {
      addSkipLinks();
    }

    // Enhance ARIA after a short delay to ensure all elements are loaded
    const ariaTimer = setTimeout(enhanceARIA, 1000);

    return () => {
      focusCleanup?.();
      keyboardCleanup?.();
      clearTimeout(ariaTimer);
    };
  }, [enabled, detectAccessibilityPreferences, detectScreenReader, monitorFocus, enhanceKeyboardNavigation, addSkipLinks, enhanceARIA]);

  // Show controls in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && showControls) {
      setIsVisible(true);
    }
  }, [showControls]);

  if (!enabled || !isVisible) return null;

  const toggleFeature = (feature: keyof AccessibilityFeatures) => {
    setFeatures(prev => {
      const newFeatures = { ...prev, [feature]: !prev[feature] };
      
      // Apply the feature
      if (feature === 'highContrast') {
        document.documentElement.classList.toggle('high-contrast', newFeatures.highContrast);
      } else if (feature === 'reducedMotion') {
        if (newFeatures.reducedMotion) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms');
          document.documentElement.style.setProperty('--transition-duration', '0.01ms');
        } else {
          document.documentElement.style.removeProperty('--animation-duration');
          document.documentElement.style.removeProperty('--transition-duration');
        }
      } else if (feature === 'largeText') {
        document.documentElement.style.fontSize = newFeatures.largeText ? '20px' : '16px';
      }
      
      return newFeatures;
    });
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-green-400">Accessibility</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span>High Contrast</span>
          <button
            onClick={() => toggleFeature('highContrast')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              features.highContrast 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            {features.highContrast ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Reduced Motion</span>
          <button
            onClick={() => toggleFeature('reducedMotion')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              features.reducedMotion 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            {features.reducedMotion ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Large Text</span>
          <button
            onClick={() => toggleFeature('largeText')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              features.largeText 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            {features.largeText ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Screen Reader</span>
          <span className={`px-3 py-1 rounded text-xs font-medium ${
            features.screenReader 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-600 text-gray-300'
          }`}>
            {features.screenReader ? 'DETECTED' : 'NOT DETECTED'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Keyboard Navigation</span>
          <span className={`px-3 py-1 rounded text-xs font-medium ${
            features.keyboardNavigation 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-600 text-gray-300'
          }`}>
            {features.keyboardNavigation ? 'ACTIVE' : 'INACTIVE'}
          </span>
        </div>
      </div>

      {currentFocus && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="text-xs text-gray-400">
            <div>Current Focus:</div>
            <div className="text-white font-mono truncate">
              {currentFocus.tagName.toLowerCase()}
              {currentFocus.id && `#${currentFocus.id}`}
              {currentFocus.className && `.${currentFocus.className.split(' ')[0]}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
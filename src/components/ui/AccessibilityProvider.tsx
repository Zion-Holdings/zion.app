import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AccessibilityContextType {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  isLargeText: boolean;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  toggleLargeText: () => void;
  focusTrap: (element: HTMLElement | null) => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  // Check for user preferences on mount
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);

    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    setIsHighContrast(prefersHighContrast);

    // Check for large text preference
    const prefersLargeText = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsLargeText(prefersLargeText);

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

  // Apply accessibility classes to body
  useEffect(() => {
    const body = document.body;
    
    if (isHighContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      body.classList.add('reduced-motion');
    } else {
      body.classList.remove('reduced-motion');
    }

    if (isLargeText) {
      body.classList.add('large-text');
    } else {
      body.classList.remove('large-text');
    }
  }, [isHighContrast, isReducedMotion, isLargeText]);

  // Focus trap functionality
  const focusTrap = (element: HTMLElement | null) => {
    if (!element) return;

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    firstElement.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  };

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for high contrast toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleHighContrast();
        announceToScreenReader(`High contrast ${isHighContrast ? 'disabled' : 'enabled'}`);
      }

      // Ctrl/Cmd + M for reduced motion toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        toggleReducedMotion();
        announceToScreenReader(`Reduced motion ${isReducedMotion ? 'disabled' : 'enabled'}`);
      }

      // Ctrl/Cmd + L for large text toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleLargeText();
        announceToScreenReader(`Large text ${isLargeText ? 'disabled' : 'enabled'}`);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isHighContrast, isReducedMotion, isLargeText]);

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleReducedMotion = () => setIsReducedMotion(prev => !prev);
  const toggleLargeText = () => setIsLargeText(prev => !prev);

  const value: AccessibilityContextType = {
    isHighContrast,
    isReducedMotion,
    isLargeText,
    toggleHighContrast,
    toggleReducedMotion,
    toggleLargeText,
    focusTrap,
    announceToScreenReader,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Accessibility toolbar component
export const AccessibilityToolbar: React.FC = () => {
  const {
    isHighContrast,
    isReducedMotion,
    isLargeText,
    toggleHighContrast,
    toggleReducedMotion,
    toggleLargeText,
  } = useAccessibility();

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-4 shadow-2xl shadow-zion-cyan/20">
      <div className="space-y-3">
        <h3 className="text-white text-sm font-semibold mb-3">Accessibility</h3>
        
        <button
          onClick={toggleHighContrast}
          className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isHighContrast
              ? 'bg-zion-cyan text-zion-blue-dark'
              : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30'
          }`}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
        >
          High Contrast
        </button>

        <button
          onClick={toggleReducedMotion}
          className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isReducedMotion
              ? 'bg-zion-cyan text-zion-blue-dark'
              : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30'
          }`}
          aria-label={`${isReducedMotion ? 'Disable' : 'Enable'} reduced motion`}
        >
          Reduced Motion
        </button>

        <button
          onClick={toggleLargeText}
          className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isLargeText
              ? 'bg-zion-cyan text-zion-blue-dark'
              : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30'
          }`}
          aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text`}
        >
          Large Text
        </button>

        <div className="text-xs text-zion-slate-light text-center pt-2 border-t border-zion-cyan/20">
          <p>Keyboard shortcuts:</p>
          <p>Ctrl/Cmd + K: High Contrast</p>
          <p>Ctrl/Cmd + M: Reduced Motion</p>
          <p>Ctrl/Cmd + L: Large Text</p>
        </div>
      </div>
    </div>
  );
};

// Skip to main content link
export const SkipToMainContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zion-blue-dark"
    >
      Skip to main content
    </a>
  );
};
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  className?: string;
  focusable?: boolean;
  skipToContent?: boolean;
}

export default function AccessibilityEnhancer({ 
  children, 
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHaspopup,
  tabIndex,
  onKeyDown,
  className = '',
  focusable = true,
  skipToContent = false
}: AccessibilityEnhancerProps) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    highContrastQuery.addEventListener('change', handleContrastChange);

    // Apply accessibility features
    applyAccessibilityFeatures();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility features when preferences change
    applyAccessibilityFeatures();
  }, [isHighContrast, isReducedMotion, fontSize]);

  const applyAccessibilityFeatures = () => {
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--accent-color', '#0000ff');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    // Apply reduced motion
    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    // Handle common accessibility shortcuts
    switch (event.key) {
      case 'Escape':
        // Close modals, dropdowns, etc.
        break;
      case 'Tab':
        // Handle tab navigation
        break;
      case 'Enter':
      case ' ':
        // Handle activation
        break;
    }
  };

  const accessibilityProps = {
    role,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
    'aria-haspopup': ariaHaspopup,
    tabIndex: focusable ? tabIndex : -1,
    onKeyDown: handleKeyDown,
    className: `accessibility-enhanced ${className}`.trim()
  };

  return (
    <div {...accessibilityProps}>
      {children}
      
      {/* Accessibility controls */}
      <div className="sr-only">
        <button
          onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
          aria-label="Increase font size"
        >
          Increase font size
        </button>
        <button
          onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
          aria-label="Decrease font size"
        >
          Decrease font size
        </button>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast`}
        >
          {isHighContrast ? 'Disable' : 'Enable'} high contrast
        </button>
      </div>
    </div>
  );
}

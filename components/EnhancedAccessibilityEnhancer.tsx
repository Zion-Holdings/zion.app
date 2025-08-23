import React, { useEffect, useState } from 'react';

const EnhancedAccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Check for large text preference
    const largeTextQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsLargeText(largeTextQuery.matches);

    // Add focus visible styles
    const handleFocusVisible = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('focus-visible');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleFocusVisible);
    document.addEventListener('mousedown', handleMouseDown);

    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #06b6d4;
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 10000;
      transition: top 0.3s;
    `;
    
    document.body.appendChild(skipLink);

    // Show skip link on focus
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    return () => {
      document.removeEventListener('keydown', handleFocusVisible);
      document.removeEventListener('mousedown', handleMouseDown);
      document.body.removeChild(skipLink);
    };
  }, []);

  useEffect(() => {
    // Apply accessibility preferences
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (isLargeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (isReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [isHighContrast, isLargeText, isReducedMotion]);

  // Add CSS for accessibility enhancements
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Focus visible styles */
      .focus-visible *:focus {
        outline: 3px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }

      /* High contrast mode */
      .high-contrast {
        --text-primary: #ffffff !important;
        --text-secondary: #e5e7eb !important;
        --bg-primary: #000000 !important;
        --bg-secondary: #1f2937 !important;
        --accent: #ffff00 !important;
      }

      /* Large text mode */
      .large-text {
        font-size: 1.2em !important;
      }

      /* Reduced motion */
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }

      /* Skip link */
      .skip-link:focus {
        top: 6px !important;
      }

      /* Better focus indicators for interactive elements */
      button:focus,
      a:focus,
      input:focus,
      select:focus,
      textarea:focus {
        outline: 2px solid #06b6d4 !important;
        outline-offset: 2px !important;
      }

      /* Improved button accessibility */
      button[aria-pressed="true"] {
        background-color: #06b6d4 !important;
        color: white !important;
      }

      /* Better form accessibility */
      input:invalid {
        border-color: #ef4444 !important;
      }

      input:valid {
        border-color: #10b981 !important;
      }

      /* Screen reader only text */
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      /* Better color contrast for links */
      a {
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      a:hover {
        text-decoration-thickness: 3px;
      }

      /* Improved table accessibility */
      table {
        border-collapse: collapse;
        width: 100%;
      }

      th, td {
        border: 1px solid #374151;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #1f2937;
        font-weight: bold;
      }

      /* Better list accessibility */
      ul, ol {
        padding-left: 2em;
      }

      li {
        margin-bottom: 0.5em;
      }

      /* Improved heading hierarchy */
      h1, h2, h3, h4, h5, h6 {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.2;
      }

      /* Better spacing for readability */
      p {
        margin-bottom: 1em;
        line-height: 1.6;
      }

      /* Improved button and link hover states */
      button:hover,
      a:hover {
        transform: translateY(-1px);
        transition: transform 0.2s ease;
      }

      /* Better form field spacing */
      .form-group {
        margin-bottom: 1.5em;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5em;
        font-weight: 600;
      }

      .form-group input,
      .form-group select,
      .form-group textarea {
        width: 100%;
        padding: 0.75em;
        border: 2px solid #374151;
        border-radius: 0.5em;
        background-color: #1f2937;
        color: white;
        font-size: 1em;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus {
        border-color: #06b6d4;
        box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
      }

      /* Error and success states */
      .error {
        color: #ef4444;
        font-size: 0.875em;
        margin-top: 0.25em;
      }

      .success {
        color: #10b981;
        font-size: 0.875em;
        margin-top: 0.25em;
      }

      /* Loading states */
      .loading {
        opacity: 0.6;
        pointer-events: none;
      }

      .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid #06b6d4;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      /* Responsive accessibility */
      @media (max-width: 768px) {
        .large-text {
          font-size: 1.1em !important;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          font-size: 16px; /* Prevents zoom on iOS */
        }
      }

      /* Print styles for accessibility */
      @media print {
        .skip-link,
        button,
        .no-print {
          display: none !important;
        }
        
        a[href]:after {
          content: " (" attr(href) ")";
        }
        
        * {
          background: white !important;
          color: black !important;
        }
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add ARIA live regions for dynamic content
  useEffect(() => {
    const addLiveRegion = (id: string, type: 'polite' | 'assertive' = 'polite') => {
      if (!document.getElementById(id)) {
        const liveRegion = document.createElement('div');
        liveRegion.id = id;
        liveRegion.setAttribute('aria-live', type);
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Add common live regions
    addLiveRegion('status-messages', 'polite');
    addLiveRegion('error-messages', 'assertive');
    addLiveRegion('loading-status', 'polite');
  }, []);

  // Add keyboard navigation enhancements
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Enter key for buttons and links
      if (e.key === 'Enter' && e.target instanceof HTMLElement) {
        const target = e.target;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          e.preventDefault();
          target.click();
        }
      }

      // Space key for buttons
      if (e.key === ' ' && e.target instanceof HTMLElement) {
        const target = e.target;
        if (target.tagName === 'BUTTON') {
          e.preventDefault();
          target.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default EnhancedAccessibilityEnhancer;
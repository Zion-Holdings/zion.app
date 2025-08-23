import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoHide?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  autoHide = true,
}) => {
  const [isVisible, setIsVisible] = useState(showControls);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  // Detect keyboard user
  useEffect(() => {
    const handleKeyDown = () => setIsKeyboardUser(true);
    const handleMouseDown = () => setIsKeyboardUser(false);
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Apply accessibility features
  useEffect(() => {
    if (!enabled) return;

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
    
    // Apply focus visible
    if (focusVisible) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');
    }
  }, [enabled, fontSize, highContrast, reducedMotion, focusVisible]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Navigation shortcuts
      if (e.altKey) {
        switch (e.key) {
          case 'h':
            e.preventDefault();
            document.querySelector('main')?.focus();
            break;
          case 'n':
            e.preventDefault();
            document.querySelector('nav')?.focus();
            break;
          case 'f':
            e.preventDefault();
            document.querySelector('footer')?.focus();
            break;
          case 's':
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"], .search-input') as HTMLElement;
            if (searchInput) searchInput.focus();
            break;
        }
      }

      // Skip to content
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        e.preventDefault();
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enabled]);

  // Enhanced focus management
  useEffect(() => {
    if (!enabled) return;

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible *:focus {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
        }
        
        .high-contrast {
          filter: contrast(1.5) brightness(1.2) !important;
        }
        
        .high-contrast * {
          border-color: #ffffff !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000000;
          color: #ffffff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
          transition: top 0.3s;
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
      `;
      document.head.appendChild(style);
    };

    addFocusIndicators();

    // Add skip links
    const addSkipLinks = () => {
      const main = document.querySelector('main');
      if (main && !document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    };

    addSkipLinks();

    // Add ARIA labels to interactive elements
    const enhanceARIA = () => {
      // Add labels to buttons without text
      document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
        if (!button.textContent?.trim()) {
          const icon = button.querySelector('svg, img');
          if (icon) {
            const iconText = icon.getAttribute('aria-label') || icon.getAttribute('alt') || 'Button';
            button.setAttribute('aria-label', iconText);
          }
        }
      });

      // Add labels to links without text
      document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])').forEach(link => {
        if (!link.textContent?.trim()) {
          const icon = link.querySelector('svg, img');
          if (icon) {
            const iconText = icon.getAttribute('aria-label') || icon.getAttribute('alt') || 'Link';
            link.setAttribute('aria-label', iconText);
          }
        }
      });

      // Add role to navigation
      document.querySelectorAll('nav').forEach(nav => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
      });

      // Add role to main content
      document.querySelectorAll('main').forEach(main => {
        if (!main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }
      });

      // Add role to footer
      document.querySelectorAll('footer').forEach(footer => {
        if (!footer.getAttribute('role')) {
          footer.setAttribute('role', 'contentinfo');
        }
      });
    };

    enhanceARIA();

    // Re-run ARIA enhancement when DOM changes
    const observer = new MutationObserver(enhanceARIA);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enabled]);

  // Announce page changes to screen readers
  useEffect(() => {
    if (!enabled) return;

    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${document.title}`;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce on route change
    const handleRouteChange = () => {
      setTimeout(announcePageChange, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for Next.js route changes
    if (typeof window !== 'undefined' && (window as any).__NEXT_DATA__) {
      const originalPushState = history.pushState;
      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        handleRouteChange();
      };
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enabled]);

  // Auto-hide controls
  useEffect(() => {
    if (autoHide && showControls) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, showControls]);

  // Don't render controls in production unless explicitly enabled
  if (!enabled || (!showControls && process.env.NODE_ENV === 'production')) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg backdrop-blur-sm border border-gray-700 max-w-sm z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle accessibility controls"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-4">
          {/* Font Size Control */}
          <div>
            <label htmlFor="font-size" className="block text-xs mb-2">
              Font Size: {fontSize}px
            </label>
            <input
              id="font-size"
              type="range"
              min="12"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="high-contrast" className="text-xs">
              High Contrast
            </label>
            <input
              id="high-contrast"
              type="checkbox"
              checked={highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="reduced-motion" className="text-xs">
              Reduced Motion
            </label>
            <input
              id="reduced-motion"
              type="checkbox"
              checked={reducedMotion}
              onChange={(e) => setReducedMotion(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Focus Indicators Toggle */}
          <div className="flex items-center justify-between">
            <label htmlFor="focus-visible" className="text-xs">
              Focus Indicators
            </label>
            <input
              id="focus-visible"
              type="checkbox"
              checked={focusVisible}
              onChange={(e) => setFocusVisible(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          
          {/* Keyboard Navigation Help */}
          <div className="pt-2 border-t border-gray-600">
            <h4 className="text-xs font-medium mb-2">Keyboard Shortcuts:</h4>
            <div className="text-xs space-y-1 text-gray-300">
              <div>Alt + H: Skip to main content</div>
              <div>Alt + N: Skip to navigation</div>
              <div>Alt + F: Skip to footer</div>
              <div>Alt + S: Focus search</div>
              <div>Tab: Navigate elements</div>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="pt-2 border-t border-gray-600">
            <div className="text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span>Keyboard User:</span>
                <span className={isKeyboardUser ? 'text-green-400' : 'text-gray-400'}>
                  {isKeyboardUser ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Screen Reader:</span>
                <span className="text-blue-400">Supported</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityEnhancer;
import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusIndicators?: boolean;
  enableHighContrast?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableSkipLinks = true,
  enableFocusIndicators = true,
  enableHighContrast = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [fontSize, setFontSize] = useState(16);
  const [lineSpacing, setLineSpacing] = useState(1.5);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    // Apply line spacing
    document.documentElement.style.setProperty('--line-height', lineSpacing.toString());
  }, [lineSpacing]);

  useEffect(() => {
    // Focus management for modals and dropdowns
    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    // Add focus indicators
    if (enableFocusIndicators) {
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --border-color: #ffffff !important;
          --accent-color: #ffff00 !important;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }
        
        .high-contrast button,
        .high-contrast a {
          border: 2px solid var(--border-color) !important;
        }
        
        .high-contrast button:hover,
        .high-contrast a:hover {
          background-color: var(--accent-color) !important;
          color: var(--bg-color) !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Add keyboard event listeners
    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [enableFocusIndicators]);

  // Skip to main content functionality
  useEffect(() => {
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);

  // Announce page changes for screen readers
  useEffect(() => {
    const announcePageChange = (title: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce current page title
    announcePageChange(document.title);
  }, []);

  // Accessibility controls
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
  };

  const increaseLineSpacing = () => {
    setLineSpacing(prev => Math.min(prev + 0.1, 2.5));
  };

  const decreaseLineSpacing = () => {
    setLineSpacing(prev => Math.max(prev - 0.1, 1.0));
  };

  return (
    <>
      {/* Accessibility Controls Panel */}
      <div className="fixed top-20 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 w-64">
        <h3 className="text-white font-semibold mb-3 text-sm">Accessibility</h3>
        
        <div className="space-y-3">
          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 text-xs">High Contrast</label>
            <button
              onClick={toggleHighContrast}
              className={`w-10 h-6 rounded-full transition-colors duration-200 ${
                isHighContrast ? 'bg-cyan-500' : 'bg-gray-600'
              }`}
              aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                isHighContrast ? 'translate-x-4' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* Font Size Controls */}
          <div className="space-y-2">
            <label className="text-gray-300 text-xs">Font Size</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseFontSize}
                className="w-6 h-6 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span className="text-gray-300 text-xs w-8 text-center">{fontSize}px</span>
              <button
                onClick={increaseFontSize}
                className="w-6 h-6 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          {/* Line Spacing Controls */}
          <div className="space-y-2">
            <label className="text-gray-300 text-xs">Line Spacing</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseLineSpacing}
                className="w-6 h-6 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors"
                aria-label="Decrease line spacing"
              >
                -
              </button>
              <span className="text-gray-300 text-xs w-8 text-center">{lineSpacing.toFixed(1)}</span>
              <button
                onClick={increaseLineSpacing}
                className="w-6 h-6 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors"
                aria-label="Increase line spacing"
              >
                +
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setFontSize(16);
              setLineSpacing(1.5);
              setIsHighContrast(false);
            }}
            className="w-full px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-colors"
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Screen Reader Only Styles */}
      <style jsx global>{`
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

        .skip-link:focus {
          position: absolute !important;
          width: auto !important;
          height: auto !important;
          padding: 8px 16px !important;
          margin: 0 !important;
          overflow: visible !important;
          clip: auto !important;
          white-space: normal !important;
          border: 0 !important;
          z-index: 9999 !important;
        }

        /* Focus indicators */
        button:focus,
        a:focus,
        input:focus,
        select:focus,
        textarea:focus,
        [tabindex]:focus {
          outline: 2px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        .high-contrast {
          --text-color: #ffffff !important;
          --bg-color: #000000 !important;
          --border-color: #ffffff !important;
          --accent-color: #ffff00 !important;
        }

        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }

        .high-contrast button,
        .high-contrast a {
          border: 2px solid var(--border-color) !important;
        }

        .high-contrast button:hover,
        .high-contrast a:hover {
          background-color: var(--accent-color) !important;
          color: var(--bg-color) !important;
        }

        /* Custom line height */
        :root {
          --line-height: 1.5;
        }

        body {
          line-height: var(--line-height);
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
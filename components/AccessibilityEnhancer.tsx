import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility features based on preferences
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }

    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.altKey) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Increase/decrease font size
      if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
        e.preventDefault();
        const newSize = e.key === '+' ? fontSize + 2 : fontSize - 2;
        if (newSize >= 12 && newSize <= 24) {
          setFontSize(newSize);
          document.documentElement.style.fontSize = `${newSize}px`;
        }
      }

      // Reset font size
      if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        setFontSize(16);
        document.documentElement.style.fontSize = '16px';
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Add focus indicators
    const addFocusIndicators = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #06b6d4;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
          transition: top 0.3s;
        }
        
        .skip-link:focus {
          top: 6px;
        }
        
        .high-contrast {
          --text-color: #000000 !important;
          --bg-color: #ffffff !important;
          --accent-color: #0000ff !important;
        }
        
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--accent-color) !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusIndicators();

    // Add skip links
    const addSkipLinks = () => {
      const skipLinksContainer = document.createElement('div');
      skipLinksContainer.className = 'skip-links';
      skipLinksContainer.innerHTML = `
        <a href="#main" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    };

    addSkipLinks();

    // Add ARIA live regions for dynamic content
    const addLiveRegions = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
      document.body.appendChild(liveRegion);
    };

    addLiveRegions();

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
            const label = input.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
              input.setAttribute('aria-labelledby', label.id || 'label-' + Math.random().toString(36).substr(2, 9));
            }
          }
        });
      });
    };

    enhanceForms();

    // Add loading states
    const addLoadingStates = () => {
      const buttons = document.querySelectorAll('button[type="submit"], button[onclick]');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          button.setAttribute('aria-busy', 'true');
          button.setAttribute('aria-label', button.textContent + ' - Loading...');
          
          // Reset after a delay (in real app, this would be after the action completes)
          setTimeout(() => {
            button.removeAttribute('aria-busy');
            button.setAttribute('aria-label', button.textContent);
          }, 2000);
        });
      });
    };

    addLoadingStates();

    // Add error handling
    const addErrorHandling = () => {
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
          const target = e.target as HTMLInputElement;
          target.setAttribute('aria-invalid', 'true');
          target.setAttribute('aria-describedby', 'error-' + target.id);
          
          // Create error message if it doesn't exist
          if (!document.getElementById('error-' + target.id)) {
            const errorDiv = document.createElement('div');
            errorDiv.id = 'error-' + target.id;
            errorDiv.className = 'error-message sr-only';
            errorDiv.setAttribute('role', 'alert');
            errorDiv.textContent = target.validationMessage;
            target.parentNode?.appendChild(errorDiv);
          }
        });
        
        input.addEventListener('input', () => {
          if (input.getAttribute('aria-invalid') === 'true') {
            input.removeAttribute('aria-invalid');
            const errorId = input.getAttribute('aria-describedby');
            if (errorId) {
              const errorElement = document.getElementById(errorId);
              if (errorElement) {
                errorElement.remove();
              }
              input.removeAttribute('aria-describedby');
            }
          }
        });
      });
    };

    addErrorHandling();

    // Add table accessibility
    const enhanceTables = () => {
      const tables = document.querySelectorAll('table');
      tables.forEach(table => {
        if (!table.getAttribute('role')) {
          table.setAttribute('role', 'table');
        }
        
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
          header.setAttribute('scope', 'col');
          header.id = 'header-' + index;
        });
        
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, rowIndex) => {
          row.setAttribute('role', 'row');
          
          const cells = row.querySelectorAll('td');
          cells.forEach((cell, cellIndex) => {
            const header = headers[cellIndex];
            if (header) {
              cell.setAttribute('headers', header.id);
            }
          });
        });
      });
    };

    enhanceTables();

    // Add image accessibility
    const enhanceImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', '');
          img.setAttribute('aria-hidden', 'true');
        }
        
        // Add loading state
        if (img.loading !== 'lazy') {
          img.loading = 'lazy';
        }
      });
    };

    enhanceImages();

    // Add navigation accessibility
    const enhanceNavigation = () => {
      const navs = document.querySelectorAll('nav');
      navs.forEach(nav => {
        if (!nav.getAttribute('role')) {
          nav.setAttribute('role', 'navigation');
        }
        
        const links = nav.querySelectorAll('a');
        links.forEach(link => {
          if (link.getAttribute('aria-current') !== 'page') {
            link.setAttribute('aria-current', 'false');
          }
        });
      });
    };

    enhanceNavigation();

    // Add search functionality accessibility
    const enhanceSearch = () => {
      const searchForms = document.querySelectorAll('form[role="search"]');
      searchForms.forEach(form => {
        const searchInput = form.querySelector('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]');
        if (searchInput) {
          searchInput.setAttribute('aria-label', 'Search for services and solutions');
          searchInput.setAttribute('aria-describedby', 'search-help');
          
          // Add search help text
          if (!document.getElementById('search-help')) {
            const helpText = document.createElement('div');
            helpText.id = 'search-help';
            helpText.className = 'sr-only';
            helpText.textContent = 'Type your search query and press Enter to search. Use arrow keys to navigate results.';
            searchInput.parentNode?.appendChild(helpText);
          }
        }
      });
    };

    enhanceSearch();

    // Add progress indicators
    const addProgressIndicators = () => {
      const progressBars = document.querySelectorAll('.progress, [role="progressbar"]');
      progressBars.forEach(progress => {
        if (!progress.getAttribute('aria-valuenow')) {
          progress.setAttribute('aria-valuenow', '0');
          progress.setAttribute('aria-valuemin', '0');
          progress.setAttribute('aria-valuemax', '100');
          progress.setAttribute('aria-label', 'Progress indicator');
        }
      });
    };

    addProgressIndicators();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fontSize]);

  // Accessibility toolbar component
  const AccessibilityToolbar = () => (
    <div className="accessibility-toolbar" role="toolbar" aria-label="Accessibility options">
      <button
        onClick={() => {
          const newSize = fontSize + 2;
          if (newSize <= 24) {
            setFontSize(newSize);
            document.documentElement.style.fontSize = `${newSize}px`;
          }
        }}
        aria-label="Increase font size"
        className="accessibility-btn"
      >
        A+
      </button>
      <button
        onClick={() => {
          const newSize = fontSize - 2;
          if (newSize >= 12) {
            setFontSize(newSize);
            document.documentElement.style.fontSize = `${newSize}px`;
          }
        }}
        aria-label="Decrease font size"
        className="accessibility-btn"
      >
        A-
      </button>
      <button
        onClick={() => {
          setIsHighContrast(!isHighContrast);
          document.documentElement.classList.toggle('high-contrast');
        }}
        aria-label="Toggle high contrast"
        className="accessibility-btn"
        aria-pressed={isHighContrast}
      >
        <span role="img" aria-label="High contrast">🌓</span>
      </button>
      <button
        onClick={() => {
          setIsReducedMotion(!isReducedMotion);
          document.documentElement.classList.toggle('reduced-motion');
        }}
        aria-label="Toggle reduced motion"
        className="accessibility-btn"
        aria-pressed={isReducedMotion}
      >
        <span role="img" aria-label="Reduced motion">🎬</span>
      </button>
    </div>
  );

  return (
    <>
      <AccessibilityToolbar />
      <style jsx>{`
        .accessibility-toolbar {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          padding: 12px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        
        .accessibility-btn {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 6px;
          background: #06b6d4;
          color: white;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .accessibility-btn:hover {
          background: #0891b2;
          transform: scale(1.05);
        }
        
        .accessibility-btn:focus {
          outline: 3px solid #ffffff;
          outline-offset: 2px;
        }
        
        .accessibility-btn[aria-pressed="true"] {
          background: #dc2626;
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
        
        .error-message {
          color: #dc2626;
          font-size: 14px;
          margin-top: 4px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .accessibility-btn {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default AccessibilityEnhancer;
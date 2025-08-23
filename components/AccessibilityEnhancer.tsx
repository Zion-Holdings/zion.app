import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableSkipLinks?: boolean;
  enableFocusIndicator?: boolean;
  enableHighContrast?: boolean;
  enableLargeText?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableSkipLinks = true,
  enableFocusIndicator = true,
  enableHighContrast = false,
  enableLargeText = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [isLargeText, setIsLargeText] = useState(enableLargeText);
  const [showSkipLinks, setShowSkipLinks] = useState(false);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.altKey) {
      event.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
        mainContent.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    }
  }, [applySettings]);

  // Focus management
  const handleFocusChange = useCallback((e: globalThis.FocusEvent) => {
    const target = e.target as HTMLElement;
    if (target) {
      setCurrentFocus(target);
      announceToScreenReader(`Focused on ${target.textContent || target.tagName.toLowerCase()}`);
    }

    // Toggle large text
    if (event.key === 't' && event.altKey) {
      event.preventDefault();
      setIsLargeText(!isLargeText);
    }

    // Show skip links
    if (event.key === 'Tab') {
      setShowSkipLinks(true);
    }
  }, [isHighContrast, isLargeText]);

  // Handle focus management
  const handleFocusChange = useCallback((event: React.FocusEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    
    // Ensure focus is visible
    if (enableFocusIndicator) {
      target.style.outline = '2px solid #06b6d4';
      target.style.outlineOffset = '2px';
    }
  }, [enableFocusIndicator]);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    target.style.outline = '';
    target.style.outlineOffset = '';
  }, []);

  // Apply accessibility features
  useEffect(() => {
    // Add CSS custom properties for accessibility
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--accent-color', '#ffff00');
      root.style.setProperty('--border-color', '#ffffff');
    } else {
      root.style.setProperty('--text-color', '');
      root.style.setProperty('--bg-color', '');
      root.style.setProperty('--accent-color', '');
      root.style.setProperty('--border-color', '');
    }

    if (isLargeText) {
      root.style.setProperty('--font-size-base', '18px');
      root.style.setProperty('--font-size-lg', '20px');
      root.style.setProperty('--font-size-xl', '24px');
      root.style.setProperty('--line-height', '1.6');
    } else {
      root.style.setProperty('--font-size-base', '');
      root.style.setProperty('--font-size-lg', '');
      root.style.setProperty('--font-size-xl', '');
      root.style.setProperty('--line-height', '');
    }
  }, [isHighContrast, isLargeText]);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [handleKeyDown, handleFocusChange, handleBlur]);

  // Add skip links
  useEffect(() => {
    if (!enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#services-section', text: 'Skip to services' },
      { href: '#contact-section', text: 'Skip to contact' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
      transition: top 0.3s;
    `;

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.style.cssText = `
        display: inline-block;
        padding: 8px 16px;
        margin: 0 4px;
        background: #06b6d4;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.3s;
      `;
      
      link.addEventListener('focus', () => {
        skipLinksContainer.style.top = '6px';
      });
      
      link.addEventListener('blur', () => {
        if (!skipLinksContainer.contains(document.activeElement)) {
          skipLinksContainer.style.top = '-40px';
        }
      });
      
      skipLinksContainer.appendChild(link);
    });

    document.body.appendChild(skipLinksContainer);

    return () => {
      if (skipLinksContainer.parentNode) {
        skipLinksContainer.parentNode.removeChild(skipLinksContainer);
      }
    };
  }, [enableSkipLinks]);

  // Add accessibility announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }, []);

  // Announce accessibility changes
  useEffect(() => {
    if (isHighContrast) {
      announceToScreenReader('High contrast mode enabled');
    }
  }, [isHighContrast, announceToScreenReader]);

  useEffect(() => {
    if (isLargeText) {
      announceToScreenReader('Large text mode enabled');
    }
  }, [isLargeText, announceToScreenReader]);

  return (
    <>
      {/* Accessibility Controls */}
      <div className="accessibility-controls" style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="accessibility-btn"
          style={{
            padding: '8px 12px',
            background: isHighContrast ? '#ffff00' : '#06b6d4',
            color: isHighContrast ? '#000000' : '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
          aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
          title={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode (Alt+C)`}
        >
          {isHighContrast ? '☀️' : '🌙'} Contrast
        </button>
        
        <button
          onClick={() => setIsLargeText(!isLargeText)}
          className="accessibility-btn"
          style={{
            padding: '8px 12px',
            background: isLargeText ? '#ffff00' : '#06b6d4',
            color: isLargeText ? '#000000' : '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
          aria-label={`${isLargeText ? 'Disable' : 'Enable'} large text mode`}
          title={`${isLargeText ? 'Disable' : 'Enable'} large text mode (Alt+T)`}
        >
          {isLargeText ? '🔍' : '📖'} Text Size
        </button>
      </div>

      {/* Accessibility Instructions */}
      <div className="accessibility-instructions" style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '12px',
        maxWidth: '300px',
        display: showSkipLinks ? 'block' : 'none'
      }}>
        <strong>Keyboard Shortcuts:</strong><br/>
        • Alt+C: Toggle high contrast<br/>
        • Alt+T: Toggle large text<br/>
        • Tab: Navigate through elements<br/>
        • Shift+Alt+Tab: Skip to main content
      </div>

      {/* Render children with accessibility context */}
      <div
        className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isLargeText ? 'large-text' : ''}`}
        style={{
          '--text-color': isHighContrast ? '#ffffff' : '',
          '--bg-color': isHighContrast ? '#000000' : '',
          '--accent-color': isHighContrast ? '#ffff00' : '',
          '--border-color': isHighContrast ? '#ffffff' : '',
          '--font-size-base': isLargeText ? '18px' : '',
          '--font-size-lg': isLargeText ? '20px' : '',
          '--font-size-xl': isLargeText ? '24px' : '',
          '--line-height': isLargeText ? '1.6' : ''
        } as React.CSSProperties}
      >
        {children}
      </div>
    </>
  );
};

// Keyboard Navigation Hook
export const useKeyboardNavigation = (items: string[], onSelect: (item: string) => void) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => (prev + 1) % items.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          onSelect(items[selectedIndex]);
          break;
        case 'Home':
          event.preventDefault();
          setSelectedIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setSelectedIndex(items.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onSelect]);

  return { selectedIndex, setSelectedIndex };
};

// Focus Trap Hook
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive]);

  return containerRef;
};

// Screen Reader Announcement Hook
export const useScreenReaderAnnouncement = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return announce;
};

// Skip Link Component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
  >
    {children}
  </a>
);

// Screen Reader Only Text
export const SrOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Export the main provider component as default
export default AccessibilityProvider;
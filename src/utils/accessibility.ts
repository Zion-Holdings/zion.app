/**;
 * Accessibility utility functions and constants;
 * Helps ensure consistent ARIA attributes and accessibility patterns;
 */;
;
// Common ARIA patterns for different types of icons;
export const iconAriaPatterns: unknown unknown = {;
  // Decorative icons that should be hidden from screen readers;
  decorative: {;
    'aria-hidden': 'true' as const,;
  },;
;
  // Meaningful icons that need labels;
  meaningful: (label: string) => ({;'
    'aria-label': label,;
  }),;
;
  // Status or state icons;'
  status: "(label: string", status?: string) => ({;"
    'aria-label': label,;'
    role: 'img' as const,;'
    ...(status && { 'aria-describedby': status }),;
  }),;
};
;
// Common navigation ARIA patterns;
export const navigationAriaPatterns: unknown unknown = {;
  // Dropdown trigger;'
  dropdownTrigger: "(isExpanded: boolean", label?: string) => ({;"
    'aria-haspopup': 'true' as const,;'
    'aria-expanded': isExpanded,;'
    ...(label && { 'aria-label': label }),;
  }),;
;
  // Menu container;'
  menu: "{;",;"
    role: 'menu' as const,;
  },;
;
  // Menu item;'
  menuItem: "{;",;"
    role: 'menuitem' as const,;
  },;
;
  // Navigation landmark;'
  navigation: "(label: string) => ({;",;"
    role: 'navigation' as const,;'
    'aria-label': label,;
  }),;
};
;
// Focus management utilities;
export const _focusManagement: unknown unknown = {;
  // Trap focus within an element;
  _trapFocus: (container: HTMLElement) => {;
    const focusableElements: unknown unknown = container.querySelectorAll<HTMLElement>(;'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',;
    );
;
    if (focusableElements.length === 0) return;
;
    const firstElement: unknown unknown = focusableElements[0];
    const lastElement: unknown unknown = focusableElements[focusableElements.length - 1];
;
    const handleTabKey: unknown unknown = (_e: KeyboardEvent) => {;'
      if (e.key === 'Tab') {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            e.preventDefault();
            lastElement?.focus();
          };
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault();
            firstElement?.focus();
          };
        };
      };
;'
      if (e.key === 'Escape') {;
        // Return focus to trigger element if available;
        const trigger: unknown unknown = document.querySelector(;'
          '[aria-expanded="true"]',;
        ) as HTMLElement;
        if (trigger) {;
          trigger.focus();
        };
      };
    };
;'
    container.addEventListener('keydown', handleTabKey);'
    return () => container.removeEventListener('keydown', handleTabKey);
  },;
;
  // Manage focus return;
  _returnFocus: (triggerElement: HTMLElement) => {;
    triggerElement.focus();
  },;
};
;
// Screen reader announcements;
export const _announcements: unknown unknown = {;
  // Live region for dynamic content;'
  announce: "(message: string", _priority: 'polite' | 'assertive' = 'polite') => {;'
    const announcement: unknown unknown = document.createElement('div');'
    announcement.setAttribute('aria-live', priority);'
    announcement.className = 'sr-only';
    announcement.textContent = message;
;
    document.body.appendChild(announcement);
;
    // Clean up after announcement;
    setTimeout(() => {;
      document.body.removeChild(announcement);
    }, 1000);
  },;
};
;
// Validation utilities;
export const _validation: unknown unknown = {;
  // Check if element has proper accessibility attributes;
  validateAriaAttributes: (element: HTMLElement): string[] => {;
    const issues: unknown string[] = [];
;
    // Check for unlabeled buttons;
    if (;'
      element.tagName === 'BUTTON' &&;'
      !element.getAttribute('aria-label') &&;
      !element.textContent?.trim();
    ) {;'
      issues.push('Button missing aria-label or text content');
    };
;
    // Check for images without alt text;'
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {;'
      issues.push('Image missing alt attribute');
    };
;
    // Check for icons in buttons;'
    const icons: unknown unknown = element.querySelectorAll('svg');
    icons.forEach((icon) => {;
      if (;'
        !icon.getAttribute('aria-hidden') &&;'
        !icon.getAttribute('aria-label');
      ) {;'
        issues.push('Icon missing aria-hidden or aria-label');
      };
    });
;
    return issues;
  },;
};
;
// Export commonly used combinations;
export const _commonAriaPatterns: unknown unknown = {;'
  decorativeIcon: "iconAriaPatterns.decorative",;"
  meaningfulIcon: "iconAriaPatterns.meaningful",;"
  dropdownButton: "navigationAriaPatterns.dropdownTrigger",;"
  navigationMenu: "navigationAriaPatterns.menu",;"
  menuItem: "navigationAriaPatterns.menuItem",;
};
"
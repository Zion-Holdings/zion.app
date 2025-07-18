/**;
 * Accessibility utility functions and constants;
 * Helps ensure consistent ARIA attributes and accessibility patterns;
 */;
// Common ARIA patterns for different types of icons;
export const iconAriaPatterns = {;
  // Decorative icons that should be hidden from screen readers;
  decorative: {;
<<<<<<< HEAD
    'aria-hidden': 'true' as const,'
  },;
  // Meaningful icons that need labels'
  meaningful: (label: string) => ({;
    'aria-label': label,;
  }),;
'
  // Status or state icons;
  status: (label: string, status?: string) => ({;"
    'aria-label': label,;
    role: 'img' as const,;
    ...(status && { 'aria-describedby': status }),;
  }),;
}'
;
// Common navigation ARIA patterns;
export const navigationAriaPatterns = {'
  // Dropdown trigger;
  dropdownTrigger: (isExpanded: boolean, label?: string) => ({;"
    'aria-haspopup': 'true' as const,;
    'aria-expanded': isExpanded,;
    ...(label && { 'aria-label': label }),;
  }),;
'
  // Menu container;
  menu: {
    role: 'menu' as const,;
  },;
'
  // Menu item;
  menuItem: {
    role: 'menuitem' as const,;
  },;
'
  // Navigation landmark;
  navigation: "(label: string) => ({;"
    role: 'navigation' as const,;
    'aria-label': label,;
  }),;
};
// Focus management utilities'
export const _focusManagement = {;
  // Trap focus within an element;
  _trapFocus: (container: HTMLElement) => {'
    const focusableElements = container.querySelectorAll<HTMLElement>(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',;
=======
    'aria-hidden': 'true' as const,;''
  },;
;
  // Meaningful icons that need labels;''
  meaningful: (label: string) => ({;;
    'aria-label': label,;'
  }),;
;''
  // Status or state icons;;
  status: "(label: string", status?: string) => ({;";";";";""
    'aria-label': label,;;'
    role: 'img' as const,;;'
    ...(status && { 'aria-describedby': status }),;'
  }),;
};''
;
// Common navigation ARIA patterns;
export const navigationAriaPatterns: unknown = {;''
  // Dropdown trigger;;
  dropdownTrigger: "(isExpanded: boolean", label?: string) => ({;";";";";""
    'aria-haspopup': 'true' as const,;;'
    'aria-expanded': isExpanded,;;'
    ...(label && { 'aria-label': label }),;'
  }),;
;''
  // Menu container;;
  menu: "{;",;";";";";""
    role: 'menu' as const,;'
  },;
;''
  // Menu item;;
  menuItem: "{;",;";";";";""
    role: 'menuitem' as const,;'
  },;
;''
  // Navigation landmark;;
  navigation: "(label: string) => ({;",;";";";";""
    role: 'navigation' as const,;;'
    'aria-label': label,;'
  }),;
};
;
// Focus management utilities;'';
export const _focusManagement: unknown = {;
  // Trap focus within an element;
  _trapFocus: (container: HTMLElement) => {;''
    const focusableElements: unknown = container.querySelectorAll<HTMLElement>(;;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    );
    if (focusableElements.length === 0) return;
<<<<<<< HEAD
'
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
'
    const handleTabKey = (_e: KeyboardEvent) => {;
      if (e.key === 'Tab') {;
=======
;''
    const firstElement: unknown = focusableElements[0];
    const lastElement: unknown = focusableElements[focusableElements.length - 1];
;''
    const handleTabKey: unknown = (_e: KeyboardEvent) => {;;
      if (e.key === 'Tab') {;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            e.preventDefault();
            lastElement?.focus();
          };
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault();
<<<<<<< HEAD
            firstElement?.focus()'
          };
        };
      }'
;
      if (e.key === 'Escape') {;
        // Return focus to trigger element if available'
        const trigger = document.querySelector(;
          '[aria-expanded="true"]',;
        ) as HTMLElement;
        if (trigger) {;
          trigger.focus()'
        };
      };
    }'
;
    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
=======
            firstElement?.focus();''
          };
        };
      };''
;;
      if (e.key === 'Escape') {;'
        // Return focus to trigger element if available;''
        const trigger: unknown = document.querySelector(;;
          '[aria-expanded="true"]',;'
        ) as HTMLElement;
        if (trigger) {;
          trigger.focus();''
        };
      };
    };''
;;
    container.addEventListener('keydown', handleTabKey);;'
    return () => container.removeEventListener('keydown', handleTabKey);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  },;
  // Manage focus return;
  _returnFocus: (triggerElement: HTMLElement) => {;
    triggerElement.focus();
  },;
<<<<<<< HEAD
}'
;
// Screen reader announcements;
export const _announcements = {'
  // Live region for dynamic content;
  announce: (message: string, _priority: 'polite' | 'assertive' = 'polite') => {;
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.className = 'sr-only;
=======
};''
;
// Screen reader announcements;
export const _announcements: unknown = {;''
  // Live region for dynamic content;;
  announce: "(message: string", _priority: 'polite' | 'assertive' = 'polite') => {;;'
    const announcement: unknown = document.createElement('div');;'
    announcement.setAttribute('aria-live', priority);;'
    announcement.className = 'sr-only;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    announcement.textContent = message;
    document.body.appendChild(announcement);
    // Clean up after announcement;
    setTimeout(() => {;
      document.body.removeChild(announcement);
    }, 1000);
  },;
};
// Validation utilities;
export const _validation = {;
  // Check if element has proper accessibility attributes;
<<<<<<< HEAD
  validateAriaAttributes: (element: HTMLElement): string[] => {'
    const issues: unknown string[] = [];
    // Check for unlabeled buttons'
    if (;
      element.tagName === 'BUTTON' &&;
      !element.getAttribute('aria-label') &&;
      !element.textContent?.trim()'
    ) {;
      issues.push('Button missing aria-label or text content');
    };
'
    // Check for images without alt text;
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {;
      issues.push('Image missing alt attribute');
    };
'
    // Check for icons in buttons;
    const icons = element.querySelectorAll('svg');
    icons.forEach((icon) => {'
      if (;
        !icon.getAttribute('aria-hidden') &&;
        !icon.getAttribute('aria-label')'
      ) {;
        issues.push('Icon missing aria-hidden or aria-label');
=======
  validateAriaAttributes: (element: HTMLElement): string[] => {;''
    const issues: unknown string[] = [];
;
    // Check for unlabeled buttons;''
    if (;;
      element.tagName === 'BUTTON' &&;;'
      !element.getAttribute('aria-label') &&;'
      !element.textContent?.trim();''
    ) {;;
      issues.push('Button missing aria-label or text content');'
    };
;''
    // Check for images without alt text;;
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {;;'
      issues.push('Image missing alt attribute');'
    };
;''
    // Check for icons in buttons;;
    const icons: unknown = element.querySelectorAll('svg');'
    icons.forEach((icon) => {;''
      if (;;
        !icon.getAttribute('aria-hidden') &&;;'
        !icon.getAttribute('aria-label');''
      ) {;;
        issues.push('Icon missing aria-hidden or aria-label');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };
    });
    return issues;
<<<<<<< HEAD
  },'
};
// Export commonly used combinations'
export const _commonAriaPatterns: {;",;"
  decorativeIcon: "iconAriaPatterns.decorative"
  meaningfulIcon: "iconAriaPatterns.meaningful"
  dropdownButton: "navigationAriaPatterns.dropdownTrigger"
  navigationMenu: "navigationAriaPatterns.menu"
  menuItem: navigationAriaPatterns.menuItem,;"
};"
"""""
=======
  },;''
};
;
// Export commonly used combinations;'';
export const _commonAriaPatterns: unknown "unknown = {;",;""
  decorativeIcon: "iconAriaPatterns.decorative",;";";";";""
  meaningfulIcon: "iconAriaPatterns.meaningful",;";";";";""
  dropdownButton: "navigationAriaPatterns.dropdownTrigger",;";";";";""
  navigationMenu: "navigationAriaPatterns.menu",;";";";";""
  menuItem: "navigationAriaPatterns.menuItem",;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

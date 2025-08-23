import React, { useEffect, useRef } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  tabIndex?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  tabIndex = 0,
  onFocus,
  onBlur,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          element.click();
          break;
        case 'Escape':
          element.blur();
          break;
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    return () => element.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={ref}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white ${className}`}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
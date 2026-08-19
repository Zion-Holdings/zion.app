// app/components/AccessibilityEnhancer.tsx
'use client';

import { useEffect } from 'react';

export default function AccessibilityEnhancer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) {
      const prev = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      main.setAttribute('tabIndex', '-1');
      main.focus();
      if (prev instanceof HTMLElement) prev.focus();
    }
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="skip-to-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(event) => {
          const target = event.currentTarget;
          target.style.left = '0';
          target.style.top = '0';
          target.style.width = 'auto';
          target.style.height = 'auto';
          target.style.overflow = 'visible';
          target.style.zIndex = '9999';
          target.style.padding = '0.5rem 1rem';
          target.style.background = '#7c3aed';
          target.style.color = '#fff';
          target.style.borderRadius = '0 0 0.5rem 0';
          target.style.textDecoration = 'none';
          target.style.fontWeight = '600';
        }}
        onBlur={(event) => {
          const target = event.currentTarget;
          target.style.left = '-9999px';
          target.style.top = 'auto';
          target.style.width = '1px';
          target.style.height = '1px';
          target.style.overflow = 'hidden';
          target.style.zIndex = '';
        }}
      >
        Skip to content
      </a>
      {children}
    </>
  );
}

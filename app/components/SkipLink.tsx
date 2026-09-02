'use client';

import { useRef } from 'react';

export default function SkipLink() {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href="#main-content"
      className="skip-to-content"
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
  );
}

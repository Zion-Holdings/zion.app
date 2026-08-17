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

  return <>{children}</>;
}

// app/components/PageShell.tsx
import React from 'react';
import AccessibilityEnhancer from '@/components/AccessibilityEnhancer';

export interface PageShellProps {
  children: React.ReactNode;
  /** Page metadata — used for SEO and structured data */
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * PageShell — the root page shell used in app/layout.tsx.
 * Wraps all page content with AccessibilityEnhancer and main-content container.
 * Navigation and Footer are rendered at the layout level, not here.
 *
 * Individual pages should use PageTemplate for consistent hero/content layout.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <AccessibilityEnhancer>
        <div id="main-content" className="flex-1">
          {children}
        </div>
      </AccessibilityEnhancer>
    </div>
  );
}

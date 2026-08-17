'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
 * Wraps all page content with Navigation (top), children (main), and Footer (bottom).
 * The AccessibilityEnhancer adds skip-link and keyboard-nav helpers.
 *
 * Individual pages should use PageTemplate for consistent hero/content layout.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <AccessibilityEnhancer>
        <Navigation />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </AccessibilityEnhancer>
    </div>
  );
}

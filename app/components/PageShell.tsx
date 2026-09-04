'use client';

import React from 'react';

export interface PageShellProps {
  children: React.ReactNode;
  /** Page metadata — used for SEO and structured data */
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * PageShell — content container for pages rendered inside app/layout.tsx.
 *
 * This deliberately does NOT render Navigation/Footer/AccessibilityEnhancer:
 * app/layout.tsx already wraps every route in them. Because StandardPage (used
 * by 100 pages) renders PageShell, doing it here shipped two <nav>, two
 * <footer> and two id="main-content" nodes on every page -- duplicate IDs are
 * invalid HTML and point the skip link at the wrong target.
 *
 * Props are kept optional and unused-but-accepted so existing callers keep
 * type-checking; individual pages use PageTemplate for hero/content layout.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {children}
    </div>
  );
}

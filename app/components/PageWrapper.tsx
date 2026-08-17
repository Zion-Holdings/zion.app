import React, { ReactNode } from 'react';

/**
 * PageWrapper — Unified page container that replaces divergent
 * <main> + <div className="container-page|custom-padding"> patterns.
 *
 * Root layout already renders <main> + bg gradient div, so this component
 * only handles the inner content container, ensuring consistent spacing
 * and max-width across all pages.
 *
 * Usage:
 *   <PageWrapper>
 *     <Breadcrumb ... />
 *     <h1>...</h1>
 *   </PageWrapper>
 */
export default function PageWrapper({
  children,
  className = '',
  centered = false,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`
        container-page py-16 md:py-20
        ${centered ? 'max-w-4xl mx-auto' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}

import React, { ReactNode } from 'react';

/**
 * Section — Reusable page section component ensuring consistent spacing
 * and styling across all pages.
 *
 * Usage:
 *   <Section>
 *     <h2>...</h2>
 *     <p>...</p>
 *   </Section>
 *
 *   <Section variant="dark" className="py-12">
 *     <SectionHeading>...</SectionHeading>
 *   </Section>
 */
export default function Section({
  children,
  className = '',
  variant = 'default',
  id,
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent' | 'none';
  id?: string;
  tight?: boolean;
}) {
  const baseClasses = 'w-full';
  const variantClasses: Record<string, string> = {
    default: '',
    dark: 'bg-slate-950/40 border-y border-slate-800/60',
    accent: 'bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 border-y border-slate-800/60',
    none: '',
  };
  const paddingClasses = tight ? 'py-8' : 'py-16 md:py-20';

  return (
    <section
      id={id}
      className={`${baseClasses} ${paddingClasses} ${variantClasses[variant]} ${className}`.trim().replace(/\s+/g, ' ')}
    >
      <div className="container-page">
        {children}
      </div>
    </section>
  );
}

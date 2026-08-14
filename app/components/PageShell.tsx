'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

export interface PageShellProps {
  title?: string;
  description?: string;
  canonical?: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
  children: ReactNode;
}

export default function PageShell({
  title,
  description,
  canonical,
  breadcrumbs,
  className = '',
  children,
}: PageShellProps) {
  const effectiveBreadcrumbs = breadcrumbs && breadcrumbs.length > 0
    ? breadcrumbs
    : title
      ? [{ label: 'Home', href: '/' }, { label: title }]
      : [];

  return (
    <div className={`min-h-screen bg-slate-950 text-white flex flex-col ${className}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-white focus:text-slate-900 focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <main id="main-content" className="flex-1">
        {(title || effectiveBreadcrumbs.length > 0) && (
          <section className="pt-16 pb-10 px-4">
            <div className="container-page">
              {effectiveBreadcrumbs.length > 1 && (
                <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
                  <ol className="flex flex-wrap items-center gap-2">
                    {effectiveBreadcrumbs.map((crumb, i) => {
                      const isLast = i === effectiveBreadcrumbs.length - 1;
                      return (
                        <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                          {i > 0 && <span aria-hidden="true">/</span>}
                          {isLast || !crumb.href ? (
                            <span className="text-slate-300" aria-current={isLast ? 'page' : undefined}>
                              {crumb.label}
                            </span>
                          ) : (
                            <Link href={crumb.href} className="hover:text-purple-400 transition">
                              {crumb.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              )}
              {title && (
                <div className="max-w-4xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {title}
                  </h1>
                  {description && (
                    <p className="mt-3 text-lg text-slate-300 leading-relaxed max-w-3xl">
                      {description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>
        )}
        <div className="container-page">{children}</div>
      </main>
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
    </div>
  );
}

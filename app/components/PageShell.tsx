'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface PageShellProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
  children?: React.ReactNode;
  className?: string;
}

const SITE = 'https://ziontechgroup.com';
const ORG = 'Zion Tech Group';
const PHONE = '+1 302 464 0950';
const EMAIL = 'kleber@ziontechgroup.com';

export default function PageShell({
  title,
  description,
  canonical,
  jsonLd,
  children,
  className = '',
}: PageShellProps) {
  const url = canonical || SITE;

  return (
    <main className={`min-h-screen bg-slate-950 ${className}`}>
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">{title}</h1>
        {description ? (
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">{description}</p>
        ) : null}

        {children}

        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: title,
            description: description || title,
            url,
            publisher: {
              '@type': 'Organization',
              name: ORG,
              url: SITE,
            },
            ...(jsonLd || {}),
          }}
        />

        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">
            Get Your Custom Proposal →
          </Link>
          <p className="text-slate-400 text-sm">
            📞{' '}
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-purple-300 hover:underline">
              {PHONE}
            </a>{' '}
            · ✉️{' '}
            <a href={`mailto:${EMAIL}`} className="text-purple-300 hover:underline">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

interface MarketingPageTemplateProps {
  title: string;
  description: string;
  backLabel?: string;
  backHref?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

export default function MarketingPageTemplate({
  title,
  description,
  backLabel,
  backHref,
  primaryCta,
  secondaryCta,
  children,
}: MarketingPageTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        {backHref && backLabel ? (
          <Link href={backHref} className="text-purple-400 hover:underline text-sm mb-6 inline-block">
            {backLabel}
          </Link>
        ) : null}
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-slate-300 text-base leading-relaxed mb-6">{description}</p>
          {children}
          <div className="flex flex-wrap items-center gap-4">
            {primaryCta ? (
              <Link href={primaryCta.href} className="btn-primary">{primaryCta.label}</Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="btn-secondary">{secondaryCta.label}</Link>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

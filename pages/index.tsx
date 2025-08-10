import React from 'react';
import EnhancedLayout from '@/components/layout/EnhancedLayout';

export default function HomePage() {
  const cards = [
    {
      title: 'Autonomous SEO Enhancer',
      desc: 'Continuously improves page metadata using AI with safe heuristics fallback.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/tree/main/data/page-metadata', label: 'Metadata (repo dir)' },
      ],
    },
    {
      title: 'Structured Data (JSON-LD)',
      desc: 'Keeps JSON-LD in sync for better search visibility.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/tree/main/data/structured-data', label: 'JSON-LD (repo dir)' },
      ],
    },
    {
      title: 'OG Banner Builder',
      desc: 'Generates social preview images automatically.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/tree/main/public/og', label: 'OG Images (repo dir)' },
      ],
    },
    {
      title: 'i18n SEO Generator',
      desc: 'Produces localized SEO metadata (es, pt) using AI when available.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/tree/main/data/page-metadata/i18n', label: 'i18n Metadata (repo dir)' },
      ],
    },
    {
      title: 'Keyword Gap Analyzer',
      desc: 'Identifies missing high-impact keywords and topic clusters.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/blob/main/data/reports/seo/keyword-gaps.json' , label: 'Keyword Report' }
      ],
    },
    {
      title: 'Analytics Snapshot',
      desc: 'Daily growth metrics snapshots, tracked over time.',
      links: [
        { href: 'https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/growth', label: 'Growth Reports (repo dir)' },
      ],
    },
  ];

  return (
    <EnhancedLayout>
      <section className="py-10">
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">Intelligent, innovative, and useful automations running 24/7 in the cloud. No physical machines. No human interaction. All changes auto-synced to the repository every few minutes.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg border p-5 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
            <div className="flex gap-3 mt-3 flex-wrap">
              {c.links.map((l) => (
                <a key={l.label} href={l.href} className="text-blue-600 hover:underline text-sm">{l.label}</a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 text-xs text-gray-500">
        <p>Automation status updates are committed by GitHub Actions. View recent runs in the repository’s Actions tab.</p>
      </section>
    </EnhancedLayout>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search Zion Tech Group services and solutions.',
  alternates: { canonical: '/search/' },

  openGraph: {
    title: 'Search',
    description: 'Search Zion Tech Group services and solutions.',
    url: 'https://ziontechgroup.com/search/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

const SERVICES = [
  { title: 'Managed IT', slug: 'managed-it', category: 'Infrastructure' },
  { title: 'Cybersecurity', slug: 'cybersecurity', category: 'Security' },
  { title: 'Cloud Services', slug: 'cloud', category: 'Infrastructure' },
  { title: 'AI Automation', slug: 'ai-automation', category: 'AI' },
  { title: 'Networking', slug: 'networking', category: 'Infrastructure' },
  { title: 'Consulting', slug: 'consulting', category: 'Advisory' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filtered = SERVICES.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="min-h-screen bg-slate-950 py-20">

    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "Search", description: "Search Zion Tech Group services and solutions.", url: "https://ziontechgroup.com/search/}} />
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Search Services</h1>
        <p className="text-slate-400 mb-8">Find the right service for your business.</p>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services..."
          className="w-full md:w-1/2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 mb-8"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="glass-card group hover:border-purple-500/40 transition-colors block">
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
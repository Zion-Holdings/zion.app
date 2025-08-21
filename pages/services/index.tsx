import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const defaultCategories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
  'Security',
  'Analytics & BI',
  'AI & Machine Learning',
  'AI Safety & Governance',
  'AI Quality & Observability'
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as any[]).concat(extraServices as any[], additionalEnhancedServices as any[], newlyAddedServices as any[]);
  const discoveredCategories = Array.from(new Set(all.map((s) => s.category).filter(Boolean)));
  const categories = Array.from(new Set([...defaultCategories, ...discoveredCategories]));
  const byCategory: Record<string, any[]> = {};
  for (const c of categories) byCategory[c] = [];
  for (const s of all) {
    const cat = s.category && categories.includes(s.category) ? s.category : 'Developer Tools';
    byCategory[cat].push(s);
  }

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Browse 350+ real micro SaaS, IT, and AI services with transparent pricing and fast onboarding." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">All Services</h1>
          <p className="text-gray-300 text-lg">Productized solutions across AI, cloud, DevOps, observability, and more.</p>
        </div>

        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, 12).map((s) => {
                const slug = s.link ? (() => { try { const u = new URL(s.link); const p = u.pathname.replace(/^\/+|\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(s.id || s.name || ''); } catch { return toSlug(s.id || s.name || ''); } })() : toSlug(s.id || s.name || '');
                return (
                  <Card key={s.id || s.name} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">{s.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{s.name}</h3>
                    <p className="text-gray-300 line-clamp-3 mb-3">{s.tagline || s.description}</p>
                    <div className="text-gray-200 font-bold mb-4">{s.price}<span className="text-sm text-gray-400 font-medium">{s.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={`/services/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">View</Link>
                      <Link href={s.link || `/services/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50">Learn</Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </UltraFuturisticBackground>
  );
}


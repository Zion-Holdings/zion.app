// app/page.tsx — Home / Landing Page
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from './data/servicesData';

const CATEGORIES = [
  { key: 'ai', label: 'AI Services', emoji: '🧠' },
  { key: 'it', label: 'IT Services', emoji: '🖥️' },
  { key: 'cloud', label: 'Cloud Services', emoji: '☁️' },
  { key: 'security', label: 'Security Services', emoji: '🔐' },
  { key: 'data', label: 'Data Analytics', emoji: '📊' },
  { key: 'automation', label: 'Automation', emoji: '🤖' },
  { key: 'micro-saas', label: 'Micro-SaaS Products', emoji: '🚀' },
  { key: 'devops', label: 'DevOps and Platform', emoji: '⚙️' },
  { key: 'blockchain', label: 'Blockchain and Web3', emoji: '⛓️' },
  { key: 'iot', label: 'IoT and Edge', emoji: '📡' },
];

const byStage = useMemo(() => {
  const acc: Record<string, number> = { published: 0, beta: 0, planned: 0 };
  allServices.forEach((s: any) => { if (s.stage in acc) acc[s.stage]++; });
  return acc;
}, []);

export default function HomePage() {
  const serviceCount = allServices.length;
  const published = (byStage as any).published || 0;
  const beta = (byStage as any).beta || 0;
  const planned = (byStage as any).planned || 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container-page pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span>
              <span className="font-bold gradient-text tabular-nums">{serviceCount.toLocaleString()}</span> Services — Live Now
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI & IT Services</span>
              <br />
              <span className="text-white">for Your Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {serviceCount.toLocaleString()} real-world AI, IT, cloud, security, data, automation, micro-SaaS, DevOps, blockchain, and IoT services — from machine learning to cybersecurity, CRM to 5G networks. Get a free, custom proposal in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">⚡ Get Your Custom Proposal →</Link>
              <Link href="/services/" className="btn-secondary text-lg px-10 py-4">🛠️ Explore All {serviceCount}+ Services</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> US-Based Team</div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> SLA Guaranteed</div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> HIPAA Ready</div>
              <div className="flex items-center gap-2"><span className="text-green-400">✓</span> 24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Stats */}
      <section className="border-t border-slate-800">
        <div className="container-page py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 rounded-xl border border-emerald-500/20 p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{published}</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider">Published</div>
              <div className="text-xs text-slate-500">Live production services</div>
            </div>
            <div className="bg-slate-900/70 rounded-xl border border-purple-500/20 p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{beta}</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider">Beta</div>
              <div className="text-xs text-slate-500">Early access — refined live</div>
            </div>
            <div className="bg-slate-900/70 rounded-xl border border-amber-500/20 p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">{planned}</div>
              <div className="text-sm text-slate-300 uppercase tracking-wider">Coming Soon</div>
              <div className="text-xs text-slate-500">In the pipeline — scheduled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-slate-800">
        <div className="container-page py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => {
              const count = allServices.filter((s: any) => s.category === cat.key).length;
              return (
                <Link
                  key={cat.key}
                  href={`/services/?category=${cat.key}`}
                  className="group block rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{cat.emoji}</div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-1 leading-snug">{cat.label}</h3>
                  <p className="text-xs text-slate-500">{count} services</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-slate-800">
        <div className="container-page py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-400 mb-8">Book a free consultation and get a custom proposal in minutes.</p>
            <Link href="https://calendly.com/kleber-ziontechgroup/consultation" className="btn-primary text-lg px-10 py-4">📅 Book Free Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

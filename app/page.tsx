// app/page.tsx — Home / Landing Page
'use client';

import Link from 'next/link';
import { allServices, type Service } from './data/servicesData';

const SERVICE_COUNT = allServices.length;

const AI_SERVICES = allServices.filter((s: any) => {
  const cat = String(s.category || s.service_type || s.type || '').toLowerCase();
  return cat.includes('aitools') || cat.includes('agent') || cat.includes('ai') || cat.includes('llm') || cat.includes('machine-learning') || cat.includes('generative-ai');
}).slice(0, 12);

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
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container-page pt-28 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-purple-200/80 mb-4">Zion Tech Group • Autonomous AI & IT Services</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI & IT Services</span>
              <br />
              <span className="text-white">Built and Operated by AI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Explore {SERVICE_COUNT.toLocaleString()} production-ready services across AI, IT, cloud, security, data, automation, micro-SaaS, DevOps, blockchain, and IoT. Get a custom proposal in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/configurator" className="btn-primary text-base px-8 py-3">⚡ Get Your Custom Proposal →</Link>
              <Link href="/services/" className="btn-secondary text-base px-8 py-3">🛠️ Browse Services</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 text-sm mt-8">
              <span className="text-green-400">✓ US-Based Team</span>
              <span className="text-green-400">✓ SLA Guaranteed</span>
              <span className="text-green-400">✓ HIPAA Ready</span>
              <span className="text-green-400">✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="border-t border-slate-800">
        <div className="container-page py-12">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">What you can do now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="https://calendly.com/kleber-ziontechgroup/consultation" className="rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/30 p-6 transition-colors">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold text-white">Book a consultation</h3>
              <p className="text-sm text-slate-400 mt-1">Pick a time and get a real proposal from our team.</p>
            </Link>
            <Link href="/services/" className="rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/30 p-6 transition-colors">
              <div className="text-2xl mb-2">🧭</div>
              <h3 className="font-semibold text-white">Explore services</h3>
              <p className="text-sm text-slate-400 mt-1">Browse the full catalog by category and depth.</p>
            </Link>
            <Link href="/dashboard/" className="rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/30 p-6 transition-colors">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold text-white">See it built by AI</h3>
              <p className="text-sm text-slate-400 mt-1">Watch the agent fleet maintain this site live.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="border-t border-slate-800">
        <div className="container-page py-12">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.key}
                href={`/services/?category=${cat.key}`}
                className="group block rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{cat.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Spotlight */}
      <section className="border-t border-slate-800">
        <div className="container-page py-12">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">AI Services Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AI_SERVICES.slice(0, 6).map((svc: any) => (
              <Link key={svc.id || svc.slug || svc.title} href={svc.href || `/services/${svc.slug || svc.id}`} className="rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-colors">
                <div className="text-sm text-slate-400 mb-1">{String(svc.category || svc.service_type || 'AI').replace(/^aitools$/i, 'AI Tools').replace(/^agent$/i, 'Agent').replace(/^llm$/i, 'LLM')}</div>
                <h3 className="font-semibold text-white mb-2 leading-snug">{svc.title || svc.name || 'Service'}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{svc.description || 'Production-ready AI service with hands-on implementation and support.'}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="border-t border-slate-800">
        <div className="container-page py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">Talk to a real expert</h2>
            <p className="text-slate-400 mb-6">Book a free consultation or email us directly.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="https://calendly.com/kleber-ziontechgroup/consultation" className="btn-primary text-base px-8 py-3">📅 Book Free Consultation</Link>
              <Link href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-base px-8 py-3">✉ Email Zion Tech Group</Link>
            </div>
            <p className="text-slate-500 text-sm mt-4">📞 +1 302 464 0950 • 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </main>
  );
}

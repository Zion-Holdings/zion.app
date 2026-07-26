'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import ServiceCounter from '@/components/ServiceCounter';

export default function Home() {
  const [query, setQuery] = useState('');
  const serviceCount = 3129;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    // Placeholder: full service search is available under /services
    return [];
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container-page pt-28 pb-20 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">●</span> {serviceCount} Services — Live Now
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI &amp; IT Services</span>
            <br />
            <span className="text-white">for Your Business</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Outcome-first delivery with real accountability: AI implementation, managed IT, cloud, security, data, automation, Micro-SaaS, DevOps, blockchain, and IoT.
            We build production-ready systems, not slide decks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg px-10 py-4">
              📅 Book a Free Consultation
            </a>
            <Link href="/services/" className="btn-secondary text-lg px-10 py-4">
              {`🛠️ Explore All ${serviceCount}+ Services`}
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-10 py-4">
              💰 Pricing
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">🛠 Browse services</Link>
            <Link href="/new-ai-services" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">✨ New AI Services</Link>
            <Link href="/pricing" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">💰 Pricing</Link>
            <Link href="/tools" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">🧰 Free Tools</Link>
            <Link href="/case-studies" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">📈 Case studies</Link>
            <Link href="/contact" className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-sm hover:bg-slate-700/80 hover:text-purple-300 hover:border-purple-500/30 transition-all font-medium">📞 Contact</Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Outcomes, not just features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { title:'Revenue impact', desc:'Services tied to measurable business outcomes: pipeline, cost reduction, speed-to-market.' },
              { title:'Faster onboarding', desc:'Many engagements start within days, with scoped acceptance criteria and clear milestones.' },
              { title:'US-based delivery', desc:'Close collaboration with clear ownership, responsive communication, and SLA-backed support.' },
              { title:'Security-first', desc:'Controls, compliance, and architecture review built into delivery, not bolted on afterward.' },
              { title:'Scalable operations', desc:'Automation and reusable systems that grow with your team instead of adding headcount.' },
              { title:'Managed growth path', desc:'Start lightweight. Expand services as your needs grow; no forced long-term lock-in.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Popular services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/services?category=ai', title: 'AI &amp; Machine Learning', desc: 'Automation-first AI pilots with workflow integration, measurable ROI, and production-ready delivery.', badge: 'Popular' },
              { href: '/services?category=managed-it', title: 'Managed IT &amp; Support', desc: 'Help desk, endpoint management, identity, and operations coverage for growing teams.', badge: '' },
              { href: '/services?category=security', title: 'Security &amp; SOC', desc: 'Security operations, detection/response, and compliance posture aligned to business risk.', badge: 'Hot' },
              { href: '/services?category=cloud', title: 'Cloud &amp; DevOps', desc: 'Rightsizing, waste removal, CI/CD pipelines, and platform engineering that cut cost and improve release speed.', badge: '' },
              { href: '/services?category=data', title: 'Data &amp; Analytics', desc: 'Warehouse modernization, BI automation, and data products that improve decision speed.', badge: '' },
              { href: '/services?category=automation', title: 'Process Automation', desc: 'Workflow automation, integration, and agentic orchestration to reduce manual work.', badge: 'Top pick' },
              { href: '/services?category=micro-saas', title: 'Micro-SaaS', desc: 'Focused products that extend platforms and create recurring revenue from operations.', badge: '' },
              { href: '/services?category=blockchain', title: 'Blockchain &amp; Web3', desc: 'Tokenized incentives, audit-ready records, and programmable workflows.', badge: '' },
              { href: '/services?category=iot', title: 'IoT &amp; Edge', desc: 'Device connectivity, local inference, and field intelligence for physical operations.', badge: '' },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="group block rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-5 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  {service.badge ? <span className="text-[10px] uppercase tracking-wide bg-purple-500/10 border border-purple-500/20 text-purple-200 px-2 py-0.5 rounded-full">{service.badge}</span> : null}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Start with a conversation</h2>
          <p className="text-slate-400 text-center mb-8">Tell us your goal and we’ll propose the fastest path.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Link href="/contact" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all text-left">
              <div className="text-sm font-semibold text-white mb-1">Talk to an engineer</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">Short discovery call, scoped proposal, and fixed milestones.</p>
              <div className="text-purple-300 text-sm font-semibold">Go to contact →</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors">📅 Calendly</a>
                <a href="tel:+130****0950" className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors">📞 Call</a>
              </div>
            </Link>
            <Link href="/services" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all text-left">
              <div className="text-sm font-semibold text-white mb-1">Browse services</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">AI, IT, cloud, security, data, automation, and more.</p>
              <div className="text-purple-300 text-sm font-semibold">Explore catalog →</div>
            </Link>
            <Link href="/managed-it" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all text-left">
              <div className="text-sm font-semibold text-white mb-1">Managed IT</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">Support, monitoring, patching, and incident response.</p>
              <div className="text-purple-300 text-sm font-semibold">View managed IT →</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What’s next</h2>
          <p className="text-slate-400 text-center mb-8">Choose the fastest path to value.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { title: 'Start fast?', desc: 'Start with a scoped engagement plan and fixed milestones.', href: '/managed-it', cta: 'Request consultation' },
              { title: 'See results first?', desc: 'Review case studies and proof points for similar engagements.', href: '/case-studies', cta: 'View case studies' },
              { title: 'Compare pricing?', desc: 'Tiers, service lines, and client outcomes.', href: '/pricing', cta: 'See pricing and tiers' },
              { title: 'Need guidance?', desc: 'Get a personalized recommendation in minutes.', href: '/contact', cta: 'Get started' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all text-left">
                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                <div className="text-purple-300 text-sm font-semibold">{item.cta} →</div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg px-10 py-4">Book Consultation</a>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-4">Contact Sales</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

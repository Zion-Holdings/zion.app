'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

const IND_EMOJI: Record<string, string> = {
  Technology: '💻',
  'Financial Services': '🏦',
  'Retail & E-Commerce': '🛒',
  'Marketing & Sales': '📈',
  Cybersecurity: '🔒',
  Healthcare: '🏥',
  Manufacturing: '🏭',
  'Media & Entertainment': '🎬',
  Education: '🎓',
  'Data & Analytics': '📊',
  Telecommunications: '📡',
  'Transportation & Logistics': '🚚',
  'Government & Public Sector': '🏛️',
  'Real Estate & Construction': '🏗️',
  'Energy & Sustainability': '⚡',
  'Business Operations': '⚙️',
};

export const metadata = {
  title: 'Industry Solutions',
  description: 'Purpose-built AI, IT, and Micro-SaaS solutions across industries.',
};

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative container-page py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> Live Industry Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & IT Outcomes by Industry
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Purpose-built solutions for operational problems across sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary text-lg px-10 py-4">
                Browse All Services
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
                Talk to an Industry Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Solutions by Industry</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Select your industry to see concrete use cases and contact options.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Healthcare & Life Sciences', href: '/solutions/healthcare', emoji: '🏥', desc: 'AI diagnostics, EHR integration, telemedicine, patient experience automation.' },
              { title: 'Financial Services & FinTech', href: '/solutions/financial-services', emoji: '🏦', desc: 'Fraud detection, compliance automation, credit risk, digital banking.' },
              { title: 'Retail & E-Commerce', href: '/solutions/ecommerce-retail', emoji: '🛒', desc: 'Personalization, dynamic pricing, inventory AI, omnichannel optimization.' },
              { title: 'Manufacturing & Industrial', href: '/solutions/manufacturing-industrial', emoji: '🏭', desc: 'Predictive maintenance, digital twins, quality inspection AI, supply chain.' },
              { title: 'Technology & SaaS', href: '/solutions/technology-and-saas', emoji: '💻', desc: 'Cloud migration, platform engineering, DevSecOps, AI/ML infrastructure.' },
              { title: 'Logistics & Supply Chain', href: '/solutions/logistics-supply-chain', emoji: '🚚', desc: 'Route optimization, warehouse automation, fleet management, last-mile delivery.' },
              { title: 'Government & Public Sector', href: '/solutions/government-and-public-sector', emoji: '🏛️', desc: 'Citizen services AI, compliance automation, public-sector analytics, security.' },
              { title: 'Insurance', href: '/solutions/insurance', emoji: '🛡️', desc: 'Claims automation, underwriting AI, fraud prevention, policy lifecycle.' },
              { title: 'Education & EdTech', href: '/solutions/education-training', emoji: '🎓', desc: 'Adaptive learning, student analytics, content generation, LMS intelligence.' },
              { title: 'Energy & Utilities', href: '/solutions/energy-utilities', emoji: '⚡', desc: 'Grid optimization, demand forecasting, renewable integration, IoT monitoring.' },
              { title: 'Construction & Engineering', href: '/solutions/construction-engineering', emoji: '🏗️', desc: 'BIM automation, safety monitoring AI, project controls, resource planning.' },
              { title: 'Media & Entertainment', href: '/solutions/media-entertainment', emoji: '🎬', desc: 'Content generation, recommendation engines, streaming optimization, rights management.' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/70 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-xs text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">explore solutions</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <div className="h-1.5 rounded-full overflow-hidden bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-full transition-all duration-300 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="mt-3 text-sm text-purple-400 font-semibold">View solutions →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">How We Deliver</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From discovery to production with measurable milestones and outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', desc: 'Map goals, constraints, data sources, compliance needs, and success metrics.' },
              { title: 'Architecture Match', desc: 'Select best-fit platforms, service combinations, and integration patterns.' },
              { title: 'Implementation', desc: 'Build, instrument, and test with measurable acceptance criteria.' },
              { title: 'Optimize', desc: 'Monitor quality, cost, and usage; apply improvements on a continuous cycle.' },
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-purple-500/40">
                <div className="text-sm font-semibold text-purple-300 mb-2">0{i + 1}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Blueprints', desc: 'Industry-specific solution patterns cut discovery-to-deployment time.' },
              { title: 'Compliance-Ready', desc: 'HIPAA, SOC 2, PCI, GDPR, and FedRAMP-aligned controls where required.' },
              { title: 'Measurable Outcomes', desc: 'KPI-driven engagements with clear ROI, not shelfware.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="max-w-4xl mx-auto rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-slate-900/60 p-8 sm:p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Request an Industry-Specific Consultation</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Pick a sector above or contact us directly.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">Request Consultation</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg">📞 +1 302 464 0950</a>
              <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">📅 Calendly</a>
            </div>
            <p className="text-xs text-slate-500 mt-4">Primary: Calendly · Backup: Google Meet.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

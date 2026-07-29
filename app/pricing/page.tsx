// app/pricing/page.tsx — Pricing Plans
'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Pricing & Plans | Zion Tech Group',
  description: 'Engagement models and pricing tiers for AI, IT, cloud, security, and automation services. Managed service, project-based, usage-based, and hybrid plans.',
};

const plans = [
  {
    name: 'Managed Service',
    emoji: '🔄',
    price: 'From $2,500/mo',
    description: 'Ongoing managed AI/IT operations with 24/7 monitoring, incident response, and continuous optimization.',
    features: ['24/7 monitoring & support', 'SLA-backed response times', 'Monthly optimization reports', 'Dedicated account engineer'],
    cta: '/contact/',
    ctaLabel: 'Start Managed Services',
    color: 'from-purple-500/20 to-indigo-500/10',
  },
  {
    name: 'Project-Based',
    emoji: '📦',
    price: 'From $15,000',
    description: 'Fixed-scope delivery with clear milestones, timelines, and outcomes. Ideal for defined initiatives.',
    features: ['Fixed scope & timeline', 'Milestone-based delivery', 'Dedicated project team', 'Knowledge transfer included'],
    cta: '/configurator/',
    ctaLabel: 'Build Your Proposal',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    name: 'Usage-Based',
    emoji: '📊',
    price: 'Pay-as-you-go',
    description: 'Flexible consumption model for variable workloads. Scale up during peak periods, scale down when needed.',
    features: ['No long-term commitment', 'Scale up/down instantly', 'Metered usage tracking', 'Volume discounts available'],
    cta: '/pricing-calculator/',
    ctaLabel: 'Calculate Usage Cost',
    color: 'from-emerald-500/20 to-green-500/10',
  },
  {
    name: 'Hybrid',
    emoji: '🔗',
    price: 'Custom',
    description: 'Combination of managed services for core operations plus project-based work for new initiatives.',
    features: ['Mixed engagement model', 'Core ops + innovation sprints', 'Unified billing & reporting', 'Strategic roadmap planning'],
    cta: '/contact/',
    ctaLabel: 'Design Hybrid Plan',
    color: 'from-amber-500/20 to-orange-500/10',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.15),transparent_60%)]" />
        <div className="relative container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">●</span> Engagement Models
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Pricing & Plans</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
            Four engagement models designed for different stages of your AI/IT journey — from ongoing managed services to fixed-scope projects.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All plans include a US-based team, 24/7 support coverage, and our 99.9% SLA guarantee.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`glass-card flex flex-col hover:border-purple-500/40 transition-all`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${plan.color} border border-slate-700/50 text-xs text-slate-300 mb-4`}>
                  <span className="text-base">{plan.emoji}</span>
                  <span className="font-semibold">{plan.name}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.cta} className="btn-primary w-full text-center">
                  {plan.ctaLabel} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'SLA Guaranteed', desc: '99.9% uptime commitment across all managed and hybrid plans.' },
              { title: 'HIPAA Ready', desc: 'Compliant workflows, BAA-ready execution, and secure data handling.' },
              { title: 'US-Based Team', desc: 'Local engineers, no offshore handoffs, aligned time zones.' },
            ].map((item) => (
              <div key={item.title} className="glass-card text-center">
                <div className="text-xl font-bold text-white mb-1">{item.title}</div>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">
              ⚡ Get Your Custom Proposal →
            </Link>
            <p className="text-slate-500 text-xs mt-3">
              Not sure which model fits? Build a proposal and we’ll recommend the best engagement structure.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

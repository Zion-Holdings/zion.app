'use client';

import Link from 'next/link';
import ROICalculator from './ROICalculator';

const TOP_CATEGORIES = [
  { key: 'ai', label: 'AI', href: '/services/?category=ai', emoji: '🧠' },
  { key: 'it', label: 'IT', href: '/services/?category=it', emoji: '🖥️' },
  { key: 'cloud', label: 'Cloud', href: '/services/?category=cloud', emoji: '☁️' },
  { key: 'security', label: 'Security', href: '/services/?category=security', emoji: '🔐' },
  { key: 'automation', label: 'Automation', href: '/services/?category=automation', emoji: '🤖' },
  { key: 'data', label: 'Data', href: '/services/?category=data', emoji: '📊' },
];

const INDUSTRY_SOLUTIONS = [
  {
    key: 'financial-services',
    label: 'Financial Services',
    href: '/industry-solutions',
    emoji: '💳',
    description: 'Fraud detection, compliance automation, risk management',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    href: '/industry-solutions',
    emoji: '🏥',
    description: 'Medical diagnosis, telemedicine, patient outcomes',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    key: 'retail',
    label: 'Retail',
    href: '/industry-solutions',
    emoji: '🛒',
    description: 'Personalized recommendations, demand forecasting',
    color: 'from-pink-500 to-rose-600'
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing',
    href: '/industry-solutions',
    emoji: '🏭',
    description: 'Quality inspection, predictive maintenance',
    color: 'from-yellow-500 to-amber-600'
  },
];

export default function HomepageEnhancements() {
  return (
    <>
      {/* Sticky quick links */}
      <nav aria-label="Top service categories" className="sticky top-16 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="container-page">
          <div className="flex gap-2 overflow-x-auto py-2">
            {TOP_CATEGORIES.map(cat => (
              <Link key={cat.key} href={cat.href} className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/60 transition-colors">
                <span className="mr-1 opacity-70">{cat.emoji}</span>{cat.label}
              </Link>
            ))}
            <Link href="/services" className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-colors">
              All services
            </Link>
          </div>
        </div>
      </nav>

      {/* Industry Solutions Preview */}
      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Industry Solutions</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Pre-built AI solutions tailored for your industry
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRY_SOLUTIONS.map(industry => (
              <Link
                key={industry.key}
                href={industry.href}
                className="group block rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40 p-4 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{industry.emoji}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${industry.color} bg-opacity-20`}>
                    New
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {industry.label}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2">{industry.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/industry-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View All Industry Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison teaser */}
      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Compare service models</h2>
          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-8">
            Not sure whether to start with an audit, a managed service, or a custom build? We mapped the fastest paths by outcome.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Audit & roadmap', desc: '1-week assessment with prioritized recommendations and ROI estimate.', cta: '/free-audit', label: 'Free Audit' },
              { title: 'Managed service', desc: 'Day-1 coverage with outcomes, SLAs, and continuous optimization.', cta: '/services', label: 'View Managed' },
              { title: 'Custom build', desc: 'Tailored AI/Cloud/Security stack built to your stack and governance.', cta: '/contact', label: 'Request Proposal' },
            ].map(card => (
              <div key={card.title} className="glass-card flex flex-col gap-2 p-5 hover:border-purple-500/40 group transition-all">
                <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">{card.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                <Link href={card.cta} className="mt-auto text-sm font-semibold text-purple-300 hover:text-purple-200">
                  {card.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive advisory CTA */}
      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">CTO Advisory & Executive Partnership</h2>
              <p className="text-slate-300 leading-relaxed">
                Need an external teammate for architecture reviews, vendor negotiations, or board-ready execution plans?
                We work directly with founders and C-level leaders to compress roadmap-to-revenue.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Book a call</Link>
              <Link href="/services" className="px-4 py-2 rounded-lg border border-slate-700 text-slate-200 text-sm font-semibold hover:border-purple-500/60 hover:text-white transition-colors">Browse services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation pathways */}
      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Implementation pathways</h2>
          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-8">
            We adapt to your timeline, compliance posture, and operating model.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🚀', title: 'Rapid deployment', desc: 'Sprint-based delivery with measurable weekly milestones.' },
              { icon: '🏛️', title: 'Enterprise governance', desc: 'Risk, compliance, and access controls built in by default.' },
              { icon: '🧪', title: 'Pilot-first', desc: 'Start narrow, prove outcomes, then expand to additional domains.' },
              { icon: '🔁', title: 'Continuous optimization', desc: 'Cut overprovisioned spend and improve reliability on autopilot.' },
            ].map(item => (
              <div key={item.title} className="glass-card p-5 hover:border-purple-500/40 transition-all">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator for Featured Services */}
      <section className="py-20 bg-slate-900/30 border-t border-slate-800">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-heading">Calculate Your ROI</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              See potential savings with our AI solutions. Enter your revenue to get a personalized ROI estimate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ROICalculator
              serviceName="AI Fraud Detection"
              baseCost={499}
              industry="financial-services"
            />
            <ROICalculator
              serviceName="AI Medical Diagnosis"
              baseCost={599}
              industry="healthcare"
            />
            <ROICalculator
              serviceName="AI Demand Forecasting"
              baseCost={399}
              industry="retail"
            />
          </div>
        </div>
      </section>
    </>
  );
}
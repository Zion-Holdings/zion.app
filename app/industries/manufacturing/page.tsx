'use client';

import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing AI Solutions | Zion Tech Group',
  description: 'AI-powered manufacturing solutions for quality control, predictive maintenance, supply chain optimization, and factory automation.',
};

const manufacturingServices = [
  {
    id: 'ai-computer-vision-quality-inspection',
    title: 'AI Computer Vision Quality Inspection',
    description: 'Detect defects, verify assemblies, and measure consistency in production with camera and MES integrations.',
    icon: '👁️',
    href: '/services/ai-computer-vision-quality-inspection/',
    pricing: 'From $249/mo',
    category: 'ai',
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'Predictive Maintenance AI',
    description: 'Prevent equipment failures with AI-powered anomaly detection and maintenance scheduling.',
    icon: '🔧',
    href: '/services/ai-predictive-maintenance',
    pricing: 'From $199/mo',
    category: 'ai',
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'Supply Chain Optimization',
    description: 'Optimize inventory, reduce waste, and improve delivery times with AI-driven supply chain intelligence.',
    icon: '📦',
    href: '/services/ai-supply-chain-optimization',
    pricing: 'From $299/mo',
    category: 'ai',
  },
  {
    id: 'ai-factory-automation',
    title: 'Factory Automation AI',
    description: 'Automate production lines, quality control, and workflow optimization with intelligent automation.',
    icon: '🏭',
    href: '/services/ai-factory-automation',
    pricing: 'Custom',
    category: 'ai',
  },
  {
    id: 'ai-manufacturing-kpis-dashboard',
    title: 'Manufacturing KPI Dashboard',
    description: 'Real-time visibility into production metrics, quality scores, and efficiency gains.',
    icon: '📊',
    href: '/services/ai-manufacturing-kpis-dashboard',
    pricing: 'From $149/mo',
    category: 'ai',
  },
  {
    id: 'ai-digital-twin-platform',
    title: 'Digital Twin Platform',
    description: 'Create digital replicas of physical systems for simulation, optimization, and predictive analysis.',
    icon: '🔮',
    href: '/services/ai-digital-twin-platform',
    pricing: 'Custom',
    category: 'ai',
  },
];

export default function ManufacturingIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(245,158,11,0.15),rgba(245,158,11,0.12))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm mb-6">
            <span className="text-green-400">●</span> Industry 4.0 Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              AI Solutions for Manufacturing
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your factory floor with AI-powered quality control, predictive maintenance, 
            and intelligent automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              🏭 Get Manufacturing Consultation
            </Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">
              📊 View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950/30">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-amber-400">25+</div>
              <div className="text-sm text-slate-400 mt-1">Manufacturing Services</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-emerald-400">95%</div>
              <div className="text-sm text-slate-400 mt-1">Quality Improvement</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-blue-400">40%</div>
              <div className="text-sm text-slate-400 mt-1">Downtime Reduction</div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 text-center">
              <div className="text-3xl font-bold text-purple-400">2x</div>
              <div className="text-sm text-slate-400 mt-1">Productivity Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Manufacturing AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI-powered tools for quality control, maintenance, supply chain, and automation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingServices.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-amber-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-1 rounded">
                    AI Service
                  </span>
                  <span className="text-xs text-slate-500">{service.pricing}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-950/30 rounded-t-3xl">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Manufacturing AI Benefits</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Build smarter factories with AI-driven intelligence and automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Zero Defect Detection', 
                desc: 'Computer vision catches defects humans miss',
                icon: '✅'
              },
              { 
                title: 'Predictive Maintenance', 
                desc: 'Prevent costly equipment failures',
                icon: '🛠️'
              },
              { 
                title: 'Supply Chain Visibility', 
                desc: 'End-to-end tracking and optimization',
                icon: '🚚'
              },
              { 
                title: 'ROI in Weeks', 
                desc: 'Measurable cost savings from day one',
                icon: '💰'
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Smarten Your Factory?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss AI solutions for your manufacturing operation. 
            We'll provide a custom proposal with implementation timeline and ROI projections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              📞 Book Manufacturing Consultation
            </Link>
            <Link href="/request-proposal/" className="btn-secondary text-lg px-8 py-4">
              📋 Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
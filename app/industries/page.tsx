'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

// Industry data with SEO-optimized content
const INDUSTRIES = [
  { 
    key: 'technology-saas', 
    label: 'Technology & SaaS', 
    emoji: '🏭', 
    count: 145, 
    sample: 'AI Analytics & BI',
    href: '/industries/technology-saas',
    color: 'from-amber-500 to-orange-500',
    description: 'AI automation, DevOps, cloud optimization, and security solutions for technology companies. Reduce costs, improve reliability, and scale faster.',
    keywords: 'technology SaaS AI, DevOps automation, cloud cost optimization, software development AI'
  },
  { 
    key: 'media-entertainment', 
    label: 'Media & Entertainment', 
    emoji: '🎬', 
    count: 95, 
    sample: 'AI Knowledge Management',
    href: '/industries/media-entertainment',
    color: 'from-blue-500 to-cyan-500',
    description: 'AI content creation, video analysis, recommendation engines, and digital media automation for media companies.',
    keywords: 'media AI, entertainment AI, content automation, video AI'
  },
  { 
    key: 'legal-compliance', 
    label: 'Legal & Compliance', 
    emoji: '⚖️', 
    count: 77, 
    sample: 'Contract Lifecycle Intelligence',
    href: '/industries/legal-compliance',
    color: 'from-purple-500 to-pink-500',
    description: 'AI contract analysis, legal document automation, compliance monitoring, and regulatory technology solutions.',
    keywords: 'legal AI, contract automation, compliance AI, legal tech'
  },
  { 
    key: 'energy-utilities', 
    label: 'Energy & Utilities', 
    emoji: '⚡', 
    count: 69, 
    sample: 'Grid Demand Forecaster',
    href: '/industries/energy-utilities',
    color: 'from-green-500 to-emerald-500',
    description: 'AI-powered grid optimization, demand forecasting, renewable energy management, and utility automation.',
    keywords: 'energy AI, grid optimization, renewable energy AI, utility automation'
  },
  { 
    key: 'retail-ecommerce', 
    label: 'Retail & E-Commerce', 
    emoji: '🛒', 
    count: 57, 
    sample: 'Personalised Product Recommendations',
    href: '/industries/retail-ecommerce',
    color: 'from-sky-500 to-blue-600',
    description: 'AI product recommendations, inventory optimization, customer behavior analytics, and e-commerce automation.',
    keywords: 'retail AI, e-commerce AI, product recommendations, inventory optimization'
  },
  { 
    key: 'logistics-supply-chain', 
    label: 'Logistics & Supply Chain', 
    emoji: '🚚', 
    count: 57, 
    sample: 'Sustainable Supply Chain Radar',
    href: '/industries/logistics-supply-chain',
    color: 'from-rose-500 to-red-500',
    description: 'AI supply chain visibility, route optimization, demand forecasting, and logistics automation.',
    keywords: 'supply chain AI, logistics AI, route optimization, demand forecasting'
  },
  { 
    key: 'manufacturing-industrial', 
    label: 'Manufacturing & Industrial', 
    emoji: '🏗️', 
    count: 25, 
    sample: 'Vision Quality Inspection',
    href: '/industries/manufacturing-industrial',
    color: 'from-yellow-500 to-amber-500',
    description: 'AI quality inspection, predictive maintenance, production optimization, and industrial automation.',
    keywords: 'manufacturing AI, industrial AI, quality inspection, predictive maintenance'
  },
  { 
    key: 'financial-services-fintech', 
    label: 'Financial Services & FinTech', 
    emoji: '💳', 
    count: 23, 
    sample: 'Commerce Flow Orchestrator',
    href: '/industries/financial-services-fintech',
    color: 'from-indigo-500 to-purple-500',
    description: 'AI fraud detection, compliance automation, secure cloud infrastructure, and financial data analytics.',
    keywords: 'fintech AI, financial AI, fraud detection, compliance automation'
  },
  { 
    key: 'education-research', 
    label: 'Education & Research', 
    emoji: '🎓', 
    count: 15, 
    sample: 'Learning Optimisation',
    href: '/industries/education-research',
    color: 'from-cyan-500 to-teal-500',
    description: 'AI-powered learning platforms, research automation, student analytics, and educational technology solutions.',
    keywords: 'education AI, research AI, learning automation, student analytics'
  },
  { 
    key: 'healthcare-life-sciences', 
    label: 'Healthcare & Life Sciences', 
    emoji: '🏥', 
    count: 12, 
    sample: 'AI Drug Discovery',
    href: '/industries/healthcare-life-sciences',
    color: 'from-pink-500 to-rose-500',
    description: 'AI medical diagnosis, drug discovery, patient scheduling, clinical data analytics, and HIPAA-compliant solutions.',
    keywords: 'healthcare AI, medical AI, drug discovery, HIPAA compliant'
  },
];

export default function IndustrySolutionsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredIndustries = useMemo(() => {
    if (!searchQuery.trim()) return INDUSTRIES;
    const q = searchQuery.toLowerCase();
    return INDUSTRIES.filter(ind => 
      ind.label.toLowerCase().includes(q) || 
      ind.description.toLowerCase().includes(q) ||
      ind.keywords.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-Optimized Industries
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Industry AI Solutions
              </span>{' '}
              <span className="text-white">by Sector</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered solutions for 10+ industries. Find the right AI services for your sector's 
              unique challenges and opportunities — from healthcare to fintech, manufacturing to media.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto mb-12">
              <input
                type="text"
                placeholder="Search industries (e.g., healthcare, fintech, manufacturing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/services" className="btn-primary text-lg px-10 py-4">
                🛠️ Browse All Services
              </Link>
              <Link href="/configurator" className="btn-secondary text-lg px-10 py-4">
                ⚡ Get Custom Recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions by Industry
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each industry page provides tailored AI, IT, cloud, and automation solutions 
              built for sector-specific challenges and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredIndustries.map((ind) => (
              <Link
                key={ind.key}
                href={ind.href}
                className="group block rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40 p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{ind.emoji}</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">{ind.count}+</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {ind.label}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3">{ind.description}</p>
              </Link>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 mb-4">No industries match your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-all"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                AI Service Categories
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Browse our complete catalog of 4,500+ AI, IT, and automation services across all industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            <Link href="/services" className="glass-card p-5 hover:border-purple-500/40">
              <div className="text-white font-semibold">Complete service catalog</div>
              <div className="text-slate-400 text-sm mt-1">All categories and 4,500+ services</div>
            </Link>
            <Link href="/ai-services" className="glass-card p-5 hover:border-purple-500/40">
              <div className="text-white font-semibold">AI services</div>
              <div className="text-slate-400 text-sm mt-1">Machine learning and applied AI</div>
            </Link>
            <Link href="/configurator" className="glass-card p-5 hover:border-purple-500/40">
              <div className="text-white font-semibold">Custom proposal</div>
              <div className="text-slate-400 text-sm mt-1">Tailored recommendations in minutes</div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View Full Service Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get Industry-Specific AI Recommendations
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our AI agents work 24/7 to match you with the perfect industry solutions. 
            Get a free, custom proposal tailored to your sector in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
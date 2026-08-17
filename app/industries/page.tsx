'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '../data/servicesData';
import { CATEGORIES } from '../constants/categories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry-Specific AI Solutions Built for Real Business Impact | Zion Tech Group',
  description: 'AI and IT services tailored to your industry's unique challenges and opportunities. 
              From healthcare to finance, we deliver measurable outcomes with transparent pricing.',
  alternates: { canonical: '/industri/' },
};


// Industry definitions with icons, colors, and descriptions
const INDUSTRIES = [
  {
    key: 'healthcare',
    label: 'Healthcare & Life Sciences',
    emoji: '🏥',
    color: 'from-emerald-500 to-teal-600',
    description: 'AI-powered clinical automation, drug discovery, patient insights, and regulatory compliance solutions that accelerate healthcare innovation.',
    icon: '🧬',
    servicesCount: 0,
    sampleServices: ['AI Drug Discovery', 'Clinical Trial Automation', 'Patient Risk Prediction']
  },
  {
    key: 'finance',
    label: 'Finance & FinTech',
    emoji: '💳',
    color: 'from-indigo-500 to-purple-600',
    description: 'Fraud detection, algorithmic trading, risk management, and regulatory compliance solutions built for the financial services industry.',
    icon: '📈',
    servicesCount: 0,
    sampleServices: ['AI Fraud Detection', 'Algorithmic Trading', 'Risk Scoring Engine']
  },
  {
    key: 'retail',
    label: 'Retail & E-Commerce',
    emoji: '🛍️',
    color: 'from-pink-500 to-rose-600',
    description: 'Personalized recommendations, inventory optimization, customer experience automation, and supply chain intelligence for modern retailers.',
    icon: '🛒',
    servicesCount: 0,
    sampleServices: ['AI Personalized Recommendations', 'Inventory Forecasting', 'Customer Journey Analytics']
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing & Industrial',
    emoji: '🏭',
    color: 'from-amber-500 to-orange-600',
    description: 'Computer vision quality inspection, predictive maintenance, supply chain optimization, and IoT-enabled production intelligence.',
    icon: '⚙️',
    servicesCount: 0,
    sampleServices: ['AI Quality Inspection', 'Predictive Maintenance', 'Supply Chain Radar']
  },
  {
    key: 'telecom',
    label: 'Telecommunications',
    emoji: '📡',
    color: 'from-cyan-500 to-blue-600',
    description: 'Network optimization, 5G infrastructure automation, customer churn prediction, and edge computing solutions for telecom operators.',
    icon: '📶',
    servicesCount: 0,
    sampleServices: ['5G Network Optimization', 'Customer Churn Prediction', 'Edge Computing Platform']
  },
  {
    key: 'energy',
    label: 'Energy & Utilities',
    emoji: '⚡',
    color: 'from-yellow-500 to-amber-600',
    description: 'Smart grid management, demand forecasting, renewable energy optimization, and sustainability tracking for energy companies.',
    icon: '🔋',
    servicesCount: 0,
    sampleServices: ['Grid Demand Forecasting', 'Renewable Energy Optimizer', 'Carbon Footprint Tracker']
  },
  {
    key: 'logistics',
    label: 'Logistics & Supply Chain',
    emoji: '🚚',
    color: 'from-green-500 to-emerald-600',
    description: 'Route optimization, warehouse automation, shipment tracking, and sustainable supply chain solutions for logistics providers.',
    icon: '🚛',
    servicesCount: 0,
    sampleServices: ['Route Optimization', 'Warehouse Automation', 'Sustainable Supply Chain Radar']
  },
  {
    key: 'gaming',
    label: 'Gaming & Entertainment',
    emoji: '🎮',
    color: 'from-purple-500 to-fuchsia-600',
    description: 'Player behavior analytics, game testing automation, content generation, and liveOps platforms for game studios.',
    icon: '🎯',
    servicesCount: 0,
    sampleServices: ['Player Behavior Analytics', 'Game Testing Automation', 'AI Content Generator']
  },
  {
    key: 'realestate',
    label: 'Real Estate & PropTech',
    emoji: '🏢',
    color: 'from-blue-500 to-cyan-600',
    description: 'Property valuation AI, tenant matching, smart building automation, and market analysis for real estate professionals.',
    icon: '🏠',
    servicesCount: 0,
    sampleServices: ['Property Valuation AI', 'Tenant Matching Engine', 'Market Analysis Platform']
  },
  {
    key: 'healthcare-lifecycle',
    label: 'AI Contract Lifecycle',
    emoji: '📄',
    color: 'from-violet-500 to-indigo-600',
    description: 'Automated contract review, clause analysis, renewal tracking, and compliance monitoring for enterprise legal teams.',
    icon: '🤝',
    servicesCount: 0,
    sampleServices: ['AI Legal Contract Analyzer', 'Contract Lifecycle Intelligence', 'Clause Extraction Engine']
  }
];

// Industry service mapping
const INDUSTRY_SERVICE_KEY_MAP: Record<string, string[]> = {
  healthcare: ['ai-healthcare-d36b3adb', 'ai-clinical-decision-support', 'patient-risk-prediction-engine'],
  finance: ['ai-fraud-detection', 'algorithmic-trading-platform', 'risk-scoring-engine'],
  retail: ['ai-personalized-recommendations', 'inventory-forecasting-platform', 'customer-journey-analytics'],
  manufacturing: ['ai-quality-inspection', 'predictive-maintenance-platform', 'supply-chain-radar'],
  telecom: ['5g-network-optimization', 'customer-churn-prediction', 'edge-computing-platform'],
  energy: ['grid-demand-forecaster', 'renewable-energy-optimizer', 'carbon-footprint-tracker'],
  logistics: ['route-optimization-engine', 'warehouse-automation-platform', 'sustainable-supply-chain-radar'],
  gaming: ['player-behavior-analytics', 'game-testing-automation', 'ai-content-generator'],
  realestate: ['property-valuation-ai', 'tenant-matching-engine', 'market-analysis-platform'],
  'healthcare-lifecycle': ['ai-legal-contract-analyzer', 'contract-lifecycle-intelligence', 'clause-extraction-engine'],
};

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Calculate service counts per industry from actual data
  const industryStats = useMemo(() => {
    return INDUSTRIES.map(industry => {
      const servicesInIndustry = allServices.filter((s: Service) => 
        s.industry?.toLowerCase() === industry.key.toLowerCase() ||
        industry.key.includes(s.industry?.toLowerCase()) ||
        INDUSTRY_SERVICE_KEY_MAP[industry.key]?.includes(s.id)
      );
      return {
        ...industry,
        servicesCount: servicesInIndustry.length
      };
    });
  }, [allServices]);

  const filteredIndustries = useMemo(() => {
    if (!searchQuery.trim()) return industryStats;
    const q = searchQuery.toLowerCase();
    return industryStats.filter(ind => 
      ind.label.toLowerCase().includes(q) ||
      ind.description.toLowerCase().includes(q) ||
      ind.sampleServices.some(s => s.toLowerCase().includes(q))
    );
  }, [industryStats, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Industry Solutions | Zion Tech Group',
            description: 'AI and IT solutions tailored for healthcare, finance, retail, manufacturing, telecommunications, energy, logistics, gaming, real estate, and legal industries.',
            url: 'https://ziontechgroup.com/industries',
            isPartOf: {
              '@type': 'WebSite',
              url: 'https://ziontechgroup.com',
              name: 'Zion Tech Group'
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-y border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-900/40 to-pink-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(120,50,200,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(200,50,150,0.2),transparent_50%)]" />
        <div className="relative container-page py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> Industry Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Industry-Specific AI Solutions</span>
              </br />
              <span className="text-white">Built for Real Business Impact</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI and IT services tailored to your industry's unique challenges and opportunities. 
              From healthcare to finance, we deliver measurable outcomes with transparent pricing.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
                  fill="none" stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search industries... (healthcare, finance, retail, etc.)"
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 outline-none
                           transition-all focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full
                             bg-slate-700 text-slate-300 text-xs hover:bg-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">{INDUSTRIES.length}+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Industries</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400">{allServices.length}+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Services</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400">8+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">AI Agents</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-amber-400">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Autonomous Ops</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                📞 Get Industry-Specific Proposal
              </Link>
              <Link href="/services/" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse All Services
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">
                ✉ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container-page py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Solutions by Industry
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore AI and IT solutions specifically designed for your industry's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((industry) => (
              <Link
                key={industry.key}
                href={`/industries/${industry.key}`}
                className="group block"
              >
                <div className={`relative rounded-2xl border bg-gradient-to-br ${industry.color} p-6 
                  hover:scale-[1.02] transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{industry.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{industry.label}</h3>
                      <p className="text-slate-300 text-sm mb-3 line-clamp-3">{industry.description}</p>
                      <div className="text-xs text-slate-400 mb-3">
                        <span className="text-purple-400 font-semibold">{industry.servicesCount}+ services</span> in this industry
                      </div>
                      <div className="text-xs text-slate-500">
                        Sample: {industry.sampleServices.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm text-purple-300 font-medium group-hover:text-white transition-colors">
                      Explore {industry.label} solutions →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-y border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-900/40 to-pink-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,50,200,0.3),transparent_50%)]" />
        <div className="relative container-page py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not seeing your industry?
            </h3>
            <p className="text-slate-300 mb-6">
              We work across 20+ industries and can customize solutions for any sector.
              Get in touch for a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="btn-primary text-lg px-8 py-3">
                ✉ Email for Custom Solution
              </a>
              <Link href="/contact/" className="btn-secondary text-lg px-8 py-3">
                📅 Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
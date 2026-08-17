import { Metadata } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import PageTemplate from '@/components/PageTemplate';
import { allServices, type Service } from '../data/servicesData';
import { CATEGORIES } from '../constants/categories';

export const metadata: Metadata = {
  title: 'Industry-Specific AI Solutions Built for Real Business Impact | Zion Tech Group',
  description: 'AI and IT services tailored to your industry\'s unique challenges and opportunities. From healthcare to finance, we deliver measurable outcomes with transparent pricing.',
  alternates: { canonical: '/industries' },
};

// Industry definitions with icons, colors, and descriptions
const INDUSTRIES = [
  {
    key: 'healthcare',
    label: 'Healthcare & Life Sciences',
    emoji: '🏥',
    color: 'from-emerald-500 to-teal-600',
    description: 'AI-powered clinical automation, drug discovery, patient insights, and regulatory compliance solutions.',
    icon: '🧬',
    servicesCount: 0,
    sampleServices: ['AI Drug Discovery', 'Clinical Trial Automation', 'Patient Risk Prediction'],
  },
  {
    key: 'finance',
    label: 'Finance & FinTech',
    emoji: '💳',
    color: 'from-indigo-500 to-purple-600',
    description: 'Fraud detection, algorithmic trading, risk management, and regulatory compliance solutions.',
    icon: '📈',
    servicesCount: 0,
    sampleServices: ['AI Fraud Detection', 'Algorithmic Trading', 'Risk Scoring Engine'],
  },
  {
    key: 'retail',
    label: 'Retail & E-Commerce',
    emoji: '🛍️',
    color: 'from-pink-500 to-rose-600',
    description: 'Personalized recommendations, inventory optimization, customer experience automation, and supply chain intelligence.',
    icon: '🛒',
    servicesCount: 0,
    sampleServices: ['AI Personalized Recommendations', 'Inventory Forecasting', 'Customer Journey Analytics'],
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing & Industrial',
    emoji: '🏭',
    color: 'from-amber-500 to-orange-600',
    description: 'Computer vision quality inspection, predictive maintenance, supply chain optimization, and IoT-enabled production intelligence.',
    icon: '⚙️',
    servicesCount: 0,
    sampleServices: ['AI Quality Inspection', 'Predictive Maintenance', 'Supply Chain Radar'],
  },
  {
    key: 'telecom',
    label: 'Telecommunications',
    emoji: '📡',
    color: 'from-cyan-500 to-blue-600',
    description: 'Network optimization, 5G infrastructure automation, customer churn prediction, and edge computing solutions.',
    icon: '📶',
    servicesCount: 0,
    sampleServices: ['5G Network Optimization', 'Customer Churn Prediction', 'Edge Computing Platform'],
  },
  {
    key: 'energy',
    label: 'Energy & Utilities',
    emoji: '⚡',
    color: 'from-yellow-500 to-amber-600',
    description: 'Smart grid management, demand forecasting, renewable energy optimization, and sustainability tracking.',
    icon: '🔋',
    servicesCount: 0,
    sampleServices: ['Grid Demand Forecasting', 'Renewable Energy Optimizer', 'Carbon Footprint Tracker'],
  },
  {
    key: 'logistics',
    label: 'Logistics & Supply Chain',
    emoji: '🚚',
    color: 'from-green-500 to-emerald-600',
    description: 'Route optimization, warehouse automation, shipment tracking, and sustainable supply chain solutions.',
    icon: '🚛',
    servicesCount: 0,
    sampleServices: ['Route Optimization', 'Warehouse Automation', 'Sustainable Supply Chain Radar'],
  },
  {
    key: 'gaming',
    label: 'Gaming & Entertainment',
    emoji: '🎮',
    color: 'from-purple-500 to-fuchsia-600',
    description: 'Player behavior analytics, game testing automation, content generation, and liveOps platforms.',
    icon: '🎯',
    servicesCount: 0,
    sampleServices: ['Player Behavior Analytics', 'Game Testing Automation', 'AI Content Generator'],
  },
  {
    key: 'realestate',
    label: 'Real Estate & PropTech',
    emoji: '🏢',
    color: 'from-blue-500 to-cyan-600',
    description: 'Property valuation AI, tenant matching, smart building automation, and market analysis.',
    icon: '🏠',
    servicesCount: 0,
    sampleServices: ['Property Valuation AI', 'Tenant Matching Engine', 'Market Analysis Platform'],
  },
  {
    key: 'healthcare-lifecycle',
    label: 'AI Contract Lifecycle',
    emoji: '📄',
    color: 'from-violet-500 to-indigo-600',
    description: 'Automated contract review, clause analysis, renewal tracking, and compliance monitoring.',
    icon: '🤝',
    servicesCount: 0,
    sampleServices: ['AI Legal Contract Analyzer', 'Contract Lifecycle Intelligence', 'Clause Extraction Engine'],
  },
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
        servicesCount: servicesInIndustry.length,
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
    <PageTemplate
      title="Industry-Specific AI Solutions"
      description="AI and IT services tailored to your industry's unique challenges and opportunities. From healthcare to finance, we deliver measurable outcomes with transparent pricing."
      category="Industries"
      heroIcon="🏭"
      actions={[
        { label: 'Get Industry Proposal', href: '/contact', style: 'primary' },
        { label: 'Browse All Services', href: '/services', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
      ]}
      layout="hero"
      showBottomCta={true}
    >
      {/* Search */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
            fill="none"
            stroke="currentColor"
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
                       transition-all focus:ring-2 focus:ring-purple-500"
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

      {/* Industries Grid */}
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
    </PageTemplate>
  );
}

// app/industries/page.tsx - Industry Services Explorer
// New page: Browse services by industry with ROI projections
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';

const INDUSTRIES = [
  { 
    key: 'healthcare', 
    label: 'Healthcare & Life Sciences', 
    emoji: '🏥', 
    color: 'from-emerald-500 to-teal-600',
    description: 'AI diagnostic tools, patient management, drug discovery, HIPAA compliance',
    stats: { services: 0, avgSavings: '40%', roi: '24M/yr' }
  },
  { 
    key: 'finance', 
    label: 'Financial Services & FinTech', 
    emoji: '💳', 
    color: 'from-blue-500 to-indigo-600',
    description: 'Fraud detection, risk assessment, algorithmic trading, compliance automation',
    stats: { services: 0, avgSavings: '35%', roi: '18M/yr' }
  },
  { 
    key: 'retail', 
    label: 'Retail & E-Commerce', 
    emoji: '🛒', 
    color: 'from-pink-500 to-rose-600',
    description: 'Personalization engines, inventory optimization, customer analytics, recommendation systems',
    stats: { services: 0, avgSavings: '50%', roi: '31M/yr' }
  },
  { 
    key: 'manufacturing', 
    label: 'Manufacturing & Industrial', 
    emoji: '🏭', 
    color: 'from-amber-500 to-orange-600',
    description: 'Predictive maintenance, quality inspection, supply chain optimization, digital twins',
    stats: { services: 0, avgSavings: '45%', roi: '28M/yr' }
  },
  { 
    key: 'logistics', 
    label: 'Logistics & Supply Chain', 
    emoji: '🚚', 
    color: 'from-cyan-500 to-blue-600',
    description: 'Route optimization, demand forecasting, warehouse automation, shipment tracking',
    stats: { services: 0, avgSavings: '30%', roi: '15M/yr' }
  },
  { 
    key: 'legal', 
    label: 'Legal & Compliance', 
    emoji: '⚖️', 
    color: 'from-violet-500 to-purple-600',
    description: 'Contract analysis, compliance monitoring, e-discovery, legal operations automation',
    stats: { services: 0, avgSavings: '60%', roi: '8M/yr' }
  },
  { 
    key: 'technology', 
    label: 'Technology & SaaS', 
    emoji: '💻', 
    color: 'from-green-500 to-emerald-600',
    description: 'DevOps automation, API management, microservices, cloud migration, observability',
    stats: { services: 0, avgSavings: '40%', roi: '22M/yr' }
  },
  { 
    key: 'energy', 
    label: 'Energy & Utilities', 
    emoji: '⚡', 
    color: 'from-yellow-500 to-amber-600',
    description: 'Grid optimization, demand forecasting, renewable integration, predictive maintenance',
    stats: { services: 0, avgSavings: '35%', roi: '19M/yr' }
  },
  { 
    key: 'media', 
    label: 'Media & Entertainment', 
    emoji: '🎬', 
    color: 'from-red-500 to-pink-600',
    description: 'Content moderation, recommendation engines, audience analytics, streaming optimization',
    stats: { services: 0, avgSavings: '55%', roi: '12M/yr' }
  },
  { 
    key: 'education', 
    label: 'Education & Research', 
    emoji: '🎓', 
    color: 'from-indigo-500 to-blue-600',
    description: 'Personalized learning, student analytics, research automation, assessment systems',
    stats: { services: 0, avgSavings: '38%', roi: '9M/yr' }
  },
];

// Industry service matching
const INDUSTRY_SERVICE_MATCH: Record<string, string[]> = {
  healthcare: ['ai', 'data', 'security', 'micro-saas'],
  finance: ['ai', 'security', 'automation', 'data'],
  retail: ['ai', 'data', 'automation', 'micro-saas'],
  manufacturing: ['ai', 'iot', 'automation', 'data'],
  logistics: ['ai', 'automation', 'data', 'cloud'],
  legal: ['ai', 'data', 'automation', 'micro-saas'],
  technology: ['ai', 'cloud', 'devops', 'automation'],
  energy: ['ai', 'iot', 'data', 'cloud'],
  media: ['ai', 'cloud', 'data', 'micro-saas'],
  education: ['ai', 'cloud', 'data', 'micro-saas'],
};

// Calculate industry stats
function calculateIndustryStats(services: Service[], industryKey: string): { count: number; avgSavings: string; roi: string } {
  const industryServices = services.filter(s => {
    const industryMap: Record<string, string[]> = {
      healthcare: ['Healthcare', 'Life Sciences', 'Medical'],
      finance: ['Finance', 'FinTech', 'Banking'],
      retail: ['Retail', 'E-Commerce', 'Commerce'],
      manufacturing: ['Manufacturing', 'Industrial'],
      logistics: ['Logistics', 'Supply Chain'],
      legal: ['Legal', 'Compliance'],
      technology: ['Technology', 'SaaS'],
      energy: ['Energy', 'Utilities'],
      media: ['Media', 'Entertainment'],
      education: ['Education', 'Research'],
    };
    const keywords = industryMap[industryKey] || [];
    return s.industry && keywords.some(k => s.industry?.includes(k));
  });
  
  return {
    count: industryServices.length,
    avgSavings: industryKey === 'legal' ? '60%' : industryKey === 'retail' ? '50%' : '40%',
    roi: industryServices.length > 0 ? `${Math.floor(industryServices.length * 3)}M/yr` : 'N/A'
  };
}

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  
  const services: Service[] = allServices as Service[];
  
  // Calculate stats for each industry
  const industryStats = useMemo(() => {
    return INDUSTRIES.map(industry => ({
      ...industry,
      stats: calculateIndustryStats(services, industry.key)
    }));
  }, [services]);

  // Get services for selected industry
  const industryServices = useMemo(() => {
    if (!selectedIndustry) return [];
    
    const industryMap: Record<string, string[]> = {
      healthcare: ['Healthcare', 'Life Sciences', 'Medical'],
      finance: ['Finance', 'FinTech', 'Banking'],
      retail: ['Retail', 'E-Commerce', 'Commerce'],
      manufacturing: ['Manufacturing', 'Industrial'],
      logistics: ['Logistics', 'Supply Chain'],
      legal: ['Legal', 'Compliance'],
      technology: ['Technology', 'SaaS', 'IT'],
      energy: ['Energy', 'Utilities'],
      media: ['Media', 'Entertainment'],
      education: ['Education', 'Research'],
    };
    
    const keywords = industryMap[selectedIndustry] || [];
    return services.filter(s => 
      s.industry && keywords.some(k => s.industry?.includes(k))
    ).slice(0, 12);
  }, [selectedIndustry, services]);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">●</span> Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Industry-Specific AI Solutions</span><br />
            <span className="text-white">For Your Business</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover AI and IT services tailored to your industry. Get personalized recommendations, 
            ROI projections, and implementation roadmaps.
          </p>
        </div>
      </section>

      {/* ── Industry Cards Grid ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Industry</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI solutions that drive measurable results in your industry
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industryStats.map((industry) => (
              <div
                key={industry.key}
                onClick={() => setSelectedIndustry(industry.key)}
                className={`glass-card group hover:border-purple-500/40 transition-all duration-300 cursor-pointer ${
                  selectedIndustry === industry.key ? 'border-purple-400 ring-1 ring-purple-400/20' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {industry.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {industry.label}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {industry.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs">
                      <span className="text-purple-400 font-medium">{industry.stats.count}+</span>
                      <span className="text-slate-500">services</span>
                      <span className="text-emerald-400 font-medium">~{industry.stats.avgSavings}</span>
                      <span className="text-slate-500">avg savings</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Services Detail ── */}
      {selectedIndustry && (
        <section className="py-20">
          <div className="container-page">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm hover:bg-slate-700/80 transition"
              >
                ← Back to Industries
              </button>
              <h2 className="text-2xl font-bold text-white">
                {INDUSTRIES.find(i => i.key === selectedIndustry)?.label} Solutions
              </h2>
            </div>
            
            {industryServices.length > 0 ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industryServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl shrink-0">{service.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug">
                            {service.title}
                          </h3>
                          <span className="text-xs text-slate-500 block mt-1">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-xs line-clamp-2 flex-1 mb-3">
                        {service.description}
                      </p>
                      <div className="mt-auto pt-3 border-t border-slate-700/50">
                        <span className="text-purple-300 text-sm font-medium">
                          From ${service.pricing?.basic || 'Contact'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Link
                    href={`/services/?category=${INDUSTRIES.find(i => i.key === selectedIndustry)?.key}`}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    View All {INDUSTRIES.find(i => i.key === selectedIndustry)?.label} Services →
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-400">No services found for this industry yet.</p>
                <Link href="/services" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                  Browse all services →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── ROI Calculator CTA ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
              <span className="text-green-400">●</span> ROI Calculator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Use our interactive ROI calculator to estimate cost savings, efficiency gains, and 
              implementation timelines for AI solutions in your industry.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <Link
                href="/tools/roi-calculator"
                className="glass-card p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-xs text-slate-400">Estimate operational savings</p>
              </Link>
              <Link
                href="/tools/roi-calculator"
                className="glass-card p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-white mb-2">Time Saved</h3>
                <p className="text-xs text-slate-400">Calculate hours saved</p>
              </Link>
              <Link
                href="/tools/roi-calculator"
                className="glass-card p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-3xl mb-2">📈</div>
                <h3 className="font-semibold text-white mb-2">ROI Projection</h3>
                <p className="text-xs text-slate-400">Annual return on investment</p>
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Get Personalized ROI Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* ── Case Studies CTA ── */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            See Real Results in Your Industry
          </h2>
          <p className="text-slate-400 mb-6">
            Our clients see 30-60% efficiency gains and millions in annual savings.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
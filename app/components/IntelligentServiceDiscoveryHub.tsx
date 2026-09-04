'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '../data/servicesData';

// Smart navigation categories with priority ordering
const SMART_CATEGORIES = [
  { key: 'ai', label: 'AI & Machine Learning', icon: '🧠', color: 'from-purple-500 to-indigo-500', priority: 1 },
  { key: 'it', label: 'IT Infrastructure', icon: '🖥️', color: 'from-blue-500 to-cyan-500', priority: 2 },
  { key: 'cloud', label: 'Cloud & DevOps', icon: '☁️', color: 'from-sky-400 to-blue-600', priority: 3 },
  { key: 'security', label: 'Cybersecurity', icon: '🔐', color: 'from-red-500 to-orange-500', priority: 4 },
  { key: 'data', label: 'Data & Analytics', icon: '📊', color: 'from-emerald-500 to-teal-500', priority: 5 },
  { key: 'automation', label: 'Automation', icon: '🤖', color: 'from-pink-500 to-rose-500', priority: 6 },
  { key: 'micro-saas', label: 'Micro-SaaS Products', icon: '🚀', color: 'from-amber-500 to-orange-500', priority: 7 },
  { key: 'devops', label: 'DevOps & Platform', icon: '⚙️', color: 'from-cyan-500 to-blue-500', priority: 8 },
  { key: 'blockchain', label: 'Blockchain & Web3', icon: '⛓️', color: 'from-yellow-500 to-amber-600', priority: 9 },
  { key: 'iot', label: 'IoT & Edge', icon: '📡', color: 'from-teal-500 to-green-500', priority: 10 },
  { key: 'email-intelligence', label: 'Email Intelligence', icon: '📧', color: 'from-violet-500 to-purple-600', priority: 11 },
  { key: 'database', label: 'Database Solutions', icon: '🐘', color: 'from-blue-600 to-indigo-600', priority: 12 },
  { key: 'collaboration', label: 'Collaboration Platforms', icon: '📂', color: 'from-sky-500 to-cyan-600', priority: 13 },
  { key: 'media-streaming', label: 'Media Streaming', icon: '🎬', color: 'from-rose-500 to-pink-600', priority: 14 },
  { key: 'infrastructure-as-code', label: 'Infrastructure as Code', icon: '🏗️', color: 'from-amber-600 to-orange-600', priority: 15 },
  { key: 'low-code', label: 'Low-Code Platforms', icon: '⚡', color: 'from-emerald-500 to-teal-600', priority: 16 },
  { key: 'monitoring', label: 'Monitoring & Alerting', icon: '📊', color: 'from-blue-400 to-indigo-400', priority: 17 },
  { key: 'logging', label: 'Log Aggregation', icon: '📝', color: 'from-gray-400 to-blue-400', priority: 18 },
  { key: 'security-scanning', label: 'Security Scanning', icon: '🔍', color: 'from-red-400 to-amber-400', priority: 19 },
  { key: 'backup-recovery', label: 'Backup & Recovery', icon: '💾', color: 'from-green-400 to-teal-400', priority: 20 },
  { key: 'identity-management', label: 'Identity & Access', icon: '🔑', color: 'from-purple-400 to-fuchsia-400', priority: 21 },
];

// Industry mapping with service counts
const INDUSTRY_SERVICES = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', icon: '🏭', color: 'from-amber-500 to-orange-500', count: 145, sample: 'AI Analytics & BI' },
  { key: 'media-&-entertainment', label: 'Media & Entertainment', icon: '🎬', color: 'from-blue-500 to-cyan-500', count: 95, sample: 'AI Knowledge Management' },
  { key: 'legal-&-compliance', label: 'Legal & Compliance', icon: '⚖️', color: 'from-purple-500 to-pink-500', count: 77, sample: 'Contract Lifecycle Intelligence' },
  { key: 'energy-&-utilities', label: 'Energy & Utilities', icon: '⚡', color: 'from-green-500 to-emerald-500', count: 69, sample: 'Grid Demand Forecaster' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', icon: '🛒', color: 'from-sky-500 to-blue-600', count: 57, sample: 'Personalised Product Recommendations' },
  { key: 'logistics-&-supply-chain', label: 'Logistics & Supply Chain', icon: '🚚', color: 'from-rose-500 to-red-500', count: 57, sample: 'Sustainable Supply Chain Radar' },
  { key: 'manufacturing-&-industrial', label: 'Manufacturing & Industrial', icon: '🏗️', color: 'from-yellow-500 to-amber-500', count: 25, sample: 'Computer Vision Quality Inspection' },
  { key: 'financial-services-&-fintech', label: 'Financial Services & FinTech', icon: '💳', color: 'from-indigo-500 to-purple-500', count: 23, sample: 'Integrated Commerce Flow Orchestrator' },
  { key: 'education-&-research', label: 'Education & Research', icon: '🎓', color: 'from-cyan-500 to-teal-500', count: 15, sample: 'Reinforcement Learning Optimiser' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare & Life Sciences', icon: '🏥', color: 'from-pink-500 to-rose-500', count: 12, sample: 'AI Drug Discovery & Molecular Design' },
];

// AI-powered matching weights
const MATCH_WEIGHTS = {
  title: 3,
  description: 2,
  features: 1.5,
  benefits: 1,
  industry: 2.5,
  category: 2,
};

interface DiscoveryState {
  query: string;
  industry: string | null;
  category: string | null;
  maxResults: number;
}

interface SmartRecommendation {
  service: Service;
  score: number;
  matchReasons: string[];
}

export default function IntelligentServiceDiscoveryHub() {
  const [state, setState] = useState<DiscoveryState>({
    query: '',
    industry: null,
    category: null,
    maxResults: 12,
  });

  const [smartRecommendations, setSmartRecommendations] = useState<SmartRecommendation[]>([]);

  // AI-powered service matching
  const matchedServices = useMemo(() => {
    const services = allServices as Service[];
    let results: SmartRecommendation[] = [];

    // If we have a query, do smart matching
    if (state.query.trim()) {
      const query = state.query.toLowerCase();
      results = services.map(service => {
        let score = 0;
        const matchReasons: string[] = [];

        // Title matching
        if (service.title?.toLowerCase().includes(query)) {
          score += 10 * MATCH_WEIGHTS.title;
          matchReasons.push('Title match');
        }

        // Description matching
        if (service.description?.toLowerCase().includes(query)) {
          score += 5 * MATCH_WEIGHTS.description;
          matchReasons.push('Description match');
        }

        // Feature matching
        if (service.features?.some((f: string) => f.toLowerCase().includes(query))) {
          score += 3 * MATCH_WEIGHTS.features;
          matchReasons.push('Feature match');
        }

        // Industry matching
        if (state.industry && service.industry?.toLowerCase().includes(state.industry.toLowerCase())) {
          score += 8 * MATCH_WEIGHTS.industry;
          matchReasons.push('Industry match');
        }

        // Category matching
        if (state.category && service.category === state.category) {
          score += 6 * MATCH_WEIGHTS.category;
          matchReasons.push('Category match');
        }

        // Popular services get a boost
        if (service.popular) {
          score += 2;
          matchReasons.push('Popular service');
        }

        return { service, score, matchReasons };
      });

      // Filter and sort
      results = results
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, state.maxResults);
    } else if (state.industry || state.category) {
      // Filter by industry or category only
      results = services
        .filter(service => {
          const matchesIndustry = state.industry ? service.industry?.toLowerCase().includes(state.industry.toLowerCase()) : true;
          const matchesCategory = state.category ? service.category === state.category : true;
          return matchesIndustry && matchesCategory;
        })
        .map(service => ({
          service,
          score: 5,
          matchReasons: [state.industry ? 'Industry' : state.category ? 'Category' : 'All services']
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, state.maxResults);
    } else {
      // Default: show popular services
      results = services
        .filter(s => s.popular)
        .slice(0, state.maxResults)
        .map(s => ({
          service: s,
          score: 3,
          matchReasons: ['Popular service']
        }));
    }

    return results;
  }, [state]);

  // Update smart recommendations when state changes
  useEffect(() => {
    setSmartRecommendations(matchedServices);
  }, [matchedServices]);

  // Handle query change
  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, query: e.target.value }));
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setState({
      query: '',
      industry: null,
      category: null,
      maxResults: 12,
    });
  }, []);

  return (
    <section id="smart-discovery" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
      <div className="container-page">
        {/* ── Hero Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">✨</span>
            <span>AI-Powered Service Discovery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Find Your Perfect AI & IT Solution
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Describe your needs in plain language — our AI agents match you to the best-fit services from our catalog of {allServices.length}+ solutions.
          </p>

          {/* ── Smart Search Bar ── */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="e.g., 'automate customer support', 'secure cloud migration', 'predictive maintenance'..."
                value={state.query}
                onChange={handleQueryChange}
                className="w-full px-6 py-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔍
              </div>
            </div>
            
            {/* ── Quick Filters ── */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <button
                onClick={() => setState(prev => ({ ...prev, category: null, query: '' }))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !state.category && !state.query 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, industry: 'technology', category: null, query: '' }))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  state.industry === 'technology' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                Tech & SaaS
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, industry: 'finance', category: null, query: '' }))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  state.industry === 'finance' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                Finance
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, industry: 'healthcare', category: null, query: '' }))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  state.industry === 'healthcare' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                Healthcare
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, industry: 'retail', category: null, query: '' }))}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  state.industry === 'retail' 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                Retail
              </button>
            </div>
          </div>

          {/* ── Results Count ── */}
          <div className="text-center text-slate-400 text-sm mb-8">
            {state.query || state.industry || state.category 
              ? `${smartRecommendations.length} service${smartRecommendations.length !== 1 ? 's' : ''} found`
              : `${allServices.length}+ services available across all categories`
            }
          </div>
        </div>

        {/* ── Smart Recommendations Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {smartRecommendations.length > 0 ? (
            smartRecommendations.map(({ service, score, matchReasons }) => (
              <Link
                key={service.id}
                href={service.href}
                className="group glass-card flex flex-col gap-3 p-4 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl shrink-0">{service.icon}</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30">
                      {service.category?.toUpperCase().split('-')[0]}
                    </span>
                    {service.popular && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-300 border border-amber-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-xs line-clamp-2 flex-1 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-2 border-t border-slate-700/40 flex justify-between items-center">
                  <span className="text-xs text-purple-400 font-semibold">
                    From {(service.pricing as Record<string, string>)[Object.keys(service.pricing)[0]]}/mo
                  </span>
                  <span className="text-purple-300 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
              <p className="text-slate-400 mb-4">Try adjusting your search or browse all categories</p>
              <Link
                href="/services"
                className="inline-block px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-all"
              >
                Browse All Services →
              </Link>
            </div>
          )}
        </div>

        {/* ── Quick Category Grid ── */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-slate-200">Browse by Category</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SMART_CATEGORIES.slice(0, 12).map(cat => {
              const catCount = (allServices as Service[]).filter(s => s.category === cat.key).length;
              return (
                <Link
                  key={cat.key}
                  href={`/services/?category=${cat.key}`}
                  className="group glass-card hover:border-purple-500/40 hover:scale-[1.015] transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${cat.color.replace('from-', 'rgba(120,50,200,0.15)').replace('to-', 'rgba(0,0,0,0)')}, transparent 60%)` }}
                  />
                  <div className="relative flex items-center gap-4 p-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {cat.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors leading-tight">
                        {cat.label}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-slate-400 text-sm">{catCount} service{catCount !== 1 ? 's' : ''}</p>
                        <span className="text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Browse →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Industry Solutions ── */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center mb-6 text-slate-200">Solutions by Industry</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRY_SERVICES.map(ind => (
              <Link
                key={ind.key}
                href={`/services/?industry=${encodeURIComponent(ind.key)}`}
                className="group block rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/30 p-4 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{ind.icon}</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">{ind.count}+</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-1 leading-snug">
                  {ind.label}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {ind.sample}
                </p>
                <div className="mt-3 h-1.5 rounded-full overflow-hidden bg-slate-800">
                  <div className="h-full rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ width: '100%', background: `linear-gradient(90deg, ${ind.color})` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── AI Agent Assistance CTA ── */}
        <div className="glass-card p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-3xl">🤖</div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Need Help Finding the Right Solution?</h3>
              <p className="text-slate-300 mb-4 max-w-md">
                Our AI agents can provide personalized recommendations based on your specific requirements.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/configurator"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                AI Configurator
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-slate-800/60 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 hover:border-purple-400/50 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
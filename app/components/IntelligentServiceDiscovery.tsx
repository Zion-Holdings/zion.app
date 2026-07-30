'use client';

import { useState, useMemo, useCallback } from 'react';
import { allServices, type Service } from '@/data/servicesData';
import { CATEGORIES } from '@/constants/categories';

// Industry mapping for filtering
const INDUSTRIES = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', emoji: '🏭' },
  { key: 'media-&-entertainment', label: 'Media & Entertainment', emoji: '🎬' },
  { key: 'legal-&-compliance', label: 'Legal & Compliance', emoji: '⚖️' },
  { key: 'energy-&-utilities', label: 'Energy & Utilities', emoji: '⚡' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', emoji: '🛒' },
  { key: 'logistics-&-supply-chain', label: 'Logistics & Supply Chain', emoji: '🚚' },
  { key: 'manufacturing-&-industrial', label: 'Manufacturing & Industrial', emoji: '🏗️' },
  { key: 'financial-services-&-fintech', label: 'Financial Services & FinTech', emoji: '💳' },
  { key: 'education-&-research', label: 'Education & Research', emoji: '🎓' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare & Life Sciences', emoji: '🏥' },
];

// Outcome-based benefits mapping
const OUTCOMES = [
  { key: 'cost-reduction', label: 'Cost Reduction', emoji: '💰' },
  { key: 'efficiency', label: 'Operational Efficiency', emoji: '⚡' },
  { key: 'automation', label: 'Process Automation', emoji: '🤖' },
  { key: 'insights', label: 'Data Insights', emoji: '📊' },
  { key: 'security', label: 'Security Enhancement', emoji: '🔐' },
  { key: 'scaling', label: 'Business Scaling', emoji: '📈' },
  { key: 'compliance', label: 'Regulatory Compliance', emoji: '✅' },
  { key: 'innovation', label: 'Innovation', emoji: '🚀' },
];

// Use-case mapping
const USE_CASES = [
  { key: 'predictive-analytics', label: 'Predictive Analytics', emoji: '🔮' },
  { key: 'process-automation', label: 'Process Automation', emoji: '⚙️' },
  { key: 'data-visualization', label: 'Data Visualization', emoji: '📈' },
  { key: 'customer-experience', label: 'Customer Experience', emoji: '😊' },
  { key: 'risk-management', label: 'Risk Management', emoji: '🛡️' },
  { key: 'supply-chain', label: 'Supply Chain', emoji: '📦' },
  { key: 'quality-assurance', label: 'Quality Assurance', emoji: '✅' },
  { key: 'market-research', label: 'Market Research', emoji: '🔍' },
];

interface FilterState {
  categories: string[];
  industries: string[];
  outcomes: string[];
  useCases: string[];
  priceRange: [number, number];
  rating: number;
  searchQuery: string;
}

export default function IntelligentServiceDiscovery() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    industries: [],
    outcomes: [],
    useCases: [],
    priceRange: [0, 10000],
    rating: 0,
    searchQuery: '',
  });

  const [showComparison, setShowComparison] = useState(false);
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);

  const services: Service[] = allServices as Service[];

  // Filter services based on current filters
  const filteredServices = useMemo(() => {
    return services.filter((service: any) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(service.category)) {
        return false;
      }

      // Industry filter
      if (filters.industries.length > 0 && service.industry) {
        const industryKey = service.industry.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
        if (!filters.industries.some(ind => 
          service.industry?.toLowerCase().includes(ind.split(' ')[0].toLowerCase()) ||
          industryKey.includes(ind)
        )) {
          return false;
        }
      }

      // Search query filter
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          service.title?.toLowerCase().includes(q) ||
          service.description?.toLowerCase().includes(q) ||
          service.id?.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // Price range filter
      if (service.pricing) {
        const minPrice = Math.min(...Object.values(service.pricing).map((p: string) => parseFloat(p.replace('$', '')) || 0));
        if (minPrice < filters.priceRange[0] || minPrice > filters.priceRange[1]) {
          return false;
        }
      }

      return true;
    });
  }, [services, filters]);

  // AI-powered recommendations based on selected filters
  const recommendations = useMemo(() => {
    if (filteredServices.length === 0) return [];
    
    // Score services based on relevance
    return filteredServices
      .map((service: any) => {
        let score = 0;
        
        // Category match bonus
        if (filters.categories.includes(service.category)) score += 10;
        
        // Industry match bonus
        if (filters.industries.length > 0 && service.industry) {
          const industryMatch = filters.industries.some(ind => 
            service.industry?.toLowerCase().includes(ind.split(' ')[0].toLowerCase())
          );
          if (industryMatch) score += 8;
        }
        
        // Benefit/outcome matching
        if (service.benefits) {
          const benefitText = service.benefits.join(' ').toLowerCase();
          if (benefitText.includes('cost')) score += 3;
          if (benefitText.includes('efficiency') || benefitText.includes('automation')) score += 3;
          if (benefitText.includes('insight') || benefitText.includes('analytics')) score += 3;
        }
        
        // Popularity bonus
        if (service.popular) score += 5;
        
        // Feature count bonus (more features = more comprehensive)
        if (service.features) score += service.features.length;
        
        return { ...service, _score: score };
      })
      .sort((a: any, b: any) => b._score - a._score)
      .slice(0, 12);
  }, [filteredServices, filters]);

  const toggleCategory = useCallback((category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  }, []);

  const toggleIndustry = useCallback((industry: string) => {
    setFilters(prev => ({
      ...prev,
      industries: prev.industries.includes(industry)
        ? prev.industries.filter(i => i !== industry)
        : [...prev.industries, industry],
    }));
  }, []);

  const addToComparison = useCallback((id: string) => {
    setComparisonIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 3) return prev.slice(1);
      return [...prev, id];
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      industries: [],
      outcomes: [],
      useCases: [],
      priceRange: [0, 10000],
      rating: 0,
      searchQuery: '',
    });
    setComparisonIds([]);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
      <div className="container-page max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-cyan-400 font-medium">AI-Powered Discovery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Service Discovery Hub
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find the perfect AI & IT solutions with our intelligent discovery engine. 
            Filter by industry, use case, and business outcomes.
          </p>
        </div>

        {/* Smart Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by need, industry, or outcome (e.g., 'reduce customer churn', 'automate billing', 'predict maintenance')..."
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
              🎯 Natural Language Search
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 hover:bg-slate-700 transition-colors"
            >
              ✕ Clear All Filters
            </button>
            {Object.values(filters).filter(v => Array.isArray(v) && v.length > 0).length > 0 && (
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                {Object.values(filters).filter(v => Array.isArray(v) && v.length > 0).length} filters active
              </span>
            )}
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-3">🔍 Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => toggleCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filters.categories.includes(cat.key)
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                      : 'bg-slate-800/40 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-3">🏢 By Industry</h3>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map(ind => (
                <button
                  key={ind.key}
                  onClick={() => toggleIndustry(ind.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filters.industries.includes(ind.key)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800/40 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {ind.emoji} {ind.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            AI-Recommended Services <span className="text-sm text-slate-400 font-normal">({recommendations.length} results)</span>
          </h3>
          {comparisonIds.length > 0 && (
            <button
              onClick={() => setShowComparison(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Compare {comparisonIds.length} Services
            </button>
          )}
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {recommendations.map((service: any) => (
            <div
              key={service.id}
              className="glass-card group hover:border-cyan-500/40 transition-all flex flex-col"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">{service.industry}</p>
                </div>
                <button
                  onClick={() => addToComparison(service.id)}
                  className={`p-1 rounded-full transition-all ${
                    comparisonIds.includes(service.id)
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-slate-700/40 text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
                  }`}
                  title={comparisonIds.includes(service.id) ? 'Remove from comparison' : 'Add to comparison'}
                >
                  {comparisonIds.includes(service.id) ? '✓' : '⊕'}
                </button>
              </div>
              
              <p className="text-slate-300 text-xs line-clamp-2 mb-3 flex-1">{service.description}</p>
              
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-slate-500 mb-1">Key Benefits:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.slice(0, 2).map((b: string, i: number) => (
                      <span key={i} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-auto pt-3 border-t border-slate-700/50 flex justify-between items-center">
                <span className="text-xs font-semibold text-cyan-400">
                  ${service.pricing ? Object.values(service.pricing)[0] : 'Contact'}
                </span>
                <a
                  href={service.href || `/services/${service.id}`}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No services match your filters</h3>
            <p className="text-slate-400 mb-4">Try adjusting your search or category selection</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-medium hover:from-cyan-400 hover:to-emerald-400 transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Comparison Modal */}
        {showComparison && comparisonIds.length > 0 && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">Service Comparison</h3>
                <button
                  onClick={() => setShowComparison(false)}
                  className="p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                {comparisonIds.map((id, index) => {
                  const service = services.find(s => s.id === id);
                  if (!service) return null;
                  
                  return (
                    <div key={id} className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500">Category</p>
                          <p className="text-slate-300">{service.category}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Industry</p>
                          <p className="text-slate-300">{service.industry}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Starting Price</p>
                          <p className="text-slate-300">${service.pricing ? Object.values(service.pricing)[0] : 'Contact'}</p>
                        </div>
                      </div>
                      {index < comparisonIds.length - 1 && (
                        <div className="text-center text-slate-500 text-xs mt-2">↕️</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
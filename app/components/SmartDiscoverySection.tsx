'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '../data/servicesData';
import { CATEGORIES } from '../constants/categories';

// Industry definitions
const INDUSTRIES = [
  { key: 'healthcare', label: 'Healthcare & Life Sciences', emoji: '🏥', color: 'from-emerald-500 to-teal-600', description: 'AI diagnostics, patient management, drug discovery, HIPAA compliance' },
  { key: 'finance', label: 'Financial Services & FinTech', emoji: '💳', color: 'from-blue-500 to-indigo-600', description: 'Fraud detection, risk assessment, algorithmic trading, compliance' },
  { key: 'retail', label: 'Retail & E-Commerce', emoji: '🛒', color: 'from-pink-500 to-rose-600', description: 'Personalization engines, inventory optimization, recommendation systems' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial', emoji: '🏭', color: 'from-amber-500 to-orange-600', description: 'Predictive maintenance, quality inspection, digital twins' },
  { key: 'logistics', label: 'Logistics & Supply Chain', emoji: '🚚', color: 'from-cyan-500 to-blue-600', description: 'Route optimization, demand forecasting, warehouse automation' },
  { key: 'technology', label: 'Technology & SaaS', emoji: '💻', color: 'from-green-500 to-emerald-600', description: 'DevOps automation, API management, microservices' },
];

export default function SmartDiscoverySection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  
  const services = allServices as Service[];
  
  // Filter services based on search and industry
  const filteredServices = useMemo(() => {
    let result = services;
    
    if (selectedIndustry) {
      result = result.filter(s => 
        s.industry?.toLowerCase().includes(selectedIndustry.toLowerCase()) ||
        s.category === selectedIndustry
      );
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.features?.some(f => f.toLowerCase().includes(q))
      );
    }
    
    return result.slice(0, 12);
  }, [searchQuery, selectedIndustry, services]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedIndustry(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" id="smart-discovery">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">✨</span>
            <span>AI-Powered Service Discovery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Find Your Perfect AI Solution
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Describe your needs in plain language or browse by industry. Our AI agents match you to the best-fit services from our catalog of {services.length}+ solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="e.g., 'automate customer support', 'secure cloud migration', 'predictive maintenance'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                🔍
              </div>
            </div>
          </div>
          
          {/* Industry Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={clearFilters}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                !selectedIndustry && !searchQuery 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
              }`}
            >
              All Solutions
            </button>
            {INDUSTRIES.map(industry => (
              <button
                key={industry.key}
                onClick={() => setSelectedIndustry(industry.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedIndustry === industry.key
                    ? `bg-${industry.color.split(' ')[0].replace('from-', '')}-600 text-white`
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/60'
                }`}
              >
                {industry.emoji} {industry.label.split(' & ')[0]}
              </button>
            ))}
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-slate-400 mb-8">
            {selectedIndustry || searchQuery 
              ? `${filteredServices.length} service${filteredServices.length !== 1 ? 's' : ''} found`
              : `${services.length}+ services available across all industries`
            }
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
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
                  <span className="text-purple-300 text-xs font-semibold">
                    From {(service.pricing as Record<string, string>)[Object.keys(service.pricing)[0]]}/mo
                  </span>
                  <span className="text-purple-300 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400 mb-4">Try adjusting your search or browse all categories</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            View Full Service Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}
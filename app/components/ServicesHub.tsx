// app/components/ServicesHub.tsx — Advanced Services Hub with Visualization
'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';
import { CATEGORIES, type CategoryMeta } from '@/constants/categories';

// ──── Type Definitions ────
interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
  selectedIndustries: string[];
  priceRange: [number, number];
  featuredOnly: boolean;
  sortBy: 'popularity' | 'newest' | 'price-low' | 'price-high' | 'title';
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

interface CategoryVisualProps {
  category: CategoryMeta;
  serviceCount: number;
  totalServices: number;
  onSelect: (category: string) => void;
  isActive: boolean;
}

// ──── Category Visualization Component ────
function CategoryVisual({ category, serviceCount, totalServices, onSelect, isActive }: CategoryVisualProps) {
  const percentage = totalServices > 0 ? (serviceCount / totalServices) * 100 : 0;
  const colorClass = `bg-${category.color.split(' ')[0].replace('from-', '')}-500`;
  
  return (
    <button
      onClick={() => onSelect(category.key)}
      className={`flex-1 group relative rounded-xl p-4 text-center transition-all duration-200 ${
        isActive 
          ? 'bg-gradient-to-br opacity-100 ring-2 ring-purple-400/50' 
          : 'bg-slate-900/50 hover:bg-slate-800/60 hover:scale-[1.02]'
      }`}
    >
      <div className="text-2xl mb-2">{category.emoji}</div>
      <div className="text-xs text-slate-400 mb-2 line-clamp-2">{category.label}</div>
      <div className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
        {serviceCount}
      </div>
      {/* Progress bar */}
      <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${colorClass.replace('500', '400')}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <Link 
        href={`/services/?category=${category.key}`}
        className="absolute inset-0"
        aria-label={`Browse ${category.label} services`}
      />
    </button>
  );
}

// ──── Service Card Component ────
function ServiceCard({ service, index }: ServiceCardProps) {
  const firstTier = Object.values(service.pricing as Record<string, string>)[0] || 'Contact';
  
  return (
    <Link
      href={`/services/${service.id}`}
      className="group bg-slate-900/60 border border-slate-800/60 rounded-xl p-5 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
          {service.icon}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-300 transition-colors mb-1">
            {service.title}
          </h3>
          {service.popular && (
            <span className="inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 mb-1">
              ⭐ Popular
            </span>
          )}
        </div>
      </div>
      <p className="text-slate-400 text-xs line-clamp-2 mb-3 leading-relaxed">
        {service.description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
        <span className="text-xs text-purple-300 font-medium">
          ${firstTier}/mo
        </span>
        <span className="text-xs text-slate-500">
          {service.category}
        </span>
      </div>
    </Link>
  );
}

// ──── Industry Showcase Component ────
interface IndustryCardProps {
  industry: {
    key: string;
    label: string;
    emoji: string;
    color: string;
    count: number;
    sample: string;
    services: string[];
  };
  onSelect: (industry: string) => void;
}

function IndustryCard({ industry, onSelect }: IndustryCardProps) {
  return (
    <button
      onClick={() => onSelect(industry.key)}
      className="w-full text-left group bg-slate-900/50 border border-slate-800/50 rounded-xl p-4 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{industry.emoji}</span>
        <span className="text-xs text-slate-500 bg-slate-800/60 px-2 py-1 rounded-full">
          {industry.count}+
        </span>
      </div>
      <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
        {industry.label}
      </h4>
      <p className="text-xs text-slate-400 mb-2 line-clamp-2">
        {industry.sample}
      </p>
      <div className="flex flex-wrap gap-1 mt-2">
        {industry.services.slice(0, 3).map((s) => (
          <span 
            key={s} 
            className="text-[10px] bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded"
          >
            {s}
          </span>
        ))}
        {industry.services.length > 3 && (
          <span className="text-[10px] text-slate-600">
            +{industry.services.length - 3} more
          </span>
        )}
      </div>
    </button>
  );
}

// ──── Main Services Hub Component ────
export default function ServicesHub() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategories: [],
    selectedIndustries: [],
    priceRange: [0, 1000],
    featuredOnly: false,
    sortBy: 'popularity',
  });
  
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  // Get unique industries from services
  const industries = useMemo(() => {
    const industryMap = new Map<string, { label: string; count: number; services: string[] }>();
    
    allServices.forEach((s: any) => {
      const key = s.industry || 'General';
      const existing = industryMap.get(key);
      if (existing) {
        existing.count++;
        existing.services.push(s.id);
      } else {
        industryMap.set(key, {
          label: s.industry || 'General',
          count: 1,
          services: [s.id],
        });
      }
    });
    
    // Convert to array and add emojis/colors
    const emojiColors = ['🧠', '🖥️', '☁️', '🔐', '📊', '🤖', '🚀', '⛓️', '📡', '📧', '🐘', '📂', '🎬', '🏗️', '⚡', '📈', '📝', '🔍', '💾', '🔑'];
    const colorGradients = [
      'from-purple-500 to-indigo-500',
      'from-blue-500 to-cyan-500',
      'from-sky-400 to-blue-600',
      'from-red-500 to-orange-500',
      'from-green-500 to-emerald-500',
      'from-pink-500 to-rose-500',
      'from-amber-500 to-orange-500',
      'from-yellow-500 to-amber-600',
      'from-teal-500 to-green-500',
      'from-violet-500 to-purple-600',
    ];
    
    return Array.from(industryMap.entries()).map(([key, data], idx) => ({
      key,
      label: data.label,
      emoji: emojiColors[idx % emojiColors.length],
      color: colorGradients[idx % colorGradients.length],
      count: data.count,
      sample: allServices.filter((s: any) => s.industry === key)[0]?.description?.slice(0, 60) || '' + '...',
      services: data.services,
    }));
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    let services = allServices as Service[];
    
    // Apply search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      services = services.filter((s: any) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
      );
    }
    
    // Apply category filters
    if (filters.selectedCategories.length > 0) {
      services = services.filter((s: any) =>
        filters.selectedCategories.includes(s.category)
      );
    }
    
    // Apply industry filter
    if (activeIndustry) {
      services = services.filter((s: any) => s.industry === activeIndustry);
    }
    
    // Apply price filter
    services = services.filter((s: any) => {
      const prices = Object.values(s.pricing as Record<string, string>);
      const minPrice = Math.min(...prices.map(p => parseInt(p) || 0));
      return minPrice >= filters.priceRange[0] && minPrice <= filters.priceRange[1];
    });
    
    // Apply featured only filter
    if (filters.featuredOnly) {
      services = services.filter((s: any) => s.popular);
    }
    
    // Sort services
    switch (filters.sortBy) {
      case 'popularity':
        return services.sort((a: any, b: any) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      case 'newest':
        return [...services].sort((a: any, b: any) => 
          new Date(b.released_at || 0).getTime() - new Date(a.released_at || 0).getTime()
        );
      case 'price-low':
        return [...services].sort((a: any, b: any) => {
          const aPrice = Math.min(...Object.values(a.pricing as Record<string, string>).map(p => parseInt(p) || Infinity));
          const bPrice = Math.min(...Object.values(b.pricing as Record<string, string>).map(p => parseInt(p) || Infinity));
          return aPrice - bPrice;
        });
      case 'price-high':
        return [...services].sort((a: any, b: any) => {
          const aPrice = Math.min(...Object.values(a.pricing as Record<string, string>).map(p => parseInt(p) || 0));
          const bPrice = Math.min(...Object.values(b.pricing as Record<string, string>).map(p => parseInt(p) || 0));
          return bPrice - aPrice;
        });
      default:
        return services;
    }
  }, [filters, activeIndustry]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allServices.forEach((s: any) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Clear filters handler
  const clearFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      selectedCategories: [],
      selectedIndustries: [],
      priceRange: [0, 1000],
      featuredOnly: false,
      sortBy: 'popularity',
    });
    setActiveIndustry(null);
  }, []);

  // Apply filter handler
  const applyFilters = useCallback(() => {
    setShowResults(true);
  }, []);

  return (
    <section className="py-20 bg-slate-950">
      <div className="container-page">
        {/* ── Hero ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-400">●</span>
            <span className="text-xs text-purple-300 font-medium">Live Services Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-violet-400 bg-clip-text text-transparent">
              Find Your Perfect AI & IT Solution
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            {allServices.length}+ production-ready services across {CATEGORIES.length} categories and {industries.length} industries. 
            Filter, compare, and get matched to the best solutions for your business.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-purple-400">{allServices.length}+</div>
              <div className="text-xs text-slate-500">Services</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400">{CATEGORIES.length}</div>
              <div className="text-xs text-slate-500">Categories</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-cyan-400">{industries.length}</div>
              <div className="text-xs text-slate-500">Industries</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800">
              <div className="text-2xl font-bold text-pink-400">99.97%</div>
              <div className="text-xs text-slate-500">Uptime</div>
            </div>
          </div>
        </div>

        {/* ── Search & Filter Panel ── */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters(f => ({ ...f, searchQuery: e.target.value }))}
                placeholder="Search services by name, keyword, or category..."
                className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters(f => ({ ...f, searchQuery: '' }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Industry Selector (when no industry selected) */}
          {!activeIndustry && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-4">Browse by Industry</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {industries.map((industry) => (
                  <IndustryCard
                    key={industry.key}
                    industry={industry}
                    onSelect={(ind) => setActiveIndustry(ind)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Category Visualization */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              {activeIndustry ? `AI & IT Services in ${activeIndustry}` : 'Browse by Category'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CATEGORIES.map((cat) => (
                <CategoryVisual
                  key={cat.key}
                  category={cat}
                  serviceCount={categoryCounts[cat.key] || 0}
                  totalServices={allServices.length}
                  onSelect={(cat) => {
                    setFilters(f => 
                      f.selectedCategories.includes(cat)
                        ? { ...f, selectedCategories: f.selectedCategories.filter(c => c !== cat) }
                        : { ...f, selectedCategories: [...f.selectedCategories, cat] }
                    );
                  }}
                  isActive={filters.selectedCategories.includes(cat.key)}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 mb-4">
            <button
              onClick={applyFilters}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
            >
              Apply Filters
            </button>
            {(filters.searchQuery || filters.selectedCategories.length > 0 || activeIndustry) && (
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700/80 transition-all"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center gap-2 text-xs text-slate-500 mb-4">
            <span>Sort by:</span>
            {(['popularity', 'price-low', 'price-high'] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setFilters(f => ({ ...f, sortBy: sort }))}
                className={`px-3 py-1 rounded-full transition ${
                  filters.sortBy === sort
                    ? 'bg-purple-500/20 text-purple-300 font-semibold'
                    : 'hover:bg-slate-800/60 hover:text-slate-300'
                }`}
              >
                {sort === 'popularity' ? 'Popular' : sort === 'price-low' ? 'Price ↑' : 'Price ↓'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results Section ── */}
        {showResults && (
          <div>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {filteredServices.length} Services Found
              </h2>
              <Link 
                href="/configurator"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
              >
                ⚡ Get Free Proposal
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No services match your filters</h3>
                <p className="text-slate-400 mb-4">Try adjusting your search or category selection</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Featured Services Spotlight ── */}
        {!activeIndustry && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                ⭐ Featured Services
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.slice(0, 6).map((service: Service, i: number) => (
                <ServiceCard key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── CTA Section ── */}
        <div className="mt-20 py-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Finding the Right Solution?
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Our AI agents can match you with the perfect services based on your requirements, budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/configurator"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
              >
                ⚡ Get Custom Recommendation
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700/80 transition-all"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
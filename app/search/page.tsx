// app/search/page.tsx - Enhanced Search Page (SEO Optimized)
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';

const CATEGORIES = [
  { key: 'ai', label: 'AI Services', emoji: '🧠', color: 'from-purple-500 to-indigo-500', count: 2148 },
  { key: 'it', label: 'IT Services', emoji: '🖥️', color: 'from-blue-500 to-cyan-500', count: 259 },
  { key: 'cloud', label: 'Cloud Services', emoji: '☁️', color: 'from-sky-400 to-blue-600', count: 138 },
  { key: 'security', label: 'Security Services', emoji: '🔐', color: 'from-red-500 to-orange-500', count: 139 },
  { key: 'data', label: 'Data Analytics', emoji: '📊', color: 'from-green-500 to-emerald-500', count: 108 },
  { key: 'automation', label: 'Automation', emoji: '🤖', color: 'from-pink-500 to-rose-500', count: 99 },
  { key: 'micro-saas', label: 'Micro-SaaS Products', emoji: '🚀', color: 'from-amber-500 to-orange-500', count: 159 },
];

const INDUSTRIES = [
  { key: 'technology-saas', label: 'Technology & SaaS', emoji: '🏭', color: 'from-amber-500 to-orange-500' },
  { key: 'healthcare-life-sciences', label: 'Healthcare & Life Sciences', emoji: '🏥', color: 'from-pink-500 to-rose-500' },
  { key: 'financial-services-fintech', label: 'Financial Services & FinTech', emoji: '💳', color: 'from-indigo-500 to-purple-500' },
  { key: 'manufacturing-industrial', label: 'Manufacturing & Industrial', emoji: '🏗️', color: 'from-yellow-500 to-amber-500' },
  { key: 'retail-ecommerce', label: 'Retail & E-Commerce', emoji: '🛒', color: 'from-sky-500 to-blue-600' },
  { key: 'logistics-supply-chain', label: 'Logistics & Supply Chain', emoji: '🚚', color: 'from-rose-500 to-red-500' },
  { key: 'media-entertainment', label: 'Media & Entertainment', emoji: '🎬', color: 'from-blue-500 to-cyan-500' },
  { key: 'legal-compliance', label: 'Legal & Compliance', emoji: '⚖️', color: 'from-purple-500 to-pink-500' },
  { key: 'energy-utilities', label: 'Energy & Utilities', emoji: '⚡', color: 'from-green-500 to-emerald-500' },
  { key: 'hospitality-tourism', label: 'Hospitality & Tourism', emoji: '🏨', color: 'from-violet-500 to-fuchsia-500' },
  { key: 'telecommunications', label: 'Telecommunications', emoji: '📡', color: 'from-blue-500 to-cyan-500' },
  { key: 'gaming-interactive', label: 'Gaming & Interactive Entertainment', emoji: '🎮', color: 'from-purple-500 to-pink-500' },
  { key: 'real-estate', label: 'Real Estate & Property', emoji: '🏢', color: 'from-emerald-500 to-teal-500' },
];

export const metadata = {
  title: 'Search AI & IT Services | Zion Tech Group',
  description: 'Search and discover 15,000+ AI, IT, cloud, security, data, automation, and micro-SaaS services. Find tailored solutions for your industry with advanced filtering and AI-powered recommendations.',
  keywords: 'search AI services, find IT solutions, AI catalog search, cloud services directory, cybersecurity solutions, data analytics tools, automation services, micro-SaaS products, industry solutions',
  alternates: { canonical: '/search/' },
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const services: Service[] = allServices as Service[];

  const filteredServices = useMemo(() => {
    let list = services;

    if (selectedCategory) {
      list = list.filter((s: any) => s.category === selectedCategory);
    }

    if (selectedIndustry) {
      list = list.filter((s: any) => s.industry?.toLowerCase().includes(selectedIndustry.toLowerCase()));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((s: any) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags?.some((t: string) => t.toLowerCase().includes(q))
      );
    }

    return list.slice(0, 100);
  }, [services, selectedCategory, selectedIndustry, searchQuery]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedIndustry(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'AI & IT Services Search - Zion Tech Group',
            'description': 'Search and discover 15,000+ AI, IT, cloud, security, data, automation, and micro-SaaS services. Find tailored solutions for your industry with advanced filtering.',
            'url': 'https://ziontechgroup.com/search/',
            'mainEntity': {
              '@type': 'WebSite',
              'name': 'Zion Tech Group Services Catalog',
              'url': 'https://ziontechgroup.com',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://ziontechgroup.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> 15,000+ AI & IT Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Find Your Perfect AI Solution
              </span>{' '}
              <span className="text-white">Fast</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Search and discover AI, IT, cloud, security, data, automation, and micro-SaaS services 
              tailored to your industry. Get expert recommendations in minutes.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search services (e.g., fraud detection, cloud migration, AI chatbot, predictive maintenance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Active Filters */}
            {(selectedCategory || selectedIndustry) && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedCategory && (
                  <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 text-sm">
                    Category: {CATEGORIES.find(c => c.key === selectedCategory)?.label}
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="ml-2 hover:text-purple-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedIndustry && (
                  <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm">
                    Industry: {INDUSTRIES.find(i => i.key === selectedIndustry)?.label}
                    <button 
                      onClick={() => setSelectedIndustry(null)}
                      className="ml-2 hover:text-blue-200"
                    >
                      ✕
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 rounded-full bg-slate-800/60 text-slate-400 text-sm hover:bg-slate-700/80"
                >
                  Clear All
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                ⚡ Get AI Recommendations →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Filter by Category
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Browse services by category or industry to find solutions tailored to your needs.
            </p>
          </div>

          {/* Category Filters */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-xl border transition-all ${
                selectedCategory === null
                  ? 'bg-purple-900/30 border-purple-500/40'
                  : 'bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-sm font-semibold text-white">All Categories</div>
                <div className="text-xs text-slate-500">15,000+ services</div>
              </div>
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`p-4 rounded-xl border transition-all ${
                  selectedCategory === cat.key
                    ? `bg-[${cat.color.replace('from', 'rgba(255,255,255,0.1)')}] border-purple-500/40`
                    : 'bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{cat.emoji}</div>
                  <div className="text-sm font-semibold text-white">{cat.label}</div>
                  <div className="text-xs text-slate-500">{cat.count}+ services</div>
                </div>
              </button>
            ))}
          </div>

          {/* Industry Filters */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple-300">Filter by Industry →</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.key}
                  onClick={() => setSelectedIndustry(ind.key)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    selectedIndustry === ind.key
                      ? 'bg-purple-600/30 text-purple-300'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80'
                  }`}
                >
                  {ind.emoji} {ind.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-purple-300">
                Results {filteredServices.length > 0 ? `(${filteredServices.length})` : '(0)'}
              </span>
            </h3>
            
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-xl bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service: any) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group block rounded-xl border border-slate-700 bg-slate-900/30 hover:bg-slate-800/60 hover:border-purple-500/40 p-4 transition-all"
                  >
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-2">{service.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">{service.category}</span>
                      {service.industry && (
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-500">{service.industry}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Need Help Finding the Right Solution?
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our AI agents work 24/7 to recommend the perfect services for your business. 
            Get a free, custom proposal with implementation timeline in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

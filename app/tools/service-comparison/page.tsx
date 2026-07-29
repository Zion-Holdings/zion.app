// app/tools/service-comparison/page.tsx - Service Comparison Tool
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices } from '../../data/servicesData';
import type { Service } from '../../data/servicesData';

const CATEGORIES = [
  { key: 'ai', label: 'AI Services', color: 'from-purple-500 to-pink-500' },
  { key: 'it', label: 'IT Services', color: 'from-blue-500 to-cyan-500' },
  { key: 'cloud', label: 'Cloud Services', color: 'from-sky-400 to-blue-600' },
  { key: 'security', label: 'Security Services', color: 'from-red-500 to-orange-500' },
  { key: 'data', label: 'Data Analytics', color: 'from-green-500 to-emerald-500' },
  { key: 'automation', label: 'Automation', color: 'from-pink-500 to-rose-500' },
  { key: 'micro-saas', label: 'Micro-SaaS', color: 'from-amber-500 to-orange-500' },
  { key: 'devops', label: 'DevOps', color: 'from-cyan-500 to-blue-500' },
];

export default function ServiceComparisonPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const services: Service[] = allServices as Service[];

  // Filter services
  const filteredServices = useMemo(() => {
    let list = services;
    if (categoryFilter !== 'all') {
      list = list.filter(s => s.category === categoryFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s => 
        s.title.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [services, categoryFilter, searchQuery]);

  // Toggle service selection
  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      if (prev.includes(id)) {
        return prev.filter(s => s !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  // Get selected service details
  const selectedDetails = useMemo(() => {
    return selectedServices
      .map(id => services.find(s => s.id === id))
      .filter(Boolean) as Service[];
  }, [selectedServices, services]);

  // Calculate comparison values
  const getMonthlyPrice = (service: Service): number => {
    const basic = parseInt(service.pricing?.basic?.replace(/[^0-9]/g, '') || '0');
    return basic;
  };

  const getFeatureCount = (service: Service): number => {
    return service.features?.length || 0;
  };

  const getBenefitCount = (service: Service): number => {
    return service.benefits?.length || 0;
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── Header ── */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">●</span> Comparison Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Compare Services</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Compare up to 3 services side-by-side to find the perfect solution for your needs.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="py-12 bg-slate-900/30 border-y border-slate-800">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-slate-800/60 border border-slate-700/50 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <svg className="absolute right-4 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 9a7.5 7.5 0 01-2.85 7.65z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  categoryFilter === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setCategoryFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    categoryFilter === cat.key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center text-slate-400 text-sm">
            {selectedServices.length > 0 && (
              <span>
                Comparing {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} 
                <button
                  onClick={() => setSelectedServices([])}
                  className="ml-2 underline text-purple-400 hover:text-purple-300"
                >
                  Clear selection
                </button>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      {selectedDetails.length > 0 ? (
        <section className="py-20">
          <div className="container-page">
            <div className="overflow-x-auto">
              <table className="w-full glass-card rounded-xl border border-slate-800/50">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-left text-slate-300 font-semibold">Feature</th>
                    {selectedDetails.map((service, idx) => (
                      <th key={idx} className="px-6 py-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-sm text-slate-400">Service {idx + 1}</span>
                          <Link
                            href={`/services/${service.id}`}
                            className="mt-1 text-sm font-semibold text-purple-400 hover:text-purple-300 line-clamp-1 max-w-40"
                          >
                            {service.title}
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Monthly Price */}
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium text-white">Monthly Price</td>
                    {selectedDetails.map((service, idx) => (
                      <td key={idx} className="px-6 py-4 text-center text-emerald-400 font-semibold">
                        ${getMonthlyPrice(service)}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Feature Count */}
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium text-white">Features</td>
                    {selectedDetails.map((service, idx) => (
                      <td key={idx} className="px-6 py-4 text-center text-cyan-400">
                        {getFeatureCount(service)} features
                      </td>
                    ))}
                  </tr>
                  
                  {/* Benefits Count */}
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium text-white">Key Benefits</td>
                    {selectedDetails.map((service, idx) => (
                      <td key={idx} className="px-6 py-4 text-center text-amber-400">
                        {getBenefitCount(service)} benefits
                      </td>
                    ))}
                  </tr>
                  
                  {/* Category */}
                  <tr className="border-b border-slate-800">
                    <td className="px-6 py-4 font-medium text-white">Category</td>
                    {selectedDetails.map((service, idx) => (
                      <td key={idx} className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${CATEGORIES.find(c => c.key === service.category)?.color || 'from-purple-500 to-pink-500'} text-white`}>
                          {service.category}
                        </span>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Top Features */}
                  <tr>
                    <td className="px-6 py-4 font-medium text-white">Top Features</td>
                    {selectedDetails.map((service, idx) => (
                      <td key={idx} className="px-6 py-4 text-center">
                        <ul className="text-xs text-slate-300 text-left space-y-1">
                          {service.features.slice(0, 3).map((f, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-purple-400 mt-0.5">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Browse All Services →
              </Link>
            </div>
          </div>
        </section>
      ) : (
        /* ── Service Selection ── */
        <section className="py-20">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Select Services to Compare
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {filteredServices.slice(0, 12).map((service) => (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300 cursor-pointer ${
                    selectedServices.includes(service.id) 
                      ? 'border-purple-400 ring-1 ring-purple-400/20' 
                      : ''
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">{service.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug line-clamp-2">
                          {service.title}
                        </h3>
                        <span className="text-xs text-slate-500 block mt-1">
                          {service.category} • ${service.pricing?.basic || 'Contact'}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="h-5 w-5 rounded border-purple-500 mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length > 12 && (
              <div className="text-center mt-8">
                <button className="px-6 py-2 rounded-full bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 transition">
                  Load more services
                </button>
              </div>
            )}
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-400">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-purple-400 hover:text-purple-300"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
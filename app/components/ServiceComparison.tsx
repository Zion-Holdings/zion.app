'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';

interface CompareService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, string>;
  href: string;
}

export default function ServiceComparison() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const availableServices = useMemo(() => {
    let services = allServices as Service[];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      services = services.filter(s => 
        s.title.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }
    return services;
  }, [searchQuery]);

  const selectedServices = useMemo(() => {
    return selectedIds
      .map(id => allServices.find(s => s.id === id))
      .filter(Boolean) as CompareService[];
  }, [selectedIds]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(s => s !== id));
    } else if (selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const clearSelection = () => {
    setSelectedIds([]);
    setSearchQuery('');
  };

  const getFirstPrice = (pricing: Record<string, string>) => {
    const values = Object.values(pricing);
    return values[0] || 'Contact for Quote';
  };

  // Feature comparison keys
  const featureKeys = ['features', 'benefits'];

  return (
    <section className="py-16">
      <div className="container-page">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Compare Services Side-by-Side</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Compare up to 3 AI services to find the perfect solution for your needs
          </p>
        </div>

        {/* Search and Selection */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services to compare..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-card px-4 py-3 pl-10 rounded-xl text-white bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
            </div>
            
            {selectedIds.length > 0 && (
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                {selectedServices.map(s => (
                  <span 
                    key={s.id} 
                    className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 text-sm"
                  >
                    {s.icon} {s.title}
                    <button 
                      onClick={() => toggleSelect(s.id)}
                      className="ml-2 text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearSelection}
                  className="text-slate-500 text-xs hover:text-purple-400"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Service Selection Grid */}
        {selectedServices.length < 3 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">🧭</span>
              <h3 className="text-xl font-bold text-white">
                Select services to compare ({selectedServices.length}/3 selected)
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-96 overflow-y-auto p-4 border border-slate-800 rounded-xl">
              {availableServices.slice(0, 20).map(service => (
                <button
                  key={service.id}
                  onClick={() => toggleSelect(service.id)}
                  disabled={selectedIds.length >= 3 && !selectedIds.includes(service.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedIds.includes(service.id)
                      ? 'border-purple-500 bg-purple-900/20'
                      : 'border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
                  } ${selectedIds.length >= 3 && !selectedIds.includes(service.id) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white line-clamp-1">{service.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">{service.description}</p>
                      <span className="text-xs text-purple-300 mt-2">
                        From {getFirstPrice(service.pricing)}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {selectedServices.length > 0 && (
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-[1fr_150px_150px_150px] gap-px border border-slate-800 rounded-xl overflow-hidden">
                {/* Header */}
                <>
                  <div className="bg-slate-900 p-4 text-left">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Feature</span>
                  </div>
                  {selectedServices.map((service, idx) => (
                    <div 
                      key={service.id} 
                      className="bg-slate-900 p-4 text-center"
                    >
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {service.icon} {service.title.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  ))}
                </>

                {/* Feature Rows */}
                <div className="bg-slate-900/50 p-4 font-semibold text-white">
                  Category
                </div>
                {selectedServices.map(s => (
                  <div key={s.id} className="bg-slate-900/30 p-4 text-center">
                    <span className="text-purple-300 text-sm">{s.category}</span>
                  </div>
                ))}

                <div className="bg-slate-900/50 p-4 font-semibold text-white">
                  Price (Starting)
                </div>
                {selectedServices.map(s => (
                  <div key={s.id} className="bg-slate-900/30 p-4 text-center">
                    <span className="text-emerald-400 text-sm">{getFirstPrice(s.pricing)}</span>
                  </div>
                ))}

                <div className="bg-slate-900/50 p-4 font-semibold text-white">
                  Top Features
                </div>
                {selectedServices.map(s => (
                  <div key={s.id} className="bg-slate-900/30 p-4">
                    <ul className="text-xs text-slate-300 space-y-1">
                      {s.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span className="line-clamp-2">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-slate-900/50 p-4 font-semibold text-white">
                  Key Benefits
                </div>
                {selectedServices.map(s => (
                  <div key={s.id} className="bg-slate-900/30 p-4">
                    <ul className="text-xs text-slate-300 space-y-1">
                      {s.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 mt-0.5">▸</span>
                          <span className="line-clamp-2">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-slate-900/50 p-4 font-semibold text-white">
                  Actions
                </div>
                {selectedServices.map(s => (
                  <div key={s.id} className="bg-slate-900/30 p-4 text-center">
                    <Link 
                      href={s.href}
                      className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedServices.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">No services found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your search terms
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all"
            >
              Clear search
            </button>
          </div>
        )}

        {selectedServices.length === 0 && !searchQuery && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Compare Up to 3 Services</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Select services from the grid above to compare features, pricing, and benefits side-by-side
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Browse All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
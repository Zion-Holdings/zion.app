'use client';

import { useState } from 'react';

const CATEGORY_CONFIG = {
  ai: { label: 'AI Services', emoji: '🧠', count: 450, color: 'from-purple-500 to-pink-500', href: '/services/?category=ai' },
  cloud: { label: 'Cloud Services', emoji: '☁️', count: 320, color: 'from-blue-500 to-cyan-500', href: '/services/?category=cloud' },
  security: { label: 'Security', emoji: '🛡️', count: 280, color: 'from-emerald-500 to-teal-500', href: '/services/?category=security' },
  analytics: { label: 'Analytics', emoji: '📊', count: 180, color: 'from-amber-500 to-orange-500', href: '/services/?category=analytics' },
  automation: { label: 'Automation', emoji: '🤖', count: 210, color: 'from-indigo-500 to-purple-500', href: '/services/?category=automation' },
  data: { label: 'Data Services', emoji: '📁', count: 150, color: 'from-green-500 to-emerald-500', href: '/services/?category=data' },
  it: { label: 'IT Services', emoji: '💻', count: 190, color: 'from-cyan-500 to-blue-500', href: '/services/?category=it' },
  devops: { label: 'DevOps', emoji: '⚙️', count: 95, color: 'from-slate-500 to-gray-600', href: '/services/?category=devops' },
  healthcare: { label: 'Healthcare', emoji: '🏥', count: 85, color: 'from-red-500 to-pink-500', href: '/services/?category=healthcare' },
  finance: { label: 'Financial Services', emoji: '🏦', count: 75, color: 'from-fuchsia-500 to-purple-500', href: '/services/?category=financial-services' },
  retail: { label: 'Retail', emoji: '🛍️', count: 65, color: 'from-pink-500 to-rose-500', href: '/services/?category=retail' },
  manufacturing: { label: 'Manufacturing', emoji: '🏭', count: 55, color: 'from-yellow-500 to-amber-500', href: '/services/?category=manufacturing' },
  logistics: { label: 'Logistics', emoji: '🚚', count: 45, color: 'from-lime-500 to-green-500', href: '/services/?category=logistics' },
  telecom: { label: 'Telecom', emoji: '📱', count: 40, color: 'from-violet-500 to-indigo-500', href: '/services/?category=telecom' },
  energy: { label: 'Energy', emoji: '⚡', count: 35, color: 'from-yellow-400 to-amber-500', href: '/services/?category=energy' },
  real_estate: { label: 'Real Estate', emoji: '🏢', count: 30, color: 'from-teal-500 to-cyan-500', href: '/services/?category=real-estate' },
};

const CATEGORIES = Object.entries(CATEGORY_CONFIG);

export default function ServiceCategoriesGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="service-categories" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          🧭 Browse by Category
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Explore our AI-powered services organized by category. Each category contains specialized solutions for specific business needs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {CATEGORIES.map(([key, cat]) => (
            <a
              key={key}
              href={cat.href}
              className="group block"
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`bg-slate-900/50 rounded-xl border border-slate-800 p-4 transition-all hover:scale-[1.02] ${
                hoveredCategory === key ? 'border-purple-500/30 shadow-purple-500/10 shadow-lg' : 'hover:border-slate-700'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-xs text-slate-400">{cat.count}+</span>
                </div>
                <h3 className={`text-white font-semibold text-sm mb-2 transition-all ${
                  hoveredCategory === key ? 'text-purple-400' : ''
                }`}>
                  {cat.label}
                </h3>
                <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${cat.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm">
            <span>Showing 16 categories with 3129+ total services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
// components/IndustryServicesExplorer.tsx - Industry-based service discovery component
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allServices } from '../app/data/servicesData';
import type { Service } from '../app/data/servicesData';

const INDUSTRIES = [
  { 
    key: 'healthcare', 
    label: 'Healthcare', 
    emoji: '🏥', 
    color: 'from-emerald-500 to-teal-600',
    description: 'AI diagnostics, patient management, drug discovery'
  },
  { 
    key: 'finance', 
    label: 'Finance', 
    emoji: '💳', 
    color: 'from-blue-500 to-indigo-600',
    description: 'Fraud detection, risk assessment, compliance'
  },
  { 
    key: 'retail', 
    label: 'Retail', 
    emoji: '🛒', 
    color: 'from-pink-500 to-rose-600',
    description: 'Personalization, inventory, customer analytics'
  },
  { 
    key: 'manufacturing', 
    label: 'Manufacturing', 
    emoji: '🏭', 
    color: 'from-amber-500 to-orange-600',
    description: 'Predictive maintenance, quality control, automation'
  },
  { 
    key: 'logistics', 
    label: 'Logistics', 
    emoji: '🚚', 
    color: 'from-cyan-500 to-blue-600',
    description: 'Route optimization, supply chain, tracking'
  },
  { 
    key: 'legal', 
    label: 'Legal', 
    emoji: '⚖️', 
    color: 'from-violet-500 to-purple-600',
    description: 'Contract analysis, compliance, e-discovery'
  },
];

export default function IndustryServicesExplorer() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);
  
  const services: Service[] = allServices as Service[];
  
  const getIndustryServiceCount = (industryKey: string): number => {
    const industryMap: Record<string, string[]> = {
      healthcare: ['Healthcare', 'Life Sciences', 'Medical'],
      finance: ['Finance', 'FinTech', 'Banking'],
      retail: ['Retail', 'E-Commerce', 'Commerce'],
      manufacturing: ['Manufacturing', 'Industrial'],
      logistics: ['Logistics', 'Supply Chain'],
      legal: ['Legal', 'Compliance'],
    };
    const keywords = industryMap[industryKey] || [];
    return services.filter(s => 
      s.industry && keywords.some(k => s.industry?.includes(k))
    ).length;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950">
      <div className="container-page">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-4">
            <span className="text-green-400">●</span> Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Solutions by Industry
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            AI services tailored to your industry's specific challenges and opportunities
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {INDUSTRIES.map((industry) => {
            const serviceCount = getIndustryServiceCount(industry.key);
            return (
              <Link
                key={industry.key}
                href={`/industries/`}
                className="glass-card group hover:border-purple-500/40 transition-all duration-300"
                onMouseEnter={() => setHoveredIndustry(industry.key)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="p-6">
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
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-purple-400 font-medium text-sm">{serviceCount}+</span>
                        <span className="text-slate-500 text-xs">services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Browse All Industry Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}
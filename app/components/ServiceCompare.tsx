'use client';

import React, { useState, useMemo } from 'react';

interface ServiceOption {
  id: string;
  title: string;
  category: string;
  pricing: { basic: string; pro: string; enterprise: string };
  icon: string;
}

const SAMPLE_SERVICES: ServiceOption[] = [
  { id: 'ai-email-intelligence', title: 'AI Email Intelligence Suite', category: 'AI', pricing: { basic: '$29/mo', pro: '$79/mo', enterprise: '$199/mo' }, icon: '📧' },
  { id: 'ai-document-processor', title: 'AI Document Processor', category: 'AI', pricing: { basic: '$19/mo', pro: '$59/mo', enterprise: '$149/mo' }, icon: '📄' },
  { id: 'cyber-soc', title: 'SOC as a Service', category: 'Security', pricing: { basic: '$499/mo', pro: '$1,299/mo', enterprise: '$3,999/mo' }, icon: '🛡' },
  { id: 'it-helpdesk', title: 'IT Helpdesk 24/7', category: 'IT', pricing: { basic: '$99/mo', pro: '$299/mo', enterprise: '$799/mo' }, icon: '🖥' },
  { id: 'ai-bi-dashboards', title: 'BI Dashboards Pro', category: 'Data', pricing: { basic: '$49/mo', pro: '$149/mo', enterprise: '$399/mo' }, icon: '📊' },
  { id: 'ai-invoice-automation', title: 'Invoice Automation', category: 'Automation', pricing: { basic: '$29/mo', pro: '$79/mo', enterprise: '$199/mo' }, icon: '🧾' },
  { id: 'ai-roi-calculator', title: 'ROI Tracking Suite', category: 'Analytics', pricing: { basic: '$39/mo', pro: '$99/mo', enterprise: '$249/mo' }, icon: '📈' },
  { id: 'ai-predictive-maintenance', title: 'Predictive Maintenance AI', category: 'AI', pricing: { basic: '$199/mo', pro: '$499/mo', enterprise: '$1,299/mo' }, icon: '⚙' },
  { id: 'ai-customer-support', title: 'AI Customer Support Hub', category: 'AI', pricing: { basic: '$49/mo', pro: '$149/mo', enterprise: '$399/mo' }, icon: '💬' },
  { id: 'ai-cloud-optimizer', title: 'Cloud Cost Optimizer', category: 'Cloud', pricing: { basic: '$99/mo', pro: '$249/mo', enterprise: '$599/mo' }, icon: '☁' },
  { id: 'ai-pen-testing', title: 'Pen Testing as a Service', category: 'Security', pricing: { basic: '$299/mo', pro: '$699/mo', enterprise: '$1,499/mo' }, icon: '🔓' },
  { id: 'ai-data-pipeline', title: 'Data Pipeline Builder', category: 'Data', pricing: { basic: '$79/mo', pro: '$199/mo', enterprise: '$499/mo' }, icon: '🔄' },
];

type TierKey = 'basic' | 'pro' | 'enterprise';

export default function ServiceCompare() {
  const [selected, setSelected] = useState<string[]>([]);
  const [tier, setTier] = useState<TierKey>('pro');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return SAMPLE_SERVICES;
    const q = search.toLowerCase();
    return SAMPLE_SERVICES.filter(s =>
      s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    );
  }, [search]);

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 4 ? [...prev, id] : prev
    );
  };

  const comparison = useMemo(() => {
    return SAMPLE_SERVICES.filter(s => selected.includes(s.id));
  }, [selected]);

  const parsePrice = (p: string) => {
    const m = p.match(/\$([\d,]+)/);
    return m ? parseInt(m[1].replace(/,/g, '')) : 0;
  };

  const totalMonthly = useMemo(() => {
    return comparison.reduce((sum, s) => sum + parsePrice(s.pricing[tier]), 0);
  }, [comparison, tier]);

  const categories = [...new Set(SAMPLE_SERVICES.map(s => s.category))];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">Free Tool</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ⚖️ Compare Services Side-by-Side
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select up to 4 services to compare features, pricing, and find the perfect stack for your business.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSearch(cat)}
                className="px-3 py-2 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors border border-gray-600/50"
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => setSearch('')}
              className="px-3 py-2 rounded-lg bg-gray-700/50 text-gray-400 text-sm hover:bg-gray-600/50 transition-colors border border-gray-600/50"
            >
              All
            </button>
          </div>
        </div>

        {/* Service Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {filtered.map(service => {
            const isSelected = selected.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => toggle(service.id)}
                className={`p-3 rounded-xl border-2 transition-all text-left ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-500'
                } ${!isSelected && selected.length >= 4 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{service.icon}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {service.category}
                  </span>
                </div>
                <p className={`text-sm font-medium ${isSelected ? 'text-emerald-300' : 'text-gray-300'}`}>
                  {service.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {service.pricing[tier]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Comparison Table */}
        {comparison.length > 0 && (
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
            {/* Tier Selector */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/80">
              <span className="text-sm text-gray-400">
                Comparing {comparison.length} service{comparison.length > 1 ? 's' : ''}
              </span>
              <div className="flex gap-2">
                {(['basic', 'pro', 'enterprise'] as TierKey[]).map(t => (
                  <button
                    key={t}
                    onClick={() => setTier(t)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      tier === t
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900/50">
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Feature</th>
                    {comparison.map(s => (
                      <th key={s.id} className="text-center p-4 min-w-[160px]">
                        <div className="text-2xl mb-1">{s.icon}</div>
                        <div className="text-white text-sm font-medium">{s.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{s.category}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-700/50">
                    <td className="p-4 text-gray-400 text-sm font-medium">{tier.charAt(0).toUpperCase() + tier.slice(1)} Price</td>
                    {comparison.map(s => (
                      <td key={s.id} className="p-4 text-center">
                        <span className="text-emerald-400 font-bold text-lg">{s.pricing[tier]}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-700/50 bg-gray-900/30">
                    <td className="p-4 text-gray-400 text-sm font-medium">Category</td>
                    {comparison.map(s => (
                      <td key={s.id} className="p-4 text-center text-gray-300 text-sm">{s.category}</td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-700/50">
                    <td className="p-4 text-gray-400 text-sm font-medium">Best For</td>
                    {comparison.map(s => (
                      <td key={s.id} className="p-4 text-center text-gray-400 text-xs">
                        {s.category === 'AI' ? 'Automation & Intelligence' :
                         s.category === 'Security' ? 'Threat Protection' :
                         s.category === 'IT' ? 'Infrastructure Support' :
                         s.category === 'Data' ? 'Analytics & Insights' :
                         s.category === 'Cloud' ? 'Infrastructure Optimization' :
                         'Process Automation'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-700/50 bg-gray-900/30">
                    <td className="p-4 text-gray-400 text-sm font-medium">Setup Time</td>
                    {comparison.map(s => (
                      <td key={s.id} className="p-4 text-center text-gray-400 text-sm">
                        {s.category === 'Security' ? '1-2 weeks' : s.category === 'Data' ? '3-5 days' : '1-3 days'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Total Footer */}
            <div className="p-4 border-t border-gray-700 bg-emerald-500/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-gray-400 text-sm">
                💡 <span className="text-white font-medium">{comparison.length} services</span> at <span className="text-emerald-400 font-medium">{tier}</span> tier
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-500">Combined estimate</p>
                  <p className="text-2xl font-bold text-emerald-400">{totalMonthly > 0 ? `$${totalMonthly.toLocaleString()}/mo` : 'Custom'}</p>
                </div>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Quote Request: ${comparison.map(s => s.title).join(', ')}`}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  Request Quote →
                </a>
              </div>
            </div>
          </div>
        )}

        {selected.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-2">👆 Select services above to compare</p>
            <p className="text-sm">Choose up to 4 services and see pricing, features, and recommendations side by side</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-3">Need a custom combination? We'll architect your perfect stack.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors border border-gray-700 text-sm">
              📧 kleber@ziontechgroup.com
            </a>
            <a href="tel:+13024640950" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors border border-gray-700 text-sm">
              📞 +1 302 464 0950
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-3">364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}

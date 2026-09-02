'use client';

import { useState } from 'react';

const POPULAR_SERVICES = [
  {
    id: 'ai-anti-money-laundering-intelligence',
    name: 'AI Anti-Money Laundering Intelligence',
    category: 'AI Services',
    views: 15420,
    clients: 87,
    rating: 4.9,
    price: '$499',
    icon: '🛡️',
    tagline: 'Detect financial crimes with 99.5% accuracy',
  },
  {
    id: 'ai-computer-vision-quality-inspection',
    name: 'AI Computer Vision Quality Inspection',
    category: 'AI Services',
    views: 12850,
    clients: 63,
    rating: 4.8,
    price: '$799',
    icon: '🔍',
    tagline: 'Automated defect detection for manufacturing',
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    category: 'Cloud Services',
    views: 11230,
    clients: 94,
    rating: 4.7,
    price: '$899',
    icon: '💰',
    tagline: 'Reduce cloud costs by up to 40%',
  },
  {
    id: 'ai-kyc-identity-verification',
    name: 'AI KYC Identity Verification',
    category: 'AI Services',
    views: 9870,
    clients: 78,
    rating: 4.9,
    price: '$299',
    icon: '🆔',
    tagline: 'Verify identities in seconds with 99.9% accuracy',
  },
  {
    id: 'zero-trust-identity',
    name: 'Zero Trust Identity Platform',
    category: 'Security',
    views: 8940,
    clients: 52,
    rating: 4.8,
    price: '$1,499',
    icon: '🔐',
    tagline: 'Secure access for hybrid work environments',
  },
  {
    id: 'ai-personalized-product-recommendations',
    name: 'AI Personalized Product Recommendations',
    category: 'AI Services',
    views: 7850,
    clients: 61,
    rating: 4.7,
    price: '$299',
    icon: '🛍️',
    tagline: 'Boost conversions with personalized recommendations',
  },
  {
    id: 'supply-chain-visibility',
    name: 'Supply Chain Visibility Platform',
    category: 'Logistics',
    views: 6780,
    clients: 45,
    rating: 4.8,
    price: '$1,999',
    icon: '🚛',
    tagline: 'Real-time tracking across your entire supply chain',
  },
  {
    id: 'ai-procurement-intelligence',
    name: 'AI Procurement Intelligence',
    category: 'AI Services',
    views: 5920,
    clients: 38,
    rating: 4.9,
    price: '$1,299',
    icon: '🛒',
    tagline: 'Automated vendor selection and negotiation',
  },
];

const TIME_PERIODS = [
  { id: 'all', label: 'All Time' },
  { id: 'week', label: 'This Week' },
  { id: 'month', label: 'This Month' },
];

export default function PopularityLeaderboard() {
  const [timePeriod, setTimePeriod] = useState('all');
  const [activeTab, setActiveTab] = useState('views');

  return (
    <section id="popular-services" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          🔥 Most Popular AI Services
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          These are the AI services trusted by hundreds of companies worldwide. Based on real usage data and client success.
        </p>
        
        {/* Time Period Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800/50 rounded-full p-1">
            {TIME_PERIODS.map((period) => (
              <button
                key={period.id}
                onClick={() => setTimePeriod(period.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  timePeriod === period.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Leaderboard */}
        <div className="space-y-4">
          {POPULAR_SERVICES.map((service, index) => (
            <div key={service.id} className="bg-slate-900/30 rounded-xl border border-slate-800 p-4 hover:border-purple-500/30 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 items-start">
                {/* Rank & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                {/* Service Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                    <span className="text-purple-400 font-bold">{service.price}</span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-3">{service.tagline}</p>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-500">
                      <span className="text-purple-400 font-semibold">{service.views.toLocaleString()}</span> views
                    </span>
                    <span className="text-slate-500">
                      <span className="text-purple-400 font-semibold">{service.clients}</span> clients
                    </span>
                    <span className="text-slate-500">
                      <span className="text-yellow-400 font-semibold">⭐ {service.rating}</span> rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            📅 Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
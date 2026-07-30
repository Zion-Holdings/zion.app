'use client';

import { useState } from 'react';

const ROI_SERVICES = [
  {
    id: 'fraud-detection',
    name: 'AI Fraud Detection',
    icon: '🛡️',
    category: 'AI Services',
    baseSavings: 25000,
    description: 'Save millions on fraud losses',
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    icon: '💰',
    category: 'Cloud Services',
    baseSavings: 15000,
    description: 'Reduce cloud infrastructure costs',
  },
  {
    id: 'quality-inspection',
    name: 'Quality Inspection',
    icon: '🔍',
    category: 'AI Services',
    baseSavings: 10000,
    description: 'Reduce defect-related costs',
  },
  {
    id: 'procurement',
    name: 'AI Procurement Intelligence',
    icon: '🛒',
    category: 'AI Services',
    baseSavings: 30000,
    description: 'Save on vendor costs and procurement',
  },
  {
    id: 'telemedicine',
    name: 'AI Telemedicine',
    icon: '🏥',
    category: 'Healthcare',
    baseSavings: 20000,
    description: 'Reduce operational costs in healthcare',
  },
  {
    id: 'recommendations',
    name: 'Product Recommendations',
    icon: '🛍️',
    category: 'AI Services',
    baseSavings: 12000,
    description: 'Increase revenue from existing customers',
  },
];

const INDUSTRY_MULTIPLIERS = {
  financial_services: 1.5,
  healthcare: 1.2,
  retail: 1.3,
  manufacturing: 1.1,
  technology: 1.0,
  other: 1.0,
};

export default function ROICalculator() {
  const [selectedService, setSelectedService] = useState('fraud-detection');
  const [industry, setIndustry] = useState('technology');
  const [teamSize, setTeamSize] = useState(50);
  const [months, setMonths] = useState(12);

  const service = ROI_SERVICES.find(s => s.id === selectedService);
  const multiplier = INDUSTRY_MULTIPLIERS[industry] || 1.0;
  
  const monthlySavings = service ? service.baseSavings * multiplier * (teamSize / 100) : 0;
  const annualSavings = monthlySavings * 12;
  const roi = annualSavings > 0 && service ? ((annualSavings - (service.baseSavings * 0.1)) / (service.baseSavings * 0.1)) * 100 : 0;

  return (
    <section id="roi-calculator" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          💰 Estimate Your AI ROI
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Get a quick estimate of potential savings from our AI services. Based on real client results.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Select Service</h3>
              <div className="grid grid-cols-1 gap-3">
                {ROI_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-3 rounded-xl border transition-all text-left ${
                      selectedService === s.id
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <div className="text-left">
                        <div className="text-white font-medium">{s.name}</div>
                        <div className="text-xs text-slate-400">{s.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Industry</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(INDUSTRY_MULTIPLIERS).map(([key, mult]) => (
                  <button
                    key={key}
                    onClick={() => setIndustry(key)}
                    className={`p-3 rounded-xl border transition-all text-center ${
                      industry === key
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-white text-sm font-medium capitalize">{key.replace('_', ' ')}</div>
                    <div className="text-xs text-purple-400">x{mult}x</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Team Size</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTeamSize(Math.max(1, teamSize - 10))}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  -
                </button>
                <div className="flex-1 text-center">
                  <div className="text-white text-2xl font-bold">{teamSize}</div>
                  <div className="text-xs text-slate-400">Team Members</div>
                </div>
                <button
                  onClick={() => setTeamSize(teamSize + 10)}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 p-6">
              <h3 className="text-white font-bold text-xl mb-6">Estimated Annual Savings</h3>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  ${Math.round(annualSavings).toLocaleString()}
                </div>
                <div className="text-purple-300">potential savings per year</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/30 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">ROI</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {Math.round(roi)}%
                  </div>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 mb-1">Payback</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {Math.round(12 / (roi / 100 + 1))} mo
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://calendly.com/kleber-ziontechgroup"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-600 font-semibold text-sm hover:bg-slate-100 transition-all"
                >
                  📅 Get Your Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
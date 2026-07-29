'use client';

import { useState } from 'react';

const COMPARISON_SERVICES = [
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection',
    icon: '🛡️',
    category: 'AI Services',
    features: [
      { label: 'Accuracy', value: '99.5%', has: true },
      { label: 'Real-time', value: '✓', has: true },
      { label: 'Multi-cloud', value: '✓', has: true },
      { label: 'Custom Rules', value: '✓', has: true },
      { label: 'API Access', value: '✓', has: true },
      { label: 'Support', value: '24/7', has: true },
    ],
    startingPrice: '$499',
    bestFor: 'Financial Services, E-commerce',
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    icon: '💰',
    category: 'Cloud Services',
    features: [
      { label: 'Accuracy', value: '95%', has: true },
      { label: 'Real-time', value: '✓', has: true },
      { label: 'Multi-cloud', value: '✓', has: true },
      { label: 'Custom Rules', value: '✓', has: true },
      { label: 'API Access', value: '✓', has: true },
      { label: 'Support', value: '24/7', has: true },
    ],
    startingPrice: '$899',
    bestFor: 'Startups, Enterprises',
  },
  {
    id: 'quality-inspection',
    name: 'Quality Inspection',
    icon: '🔍',
    category: 'AI Services',
    features: [
      { label: 'Accuracy', value: '99.5%', has: true },
      { label: 'Real-time', value: '✓', has: true },
      { label: 'Multi-cloud', value: '✓', has: true },
      { label: 'Custom Rules', value: '✓', has: true },
      { label: 'API Access', value: '✓', has: true },
      { label: 'Support', value: '24/7', has: true },
    ],
    startingPrice: '$799',
    bestFor: 'Manufacturing, Retail',
  },
  {
    id: 'identity-verification',
    name: 'Identity Verification',
    icon: '🆔',
    category: 'AI Services',
    features: [
      { label: 'Accuracy', value: '99.9%', has: true },
      { label: 'Real-time', value: '✓', has: true },
      { label: 'Multi-cloud', value: '✓', has: true },
      { label: 'Custom Rules', value: '✓', has: true },
      { label: 'API Access', value: '✓', has: true },
      { label: 'Support', value: '24/7', has: true },
    ],
    startingPrice: '$299',
    bestFor: 'Financial Services, Healthcare',
  },
];

const FEATURES = [
  'Accuracy', 'Real-time', 'Multi-cloud', 'Custom Rules', 'API Access', 'Support',
];

export default function ServiceComparisonMatrix() {
  const [selectedServices, setSelectedServices] = useState([
    'ai-fraud-detection',
    'cloud-cost-optimizer',
    'quality-inspection',
  ]);

  const comparisonData = COMPARISON_SERVICES.filter(s => selectedServices.includes(s.id));

  return (
    <section id="service-comparison" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          📊 Compare Our Top Services
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Compare features, pricing, and capabilities of our most popular AI services side-by-side.
        </p>
        
        {/* Service Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {COMPARISON_SERVICES.map((service) => (
              <label key={service.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedServices([...selectedServices, service.id]);
                    } else {
                      setSelectedServices(selectedServices.filter(id => id !== service.id));
                    }
                  }}
                  className="rounded border-slate-600 bg-slate-800"
                />
                <span className="text-slate-300 text-sm">{service.name}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-slate-900/30 rounded-xl border border-slate-800">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left p-4 text-slate-400 font-medium">Features</th>
                {comparisonData.map((service) => (
                  <th key={service.id} className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">{service.icon}</span>
                      <span className="text-white font-semibold text-sm">{service.name}</span>
                      <span className="text-xs text-purple-400">{service.startingPrice}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature) => (
                <tr key={feature} className="border-b border-slate-800">
                  <td className="p-4 text-slate-300 font-medium">{feature}</td>
                  {comparisonData.map((service) => {
                    const featureData = service.features.find(f => f.label === feature);
                    return (
                      <td key={service.id} className="p-4 text-center">
                        {featureData?.has ? (
                          <span className="text-emerald-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">✗</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            📅 Book a Free Consultation to Choose
          </a>
        </div>
      </div>
    </section>
  );
}
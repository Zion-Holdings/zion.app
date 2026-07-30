'use client';

import { useState } from 'react';

const IMPLEMENTATION_TIMELINES = [
  {
    id: 'rapid',
    label: 'Rapid Deployment (1-3 days)',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500',
    services: [
      {
        id: 'ai-kyc-identity-verification',
        name: 'AI KYC Identity Verification',
        description: 'Verify identities in seconds',
        timeline: 'Day 1: API integration',
        time: '1 day',
        icon: '🆔',
        href: '/services/ai-kyc-identity-verification',
      },
      {
        id: 'ai-fraud-detection-intelligence',
        name: 'AI Fraud Detection Intelligence',
        description: 'Detect fraudulent transactions',
        timeline: 'Day 2: Model training',
        time: '2 days',
        icon: '🛡️',
        href: '/services/ai-anti-money-laundering-intelligence',
      },
      {
        id: 'product-recommendations',
        name: 'Product Recommendations',
        description: 'Personalize customer experiences',
        timeline: 'Day 1-3: Integration',
        time: '3 days',
        icon: '🛍️',
        href: '/services/ai-personalized-product-recommendations',
      },
    ],
  },
  {
    id: 'standard',
    label: 'Standard Deployment (1-2 weeks)',
    icon: '📅',
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        id: 'cloud-cost-optimizer',
        name: 'Cloud Cost Optimizer',
        description: 'Reduce cloud infrastructure costs',
        timeline: 'Week 1: Discovery & setup',
        time: '5 days',
        icon: '💰',
        href: '/services/cloud-cost-optimizer',
      },
      {
        id: 'quality-inspection',
        name: 'Quality Inspection',
        description: 'Automated visual quality control',
        timeline: 'Week 1-2: Training & deployment',
        time: '10 days',
        icon: '🔍',
        href: '/services/ai-computer-vision-quality-inspection',
      },
      {
        id: 'supply-chain-visibility',
        name: 'Supply Chain Visibility',
        description: 'Real-time tracking and analytics',
        timeline: 'Week 2: Full deployment',
        time: '14 days',
        icon: '🚛',
        href: '/services/supply-chain-visibility',
      },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Deployment (3-4 weeks)',
    icon: '🏢',
    color: 'from-purple-500 to-violet-500',
    services: [
      {
        id: 'zero-trust-identity',
        name: 'Zero Trust Identity Platform',
        description: 'Secure access for hybrid workforces',
        timeline: 'Week 1: Architecture design',
        time: '21 days',
        icon: '🔐',
        href: '/services/zero-trust-identity',
      },
      {
        id: 'procurement-intelligence',
        name: 'Procurement Intelligence',
        description: 'AI-powered vendor selection',
        timeline: 'Week 2-3: Integration',
        time: '28 days',
        icon: '🛒',
        href: '/services/ai-procurement-intelligence',
      },
      {
        id: 'telemedicine-platform',
        name: 'Telemedicine Platform',
        description: 'AI-assisted patient care',
        timeline: 'Week 3-4: Full rollout',
        time: '28 days',
        icon: '🏥',
        href: '/services/ai-telemedicine-platform',
      },
    ],
  },
];

export default function ImplementationTimeline() {
  const [activeTimeline, setActiveTimeline] = useState('rapid');

  const active = IMPLEMENTATION_TIMELINES.find(t => t.id === activeTimeline);

  const getTimelineColor = (timelineId: string) => {
    if (timelineId === 'rapid') return 'from-green-500 to-emerald-500';
    if (timelineId === 'standard') return 'from-blue-500 to-cyan-500';
    return 'from-purple-500 to-violet-500';
  };

  return (
    <section id="implementation-timeline" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          ⚡ Get Your AI Service Live Fast
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Most of our AI services can be deployed in days, not months. Choose your timeline and we'll get you started immediately.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800/50 rounded-full p-1">
            {IMPLEMENTATION_TIMELINES.map((timeline) => (
              <button
                key={timeline.id}
                onClick={() => setActiveTimeline(timeline.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTimeline === timeline.id
                    ? `bg-gradient-to-r ${timeline.color} text-white`
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {timeline.icon} {timeline.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-900/30 rounded-xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6 p-6">
            <div className="space-y-4">
              {active?.services.map((service) => (
                <div key={service.id} className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{service.name}</h3>
                    <p className="text-slate-400 text-sm mb-2">{service.description}</p>
                    <div className="text-xs text-purple-400">{service.timeline}</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full text-slate-300">
                      {service.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getTimelineColor(activeTimeline)} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{active?.icon}</span>
              </div>
              <h3 className="text-white font-bold mb-2">{active?.label}</h3>
              <p className="text-slate-400 text-sm mb-4">
                {active?.services.length} services available
              </p>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${getTimelineColor(activeTimeline)} rounded-full`} style={{ width: '75%' }}></div>
              </div>
              <div className="text-xs text-slate-500 mt-2">Average deployment time</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-800">
            <div className="text-purple-400 font-bold text-2xl mb-1">85%</div>
            <div className="text-slate-400 text-xs">Deployed in under 2 weeks</div>
          </div>
          <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-800">
            <div className="text-emerald-400 font-bold text-2xl mb-1">15 min</div>
            <div className="text-slate-400 text-xs">Get started with free tools</div>
          </div>
          <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-800">
            <div className="text-blue-400 font-bold text-2xl mb-1">24/7</div>
            <div className="text-slate-400 text-xs">AI agents always available</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            🚀 Start Your Deployment Today
          </a>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';

const RESOURCE_CATEGORIES = [
  {
    id: 'guides',
    label: 'Implementation Guides',
    icon: '📚',
    count: 12,
    description: 'Step-by-step guides for deploying AI services',
    resources: [
      {
        title: 'AI Fraud Detection Implementation Guide',
        description: 'Complete walkthrough for deploying fraud detection in 3 days',
        duration: '45 min read',
        href: '/resources/fraud-detection-guide',
      },
      {
        title: 'Cloud Cost Optimization Playbook',
        description: 'Reduce cloud costs by 30-50% with these proven strategies',
        duration: '32 min read',
        href: '/resources/cloud-cost-playbook',
      },
      {
        title: 'Computer Vision Quality Inspection Setup',
        description: 'Deploy automated quality inspection for manufacturing',
        duration: '58 min read',
        href: '/resources/quality-inspection-setup',
      },
    ],
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    icon: '📊',
    count: 24,
    description: 'Real-world examples of AI in action',
    resources: [
      {
        title: 'How a Bank Saved $2.3M with AI',
        description: 'Case study of fraud detection implementation',
        duration: '12 min read',
        href: '/case-studies/bank-fraud-detection',
      },
      {
        title: 'Manufacturing Quality Improvement',
        description: '35% defect reduction with computer vision',
        duration: '15 min read',
        href: '/case-studies/manufacturing-quality',
      },
      {
        title: 'Healthcare Cost Reduction',
        description: 'Telemedicine platform saved $450K annually',
        duration: '18 min read',
        href: '/case-studies/healthcare-cost',
      },
    ],
  },
  {
    id: 'webinars',
    label: 'Webinars',
    icon: '🎥',
    count: 18,
    description: 'Live and recorded expert sessions',
    resources: [
      {
        title: 'AI in Financial Services 2024',
        description: 'The latest trends and implementation strategies',
        duration: '1.5 hours',
        href: '/webinars/ai-financial-services',
      },
      {
        title: 'Cloud Cost Optimization Masterclass',
        description: 'Deep dive into multi-cloud cost reduction',
        duration: '2 hours',
        href: '/webinars/cloud-cost-masterclass',
      },
      {
        title: 'Security in the Age of AI',
        description: 'Balancing security and accessibility with AI',
        duration: '1.2 hours',
        href: '/webinars/ai-security',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Free Tools',
    icon: '🔧',
    count: 8,
    description: 'No-cost utilities for developers and teams',
    resources: [
      {
        title: 'API Key Manager',
        description: 'Securely manage and rotate API keys',
        duration: '5 min',
        href: '/tools/api-key-manager',
      },
      {
        title: 'Service Cost Calculator',
        description: 'Estimate your ROI before implementation',
        duration: '3 min',
        href: '/tools/cost-calculator',
      },
      {
        title: 'Deployment Validator',
        description: 'Check your deployment readiness',
        duration: '7 min',
        href: '/tools/deployment-validator',
      },
    ],
  },
];

export default function LearningResources() {
  const [activeCategory, setActiveCategory] = useState('guides');

  const activeCat = RESOURCE_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="learning-resources" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          📚 AI Learning Resources
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Accelerate your AI adoption with our free guides, case studies, webinars, and tools.
        </p>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800/50 rounded-full p-1">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.icon} {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
        
        {/* Resources */}
        <div className="bg-slate-900/30 rounded-xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {activeCat?.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.href}
                className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-all border border-slate-700 hover:border-purple-500/30"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold text-sm">{resource.title}</h3>
                  <span className="text-xs text-slate-400">{resource.duration}</span>
                </div>
                <p className="text-slate-400 text-xs mb-3">{resource.description}</p>
                <div className="text-xs text-purple-400">Read Guide →</div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Category Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {RESOURCE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-slate-900/30 rounded-lg p-4 border border-slate-800">
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-white font-bold">{cat.count}</div>
              <div className="text-xs text-slate-400">{cat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/resources/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            📚 View All Resources
          </a>
        </div>
      </div>
    </section>
  );
}
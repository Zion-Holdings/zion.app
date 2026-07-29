'use client';

import { useState } from 'react';

const SUCCESS_STORIES = [
  {
    id: 'finance-1',
    title: 'AI Financial Analytics for Regional Bank',
    client: 'Midwest Regional Bank',
    industry: 'Financial Services',
    challenge: 'Manual fraud detection with 40% false positives',
    solution: 'AI Fraud Detection Intelligence with real-time monitoring',
    results: [
      { metric: 'False Positive Reduction', value: '40%', icon: '📉' },
      { metric: 'Detection Accuracy', value: '99.5%', icon: '🎯' },
      { metric: 'Processing Time', value: '90%', icon: '⚡' },
      { metric: 'Annual Savings', value: '$2.3M', icon: '💰' },
    ],
    image: '/images/finance-case.png',
  },
  {
    id: 'healthcare-1',
    title: 'Telemedicine Platform for Hospital Network',
    client: 'Regional Hospital Network',
    industry: 'Healthcare',
    challenge: 'Long wait times and 30% no-show rate',
    solution: 'AI Telemedicine Platform with appointment optimization',
    results: [
      { metric: 'Wait Time Reduction', value: '65%', icon: '⏱️' },
      { metric: 'No-Show Rate', value: '15%', icon: '📅' },
      { metric: 'Patient Satisfaction', value: '92%', icon: '😊' },
      { metric: 'Revenue Increase', value: '18%', icon: '📈' },
    ],
    image: '/images/healthcare-case.png',
  },
  {
    id: 'retail-1',
    title: 'Personalized Recommendations for E-commerce',
    client: 'National Retail Chain',
    industry: 'Retail',
    challenge: 'Low conversion rates and cart abandonment',
    solution: 'AI Personalized Product Recommendations',
    results: [
      { metric: 'Conversion Increase', value: '18%', icon: '🛒' },
      { metric: 'Average Order Value', value: '30%', icon: '💳' },
      { metric: 'Customer Retention', value: '25%', icon: '🔁' },
      { metric: 'Revenue Growth', value: '$1.8M', icon: '📈' },
    ],
    image: '/images/retail-case.png',
  },
  {
    id: 'manufacturing-1',
    title: 'Quality Inspection for Automotive Parts',
    client: 'Auto Parts Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Manual quality inspection causing delays',
    solution: 'AI Computer Vision Quality Inspection',
    results: [
      { metric: 'Defect Detection', value: '99.5%', icon: '🔍' },
      { metric: 'Defect Reduction', value: '35%', icon: '📉' },
      { metric: 'Inspection Speed', value: '8x', icon: '🚀' },
      { metric: 'Cost Savings', value: '$450K', icon: '💰' },
    ],
    image: '/images/manufacturing-case.png',
  },
];

export default function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState(SUCCESS_STORIES[0]);

  return (
    <section id="success-stories" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          📈 Real Results from Real Clients
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          See how our AI services have delivered measurable results across industries. 
          Results verified and documented by our clients.
        </p>
        
        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {SUCCESS_STORIES.map((story) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className={`p-4 rounded-xl border transition-all text-left ${
                selectedStory.id === story.id
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-xs text-slate-400 mb-1">{story.industry}</div>
              <div className="text-white font-semibold mb-2">{story.title}</div>
              <div className="text-xs text-purple-400">{story.client}</div>
            </button>
          ))}
        </div>
        
        {/* Story Details */}
        <div className="bg-slate-900/30 rounded-xl border border-slate-800 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">{selectedStory.title}</h3>
              <div className="text-purple-400 mb-4">{selectedStory.client}</div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-slate-400 text-xs uppercase">Challenge</h4>
                  <p className="text-white text-sm">{selectedStory.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-slate-400 text-xs uppercase">Solution</h4>
                  <p className="text-white text-sm">{selectedStory.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-slate-400 text-xs uppercase">Results</h4>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {selectedStory.results.map((r) => (
                      <div key={r.metric} className="bg-slate-800/30 rounded p-3 text-center">
                        <div className="text-2xl mb-1">{r.icon}</div>
                        <div className="text-purple-400 font-bold text-sm">{r.value}</div>
                        <div className="text-xs text-slate-400">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <div className="text-white font-bold text-xl mb-2">{selectedStory.results[0].value}</div>
                <div className="text-slate-400 text-sm">{selectedStory.results[0].metric}</div>
              </div>
            </div>
          </div>
        </div>
        
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
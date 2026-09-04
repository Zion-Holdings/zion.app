'use client';

import { useState } from 'react';

const REVIEWS = [
  {
    id: 'review-1',
    name: 'Sarah Chen',
    title: 'CTO, TechStart Inc.',
    company: 'TechStart Inc.',
    rating: 5,
    service: 'AI Anti-Money Laundering Intelligence',
    quote: 'Implemented in 3 days instead of 3 weeks. The AI caught $2.3M in fraudulent transactions that our old system missed.',
    date: '2026-07-15',
    verified: true,
  },
  {
    id: 'review-2',
    name: 'Michael Rodriguez',
    title: 'Head of Operations',
    company: 'Global Manufacturing Co.',
    rating: 5,
    service: 'AI Computer Vision Quality Inspection',
    quote: 'Defect detection accuracy went from 85% to 99.5%. Our quality team went from manual inspection to automated verification.',
    date: '2026-07-12',
    verified: true,
  },
  {
    id: 'review-3',
    name: 'Jennifer Park',
    title: 'Director of Finance',
    company: 'Summit Financial Group',
    rating: 4,
    service: 'AI Procurement Intelligence',
    quote: 'Negotiated 18% better vendor rates and reduced procurement cycle time by 40%. The AI recommendations were spot-on.',
    date: '2026-07-10',
    verified: true,
  },
  {
    id: 'review-4',
    name: 'David Thompson',
    title: 'VP of Infrastructure',
    company: 'CloudFirst Solutions',
    rating: 5,
    service: 'Cloud Cost Optimizer',
    quote: 'Identified $180K in monthly waste we didn\'t know existed. ROI was achieved in under 2 weeks.',
    date: '2026-07-08',
    verified: true,
  },
  {
    id: 'review-5',
    name: 'Lisa Anderson',
    title: 'Head of Digital',
    company: 'FashionForward Retail',
    rating: 4,
    service: 'AI Personalized Product Recommendations',
    quote: 'Conversion rate increased 22% and average order value jumped 35%. Our customers love the personalized experience.',
    date: '2026-07-05',
    verified: true,
  },
  {
    id: 'review-6',
    name: 'Robert Kim',
    title: 'Security Director',
    company: 'HealthNet Systems',
    rating: 5,
    service: 'Zero Trust Identity Platform',
    quote: 'Simplified our security model while improving protection. No more VPN headaches for our remote workforce.',
    date: '2026-07-03',
    verified: true,
  },
  {
    id: 'review-7',
    name: 'Amanda Foster',
    title: 'Supply Chain Manager',
    company: 'Global Logistics Corp',
    rating: 5,
    service: 'Supply Chain Visibility',
    quote: 'End-to-end visibility reduced delays by 30% and improved customer satisfaction scores significantly.',
    date: '2026-07-01',
    verified: true,
  },
  {
    id: 'review-8',
    name: 'Carlos Mendez',
    title: 'CEO',
    company: 'MediCore Healthcare',
    rating: 5,
    service: 'AI Telemedicine Platform',
    quote: 'Patient capacity increased 40% with better triage. Our doctors are saving 15 hours per week on routine cases.',
    date: '2026-06-28',
    verified: true,
  },
];

const SERVICE_CATEGORIES = [
  { name: 'AI Services', icon: '🧠', count: 450 },
  { name: 'Cloud Services', icon: '☁️', count: 320 },
  { name: 'Security', icon: '🛡️', count: 280 },
  { name: 'Analytics', icon: '📊', count: 180 },
];

export default function ReviewsSection() {
  const [activeService, setActiveService] = useState(REVIEWS[0].service);

  const filteredReviews = activeService === 'All' 
    ? REVIEWS 
    : REVIEWS.filter(r => r.service === activeService);

  const avgRating = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

  return (
    <section id="reviews" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          💬 What Our Clients Say
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Real feedback from companies using our AI services. See what our clients achieve with our solutions.
        </p>
        
        {/* Rating Summary */}
        <div className="bg-slate-900/30 rounded-xl border border-slate-800 p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">
                {avgRating.toFixed(1)}★
              </div>
              <div className="text-slate-400">Average Rating</div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="text-center">
                  <div className="text-xs text-slate-500 mb-1">{6-rating}</div>
                  <div className="text-yellow-400 text-sm">
                    {'★'.repeat(rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveService('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeService === 'All'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveService(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeService === cat.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.icon} {cat.name} ({cat.count})
            </button>
          ))}
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-slate-900/30 rounded-xl border border-slate-800 p-5 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-yellow-400">
                  {'★'.repeat(review.rating)}
                </div>
                {review.verified && (
                  <span className="text-xs text-emerald-400 font-semibold">
                    ✓ Verified
                  </span>
                )}
              </div>
              
              <p className="text-slate-200 text-sm mb-4 line-clamp-3">
                "{review.quote}"
              </p>
              
              <div className="border-t border-slate-800 pt-3">
                <div className="text-white font-semibold">{review.name}</div>
                <div className="text-xs text-slate-400">{review.title}</div>
                <div className="text-xs text-slate-500">{review.company}</div>
                <div className="text-xs text-slate-600 mt-2">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            📅 Share Your Results
          </a>
        </div>
      </div>
    </section>
  );
}
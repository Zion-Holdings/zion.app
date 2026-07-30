'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';
import { useRouter } from 'next/navigation';

type Recommendation = {
  service: Service;
  score: number;
  reason: string;
};

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  healthcare: ['healthcare', 'medical', 'hospital', 'patient', 'clinical', 'diagnosis', 'telemedicine', 'drug', 'pharmaceutical'],
  finance: ['finance', 'fintech', 'bank', 'loan', 'credit', 'fraud', 'payment', 'trading', 'insurance'],
  retail: ['retail', 'ecommerce', 'ecommerce', 'store', 'shop', 'merchant', 'inventory', 'pos'],
  manufacturing: ['manufacturing', 'factory', 'production', 'quality', 'inspection', 'supply chain', 'iot'],
  logistics: ['logistics', 'shipping', 'delivery', 'fleet', 'route', 'warehouse', 'supply'],
  legal: ['legal', 'contract', 'law', 'compliance', 'review', 'litigation', 'regulatory'],
  energy: ['energy', 'utility', 'grid', 'renewable', 'solar', 'wind', 'power'],
  education: ['education', 'school', 'university', 'student', 'learning', 'training', 'course'],
  technology: ['technology', 'saas', 'software', 'it', 'devops', 'api', 'infrastructure'],
  government: ['government', 'public sector', 'procurement', 'citizen', 'service'],
};

const BUSINESS_SIZE_KEYWORDS: Record<string, string[]> = {
  startup: ['startup', 'seed', 'series a', 'growth', 'scale', 'early stage', 'lean'],
  smb: ['small business', 'smb', 'small business', 'medium business', 'mid-market'],
  enterprise: ['enterprise', 'large', 'fortune', 'corporate', 'multinational', 'scale-up'],
};

export default function AIServiceRouterPage() {
  const router = useRouter();
  const [businessSize, setBusinessSize] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');
  const [budget, setBudget] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  const industries = Object.entries(INDUSTRY_KEYWORDS).map(([key, keywords]) => ({
    key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
    keywords,
  }));

  const businessSizes = [
    { value: 'startup', label: 'Startup / Early Stage' },
    { value: 'smb', label: 'Small/Medium Business' },
    { value: 'enterprise', label: 'Enterprise / Large Corp' },
  ];

  const commonChallenges = [
    'Reduce operational costs',
    'Improve customer experience',
    'Automate manual processes',
    'Scale infrastructure',
    'Enhance security/compliance',
    'Gain data insights',
    'Speed up development',
    'Optimize cloud spend',
    'Improve employee productivity',
    'Launch new products faster',
  ];

  // Calculate recommendations based on inputs
  const scoredServices = useMemo(() => {
    if (!businessSize && !industry && !challenge) return [];

    return allServices.map((service: Service) => {
      let score = 0;
      const reasons: string[] = [];

      // Industry matching
      if (industry) {
        const industryKeywords = INDUSTRY_KEYWORDS[industry] || [];
        const matches = industryKeywords.filter(k => 
          (service.description || '').toLowerCase().includes(k) ||
          (service.title || '').toLowerCase().includes(k)
        ).length;
        if (matches > 0) {
          score += matches * 3;
          reasons.push(`Matches ${industry} industry (${matches} keyword matches)`);
        }
      }

      // Challenge matching
      if (challenge) {
        const challengeWords = challenge.toLowerCase().split(/\s+/);
        const matches = challengeWords.filter(w => 
          w.length > 2 && (
            (service.description || '').toLowerCase().includes(w) ||
            (service.title || '').toLowerCase().includes(w) ||
            (service.features || []).some(f => f.toLowerCase().includes(w))
          )
        ).length;
        if (matches > 0) {
          score += matches * 2;
          reasons.push(`Addresses "${challenge}" (${matches} matches)`);
        }
      }

      // Business size relevance (simplified heuristic)
      if (businessSize === 'startup') score += service.category === 'ai' ? 1 : 0.5;
      if (businessSize === 'enterprise') score += 1;

      // Popular services get a boost
      if (service.popular) score += 0.5;

      return {
        service,
        score,
        reason: reasons.length > 0 ? reasons[0] : 'Highly rated service',
      };
    }).filter(r => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 10);
  }, [businessSize, industry, challenge, allServices]);

  const handleSubmit = () => {
    if (businessSize || industry || challenge) {
      setRecommendations(scoredServices);
      setShowResults(true);
    }
  };

  const clearFilters = () => {
    setBusinessSize('');
    setIndustry('');
    setChallenge('');
    setBudget('');
    setRecommendations([]);
    setShowResults(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-purple-300 font-medium">AI-Powered</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              AI Service Router
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Answer a few questions — our AI recommends the perfect services for your business needs.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6 mb-8">
          <div className="space-y-6">
            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                🏢 Industry
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.key}
                    onClick={() => setIndustry(ind.key)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      industry === ind.key
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-purple-500/50'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Size */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                📊 Business Size
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {businessSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setBusinessSize(size.value)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      businessSize === size.value
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-emerald-500/50'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                💡 Primary Challenge
              </label>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {commonChallenges.map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setChallenge(ch)}
                    className={`rounded-lg px-3 py-2 text-xs text-left transition-all ${
                      challenge === ch
                        ? 'bg-purple-600/20 border border-purple-500 text-purple-300'
                        : 'bg-slate-800/30 text-slate-300 border border-slate-700/50 hover:border-purple-500/30'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="Or type your own challenge..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                💰 Budget Range (optional)
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="" className="bg-slate-800">Select budget range</option>
                <option value="under-1000" className="bg-slate-800">Under $1,000/month</option>
                <option value="1000-5000" className="bg-slate-800">$1,000 - $5,000/month</option>
                <option value="5000-20000" className="bg-slate-800">$5,000 - $20,000/month</option>
                <option value="20000+" className="bg-slate-800">$20,000+/month</option>
              </select>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 justify-center pt-4">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
              >
                Get AI Recommendations
              </button>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-all"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {showResults && recommendations.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🎯 Top {recommendations.length} Recommended Services
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map(({ service, score, reason }, idx) => (
                <div 
                  key={service.id} 
                  className="glass-card flex flex-col hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      <span className="text-xs text-slate-500 block mt-1">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2 mb-3">{reason}</p>
                  <div className="mt-auto pt-3 border-t border-slate-700/50 flex justify-between items-center">
                    <span className="text-purple-300 text-xs font-semibold">
                      From ${service.pricing?.basic || 'Contact'}/mo
                    </span>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowResults(false)}
                className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all"
              >
                Show fewer recommendations
              </button>
            </div>
          </div>
        )}

        {/* No results */}
        {showResults && recommendations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No exact matches found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your filters or browse our full service catalog below.
            </p>
            <Link 
              href="/services/"
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Browse All Services →
            </Link>
          </div>
        )}

        {/* CTA */}
        {!showResults && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs text-emerald-400 font-medium">Free Tool</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Get instant recommendations for AI services that match your business needs
            </p>
            <Link 
              href="/services/"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Browse All 850+ Services →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
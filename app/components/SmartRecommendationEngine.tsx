'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  benefits: string[];
  pricing: Record<string, string>;
  href: string;
  score: number;
  matchReasons: string[];
}

interface SmartRecommendationEngineProps {
  className?: string;
}

const INDUSTRY_KEYWORDS: Record<string, { keywords: string[]; category: string }> = {
  'financial-services': {
    keywords: ['fraud', 'transaction', 'compliance', 'risk', 'regulatory', 'bank', 'payment', 'ledger', 'audit', 'anti-money', 'aml', 'kyc', 'trade', 'settlement'],
    category: 'ai'
  },
  'healthcare': {
    keywords: ['patient', 'medical', 'diagnosis', 'clinical', 'ehr', 'hipaa', 'pharmacy', 'treatment', 'outcome', 'clinical', 'telemedicine', 'medical imaging'],
    category: 'ai'
  },
  'retail': {
    keywords: ['customer', 'inventory', 'recommendation', 'pos', 'ecommerce', 'supply', 'demand', 'personalization', 'loyalty', 'catalog', 'pricing'],
    category: 'ai'
  },
  'manufacturing': {
    keywords: ['quality', 'production', 'maintenance', 'sensor', 'iot', 'automation', 'supply', 'inventory', 'line', 'factory', 'predictive'],
    category: 'ai'
  },
  'logistics': {
    keywords: ['route', 'delivery', 'fleet', 'gps', 'tracking', 'warehouse', 'shipment', 'fulfillment', 'last-mile', 'vehicle', 'cargo'],
    category: 'ai'
  },
  'technology': {
    keywords: ['api', 'integration', 'devops', 'cloud', 'infrastructure', 'microservice', 'container', 'deployment', 'monitoring', 'scalability'],
    category: 'it'
  },
  'energy': {
    keywords: ['grid', 'demand', 'predictive', 'renewable', 'sensor', 'meter', 'utility', 'optimization', 'forecast', 'smart'],
    category: 'ai'
  }
};

const BUSINESS_SIZE_MULTIPLIERS: Record<string, number> = {
  'small': 1,
  'medium': 1.5,
  'enterprise': 2
};

export default function SmartRecommendationEngine({ className = '' }: SmartRecommendationEngineProps) {
  const [industry, setIndustry] = useState<string>('');
  const [businessSize, setBusinessSize] = useState<string>('medium');
  const [problem, setProblem] = useState<string>('');
  const [budget, setBudget] = useState<string>('');

  const recommendations = useMemo(() => {
    if (!industry && !problem) return [];

    const industryConfig = INDUSTRY_KEYWORDS[industry];
    const allKeywords = [...(industryConfig?.keywords || []), ...problem.toLowerCase().split(/\s+/)];
    
    const scoredServices: Recommendation[] = allServices
      .map(service => {
        const serviceText = `${service.title} ${service.description} ${(service.features || []).join(' ')} ${(service.benefits || []).join(' ')}`.toLowerCase();
        
        // Calculate keyword match score
        let keywordScore = 0;
        const matchedKeywords: string[] = [];
        allKeywords.forEach(keyword => {
          if (serviceText.includes(keyword)) {
            keywordScore += 2;
            matchedKeywords.push(keyword);
          }
        });

        // Bonus for category match
        const categoryMatch = industryConfig?.category === service.category ? 3 : 0;
        
        // Size-based pricing filter
        const pricingValues = Object.values(service.pricing || {} as Record<string, string>);
        const minPrice = Math.min(...pricingValues.map((p: any) => parseFloat(p.replace('$', '').replace('/mo', '')) || 999999));
        const sizeMultiplier = BUSINESS_SIZE_MULTIPLIERS[businessSize] || 1;
        const priceCompatible = minPrice * sizeMultiplier <= (parseInt(budget) || Infinity);

        const score = keywordScore + categoryMatch + (priceCompatible ? 2 : 0);
        
        if (score < 3) return null;

        return {
          id: service.id,
          title: service.title,
          description: service.description,
          category: service.category,
          icon: service.category?.[0]?.toUpperCase() || '■',
          benefits: service.benefits?.slice(0, 3) || [],
          pricing: service.pricing || {},
          href: `/services/${service.id}`,
          score,
          matchReasons: matchedKeywords.slice(0, 3)
        };
      })
      .filter((s): s is Recommendation => s !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    return scoredServices;
  }, [industry, businessSize, problem, budget]);

  const reset = () => {
    setIndustry('');
    setProblem('');
    setBusinessSize('medium');
    setBudget('');
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          {/* Smart Discovery Form */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Find Your Perfect AI Solution</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" className="bg-slate-800">Select Your Industry</option>
                <option value="financial-services" className="bg-slate-800">Financial Services</option>
                <option value="healthcare" className="bg-slate-800">Healthcare</option>
                <option value="retail" className="bg-slate-800">Retail & E-commerce</option>
                <option value="manufacturing" className="bg-slate-800">Manufacturing</option>
                <option value="logistics" className="bg-slate-800">Logistics & Supply Chain</option>
                <option value="technology" className="bg-slate-800">Technology</option>
                <option value="energy" className="bg-slate-800">Energy & Utilities</option>
              </select>

              <select
                value={businessSize}
                onChange={(e) => setBusinessSize(e.target.value)}
                className="glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="small" className="bg-slate-800">Small Business</option>
                <option value="medium" className="bg-slate-800">Medium Enterprise</option>
                <option value="enterprise" className="bg-slate-800">Large Enterprise</option>
              </select>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="What problem are you trying to solve? (e.g., reduce fraud, improve patient outcomes, optimize inventory)"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="w-full glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="glass-card px-4 py-3 rounded-xl text-white bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" className="bg-slate-800">Any Budget</option>
                <option value="500" className="bg-slate-800">Under $500/mo</option>
                <option value="1000" className="bg-slate-800">Under $1,000/mo</option>
                <option value="5000" className="bg-slate-800">Under $5,000/mo</option>
                <option value="10000" className="bg-slate-800">Under $10,000/mo</option>
              </select>

              <button
                onClick={() => {}}
                className="glass-card px-4 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
              >
                Find Solutions
              </button>
            </div>

            {recommendations.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-purple-300 text-sm mb-3">
                  ✨ Found {recommendations.length} personalized recommendations
                </p>
                <button 
                  onClick={reset}
                  className="text-slate-400 text-xs hover:text-purple-400"
                >
                  Start over
                </button>
              </div>
            )}
          </div>

          {/* Recommendations Grid */}
          {recommendations.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {recommendations.map((rec) => (
                <Link
                  key={rec.id}
                  href={rec.href}
                  className="glass-card flex flex-col p-5 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{rec.icon}</span>
                    <span className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full">
                      {rec.category}
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-2 leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {rec.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs mb-3 line-clamp-3">
                    {rec.description}
                  </p>

                  <div className="mb-3">
                    <div className="text-xs text-slate-500 mb-2">Key Benefits:</div>
                    <ul className="space-y-1">
                      {rec.benefits.map((b, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <span className="text-purple-400 mt-0.5">▸</span>
                          <span className="line-clamp-2">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-700/50">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-purple-300 font-medium">
                        From {Object.values(rec.pricing)[0] || '$Contact'}
                      </span>
                      <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {!recommendations.length && industry && (
            <div className="text-center py-12">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">No exact matches found</h3>
              <p className="text-slate-400 mb-4">
                Try adjusting your search criteria or browse our full catalog below.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Browse All Services →
              </Link>
            </div>
          )}

          {/* Empty State */}
          {!industry && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Find Your Perfect AI Solution</h3>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                Tell us about your business and we'll recommend the most relevant AI services from our catalog of {allServices.length}+ solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Industry-specific service collections
export const INDUSTRY_SERVICES: Record<string, {
  title: string;
  description: string;
  services: string[];
  roiMultiplier: number;
}> = {
  'financial-services': {
    title: 'Financial Services AI Solutions',
    description: 'AI-powered fraud detection, compliance automation, and risk management for modern finance',
    services: [
      'ai-fraud-detection',
      'ai-anti-money-laundering',
      'ai-kyc-identity-verification',
      'ai-transaction-monitoring',
      'ai-credit-risk-scoring',
      'ai-regulatory-compliance',
      'ai-trade-finance-orchestrator',
      'ai-payment-reconciliation'
    ],
    roiMultiplier: 3.5
  },
  'healthcare': {
    title: 'Healthcare AI Solutions',
    description: 'Clinical intelligence, patient care automation, and medical compliance solutions',
    services: [
      'ai-medical-diagnosis-assistant',
      'ai-clinical-trial-optimizer',
      'ai-hipaa-compliance',
      'ai-ehr-data-extractor',
      'ai-prescription-intelligence',
      'ai-patient-outcome-predictor',
      'ai-medical-imaging-analysis',
      'ai-telemedicine-platform'
    ],
    roiMultiplier: 4.2
  },
  'retail': {
    title: 'Retail & E-commerce AI Solutions',
    description: 'Customer experience optimization, inventory management, and personalized commerce',
    services: [
      'ai-personalized-product-recommendations',
      'ai-demand-forecasting',
      'ai-pricing-optimization',
      'ai-customer-churn-prediction',
      'ai-visual-search',
      'ai-inventory-management',
      'ai-loyalty-program-optimizer',
      'ai-ecommerce-analytics'
    ],
    roiMultiplier: 3.8
  },
  'manufacturing': {
    title: 'Manufacturing AI Solutions',
    description: 'Predictive maintenance, quality control, and production optimization',
    services: [
      'ai-computer-vision-quality-inspection',
      'ai-predictive-maintenance',
      'ai-production-line-optimization',
      'ai-supply-chain-visibility',
      'ai-quality-assurance',
      'ai-demand-planning',
      'ai-energy-optimization',
      'ai-safety-compliance-monitor'
    ],
    roiMultiplier: 4.5
  },
  'logistics': {
    title: 'Logistics & Supply Chain AI Solutions',
    description: 'Route optimization, fleet management, and warehouse automation',
    services: [
      'ai-route-optimizer',
      'ai-fleet-management-gps',
      'ai-supply-chain-radar',
      'ai-warehouse-robotics',
      'ai-demand-planning',
      'ai-inventory-visibility',
      'ai-freight-rate-optimizer',
      'ai-last-mile-optimization'
    ],
    roiMultiplier: 3.2
  },
  'technology': {
    title: 'Technology AI Solutions',
    description: 'DevOps, cloud infrastructure, and API integration solutions',
    services: [
      'ai-devops-automation',
      'ai-cloud-cost-optimization',
      'ai-observability',
      'ai-integration-apis',
      'ai-security-operations-assistant',
      'ai-api-management',
      'ai-low-code-automation',
      'ai-digital-twin-platform'
    ],
    roiMultiplier: 3.0
  },
  'energy': {
    title: 'Energy & Utilities AI Solutions',
    description: 'Smart grid, demand forecasting, and renewable energy optimization',
    services: [
      'ai-grid-demand-forecaster',
      'ai-renewable-energy-optimizer',
      'ai-smart-meter-analytics',
      'ai-utility-demand-response',
      'ai-energy-consumption-optimizer',
      'ai-predictive-asset-maintenance',
      'ai-carbon-intensity-optimizer',
      'ai-iot-sensor-fleet'
    ],
    roiMultiplier: 3.6
  }
};
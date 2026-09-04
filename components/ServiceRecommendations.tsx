'use client';

import { useState } from 'react';

const RECOMMENDATION_QUESTIONS = [
  {
    id: 'pain-point',
    question: "What's your biggest challenge?",
    options: [
      { label: 'High costs', value: 'cost', icon: '💰' },
      { label: 'Slow processes', value: 'speed', icon: '⚡' },
      { label: 'Poor visibility', value: 'visibility', icon: '👁️' },
      { label: 'Security risks', value: 'security', icon: '🛡️' },
    ],
  },
  {
    id: 'industry',
    question: "What industry are you in?",
    options: [
      { label: 'Financial Services', value: 'financial-services', icon: '🏦' },
      { label: 'Healthcare', value: 'healthcare', icon: '🏥' },
      { label: 'Retail/E-commerce', value: 'retail', icon: '🛍️' },
      { label: 'Manufacturing', value: 'manufacturing', icon: '🏭' },
      { label: 'Technology', value: 'technology', icon: '💻' },
    ],
  },
  {
    id: 'team-size',
    question: "What's your team size?",
    options: [
      { label: 'Small (1-10)', value: 'small', icon: '👥' },
      { label: 'Medium (11-100)', value: 'medium', icon: '👥👥' },
      { label: 'Large (100+)', value: 'large', icon: '👥👥👥' },
    ],
  },
];

const RECOMMENDED_SERVICES = {
  cost: [
    { id: 'cloud-cost-optimizer', name: 'Cloud Cost Optimizer', price: '$899', icon: '💰' },
    { id: 'ai-procurement-intelligence', name: 'AI Procurement Intelligence', price: '$1,299', icon: '🛒' },
    { id: 'ai-route-optimizer-pro', name: 'AI Route Optimizer', price: '$1,299', icon: '🚚' },
  ],
  speed: [
    { id: 'ai-anti-money-laundering-intelligence', name: 'AI Fraud Detection', price: '$499', icon: '🛡️' },
    { id: 'ai-kyc-identity-verification', name: 'KYC Identity Verification', price: '$299', icon: '🆔' },
    { id: 'ai-personalized-product-recommendations', name: 'Product Recommendations', price: '$299', icon: '📦' },
  ],
  visibility: [
    { id: 'supply-chain-visibility', name: 'Supply Chain Visibility', price: '$1,999', icon: '🚛' },
    { id: 'real-time-analytics', name: 'Real-Time Analytics', price: '$799', icon: '📈' },
    { id: 'market-intelligence', name: 'Market Intelligence', price: '$599', icon: '📊' },
  ],
  security: [
    { id: 'zero-trust-identity', name: 'Zero Trust Identity', price: '$1,499', icon: '🔐' },
    { id: 'security-sbom', name: 'Security SBOM', price: '$899', icon: '🔒' },
    { id: 'cybersecurity-consulting', name: 'Cybersecurity Consulting', price: '$2,499', icon: '🛡️' },
  ],
  financial_services: [
    { id: 'ai-anti-money-laundering-intelligence', name: 'Anti-Money Laundering', price: '$499', icon: '💰' },
    { id: 'ai-kyc-identity-verification', name: 'KYC Identity Verification', price: '$299', icon: '🆔' },
    { id: 'ai-credit-risk-scoring', name: 'Credit Risk Scoring', price: '$399', icon: '📊' },
  ],
  healthcare: [
    { id: 'ai-telemedicine-platform', name: 'Telemedicine Platform', price: '$799', icon: '🏥' },
    { id: 'patient-triage-ai', name: 'Patient Triage AI', price: '$599', icon: '🩺' },
    { id: 'clinical-decision-support', name: 'Clinical Decision Support', price: '$999', icon: '📋' },
  ],
  retail: [
    { id: 'ai-personalized-product-recommendations', name: 'Product Recommendations', price: '$299', icon: '🛍️' },
    { id: 'inventory-optimization', name: 'Inventory Optimization', price: '$699', icon: '📦' },
    { id: 'customer-insights', name: 'Customer Insights', price: '$799', icon: '👥' },
  ],
  manufacturing: [
    { id: 'ai-computer-vision-quality-inspection', name: 'Quality Inspection', price: '$799', icon: '🔍' },
    { id: 'predictive-maintenance', name: 'Predictive Maintenance', price: '$1,299', icon: '🔧' },
    { id: 'supply-chain-optimization', name: 'Supply Chain Optimization', price: '$1,999', icon: '📦' },
  ],
};

export default function ServiceRecommendations() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = RECOMMENDATION_QUESTIONS[currentStep];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    
    if (currentStep < RECOMMENDATION_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendedServices = () => {
    // Get primary recommendation based on pain point
    const primaryServices = RECOMMENDED_SERVICES[answers['pain-point'] as keyof typeof RECOMMENDED_SERVICES] || [];
    
    // Get industry-specific services
    const industryServices = RECOMMENDED_SERVICES[answers['industry'] as keyof typeof RECOMMENDED_SERVICES] || [];
    
    // Combine and deduplicate, prioritize by relevance
    const allServices = [...new Set([...primaryServices, ...industryServices])].slice(0, 3);
    
    return allServices.length > 0 ? allServices : [
      { id: 'ai-anti-money-laundering-intelligence', name: 'AI Fraud Detection', price: '$499', icon: '🛡️' },
      { id: 'ai-computer-vision-quality-inspection', name: 'Quality Inspection', price: '$799', icon: '🔍' },
      { id: 'cloud-cost-optimizer', name: 'Cloud Cost Optimizer', price: '$899', icon: '💰' },
    ];
  };

  const recommendedServices = getRecommendedServices();

  return (
    <section id="service-recommendations" className="py-16 border-t border-slate-800">
      <div className="container-page">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          🎯 Get AI Recommendations for Your Needs
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Answer 3 quick questions and we'll recommend the perfect AI services for your business.
        </p>
        
        {!showResults ? (
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-white font-semibold text-center mb-2">
                Question {currentStep + 1} of {RECOMMENDATION_QUESTIONS.length}
              </h3>
              <p className="text-slate-400 text-center text-sm">{currentQuestion.question}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-all flex items-center gap-3"
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-left">
                    <div className="text-white font-medium">{option.label}</div>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-white font-semibold text-center mb-8">
              Based on your answers, we recommend:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {recommendedServices.map((service) => (
                <div key={service.id} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-xl border border-slate-700 p-5 text-center">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{service.name}</h4>
                  <div className="text-purple-400 font-bold mb-3">{service.price}</div>
                  <a
                    href={`/services/${service.id}`}
                    className="text-sm text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    View Details →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="px-6 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-purple-400 transition-all text-sm"
              >
                Try Another Question
              </button>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Don't see what you need? Let's talk:
          </p>
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
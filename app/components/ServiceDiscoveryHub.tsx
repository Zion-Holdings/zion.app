<<<<<<< HEAD
'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

// Business needs questions for the discovery quiz
const DISCOVERY_QUESTIONS = [
  {
    id: 'business-size',
    question: 'What is your business size?',
    options: [
      { label: 'Startup (1-10 employees)', value: 'startup', weight: { ai: 1, data: 1, micro: 1 } },
      { label: 'SMB (11-100 employees)', value: 'smb', weight: { ai: 2, cloud: 2, security: 1 } },
      { label: 'Enterprise (100+ employees)', value: 'enterprise', weight: { it: 3, security: 3, data: 2, automation: 2 } },
    ]
  },
  {
    id: 'primary-goal',
    question: 'What is your primary business goal?',
    options: [
      { label: 'Reduce costs', value: 'cost', weight: { cloud: 3, automation: 2, ai: 1 } },
      { label: 'Increase revenue', value: 'revenue', weight: { ai: 3, micro: 2, data: 2 } },
      { label: 'Improve efficiency', value: 'efficiency', weight: { automation: 3, it: 2, ai: 1 } },
      { label: 'Enhance security', value: 'security', weight: { security: 3, it: 2, compliance: 1 } },
      { label: 'Scale operations', value: 'scale', weight: { cloud: 3, devops: 2, automation: 1 } },
    ]
  },
  {
    id: 'tech-stack',
    question: 'What is your current tech stack maturity?',
    options: [
      { label: 'Basic (on-prem or simple cloud)', value: 'basic', weight: { it: 2, cloud: 1 } },
      { label: 'Intermediate (hybrid cloud)', value: 'intermediate', weight: { cloud: 3, devops: 2, security: 1 } },
      { label: 'Advanced (multi-cloud, microservices)', value: 'advanced', weight: { cloud: 3, devops: 3, automation: 2, security: 2 } },
    ]
  },
  {
    id: 'pain-point',
    question: 'What keeps you up at night?',
    options: [
      { label: 'Security incidents', value: 'security', weight: { security: 3, monitoring: 2 } },
      { label: 'High cloud costs', value: 'costs', weight: { cloud: 3, optimization: 2 } },
      { label: 'Slow development cycles', value: 'dev-speed', weight: { devops: 3, automation: 2 } },
      { label: 'Poor data insights', value: 'data', weight: { data: 3, ai: 2 } },
      { label: 'Manual processes', value: 'manual', weight: { automation: 3, micro: 2 } },
    ]
  },
  {
    id: 'timeline',
    question: 'When do you need results?',
    options: [
      { label: 'Next 30 days (urgent)', value: 'urgent', weight: { micro: 2, automation: 1 } },
      { label: 'Next 3 months (short-term)', value: 'short', weight: { ai: 2, cloud: 2, security: 1 } },
      { label: '6+ months (long-term strategy)', value: 'long', weight: { architecture: 2, devops: 2, data: 2 } },
    ]
  },
];

type Answer = { questionId: string; optionValue: string };

interface ServiceRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
  score: number;
}

export default function ServiceDiscoveryHub() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<ServiceRecommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = DISCOVERY_QUESTIONS.length;
  const currentQuestion = DISCOVERY_QUESTIONS[step];

  const handleAnswer = (option: { value: string; weight: Record<string, number> }) => {
    setAnswers([...answers, { questionId: currentQuestion.id, optionValue: option.value }]);
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    } else {
      calculateResults([...answers, { questionId: currentQuestion.id, optionValue: option.value }]);
    }
  };

  const calculateResults = (finalAnswers: Answer[]) => {
    const scores: Record<string, number> = {};
    
    // Aggregate scores from weights
    finalAnswers.forEach(answer => {
      const question = DISCOVERY_QUESTIONS.find(q => q.id === answer.questionId);
      const option = question?.options.find(o => o.value === answer.optionValue);
      if (option && option.weight) {
        Object.entries(option.weight).forEach(([cat, weight]) => {
          scores[cat] = (scores[cat] || 0) + weight;
        });
      }
    });

    // Get top 6 recommended services based on scores
    const recommended = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([cat, score]) => ({ category: cat, score }));

    // Simulate service recommendations (would normally fetch from API)
    const mockRecommendations: ServiceRecommendation[] = [
      {
        id: 'ai-smart-inventory',
        title: 'AI Inventory Management',
        description: 'Optimize stock levels with AI-driven demand forecasting and automated reorder points.',
        category: 'micro',
        icon: '📦',
        href: '/services/ai-inventory-management',
        score: recommended.find(r => r.category === 'micro')?.score || 0
      },
      {
        id: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization Platform',
        description: 'Reduce cloud spend by 25-40% with FinOps-led cost management and optimization.',
        category: 'cloud',
        icon: '☁️',
        href: '/services/cloud-cost-optimization-platform',
        score: recommended.find(r => r.category === 'cloud')?.score || 0
      },
      {
        id: 'ai-fraud-detection',
        title: 'FinTech Fraud Detection Engine',
        description: 'Real-time transaction monitoring with graph-based anomaly detection.',
        category: 'ai',
        icon: '🏦',
        href: '/services/fintech-fraud-detection-engine',
        score: recommended.find(r => r.category === 'ai')?.score || 0
      },
      {
        id: 'automation-workflow',
        title: 'AI Agent Orchestrator',
        description: 'Manage, monitor, and scale fleets of autonomous AI agents.',
        category: 'automation',
        icon: '🤖',
        href: '/services/ai-multi-agent-orchestration-platform',
        score: recommended.find(r => r.category === 'automation')?.score || 0
      },
      {
        id: 'security-edge',
        title: 'Zero Trust Network Architecture',
        description: 'Identity-based access controls and microsegmentation for enterprise security.',
        category: 'security',
        icon: '🔐',
        href: '/services/zero-trust-network-architecture',
        score: recommended.find(r => r.category === 'security')?.score || 0
      },
      {
        id: 'ai-insights',
        title: 'AI Analytics & BI Platform',
        description: 'Unified analytics platform with AI-powered insights and visualization.',
        category: 'data',
        icon: '📊',
        href: '/services/ai-analytics-bi',
        score: recommended.find(r => r.category === 'data')?.score || 0
      },
    ];

    setResults(mockRecommendations);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResults([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Personalized Service Match
            </span>
          </h2>
          <p className="text-slate-400">Based on your needs, here are the best services to explore:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {results.map((service) => (
            <div key={service.id} className="glass-card p-5 hover:scale-[1.01] transition-transform">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{service.description}</p>
                  <a 
                    href={service.href}
                    className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:bg-slate-700/80 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex gap-2">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i <= step ? 'bg-purple-500' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-slate-400">
          Question {step + 1} of {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <div className="glass-card p-8 mb-6">
        <h3 className="text-xl font-semibold text-white mb-6">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option)}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-500/50 transition-all flex justify-between items-center"
            >
              <span className="text-slate-200">{option.label}</span>
              <Check className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        {step > 0 && (
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            className="px-4 py-2 rounded-full bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 transition"
          >
            Back
          </button>
        )}
        <button
          onClick={() => calculateResults(answers)}
          disabled={answers.length === 0}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-pink-500 transition"
        >
          Skip to Results
        </button>
      </div>
    </div>
=======
// app/components/ServiceDiscoveryHub.tsx — Enhanced service discovery with personalization
'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';

// Industry-specific service recommendations
const INDUSTRY_RECOMMENDATIONS: Record<string, {
  title: string;
  description: string;
  services: { id: string; weight: number }[];
}> = {
  healthcare: {
    title: 'Healthcare AI Solutions',
    description: 'HIPAA-compliant diagnostic tools, patient management, and clinical automation.',
    services: [
      { id: 'ai-medical-image-analyzer', weight: 10 },
      { id: 'ai-patient-no-show-predictor', weight: 8 },
      { id: 'hipaa-compliance-auditor', weight: 7 },
      { id: 'ai-clinical-notes-transcription', weight: 6 },
    ]
  },
  finance: {
    title: 'FinTech & Banking AI',
    description: 'Fraud detection, risk assessment, algorithmic trading, and compliance automation.',
    services: [
      { id: 'ai-fraud-detection', weight: 10 },
      { id: 'ai-loan-underwriting', weight: 8 },
      { id: 'ai-compliance-regulatory', weight: 7 },
      { id: 'ai-trading-signal-generator', weight: 6 },
    ]
  },
  retail: {
    title: 'Retail & E-Commerce AI',
    description: 'Personalization engines, inventory optimization, and customer analytics.',
    services: [
      { id: 'ai-retail-personalization-engine', weight: 10 },
      { id: 'ai-inventory-demand-forecast', weight: 8 },
      { id: 'ai-price-optimization', weight: 7 },
      { id: 'ai-customer-churn-prediction', weight: 6 },
    ]
  },
  manufacturing: {
    title: 'Manufacturing Automation',
    description: 'Predictive maintenance, quality inspection, and supply chain optimization.',
    services: [
      { id: 'ai-defect-detection-manufacturing', weight: 10 },
      { id: 'ai-predictive-maintenance', weight: 8 },
      { id: 'ai-production-scheduler', weight: 7 },
      { id: 'ai-quality-control-vision', weight: 6 },
    ]
  },
  logistics: {
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, demand forecasting, and warehouse automation.',
    services: [
      { id: 'ai-route-optimization', weight: 10 },
      { id: 'ai-demand-forecasting', weight: 8 },
      { id: 'ai-fleet-management', weight: 7 },
      { id: 'ai-inventory-optimization', weight: 6 },
    ]
  },
  legal: {
    title: 'Legal Operations AI',
    description: 'Contract analysis, compliance monitoring, and e-discovery automation.',
    services: [
      { id: 'ai-legal-contract-analyzer', weight: 10 },
      { id: 'ai-contract-lifecycle', weight: 8 },
      { id: 'ai-compliance-monitor', weight: 7 },
      { id: 'ai-e-discovery-assistant', weight: 6 },
    ]
  },
  technology: {
    title: 'Technology & SaaS Solutions',
    description: 'DevOps automation, API management, and platform engineering.',
    services: [
      { id: 'ai-code-review-assistant', weight: 10 },
      { id: 'ai-api-gateway-manager', weight: 8 },
      { id: 'ai-devops-automation', weight: 7 },
      { id: 'ai-deployment-orchestrator', weight: 6 },
    ]
  },
  energy: {
    title: 'Energy & Utilities AI',
    description: 'Grid optimization, demand forecasting, and renewable integration.',
    services: [
      { id: 'ai-grid-demand-forecaster', weight: 10 },
      { id: 'ai-renewable-integration', weight: 8 },
      { id: 'ai-energy-storage-optimizer', weight: 7 },
      { id: 'ai-outage-predictor', weight: 6 },
    ]
  },
  media: {
    title: 'Media & Entertainment AI',
    description: 'Content moderation, recommendation engines, and audience analytics.',
    services: [
      { id: 'ai-content-moderation', weight: 10 },
      { id: 'ai-video-analytics', weight: 8 },
      { id: 'ai-audience-insights', weight: 7 },
      { id: 'ai-personalized-content', weight: 6 },
    ]
  },
  education: {
    title: 'Education & Research AI',
    description: 'Personalized learning, student analytics, and research automation.',
    services: [
      { id: 'ai-personalized-learning', weight: 10 },
      { id: 'ai-student-performance-analytics', weight: 8 },
      { id: 'ai-research-assistant', weight: 7 },
      { id: 'ai-assessment-generator', weight: 6 },
    ]
  },
};

interface ServiceDiscoveryHubProps {
  selectedIndustry?: string;
}

export default function ServiceDiscoveryHub({ selectedIndustry }: ServiceDiscoveryHubProps) {
  const [activeTab, setActiveTab] = useState<'recommendations' | 'browse' | 'compare'>('recommendations');
  const [industry, setIndustry] = useState(selectedIndustry || 'healthcare');
  
  // Get recommended services for selected industry
  const recommendedServices = useMemo(() => {
    const rec = INDUSTRY_RECOMMENDATIONS[industry];
    if (!rec) return { title: 'Recommended Services', services: [] };
    
    const serviceMap = new Map(allServices.map(s => [s.id, s]));
    const services = rec.services
      .map(({ id, weight }) => {
        const svc = serviceMap.get(id);
        return svc ? { ...svc, _matchScore: weight } : null;
      })
      .filter((s): s is any => s !== null)
      .sort((a, b) => (b as any)._matchScore - (a as any)._matchScore);
    
    return { title: rec.title, services };
  }, [industry]);

  // Get popular services
  const popularServices = useMemo(() => {
    return (allServices as Service[])
      .filter((s: any) => s.popular === true)
      .sort((a: any, b: any) => (b.features?.length || 0) - (a.features?.length || 0))
      .slice(0, 12);
  }, []);

  // Get trending services (recently added)
  const trendingServices = useMemo(() => {
    return (allServices as Service[])
      .filter((s: any) => s.trending)
      .slice(0, 8);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
      <div className="container-page">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-4">
            <span className="text-green-400">●</span> Smart Service Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect AI Solution
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get personalized service recommendations, compare solutions, and discover AI tools tailored to your industry.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              { key: 'healthcare', label: '🏥 Healthcare', emoji: '🏥' },
              { key: 'finance', label: '💳 Finance', emoji: '💳' },
              { key: 'retail', label: '🛒 Retail', emoji: '🛒' },
              { key: 'manufacturing', label: '🏭 Manufacturing', emoji: '🏭' },
              { key: 'logistics', label: '🚚 Logistics', emoji: '🚚' },
              { key: 'legal', label: '⚖️ Legal', emoji: '⚖️' },
              { key: 'technology', label: '💻 Technology', emoji: '💻' },
              { key: 'energy', label: '⚡ Energy', emoji: '⚡' },
              { key: 'media', label: '🎬 Media', emoji: '🎬' },
              { key: 'education', label: '🎓 Education', emoji: '🎓' },
            ].map((ind) => (
              <button
                key={ind.key}
                onClick={() => setIndustry(ind.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  industry === ind.key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-purple-500/50'
                }`}
              >
                <span className="mr-1">{ind.emoji}</span>
                {ind.label.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-slate-900/60 border border-slate-700/50 p-1">
            {['recommendations', 'browse', 'compare'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab === 'recommendations' && 'Industry Recommendations'}
                {tab === 'browse' && 'Popular Services'}
                {tab === 'compare' && 'Service Comparison'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'recommendations' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{recommendedServices.title}</h3>
            <p className="text-slate-400 mb-8">{INDUSTRY_RECOMMENDATIONS[industry]?.description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedServices.services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-xs text-slate-500">{service.category}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-slate-700/50">
                    <span className="text-purple-300 text-xs font-medium">
                      From ${service.pricing?.basic || 'Contact'}/mo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'browse' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Popular Services</h3>
            <p className="text-slate-400 mb-8">Top-rated services based on client adoption and performance metrics</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-xs text-slate-500">{service.category}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-slate-700/50">
                    <span className="text-purple-300 text-xs font-medium">
                      From ${service.pricing?.basic || 'Contact'}/mo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'compare' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Service Comparison</h3>
            <p className="text-slate-400 mb-8">Compare services side-by-side to find the best fit</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { id: 'ai-fraud-detection', title: 'AI Fraud Detection' },
                { id: 'ai-customer-support-hub', title: 'AI Customer Support' },
                { id: 'ai-predictive-analytics', title: 'AI Predictive Analytics' },
              ].map((svc) => {
                const service = allServices.find(s => s.id === svc.id);
                if (!service) return null;
                return (
                  <Link
                    key={svc.id}
                    href={`/services/${svc.id}`}
                    className="glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{service.icon}</span>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-xs line-clamp-3 mb-3">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-slate-700/50">
                      <span className="text-purple-300 text-xs font-medium">
                        From ${service.pricing?.basic || 'Contact'}/mo
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services/"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
>>>>>>> 39bf07ce6891d15dc926f13878391bb6137ef7f2
  );
}
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
  );
}
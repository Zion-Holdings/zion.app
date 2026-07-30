// app/service-discovery/page.tsx — Enhanced Service Discovery Hub
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices } from '../data/servicesData';

// Industry definitions with comprehensive coverage
const INDUSTRIES = [
  { key: 'healthcare', label: 'Healthcare & Life Sciences', emoji: '🏥', color: 'from-emerald-500 to-teal-600', description: 'AI diagnostics, patient management, drug discovery, HIPAA compliance' },
  { key: 'finance', label: 'Financial Services & FinTech', emoji: '💳', color: 'from-blue-500 to-indigo-600', description: 'Fraud detection, risk assessment, algorithmic trading, compliance' },
  { key: 'retail', label: 'Retail & E-Commerce', emoji: '🛒', color: 'from-pink-500 to-rose-600', description: 'Personalization engines, inventory optimization, recommendation systems' },
  { key: 'manufacturing', label: 'Manufacturing & Industrial', emoji: '🏭', color: 'from-amber-500 to-orange-600', description: 'Predictive maintenance, quality inspection, digital twins' },
  { key: 'logistics', label: 'Logistics & Supply Chain', emoji: '🚚', color: 'from-cyan-500 to-blue-600', description: 'Route optimization, demand forecasting, warehouse automation' },
  { key: 'legal', label: 'Legal & Compliance', emoji: '⚖️', color: 'from-violet-500 to-purple-600', description: 'Contract analysis, compliance monitoring, e-discovery' },
  { key: 'technology', label: 'Technology & SaaS', emoji: '💻', color: 'from-green-500 to-emerald-600', description: 'DevOps automation, API management, microservices' },
  { key: 'energy', label: 'Energy & Utilities', emoji: '⚡', color: 'from-yellow-500 to-amber-600', description: 'Grid optimization, demand forecasting, renewable integration' },
  { key: 'media', label: 'Media & Entertainment', emoji: '🎬', color: 'from-red-500 to-pink-600', description: 'Content moderation, recommendation engines, streaming optimization' },
  { key: 'education', label: 'Education & Research', emoji: '🎓', color: 'from-indigo-500 to-blue-600', description: 'Personalized learning, student analytics, research automation' },
  { key: 'government', label: 'Government & Public Sector', emoji: '🏛️', color: 'from-slate-400 to-slate-600', description: 'Citizen services, compliance automation, civic AI' },
  { key: 'insurance', label: 'Insurance', emoji: '📋', color: 'from-teal-500 to-cyan-600', description: 'Claims automation, underwriting AI, fraud prevention' },
];

// Industry-specific service recommendations
const INDUSTRY_RECOMMENDATIONS: Record<string, {
  title: string;
  services: { id: string; weight: number }[];
}> = {
  healthcare: {
    title: 'Healthcare AI Solutions',
    services: [
      { id: 'ai-medical-image-analyzer', weight: 10 },
      { id: 'ai-patient-no-show-predictor', weight: 8 },
      { id: 'hipaa-compliance-auditor', weight: 7 },
    ]
  },
  finance: {
    title: 'FinTech & Banking AI',
    services: [
      { id: 'ai-fraud-detection', weight: 10 },
      { id: 'ai-loan-underwriting', weight: 8 },
      { id: 'ai-compliance-regulatory', weight: 7 },
    ]
  },
  retail: {
    title: 'Retail & E-Commerce AI',
    services: [
      { id: 'ai-retail-personalization-engine', weight: 10 },
      { id: 'ai-inventory-demand-forecast', weight: 8 },
      { id: 'ai-price-optimization', weight: 7 },
    ]
  },
  manufacturing: {
    title: 'Manufacturing Automation',
    services: [
      { id: 'ai-defect-detection-manufacturing', weight: 10 },
      { id: 'ai-predictive-maintenance', weight: 8 },
      { id: 'ai-production-scheduler', weight: 7 },
    ]
  },
  logistics: {
    title: 'Logistics & Supply Chain AI',
    services: [
      { id: 'ai-route-optimization', weight: 10 },
      { id: 'ai-demand-forecasting', weight: 8 },
      { id: 'ai-fleet-management', weight: 7 },
    ]
  },
  legal: {
    title: 'Legal Operations AI',
    services: [
      { id: 'ai-legal-contract-analyzer', weight: 10 },
      { id: 'ai-contract-lifecycle', weight: 8 },
      { id: 'ai-compliance-monitor', weight: 7 },
    ]
  },
  technology: {
    title: 'Technology & SaaS Solutions',
    services: [
      { id: 'ai-code-review-assistant', weight: 10 },
      { id: 'ai-api-gateway-manager', weight: 8 },
      { id: 'ai-devops-automation', weight: 7 },
    ]
  },
  energy: {
    title: 'Energy & Utilities AI',
    services: [
      { id: 'ai-grid-demand-forecaster', weight: 10 },
      { id: 'ai-renewable-integration', weight: 8 },
      { id: 'ai-energy-storage-optimizer', weight: 7 },
    ]
  },
  media: {
    title: 'Media & Entertainment AI',
    services: [
      { id: 'ai-content-moderation', weight: 10 },
      { id: 'ai-video-analytics', weight: 8 },
      { id: 'ai-audience-insights', weight: 7 },
    ]
  },
  education: {
    title: 'Education & Research AI',
    services: [
      { id: 'ai-personalized-learning', weight: 10 },
      { id: 'ai-student-performance-analytics', weight: 8 },
      { id: 'ai-research-assistant', weight: 7 },
    ]
  },
  government: {
    title: 'Government & Public Sector AI',
    services: [
      { id: 'ai-citizen-service-chatbot', weight: 10 },
      { id: 'ai-compliance-monitor', weight: 8 },
      { id: 'ai-document-processor', weight: 7 },
    ]
  },
  insurance: {
    title: 'Insurance AI Solutions',
    services: [
      { id: 'ai-claims-automation', weight: 10 },
      { id: 'ai-fraud-detection', weight: 8 },
      { id: 'ai-underwriting-assistant', weight: 7 },
    ]
  },
};

// ROI estimates by industry
const ROI_ESTIMATES: Record<string, { savings: string; timeframe: string; confidence: string }> = {
  healthcare: { savings: '30-50%', timeframe: '3-6 months', confidence: '94% accuracy' },
  finance: { savings: '25-40%', timeframe: '2-4 months', confidence: '99% detection' },
  retail: { savings: '35-60%', timeframe: '1-3 months', confidence: '340% conversion' },
  manufacturing: { savings: '40-65%', timeframe: '3-6 months', confidence: '73% downtime reduction' },
  logistics: { savings: '20-35%', timeframe: '2-4 months', confidence: '22% fuel savings' },
  legal: { savings: '50-70%', timeframe: '1-2 months', confidence: '65% faster review' },
  technology: { savings: '30-50%', timeframe: '1-3 months', confidence: '40% faster deployment' },
  energy: { savings: '25-45%', timeframe: '3-6 months', confidence: '35% grid optimization' },
  media: { savings: '40-60%', timeframe: '2-4 months', confidence: '55% engagement lift' },
  education: { savings: '30-50%', timeframe: '3-6 months', confidence: '38% improvement' },
  government: { savings: '20-35%', timeframe: '4-6 months', confidence: '90% compliance' },
  insurance: { savings: '30-50%', timeframe: '2-4 months', confidence: '65% claims automation' },
};

// Type for service with optional match score
interface ServiceWithScore {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  pricing: Record<string, string>;
  _matchScore?: number;
}

export const metadata = {
  title: 'AI Service Discovery Hub',
  description: 'Intelligent AI-powered service discovery. Find the perfect AI & IT solution for your business with smart matching, industry-specific recommendations, and real-time service catalog.',
  openGraph: {
    title: 'AI Service Discovery Hub | Zion Tech Group',
    url: 'https://ziontechgroup.com/service-discovery',
    description: 'Intelligent AI-powered service discovery. Find the perfect AI & IT solution for your business.',
  },
  alternates: { canonical: '/service-discovery' },
};

export default function ServiceDiscoveryHubPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');
  const [searchQuery, setSearchQuery] = useState('');
  
  const services: any[] = allServices as any[];
  
  // Get industry-specific services
  const industryServices = useMemo(() => {
    if (!selectedIndustry) return [];
    const rec = INDUSTRY_RECOMMENDATIONS[selectedIndustry];
    if (!rec) return [];
    
    const serviceMap = new Map(services.map((s: any) => [s.id, s]));
    return rec.services
      .map(({ id, weight }) => {
        const svc = serviceMap.get(id);
        return svc ? { ...svc, _matchScore: weight } : null;
      })
      .filter((s): s is ServiceWithScore => s !== null)
      .sort((a, b) => (b._matchScore || 0) - (a._matchScore || 0));
  }, [selectedIndustry, services]);

  const industryData = INDUSTRIES.find(i => i.key === selectedIndustry);
  const roiData = ROI_ESTIMATES[selectedIndustry];

  // Filtered services based on search
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return industryServices;
    const q = searchQuery.toLowerCase();
    return industryServices.filter((s: any) => 
      s.title.toLowerCase().includes(q) || 
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }, [industryServices, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
            <span className="text-green-400">✨</span>
            <span>AI-Powered Service Discovery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Find Your Perfect AI & IT Solution
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Intelligent service matching powered by our AI agent fleet. Describe your needs in plain language and get personalized recommendations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <input
              type="text"
              placeholder="Search services, industries, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/services" className="btn-primary text-lg px-10 py-4">
              🛠️ Browse All Services
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
              ⚡ Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Browse by Industry
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI solutions that drive measurable results in your specific industry
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.key}
                onClick={() => setSelectedIndustry(industry.key)}
                className={`text-left glass-card group transition-all duration-300 ${
                  selectedIndustry === industry.key 
                    ? 'border-purple-500/50 bg-purple-900/20' 
                    : 'hover:border-purple-500/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {industry.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${
                      selectedIndustry === industry.key ? 'text-purple-300' : 'group-hover:text-purple-300'
                    }`}>
                      {industry.label}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {industry.description}
                    </p>
                    {roiData && selectedIndustry === industry.key && (
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className="text-emerald-400 font-medium">~{roiData.savings}</span>
                        <span className="text-slate-500">{roiData.timeframe}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Services Detail */}
      <section className="py-20">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-white mb-6">{industryData?.label || 'Industry Solutions'}</h2>
          <p className="text-slate-400 mb-8">
            {INDUSTRY_RECOMMENDATIONS[selectedIndustry]?.title || 'Recommended Services'}
          </p>
          
          {filteredServices.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="glass-card flex flex-col group hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
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
                    <span className="text-purple-300 text-xs font-semibold">
                      From ${service.pricing?.basic || 'Contact'}/mo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400 mb-4">
                {searchQuery ? 'No services match your search.' : 'No services found for this industry yet.'}
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-all"
              >
                Clear search
              </button>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              href={`/services/?category=${INDUSTRIES.find(i => i.key === selectedIndustry)?.key}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View All {industryData?.label || 'Industry'} Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
              <span className="text-green-400">●</span> ROI Calculator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Use our interactive ROI calculator to estimate cost savings, efficiency gains, and implementation timelines for AI solutions in your industry.
            </p>
            <Link
              href="/tools/roi-calculator"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              📊 Launch ROI Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            See Real Results in Your Industry
          </h2>
          <p className="text-slate-400 mb-6">
            Our clients see 30-60% efficiency gains and millions in annual savings.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            View Case Studies →
          </Link>
        </div>
      </section>
    </main>
  );
}
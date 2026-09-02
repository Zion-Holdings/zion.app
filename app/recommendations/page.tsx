// app/recommendations/page.tsx - AI-Powered Service Recommendations
import { useState } from 'react';
import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';

// Recommendation engine based on business needs
const RECOMMENDATION_SETS = [
  {
    name: 'Cost Reduction',
    keywords: ['cost', 'reduce', 'save', 'optimize', 'cheaper', 'affordable'],
    services: ['cloud-cost-optimization', 'automation', 'ai-code-generation'],
    description: 'Services that help reduce operational costs and improve efficiency',
  },
  {
    name: 'Customer Experience',
    keywords: ['customer', 'client', 'experience', 'retention', 'churn'],
    services: ['customer-success', 'chatbot', 'ai-analysis'],
    description: 'Tools to enhance customer satisfaction and loyalty',
  },
  {
    name: 'Data Insights',
    keywords: ['analytics', 'insights', 'data', 'reporting', 'forecast'],
    services: ['predictive-analytics', 'data-analytics', 'business-intelligence'],
    description: 'Transform your data into actionable business intelligence',
  },
  {
    name: 'Security & Compliance',
    keywords: ['security', 'secure', 'compliance', 'threat', 'protection'],
    services: ['cybersecurity', 'security-scanning', 'compliance'],
    description: 'Protect your business with enterprise-grade security solutions',
  },
  {
    name: 'Process Automation',
    keywords: ['automat', 'workflow', 'process', 'efficiency', 'rpa'],
    services: ['rpa', 'workflow-automation', 'process-optimization'],
    description: 'Automate repetitive tasks and streamline operations',
  },
];

export default function RecommendationsPage() {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const services: Service[] = allServices as Service[];

  const getRecommendedServices = () => {
    if (!selectedNeed) return [];
    
    const need = RECOMMENDATION_SETS.find(n => n.name === selectedNeed);
    if (!need) return [];

    return services
      .filter(s => {
        const text = `${s.title} ${s.description} ${s.benefits?.join(' ')}`.toLowerCase();
        return need.keywords.some(k => text.includes(k));
      })
      .sort((a: any, b: any) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
      .slice(0, 12);
  };

  const recommended = getRecommendedServices();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'AI-Powered Service Recommendations - Zion Tech Group',
            'description': 'Get personalized AI service recommendations based on your business needs',
            'url': 'https://ziontechgroup.com/recommendations',
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]"></div>
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-6">
              <span className="text-xs font-medium">AI-Powered Matching</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Find Your Perfect Solution
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tell us what you need, and our AI agents will recommend the best services for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Need Selection */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                What Do You Need?
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Select your primary business goal and discover AI-powered solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {RECOMMENDATION_SETS.map(need => (
              <button
                key={need.name}
                onClick={() => setSelectedNeed(need.name)}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  selectedNeed === need.name
                    ? 'bg-cyan-900/30 border-cyan-500/40'
                    : 'bg-slate-900/50 hover:bg-slate-800/80 hover:border-cyan-500/30'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{need.name}</h3>
                <p className="text-sm text-slate-400">{need.description}</p>
              </button>
            ))}
          </div>

          {/* Recommended Services */}
          {selectedNeed && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Recommended Services for {selectedNeed}
              </h3>
              {recommended.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommended.map((service: any) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="group block rounded-xl border border-slate-700 bg-slate-900/30 hover:bg-slate-800/60 hover:border-cyan-500/40 p-5 transition-all"
                    >
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-purple-400">
                          {service.pricing ? Object.values(service.pricing)[0] : 'Contact'}
                        </span>
                        <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">
                          View →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-400">No services found for this need. Try a different selection.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our AI agents work 24/7 to find the perfect solution for your business. 
            Get a free, custom proposal with pricing and implementation timeline in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
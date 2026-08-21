// app/industry-solutions/page.tsx - Industry Solutions Hub
'use client';

import Link from 'next/link';
import { INDUSTRY_SERVICES } from '@/components/SmartRecommendationEngine';
import SmartRecommendationEngine from '@/components/SmartRecommendationEngine';
import { useServicesSearch } from '@/hooks/useServicesSearch';


const INDUSTRY_CONFIG = [
  {
    key: 'financial-services',
    label: 'Financial Services',
    emoji: '💳',
    description: 'AI-powered fraud detection, compliance automation, and risk management',
    color: 'from-indigo-500 to-purple-600',
    services: INDUSTRY_SERVICES['financial-services'],
    roi: '3.5x',
    usecase: 'Reduce fraud losses by 40%, automate compliance reporting'
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    emoji: '🏥',
    description: 'Clinical intelligence, patient care automation, and medical compliance',
    color: 'from-emerald-500 to-teal-600',
    services: INDUSTRY_SERVICES['healthcare'],
    roi: '4.2x',
    usecase: 'Improve diagnosis accuracy by 25%, reduce admin hours by 30%'
  },
  {
    key: 'retail',
    label: 'Retail & E-commerce',
    emoji: '🛒',
    description: 'Customer experience, inventory optimization, and personalized commerce',
    color: 'from-pink-500 to-rose-600',
    services: INDUSTRY_SERVICES['retail'],
    roi: '3.8x',
    usecase: 'Increase conversion by 18%, reduce inventory costs by 25%'
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing',
    emoji: '🏭',
    description: 'Predictive maintenance, quality control, and production optimization',
    color: 'from-yellow-500 to-amber-600',
    services: INDUSTRY_SERVICES['manufacturing'],
    roi: '4.5x',
    usecase: 'Reduce downtime by 35%, improve quality yield by 20%'
  },
  {
    key: 'logistics',
    label: 'Logistics & Supply Chain',
    emoji: '🚚',
    description: 'Route optimization, fleet management, and warehouse automation',
    color: 'from-cyan-500 to-blue-600',
    services: INDUSTRY_SERVICES['logistics'],
    roi: '3.2x',
    usecase: 'Cut delivery costs by 22%, improve on-time delivery by 30%'
  },
  {
    key: 'technology',
    label: 'Technology',
    emoji: '💻',
    description: 'DevOps, cloud infrastructure, and API integration solutions',
    color: 'from-blue-500 to-cyan-600',
    services: INDUSTRY_SERVICES['technology'],
    roi: '3.0x',
    usecase: 'Reduce deployment time by 50%, improve system reliability'
  },
  {
    key: 'energy',
    label: 'Energy & Utilities',
    emoji: '⚡',
    description: 'Smart grid, demand forecasting, and renewable energy optimization',
    color: 'from-green-500 to-emerald-600',
    services: INDUSTRY_SERVICES['energy'],
    roi: '3.6x',
    usecase: 'Optimize energy consumption by 20%, predict demand accurately'
  }
];

export default function IndustrySolutionsPage() {
  const { totalCount } = useServicesSearch();
  const totalServices = totalCount;
  const industryCount = INDUSTRY_CONFIG.length;

  return (
    <main className="min-h-screen bg-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Industry Solutions - Zion Tech Group',
            'description': `AI solutions for ${industryCount} industries: Financial Services, Healthcare, Retail, Manufacturing, Logistics, Technology, and Energy.`,
            'url': 'https://ziontechgroup.com/industry-solutions/',
            'isPartOf': {
              '@type': 'WebSite',
              'url': 'https://ziontechgroup.com/',
              'name': 'Zion Tech Group'
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        
        <div className="relative container-page text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Industry-Specific AI Solutions</span><br />
              <span className="text-white">For Your Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Pre-built AI solutions for {industryCount} industries. From fraud detection to supply chain optimization, 
              discover how we've helped businesses achieve {totalServices}+ real-world results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-10 py-4"
              >
                🚀 Get Your Custom Proposal
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary text-lg px-10 py-4"
              >
                🛠️ Browse All {totalServices}+ Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-heading">Solutions by Industry</h2>
            <p className="section-subheading">
              Curated collections of AI services tailored to your industry's unique challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_CONFIG.map((industry) => (
              <Link
                key={industry.key}
                href={`/services/?category=${industry.services.services[0]?.split('-')[0] || 'ai'}`}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40 p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{industry.emoji}</span>
                  <span className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full">
                    ROI: {industry.roi}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {industry.label}
                </h3>
                
                <p className="text-slate-400 text-sm mb-3">
                  {industry.description}
                </p>
                
                <p className="text-xs text-purple-400 mb-4">
                  💡 {industry.usecase}
                </p>

                <div className="border-t border-slate-700/50 pt-3">
                  <span className="text-xs text-slate-500">
                    {industry.services.services.length} services in this category
                  </span>
                  <span className="text-purple-300 text-xs float-right font-medium">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Recommendation Engine */}
      <SmartRecommendationEngine className="border-t border-slate-800/60" />

      {/* Featured Industry Use Cases */}
      <section className="py-20 bg-slate-900/30">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Industry Success Stories</h2>
            <p className="section-subheading">See how businesses in your industry achieve real results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'Financial Services',
                result: '40% reduction in fraud losses',
                service: 'AI Fraud Detection',
                timeframe: '3 months',
                emoji: '💳'
              },
              {
                industry: 'Healthcare',
                result: '25% improvement in diagnosis accuracy',
                service: 'AI Medical Diagnosis Assistant',
                timeframe: '6 months',
                emoji: '🏥'
              },
              {
                industry: 'Manufacturing',
                result: '35% reduction in equipment downtime',
                service: 'Predictive Maintenance AI',
                timeframe: '4 months',
                emoji: '🏭'
              },
              {
                industry: 'Retail',
                result: '18% increase in conversion rate',
                service: 'Personalized Recommendations',
                timeframe: '2 months',
                emoji: '🛒'
              },
              {
                industry: 'Logistics',
                result: '22% reduction in delivery costs',
                service: 'Route Optimization AI',
                timeframe: '3 months',
                emoji: '🚚'
              },
              {
                industry: 'Energy',
                result: '20% energy consumption optimization',
                service: 'Smart Grid AI',
                timeframe: '5 months',
                emoji: '⚡'
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="glass-card p-5 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="text-sm font-semibold text-white">{item.industry}</h3>
                </div>
                <p className="text-slate-300 text-sm mb-2">
                  <span className="text-purple-300 font-medium">{item.result}</span>
                  {' '}with {item.service}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{item.service}</span>
                  <span>·</span>
                  <span>{item.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container-page">
          <div className="cta-section text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your {industryCount === 7 ? 'Industry' : 'Business'}?
            </h2>
            <p className="text-slate-300 mb-8">
              Get a custom-tailored proposal with services matched to your specific industry, 
              budget, and timeline. Delivered to your inbox as a PDF within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-10 py-4"
              >
                ⚙️ Start Configurator
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="btn-secondary text-lg px-10 py-4"
              >
                ✉️ Email Us
              </a>
              <a 
                href="tel:+13024640950" 
                className="btn-secondary text-lg px-10 py-4"
              >
                ☎ +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
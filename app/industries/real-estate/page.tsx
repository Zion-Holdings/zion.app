// app/industries/real-estate/page.tsx - Real Estate AI Solutions (SEO Optimized)
'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Real Estate AI Solutions | Property Valuation, Lead Scoring & Virtual Tours | Zion Tech Group',
  description: 'AI-powered automation for real estate: property valuation, lead scoring, virtual tours, tenant screening, and investment analysis. Transform your real estate business with intelligent automation.',
  keywords: 'real estate AI, property valuation AI, real estate lead scoring, virtual tour AI, tenant screening AI, property investment AI, real estate automation',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/real-estate',
  },
};

const REAL_ESTATE_SERVICES = [
  {
    id: 'ai-property-valuation',
    title: 'AI Property Valuation Engine',
    desc: 'Automated property valuation and pricing optimization using machine learning algorithms.',
    price: 'From $2,999/mo',
    metrics: '40% faster appraisals',
    icon: '🏠',
    href: '/services/ai-property-valuation',
    category: 'real-estate',
  },
  {
    id: 'ai-lead-scoring-real-estate',
    title: 'AI Real Estate Lead Scoring',
    desc: 'Prioritize high-quality property buyers and sellers with predictive lead scoring.',
    price: 'From $3,499/mo',
    metrics: '60% more qualified leads',
    icon: '📈',
    href: '/services/ai-lead-scoring-real-estate',
    category: 'real-estate',
  },
  {
    id: 'property-investment-analysis',
    title: 'AI Property Investment Analyzer',
    desc: 'Automated ROI forecasting and investment opportunity identification.',
    price: 'From $4,999/mo',
    metrics: '95% forecast accuracy',
    icon: '💰',
    href: '/services/property-investment-analysis',
    category: 'real-estate',
  },
  {
    id: 'virtual-tour-generator',
    title: 'AI Virtual Tour Generator',
    desc: 'Create immersive virtual property tours from photos and floor plans.',
    price: 'From $1,999/mo',
    metrics: '10x faster creation',
    icon: '🏛️',
    href: '/services/virtual-tour-generator',
    category: 'real-estate',
  },
  {
    id: 'tenant-screening-ai',
    title: 'AI Tenant Screening Platform',
    desc: 'Automated tenant qualification and background verification.',
    price: 'From $2,499/mo',
    metrics: '80% faster screening',
    icon: '🔍',
    href: '/services/tenant-screening-ai',
    category: 'real-estate',
  },
  {
    id: 'property-maintenance-ai',
    title: 'AI Property Maintenance Scheduler',
    desc: 'Predictive maintenance scheduling and vendor management.',
    price: 'From $1,499/mo',
    metrics: '30% cost reduction',
    icon: '🔧',
    href: '/services/property-maintenance-ai',
    category: 'real-estate',
  },
];

const PAIN_POINTS = [
  'Manual property valuation and pricing leading to over/under-pricing',
  'Inefficient lead qualification causing wasted time on cold prospects',
  'Time-consuming virtual tour creation limiting property showcase',
  'Tenant screening delays affecting property occupancy rates',
  'Investment analysis complexity and inaccurate ROI projections',
  'Maintenance scheduling inefficiencies causing tenant dissatisfaction',
];

const SOLUTIONS = [
  'AI Property Valuation with 95% accuracy for optimal pricing',
  'Lead Scoring that prioritizes 60% more qualified prospects',
  'Instant virtual tours generated from photos in minutes',
  'Automated tenant screening reducing vacancy by 25%',
  'Investment analysis with 95% forecast accuracy',
  'Predictive maintenance preventing 40% of issues',
];

const SEO_KEYWORDS = [
  'real estate AI solutions',
  'property valuation AI',
  'real estate lead scoring',
  'virtual tour generator AI',
  'tenant screening AI',
  'property investment analysis',
  'real estate automation',
  'AI property management',
  'real estate technology',
  'smart real estate platform',
];

const SEO_BENEFITS = [
  'Increase property sale prices by 15% with accurate AI valuation',
  'Close deals 40% faster with predictive lead scoring',
  'Reduce virtual tour costs by 80% with AI generation',
  'Improve tenant retention with proactive maintenance AI',
  'Maximize ROI with data-driven investment recommendations',
];

export default function RealEstateIndustryPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Real Estate AI Solutions | Zion Tech Group',
          'description': 'AI-powered automation for real estate: property valuation, lead scoring, virtual tours, tenant screening, and investment analysis.',
          'url': 'https://ziontechgroup.com/industries/real-estate',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ziontechgroup.com/' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ziontechgroup.com/industries/' },
              { '@type': 'ListItem', position: 3, name: 'Real Estate', item: 'https://ziontechgroup.com/industries/real-estate' },
            ],
          },
          'industry': 'Real Estate',
          'keywords': SEO_KEYWORDS.join(', '),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Breadcrumb */}
        <div className="container-page py-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-300">Real Estate</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <span className="text-green-400">●</span> AI Solutions for Real Estate
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                  Real Estate Innovation
                </span>{' '}
                <span className="text-white">with AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform real estate operations with AI-powered property valuation, 
                lead scoring, virtual tours, and investment analysis. Increase efficiency, 
                reduce costs, and close deals faster with intelligent real estate technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/configurator/"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Your Custom Proposal
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View All Real Estate Services
                </Link>
              </div>

              <div className="flex justify-center">
                <a href="tel:+130****0950" className="text-slate-400 hover:text-slate-300">
                  ☎ +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-emerald-400">
                Real Estate Impact
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Proven results across property developers, real estate agencies, 
                property management companies, and investment firms.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                <div className="text-slate-400 text-sm">Faster Sales</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">60%</div>
                <div className="text-slate-400 text-sm">More Qualified Leads</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">80%</div>
                <div className="text-slate-400 text-sm">Faster Screening</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">25%</div>
                <div className="text-slate-400 text-sm">Lower Vacancy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section className="py-20 px-4 bg-slate-950/50">
          <div className="container-page">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <span>⚠️</span> Key Challenges
                </h3>
                <ul className="space-y-3 text-slate-300">
                  {PAIN_POINTS.map((pain, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <span>✅ AI Solutions</span>
                </h3>
                <ul className="space-y-3 text-slate-300">
                  {SOLUTIONS.map((solution, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">→</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Real Estate AI Solutions
                </span>
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {REAL_ESTATE_SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group glass-card flex flex-col h-full hover:border-emerald-500/40 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-2xl flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-base mb-1 group-hover:text-emerald-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2 line-clamp-2">{service.desc}</p>
                        <div className="text-xs text-emerald-400 font-semibold mb-3">
                          {service.metrics}
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-700/50">
                      <span className="text-emerald-300 text-sm font-medium">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <section className="py-20 px-4">
              <div className="container-page">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-center mb-6 text-emerald-400">
                    Real Estate AI Benefits
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SEO_BENEFITS.map((benefit, i) => (
                    <div key={i} className="glass-card p-6 text-center">
                      <p className="text-slate-300 text-sm">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20">
              <div className="container-page text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Real Estate Business?
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Schedule a free consultation to see how our AI solutions can increase your 
                  property sales, reduce vacancy rates, and maximize your investment returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://calendly.com/kleber-ziontechgroup"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href="mailto:kleber@ziontechgroup.com?subject=Real%20Estate%20AI%20Inquiry"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Email: kleber@ziontechgroup.com
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
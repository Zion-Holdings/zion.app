// app/industries/agriculture/page.tsx - Agriculture AI Solutions (SEO Optimized)
'use client';

import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Agriculture AI Solutions | Crop Monitoring, Precision Farming & Yield Optimization | Zion Tech Group',
  description: 'AI-powered solutions for agriculture: crop monitoring, precision farming, yield prediction, livestock management, and supply chain optimization. Transform farming with intelligent automation.',
  keywords: 'agriculture AI, precision farming AI, crop monitoring AI, yield prediction, livestock management AI, farm automation, agricultural technology',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/agriculture',
  },
};

const AGRICULTURE_SERVICES = [
  {
    id: 'crop-disease-detection',
    title: 'AI Crop Disease Detection',
    desc: 'Early disease detection in crops using computer vision and satellite imagery.',
    price: 'From $1,999/mo',
    metrics: '95% accuracy',
    icon: '🌱',
    href: '/services/crop-disease-detection',
    category: 'agriculture',
  },
  {
    id: 'precision-farming-ai',
    title: 'AI Precision Farming Platform',
    desc: 'Optimize crop yields with data-driven farming recommendations.',
    price: 'From $2,499/mo',
    metrics: '30% yield increase',
    icon: '🚜',
    href: '/services/precision-farming-ai',
    category: 'agriculture',
  },
  {
    id: 'livestock-monitoring-ai',
    title: 'AI Livestock Monitoring',
    desc: 'Health monitoring and behavior analysis for livestock using IoT sensors.',
    price: 'From $1,499/mo',
    metrics: '40% health improvement',
    icon: '🐄',
    href: '/services/livestock-monitoring-ai',
    category: 'agriculture',
  },
  {
    id: 'irrigation-optimization',
    title: 'AI Irrigation Optimization',
    desc: 'Smart irrigation scheduling based on weather, soil conditions, and crop needs.',
    price: 'From $999/mo',
    metrics: '50% water savings',
    icon: '💧',
    href: '/services/irrigation-optimization',
    category: 'agriculture',
  },
  {
    id: 'harvest-forecasting',
    title: 'AI Harvest Forecasting',
    desc: 'Predict optimal harvest timing for maximum yield and quality.',
    price: 'From $1,299/mo',
    metrics: '25% better timing',
    icon: '🌾',
    href: '/services/harvest-forecasting',
    category: 'agriculture',
  },
  {
    id: 'supply-chain-optimization-ag',
    title: 'Agricultural Supply Chain AI',
    desc: 'Optimize crop distribution and reduce post-harvest losses.',
    price: 'From $2,999/mo',
    metrics: '20% loss reduction',
    icon: '🚛',
    href: '/services/supply-chain-optimization-ag',
    category: 'agriculture',
  },
];

const PAIN_POINTS = [
  'Crop diseases going undetected until significant damage occurs',
  'Suboptimal irrigation wasting water and reducing yields',
  'Manual livestock monitoring missing early health issues',
  'Inaccurate harvest timing leading to quality loss',
  'Supply chain inefficiencies causing post-harvest waste',
  'Limited data for informed farming decisions',
];

const SOLUTIONS = [
  'Early disease detection preventing 90% of crop losses',
  'Smart irrigation saving 50% of water usage',
  'Automated livestock monitoring improving health by 40%',
  'Accurate harvest forecasting optimizing timing by 25%',
  'Supply chain optimization reducing waste by 20%',
  'Data-driven decisions with real-time farm analytics',
];

const SEO_KEYWORDS = [
  'agriculture AI solutions',
  'precision farming AI',
  'crop disease detection AI',
  'livestock monitoring AI',
  'irrigation optimization AI',
  'harvest forecasting AI',
  'farm automation',
  'agricultural technology',
  'crop yield prediction',
  'smart farming AI'
];

const SEO_BENEFITS = [
  'Increase crop yields by 30% with precision farming',
  'Reduce water usage by 50% with smart irrigation',
  'Prevent crop diseases with 95% early detection accuracy',
  'Improve livestock health by 40% with automated monitoring',
  'Reduce post-harvest losses by 20% with optimized supply chain',
];

export default function AgricultureIndustryPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Agriculture AI Solutions | Zion Tech Group',
          'description': 'AI-powered solutions for agriculture: crop monitoring, precision farming, yield prediction, livestock management, and supply chain optimization.',
          'url': 'https://ziontechgroup.com/industries/agriculture',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ziontechgroup.com/' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ziontechgroup.com/industries/' },
              { '@type': 'ListItem', position: 3, name: 'Agriculture', item: 'https://ziontechgroup.com/industries/agriculture' },
            ],
          },
          'industry': 'Agriculture',
          'keywords': SEO_KEYWORDS.join(', '),
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="container-page py-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-300">Agriculture</span>
          </nav>
        </div>

        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-green-900/20" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-600/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl" />

          <div className="container-page relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <span className="text-green-400">●</span> AI Solutions for Agriculture
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-green-400 bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text">
                  Smart Agriculture
                </span>{' '}
                <span className="text-white">with AI</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform farming operations with AI-powered crop monitoring, precision farming, 
                livestock management, and supply chain optimization. Increase yields, reduce costs, 
                and build resilient agricultural businesses with intelligent technology.
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
                  View All Agriculture Services
                </Link>
              </div>

              <a href="tel:+130****0950" className="text-slate-400 hover:text-slate-300">
                ☎ +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
                Agriculture Impact
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Proven results across farms, agricultural cooperatives, and agri-tech companies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-slate-400 text-sm">Yield Increase</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-slate-400 text-sm">Water Savings</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-slate-400 text-sm">Disease Detection</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-slate-400 text-sm">Health Improvement</div>
              </div>
            </div>
          </div>
        </section>

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

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
                  Agriculture AI Solutions
                </span>
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {AGRICULTURE_SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group glass-card flex flex-col h-full hover:border-green-500/40 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-amber-600 flex items-center justify-center text-2xl flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-base mb-1 group-hover:text-green-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2 line-clamp-2">{service.desc}</p>
                        <div className="text-xs text-green-400 font-semibold mb-3">
                          {service.metrics}
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-700/50">
                      <span className="text-green-300 text-sm font-medium">
                        {service.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <section className="py-20 px-4">
              <div className="container-page">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-center mb-6 text-green-400">
                    Agriculture AI Benefits
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

            <section className="py-20 px-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
              <div className="container-page text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Modernize Your Farm?
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Schedule a free consultation to see how our AI solutions can increase your 
                  crop yields, reduce water usage, and build a more profitable agricultural business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://calendly.com/kleber-ziontechgroup"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href="mailto:kleber@ziontechgroup.com?subject=Agriculture%20AI%20Inquiry"
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
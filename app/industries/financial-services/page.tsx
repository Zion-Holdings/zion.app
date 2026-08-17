// app/industries/financial-services/page.tsx - Financial Services AI Solutions (SEO Optimized)
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for Financial Services {' '} & FinTech | Zion Tech Group',
  description: 'Deploy AI solutions that protect revenue, optimize operations, and accelerate growth. 
              From fraud detection to wealth management — we build compliant AI solutions for 
              financial institutions of all sizes.',
  alternates: { canonical: '/industries/financial-servic/' },
};


const FINANCIAL_SERVICES = [
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection & Prevention',
    description: 'Real-time fraud detection system that identifies suspicious transactions, patterns, and anomalies. Protects revenue and customer trust with adaptive machine learning.',
    features: [
      'Real-time transaction monitoring',
      'Behavioral anomaly detection',
      'Identity verification',
      'AML compliance automation',
      'Device fingerprinting',
      'Risk scoring engine'
    ],
    roi: '70-90% reduction in fraud losses',
    category: 'Security AI'
  },
  {
    id: 'ai-financial-planning',
    title: 'AI Financial Planning & Analysis',
    description: 'Automated FP&A platform that forecasts revenue, optimizes budgets, and identifies cost-saving opportunities using machine learning algorithms.',
    features: [
      'Revenue forecasting',
      'Budget optimization',
      'Cost center analysis',
      'Scenario modeling',
      'Variance analysis',
      'Automated reporting'
    ],
    roi: '25% improvement in forecast accuracy',
    category: 'Financial AI'
  },
  {
    id: 'ai-risk-management',
    title: 'AI Risk Management Platform',
    description: 'Comprehensive risk assessment and management solution that monitors market risks, credit risks, and operational risks in real-time.',
    features: [
      'Market risk monitoring',
      'Credit risk scoring',
      'Operational risk assessment',
      'Stress testing simulations',
      'Regulatory compliance tracking',
      'Risk dashboard & alerts'
    ],
    roi: '40% faster risk assessment',
    category: 'Risk AI'
  },
  {
    id: 'ai-wealth-management',
    title: 'AI Wealth Management Advisor',
    description: 'Robo-advisor platform that provides personalized investment recommendations, portfolio rebalancing, and tax-loss harvesting for high-net-worth clients.',
    features: [
      'Personalized investment recommendations',
      'Portfolio rebalancing automation',
      'Tax-loss harvesting',
      'Market sentiment analysis',
      'Client onboarding automation',
      'Performance reporting'
    ],
    roi: '30% reduction in advisory costs',
    category: 'Wealth AI'
  },
  {
    id: 'ai-credit-scoring',
    title: 'AI Credit Scoring & Underwriting',
    description: 'Machine learning-powered credit scoring that evaluates loan applicants with 99% accuracy. Reduces default rates and expands approval rates.',
    features: [
      'Alternative data integration',
      'Real-time credit scoring',
      'Loan approval automation',
      'Default prediction modeling',
      'Portfolio risk assessment',
      'Regulatory compliance'
    ],
    roi: '50% reduction in default rates',
    category: 'Lending AI'
  }
];

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* JSON-LD Structured Data for Financial Services */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Financial Services AI Solutions - Zion Tech Group',
            'description': 'AI-powered financial services and fintech solutions including fraud detection, financial planning, risk management, wealth management, and credit scoring. Enterprise AI solutions for banks, fintech companies, and financial institutions.',
            'url': 'https://ziontechgroup.com/industries/financial-services/',
            'mainEntity': [
              {
                '@type': 'Service',
                'name': 'AI Fraud Detection & Prevention',
                'description': 'Real-time fraud detection system that identifies suspicious transactions and protects revenue',
                'category': 'Financial Security AI',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Zion Tech Group',
                  'url': 'https://ziontechgroup.com'
                },
                'offers': {
                  '@type': 'Offer',
                  'priceCurrency': 'USD',
                  'price': '2999',
                  'description': 'Enterprise fraud detection platform with 99.9% detection rate'
                },
                'areaServed': 'United States',
                'serviceType': 'Financial AI',
                'audience': {
                  '@type': 'Audience',
                  'audienceType': 'Banks, Fintech Companies, Payment Processors, Insurance'
                }
              }
            ],
            'keywords': 'financial AI, fintech AI, fraud detection, credit scoring, wealth management, financial planning, risk management, banking AI'
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> FinTech AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                AI for Financial Services
              </span>{' '}
              <span className="text-white">& FinTech</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Deploy AI solutions that protect revenue, optimize operations, and accelerate growth. 
              From fraud detection to wealth management — we build compliant AI solutions for 
              financial institutions of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                💰 Get Financial AI Assessment →
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
                📞 Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Financial AI Benefits
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven AI solutions that reduce risk, increase revenue, and improve compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-slate-300 mb-2">Fraud Detection Rate</div>
              <div className="text-slate-500 text-sm">Zero false positives</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-slate-300 mb-2">Reduction in Defaults</div>
              <div className="text-slate-500 text-sm">Improved credit decisions</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-slate-300 mb-2">Faster Risk Assessment</div>
              <div className="text-slate-500 text-sm">Real-time monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                AI Financial Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FINANCIAL_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}/`}
                className="group block rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40 p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">💳</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">
                    {service.roi}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-2">{service.description}</p>
                <div className="text-xs text-purple-400 font-medium">{service.category}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services/?industry=Financial"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View All FinTech AI →
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Badge */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 mb-6">
              <span className="text-3xl">🔐</span>
              <div className="text-left">
                <div className="text-lg font-semibold text-white">Regulatory Compliant</div>
                <div className="text-slate-400 text-sm">All solutions meet FINRA, SEC, and banking regulations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Protect & Grow Your Financial Business
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our AI agents work 24/7 to match you with the perfect financial solutions. 
            Get a free, custom assessment to see how AI can transform your operations.
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
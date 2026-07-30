import { Metadata } from 'next';
import Link from 'next/link';
import { allServices, type Service } from '../../data/servicesData';

export async function generateStaticParams() {
  // Get unique industries from services data
  const industries = new Set<string>();
  allServices.forEach((s: Service) => {
    if (s.industry) industries.add(s.industry.toLowerCase());
  });
  return Array.from(industries).map(key => ({ key }));
}

// Industry metadata configuration
const INDUSTRY_CONFIG: Record<string, {
  title: string;
  description: string;
  emoji: string;
  color: string;
  icon: string;
  services: string[];
  benefits: string[];
}> = {
  healthcare: {
    title: 'Healthcare AI Solutions',
    description: 'AI-powered healthcare solutions for clinical automation, drug discovery, patient insights, and regulatory compliance.',
    emoji: '🏥',
    icon: '🧬',
    color: 'from-emerald-500 to-teal-600',
    services: ['ai-healthcare-d36b3adb', 'ai-clinical-decision-support', 'patient-risk-prediction-engine'],
    benefits: [
      '60% faster clinical decisions',
      '40% reduction in administrative costs',
      '95% accuracy in diagnostic predictions',
      'HIPAA-compliant data handling',
      'FDA regulatory pathway support'
    ]
  },
  finance: {
    title: 'Finance & FinTech AI Solutions',
    description: 'Fraud detection, algorithmic trading, risk management, and regulatory compliance solutions built for financial services.',
    emoji: '💳',
    icon: '📈',
    color: 'from-indigo-500 to-purple-600',
    services: ['ai-fraud-detection', 'algorithmic-trading-platform', 'risk-scoring-engine'],
    benefits: [
      '99.9% fraud detection accuracy',
      '50% faster trade execution',
      '30% reduction in risk exposure',
      'Regulatory compliance automation',
      'Real-time market intelligence'
    ]
  },
  retail: {
    title: 'Retail & E-Commerce AI Solutions',
    description: 'Personalized recommendations, inventory optimization, customer experience automation, and supply chain intelligence for modern retailers.',
    emoji: '🛍️',
    icon: '🛒',
    color: 'from-pink-500 to-rose-600',
    services: ['ai-personalized-recommendations', 'inventory-forecasting-platform', 'customer-journey-analytics'],
    benefits: [
      '35% increase in conversion rates',
      '25% reduction in inventory costs',
      '40% improvement in customer retention',
      'Real-time demand forecasting',
      'Omnichannel experience optimization'
    ]
  },
  manufacturing: {
    title: 'Manufacturing & Industrial AI Solutions',
    description: 'Computer vision quality inspection, predictive maintenance, supply chain optimization, and IoT-enabled production intelligence.',
    emoji: '🏭',
    icon: '⚙️',
    color: 'from-amber-500 to-orange-600',
    services: ['ai-quality-inspection', 'predictive-maintenance-platform', 'supply-chain-radar'],
    benefits: [
      '70% reduction in quality defects',
      '50% decrease in downtime',
      '30% improvement in yield',
      'Real-time production monitoring',
      'Predictive maintenance alerts'
    ]
  },
  telecom: {
    title: 'Telecommunications AI Solutions',
    description: 'Network optimization, 5G infrastructure automation, customer churn prediction, and edge computing solutions for telecom operators.',
    emoji: '📡',
    icon: '📶',
    color: 'from-cyan-500 to-blue-600',
    services: ['5g-network-optimization', 'customer-churn-prediction', 'edge-computing-platform'],
    benefits: [
      '40% network performance improvement',
      '25% reduction in customer churn',
      '60% faster issue resolution',
      '5G deployment optimization',
      'Edge computing at scale'
    ]
  },
  energy: {
    title: 'Energy & Utilities AI Solutions',
    description: 'Smart grid management, demand forecasting, renewable energy optimization, and sustainability tracking for energy companies.',
    emoji: '⚡',
    icon: '🔋',
    color: 'from-yellow-500 to-amber-600',
    services: ['grid-demand-forecaster', 'renewable-energy-optimizer', 'carbon-footprint-tracker'],
    benefits: [
      '15% reduction in energy costs',
      '30% improvement in grid efficiency',
      '50% faster demand response',
      'Carbon emission tracking',
      'Renewable integration optimization'
    ]
  },
  logistics: {
    title: 'Logistics & Supply Chain AI Solutions',
    description: 'Route optimization, warehouse automation, shipment tracking, and sustainable supply chain solutions for logistics providers.',
    emoji: '🚚',
    icon: '🚛',
    color: 'from-green-500 to-emerald-600',
    services: ['route-optimization-engine', 'warehouse-automation-platform', 'sustainable-supply-chain-radar'],
    benefits: [
      '20% reduction in delivery times',
      '15% fuel cost savings',
      '35% improvement in warehouse efficiency',
      'Real-time shipment tracking',
      'Sustainability reporting'
    ]
  },
  gaming: {
    title: 'Gaming & Entertainment AI Solutions',
    description: 'Player behavior analytics, game testing automation, content generation, and liveOps platforms for game studios.',
    emoji: '🎮',
    icon: '🎯',
    color: 'from-purple-500 to-fuchsia-600',
    services: ['player-behavior-analytics', 'game-testing-automation', 'ai-content-generator'],
    benefits: [
      '50% faster bug detection',
      '30% increase in player retention',
      'Real-time content personalization',
      'Automated QA testing',
      'Player behavior insights'
    ]
  },
  realestate: {
    title: 'Real Estate & PropTech AI Solutions',
    description: 'Property valuation AI, tenant matching, smart building automation, and market analysis for real estate professionals.',
    emoji: '🏢',
    icon: '🏠',
    color: 'from-blue-500 to-cyan-600',
    services: ['property-valuation-ai', 'tenant-matching-engine', 'market-analysis-platform'],
    benefits: [
      '60% faster property valuations',
      '40% improvement in tenant matching',
      'Real-time market analysis',
      'Smart building automation',
      'Predictive occupancy modeling'
    ]
  },
  'healthcare-lifecycle': {
    title: 'AI Contract Lifecycle Management',
    description: 'Automated contract review, clause analysis, renewal tracking, and compliance monitoring for enterprise legal teams.',
    emoji: '📄',
    icon: '🤝',
    color: 'from-violet-500 to-indigo-600',
    services: ['ai-legal-contract-analyzer', 'contract-lifecycle-intelligence', 'clause-extraction-engine'],
    benefits: [
      '70% reduction in contract review time',
      'Automated compliance monitoring',
      'Renewal tracking & alerts',
      'Clause comparison & analysis',
      'Risk assessment automation'
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ key: string }> }): Promise<Metadata> {
  const { key } = await params;
  const config = INDUSTRY_CONFIG[key] || INDUSTRY_CONFIG.healthcare;
  
  return {
    title: `${config.title} | Zion Tech Group`,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://ziontechgroup.com/industries/${key}`,
      siteName: 'Zion Tech Group',
      type: 'website',
      locale: 'en_US',
    },
    alternates: { canonical: `/industries/${key}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ key: string }> }}) {
  const { key } = await params;
  const config = INDUSTRY_CONFIG[key] || INDUSTRY_CONFIG.healthcare;
  
  // Get services for this industry
  const industryServices = allServices.filter((s: Service) => 
    s.industry?.toLowerCase() === key.toLowerCase() ||
    config.services.includes(s.id)
  ).slice(0, 8);

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
            name: config.title,
            description: config.description,
            url: `https://ziontechgroup.com/industries/${key}`,
            isPartOf: {
              '@type': 'WebSite',
              url: 'https://ziontechgroup.com',
              name: 'Zion Tech Group'
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-y border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-900/40 to-pink-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(120,50,200,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(200,50,150,0.2),transparent_50%)]" />
        <div className="relative container-page py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/industries" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                ← All Industries
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
                <span className="text-green-400">●</span> {config.title}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text">{config.emoji}</span>{' '}
                <span className="text-white">{config.title.split(' AI')[0]}</span>
                </br />
                <span className="text-slate-300">{config.description}</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link href="/contact/" className="btn-primary text-lg px-8 py-3">
                  📞 Get Industry-Specific Proposal
                </Link>
                <a href={`mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(config.title)}`} className="btn-secondary text-lg px-8 py-3">
                  ✉ Email Us
                </a>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {config.benefits.map((benefit, i) => (
                  <div key={i} className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 mt-0.5">✓</span>
                      <p className="text-slate-300 text-sm">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-page py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {config.emoji} {config.title.split(' AI')[0]} Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored AI and IT services designed specifically for {config.title.split(' AI')[0].toLowerCase()} businesses
            </p>
          </div>

          {industryServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryServices.map((service: Service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group block bg-slate-900/60 border border-slate-700/50 rounded-xl p-5
                    hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="px-2 py-0.5 rounded-full bg-slate-800/50">
                          {service.category}
                        </span>
                        <span className="text-purple-400 font-medium">
                          Starting at {Object.values(service.pricing)[0] || 'Contact for Quote'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p>No specific services found for this industry yet.</p>
              <p className="mt-2">We're continuously adding industry-specific solutions.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-medium
                         hover:bg-purple-500 transition-all"
            >
              🛠️ Browse All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-y border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-violet-900/40 to-pink-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,50,200,0.3),transparent_50%)]" />
        <div className="relative container-page py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your {config.title.split(' AI')[0]} Business?
            </h3>
            <p className="text-slate-300 mb-6">
              Get a custom AI solution tailored to your {config.title.split(' AI')[0].toLowerCase()} needs. 
              Our experts will analyze your requirements and deliver a complete proposal within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                🚀 Get Your Custom Proposal
              </Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">
                ☎ +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
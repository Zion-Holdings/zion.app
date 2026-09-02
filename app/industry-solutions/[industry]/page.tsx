// app/industry-solutions/[industry]/page.tsx - Dynamic Industry Solutions Pages
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allServices, type Service } from '../../data/servicesData';

const INDUSTRY_DATA: Record<string, { 
  title: string; 
  description: string; 
  emoji: string; 
  category: string;
  services: string[];
  keyMetrics: string[];
  caseStudy?: string;
}> = {
  'healthcare': {
    title: 'Healthcare & Life Sciences',
    description: 'AI-powered solutions for patient care, medical data analysis, drug discovery, and healthcare operations.',
    emoji: '🏥',
    category: 'ai',
    services: ['ai-medical-diagnosis-assistant', 'ai-drug-discovery-platform', 'clinical-data-analytics', 'telemedicine-platform'],
    keyMetrics: ['99.9% diagnostic accuracy', '40% faster diagnosis', '$2M cost savings/year'],
    caseStudy: 'Reduced diagnosis time by 60% for regional hospital network'
  },
  'finance': {
    title: 'Financial Services & FinTech',
    description: 'Secure AI solutions for fraud detection, algorithmic trading, compliance, and digital banking.',
    emoji: '💳',
    category: 'security',
    services: ['ai-fraud-detection', 'regulatory-compliance-automation', 'algorithmic-trading-platform', 'risk-assessment-engine'],
    keyMetrics: ['99.9% fraud detection', '300% ROI', '80% compliance cost reduction'],
    caseStudy: 'Prevented $5M in fraud losses for fintech startup'
  },
  'retail': {
    title: 'Retail & E-Commerce',
    description: 'Personalized customer experiences, inventory optimization, dynamic pricing, and supply chain solutions.',
    emoji: '🛒',
    category: 'ai',
    services: ['ai-personalization-engine', 'inventory-optimization-ai', 'dynamic-pricing-platform', 'customer-churn-prediction'],
    keyMetrics: ['35% increase in CLV', '25% inventory cost reduction', '50% faster time-to-market'],
    caseStudy: 'Boosted revenue by 45% with personalized recommendations'
  },
  'manufacturing': {
    title: 'Manufacturing & Industrial',
    description: 'Digital twins, predictive maintenance, supply chain optimization, and quality inspection solutions.',
    emoji: '🏭',
    category: 'automation',
    services: ['predictive-maintenance-ai', 'digital-twin-platform', 'quality-inspection-vision', 'supply-chain-optimizer'],
    keyMetrics: ['45% downtime reduction', '30% efficiency gain', '$1.5M annual savings'],
    caseStudy: 'Reduced equipment downtime by 50% for automotive manufacturer'
  },
  'energy': {
    title: 'Energy & Utilities',
    description: 'Grid optimization, demand forecasting, renewable integration, and IoT monitoring for energy sector.',
    emoji: '⚡',
    category: 'data',
    services: ['grid-demand-forecasting', 'renewable-energy-optimizer', 'iot-energy-monitoring', 'asset-performance-management'],
    keyMetrics: ['25% energy cost reduction', '15% efficiency gain', '99.5% uptime'],
    caseStudy: 'Optimized grid performance across 5 utility networks'
  },
  'logistics': {
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, warehouse automation, fleet management, and last-mile delivery solutions.',
    emoji: '🚚',
    category: 'data',
    services: ['route-optimization-ai', 'warehouse-automation', 'fleet-management-ai', 'last-mile-delivery'],
    keyMetrics: ['20% delivery cost reduction', '35% faster delivery', '99.9% on-time rate'],
    caseStudy: 'Reduced delivery costs by 28% for national logistics provider'
  },
  'education': {
    title: 'Education & EdTech',
    description: 'Adaptive learning platforms, student analytics, content generation, and LMS solutions.',
    emoji: '🎓',
    category: 'ai',
    services: ['adaptive-learning-platform', 'student-analytics-ai', 'content-generation-ai', 'lms-intelligence'],
    keyMetrics: ['50% learning improvement', '30% time savings', '95% engagement rate'],
    caseStudy: 'Improved student outcomes by 40% in K-12 district'
  },
  'technology': {
    title: 'Technology & SaaS',
    description: 'DevOps, cloud migration, cybersecurity, AI/ML platforms, and software development solutions.',
    emoji: '💻',
    category: 'it',
    services: ['cloud-migration-platform', 'cybersecurity-suite', 'devops-automation', 'ai-ml-platform'],
    keyMetrics: ['60% faster deployment', '99.99% uptime', '40% infrastructure cost reduction'],
    caseStudy: 'Accelerated deployment by 3x for SaaS startup'
  },
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map((industry) => ({
    industry,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const data = INDUSTRY_DATA[industry];
  
  if (!data) {
    return {
      title: 'Industry Solutions | Zion Tech Group',
      description: 'AI and IT solutions for various industries',
    };
  }

  return {
    title: `${data.title} | Zion Tech Group`,
    description: data.description,
  };
}

export default async function IndustrySolutionPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const data = INDUSTRY_DATA[industry];

  if (!data) {
    notFound();
  }

  const industryServices = allServices.filter(
    (s: Service) => s.category === data.category && data.services.includes(s.id)
  );

  // Get all services for this category
  const categoryServices = allServices.filter((s: Service) => s.category === data.category);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative container-page py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> Live AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {data.emoji} {data.title}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {data.keyMetrics.map((metric, i) => (
                <div key={i} className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">✓</div>
                  <p className="text-sm text-slate-300">{metric}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Custom Solution →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      {data.caseStudy && (
        <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
          <div className="container-page">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Case Study</h2>
                <p className="text-slate-400">{data.caseStudy}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-heading">Recommended Solutions</h2>
            <p className="section-subheading">
              AI-powered services specifically designed for {data.title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryServices.slice(0, 6).map((service: Service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="glass-card flex flex-col h-full hover:border-purple-500/40 group transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs line-clamp-3 mb-4">{service.description}</p>
                <div className="mt-auto pt-3 border-t border-slate-700/40">
                  <span className="text-purple-300 text-xs font-semibold">
                    From {Object.values(service.pricing as Record<string, string>)[0] || 'Contact for Quote'}/mo
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/services/?category=${data.category}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View All {data.title} Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-purple-500/20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your {data.title}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our AI experts. Get a custom solution 
            tailored to your specific {data.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3">
              📞 Talk to an Expert
            </Link>
            <Link href="/dashboard" className="btn-secondary text-lg px-8 py-3">
              📊 View Live Agent Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
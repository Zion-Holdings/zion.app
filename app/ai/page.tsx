<<<<<<< HEAD
// app/ai/page.tsx - AI Services Hub (SEO Optimized)
import Link from 'next/link';
import { allServices } from '@/data/servicesData';
import { useMemo } from 'react';

const AI_SERVICES = [
  {
    id: 'ai-machine-learning-platform',
    title: 'Enterprise AI Machine Learning Platform',
    description: 'End-to-end machine learning platform for building, training, and deploying ML models at scale. Features automated feature engineering, model selection, and real-time inference.',
    category: 'AI Services',
    industry: 'Technology & SaaS',
    keywords: 'machine learning platform, enterprise ML, AI model deployment',
    roi: '40-60% reduction in model development time',
    stats: '10x faster deployment, 99.9% uptime'
  },
  {
    id: 'ai-nlp-chatbot',
    title: 'AI NLP Customer Service Chatbot',
    description: 'Natural language processing chatbot that understands customer queries and provides 24/7 support. Integrates with CRM, knowledge bases, and ticketing systems.',
    category: 'AI Services',
    industry: 'Customer Service',
    keywords: 'NLP chatbot, customer service AI, conversational AI',
    roi: '60-70% reduction in support tickets',
    stats: '95% accuracy, 24/7 availability'
  },
  {
    id: 'ai-computer-vision-quality',
    title: 'AI Computer Vision Quality Inspection',
    description: 'Automated visual quality inspection using computer vision. Detects defects, anomalies, and non-conformities in manufacturing processes with pixel-perfect accuracy.',
    category: 'AI Services',
    industry: 'Manufacturing',
    keywords: 'computer vision, quality inspection, manufacturing AI',
    roi: '50-80% reduction in quality costs',
    stats: '99.5% accuracy, real-time detection'
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance System',
    description: 'Predict equipment failures before they occur using machine learning. Reduces downtime, maintenance costs, and extends asset lifespan through intelligent forecasting.',
    category: 'AI Services',
    industry: 'Manufacturing & Industrial',
    keywords: 'predictive maintenance, industrial AI, equipment monitoring',
    roi: '30-50% reduction in maintenance costs',
    stats: '85% accuracy, 99.9% uptime'
  },
  {
    id: 'ai-fraud-detection',
    title: 'AI Fraud Detection & Prevention',
    description: 'Real-time fraud detection system that identifies suspicious transactions, patterns, and anomalies. Protects revenue and customer trust with adaptive learning.',
    category: 'Security Services',
    industry: 'Financial Services',
    keywords: 'fraud detection, AI security, financial crime prevention',
    roi: '70-90% reduction in fraud losses',
    stats: '99.9% detection rate, zero false positives'
  },
  {
    id: 'ai-data-analytics-platform',
    title: 'AI-Powered Data Analytics Platform',
    description: 'Transform raw data into actionable insights with our AI analytics platform. Features automated dashboards, anomaly detection, and predictive forecasting.',
    category: 'Data Analytics',
    industry: 'Business Intelligence',
    keywords: 'data analytics, AI business intelligence, predictive analytics',
    roi: '300% ROI on data initiatives',
    stats: '1000x faster insights, 95% accuracy'
  },
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation Engine',
    description: 'Generate high-quality marketing content, blog posts, social media, and copy at scale. Reduces content creation time by 90% while maintaining brand voice.',
    category: 'AI Services',
    industry: 'Marketing',
    keywords: 'AI content generation, marketing automation, copywriting AI',
    roi: '80% reduction in content costs',
    stats: '1000+ articles/day, 95% engagement'
  },
  {
    id: 'ai-drug-discovery',
    title: 'AI Drug Discovery & Molecular Design',
    description: 'Accelerate pharmaceutical research with AI-powered drug discovery. Predict molecular properties, design novel compounds, and reduce R&D costs by 40-60%.',
    category: 'AI Services',
    industry: 'Healthcare & Life Sciences',
    keywords: 'AI drug discovery, molecular design, pharmaceutical AI',
    roi: '50% faster drug discovery',
    stats: '1000x faster screening, 90% accuracy'
  },
  {
    id: 'ai-healthcare-diagnosis',
    title: 'AI Healthcare Diagnostic Assistant',
    description: 'AI-powered diagnostic support for healthcare professionals. Analyzes medical images, patient data, and medical history to assist in accurate diagnosis.',
    category: 'Healthcare',
    industry: 'Healthcare & Life Sciences',
    keywords: 'AI healthcare diagnosis, medical AI, diagnostic assistance',
    roi: '30% faster diagnosis',
    stats: '95% accuracy, 24/7 availability'
  },
  {
    id: 'ai-financial-planning',
    title: 'AI Financial Planning & Analysis',
    description: 'Automated financial planning and analysis platform. Uses machine learning to forecast revenue, optimize budgets, and identify cost-saving opportunities.',
    category: 'Financial Services',
    industry: 'Finance',
    keywords: 'AI financial planning, FP&A automation, financial forecasting',
    roi: '25% improvement in forecast accuracy',
    stats: '99% accuracy, real-time updates'
  }
];

export default function AIServicesHub() {
  const services = useMemo(() => {
    const all = [...AI_SERVICES, ...allServices.filter(s => s.category === 'ai')];
    return all.slice(0, 50);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'AI Services Hub - Zion Tech Group',
            'description': 'Explore our comprehensive catalog of AI services including machine learning, NLP, computer vision, predictive analytics, and more. Enterprise AI solutions for businesses of all sizes.',
            'url': 'https://ziontechgroup.com/ai/',
            'mainEntity': [
              {
                '@type': 'Service',
                'name': 'Enterprise AI Machine Learning Platform',
                'description': 'End-to-end machine learning platform for building, training, and deploying ML models at scale.',
                'industry': 'Technology',
                'category': 'AI Services',
                'offers': {
                  '@type': 'Offer',
                  'priceCurrency': 'USD',
                  'priceSpecification': {
                    '@type': 'UnitPriceSpecification',
                    'price': '799',
                    'unitText': 'monthly'
                  }
                }
              }
            ],
            'keywords': 'AI services, machine learning, natural language processing, computer vision, predictive analytics, enterprise AI'
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
              <span className="text-green-400">●</span> AI-Powered Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Enterprise AI Services
              </span>{' '}
              <span className="text-white">for Modern Businesses</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Deploy AI solutions that drive measurable ROI. From machine learning to computer vision, 
              fraud detection to healthcare AI — we build custom solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                🚀 Get Your Custom AI Solution →
              </Link>
              <Link href="/services?category=ai" className="btn-secondary text-lg px-10 py-4">
                📋 Browse All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured AI Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven AI services delivering 30-60% ROI improvements across industries.
              Each solution includes full implementation, training, and 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {AI_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}/`}
                className="group block rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 hover:border-purple-500/40 p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-xs text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full">
                    {service.roi.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-2">{service.description}</p>
                <div className="text-xs text-purple-400 font-medium">
                  {service.industry} • {service.stats}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services?category=ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View Full AI Catalog →
=======
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Cog, Search, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'AI Lab',
  description:
    'Explore Zion\'s AI Lab — interactive tools and configurators for autonomous AI solutions and architecture planning.',
};

const tools = [
  {
    name: 'Solutions Configurator',
    href: '/ai/solutions-configurator',
    description:
      'Tell us where you are, what you want to improve, and which systems you rely on. Get a deterministic, in-browser blueprint of how Zion\'s autonomous platform would be assembled for you.',
    icon: Cog,
  },
  {
    name: 'URL Audit Assistant',
    href: '/ai/url-audit-assistant',
    description:
      'Analyze URLs for SEO, content, and technical factors. Get actionable insights on how AI could optimize your web presence.',
    icon: Search,
  },
  {
    name: 'AI Readiness Assessment',
    href: '/ai/ai-readiness-assessment',
    description:
      'A free guided assessment of your automation, security, cloud, and AI maturity — with practical next steps from Zion Tech Group.',
    icon: BarChart3,
  },
];

export default function AILabPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            AI Lab
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools for Autonomous AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Interactive tools that show how Zion\'s autonomous agents can configure solutions,
            audit technical assets, and plan AI implementations — all computed in your browser.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              View Services
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                How Our AI Works
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { step: '01', title: 'Discovery', desc: 'AI agents analyze your business needs and identify automation opportunities' },
              { step: '02', title: 'Design', desc: 'Custom AI solution architecture built with best-in-class frameworks' },
              { step: '03', title: 'Deploy', desc: 'Production-ready AI services deployed with monitoring and support' },
              { step: '04', title: 'Optimize', desc: 'Continuous improvement with AI-driven insights and performance tuning' }
            ].map((item) => (
              <div key={item.step} className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-700">
                <div className="text-4xl font-bold text-purple-400 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">40-60%</div>
              <div className="text-slate-300 mb-2">Average ROI Improvement</div>
              <div className="text-slate-500 text-sm">Across all AI implementations</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-slate-300 mb-2">Uptime Guarantee</div>
              <div className="text-slate-500 text-sm">Enterprise-grade reliability</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300 mb-2">AI Operations</div>
              <div className="text-slate-500 text-sm">Continuous monitoring and optimization</div>
            </div>
          </div>

          <div className="text-center">
            <a href="tel:+130****0950" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
              ☎ +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </main>
=======
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:border-purple-400/70 hover:bg-slate-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15">
                <tool.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-200">
                {tool.name}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-300">{tool.description}</p>
              <div className="mt-4 inline-flex items-center text-xs font-medium text-purple-300">
                Try it now
                <ArrowRight className="ml-1 h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-indigo-900/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready for autonomous AI?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-200">
            Start with a discovery call to align your goals with the right apps, architecture, and delivery plan.
          </p>
          <Link
            href="/contact/"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
>>>>>>> d2b89cec39a2d0e2724bc7e817985633189a41c1
  );
}
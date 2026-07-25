// app/industry-solutions/page.tsx - Industry Solutions Overview Hub
import Link from 'next/link';

const INDUSTRY_SOLUTIONS = [
  {
    industry: 'healthcare',
    title: 'Healthcare & Life Sciences',
    emoji: '🏥',
    description: 'AI diagnostics, EHR integration, telemedicine, drug discovery, and patient outcome optimization.',
    services: 120,
    metrics: ['99.9% diagnostic accuracy', '40% faster diagnosis', '$2M cost savings/year'],
    gradient: 'from-emerald-500 to-teal-600',
    href: '/industry-solutions/healthcare',
  },
  {
    industry: 'finance',
    title: 'Financial Services & FinTech',
    emoji: '💳',
    description: 'Fraud detection, algorithmic trading, regulatory compliance, risk assessment, and digital banking.',
    services: 145,
    metrics: ['99.9% fraud detection', '$5M prevented losses', '80% compliance cost reduction'],
    gradient: 'from-blue-500 to-indigo-600',
    href: '/industry-solutions/finance',
  },
  {
    industry: 'retail',
    title: 'Retail & E-Commerce',
    emoji: '🛒',
    description: 'Personalized recommendations, inventory optimization, dynamic pricing, and omnichannel experiences.',
    services: 110,
    metrics: ['35% increase in CLV', '25% inventory cost reduction', '50% faster time-to-market'],
    gradient: 'from-pink-500 to-rose-600',
    href: '/industry-solutions/retail',
  },
  {
    industry: 'manufacturing',
    title: 'Manufacturing & Industrial',
    emoji: '🏭',
    description: 'Digital twins, predictive maintenance, quality inspection, and supply chain optimization.',
    services: 95,
    metrics: ['45% downtime reduction', '30% efficiency gain', '$1.5M annual savings'],
    gradient: 'from-yellow-500 to-amber-600',
    href: '/industry-solutions/manufacturing',
  },
  {
    industry: 'energy',
    title: 'Energy & Utilities',
    emoji: '⚡',
    description: 'Grid optimization, demand forecasting, renewable integration, and IoT monitoring.',
    services: 45,
    metrics: ['25% energy cost reduction', '15% efficiency gain', '99.5% uptime'],
    gradient: 'from-green-500 to-emerald-600',
    href: '/industry-solutions/energy',
  },
  {
    industry: 'logistics',
    title: 'Logistics & Supply Chain',
    emoji: '🚚',
    description: 'Route optimization, warehouse automation, fleet management, and last-mile delivery.',
    services: 85,
    metrics: ['20% delivery cost reduction', '35% faster delivery', '99.9% on-time rate'],
    gradient: 'from-cyan-500 to-blue-600',
    href: '/industry-solutions/logistics',
  },
  {
    industry: 'education',
    title: 'Education & EdTech',
    emoji: '🎓',
    description: 'Adaptive learning, student analytics, content generation, and LMS intelligence.',
    services: 55,
    metrics: ['50% learning improvement', '30% time savings', '95% engagement rate'],
    gradient: 'from-purple-500 to-violet-600',
    href: '/industry-solutions/education',
  },
  {
    industry: 'technology',
    title: 'Technology & SaaS',
    emoji: '💻',
    description: 'DevOps, cloud migration, cybersecurity, AI/ML platforms, and software development.',
    services: 200,
    metrics: ['60% faster deployment', '99.99% uptime', '40% infrastructure cost reduction'],
    gradient: 'from-violet-500 to-fuchsia-600',
    href: '/industry-solutions/technology',
  },
];

export const metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'AI and IT solutions tailored for healthcare, finance, retail, manufacturing, energy, logistics, education, and technology sectors.',
};

export default function IndustrySolutionsPage() {
  const totalServices = INDUSTRY_SOLUTIONS.reduce((sum, ind) => sum + ind.services, 0);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-purple-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative container-page py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> Live Industry Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry-Specific AI Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Over <strong className="text-white">{totalServices}+</strong> AI-powered services across <strong className="text-white">8 industries</strong> — 
              built for measurable outcomes in your specific domain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary text-lg px-10 py-4">
                🛠️ Browse All {totalServices}+ Services
              </Link>
              <Link href="/industry-solutions/healthcare" className="btn-secondary text-lg px-10 py-4">
                🏥 See Healthcare Solutions
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
              AI solutions specifically designed for your industry's unique challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SOLUTIONS.map((ind) => (
              <Link
                key={ind.industry}
                href={ind.href}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/60 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{ind.emoji}</span>
                    <span className="text-xs text-slate-500 bg-slate-800/60 px-2 py-1 rounded-full">
                      {ind.services}+ services
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{ind.description}</p>
                  
                  {/* Metrics */}
                  <div className="space-y-1 mb-4">
                    {ind.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className="text-green-400">✓</span>
                        <span className="text-slate-500">{metric}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`h-1.5 rounded-full overflow-hidden bg-slate-800`}>
                    <div
                      className="h-full rounded-full transition-all duration-300 group-hover:opacity-80"
                      style={{
                        background: `linear-gradient(90deg, ${ind.gradient.replace('from-', '').split(' ')[0]}, ${ind.gradient.split(' ').pop() || ind.gradient})`,
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <span className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors">
                    View Solutions →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-heading">How Our Industry Solutions Work</h2>
            <p className="section-subheading">
              Get from discovery to deployment in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Industry Assessment',
                desc: 'Our AI analyzes your specific industry challenges and requirements.',
              },
              {
                num: '02',
                title: 'Solution Matching',
                desc: `We match you with the best-fit services from ${totalServices}+ options.`,
              },
              {
                num: '03',
                title: 'Custom Proposal',
                desc: 'Receive a detailed proposal with ROI projections and timeline.',
              },
              {
                num: '04',
                title: 'Deploy & Scale',
                desc: 'We implement, monitor, and optimize for maximum business impact.',
              },
            ].map((step, i) => (
              <div key={i} className="glass-card text-center hover:border-purple-500/40">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Industry-Specific Solutions?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our AI agents work 24/7 to research, build, and deploy industry-specific solutions. 
            Get a free consultation and see how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3">
              📞 Get Free Consultation
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
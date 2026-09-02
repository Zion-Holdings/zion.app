
import Link from 'next/link';

export const metadata = {
  title: 'AI & IT Solutions for Technology & SaaS Companies | Zion Tech Group',
  description: 'AI automation, DevOps, cloud optimization, and security solutions for technology companies and SaaS providers. Reduce costs, improve reliability, and scale faster.',
  keywords: 'technology SaaS, AI for tech companies, DevOps automation, cloud cost optimization, SaaS infrastructure, software development AI',
  alternates: { canonical: '/industries/technology-saas' },
};

const SERVICES = [
  {
    title: 'AI-Driven DevOps Platform',
    slug: '/services/ai-devops-platform',
    description: 'Automated CI/CD, infrastructure as code, and deployment orchestration powered by AI agents. Reduce deployment failures by 40% and ship features faster.',
    icon: '⚙️',
    category: 'devops',
    ROI: '50% faster deployments'
  },
  {
    title: 'Cloud Cost Optimization Platform',
    slug: '/services/cloud-cost-optimization-platform',
    description: 'AI-powered FinOps solution that identifies waste, recommends reserved instances, and automates rightsizing. Save 20-35% on cloud spend without performance loss.',
    icon: '☁️',
    category: 'cloud',
    ROI: '$420K/year savings'
  },
  {
    title: 'AI Knowledge Base & RAG Platform',
    slug: '/services/ai-knowledge-base-rag-platform',
    description: 'Internal knowledge management with source-cited answers, automated documentation, and AI-powered search. 80% faster onboarding for new engineers.',
    icon: '📚',
    category: 'ai',
    ROI: '80% faster onboarding'
  },
  {
    title: 'Automated Incident Response',
    slug: '/services/automated-incident-response',
    description: 'AI triage, root cause analysis, and automated remediation for production incidents. Reduce MTTR from hours to minutes with intelligent automation.',
    icon: '🛡️',
    category: 'security',
    ROI: '99% faster containment'
  },
  {
    title: 'SaaS Customer Success Automation',
    slug: '/services/saas-customer-success-automation',
    description: 'AI-powered health scoring, churn prediction, and automated engagement workflows. Increase retention by 30% and reduce manual outreach by 70%.',
    icon: '📈',
    category: 'automation',
    ROI: '30% retention increase'
  },
  {
    title: 'API & Integration Automation',
    slug: '/services/api-integration-automation',
    description: 'Automated API gateway management, webhook handling, and third-party integrations. Build integration pipelines 5x faster with AI-assisted development.',
    icon: '🔗',
    category: 'automation',
    ROI: '5x faster integration'
  },
];

export default function TechnologySaaSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-Optimized Tech Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Technology & SaaS
              </span>{' '}
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI automation, cloud optimization, and DevOps platforms built for technology companies. 
              Scale infrastructure, reduce costs, and ship features faster with autonomous AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Custom Recommendations →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse All Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400 mb-1">⚡ 50%</div>
                <div className="text-sm text-slate-400">Faster Deployments</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">$420K+</div>
                <div className="text-sm text-slate-400">Annual Cloud Savings</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">80%</div>
                <div className="text-sm text-slate-400">Faster Onboarding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge-Focused Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Key Challenges We Solve
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Technology companies face unique challenges in scaling infrastructure, managing cloud costs, 
              and maintaining reliability while shipping features faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-purple-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              View Full Service Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology-Specific CTA */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Transform Your Tech Stack?
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Our AI agents work 24/7 to monitor, optimize, and improve your technology infrastructure. 
            Start with a free consultation and get a custom roadmap for your technology organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
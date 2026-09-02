
import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Legal & Compliance | Zion Tech Group',
  description: 'AI contract analysis, legal document automation, compliance monitoring, and regulatory technology for law firms and compliance teams.',
  keywords: 'legal AI, contract automation, compliance AI, legal tech, document review, regulatory technology',
  alternates: { canonical: '/industries/legal-compliance' },
};

const SERVICES = [
  {
    title: 'AI Contract Analyzer',
    slug: '/services/ai-contract-analyzer',
    description: 'AI-powered contract review and analysis. Automatically extracts key terms, flags risky clauses, compares against templates, and generates summary reports.',
    icon: '📄',
    category: 'ai',
    ROI: '80% faster review'
  },
  {
    title: 'AI Legal Document Processing',
    slug: '/services/ai-document-processing',
    description: 'Automate invoice processing, contract management, and legal document workflows. AI extracts data, validates terms, and routes to appropriate stakeholders.',
    icon: '📑',
    category: 'ai',
    ROI: '95% reduction in manual entry'
  },
  {
    title: 'Regulatory Compliance Automation',
    slug: '/services/compliance-automation',
    description: 'Automated compliance monitoring for SOX, GDPR, CCPA, HIPAA, and other regulations. AI-driven alerts and remediation workflows ensure continuous compliance.',
    icon: '🔐',
    category: 'security',
    ROI: '90% compliance coverage'
  },
  {
    title: 'AI Legal Research Assistant',
    slug: '/services/ai-legal-research',
    description: 'AI-powered legal research with case law analysis, precedent identification, and regulatory update tracking. Never miss a relevant case or regulation.',
    icon: '🔍',
    category: 'ai',
    ROI: 'Instant research'
  },
  {
    title: 'E-Discovery & Document Review AI',
    slug: '/services/ai-ediscovery',
    description: 'AI-powered e-discovery for litigation support. Automatically review thousands of documents, identify key evidence, and reduce review costs by 70%.',
    icon: '🕵️',
    category: 'ai',
    ROI: '70% cost reduction'
  },
  {
    title: 'Compliance Risk Assessment AI',
    slug: '/services/compliance-risk-assessment',
    description: 'AI-driven compliance risk scoring, gap analysis, and remediation planning. Proactive compliance management with automated reporting.',
    icon: '📊',
    category: 'data',
    ROI: 'Proactive compliance'
  },
];

export default function LegalCompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI LEGAL & COMPLIANCE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-violet-400 bg-clip-text text-transparent">
                Legal & Compliance
              </span>{' '}
              <span className="text-white">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI contract analysis, legal document automation, compliance monitoring, and regulatory technology 
              for law firms and compliance teams. Transform legal operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Compliance Assessment →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Legal Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400 mb-1">80%</div>
                <div className="text-sm text-slate-400">Faster Contract Review</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">90%</div>
                <div className="text-sm text-slate-400">Compliance Coverage</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">70%</div>
                <div className="text-sm text-slate-400">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                AI-Powered Legal Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Automate contract review, legal research, and compliance monitoring with AI agents working 24/7.
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
              View All Legal Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Smarter Legal Operations
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free compliance readiness assessment from our AI agents. 
            Discover how AI can reduce your legal costs and improve compliance efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Legal AI Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';

export const metadata = {
  title: 'AI & IT Solutions for Financial Services & FinTech | Zion Tech Group',
  description: 'AI fraud detection, compliance automation, secure cloud infrastructure, and financial data analytics for banks, fintech, and financial institutions.',
  keywords: 'financial services AI, fintech automation, AI fraud detection, financial data analytics, compliance automation, secure cloud financial',
  alternates: { canonical: '/industries/financial-services-fintech' },
};

const SERVICES = [
  {
    title: 'AI Fraud Detection & Payment Intelligence',
    slug: '/services/ai-fraud-detection',
    description: 'Real-time fraud detection using machine learning, anomaly detection, and behavioral analysis. Prevent payment fraud before it happens with 99.9% accuracy.',
    icon: '🛡️',
    category: 'ai',
    ROI: '99.9% fraud detection'
  },
  {
    title: 'AI-Powered Contract Review & Analysis',
    slug: '/services/ai-contract-analyzer',
    description: 'Automated contract analysis with risk scoring, clause extraction, and compliance verification. Review 1000s of contracts in minutes instead of weeks.',
    icon: '📄',
    category: 'ai',
    ROI: '80% faster review'
  },
  {
    title: 'Secure Cloud Financial Infrastructure',
    slug: '/services/cloud-financial-infrastructure',
    description: 'HIPAA-compliant, SOC 2-ready cloud infrastructure for financial data. Automated compliance monitoring and audit-ready logging.',
    icon: '☁️',
    category: 'cloud',
    ROI: 'SOC 2 compliant'
  },
  {
    title: 'AI Financial Data Analytics',
    slug: '/services/ai-financial-analytics',
    description: 'Predictive analytics for risk assessment, customer behavior, and market trends. Real-time dashboards with automated anomaly detection.',
    icon: '📊',
    category: 'data',
    ROI: '30% better predictions'
  },
  {
    title: 'Regulatory Compliance Automation',
    slug: '/services/compliance-automation',
    description: 'Automated compliance monitoring for SOX, PCI-DSS, GDPR, and other regulations. AI-driven compliance alerts and remediation workflows.',
    icon: '🔐',
    category: 'security',
    ROI: '90% compliance coverage'
  },
  {
    title: 'AI Customer Experience for Banking',
    slug: '/services/ai-banking-customer-experience',
    description: 'AI-powered virtual banking assistants, personalized financial recommendations, and automated customer support. Increase satisfaction by 40%.',
    icon: '💳',
    category: 'ai',
    ROI: '40% satisfaction increase'
  },
];

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
            <span className="text-green-400">●</span> SECURE AI FINANCIAL SOLUTIONS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
              Financial Services & FinTech
            </span>{' '}
            <span className="text-white">AI Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            AI fraud detection, compliance automation, and secure financial data platforms for banks, 
            fintech companies, and financial institutions. Reduce risk and accelerate innovation securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              ⚡ Get Compliance Assessment →
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">
              🛠️ Browse Financial Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400 mb-1">99.9%</div>
              <div className="text-sm text-slate-400">Fraud Detection Accuracy</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400 mb-1">80%</div>
              <div className="text-sm text-slate-400">Faster Contract Review</div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">90%</div>
              <div className="text-sm text-slate-400">Compliance Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Financial Industry Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Modern financial institutions need AI-powered solutions that balance innovation with security, 
              compliance, and risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-emerald-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 transition-all"
            >
              View All Financial Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Compliance CTA */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              Secure Innovation Starts Here
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free security assessment and compliance review from our AI agents. 
            We ensure your financial technology solutions are secure, compliant, and ready for production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Security Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
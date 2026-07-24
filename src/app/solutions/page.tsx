import Link from 'next/link';

const solutions = [
  {
    title: 'AI-Powered Business Transformation',
    description: 'End-to-end AI integration for enterprises — from strategy and data readiness to production ML systems, LLM deployment, and autonomous agent orchestration.',
    icon: '🤖',
    services: ['AI Strategy & Roadmap', 'LLM Fine-tuning & RAG', 'MLOps & Model Monitoring', 'AI Governance & Compliance'],
    href: '/services?category=ai',
  },
  {
    title: 'Cloud-Native Infrastructure',
    description: 'Design, migrate, and optimize cloud infrastructure on AWS, Azure, and GCP. Kubernetes, serverless, and multi-cloud strategies that reduce costs by 40%.',
    icon: '☁️',
    services: ['Cloud Migration & Modernization', 'Kubernetes & Containerization', 'Infrastructure as Code', 'FinOps & Cost Optimization'],
    href: '/services?category=cloud',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'Protect your organization with defense-in-depth security architecture, threat detection, incident response, and compliance automation.',
    icon: '🔒',
    services: ['Penetration Testing & Red Teaming', 'SIEM & Threat Detection', 'Identity & Access Management', 'Compliance Automation (SOC2, HIPAA, GDPR)'],
    href: '/services?category=security',
  },
  {
    title: 'Data Intelligence & Analytics',
    description: 'Transform raw data into actionable intelligence with modern data platforms, real-time analytics, and AI-powered insights.',
    icon: '📊',
    services: ['Data Lake & Warehouse Engineering', 'Real-time Streaming Analytics', 'BI Dashboards & Reporting', 'AI-Powered Predictive Analytics'],
    href: '/services?category=data',
  },
  {
    title: 'Intelligent Process Automation',
    description: 'Automate repetitive business processes with AI-powered RPA, document understanding, and autonomous workflow orchestration.',
    icon: '⚡',
    services: ['Robotic Process Automation (RPA)', 'Document AI & OCR', 'Intelligent Workflow Orchestration', 'Conversational AI & Chatbots'],
    href: '/services?category=automation',
  },
  {
    title: 'Enterprise IT Modernization',
    description: 'Modernize legacy systems, implement DevOps practices, and build resilient IT infrastructure that scales with your business.',
    icon: '🖥️',
    services: ['Legacy System Modernization', 'DevOps & CI/CD Implementation', 'IT Service Management', 'Network & Infrastructure Design'],
    href: '/services?category=it',
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Enterprise Solutions
        </h1>
        <p className="text-slate-400 mb-10 max-w-2xl">
          Comprehensive technology solutions designed to transform your business. Each solution combines multiple services into an integrated delivery approach.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((sol, i) => (
            <Link key={i} href={sol.href} className="group rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:border-purple-500/40 hover:bg-slate-800/60">
              <div className="text-4xl mb-3">{sol.icon}</div>
              <h2 className="text-xl font-semibold text-slate-100 group-hover:text-purple-300 transition-colors mb-2">{sol.title}</h2>
              <p className="text-sm text-slate-400 mb-4">{sol.description}</p>
              <div className="flex flex-wrap gap-2">
                {sol.services.map((s, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300">{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-6">Get a free consultation with our solutions architects.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
              📧 kleber@ziontechgroup.com
            </a>
            <a href="tel:+13024640950" className="px-6 py-3 rounded-full border border-purple-500/50 text-sm font-semibold text-purple-300 hover:bg-purple-500/10 transition-all">
              📞 +1 302 464 0950
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}

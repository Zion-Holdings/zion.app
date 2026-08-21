import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Tools & Skills Marketplace | 350+ Pre-Built Tools',
  description:
    'Browse 350+ pre-built Hermes agent tools and skills. Deploy agents with battle-tested capabilities across messaging, DevOps, SEO, security, data, CRM, and 20+ industries.',
  keywords: [
    'Hermes Agent tools',
    'AI agent skills',
    'tools marketplace',
    'agent capabilities',
    'pre-built tools',
    'Hermes Agent plugins',
  ],
  openGraph: {
    title: 'Hermes Agent Tools & Skills Marketplace | Zion Tech Group',
    description: '350+ pre-built Hermes tools and skills. Deploy agents with capabilities across 20+ categories.',
    url: 'https://ziontechgroup.com/hermes-tools/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-tools/' },
};

const TOOL_CATEGORIES = [
  {
    name: 'Messaging & Communication',
    icon: '✈️',
    desc: 'Telegram, Discord, Slack, WhatsApp, Signal, Email bots and integrations',
    tools: ['Telegram Bot Builder', 'Discord Command Builder', 'Slack Bot Toolkit', 'WhatsApp Automation', 'Signal Bridge', 'Email Responder'],
  },
  {
    name: 'DevOps & CI/CD',
    icon: '🔄',
    desc: 'Pipeline monitoring, build optimization, deployment automation',
    tools: ['CI/CD Pipeline Monitor', 'Build Optimizer', 'Deployment Orchestrator', 'K8s Auto-Healer', 'Infrastructure Monitor', 'GitHub Actions Toolkit'],
  },
  {
    name: 'Security & Compliance',
    icon: '🛡️',
    desc: 'Vulnerability scaning, pen testing, compliance checks',
    tools: ['Security Incident Responder', 'Vulnerability Scanner', 'OWASP Compliance Checker', 'Pen Test Assistant', 'Security Header Auditor', 'Dependency Auditor'],
  },
  {
    name: 'Data & Analytics',
    icon: '📊',
    desc: 'Pipeline orchestration, BI reporting, ML monitoring',
    tools: ['Data Pipeline Orchestrator', 'BI Dashboard Builder', 'ML Model Monitor', 'Vector DB Indexer', 'Data Quality Validator', 'Analytics Reporter'],
  },
  {
    name: 'SEO & Content',
    icon: '📈',
    desc: 'SEO optimization, content generation, sitemap management',
    tools: ['Content Generator', 'SEO Auditor', 'Sitemap Builder', 'Keyword Researcher', 'Link Builder', 'Page Speed Optimizer'],
  },
  {
    name: 'CRM & Sales',
    icon: '💰',
    desc: 'Lead scoring, outreach automation, customer success',
    tools: ['Lead Scoring Engine', 'Outreach Email Generator', 'Follow-up Scheduler', 'Calendly Integrator', 'Hot Lead Detector', 'CRM Sync Agent'],
  },
  {
    name: 'Customer Support',
    icon: '📞',
    desc: 'Ticket resolution, knowledge base, multi-channel support',
    tools: ['Ticket Resolver', 'Knowledge Base Agent', 'Sentiment Analyzer', 'Chatbot Builder', 'Escalation Manager', 'FAQ Auto-updater'],
  },
  {
    name: 'Research & Intelligence',
    icon: '🔬',
    desc: 'Web research, competitor monitoring, market analysis',
    tools: ['arxiv Researcher', 'Competitor News Monitor', 'Market Trend Analyzer', 'Technical Researcher', 'Citation Grounder', 'Report Synthesizer'],
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    desc: 'Clinical workflows, medical coding, telehealth support',
    tools: ['Prior Auth Coordinator', 'Patient Recruiter', 'Medical Coding Assistant', 'Telehealth Scheduler', 'Claims Processor', 'Compliance Tracker'],
  },
  {
    name: 'Finance & Accounting',
    icon: '💳',
    desc: 'Fraud detection, treasury, regtech, payment automation',
    tools: ['Fraud Detector', 'Payment Reconciler', 'Treasury Manager', 'RegTech Auditor', 'Invoice Processor', 'Financial Analyst'],
  },
  {
    name: 'Education & EdTech',
    icon: '📚',
    desc: 'Content creation, student success, curriculum development',
    tools: ['Curriculum Generator', 'Student Success Monitor', 'Course Builder', 'Assessment Creator', 'Learning Path Designer', 'Tutor Assistant'],
  },
  {
    name: 'Real Estate',
    icon: '🏠',
    desc: 'Property valuation, management automation, market analysis',
    tools: ['Property Valuator', 'Lease Closer', 'Tour Scheduler', 'Market Analyzer', 'Tenant Screening', 'Maintenance Manager'],
  },
  {
    name: 'Legal & Compliance',
    icon: '⚖️',
    desc: 'Contract review, legal research, compliance monitoring',
    tools: ['Contract Analyzer', 'Legal Researcher', 'eDiscovery Assistant', 'Compliance Monitor', 'Clause Extractor', 'Risk Assessor'],
  },
  {
    name: 'Manufacturing & Industrial',
    icon: '🏭',
    desc: 'Predictive maintenance, quality control, supply chain',
    tools: ['Predictive Maintenance', 'Quality Control Inspector', 'Supply Chain Monitor', 'Production Optimizer', 'Safety Auditor', 'Inventory Manager'],
  },
  {
    name: 'Retail & E-commerce',
    icon: '🛍️',
    desc: 'Recommendations, inventory, pricing, customer experience',
    tools: ['Recommendation Engine', 'Inventory Optimizer', 'Dynamic Pricer', 'Return Processor', 'Customer Experience Bot', 'Demand Forecaster'],
  },
  {
    name: 'HR & Recruitment',
    icon: '👥',
    desc: 'Recruiting, onboarding, performance, payroll',
    tools: ['Candidate Sourcer', 'Interview Scheduler', 'Onboarding Assistant', 'Performance Reviewer', 'Payroll Bot', 'Culture Fit Analyzer'],
  },
  {
    name: 'Energy & Utilities',
    icon: '⚡',
    desc: 'Trading, grid optimization, ESG reporting, sustainability',
    tools: ['Grid Optimizer', 'ESG Reporter', 'Energy Trader', 'Sustainability Tracker', 'Demand Forecaster', 'Renewable Manager'],
  },
  {
    name: 'IT & Infrastructure',
    icon: '🛠️',
    desc: 'System monitoring, network automation, endpoint management',
    tools: ['System Monitor', 'Network Automator', 'Endpoint Manager', 'Log Analyzer', 'Patch Deployer', 'Service Desk Bot'],
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many Hermes tools and skills are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hermes ships with 350+ built-in skills across 18 tool categories. The skills system is open and extensible — you can write custom skills in minutes and the Curator manages their lifecycle automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I write custom tools for Hermes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Hermes has a plugin SDK for adding Python tools in 3 files, desktop plugins for UI panes, and MCP server support for 6,000+ available integrations.',
      },
    },
  ],
};

export default function HermesToolsPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes Agent Tools & Skills Marketplace"
        subtitle="Browse 350+ pre-built tools and skills. Deploy agents with capabilities across 18 categories — messaging, DevOps, security, data, CRM, and more."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Tools & Skills' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'Live Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        <div className="space-y-16">
          {/* Stats */}
          <section className="text-center py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-purple-400">350+</div>
                <div className="text-sm text-slate-400">Skills Installed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">18</div>
                <div className="text-sm text-slate-400">Tool Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">20+</div>
                <div className="text-sm text-slate-400">Platform Integrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">10K+</div>
                <div className="text-sm text-slate-400">Community Plugins</div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">18 Tool Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOL_CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="border border-slate-800 rounded-xl p-6 bg-slate-900/40 hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{cat.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.tools.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-slate-800/60 text-slate-300 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {cat.tools.length > 3 && (
                      <span className="text-xs text-slate-500">+{cat.tools.length - 3} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How Skills Work */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">How the Skills System Works</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="text-2xl">1️⃣</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Skill Discovery</h3>
                  <p className="text-slate-400 text-sm">
                    Hermes loads relevant skills before each session via skill name or category prefix.
                    Use <code className="bg-slate-800/60 px-1 rounded">hermes skills browse</code> to discover 350+ built-in skills.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-2xl">2️⃣</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Execution with Context</h3>
                  <p className="text-slate-400 text-sm">
                    Skills provide trigger conditions, numbered steps, and pitfalls — encoding proven workflows
                    so agents start each session already knowing your preferred approaches.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-2xl">3️⃣</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Self-Improvement</h3>
                  <p className="text-slate-400 text-sm">
                    When Hermes solves a complex problem, it saves the procedure as a new skill. The background
                    Curator tracks usage, archives stale skills, and keeps backups so knowledge compounds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Tool?</h2>
            <p className="text-slate-300 mb-6">
              We build custom skills and plugins for your specific workflows. From MCP server integration
              to desktop UI panes, we extend Hermes to fit your exact needs.
            </p>
            <a
              href="/contact/?service=hermes-custom-tool"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
            >
              Request a Custom Skill →
            </a>
          </section>
        </div>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}

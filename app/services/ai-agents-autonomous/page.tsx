import { Metadata } from 'next'
import Link from 'next/link'

const LEGACY_ROUTE = {
  id: 'ai-agents-autonomous',
  title: 'AI Agents & Autonomous Workflows',
  description: 'Deploy autonomous AI agents that reason, plan, and act. Multi-step task execution, tool use, and human-in-the-loop controls for enterprise automation.',
  category: 'AI',
  industry: 'Enterprise AI Automation',
  features: [
    'Reasoning & Planning',
    'Tool & API Integration',
    'Multi-Agent Orchestration',
    'Human-in-the-Loop',
    'Memory & Context',
    'Observability & Safety',
  ],
  benefits: [
    'Reduce costs by automating workflows with autonomous agents',
    'Improve operational consistency and execution speed',
    'Scale operations without proportional headcount growth',
    'Enterprise-grade reliability with guidance controls',
  ],
  pricing: {
    basic: '$149/mo',
    pro: '$449/mo',
    enterprise: '$1,499/mo',
  },
  contactInfo: {
    website: '/services/ai-agents-autonomous',
    email: 'commercial@ziontechgroup.com',
    phone: '+1 302 464 0950',
  },
  icon: '🤖',
  href: '/services/ai-agents-autonomous',
};

export const metadata: Metadata = {
  title: `${LEGACY_ROUTE.title} | Zion Tech Group`,
  description: LEGACY_ROUTE.description,
};

export default function LegacyAiAgentsAutonomousPage() {
  const sr = LEGACY_ROUTE
  const pricingTiers = Object.entries(sr.pricing)

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services" className="text-purple-400 hover:underline text-sm mb-6 inline-block">
          ← Back to Services
        </Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{sr.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{sr.title}</h1>
              <p className="text-slate-400 text-sm mt-1">
                {sr.category} • {sr.industry}
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">{sr.description}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                {sr.features.map((f, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                {sr.benefits.map((b, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">
              Starting at {pricingTiers[0]?.[1] || 'Contact for Quote'}
            </span>
            <a
              href={`mailto:${sr.contactInfo.email}?subject=${encodeURIComponent(sr.title)}`}
              className="btn-primary"
            >
              Contact Us
            </a>
            <a href={sr.contactInfo.website} className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">
              Visit Service Site →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

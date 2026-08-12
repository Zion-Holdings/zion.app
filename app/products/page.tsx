import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Products | Zion Tech Group',
  description:
    'Explore Zion Tech Group AI products: Autonomous Conversion Copilot, Incident Commander, Retention Playbook, Growth Intelligence, and more.',
  alternates: { canonical: 'https://ziontechgroup.com/products/' },
};

const PRODUCTS = [
  {
    name: 'Autonomous Conversion Copilot',
    tagline: 'Real-time AI-powered conversion optimization',
    description:
      'Deploy adaptive AI agents that optimize conversion funnels in real-time. Reduces bounce rates by up to 42% with no manual tuning.',
    href: '/products/autonomous-conversion-copilot',
    emoji: '🚀',
  },
  {
    name: 'Autonomous Incident Commander',
    tagline: 'AI-driven incident response and remediation',
    description:
      'Detect, diagnose, and resolve production incidents automatically. Integrates with Slack, PagerDuty, and your CI/CD pipeline.',
    href: '/products/autonomous-incident-commander',
    emoji: '🛡️',
  },
  {
    name: 'Autonomous Retention Playbook',
    tagline: 'Predictive customer retention automation',
    description:
      'Identify churn risk signals before they become cancellations and trigger personalized retention campaigns automatically.',
    href: '/products/autonomous-retention-playbook',
    emoji: '📈',
  },
  {
    name: 'Autonomous Growth Intelligence',
    tagline: 'End-to-end growth orchestration platform',
    description:
      'Orchestrate growth across channels with AI-driven insights, automated A/B testing, and closed-loop feedback.',
    href: '/products/autonomous-growth-intelligence',
    emoji: '📊',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            AI-Powered Products
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Autonomous AI Products
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Built for enterprise teams who need AI that works today — not research projects
            that never ship. Each product includes deployment support and a success guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="bg-slate-900/60 border border-slate-800 rounded-xl p-8">
              <div className="text-4xl mb-4">{product.emoji}</div>
              <h2 className="text-xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-sm text-purple-400 font-medium mb-3">{product.tagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{product.description}</p>
              <Link
                href={product.href}
                className="text-purple-400 hover:text-purple-300 font-medium text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Custom AI Product?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Building custom AI solutions on top of our platform products? We offer
            white-label licensing and co-development partnerships.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Start a Product Engagement →
          </Link>
        </div>
      </div>
    </main>
  );
}

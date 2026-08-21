import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Pricing — From $499/mo | Zion Tech Group',
  description:
    'Hermes Agent pricing for autonomous AI fleets. Starter $499/mo, Professional $1,999/mo, Enterprise custom. Includes skills, monitoring, and 20+ platform gateway.',
  keywords: [
    'Hermes Agent pricing',
    'AI agent cost',
    'agent fleet pricing',
    'autonomous automation',
    'multi-agent systems',
    'Nous Research',
  ],
  openGraph: {
    title: 'Hermes Agent Pricing — From $499/mo | Zion Tech Group',
    description: 'Transparent pricing for Hermes AI agent fleets. Self-improving, persistent memory, 20+ platform gateway.',
    url: 'https://ziontechgroup.com/hermes-pricing/',
    type: 'website',
  },
  alternates: { canonical: '/hermes-pricing/' },
};

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'For small teams building their first autonomous agents.',
    features: [
      'Up to 5 agents',
      '500 tasks/day',
      '5 platform integrations',
      'Basic observability',
      'Standard support (24h)',
      '50+ pre-built skills',
    ],
    cta: 'Get Started',
    href: '/contact/?service=hermes-starter',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$1,999',
    period: '/month',
    description: 'For production workloads and multi-agent systems.',
    features: [
      'Unlimited agents',
      '50,000 tasks/day',
      '20 platform integrations',
      'Full observability & tracing',
      'Human review gates',
      '100+ pre-built skills',
      'Priority support (4h)',
      'Model provider rotation',
    ],
    cta: 'Start Free Trial',
    href: '/contact/?service=hermes-pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Self-hosted or hybrid deployment with dedicated support and SLA.',
    features: [
      'Unlimited agents & tasks',
      'SLA guarantee (99.99%)',
      'Custom integrations',
      'On-premises deployment',
      'Dedicated CTO & strategist',
      'Training & onboarding',
      'Compliance audit & reporting',
      '24/7 phone support',
    ],
    cta: 'Talk to Sales',
    href: '/contact/?service=hermes-enterprise',
    popular: false,
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do I get with each Hermes Agent plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'All plans include the full Hermes Agent platform with skills system, persistent memory, multi-provider support, and 20+ platform gateway. Higher tiers add agent count, task volume, integrations, observability, and support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I start with a free plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hermes Agent is open-source and free to install. Our paid plans cover managed deployment, monitoring, and ongoing optimization of your agent fleet. Contact us for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Starter and Professional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Starter is designed for small teams or proof-of-concepts (5 agents, 500 tasks/day). Professional is for production workloads with unlimited agents, 50,000 daily tasks, full observability, and human review gates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer enterprise discounts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Enterprise pricing is custom and includes dedicated support, SLA guarantees, and on-premises deployment options. Contact our sales team for a tailored quote.',
      },
    },
  ],
};

export default function HermesPricingPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <StandardPage
        title="Hermes Agent Pricing"
        subtitle="Transparent pricing for autonomous AI agent fleets. Self-improving agents with persistent memory, 20+ platform gateway, and full observability."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hermes Agents', href: '/hermes-agents/' },
          { label: 'Pricing' },
        ]}
        actions={[
          { label: 'Book a Consultation', href: 'https://calendly.com/kleber-ziontechgroup/consultation', style: 'primary' },
          { label: 'Live Dashboard', href: '/agents-monitoring/', style: 'secondary' },
        ]}
      >
        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`border rounded-2xl p-8 flex flex-col transition-all ${
                  plan.popular
                    ? 'border-purple-500/50 bg-slate-900/60 shadow-xl shadow-purple-500/10'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-semibold text-white rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-1">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-purple-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="block text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Everything Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-white font-semibold mb-2">Skills System</h3>
              <p className="text-slate-400 text-sm">350+ built-in skills. Self-improving agents save new skills after solving problems.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">☁️</div>
              <h3 className="text-white font-semibold mb-2">Multi-Provider</h3>
              <p className="text-slate-400 text-sm">20+ LLM providers. Swap models mid-workflow. Automatic failover.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">✈️</div>
              <h3 className="text-white font-semibold mb-2">20+ Platform Gateway</h3>
              <p className="text-slate-400 text-sm">Telegram, Discord, Slack, WhatsApp, Signal, Email, and more.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">Observability</h3>
              <p className="text-slate-400 text-sm">Full trace logs, metrics, and replayable execution graphs.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">Enterprise Guardrails</h3>
              <p className="text-slate-400 text-sm">Policy enforcement, rate limiting, human-in-the-loop checkpoints.</p>
            </div>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-white font-semibold mb-2">Persistent Memory</h3>
              <p className="text-slate-400 text-sm">Cross-session, cross-platform memory that accumulates over time.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-indigo-600/20 border border-purple-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy Your Agent Fleet?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Start with a single agent. Scale to hundreds. We handle the infrastructure while your agents do the work.
          </p>
          <Link
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
          >
            Book a free consultation →
          </Link>
        </section>
      </StandardPage>
      <HermesAdvertBanner />
    </>
  );
}

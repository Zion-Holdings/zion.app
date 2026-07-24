import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'For small teams getting started with AI and cloud.',
    features: [
      'Up to 3 AI service integrations',
      'Cloud infrastructure setup (1 environment)',
      'Basic monitoring & alerting',
      'Email support (48h response)',
      'Monthly strategy call',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$7,500',
    period: '/month',
    description: 'For scaling companies ready to leverage AI across the organization.',
    features: [
      'Up to 10 AI service integrations',
      'Multi-cloud infrastructure (3 environments)',
      'Advanced monitoring & incident response',
      'Priority support (24h response)',
      'Bi-weekly strategy calls',
      'Custom LLM fine-tuning (1 model)',
      'Security audit (quarterly)',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations requiring full-scale AI transformation.',
    features: [
      'Unlimited AI service integrations',
      'Global multi-cloud infrastructure',
      '24/7 monitoring & dedicated SRE',
      'Dedicated account manager',
      'Weekly strategy & review calls',
      'Custom LLM training & deployment',
      'Full security & compliance program',
      'On-site workshops & training',
      'SLA guarantees (99.99% uptime)',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Pricing
        </h1>
        <p className="text-slate-400 mb-10 max-w-2xl">
          Transparent pricing for every stage of your AI journey. All plans include access to our full service catalog.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div key={i} className={`rounded-2xl border p-6 ${tier.popular ? 'border-purple-500 bg-purple-900/10 scale-105 shadow-xl shadow-purple-500/10' : 'border-slate-700/50 bg-slate-800/30'}`}>
              {tier.popular && <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Most Popular</div>}
              <h2 className="text-xl font-bold text-white">{tier.name}</h2>
              <div className="mt-3 mb-1">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-slate-400 text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-slate-400 mb-5">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${tier.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25' : 'border border-slate-600 text-slate-300 hover:bg-slate-700'}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Need a custom solution? Let&apos;s talk.</p>
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

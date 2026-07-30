import Link from 'next/link';

export const metadata = {
  title: 'Use Cases | Zion Tech Group',
  description: 'Measurable AI and IT use cases across support, revenue, infrastructure, security, data, and operations.',
  alternates: { canonical: '/use-cases/' },
};

const useCases = [
  {
    href: '/services/?category=automation',
    emoji: '⚡',
    title: 'Support Automation',
    copy: 'Reduce ticket volume and response time with AI triage, routing, and suggested replies.',
    outcome: 'Faster support without headcount growth',
  },
  {
    href: '/services/?category=ai',
    emoji: '🤖',
    title: 'AI Products & Copilots',
    copy: 'Ship AI-assisted workflows with pretrained models, RAG, and embedded copilots.',
    outcome: 'Shorter time-to-value and measurable lift',
  },
  {
    href: '/services/?category=cloud',
    emoji: '☁️',
    title: 'Cloud Modernization',
    copy: 'Migrate and operate cloud-native infrastructure with lower risk and predictable cost.',
    outcome: 'Lower operational cost and faster delivery',
  },
  {
    href: '/services/?category=security',
    emoji: '🔐',
    title: 'Security & Compliance',
    copy: 'Strengthen detection, response readiness, and audit posture with automation.',
    outcome: 'Reduced breach risk and faster audits',
  },
  {
    href: '/services/?category=data',
    emoji: '📊',
    title: 'Data & Analytics',
    copy: 'Turn raw telemetry into faster decisions with pipelines, lakehouses, and dashboards.',
    outcome: 'Better decisions on fresher data',
  },
  {
    href: '/services/?category=it',
    emoji: '🖥️',
    title: 'IT Operations',
    copy: 'Automate patching, monitoring, incident response, and capacity planning.',
    outcome: 'Fewer incidents and faster resolution',
  },
  {
    href: '/services/ai-supply-chain-optimization/',
    emoji: '🚚',
    title: 'Supply Chain',
    copy: 'Improve planning, routing, inventory, and exception handling with connected telemetry.',
    outcome: 'Lower cost and higher on-time delivery',
  },
  {
    href: '/services/?category=automation',
    emoji: '📧',
    title: 'Outreach & Revenue Operations',
    copy: 'Improve pipeline quality with lead routing, research automation, and follow-up workflows.',
    outcome: 'Higher response and close rates',
  },
  {
    href: '/services/?category=iot',
    emoji: '📡',
    title: 'IoT & Edge',
    copy: 'Operate connected device fleets with monitoring, local inference, and automated remediation.',
    outcome: 'Predictable uptime at scale',
  },
];

const quickLinks = [
  { name: 'Free Consultation', href: '/contact/' },
  { name: 'Pricing', href: '/pricing/' },
  { name: 'Case Studies', href: '/case-studies/' },
  { name: 'Testimonials', href: '/testimonials/' },
];

const proofItems = [
  { label: 'Engagement model', value: 'Pilot → managed support → partnership' },
  { label: 'Typical start', value: '< 7 days' },
  { label: 'Team', value: 'US-based delivery' },
  { label: 'Support', value: '24/7 with 99.9% SLA' },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <header className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Outcome-driven delivery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Use Cases <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">that move metrics</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From support efficiency to revenue operations, these patterns are where Zion teams see measurable results fastest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
              Start an Assessment
            </Link>
            <Link href="/free-consultation/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
              Book Free Consultation
            </Link>
            <Link href="/services/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
              Browse Services
            </Link>
          </div>
        </header>

        <section className="py-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {useCases.map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 transition-colors"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h2 className="text-white font-semibold text-lg mb-2">{item.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">{item.copy}</p>
                <p className="text-xs text-emerald-300 font-medium">Outcome: {item.outcome}</p>
                <div className="text-xs text-purple-400 mt-4 font-medium group-hover:translate-x-1 transition-transform inline-block">Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {proofItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-xs text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Pick a use case, then we’ll build the path</h2>
              <p className="text-slate-300 leading-relaxed">
                We don’t sell generic engagements. We start from your target outcome and recommend the smallest viable set of AI and IT services to achieve it.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Scoped pilot with success criteria</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Production rollout and handoff</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Ongoing operations and improvement</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Transparent reporting and SLAs</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
                Request a Consultation
              </Link>
              <Link href="/case-studies/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
                View Case Studies
              </Link>
              <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                {quickLinks.map((q) => (
                  <Link key={q.href} href={q.href} className="hover:text-purple-300 transition-colors">
                    {q.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-purple-500/30 bg-slate-900/95 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex gap-3 max-w-6xl mx-auto">
          <Link href="/contact/" className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25">
            ⚡ Get Your Custom Proposal
          </Link>
          <a href="tel:+13024640950" className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700 transition-all">
            ☎ Call
          </a>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

export const metadata = {
  title: 'How It Works | Zion Tech Group',
  description: 'From assessment to deployment, see how Zion Tech Group delivers AI, cloud, and managed IT services with clear milestones and measurable outcomes.',
  alternates: { canonical: '/how-it-works/' },
};

const steps = [
  {
    id: '01',
    title: 'Discovery & Assessment',
    description: 'We review your environment, constraints, success criteria, and existing tooling. Output: engagement options, risk map, and recommended milestones.',
    value: '1-2 days',
  },
  {
    id: '02',
    title: 'Blueprint & Proposal',
    description: 'A scoped delivery plan with owners, acceptance criteria, estimated ROI, and a fixed-scope pilot or managed support path.',
    value: 'Updated in 24h',
  },
  {
    id: '03',
    title: 'Build & Integrate',
    description: 'We implement services in production-ready increments, with monitoring, access controls, and QA handoffs every milestone.',
    value: 'Weeks, not quarters',
  },
  {
    id: '04',
    title: 'Operate & Improve',
    description: 'Autonomous agents audit performance, monitor uptime, and recommend improvements continuously — not just at launch.',
    value: '24/7 oversight',
  },
];

const proofs = [
  { label: 'Client rating', value: '4.8 / 5' },
  { label: 'Engagement start', value: '< 7 days' },
  { label: 'Delivery lead', value: 'US-based' },
  { label: 'Uptime guarantee', value: '99.9% SLA' },
];

const categories = [
  { href: '/services/?category=ai', emoji: '🤖', title: 'AI Services', copy: 'Machine learning, autonomous agents, RAG, and computer vision.' },
  { href: '/services/?category=security', emoji: '🛡️', title: 'Security', copy: 'Zero-trust architecture, SOC 2, threat detection, and compliance.' },
  { href: '/services/?category=cloud', emoji: '☁️', title: 'Cloud & DevOps', copy: 'AWS, Azure, GCP, containerization, CI/CD, and infrastructure automation.' },
  { href: '/services/?category=automation', emoji: '⚡', title: 'Automation', copy: 'Workflow orchestration, AI pipelines, outreach automation, and observability.' },
  { href: '/services/?category=data', emoji: '📊', title: 'Data & Analytics', copy: 'Data engineering, lakehouse pipelines, BI, and real-time analytics.' },
  { href: '/contact/', emoji: '🎯', title: 'Start Now', copy: 'Share your goal and we’ll return a tailored engagement plan within 24 hours.' },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <header className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Proven Delivery Model</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Zion delivers <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">real outcomes</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Four clear milestones from first contact to production operations, with transparent reporting and measurable risk reduction throughout.
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

        <section className="py-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {steps.map((s) => (
              <div key={s.id} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 transition-colors">
                <div className="text-xs font-semibold text-purple-300 mb-3">{s.id}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="text-xs font-medium text-emerald-300">{s.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {proofs.map((p) => (
              <div key={p.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <div className="text-xl font-bold text-white">{p.value}</div>
                <div className="text-xs text-slate-400 mt-1">{p.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Service clusters we specialize in</h2>
            <p className="text-slate-300 leading-relaxed">
              Pick a starting point. Most engagements blend multiple domains, and we’ll align the engagement model to your actual risk and ROI.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/40 transition-colors">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <div className="text-sm font-semibold text-purple-300 mb-2">{c.title}</div>
                <div className="text-slate-300 text-sm leading-relaxed">{c.copy}</div>
                <div className="text-xs text-purple-400 mt-4 font-medium group-hover:translate-x-1 transition-transform inline-block">Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Need a concrete plan, not a brochure?</h3>
              <p className="text-slate-300 leading-relaxed">
                We’ll map your current stack, identify highest-ROI automation or AI opportunities, and return a categorized proposal with delivery milestones by the next business day.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Fixed-scope pilot or managed support path</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Milestones, owners, and acceptance criteria</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Production deployment with monitoring handoff</li>
                <li className="flex gap-2"><span className="text-emerald-400">✓</span> Continuous improvement after launch</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
                Request a Consultation
              </Link>
              <Link href="/free-consultation/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Why teams choose Zion</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Outcome-first delivery with transparent reporting, so leadership can see progress instead of inventing slideware updates.
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto text-left">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">Fast engagement start</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Most teams move from assessment to production within weeks, not quarters, using pilots and managed support paths.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-white font-semibold mb-2">Enterprise-ready controls</h4>
              <p className="text-slate-300 text-sm leading-relaxed">SOC 2-aware delivery, HIPAA-ready architecture, access reviews, and audit-ready reporting by default.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-white font-semibold mb-2">Measurable outcomes</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Every engagement includes success metrics, acceptance criteria, and post-launch improvement loops.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/case-studies/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-slate-100 font-semibold hover:border-white/30 hover:bg-white/5 transition-colors">
              View Case Studies
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors">
              Talk to an Engineer
            </Link>
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

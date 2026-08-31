
export const metadata = { title: 'Business Solutions — Zion Tech Group', description: 'Explore Zion Tech Group’s AI and IT business solutions: automation, analytics, security, and managed services designed to grow revenue and reduce cost.' , alternates: { canonical: 'https://ziontechgroup.com/business-solutions/' } };

import Link from 'next/link';

const solutions = [
  { icon: '🤖', name: 'AI Solutions', href: '/business-solutions/ai-solutions', desc: 'Practical AI systems for automation, copilots, document intelligence, and decision support.' },
  { icon: '🖥️', name: 'IT Services', href: '/business-solutions/it-services', desc: 'Managed infrastructure, modern cloud delivery, cybersecurity, and support operations.' },
  { icon: '📊', name: 'Data & Analytics', href: '/business-solutions/data-analytics', desc: 'Turn operational data into revenue with dashboards, forecasting, and governed pipelines.' },
  { icon: '🔒', name: 'Security & Compliance', href: '/business-solutions/security-compliance', desc: 'Reduce risk with measured security programs, access controls, and audit-ready evidence.' },
  { icon: '☁️', name: 'Cloud & DevOps', href: '/business-solutions/cloud-devops', desc: 'Deploy faster with modern CI/CD, platform engineering, and cost-optimized infrastructure.' },
  { icon: '🛠️', name: 'Free Tools & Resources', href: 'https://ziontechgroup.com', desc: 'Ready-to-use tools, templates, and guides to start improving operations today.' },
];

export default function BusinessSolutionsHub() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Solutions</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Business Solutions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            AI and IT services built for measurable outcomes: lower cost, faster delivery, and new revenue. Start with a free assessment, then expand in phases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://ziontechgroup.com" className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500">Explore free tools</Link>
            <Link href="/contact" className="rounded-xl border border-purple-500/30 px-5 py-3 text-sm font-semibold text-purple-200 hover:bg-purple-500/10">Talk to our team</Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Choose a solution area</h2>
          <p className="mt-2 text-slate-300">Each area includes entry-level services, scalable implementations, and optional managed support.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <Link key={item.name} href={item.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-purple-500/10 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Why teams choose Zion Tech Group</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm font-semibold text-purple-300">Outcome-focused</p>
              <p className="mt-2 text-sm text-slate-300">Every engagement is designed around measurable cost, speed, or revenue targets—not slide decks.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm font-semibold text-purple-300">Low-risk first step</p>
              <p className="mt-2 text-sm text-slate-300">Start with pilot work, validation criteria, and clear go/no-go points before expanding.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm font-semibold text-purple-300">Free tools included</p>
              <p className="mt-2 text-sm text-slate-300">Use our free services and tools while you evaluate ROI: <a href="https://ziontechgroup.com" className="text-purple-300 underline">ziontechgroup.com</a></p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500">Request a proposal</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

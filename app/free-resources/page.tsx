import Link from 'next/link';

export const metadata = { title: 'Free Resources', description: 'Free AI tools, guides, templates, and resources from Zion Tech Group.' };

export default function FreeResourcesPage() {
  const resources = [
    { title: 'Free AI/IT Tools', emoji: '🧰', desc: 'Instant productivity utilities, audits, and developer tools with no sign-up required.', href: '/free-ai-it-tools' },
    { title: 'Free Consultation', emoji: '📋', desc: 'Get a tailored AI/IT roadmap and concrete execution plan from our team.', href: '/free-consultation' },
    { title: 'AI Services Catalog', emoji: '🧠', desc: 'Browse 125+ AI services across use cases, industries, and integration patterns.', href: '/services?category=ai' },
    { title: 'Case Studies', emoji: '📊', desc: 'Real customer outcomes in fraud detection, cybersecurity, retail, manufacturing, and energy.', href: '/case-studies' },
    { title: 'Pricing Models', emoji: '💰', desc: 'Compare free tools, fixed-scope engagements, growth retainers, and enterprise partnerships.', href: '/pricing' },
    { title: 'Contact / Proposals', emoji: '🤝', desc: 'Start a proposal, share requirements, or book a call with our team.', href: '/contact' },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Free Resources</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Free Resources & Guides</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Useful starting points for AI and IT transformation: tools, consultations, case studies, pricing guidance, and proposal workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+130****0950" className="px-5 py-3 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm hover:bg-purple-500/30 hover:text-white transition-all font-medium">☎ +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-slate-200 hover:border-purple-500/40 hover:text-white transition-all font-medium">✉ kleber@ziontechgroup.com</a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((r, i) => (
              <Link key={i} href={r.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{r.emoji}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{r.desc}</p>
                <span className="mt-3 inline-block text-xs text-purple-400 group-hover:translate-x-1 transition-transform">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

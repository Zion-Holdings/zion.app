'use client';

import Link from 'next/link';

export const metadata = {
  title: "Education & Research AI & IT Services | Zion Tech Group",
  description: "Learning platforms, adaptive tutoring, and research analytics for Education & Research. Explore matched services, use cases, and implementation options.",
  alternates: { canonical: '/industries/education-&-research' }
};

export default function Page() {
  const rows = [{"title":"Micro-SAAS AI Invoice Processor","category":"ai","price":"$79/mo"},{"title":"Micro-SAAS AI Contract Analyzer","category":"ai","price":"$149/mo"},{"title":"Micro-SAAS AI Meeting Minutes Generator","category":"ai","price":"$29/mo"},{"title":"Micro-SAAS AI Website Builder","category":"ai","price":"$19/mo"},{"title":"Micro-SAAS AI Smart Email Responder","category":"ai","price":"$39/mo"},{"title":"Micro-SAAS AI Code Reviewer","category":"ai","price":"$49/mo"}];
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎓</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Education & Research</h1>
          </div>
          <p className="text-slate-300 mb-8 max-w-2xl">
            Learning platforms, adaptive tutoring, and research analytics — curated from our full catalog for Education & Research teams.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/industries/" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">← All industries</Link>
            <Link href="/services" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Full catalog</Link>
            <Link href="/configurator" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">Get custom proposal</Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Relevant categories</h2>
            <p className="text-slate-400 text-sm mb-6">Core domains for Education & Research</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link key="ai" href="/services/?category=ai" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">ai</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="data" href="/services/?category=data" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">data</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="automation" href="/services/?category=automation" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">automation</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="cloud" href="/services/?category=cloud" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">cloud</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Sample services</h2>
            <p className="text-slate-400 text-sm mb-6">Top matches from the catalog</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-800">
                    <th className="py-2 pr-4">Service</th>
                    <th className="py-2 pr-4">Category</th>
                    <th className="py-2">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr key="Micro-SAAS AI Invoice Processor" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Invoice Processor</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$79/mo</td></tr>
                  <tr key="Micro-SAAS AI Contract Analyzer" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Contract Analyzer</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$149/mo</td></tr>
                  <tr key="Micro-SAAS AI Meeting Minutes Generator" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Meeting Minutes Generator</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$29/mo</td></tr>
                  <tr key="Micro-SAAS AI Website Builder" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Website Builder</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$19/mo</td></tr>
                  <tr key="Micro-SAAS AI Smart Email Responder" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Smart Email Responder</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$39/mo</td></tr>
                  <tr key="Micro-SAAS AI Code Reviewer" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Code Reviewer</td><td className="py-3 pr-4 capitalize">ai</td><td className="py-3 text-purple-300">$49/mo</td></tr>
                  
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <Link href="/services" className="btn-primary">Browse all services →</Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Why teams choose us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                { title: 'Outcome-first design', desc: 'Services mapped to measurable outcomes, not just technology.' },
                { title: 'Fast onboarding', desc: 'Many engagements can start within days, not weeks.' },
                { title: 'US-based delivery', desc: 'Local team with clear communication and ownership.' }
              ].map(item => (
                <div key={item.title} className="glass-card p-5 hover:border-purple-500/40">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a tailored proposal for your industry, teams, and roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">☎ +1 302 464 0950</a>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              Categories: ai (2148) · data (108) · automation (99) · cloud (138)
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

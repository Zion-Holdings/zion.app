'use client';

import Link from 'next/link';

export const metadata = {
  title: "Technology & SaaS AI & IT Services | Zion Tech Group",
  description: "AI analytics, DevOps, and platform engineering for Technology & SaaS. Explore matched services, use cases, and implementation options.",
  alternates: { canonical: '/industries/technology-&-saas' }
};

export default function Page() {
  const rows = [{"title":"Micro-SAAS AI Project Manager","category":"automation","price":"$49/mo"},{"title":"Micro-SAAS AI Smart Data Backup","category":"cloud","price":"$29/mo"},{"title":"AI Predictive Customer Lifetime Value","category":"data","price":"$99/mo"},{"title":"Cloud Serverless Migration & Optimization","category":"cloud","price":"$2499/project/mo"},{"title":"AI Port Congestion & Shipping Delay Predictor","category":"data","price":"$299/mo"},{"title":"AI ESG Reporting & Sustainability Platform","category":"data","price":"$299/mo"}];
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🏭</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Technology & SaaS</h1>
          </div>
          <p className="text-slate-300 mb-8 max-w-2xl">
            AI analytics, DevOps, and platform engineering — curated from our full catalog for Technology & SaaS teams.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/industries/" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">← All industries</Link>
            <Link href="/services" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Full catalog</Link>
            <Link href="/configurator" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">Get custom proposal</Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Relevant categories</h2>
            <p className="text-slate-400 text-sm mb-6">Core domains for Technology & SaaS</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link key="it" href="/services/?category=it" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">it</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="cloud" href="/services/?category=cloud" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">cloud</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="devops" href="/services/?category=devops" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">devops</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="automation" href="/services/?category=automation" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">automation</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
              <Link key="data" href="/services/?category=data" className="glass-card group hover:border-purple-500/40 p-5 transition-all"><div className="text-sm font-semibold text-white group-hover:text-purple-300 capitalize">data</div><div className="text-xs text-slate-400 mt-1">View services →</div></Link>
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
                  <tr key="Micro-SAAS AI Project Manager" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Project Manager</td><td className="py-3 pr-4 capitalize">automation</td><td className="py-3 text-purple-300">$49/mo</td></tr>
                  <tr key="Micro-SAAS AI Smart Data Backup" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Smart Data Backup</td><td className="py-3 pr-4 capitalize">cloud</td><td className="py-3 text-purple-300">$29/mo</td></tr>
                  <tr key="AI Predictive Customer Lifetime Value" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Predictive Customer Lifetime Value</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$99/mo</td></tr>
                  <tr key="Cloud Serverless Migration & Optimization" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Cloud Serverless Migration & Optimization</td><td className="py-3 pr-4 capitalize">cloud</td><td className="py-3 text-purple-300">$2499/project/mo</td></tr>
                  <tr key="AI Port Congestion & Shipping Delay Predictor" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Port Congestion & Shipping Delay Predictor</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$299/mo</td></tr>
                  <tr key="AI ESG Reporting & Sustainability Platform" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI ESG Reporting & Sustainability Platform</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$299/mo</td></tr>
                  
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
              Categories: it (259) · cloud (138) · devops (0) · automation (99) · data (108)
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

export const metadata = {
  title: "Integrators | Zion Tech Group Partnerships & Solutions",
  description: "System integrators building repeatable solutions. Explore integrators recommendations from our catalog.",
  alternates: { canonical: '/integrators/' }
};

export default function Page() {
  const rows = [{"title":"Micro-SAAS AI Project Manager","category":"automation","price":"$49/mo"},{"title":"AI Predictive Customer Lifetime Value","category":"data","price":"$99/mo"},{"title":"AI Port Congestion & Shipping Delay Predictor","category":"data","price":"$299/mo"},{"title":"AI ESG Reporting & Sustainability Platform","category":"data","price":"$299/mo"},{"title":"AI Maritime Emission Tracking & Compliance Platform","category":"data","price":"$299/vessel/mo"}];
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">🔌 Integrators</h1>
          <p className="text-slate-300 mb-8 max-w-2xl">System integrators building repeatable solutions.</p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/services" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Full catalog</Link>
            <Link href="/configurator" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">Get proposal</Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Relevant areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link key="devops" href="/services/?category=devops" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">devops</div><div className="text-slate-400 text-xs mt-1">0 services</div></Link>
              <Link key="data" href="/services/?category=data" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">data</div><div className="text-slate-400 text-xs mt-1">108 services</div></Link>
              <Link key="automation" href="/services/?category=automation" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">automation</div><div className="text-slate-400 text-xs mt-1">99 services</div></Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Sample services</h2>
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
                  <tr key="Micro-SAAS AI Project Manager" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Project Manager</td><td className="py-3 pr-4 capitalize">automation</td><td className="py-3 text-purple-300">$49/mo</td></tr>\n<tr key="AI Predictive Customer Lifetime Value" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Predictive Customer Lifetime Value</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$99/mo</td></tr>\n<tr key="AI Port Congestion & Shipping Delay Predictor" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Port Congestion & Shipping Delay Predictor</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$299/mo</td></tr>\n<tr key="AI ESG Reporting & Sustainability Platform" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI ESG Reporting & Sustainability Platform</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$299/mo</td></tr>\n<tr key="AI Maritime Emission Tracking & Compliance Platform" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Maritime Emission Tracking & Compliance Platform</td><td className="py-3 pr-4 capitalize">data</td><td className="py-3 text-purple-300">$299/vessel/mo</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <Link href="/services" className="btn-primary">Browse all services →</Link>
            </div>
          </section>

          <section className="cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Get a tailored proposal for your team and roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">Get Your Custom Proposal →</Link>
              <a href="tel:+130****0950" className="btn-secondary text-lg px-10 py-4">☎ +1 302 464 0950</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

export const metadata = {
  title: "IT Vendors | Zion Tech Group Partnerships & Solutions",
  description: "Hardware, software, and channel vendors scaling reach. Explore IT vendors recommendations from our catalog.",
  alternates: { canonical: '/it-vendors/' }
};

export default function Page() {
  const rows = [{"title":"Micro-SAAS AI Cybersecurity Monitor","category":"security","price":"$149/mo"},{"title":"Micro-SAAS AI Vulnerability Scanner","category":"security","price":"$199/mo"},{"title":"Micro-SAAS AI Smart Data Backup","category":"cloud","price":"$29/mo"},{"title":"AI Workplace Safety & Compliance Monitor","category":"security","price":"$149/location/mo"},{"title":"AI Identity Verification & KYC Platform","category":"security","price":"$1/verification/mo"}];
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">🖥️ IT Vendors</h1>
          <p className="text-slate-300 mb-8 max-w-2xl">Hardware, software, and channel vendors scaling reach.</p>

          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="/services" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors">Full catalog</Link>
            <Link href="/configurator" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-purple-500/50 transition-colors text-sm">Get proposal</Link>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">Relevant areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link key="it" href="/services/?category=it" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">it</div><div className="text-slate-400 text-xs mt-1">259 services</div></Link>
              <Link key="cloud" href="/services/?category=cloud" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">cloud</div><div className="text-slate-400 text-xs mt-1">138 services</div></Link>
              <Link key="security" href="/services/?category=security" className="glass-card p-5 hover:border-purple-500/40"><div className="text-white font-semibold capitalize">security</div><div className="text-slate-400 text-xs mt-1">139 services</div></Link>
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
                  <tr key="Micro-SAAS AI Cybersecurity Monitor" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Cybersecurity Monitor</td><td className="py-3 pr-4 capitalize">security</td><td className="py-3 text-purple-300">$149/mo</td></tr>\n<tr key="Micro-SAAS AI Vulnerability Scanner" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Vulnerability Scanner</td><td className="py-3 pr-4 capitalize">security</td><td className="py-3 text-purple-300">$199/mo</td></tr>\n<tr key="Micro-SAAS AI Smart Data Backup" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">Micro-SAAS AI Smart Data Backup</td><td className="py-3 pr-4 capitalize">cloud</td><td className="py-3 text-purple-300">$29/mo</td></tr>\n<tr key="AI Workplace Safety & Compliance Monitor" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Workplace Safety & Compliance Monitor</td><td className="py-3 pr-4 capitalize">security</td><td className="py-3 text-purple-300">$149/location/mo</td></tr>\n<tr key="AI Identity Verification & KYC Platform" className="border-b border-slate-800/70 hover:bg-slate-900/40"><td className="py-3 pr-4 text-white font-medium">AI Identity Verification & KYC Platform</td><td className="py-3 pr-4 capitalize">security</td><td className="py-3 text-purple-300">$1/verification/mo</td></tr>
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

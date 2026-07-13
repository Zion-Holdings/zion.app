import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI-First SaaS Cost Optimization and License Management for IT in 2026 | Zion Tech Group',
  description: 'AI-first SaaS cost optimization and license management for IT teams: spend visibility, renewal risk, usage-based rightsizing, and compliance checks.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services/" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💳</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI-First SaaS Cost Optimization and License Management</h1>
              <p className="text-slate-400 text-sm mt-1">it • finance</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            Cloud SaaS stacks keep growing while budget pressure rises. Zion Tech Group applies AI-first cost optimization and license management so IT and finance teams can act on real usage signals, not spreadsheets.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">What this changes</h2>
          <p className="text-slate-300 mb-6">
            We turn noisy SaaS inventories into an audited spend model: normalized contracts, active users, unused seats, renewal windows, and compliance exposure mapped to spend impact.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Capabilities</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>SaaS spend visibility across vendors and teams</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Renewal risk alerts and contract benchmarks</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Usage-based rightsizing for seats, tiers, and add-ons</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>License compliance and vendor audit readiness</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Negotiation support: spend data + cheaper alternatives</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Who benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>IT directors managing multi-product portfolios</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Finance ops tracking recurring spend</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Procurement teams negotiating renewals</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Security/compliance teams reducing license risk</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>founders who need visibility without headcount</span></li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Why now</h2>
          <p className="text-slate-300 mb-6">
            Renewal windows are shorter, audit exposure is higher, and spreadsheets do not auto-renew smarter. AI-driven normalization can cut SaaS waste before renewals and strengthen negotiating leverage with vendors.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Next steps</h2>
          <p className="text-slate-300 mb-4">
            Zion Tech Group can audit your current SaaS portfolio and deliver a prioritized optimization roadmap within days.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Start with a free consultation</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20SaaS%20Cost%20Optimization%20and%20License%20Management" className="btn-primary">Contact Us</a>
            <Link href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Schedule a portfolio review call →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
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
            Optimize SaaS spending with AI-driven license analysis: spend visibility, renewal risk alerts, usage-based rightsizing, and compliance checks.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>SaaS spend visibility</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Renewal risk alerts</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Usage-based rightsizing</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>License compliance checks</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Vendor negotiation support</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Lower SaaS waste</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Cleaner renewals</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Better budget control</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at $149/mo</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20SaaS%20Cost%20Optimization%20and%20License%20Management" className="btn-primary">Contact Us</a>
            <Link href="/services/ai-first-saas-cost-optimization-and-license-management-for-it-in-2026" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Visit Service Site →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI-First Capacity Management and Chargeback for IT in 2026 | Zion Tech Group',
  description: 'AI-first capacity management and chargeback for IT teams: demand forecasting, rightsizing, cost allocation, and utilization reporting.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services/" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📊</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI-First Capacity Management and Chargeback</h1>
              <p className="text-slate-400 text-sm mt-1">it • finance</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            Improve IT economics with AI-assisted capacity management and chargeback: demand forecasting, rightsizing, cost allocation, and utilization reporting.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Demand forecasting</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Rightsizing recommendations</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Cost allocation support</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Utilization reporting</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Budget scenario modeling</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Lower infrastructure waste</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Fairer cost allocation</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Stronger budget decisions</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at $149/mo</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Capacity%20Management%20and%20Chargeback" className="btn-primary">Contact Us</a>
            <Link href="/services/ai-first-capacity-management-and-chargeback-for-it-in-2026" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Visit Service Site →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

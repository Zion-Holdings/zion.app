import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI-First Digital Twin and Asset Simulation for Industry in 2026 | Zion Tech Group',
  description: 'AI-first digital twin and asset simulation for industry: predictive asset modeling, process optimization, scenario testing, and operational insight generation.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services/" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🧪</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI-First Digital Twin and Asset Simulation</h1>
              <p className="text-slate-400 text-sm mt-1">industry • simulation</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            Model physical assets and processes with AI-driven digital twins: predictive asset modeling, process optimization, scenario testing, and operational insight generation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Asset behavior modeling</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Process simulation</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Scenario testing</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Operational insight generation</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Integration with IoT and ERP</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Lower operational risk</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Better planning confidence</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Faster change validation</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at $199/mo</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Digital%20Twin%20and%20Asset%20Simulation" className="btn-primary">Contact Us</a>
            <Link href="/services/ai-first-digital-twin-and-asset-simulation-for-industry-in-2026" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Visit Service Site →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

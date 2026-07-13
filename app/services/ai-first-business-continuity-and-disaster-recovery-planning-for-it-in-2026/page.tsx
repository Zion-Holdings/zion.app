import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI-First Business Continuity and Disaster Recovery Planning for IT in 2026 | Zion Tech Group',
  description: 'AI-first business continuity and disaster recovery planning for IT teams: automated runbooks, failover orchestration, RTO/RPO optimization, and continuous resilience testing for 2026.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services/" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🛡️</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI-First Business Continuity and Disaster Recovery Planning for IT</h1>
              <p className="text-slate-400 text-sm mt-1">it • resilience</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            Strengthen IT resilience with AI-driven continuity planning: automated runbooks, failover orchestration, RTO/RPO optimization, and continuous recovery testing so incidents stay contained.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Automated runbook generation</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Failover orchestration assistance</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>RTO/RPO optimization</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Continuous recovery testing</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Compliance-ready reporting</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Faster incident containment</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Clearer recovery priorities</span></li>
                <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1 shrink-0">•</span><span>Lower downtime risk</span></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at $149/mo</span>
            <a href="mailto:kleber@ziontechgroup.com?subject=AI%20Business%20Continuity%20and%20Disaster%20Recovery%20Planning" className="btn-primary">Contact Us</a>
            <Link href="/services/ai-first-business-continuity-and-disaster-recovery-planning-for-it-in-2026" className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Visit Service Site →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

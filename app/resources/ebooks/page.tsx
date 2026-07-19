import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ebooks | Zion Tech Group',
  description: 'Free ebooks for AI and automation',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/resources" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Resources</Link>
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 capitalize">ebooks</h1>
          <p className="text-slate-300 mb-6">Free downloadable ebooks to help your organization succeed with AI and automation.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-3">Available Downloads</h2>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1">•</span><span>Resource pack 1 - Getting Started Guide</span></li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1">•</span><span>Resource pack 2 - Best Practices</span></li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1">•</span><span>Resource pack 3 - Implementation Checklist</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Industry Report 20213 | Zion Tech Group',
  description: 'Annual industry analysis and insights',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/reports" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Reports</Link>
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Industry Report 20213</h1>
          <p className="text-slate-400 text-sm mb-6">Research • Download • Free</p>
          <p className="text-slate-300 mb-6">Comprehensive analysis of AI adoption trends across industries.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 mb-6">
            <h2 className="text-white font-semibold mb-3">Key Findings</h2>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm">• AI adoption up 45% year-over-year</li>
              <li className="text-slate-300 text-sm">• ROI typically achieved in 6 months</li>
              <li className="text-slate-300 text-sm">• Top 5 use cases identified</li>
            </ul>
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">Download Report</button>
        </div>
      </div>
    </main>
  )
}

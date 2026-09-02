import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manufacturing Case Study | Zion Tech Group',
  description: 'AI automation success story in manufacturing',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/case-studies" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Case Studies</Link>
        <article className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 capitalize">AI Success in Manufacturing</h1>
          <p className="text-slate-400 text-sm mb-6">Case Study • Manufacturing • 2026</p>
          <p className="text-slate-300 mb-6">How Zion Tech Group helped a manufacturing organization achieve 70% automation with AI solutions.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 mb-6">
            <h2 className="text-white font-semibold mb-3">Key Results</h2>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm">• 70% reduction in manual tasks</li>
              <li className="text-slate-300 text-sm">• 40% cost optimization achieved</li>
              <li className="text-slate-300 text-sm">• 99% uptime SLA maintained</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  )
}

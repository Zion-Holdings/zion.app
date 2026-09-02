import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zion Tech News | Zion Tech Group',
  description: 'Latest updates from Zion Tech Group',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/news" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to News</Link>
        <article className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Quarterly Update Q1 2026</h1>
          <p className="text-slate-400 text-sm mb-6">News • Company Update</p>
          <p className="text-slate-300 mb-6">Zion Tech Group announces new partnerships, product launches, and industry recognition.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 mb-6">
            <h2 className="text-white font-semibold mb-3">Highlights</h2>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm">• New client partnerships announced</li>
              <li className="text-slate-300 text-sm">• Product feature releases</li>
              <li className="text-slate-300 text-sm">• Industry awards received</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  )
}

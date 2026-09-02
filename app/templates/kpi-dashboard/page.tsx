import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Template | Zion Tech Group',
  description: 'Free template for AI implementation',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/templates" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Templates</Link>
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 capitalize">kpi dashboard Template</h1>
          <p className="text-slate-300 mb-6">Free downloadable template to streamline your AI implementation.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 mb-6">
            <h2 className="text-white font-semibold mb-3">Template Includes</h2>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Step-by-step guidelines</li>
              <li>• Sample configurations</li>
              <li>• Best practices checklist</li>
            </ul>
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">Download Template</button>
        </div>
      </div>
    </main>
  )
}

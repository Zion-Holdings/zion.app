import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Whitepaper | Zion Tech Group',
  description: 'Technical whitepaper on AI automation',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/whitepapers" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Whitepapers</Link>
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Whitepaper 2027</h1>
          <p className="text-slate-400 text-sm mb-6">Technical Deep Dive • Download PDF</p>
          <p className="text-slate-300 mb-6">Comprehensive technical analysis of AI implementation strategies for enterprise organizations.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">Download Whitepaper</button>
          </div>
        </div>
      </div>
    </main>
  )
}

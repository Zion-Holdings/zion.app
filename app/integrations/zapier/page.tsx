import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zapier Integration | Zion Tech Group',
  description: 'Connect Zion AI tools with zapier',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/integrations" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Integrations</Link>
        <div className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Zapier Integration</h1>
          <p className="text-slate-400 text-sm mb-6">Integration • API • Free</p>
          <p className="text-slate-300 mb-6">Connect Zion AI tools with zapier for seamless workflow automation.</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-3">Setup Guide</h2>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li>1. Navigate to Settings &gt; Integrations</li>
              <li>2. Select Zapier</li>
              <li>3. Authorize the connection</li>
              <li>4. Configure your preferences</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}

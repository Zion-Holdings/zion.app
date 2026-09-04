import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Podcast Episode 6 | Zion Tech Group',
  description: 'Episode discussing AI implementation strategies',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/podcasts" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Podcasts</Link>
        <article className="glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Implementation Strategies - Episode 6</h1>
          <p className="text-slate-400 text-sm mb-6">Podcast • Listen Now</p>
          <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5 mb-6">
            <audio controls className="w-full mb-4"><source src="/podcasts/episode-6.mp3" type="audio/mpeg" /></audio>
            <p className="text-slate-300 text-sm">Listen to our expert discussion on AI automation trends and best practices.</p>
          </div>
        </article>
      </div>
    </main>
  )
}

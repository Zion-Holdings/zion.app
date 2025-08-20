import Head from 'next/head'
import Link from 'next/link'

export default function PerformanceGuide() {
  return (
    <>
      <Head>
        <title>Performance & Monitoring — Zion Tech Group</title>
        <meta name="description" content="How we achieve fast, reliable, and observable systems." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Performance & Monitoring</h1>
          <p className="text-white/85 mb-6">From real‑time telemetry to predictive insights, we keep systems fast and healthy.</p>
          <ul className="list-disc pl-6 space-y-2 text-white/85">
            <li>Budget‑driven Lighthouse checks</li>
            <li>Real‑time metrics and alerting</li>
            <li>Geo‑distributed delivery and caching</li>
            <li>Automated bottleneck detection</li>
          </ul>
          <div className="mt-10">
            <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  )
}


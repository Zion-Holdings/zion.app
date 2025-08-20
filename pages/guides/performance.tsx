import Head from 'next/head'
import Link from 'next/link'

export default function PerformanceGuide() {
  return (
    <>
      <Head>
        <title>Performance & Monitoring Guide</title>
        <meta name="description" content="Real-time monitoring, optimization techniques, and predictive maintenance overview." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Performance & Monitoring</h1>
          <p className="text-white/80 mb-8 max-w-3xl">Our stack leverages build-time optimizations, caching, and runtime telemetry to deliver fast, reliable user experiences worldwide.</p>
          <ul className="space-y-2 text-white/85">
            <li>• Real-time metrics and dashboards</li>
            <li>• Code splitting and image optimization</li>
            <li>• CDN caching and edge acceleration</li>
            <li>• Predictive alerts and automated remediation</li>
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-green-400 hover:text-green-300">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  )
}


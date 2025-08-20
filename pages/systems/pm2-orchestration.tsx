import Head from 'next/head'
import Link from 'next/link'

export default function Pm2Orchestration() {
  return (
    <>
      <Head>
        <title>PM2 Orchestration — Zion Tech Group</title>
        <meta name="description" content="Process management, auto‑restart, and clustering with PM2." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">PM2 Orchestration</h1>
          <p className="text-white/85 mb-6">We use PM2 to supervise services, enable clustering, and ensure rapid recovery.</p>
          <ul className="list-disc pl-6 space-y-2 text-white/85">
            <li>Zero‑downtime restarts and scaling</li>
            <li>Integrated logs and health checks</li>
            <li>Managed cron and workers</li>
            <li>Robust startup and auto‑healing</li>
          </ul>
          <div className="mt-10">
            <Link href="/" className="text-cyan-300 hover:text-cyan-200">← Back to Home</Link>
          </div>
        </main>
      </div>
    </>
  )
}


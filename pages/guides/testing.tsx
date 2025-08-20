import Head from 'next/head'
import Link from 'next/link'

export default function TestingGuide() {
  return (
    <>
      <Head>
        <title>Testing & Quality Guide</title>
        <meta name="description" content="Automated testing, performance testing, and continuous validation practices used across the platform." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Testing & Quality</h1>
          <p className="text-white/80 mb-8 max-w-3xl">We maintain high confidence with automated unit, integration, and smoke tests, paired with Lighthouse budgets and CI validation.</p>
          <ul className="space-y-2 text-white/85">
            <li>• Unit, integration, and e2e smoke testing</li>
            <li>• Performance budgets and Lighthouse audits</li>
            <li>• Visual and accessibility checks</li>
            <li>• Build validation and failure recovery</li>
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-fuchsia-400 hover:text-fuchsia-300">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  )
}


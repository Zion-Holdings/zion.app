import Head from 'next/head'
import Link from 'next/link'

export default function SecurityGuide() {
  return (
    <>
      <Head>
        <title>Security & Compliance Guide</title>
        <meta name="description" content="Security practices, automated scanning, vulnerability management, and zero-trust architecture overview." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Security & Compliance</h1>
          <p className="text-white/80 mb-8 max-w-3xl">Our platform integrates automated scanning, dependency checks, vulnerability assessment, and runtime protections across the SDLC. Adopting a zero‑trust model, we continuously monitor and remediate risks.</p>
          <ul className="space-y-2 text-white/85">
            <li>• Automated dependency and SCA checks</li>
            <li>• CI security gates and supply chain integrity</li>
            <li>• Runtime monitoring and anomaly detection</li>
            <li>• Compliance reporting (ISO/SOC best practices)</li>
          </ul>
          <div className="mt-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  )
}


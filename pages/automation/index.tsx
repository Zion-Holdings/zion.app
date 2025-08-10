import Head from 'next/head';
import Link from 'next/link';

export default function AutomationIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Automations — Zion</title>
      </Head>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold">Automation Status</h1>
        <p className="mt-3 text-white/80">Explore active autonomous systems and reports.</p>
        <div className="mt-6">
          <Link href="/"><a className="text-cyan-400 hover:underline">← Back to Home</a></Link>
        </div>
      </main>
    </div>
  );
}
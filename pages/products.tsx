import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Head>
        <title>Products — Zion</title>
        <meta name="description" content="Explore Zion products: automation factories and UI accelerators." />
      </Head>
      <main className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="mt-3 text-white/80">
          Discover generated automation factories, UI accelerators, and dashboards designed to evolve continuously.
        </p>
        <div className="mt-6">
          <Link href="/"><a className="text-cyan-300 hover:underline">Back to Home</a></Link>
        </div>
      </main>
    </div>
  );
}
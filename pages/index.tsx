import Head from 'next/head';
import dynamic from 'next/dynamic';

const AutoFeatures = dynamic(() => import('../components/home/AutoFeatures'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Zion.app — Autonomous Cloud Automation</title>
        <meta
          name="description"
          content="Zion.app continuously improves itself via autonomous cloud workflows: ideas, UI updates, content sync, and self-healing."
        />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-4">Zion.app</h1>
        <p className="text-white/70 mb-10 max-w-2xl">
          Autonomous, cloud-native automations that improve this site end-to-end — without any human intervention.
        </p>
        <AutoFeatures />
      </main>
    </div>
  );
}
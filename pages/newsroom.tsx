import Head from 'next/head';

export default function Newsroom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Newsroom — Curated Tech Headlines</title>
        <meta name="description" content="Curated technology and AI headlines from reputable sources." />
      
        <meta property="og:title" content="Newsroom" />
        <meta property="og:description" content="Newsroom — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Newsroom</h1>
        <p className="text-white/70 mb-6">Updated automatically from multiple sources.</p>
        <ul className="list-disc pl-6 space-y-1">

        </ul>
      </main>
    </div>
  );
}

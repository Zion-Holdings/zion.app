import Head from 'next/head';

export default function DossiersIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Dossiers | Zion Tech Group</title>
        <meta name="description" content="Browse our collection of dossiers and insights." />
      
        <meta property="og:title" content="Dossiers" />
        <meta property="og:description" content="Dossiers — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Dossiers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Sample Dossier</h3>
            <p className="text-white/70 mb-4">This is a placeholder for dossiers content.</p>
            <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Learn more →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}



<Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="internal-link">Related Content</Link>

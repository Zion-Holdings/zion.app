import Head from 'next/head';

export default function InsightsIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Insights | Zion Tech Group</title>
        <meta name="description" content="Browse our collection of insights and insights." />
      
        <meta property="og:title" content="Insights" />
        <meta property="og:description" content="Insights — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Sample Insight</h3>
            <p className="text-white/70 mb-4">This is a placeholder for insights content.</p>
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

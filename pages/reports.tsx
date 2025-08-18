import Head from 'next/head';
import Link from 'next/link';

export default function ReportsOverview() {
  const categories = [
    {
      name: 'Insights',
      href: '/reports/insights',
      description: 'AI and technology insights',
      count: '15+ reports',
      color: 'cyan'
    },
    {
      name: 'Dossiers',
      href: '/reports/dossiers',
      description: 'Strategic analysis and recommendations',
      count: '8+ dossiers',
      color: 'fuchsia'
    },
    {
      name: 'Tutorials',
      href: '/reports/tutorials',
      description: 'Step-by-step technical guides',
      count: '25+ tutorials',
      color: 'emerald'
    },
    {
      name: 'Whitepapers',
      href: '/reports/whitepapers',
      description: 'In-depth research papers',
      count: '12+ whitepapers',
      color: 'amber'
    },
    {
      name: 'Blueprints',
      href: '/reports/blueprints',
      description: 'Technical architecture guides',
      count: '20+ blueprints',
      color: 'blue'
    },
    {
      name: 'Playbooks',
      href: '/reports/playbooks',
      description: 'Implementation strategies',
      count: '18+ playbooks',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Reports & Content | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of reports, insights, and technical content." />
      
        <meta property="og:title" content="Reports & Content" />
        <meta property="og:description" content="Reports & Content — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Reports & Content</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover our extensive library of AI, cloud, and technology content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name}
              href={category.href}
              className="group bg-slate-900/50 border border-white/10 rounded-lg p-8 hover:border-cyan-400/50 transition-all hover:scale-105"
            >
              <div className={`w-16 h-16 bg-${category.color}-500/20 rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                {category.name}
              </h3>
              <p className="text-white/70 mb-4">{category.description}</p>
              <span className="text-cyan-400 font-semibold">{category.count}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
<Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="internal-link">Related Content</Link>

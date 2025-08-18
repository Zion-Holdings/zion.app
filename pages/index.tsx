import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const featuredReports = [
    {
      title: 'AI-Powered Automation Best Practices',
      description: 'Comprehensive guide to implementing AI automation in enterprise environments',
      href: '/reports/guides/ai-automation-best-practices',
      count: '15 min read'
    },
    {
      title: 'Digital Transformation Success Story: Retail Giant',
      description: 'How a Fortune 500 retailer achieved 40% cost reduction through AI automation',
      href: '/reports/case-studies/retail-digital-transformation',
      count: '12 min read'
    },
    {
      title: 'Building Scalable Microservices with Next.js',
      description: 'Step-by-step guide to creating enterprise-grade microservices architecture',
      href: '/reports/tutorials/microservices-nextjs',
      count: '20 min read'
    },
    {
      title: 'Enterprise AI Strategy Framework',
      description: 'Comprehensive framework for developing and implementing AI strategies',
      href: '/reports/whitepapers/enterprise-ai-strategy-framework',
      count: '25 min read'
    }
  ];

  const newFeatures = [
    {
      title: 'Component Library',
      description: 'Explore our new reusable UI components',
      href: '/components',
      icon: '🧩'
    },
    {
      title: 'Content Discovery',
      description: 'AI-powered content recommendations',
      href: '/explore',
      icon: '🔍'
    },
    {
      title: 'Reports & Insights',
      description: 'High-quality research and practical guides',
      href: '/reports',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - AI & Cloud Solutions</title>
        <meta name="description" content="Leading provider of AI, cloud computing, and digital transformation solutions with autonomous content generation." />
        <meta property="og:title" content="Zion Tech Group - AI & Cloud Solutions" />
        <meta property="og:description" content="Leading provider of AI, cloud computing, and digital transformation solutions." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-8 max-w-4xl mx-auto">
            Autonomous AI & Cloud Solutions with Continuous Content Generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reports"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Reports
            </Link>
            <Link 
              href="/components"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Components
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReports.map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group bg-slate-800/50 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-white/70 mb-3">{report.description}</p>
                <span className="text-cyan-400 text-sm">{report.count}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/reports"
              className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
            >
              View All Reports
            </Link>
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">New Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newFeatures.map((feature) => (
              <Link 
                key={feature.title}
                href={feature.href}
                className="group text-center"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

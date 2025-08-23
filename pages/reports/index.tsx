import Head from 'next/head';
import Link from 'next/link';

export default function ReportsIndex() {
  const reportCategories = [
    {
      title: 'AI & Automation Guides',
      description: 'Comprehensive guides for implementing AI and automation solutions',
      href: '/reports/guides',
      icon: '🤖',
      count: '5+ guides'
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementation examples',
      href: '/reports/case-studies',
      icon: '📊',
      count: '3+ case studies'
    },
    {
      title: 'Industry Insights',
      description: 'Analysis of emerging trends and industry developments',
      href: '/reports/insights',
      icon: '🔍',
      count: '4+ insights'
    },
    {
      title: 'Technical Tutorials',
      description: 'Step-by-step guides for developers and engineers',
      href: '/reports/tutorials',
      icon: '💻',
      count: '6+ tutorials'
    },
    {
      title: 'Whitepapers',
      description: 'In-depth research and strategic frameworks',
      href: '/reports/whitepapers',
      icon: '📋',
      count: '2+ whitepapers'
    }
  ];

  const featuredReports = [
    {
      title: 'AI-Powered Automation Best Practices',
      description: 'Comprehensive guide to implementing AI automation in enterprise environments',
      category: 'Guide',
      readingTime: '15 min read',
      href: '/reports/guides/ai-automation-best-practices'
    },
    {
      title: 'Digital Transformation Success Story: Retail Giant',
      description: 'How a Fortune 500 retailer achieved 40% cost reduction through AI automation',
      category: 'Case Study',
      readingTime: '12 min read',
      href: '/reports/case-studies/retail-digital-transformation'
    },
    {
      title: 'Building Scalable Microservices with Next.js',
      description: 'Step-by-step guide to creating enterprise-grade microservices architecture',
      category: 'Tutorial',
      readingTime: '20 min read',
      href: '/reports/tutorials/microservices-nextjs'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Reports & Insights - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of AI, automation, and technology reports, guides, and insights." />
        <meta property="og:title" content="Reports & Insights - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of AI, automation, and technology reports, guides, and insights." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Reports & Insights
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover comprehensive research, practical guides, and real-world insights on AI, automation, 
            and digital transformation from Zion Tech Group.
          </p>
        </header>

        {/* Featured Reports */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReports.map((report) => (
              <Link 
                key={report.title}
                href={report.href}
                className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {report.category}
                  </span>
                  <span className="text-sm text-white/60">{report.readingTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {report.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {report.description}
                </p>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Report Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportCategories.map((category) => (
              <Link 
                key={category.title}
                href={category.href}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Explore →
                  </span>
                  <span className="text-white/60 text-sm">{category.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest insights, guides, and case studies delivered to your inbox. 
            Stay ahead of the curve with our expert analysis and practical guidance.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  );
}




<Link href="/reports/blueprints/blueprint-2025-08-18-122901" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122931" className="internal-link">Related Content</Link>

<Link href="/reports/blueprints/blueprint-2025-08-18-122952" className="internal-link">Related Content</Link>

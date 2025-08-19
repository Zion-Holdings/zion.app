import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndexPage() {
  const blogPosts = [
    {
      id: 'ai-automation-trends-2025',
      title: 'AI Automation Trends That Will Dominate 2025',
      excerpt: 'Discover the top AI automation trends that are reshaping industries and transforming how businesses operate in 2025.',
      author: 'Zion Tech Group Team',
      date: '2025-08-15',
      category: 'AI & Automation',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 'cloud-optimization-strategies',
      title: 'Advanced Cloud Optimization Strategies for Enterprise',
      excerpt: 'Learn proven strategies for optimizing cloud infrastructure, reducing costs, and improving performance across your organization.',
      author: 'Cloud Solutions Team',
      date: '2025-08-10',
      category: 'Cloud Computing',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 'autonomous-systems-future',
      title: 'The Future of Autonomous Systems in Business',
      excerpt: 'Explore how autonomous systems are revolutionizing business operations and what this means for the future of work.',
      author: 'Innovation Lab',
      date: '2025-08-05',
      category: 'Innovation',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 'performance-monitoring-best-practices',
      title: 'Best Practices for AI-Powered Performance Monitoring',
      excerpt: 'Implement effective performance monitoring strategies using AI and machine learning to optimize your systems.',
      author: 'Performance Team',
      date: '2025-07-30',
      category: 'Performance',
      readTime: '15 min read',
      featured: false
    },
    {
      id: 'security-automation-guide',
      title: 'Complete Guide to Security Automation in 2025',
      excerpt: 'A comprehensive guide to implementing security automation using AI and autonomous systems for enhanced protection.',
      author: 'Security Team',
      date: '2025-07-25',
      category: 'Security',
      readTime: '18 min read',
      featured: false
    },
    {
      id: 'data-engineering-automation',
      title: 'Automating Data Engineering Workflows',
      excerpt: 'How to leverage AI and automation to streamline data engineering processes and improve data quality.',
      author: 'Data Team',
      date: '2025-07-20',
      category: 'Data Engineering',
      readTime: '14 min read',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Innovation', 'Performance', 'Security', 'Data Engineering'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Blog | Zion Tech Group - AI & Cloud Automation Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI automation, cloud computing, and autonomous systems. Expert analysis and industry trends from Zion Tech Group." />
        <meta name="keywords" content="AI automation blog, cloud computing insights, autonomous systems, technology trends, Zion Tech Group blog" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
        
        <meta property="og:title" content="Blog | Zion Tech Group - AI & Cloud Automation Insights" />
        <meta property="og:description" content="Latest insights on AI automation, cloud computing, and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Zion Tech Group" />
        <meta name="twitter:description" content="AI & Cloud Automation Insights" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Zion Tech Group Blog",
          "description": "AI & Cloud Automation Insights",
          "url": "https://ziontechgroup.com/blog",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <Link href="/news" className="internal-link link-instance-3">[CONTENT] Content Link</Link>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI automation, cloud computing, 
            autonomous systems, and the future of technology.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <p className="text-white/80 text-lg mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Read Full Article →
                  </Link>
                </div>
                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold text-white mb-2">Featured Content</h4>
                    <p className="text-white/70 text-sm">
                      In-depth analysis and expert insights on the latest AI automation trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Filter Categories */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-slate-900/50 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-white/60">By {post.author}</span>
                    <span className="text-white/60">{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-cyan-400 hover:text-cyan-300 underline text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI automation, cloud computing, and autonomous systems 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              No spam, unsubscribe at any time
            </p>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
              <p className="text-white/60 text-sm">Latest trends and implementation strategies</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Computing</h3>
              <p className="text-white/60 text-sm">Optimization and migration insights</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
              <p className="text-white/60 text-sm">Monitoring and optimization techniques</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-white/60 text-sm">Automation and threat prevention</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Have a Topic in Mind?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We're always looking for new topics to cover. Let us know what you'd like to learn more about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Suggest a Topic
              </Link>
              <Link 
                href="/reports"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Reports
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

<Link href="/blog/ai-automation-trends-2025" className="internal-link">Related Content</Link>

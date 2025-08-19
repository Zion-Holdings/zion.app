import Head from 'next/head';
import Link from 'next/link';

export default function NewsIndexPage() {
  const newsArticles = [
    {
      id: 'zion-tech-group-ai-breakthrough',
      title: 'Zion Tech Group Announces Major AI Breakthrough in Autonomous Systems',
      excerpt: 'Company achieves significant milestone in autonomous decision-making technology, enabling unprecedented levels of business automation.',
      author: 'Press Team',
      date: '2025-08-15',
      category: 'Company News',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'partnership-announcement',
      title: 'Strategic Partnership Announced with Leading Cloud Provider',
      excerpt: 'Zion Tech Group partners with major cloud infrastructure provider to deliver enhanced automation solutions.',
      author: 'Business Development',
      date: '2025-08-10',
      category: 'Partnerships',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 'industry-award-recognition',
      title: 'Zion Tech Group Recognized as Industry Leader in AI Automation',
      excerpt: 'Company receives prestigious industry award for innovation in autonomous technology and business transformation.',
      author: 'Marketing Team',
      date: '2025-08-05',
      category: 'Awards',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 'new-office-expansion',
      title: 'New Office Expansion to Support Growing AI Innovation Team',
      excerpt: 'Zion Tech Group expands operations with new state-of-the-art facility dedicated to AI research and development.',
      author: 'Operations Team',
      date: '2025-07-30',
      category: 'Company News',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 'client-success-story',
      title: 'Major Client Achieves 80% Efficiency Improvement with Zion Solutions',
      excerpt: 'Enterprise client reports record-breaking performance improvements using Zion Tech Group\'s autonomous systems.',
      author: 'Customer Success',
      date: '2025-07-25',
      category: 'Client Success',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 'research-paper-publication',
      title: 'Research Team Publishes Groundbreaking Paper on Autonomous Optimization',
      excerpt: 'Zion Tech Group researchers publish innovative findings in leading AI and automation journal.',
      author: 'Research Team',
      date: '2025-07-20',
      category: 'Research',
      readTime: '7 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Company News', 'Partnerships', 'Awards', 'Client Success', 'Research'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>News | Zion Tech Group - Latest Updates and Announcements</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and developments from Zion Tech Group. Company updates, partnerships, awards, and industry insights." />
        <meta name="keywords" content="Zion Tech Group news, company updates, AI automation news, technology announcements, business news" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
        
        <meta property="og:title" content="News | Zion Tech Group - Latest Updates and Announcements" />
        <meta property="og:description" content="Latest news, announcements, and developments from Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/news" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News | Zion Tech Group" />
        <meta name="twitter:description" content="Latest updates and announcements" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          "headline": "Zion Tech Group News",
          "description": "Latest updates and announcements from Zion Tech Group",
          "url": "https://ziontechgroup.com/news",
          "publisher": { "@type": "Organization", "name": "Zion Tech Group" }
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            News
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and developments from Zion Tech Group. 
            From company milestones to industry insights, get the information you need.
          </p>
        </section>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Latest News</h2>
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{article.title}</h3>
                  <p className="text-white/80 text-lg mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Read Full Article →
                  </Link>
                </div>
                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <h4 className="text-xl font-semibold text-white mb-2">Breaking News</h4>
                    <p className="text-white/70 text-sm">
                      Major AI breakthrough announcement from Zion Tech Group
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

        {/* News Articles Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-slate-900/50 border border-white/10 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-colors">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{article.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-white/60">By {article.author}</span>
                    <span className="text-white/60">{article.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{article.date}</span>
                    <Link 
                      href={`/news/${article.id}`}
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

        {/* Press Kit */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Press Resources</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Journalists and media professionals can access our press kit, company information, 
              and media contacts for interviews and coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/press-kit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Download Press Kit
              </Link>
              <Link 
                href="/contact"
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Media Contact
              </Link>
            </div>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Company Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Awards</h3>
              <p className="text-white/60 text-sm">Recognized for innovation and excellence</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategic Partnerships</h3>
              <p className="text-white/60 text-sm">Collaborating with industry leaders</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth & Expansion</h3>
              <p className="text-white/60 text-sm">Expanding operations and capabilities</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Research & Innovation</h3>
              <p className="text-white/60 text-sm">Pioneering new technologies</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest news and announcements from Zion Tech Group delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white placeholder-white/50 focus:border-green-400 focus:outline-none"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              Get updates on company news, product launches, and industry insights
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Our News?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Connect with us to stay updated on the latest developments, partnerships, and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="/about"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Major Platform Update: Enhanced Automation Capabilities',
      excerpt: 'We\'re excited to announce a significant update to our automation platform, introducing new AI-powered features and improved performance monitoring.',
      category: 'Platform Update',
      date: '2025-01-17',
      author: 'Zion Team',
      readTime: '3 min read',
      featured: true,
      image: '🚀'
    },
    {
      id: 2,
      title: 'New API Endpoints for Enhanced Integration',
      excerpt: 'Introducing 15 new API endpoints to provide developers with more flexibility and control over their automation workflows.',
      category: 'API',
      date: '2025-01-16',
      author: 'Engineering Team',
      readTime: '2 min read',
      featured: false,
      image: '🔌'
    },
    {
      id: 3,
      title: 'Community Spotlight: Top Contributors of 2024',
      excerpt: 'Celebrating the amazing contributions from our community members who have helped shape the future of automation.',
      category: 'Community',
      date: '2025-01-15',
      author: 'Community Manager',
      readTime: '4 min read',
      featured: false,
      image: '👥'
    },
    {
      id: 4,
      title: 'Performance Improvements: 40% Faster Response Times',
      excerpt: 'Our latest optimization efforts have resulted in significantly improved performance across all platform services.',
      category: 'Performance',
      date: '2025-01-14',
      author: 'Performance Team',
      readTime: '2 min read',
      featured: false,
      image: '⚡'
    },
    {
      id: 5,
      title: 'Security Update: Enhanced Threat Detection',
      excerpt: 'New security features have been implemented to provide better protection against emerging threats and vulnerabilities.',
      category: 'Security',
      date: '2025-01-13',
      author: 'Security Team',
      readTime: '3 min read',
      featured: false,
      image: '🔒'
    },
    {
      id: 6,
      title: 'Documentation Overhaul: Improved Developer Experience',
      excerpt: 'Complete redesign of our documentation with better examples, tutorials, and interactive guides.',
      category: 'Documentation',
      date: '2025-01-12',
      author: 'Documentation Team',
      readTime: '2 min read',
      featured: false,
      image: '📚'
    }
  ];

  const categories = [
    { name: 'All News', count: newsArticles.length, active: true },
    { name: 'Platform Update', count: newsArticles.filter(n => n.category === 'Platform Update').length, active: false },
    { name: 'API', count: newsArticles.filter(n => n.category === 'API').length, active: false },
    { name: 'Community', count: newsArticles.filter(n => n.category === 'Community').length, active: false },
    { name: 'Performance', count: newsArticles.filter(n => n.category === 'Performance').length, active: false },
    { name: 'Security', count: newsArticles.filter(n => n.category === 'Security').length, active: false }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Platform Update': return 'bg-blue-100 text-blue-800';
      case 'API': return 'bg-green-100 text-green-800';
      case 'Community': return 'bg-purple-100 text-purple-800';
      case 'Performance': return 'bg-yellow-100 text-yellow-800';
      case 'Security': return 'bg-red-100 text-red-800';
      case 'Documentation': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>News & Updates - bolt.new.zion.app</title>
        <meta name="description" content="Latest news, updates, and announcements about the bolt.new.zion.app platform" />
        <meta name="keywords" content="news, updates, announcements, platform, automation" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments, feature releases, and important announcements 
              from the bolt.new.zion.app platform.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/content-hub" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Content Hub
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Featured Article */}
          <div className="mb-12">
            {newsArticles.filter(article => article.featured).map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Read Full Article
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{article.image}</div>
                    <div className="text-sm text-gray-500">Featured Article</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* News Categories */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">News Categories</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    category.active
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.count} articles</div>
                </button>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.filter(article => !article.featured).map(article => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{article.image}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {formatDate(article.date)}
                  </div>
                  <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-blue-700 mb-6">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/api-documentation" className="text-blue-600 hover:text-blue-800">API Documentation</Link></li>
                  <li><Link href="/component-library" className="text-blue-600 hover:text-blue-800">Component Library</Link></li>
                  <li><Link href="/reports" className="text-blue-600 hover:text-blue-800">System Reports</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
                <ul className="space-y-2">
                  <li><Link href="/events" className="text-blue-600 hover:text-blue-800">Events & Workshops</Link></li>
                  <li><a href="https://github.com/Zion-Holdings/zion.app" className="text-blue-600 hover:text-blue-800">GitHub Repository</a></li>
                  <li><Link href="/content-hub" className="text-blue-600 hover:text-blue-800">Content Hub</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link></li>
                  <li><Link href="/automation-health" className="text-blue-600 hover:text-blue-800">System Health</Link></li>
                  <li><Link href="/live-dashboard" className="text-blue-600 hover:text-blue-800">Live Dashboard</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
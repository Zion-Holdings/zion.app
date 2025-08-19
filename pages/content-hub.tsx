import React, { useState } from 'react';
import Head from 'next/head';

const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'guides', name: 'Guides', icon: '📖' },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'news', name: 'News', icon: '📰' },
    { id: 'insights', name: 'Insights', icon: '💡' },
  ];

  const content = [
    {
      id: 1,
      title: 'Getting Started with Zion AI Marketplace',
      category: 'guides',
      excerpt: 'Learn the basics of using our AI marketplace platform, from account setup to your first project.',
      author: 'Zion Team',
      date: '2025-01-17',
      readTime: '5 min read',
      tags: ['beginner', 'setup', 'onboarding'],
      featured: true,
    },
    {
      id: 2,
      title: 'Advanced AI Integration Strategies',
      category: 'tutorials',
      excerpt: 'Deep dive into advanced techniques for integrating AI services into your existing workflows.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-16',
      readTime: '12 min read',
      tags: ['advanced', 'integration', 'workflow'],
      featured: false,
    },
    {
      id: 3,
      title: 'How Company X Increased Efficiency by 300%',
      category: 'case-studies',
      excerpt: 'Real-world example of how a manufacturing company leveraged AI to transform their operations.',
      author: 'Case Study Team',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['manufacturing', 'efficiency', 'transformation'],
      featured: true,
    },
    {
      id: 4,
      title: 'The Future of AI in Healthcare',
      category: 'insights',
      excerpt: 'Exploring the transformative potential of AI technologies in modern healthcare systems.',
      author: 'Dr. Michael Rodriguez',
      date: '2025-01-14',
      readTime: '10 min read',
      tags: ['healthcare', 'future', 'AI'],
      featured: false,
    },
    {
      id: 5,
      title: 'Building Scalable AI Solutions',
      category: 'tutorials',
      excerpt: 'Technical guide on architecting AI solutions that can grow with your business needs.',
      author: 'Engineering Team',
      date: '2025-01-13',
      readTime: '15 min read',
      tags: ['architecture', 'scalability', 'technical'],
      featured: false,
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Development',
      category: 'guides',
      excerpt: 'Essential principles and practices for developing AI systems that are fair, transparent, and beneficial.',
      author: 'Ethics Committee',
      date: '2025-01-12',
      readTime: '7 min read',
      tags: ['ethics', 'responsible AI', 'transparency'],
      featured: true,
    },
    {
      id: 7,
      title: 'Market Trends: AI Adoption in 2025',
      category: 'news',
      excerpt: 'Latest insights into how businesses are adopting AI technologies and what to expect next.',
      author: 'Market Research Team',
      date: '2025-01-11',
      readTime: '6 min read',
      tags: ['trends', 'adoption', 'market'],
      featured: false,
    },
    {
      id: 8,
      title: 'Optimizing AI Model Performance',
      category: 'tutorials',
      excerpt: 'Practical techniques for improving the accuracy and efficiency of your AI models.',
      author: 'ML Engineering Team',
      date: '2025-01-10',
      readTime: '11 min read',
      tags: ['optimization', 'performance', 'ML'],
      featured: false,
    },
  ];

  const filteredContent = content.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = content.filter(item => item.featured);

  return (
    <>
      <Head>
        <title>Content Hub - Zion AI Marketplace</title>
        <meta name="description" content="Discover insights, guides, and resources for AI integration and marketplace success" />
        <meta name="keywords" content="content, guides, tutorials, AI, marketplace, resources" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Content Hub
            </h1>
            <p className="text-xl text-gray-300 mt-4">
              Discover insights, guides, and resources to accelerate your AI journey
            </p>
          </div>
        </header>

        {/* Search and Filters */}
        <section className="container mx-auto px-6 py-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <section className="container mx-auto px-6 py-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      By {item.author} • {new Date(item.date).toLocaleDateString()}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <main className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-400">
              {activeCategory === 'all' ? 'All Content' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-400">
              {filteredContent.length} articles found
            </span>
          </div>

          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <article key={item.id} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full capitalize">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full border border-blue-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      By {item.author} • {new Date(item.date).toLocaleDateString()}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Newsletter Signup */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and case studies delivered to your inbox. 
              Join thousands of AI professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-3">
              No spam, unsubscribe at any time
            </p>
          </div>
        </section>

        {/* Content Categories */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => (
              <div
                key={category.id}
                className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-colors cursor-pointer group"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {content.filter(item => item.category === category.id).length} articles
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>Want to contribute content? We'd love to hear from you!</p>
              <p className="mt-2">
                <a href="/contact" className="text-blue-400 hover:text-blue-300">
                  Contact Us →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContentHub;
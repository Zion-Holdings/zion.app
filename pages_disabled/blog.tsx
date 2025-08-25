import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 'quantum-ai-future-business',
      title: 'The Future of Business Intelligence: How Quantum AI is Revolutionizing Data Analytics',
      excerpt: 'Explore how quantum computing combined with artificial intelligence is creating unprecedented opportunities for business intelligence and predictive analytics.',
      content: 'In the rapidly evolving landscape of business intelligence, quantum AI represents a paradigm shift that promises to unlock insights previously thought impossible...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['Quantum Computing', 'AI', 'Business Intelligence', 'Data Analytics'],
      image: '🧬',
      featured: true,
      views: 2847,
      likes: 156
    },
    {
      id: 'autonomous-devops-guide',
      title: 'Complete Guide to Autonomous DevOps: Self-Healing Infrastructure in 2024',
      excerpt: 'Learn how autonomous DevOps platforms are transforming software deployment with self-healing systems and zero-downtime operations.',
      content: 'The evolution of DevOps has reached a critical juncture where manual intervention is becoming obsolete. Autonomous DevOps represents the next frontier...',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Engineering',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'DevOps & Infrastructure',
      tags: ['DevOps', 'Automation', 'Infrastructure', 'Cloud Computing'],
      image: '🤖',
      featured: true,
      views: 1923,
      likes: 98
    },
    {
      id: 'cybersecurity-threats-2024',
      title: 'Cybersecurity Threats in 2024: AI-Powered Defense Strategies',
      excerpt: 'Discover the latest cybersecurity threats and how AI-powered defense systems are helping organizations stay ahead of attackers.',
      content: 'As cyber threats become more sophisticated, traditional security measures are proving inadequate. AI-powered cybersecurity solutions offer new hope...',
      author: 'Emily Watson',
      authorRole: 'VP of Client Success',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Defense', 'Threat Detection', 'Security Analytics'],
      image: '🛡️',
      featured: false,
      views: 1654,
      likes: 87
    },
    {
      id: 'metaverse-commerce-trends',
      title: 'Metaverse Commerce: Building Virtual Storefronts That Actually Convert',
      excerpt: 'Practical insights into creating successful virtual commerce experiences that drive real revenue in the metaverse.',
      content: 'The metaverse represents a new frontier for e-commerce, but creating successful virtual storefronts requires a deep understanding of user behavior...',
      author: 'Kleber Santos',
      authorRole: 'Founder & CEO',
      publishDate: '2024-01-08',
      readTime: '15 min read',
      category: 'Metaverse & VR',
      tags: ['Metaverse', 'E-commerce', 'Virtual Reality', 'Digital Transformation'],
      image: '🌐',
      featured: false,
      views: 2156,
      likes: 134
    },
    {
      id: 'micro-saas-scaling-strategies',
      title: 'Scaling Micro SaaS: From MVP to Market Leader in 12 Months',
      excerpt: 'A comprehensive guide to scaling micro SaaS applications with proven strategies and real-world case studies.',
      content: 'Scaling a micro SaaS application from concept to market leadership requires strategic planning, technical excellence, and market understanding...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      publishDate: '2024-01-05',
      readTime: '18 min read',
      category: 'Business Strategy',
      tags: ['Micro SaaS', 'Scaling', 'Product Development', 'Market Strategy'],
      image: '🚀',
      featured: false,
      views: 3421,
      likes: 198
    },
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI in Healthcare: Revolutionizing Medical Diagnostics with Machine Learning',
      excerpt: 'How AI-powered diagnostic tools are improving accuracy, reducing costs, and saving lives in healthcare institutions worldwide.',
      content: 'The integration of artificial intelligence in healthcare diagnostics is transforming patient care and medical decision-making...',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      publishDate: '2024-01-03',
      readTime: '14 min read',
      category: 'Healthcare & AI',
      tags: ['Healthcare', 'AI Diagnostics', 'Medical Technology', 'Machine Learning'],
      image: '🏥',
      featured: false,
      views: 1876,
      likes: 103
    }
  ];

  const categories = ['All', 'AI & Technology', 'DevOps & Infrastructure', 'Cybersecurity', 'Metaverse & VR', 'Business Strategy', 'Healthcare & AI'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Industry Trends</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry trends, and expert analysis from Zion Tech Group. Discover cutting-edge strategies for AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing trends, cybersecurity analysis, business intelligence, digital transformation" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Stay ahead of the curve with expert insights, industry analysis, and cutting-edge strategies 
            from our team of technology leaders and innovators.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📚 Expert Analysis</span>
            <span>🔬 Research Insights</span>
            <span>💡 Innovation Strategies</span>
            <span>🌟 Industry Trends</span>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="text-4xl">{post.image}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>👁️ {post.views.toLocaleString()}</span>
                      <span>👍 {post.likes}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Articles</label>
                <input
                  type="text"
                  placeholder="Search by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredPosts.length}</span> articles
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* All Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="text-2xl">{post.image}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-gray-500">
                      By {post.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>👁️ {post.views.toLocaleString()}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get weekly updates on technology trends, industry insights, and expert analysis delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Popular Tags */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                #{tag}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
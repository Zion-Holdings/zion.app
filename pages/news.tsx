import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Zion App Launches Revolutionary AI-Powered Automation Platform',
      excerpt: 'Our latest platform introduces cutting-edge artificial intelligence capabilities that transform how businesses approach automation and workflow optimization.',
      category: 'product',
      date: '2025-01-17',
      author: 'Zion Team',
      readTime: '3 min read',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Partnership Announcement: Zion App Joins Forces with Tech Giants',
      excerpt: 'Strategic collaboration brings together industry leaders to accelerate innovation in cloud-native solutions and enterprise automation.',
      category: 'partnership',
      date: '2025-01-15',
      author: 'Sarah Johnson',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Q4 2024 Results: Record Growth and Customer Success',
      excerpt: 'Zion App reports exceptional quarterly performance with 150% year-over-year growth and expanding customer base across industries.',
      category: 'business',
      date: '2025-01-12',
      author: 'Michael Chen',
      readTime: '4 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'New Data Center Expansion in Asia-Pacific Region',
      excerpt: 'Strategic infrastructure investment enhances performance and reliability for customers in the rapidly growing APAC market.',
      category: 'infrastructure',
      date: '2025-01-10',
      author: 'David Kim',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Security Update: Enhanced Protection Against Emerging Threats',
      excerpt: 'Latest security enhancements provide advanced protection for enterprise customers while maintaining seamless user experience.',
      category: 'security',
      date: '2025-01-08',
      author: 'Lisa Rodriguez',
      readTime: '3 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Customer Spotlight: How Company X Achieved 300% ROI',
      excerpt: 'Real-world case study demonstrates the transformative impact of Zion App\'s automation solutions on business operations.',
      category: 'customer',
      date: '2025-01-05',
      author: 'Alex Thompson',
      readTime: '5 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'Developer Community Milestone: 10,000+ Active Contributors',
      excerpt: 'Our open-source ecosystem reaches a significant milestone, fostering innovation and collaboration across the developer community.',
      category: 'community',
      date: '2025-01-03',
      author: 'Zion Team',
      readTime: '2 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'Industry Recognition: Zion App Named Top Innovator 2024',
      excerpt: 'Prestigious industry award recognizes our commitment to innovation and excellence in enterprise automation solutions.',
      category: 'awards',
      date: '2024-12-30',
      author: 'Zion Team',
      readTime: '1 min read',
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    { id: 'all', label: 'All News', count: newsItems.length },
    { id: 'product', label: 'Product Updates', count: newsItems.filter(item => item.category === 'product').length },
    { id: 'business', label: 'Business', count: newsItems.filter(item => item.category === 'business').length },
    { id: 'partnership', label: 'Partnerships', count: newsItems.filter(item => item.category === 'partnership').length },
    { id: 'infrastructure', label: 'Infrastructure', count: newsItems.filter(item => item.category === 'infrastructure').length },
    { id: 'security', label: 'Security', count: newsItems.filter(item => item.category === 'security').length },
    { id: 'customer', label: 'Customer Stories', count: newsItems.filter(item => item.category === 'customer').length },
    { id: 'community', label: 'Community', count: newsItems.filter(item => item.category === 'community').length },
    { id: 'awards', label: 'Awards', count: newsItems.filter(item => item.category === 'awards').length }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      product: 'bg-blue-100 text-blue-800',
      business: 'bg-green-100 text-green-800',
      partnership: 'bg-purple-100 text-purple-800',
      infrastructure: 'bg-orange-100 text-orange-800',
      security: 'bg-red-100 text-red-800',
      customer: 'bg-indigo-100 text-indigo-800',
      community: 'bg-pink-100 text-pink-800',
      awards: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Head>
        <title>News & Updates - Zion App</title>
        <meta name="description" content="Stay updated with the latest news, product updates, and company announcements from Zion App." />
        <meta name="keywords" content="news, updates, announcements, Zion App, company news, product updates" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">News & Updates</h1>
                <p className="text-gray-600 mt-2">Stay informed about Zion App's latest developments</p>
              </div>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured News */}
          {filteredNews.filter(item => item.featured).map(featuredItem => (
            <div key={featuredItem.id} className="mb-12">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm opacity-75">Featured Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(featuredItem.category)}`}>
                        {categories.find(cat => cat.id === featuredItem.category)?.label}
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{featuredItem.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredItem.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{featuredItem.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>By {featuredItem.author}</span>
                        <span>•</span>
                        <span>{formatDate(featuredItem.date)}</span>
                      </div>
                      <Link 
                        href={`/news/${featuredItem.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">News Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {categories.find(cat => cat.id === item.category)?.label}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>By {item.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <Link 
                      href={`/news/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-200 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
                <p className="text-gray-600">In-depth articles and insights from our team</p>
              </Link>
              <Link href="/case-studies" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world examples of customer success</p>
              </Link>
              <Link href="/contact" className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our team</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
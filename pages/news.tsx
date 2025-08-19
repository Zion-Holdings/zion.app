import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsCategories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'company', name: 'Company Updates', icon: '🏢' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'industry', name: 'Industry Trends', icon: '📈' },
    { id: 'product', name: 'Product Updates', icon: '🚀' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'bolt.new.zion.app Achieves 99.9% Uptime Milestone',
      category: 'company',
      date: '2025-01-17',
      author: 'Zion Tech Group',
      excerpt: 'Our autonomous automation platform has successfully maintained 99.9% uptime for the past 12 months, demonstrating the reliability of our comprehensive redundancy systems.',
      readTime: '3 min read',
      featured: true,
      tags: ['uptime', 'reliability', 'automation']
    },
    {
      id: 2,
      title: 'New AI-Powered Content Generation Features Released',
      category: 'product',
      date: '2025-01-16',
      author: 'Product Team',
      excerpt: 'We\'ve launched advanced AI content generation capabilities that automatically create high-quality, SEO-optimized content for your applications.',
      readTime: '4 min read',
      featured: true,
      tags: ['AI', 'content', 'SEO', 'new-features']
    },
    {
      id: 3,
      title: 'Industry Report: Automation Adoption Surges in 2025',
      category: 'industry',
      date: '2025-01-15',
      author: 'Research Team',
      excerpt: 'New industry data shows a 40% increase in automation adoption across software development teams, with AI-powered tools leading the transformation.',
      readTime: '5 min read',
      featured: false,
      tags: ['industry', 'automation', 'trends', '2025']
    },
    {
      id: 4,
      title: 'Security Enhancement: Advanced Threat Detection System',
      category: 'technology',
      date: '2025-01-14',
      author: 'Security Team',
      excerpt: 'We\'ve implemented a next-generation threat detection system that uses machine learning to identify and prevent security threats in real-time.',
      readTime: '4 min read',
      featured: false,
      tags: ['security', 'threat-detection', 'ML', 'real-time']
    },
    {
      id: 5,
      title: 'Partnership Announcement: Collaboration with CloudTech Solutions',
      category: 'company',
      date: '2025-01-13',
      author: 'Partnership Team',
      excerpt: 'We\'re excited to announce a strategic partnership with CloudTech Solutions to deliver enhanced cloud automation services to enterprise clients.',
      readTime: '3 min read',
      featured: false,
      tags: ['partnership', 'cloud', 'enterprise', 'collaboration']
    },
    {
      id: 6,
      title: 'Performance Optimization: 50% Faster Load Times',
      category: 'product',
      date: '2025-01-12',
      author: 'Engineering Team',
      excerpt: 'Recent optimizations have resulted in 50% faster page load times across our platform, significantly improving user experience.',
      readTime: '3 min read',
      featured: false,
      tags: ['performance', 'optimization', 'speed', 'UX']
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Head>
        <title>News - bolt.new.zion.app</title>
        <meta name="description" content="Latest news, updates, and announcements from bolt.new.zion.app" />
        <meta name="keywords" content="news, updates, announcements, company, technology, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed about the latest developments, product updates, and industry insights
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {newsCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Stay Updated</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Newsletter Subscription</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest news and updates delivered directly to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">RSS Feed</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our RSS feed for automatic news updates.
                </p>
                <a 
                  href="/rss.xml" 
                  className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View RSS Feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
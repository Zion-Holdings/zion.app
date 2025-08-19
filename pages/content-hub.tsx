import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'guides', name: 'Guides', icon: '📖' },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'news', name: 'News', icon: '📰' },
    { id: 'insights', name: 'Insights', icon: '💡' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Getting Started with Automation',
      category: 'guides',
      excerpt: 'Learn the fundamentals of setting up automated workflows in your development environment.',
      readTime: '5 min read',
      date: '2025-01-17',
      tags: ['automation', 'beginners', 'workflow'],
      featured: true
    },
    {
      id: 2,
      title: 'Advanced CI/CD Pipeline Optimization',
      category: 'tutorials',
      excerpt: 'Deep dive into optimizing your continuous integration and deployment pipelines for maximum efficiency.',
      readTime: '12 min read',
      date: '2025-01-16',
      tags: ['ci-cd', 'optimization', 'advanced'],
      featured: false
    },
    {
      id: 3,
      title: 'How We Achieved 99.9% Uptime',
      category: 'case-studies',
      excerpt: 'Real-world case study on implementing comprehensive redundancy systems for maximum reliability.',
      readTime: '8 min read',
      date: '2025-01-15',
      tags: ['uptime', 'redundancy', 'case-study'],
      featured: true
    },
    {
      id: 4,
      title: 'The Future of Autonomous Development',
      category: 'insights',
      excerpt: 'Exploring emerging trends in AI-powered development automation and what it means for developers.',
      readTime: '7 min read',
      date: '2025-01-14',
      tags: ['ai', 'future', 'automation'],
      featured: false
    },
    {
      id: 5,
      title: 'Security Best Practices for Cloud Automation',
      category: 'guides',
      excerpt: 'Essential security guidelines for implementing automation in cloud environments.',
      readTime: '10 min read',
      date: '2025-01-13',
      tags: ['security', 'cloud', 'best-practices'],
      featured: false
    },
    {
      id: 6,
      title: 'Performance Monitoring at Scale',
      category: 'tutorials',
      excerpt: 'Learn how to implement comprehensive performance monitoring across large-scale applications.',
      readTime: '15 min read',
      date: '2025-01-12',
      tags: ['monitoring', 'performance', 'scale'],
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Head>
        <title>Content Hub - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive content hub featuring guides, tutorials, case studies, and insights" />
        <meta name="keywords" content="content, guides, tutorials, case studies, insights, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Content Hub
            </h1>
            <p className="text-xl text-gray-600">
              Discover comprehensive guides, tutorials, and insights to master automation and development
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {contentItems.filter(item => item.featured).map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {contentCategories.map((category) => (
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
              {filteredContent.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
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
                  Get the latest content updates and automation insights delivered to your inbox.
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
                <h3 className="text-lg font-medium text-gray-700 mb-3">Content Requests</h3>
                <p className="text-gray-600 mb-4">
                  Have a topic you'd like us to cover? Let us know what content would be most helpful.
                </p>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Suggest Topic
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
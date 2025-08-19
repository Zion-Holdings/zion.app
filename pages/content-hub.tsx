import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', count: 156 },
    { id: 'blog', name: 'Blog Posts', count: 42 },
    { id: 'guides', name: 'Guides & Tutorials', count: 28 },
    { id: 'case-studies', name: 'Case Studies', count: 15 },
    { id: 'whitepapers', name: 'Whitepapers', count: 12 },
    { id: 'videos', name: 'Videos', count: 23 },
    { id: 'webinars', name: 'Webinars', count: 8 },
    { id: 'news', name: 'News & Updates', count: 28 },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization.',
      category: 'blog',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Complete Guide to Cloud Migration',
      excerpt: 'A comprehensive step-by-step guide to migrating your infrastructure to the cloud safely and efficiently.',
      category: 'guides',
      author: 'Mike Rodriguez',
      date: '2025-01-12',
      readTime: '15 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'How Company X Increased Efficiency by 300%',
      excerpt: 'Real-world case study showing how strategic automation transformed business operations.',
      category: 'case-studies',
      author: 'Analytics Team',
      date: '2025-01-10',
      readTime: '12 min read',
      featured: true,
      image: '/api/placeholder/400/250',
    },
  ];

  const recentContent = [
    {
      id: 4,
      title: 'Top 10 Security Best Practices for 2025',
      excerpt: 'Essential security measures every organization should implement to protect against emerging threats.',
      category: 'guides',
      author: 'Security Team',
      date: '2025-01-14',
      readTime: '10 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 5,
      title: 'Understanding DevOps Culture',
      excerpt: 'Learn how to build a successful DevOps culture that drives innovation and collaboration.',
      category: 'blog',
      author: 'Jenny Thompson',
      date: '2025-01-13',
      readTime: '6 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 6,
      title: 'Webinar: Scaling Your Business with Automation',
      excerpt: 'Join industry experts as they discuss strategies for scaling operations through intelligent automation.',
      category: 'webinars',
      author: 'Expert Panel',
      date: '2025-01-11',
      readTime: '60 min',
      image: '/api/placeholder/300/200',
    },
    {
      id: 7,
      title: 'The Impact of Edge Computing on IoT',
      excerpt: 'Exploring how edge computing is transforming IoT deployments and enabling real-time processing.',
      category: 'whitepapers',
      author: 'Research Team',
      date: '2025-01-09',
      readTime: '20 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 8,
      title: 'Weekly Tech News Roundup',
      excerpt: 'Stay updated with the latest technology trends, product launches, and industry developments.',
      category: 'news',
      author: 'News Team',
      date: '2025-01-08',
      readTime: '5 min read',
      image: '/api/placeholder/300/200',
    },
    {
      id: 9,
      title: 'Building Resilient Microservices',
      excerpt: 'Architecture patterns and best practices for creating robust, scalable microservice systems.',
      category: 'guides',
      author: 'Architecture Team',
      date: '2025-01-07',
      readTime: '18 min read',
      image: '/api/placeholder/300/200',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      blog: 'bg-blue-100 text-blue-800',
      guides: 'bg-green-100 text-green-800',
      'case-studies': 'bg-purple-100 text-purple-800',
      whitepapers: 'bg-orange-100 text-orange-800',
      videos: 'bg-red-100 text-red-800',
      webinars: 'bg-indigo-100 text-indigo-800',
      news: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names: { [key: string]: string } = {
      blog: 'Blog Posts',
      guides: 'Guides & Tutorials',
      'case-studies': 'Case Studies',
      whitepapers: 'Whitepapers',
      videos: 'Videos',
      webinars: 'Webinars',
      news: 'News & Updates',
    };
    return names[category] || category;
  };

  const filteredContent = recentContent.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Content Hub - Zion App</title>
        <meta name="description" content="Explore our comprehensive library of articles, guides, case studies, and resources" />
        <meta name="keywords" content="content, resources, articles, guides, case studies, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Content Hub
            </h1>
            <p className="text-xl text-gray-600">
              Discover insights, tutorials, and resources to help you succeed
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Featured Content */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Featured</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {getCategoryName(item.category)}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>By {item.author}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Content */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">{getCategoryName(item.category)}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {getCategoryName(item.category)}
                      </span>
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>By {item.author}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">
              Get the latest content delivered to your inbox. No spam, just valuable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Have Content Ideas?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for new topics and contributors. Let us know what you'd like to see!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Suggest Topics
              </Link>
              <Link href="/blog" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
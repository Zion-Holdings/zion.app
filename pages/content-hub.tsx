import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContentHub: React.FC = () => {
  const contentCategories = [
    {
      title: 'Automation Insights',
      description: 'Deep dives into automation strategies and best practices',
      icon: '🤖',
      articles: [
        { title: 'Building Self-Healing Systems', excerpt: 'Learn how to create systems that automatically detect and fix issues', readTime: '5 min read' },
        { title: 'CI/CD Pipeline Optimization', excerpt: 'Streamline your deployment process with intelligent automation', readTime: '7 min read' },
        { title: 'Monitoring and Alerting', excerpt: 'Set up comprehensive monitoring for your automation workflows', readTime: '6 min read' }
      ]
    },
    {
      title: 'Cloud Architecture',
      description: 'Modern cloud-native design patterns and implementation',
      icon: '☁️',
      articles: [
        { title: 'Microservices Best Practices', excerpt: 'Design scalable microservices architecture for cloud deployment', readTime: '8 min read' },
        { title: 'Serverless Computing Guide', excerpt: 'Leverage serverless for cost-effective and scalable solutions', readTime: '6 min read' },
        { title: 'Container Orchestration', excerpt: 'Master Kubernetes and Docker for production deployments', readTime: '9 min read' }
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Techniques to improve application speed and efficiency',
      icon: '⚡',
      articles: [
        { title: 'Frontend Performance Tips', excerpt: 'Optimize your React applications for better user experience', readTime: '5 min read' },
        { title: 'Database Query Optimization', excerpt: 'Speed up your database operations with these techniques', readTime: '7 min read' },
        { title: 'CDN and Caching Strategies', excerpt: 'Implement effective caching for faster content delivery', readTime: '6 min read' }
      ]
    },
    {
      title: 'Security Best Practices',
      description: 'Protect your applications with industry-standard security measures',
      icon: '🔒',
      articles: [
        { title: 'API Security Fundamentals', excerpt: 'Secure your APIs with authentication and authorization', readTime: '6 min read' },
        { title: 'Data Encryption Guide', excerpt: 'Implement encryption for sensitive data at rest and in transit', readTime: '8 min read' },
        { title: 'Security Auditing', excerpt: 'Regular security assessments and vulnerability scanning', readTime: '7 min read' }
      ]
    }
  ];

  const featuredContent = [
    {
      title: 'The Future of Autonomous Cloud Operations',
      excerpt: 'Discover how AI-powered automation is revolutionizing cloud infrastructure management and reducing operational overhead.',
      category: 'Automation Insights',
      author: 'Zion Team',
      date: '2025-01-17',
      readTime: '10 min read',
      featured: true
    },
    {
      title: 'Building Resilient Systems with Redundancy',
      excerpt: 'Learn the principles of system redundancy and how to implement them for maximum uptime and reliability.',
      category: 'Cloud Architecture',
      author: 'Zion Team',
      date: '2025-01-16',
      readTime: '12 min read',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Content Hub - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive content hub featuring automation insights, cloud architecture, and best practices" />
        <meta name="keywords" content="content, automation, cloud, performance, security, best practices" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Content Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of articles, guides, and insights on automation, 
              cloud architecture, performance optimization, and security best practices.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/automation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Automation
              </Link>
              <Link href="/component-library" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Components
              </Link>
            </div>
          </nav>

          {/* Featured Content */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredContent.map((content, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-blue-600 font-semibold">{content.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h3>
                  <p className="text-gray-600 mb-4">{content.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {content.author} • {content.date}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {category.articles.length} articles
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="space-y-6">
              {contentCategories.flatMap(category => 
                category.articles.map((article, index) => ({
                  ...article,
                  category: category.title,
                  icon: category.icon
                }))
              ).slice(0, 8).map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{article.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600">{article.excerpt}</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-blue-700 mb-6">
              Get the latest insights on automation, cloud architecture, and best practices delivered to your inbox.
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
                <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link></li>
                  <li><a href="https://github.com/Zion-Holdings/zion.app/issues" className="text-blue-600 hover:text-blue-800">GitHub Issues</a></li>
                  <li><Link href="/automation-health" className="text-blue-600 hover:text-blue-800">System Health</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com/Zion-Holdings/zion.app" className="text-blue-600 hover:text-blue-800">GitHub Repository</a></li>
                  <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHub;
import React from 'react';
import Head from 'next/head';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of Autonomous Technology in 2025',
      excerpt: 'Explore the cutting-edge developments in autonomous systems and how they\'re reshaping industries worldwide.',
      author: 'Dr. Sarah Chen',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Technology Trends',
      image: '🚀',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      featured: true,
    },
    {
      title: 'AI-Powered Automation: From Theory to Practice',
      excerpt: 'Real-world implementation strategies for deploying intelligent automation systems in enterprise environments.',
      author: 'Michael Rodriguez',
      date: 'January 12, 2025',
      readTime: '12 min read',
      category: 'AI & Automation',
      image: '🤖',
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
      featured: false,
    },
    {
      title: 'Building Resilient Cloud Infrastructure',
      excerpt: 'Best practices for creating fault-tolerant, scalable cloud systems that can handle any workload.',
      author: 'Alex Thompson',
      date: 'January 10, 2025',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '☁️',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
      featured: false,
    },
    {
      title: 'The Rise of Edge Computing in IoT',
      excerpt: 'How edge computing is revolutionizing IoT deployments and enabling real-time decision making.',
      author: 'Dr. Emily Watson',
      date: 'January 8, 2025',
      readTime: '6 min read',
      category: 'IoT & Edge',
      image: '🌐',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      featured: false,
    },
    {
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the evolving threat landscape and how AI is both a weapon and shield in cybersecurity.',
      author: 'David Kim',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Security',
      image: '🔒',
      color: 'bg-gradient-to-br from-red-400 to-pink-500',
      featured: false,
    },
    {
      title: 'Data Analytics for Business Intelligence',
      excerpt: 'Transform your business data into actionable insights with modern analytics and visualization techniques.',
      author: 'Lisa Chen',
      date: 'January 3, 2025',
      readTime: '7 min read',
      category: 'Data & Analytics',
      image: '📊',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      featured: false,
    },
  ];

  const categories = [
    { name: 'All', count: '25', active: true },
    { name: 'Technology Trends', count: '8' },
    { name: 'AI & Automation', count: '6' },
    { name: 'Cloud Computing', count: '4' },
    { name: 'IoT & Edge', count: '3' },
    { name: 'Security', count: '2' },
    { name: 'Data & Analytics', count: '2' },
  ];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and expert analysis on autonomous technology, AI automation, and the future of cloud computing." />
        <meta property="og:title" content="Blog | Zion Tech Group" />
        <meta property="og:description" content="Latest insights on autonomous technology and AI innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert analysis, industry trends, and cutting-edge insights on autonomous technology
            </p>
            <Button href="/contact" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </Container>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-16 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-12">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                Featured Post
              </span>
            </div>
            
            <Card className="overflow-hidden max-w-4xl mx-auto">
              <div className={`w-full h-64 ${post.color} flex items-center justify-center`}>
                <span className="text-8xl">{post.image}</span>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">Technology Expert</div>
                    </div>
                  </div>
                  
                  <Button href="/blog/featured-post" variant="outline">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest insights and trends in autonomous technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-48 ${post.color} flex items-center justify-center`}>
                  <span className="text-6xl">{post.image}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{post.author}</span>
                    </div>
                    
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  
                  <Button href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} variant="ghost" className="w-full mt-4">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights on autonomous technology delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <Button variant="secondary" size="md">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our autonomous technology can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
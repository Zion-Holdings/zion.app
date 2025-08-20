import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of Autonomous Technology in 2025',
      excerpt: 'Explore how autonomous systems are revolutionizing industries and what to expect in the coming year.',
      author: 'Zion Tech Team',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Technology Trends',
      image: '/api/placeholder/400/250',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AI-Powered Automation: From Theory to Practice',
      excerpt: 'Real-world implementation strategies for deploying intelligent automation systems in your organization.',
      author: 'Dr. Sarah Chen',
      date: 'January 12, 2025',
      readTime: '8 min read',
      category: 'AI & Automation',
      image: '/api/placeholder/400/250',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Building Zero-Downtime Infrastructure',
      excerpt: 'Learn the secrets behind our 99.99% uptime guarantee and how to implement similar systems.',
      author: 'Mike Rodriguez',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Infrastructure',
      image: '/api/placeholder/400/250',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'The Economics of Autonomous Systems',
      excerpt: 'Understanding the ROI and cost benefits of implementing autonomous technology solutions.',
      author: 'Lisa Thompson',
      date: 'January 8, 2025',
      readTime: '7 min read',
      category: 'Business Insights',
      image: '/api/placeholder/400/250',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Content Generation at Scale: Lessons Learned',
      excerpt: 'How we built systems that generate 1000+ articles daily while maintaining quality and accuracy.',
      author: 'Alex Johnson',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Content Strategy',
      image: '/api/placeholder/400/250',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Security in the Age of Autonomous Systems',
      excerpt: 'Best practices for securing AI-powered automation systems and maintaining compliance.',
      author: 'David Kim',
      date: 'January 3, 2025',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const categories = ['All', 'Technology Trends', 'AI & Automation', 'Infrastructure', 'Business Insights', 'Content Strategy', 'Security'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest insights on autonomous technology, AI automation, and industry trends from Zion Tech Group." />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest insights on autonomous technology and AI automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50" spacing="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 gradient-text">
            Latest Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on autonomous technology, AI automation, and industry trends
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className="bg-white" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Featured Post
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Future of Autonomous Technology in 2025
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Explore how autonomous systems are revolutionizing industries and what to expect in the coming year.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>By Zion Tech Team</span>
              <span>•</span>
              <span>January 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Autonomous systems are not just the future—they're already here
              </h3>
              <p className="text-blue-100 mb-6">
                Discover how businesses are leveraging autonomous technology to achieve unprecedented efficiency, 
                innovation, and competitive advantage in today's rapidly evolving digital landscape.
              </p>
              <Button variant="secondary" size="lg">
                Read Full Article
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights and expert analysis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className={`w-full h-48 bg-gradient-to-br ${post.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-lg font-bold mb-2">{post.category}</div>
                    <div className="text-sm opacity-90">Featured Image</div>
                  </div>
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {post.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="text-sm text-gray-500 mb-6">{post.date}</div>
              
              <Button variant="outline" size="sm" className="w-full">
                Read Article
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-white" spacing="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on autonomous technology delivered to your inbox
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <Button type="submit" size="md">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </Section>

      {/* Topics We Cover */}
      <Section className="bg-gray-50" spacing="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Topics We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights across the autonomous technology ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Technology Trends</h3>
            <p className="text-gray-600">
              Stay ahead with insights on emerging technologies and industry developments
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">AI & Automation</h3>
            <p className="text-gray-600">
              Deep dives into artificial intelligence and automation implementation strategies
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Infrastructure</h3>
            <p className="text-gray-600">
              Best practices for building scalable, reliable autonomous systems
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Business Insights</h3>
            <p className="text-gray-600">
              Strategic guidance on implementing autonomous technology for business growth
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Content Strategy</h3>
            <p className="text-gray-600">
              Strategies for leveraging AI-powered content generation and optimization
            </p>
          </Card>
          
          <Card className="text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Security</h3>
            <p className="text-gray-600">
              Best practices for securing autonomous systems and maintaining compliance
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our services and discover how autonomous technology can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/services">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
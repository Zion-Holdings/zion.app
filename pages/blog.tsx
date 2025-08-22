import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI-Powered Automation in 2024',
      excerpt: 'Discover the latest trends and innovations in AI automation that are reshaping industries and transforming business operations.',
      author: 'Dr. Sarah Chen',
      date: 'January 15, 2024',
      readTime: '8 min read',
      category: 'AI & Automation',
      image: '🤖',
      color: 'text-cyan-400',
      featured: true,
    },
    {
      title: 'Building Scalable Cloud Infrastructure with AI',
      excerpt: 'Learn how to leverage artificial intelligence to create self-healing, auto-scaling cloud systems that adapt to your needs.',
      author: 'Michael Rodriguez',
      date: 'January 12, 2024',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '☁️',
      color: 'text-blue-400',
      featured: false,
    },
    {
      title: 'Machine Learning in Healthcare: A Comprehensive Guide',
      excerpt: 'Explore how machine learning is revolutionizing healthcare delivery, from diagnosis to treatment planning and patient care.',
      author: 'Dr. Emily Watson',
      date: 'January 10, 2024',
      readTime: '15 min read',
      category: 'Healthcare Tech',
      image: '🏥',
      color: 'text-green-400',
      featured: false,
    },
    {
      title: 'DevOps Automation: From CI/CD to Autonomous Operations',
      excerpt: 'Discover how to implement intelligent DevOps practices that reduce manual work and improve deployment reliability.',
      author: 'Alex Thompson',
      date: 'January 8, 2024',
      readTime: '10 min read',
      category: 'DevOps',
      image: '⚙️',
      color: 'text-purple-400',
      featured: false,
    },
    {
      title: 'Data Privacy in the Age of AI: Best Practices',
      excerpt: 'Essential strategies for maintaining data privacy and security while leveraging AI technologies for business growth.',
      author: 'Lisa Park',
      date: 'January 5, 2024',
      readTime: '11 min read',
      category: 'Security',
      image: '🔒',
      color: 'text-orange-400',
      featured: false,
    },
    {
      title: 'The Rise of Autonomous Business Systems',
      excerpt: 'How businesses are implementing self-managing systems that operate independently and continuously improve performance.',
      author: 'David Kim',
      date: 'January 3, 2024',
      readTime: '9 min read',
      category: 'Business Innovation',
      image: '🚀',
      color: 'text-fuchsia-400',
      featured: false,
    },
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Healthcare Tech', 'DevOps', 'Security', 'Business Innovation'];

  return (
    <>
      <Head>
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, automation, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta property="og:title" content="Blog | Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI and technology trends." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with expert insights on AI, automation, and the future of technology
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 border border-gray-700 hover:border-blue-500"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30 mb-6">
                Featured Post
              </span>
            </div>
            
            <Card className="p-12 group hover:border-blue-400/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-4 ${post.color}`}>
                    {post.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-sm">{post.date}</div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button
                    href="/blog/ai-automation-trends-2025"
                    size="lg"
                    className="group-hover:shadow-xl hover:shadow-cyan-500/30 transition-transform duration-200"
                  >
                    Read Full Article
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="text-8xl group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                    {post.image}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our latest insights and expert analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={index}
                className="group hover:border-blue-400/30 overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                  {post.image}
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-3 ${post.color}`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{post.author}</div>
                      <div className="text-gray-400 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {post.readTime}
                  </div>
                </div>

                <Button
                  href="/blog/ai-automation-trends-2025"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Read Article
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, automation, and technology trends delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                type="submit"
                size="md"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
                         Let&apos;s discuss how our AI-powered solutions can drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
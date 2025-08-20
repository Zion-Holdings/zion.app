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
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,162,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text-white leading-tight tracking-tight">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Stay ahead with expert insights on AI, automation, and the future of technology
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((featuredPost, index) => (
        <section key={index} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,122,204,0.05),transparent_50%)]" />
          
          <div className="container-cursor relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-white">
                Featured Article
              </h2>
            </div>
            
            <Card
              variant="elevated"
              className="max-w-4xl mx-auto group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 hover-lift"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">{featuredPost.image}</div>
                <span className="inline-block px-4 py-2 bg-cursor-blue/20 text-cursor-blue text-sm rounded-full border border-cursor-blue/30 mb-4">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-cursor-blue transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mb-6">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button
                  href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  size="lg"
                  className="hover-lift"
                >
                  Read Full Article
                </Button>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,122,204,0.03),transparent_50%)]" />
        
        <div className="container-cursor relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text-white leading-tight">
              Latest Articles
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Explore our collection of insights and thought leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={index}
                variant="glass"
                className="group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 hover-lift relative overflow-hidden"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cursor-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50 mb-4">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cursor-blue transition-colors duration-300 relative z-10">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 relative z-10">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="text-sm text-gray-400 mb-6 relative z-10">
                  {post.date}
                </div>
                
                <Button
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  variant="outline"
                  size="sm"
                  className="w-full hover-lift"
                >
                  Read More
                </Button>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cursor-blue to-blue-600 group-hover:w-full transition-all duration-500" />
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
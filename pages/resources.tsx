import React from 'react';
import Head from 'next/head';


import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'AI Implementation Guide',
      description: 'A comprehensive guide to implementing AI solutions in your business, from strategy to deployment.',
      type: 'Guide',
      category: 'AI & Automation',
      downloadUrl: '/docs',
      image: '📚',
      color: 'text-cyan-400',
      size: '2.4 MB',
      format: 'PDF'
    },
    {
      title: 'Cloud Architecture Best Practices',
      description: 'Learn the best practices for building scalable, secure, and efficient cloud infrastructure.',
      type: 'Whitepaper',
      category: 'Cloud Computing',
      downloadUrl: '/docs',
      image: '☁️',
      color: 'text-blue-400',
      size: '1.8 MB',
      format: 'PDF'
    },
    {
      title: 'DevOps Automation Checklist',
      description: 'A practical checklist for implementing DevOps automation in your organization.',
      type: 'Checklist',
      category: 'DevOps',
      downloadUrl: '/docs',
      image: '⚙️',
      color: 'text-purple-400',
      size: '856 KB',
      format: 'PDF'
    },
    {
      title: 'Data Security Framework',
      description: 'Comprehensive framework for ensuring data security and compliance in AI systems.',
      type: 'Framework',
      category: 'Security',
      downloadUrl: '/docs',
      image: '🔒',
      color: 'text-green-400',
      size: '3.2 MB',
      format: 'PDF'
    },
    {
      title: 'Performance Optimization Guide',
      description: 'Advanced techniques for optimizing AI and automation system performance.',
      type: 'Guide',
      category: 'Performance',
      downloadUrl: '/docs',
      image: '🚀',
      color: 'text-orange-400',
      size: '2.1 MB',
      format: 'PDF'
    },
    {
      title: 'Technology Stack Comparison',
      description: 'Detailed comparison of different technology stacks for AI and automation projects.',
      type: 'Analysis',
      category: 'Technology',
      downloadUrl: '/docs',
      image: '⚡',
      color: 'text-fuchsia-400',
      size: '1.5 MB',
      format: 'PDF'
    }
  ];

  const tools = [
    {
      name: 'AI Project Calculator',
      description: 'Calculate the ROI and timeline for your AI implementation project.',
      category: 'Calculator',
      image: '🧮',
      color: 'text-cyan-400',
      url: '/contact'
    },
    {
      name: 'Performance Benchmark Tool',
      description: 'Benchmark your systems against industry standards and best practices.',
      category: 'Tool',
      image: '📊',
      color: 'text-blue-400',
      url: '/contact'
    },
    {
      name: 'Security Assessment Framework',
      description: 'Assess the security posture of your AI and automation systems.',
      category: 'Framework',
      image: '🛡️',
      color: 'text-green-400',
      url: '/contact'
    },
    {
      name: 'Cost Optimization Analyzer',
      description: 'Analyze and optimize costs for cloud infrastructure and AI services.',
      category: 'Analyzer',
      image: '💰',
      color: 'text-purple-400',
      url: '/contact'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'DevOps', 'Security', 'Performance', 'Technology'];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - Tools & Guides</title>
        <meta name="description" content="Access comprehensive resources, tools, and guides to help you implement AI and automation solutions effectively." />
        <meta property="og:title" content="Resources | Zion Tech Group" />
        <meta property="og:description" content="Tools, guides, and resources for AI implementation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Resources & Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive resources, guides, and tools to accelerate your AI and automation journey
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category} className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 border border-gray-700 hover:border-blue-500">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert guides, frameworks, and whitepapers to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index} className="group hover:border-blue-400/30 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {resource.image}
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-3 ${resource.color}`}>
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                  <span>{resource.format}</span>
                </div>

                <a
                  href={resource.downloadUrl} className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                  Download Resource
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Interactive Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical tools and calculators to help you plan and implement your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index} className="text-center group hover:border-blue-400/30 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tool.image}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {tool.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {tool.description}
                </p>
                
                <span className={`inline-block px-3 py-1 bg-gray-800 text-xs rounded-full mb-4 ${tool.color}`}>
                  {tool.category}
                </span>
                
                <a
                  href={tool.url} className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                  Launch Tool
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Video Tutorials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Step-by-step video guides to help you master AI and automation implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Getting Started with AI Automation',
                duration: '15:32',
                thumbnail: '🎬',
                category: 'Beginner'
              },
              {
                title: 'Advanced Cloud Infrastructure Setup',
                duration: '28:45',
                thumbnail: '☁️',
                category: 'Advanced'
              },
              {
                title: 'Security Best Practices for AI Systems',
                duration: '22:18',
                thumbnail: '🔒',
                category: 'Intermediate'
              }
            ].map((video, index) => (
              <div
                key={index} className="group hover:border-blue-400/30 overflow-hidden p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className="text-8xl text-center py-8 group-hover:scale-110 transition-transform duration-300">
                    {video.thumbnail}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-800 text-blue-400 text-xs rounded-full mb-3">
                    {video.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {video.title}
                  </h3>
                  
                  <a
                    href="/resources" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200">
                    Watch Tutorial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Support */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with experts, share experiences, and get support from our community of AI and automation professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: '💬', title: 'Discord Community', description: 'Join discussions and get real-time help' },
                { icon: '📧', title: 'Email Support', description: 'Get expert guidance via email' },
                { icon: '📚', title: 'Documentation', description: 'Comprehensive guides and references' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="group-hover:scale-105 transition-transform duration-200">
                Join Discord
              </a>
              <a
                href="/contact"
                
                
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
                         Can&apos;t find what you&apos;re looking for? Our experts are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Expert Help
            </a>
            <a
              href="/services" className="border-white text-white hover:bg-white hover:text-blue-600">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
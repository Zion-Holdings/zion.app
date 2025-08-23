import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      readTime: '8 min read',
      category: 'Manufacturing'
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      readTime: '6 min read',
      category: 'Marketing'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      readTime: '10 min read',
      category: 'Technology'
    },
    {
      id: 'financial-automation',
      title: 'Financial Process Automation',
      company: 'Regional Bank',
      industry: 'Finance',
      results: '70% faster processing, 90% error reduction',
      description: 'Automating complex financial workflows with AI-powered decision systems.',
      readTime: '7 min read',
      category: 'Finance'
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI Implementation',
      company: 'Hospital Network',
      industry: 'Healthcare',
      results: '45% improvement in diagnosis accuracy, 30% reduction in wait times',
      description: 'Implementing AI-powered diagnostic and patient management systems.',
      readTime: '9 min read',
      category: 'Healthcare'
    },
    {
      id: 'retail-automation',
      title: 'Retail Automation Revolution',
      company: 'National Retail Chain',
      industry: 'Retail',
      results: '3x inventory turnover, 25% increase in customer satisfaction',
      description: 'Transforming retail operations with autonomous inventory and customer service systems.',
      readTime: '5 min read',
      category: 'Retail'
    }
  ];

  const toolsAndPlatforms = [
    {
      id: 'autonomous-systems-guide',
      title: 'The Complete Guide to Autonomous Systems',
      description: 'A comprehensive overview of autonomous technology, implementation strategies, and best practices.',
      downloadUrl: '#',
      pages: '45',
      category: 'Technology',
      author: 'Dr. Sarah Chen',
      date: '2025',
      rating: '4.9/5'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
      downloadUrl: '#',
      pages: '32',
      category: 'Ethics',
      author: 'Prof. Michael Rodriguez',
      date: '2025',
      rating: '4.8/5'
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator Guide',
      description: 'How to calculate and maximize return on investment for automation initiatives.',
      downloadUrl: '#',
      pages: '28',
      category: 'Business',
      author: 'Lisa Thompson',
      date: '2025',
      rating: '4.7/5'
    },
    {
      id: 'cloud-migration-strategy',
      title: 'Cloud Migration Strategy Guide',
      description: 'Step-by-step approach to migrating legacy systems to modern cloud infrastructure.',
      downloadUrl: '#',
      pages: '38',
      category: 'Technology',
      author: 'David Kim',
      date: '2025',
      rating: '4.9/5'
    },
    {
      id: 'ai-implementation-playbook',
      title: 'AI Implementation Playbook',
      description: 'Practical guide for successfully implementing AI solutions in your organization.',
      downloadUrl: '#',
      pages: '52',
      category: 'Technology',
      author: 'Dr. Emily Watson',
      date: '2025',
      rating: '4.8/5'
    },
    {
      id: 'data-governance-framework',
      title: 'Data Governance Framework',
      description: 'Comprehensive framework for managing data quality, security, and compliance.',
      downloadUrl: '#',
      pages: '41',
      category: 'Compliance',
      author: 'James Wilson',
      date: '2025',
      rating: '4.7/5'
    }
  ];

  const learningPaths = [
    {
      id: 'automation-assessment',
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes',
      features: ['Custom scoring', 'Detailed report', 'Action plan']
    },
    {
      id: 'ai-maturity-model',
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes',
      features: ['Maturity levels', 'Gap analysis', 'Roadmap']
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes',
      features: ['Industry data', 'Custom metrics', 'Trends']
    },
    {
      id: 'cost-calculator',
      title: 'Automation Cost Calculator',
      description: 'Calculate the total cost of ownership for automation initiatives.',
      type: 'Financial Tool',
      estimatedTime: '25 minutes',
      features: ['ROI projection', 'Cost breakdown', 'Savings analysis']
    },
    {
      id: 'security-assessment',
      title: 'AI Security Assessment',
      description: 'Evaluate the security posture of your AI and automation systems.',
      type: 'Security Tool',
      estimatedTime: '35 minutes',
      features: ['Vulnerability scan', 'Compliance check', 'Risk assessment']
    },
    {
      id: 'scalability-analyzer',
      title: 'Scalability Analyzer',
      description: 'Analyze how well your current systems can scale with automation.',
      type: 'Analysis Tool',
      estimatedTime: '20 minutes',
      features: ['Capacity planning', 'Bottleneck detection', 'Growth projection']
    }
  ];

  const videoContent = [
    {
      id: 'ai-automation-overview',
      title: 'AI Automation Overview',
      description: 'Introduction to autonomous AI systems and their business applications.',
      duration: '15:32',
      thumbnail: '🎥',
      category: 'Introduction'
    },
    {
      id: 'implementation-walkthrough',
      title: 'Implementation Walkthrough',
      description: 'Step-by-step guide to implementing AI automation in your business.',
      duration: '28:45',
      thumbnail: '🎬',
      category: 'Implementation'
    },
    {
      id: 'case-study-deep-dive',
      title: 'Case Study Deep Dive',
      description: 'Detailed analysis of successful AI automation implementations.',
      duration: '22:18',
      thumbnail: '📊',
      category: 'Case Studies'
    },
    {
      id: 'future-trends',
      title: 'Future of AI Automation',
      description: 'Exploring emerging trends and technologies in autonomous systems.',
      duration: '19:56',
      thumbnail: '🚀',
      category: 'Trends'
    }
  ];

  const webinars = [
    {
      id: 'ai-automation-webinar',
      title: 'AI Automation Masterclass',
      description: 'Learn the fundamentals of implementing AI automation in your business.',
      date: 'January 25, 2025',
      time: '2:00 PM EST',
      speaker: 'Dr. Sarah Chen',
      duration: '90 minutes'
    },
    {
      id: 'cloud-automation-webinar',
      title: 'Cloud Automation Strategies',
      description: 'Discover how to automate your cloud infrastructure for maximum efficiency.',
      date: 'February 8, 2025',
      time: '1:00 PM EST',
      speaker: 'David Kim',
      duration: '75 minutes'
    },
    {
      id: 'data-automation-webinar',
      title: 'Data Automation & Analytics',
      description: 'Transform your data operations with intelligent automation systems.',
      date: 'February 22, 2025',
      time: '3:00 PM EST',
      speaker: 'Dr. Emily Watson',
      duration: '60 minutes'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Learning Hub</title>
        <meta name="description" content="Comprehensive resources for AI automation, machine learning, and autonomous systems. Find tools, tutorials, courses, and research materials." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Learning Hub" />
        <meta property="og:description" content="Comprehensive resources for AI automation, machine learning, and autonomous systems." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>

            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI & Automation Resources
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive resources to help you understand, implement, and optimize AI automation solutions
              </p>
            </section>

            {/* Quick Access Tools */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Quick Access Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-cyan-400">{tool.title}</h3>
                      <span className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full">{tool.type}</span>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{tool.description}</p>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                      <span>⏱️ {tool.estimatedTime}</span>
                    </div>
                    <div className="space-y-1 mb-4">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="text-xs text-white/60">• {feature}</div>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2 bg-cyan-400/20 text-cyan-300 rounded-lg hover:bg-cyan-400/30 transition-colors text-sm font-medium">
                      Launch Tool
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs bg-fuchsia-400/20 text-fuchsia-300 px-2 py-1 rounded-full">{study.category}</span>
                      <span className="text-xs text-white/50">{study.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-white/60 mb-2">{study.company} • {study.industry}</p>
                    <p className="text-white/70 text-sm mb-3">{study.description}</p>
                    <div className="bg-green-400/20 text-green-300 text-xs p-2 rounded-lg mb-3">
                      <strong>Results:</strong> {study.results}
                    </div>
                    <button className="w-full px-4 py-2 bg-fuchsia-400/20 text-fuchsia-300 rounded-lg hover:bg-fuchsia-400/30 transition-colors text-sm font-medium">
                      Read Case Study
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Whitepapers & Guides */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Whitepapers & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whitepapers.map((paper) => (
                  <div key={paper.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">{paper.category}</span>
                      <div className="text-right">
                        <div className="text-xs text-white/50">{paper.pages} pages</div>
                        <div className="text-xs text-yellow-400">⭐ {paper.rating}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{paper.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{paper.description}</p>
                    <div className="text-xs text-white/50 mb-4">
                      By {paper.author} • {paper.date}
                    </div>
                    <button className="w-full px-4 py-2 bg-green-400/20 text-green-300 rounded-lg hover:bg-green-400/30 transition-colors text-sm font-medium">
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Content */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Video Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoContent.map((video) => (
                  <div key={video.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-3">{video.thumbnail}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{video.description}</p>
                    <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                      <span>{video.duration}</span>
                      <span className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full">{video.category}</span>
                    </div>
                    <button className="w-full px-4 py-2 bg-blue-400/20 text-blue-300 rounded-lg hover:bg-blue-400/30 transition-colors text-sm font-medium">
                      Watch Video
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Webinars */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Upcoming Webinars</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {webinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{webinar.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{webinar.description}</p>
                    <div className="space-y-2 text-xs text-white/50 mb-4">
                      <div>📅 {webinar.date}</div>
                      <div>⏰ {webinar.time}</div>
                      <div>👤 {webinar.speaker}</div>
                      <div>⏱️ {webinar.duration}</div>
                    </div>
                    <button className="w-full px-4 py-2 bg-purple-400/20 text-purple-300 rounded-lg hover:bg-purple-400/30 transition-colors text-sm font-medium">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Resource Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-white/90">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Technology', 'Business', 'Implementation', 'Case Studies', 'Tools', 'Webinars', 'Whitepapers', 'Video'].map((category) => (
                  <Link key={category} href={`#${category.toLowerCase()}`} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {category === 'Technology' && '🔧'}
                      {category === 'Business' && '💼'}
                      {category === 'Implementation' && '🚀'}
                      {category === 'Case Studies' && '📊'}
                      {category === 'Tools' && '🛠️'}
                      {category === 'Webinars' && '📺'}
                      {category === 'Whitepapers' && '📚'}
                      {category === 'Video' && '🎥'}
                    </div>
                    <h3 className="text-white font-semibold">{category}</h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-xl text-white/80 mb-8">
                  Get the latest insights, case studies, and automation tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-white/60 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
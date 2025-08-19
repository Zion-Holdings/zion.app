import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.'
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.'
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.'
    }
  ];

  const whitepapers = [
    {
      id: 'autonomous-systems-guide',
      title: 'The Complete Guide to Autonomous Systems',
      description: 'A comprehensive overview of autonomous technology, implementation strategies, and best practices.',
      downloadUrl: '#',
      pages: '45',
      category: 'Technology'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
      downloadUrl: '#',
      pages: '32',
      category: 'Ethics'
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator Guide',
      description: 'How to calculate and maximize return on investment for automation initiatives.',
      downloadUrl: '#',
      pages: '28',
      category: 'Business'
    }
  ];

  const tools = [
    {
      id: 'automation-assessment',
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes'
    },
    {
      id: 'ai-maturity-model',
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes'
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes'
    },
    {
      id: 'cost-calculator',
      title: 'AI Implementation Cost Calculator',
      description: 'Estimate the total cost of ownership for AI automation projects.',
      type: 'Financial Tool',
      estimatedTime: '25 minutes'
    },
    {
      id: 'security-audit',
      title: 'AI Security Assessment Tool',
      description: 'Evaluate the security posture of your AI systems and identify vulnerabilities.',
      type: 'Security Tool',
      estimatedTime: '45 minutes'
    },
    {
      id: 'compliance-checker',
      title: 'AI Compliance Checker',
      description: 'Ensure your AI systems meet regulatory requirements and industry standards.',
      type: 'Compliance Tool',
      estimatedTime: '35 minutes'
    }
  ];

  const trainingPrograms = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals for Business Leaders',
      description: 'Essential AI concepts and strategies for executives and decision-makers.',
      duration: '2 days',
      level: 'Beginner',
      format: 'In-person & Virtual'
    },
    {
      id: 'automation-implementation',
      title: 'Automation Implementation Masterclass',
      description: 'Step-by-step guide to implementing AI automation in your organization.',
      duration: '3 days',
      level: 'Intermediate',
      format: 'Workshop'
    },
    {
      id: 'ai-ethics-leadership',
      title: 'AI Ethics Leadership Program',
      description: 'Develop ethical AI strategies and governance frameworks for your organization.',
      duration: '1 day',
      level: 'Advanced',
      format: 'Executive Session'
    }
  ];

  const webinars = [
    {
      id: 'future-of-automation',
      title: 'The Future of Automation: 2025 and Beyond',
      description: 'Explore emerging trends and technologies that will shape automation in the coming years.',
      date: 'January 25, 2025',
      duration: '60 minutes',
      speakers: ['Dr. Sarah Chen', 'Marcus Rodriguez']
    },
    {
      id: 'ai-roi-strategies',
      title: 'Maximizing AI ROI: Proven Strategies',
      description: 'Learn how to measure and maximize return on investment for AI initiatives.',
      date: 'February 8, 2025',
      duration: '45 minutes',
      speakers: ['Jennifer Park', 'David Thompson']
    },
    {
      id: 'ethical-ai-implementation',
      title: 'Building Ethical AI Systems',
      description: 'Best practices for implementing AI systems that are fair, transparent, and accountable.',
      date: 'February 22, 2025',
      duration: '75 minutes',
      speakers: ['Dr. Michael Chang', 'Lisa Rodriguez']
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Resources</title>
        <meta name="description" content="Access case studies, whitepapers, tools, and resources to help you understand and implement AI automation solutions." />
        <meta property="og:title" content="Resources | Zion Tech Group" />
        <meta property="og:description" content="Access case studies, whitepapers, tools, and resources for AI automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <nav className="mb-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Home
              </Link>
            </nav>
            
            <header className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Resources & Tools
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Access our comprehensive collection of case studies, whitepapers, tools, and resources 
                to accelerate your AI automation journey.
              </p>
            </header>
            
            {/* Case Studies Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{study.company}</p>
                    <p className="text-white/80 text-sm mb-4">{study.description}</p>
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-400 mb-2">Results</h4>
                      <p className="text-white/70 text-sm">{study.results}</p>
                    </div>
                    <Link 
                      href={`/resources/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Read Full Case Study
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Whitepapers Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Whitepapers & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whitepapers.map((paper) => (
                  <div key={paper.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                        {paper.category}
                      </span>
                      <span className="text-white/60 text-sm">{paper.pages} pages</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{paper.title}</h3>
                    <p className="text-white/80 text-sm mb-6">{paper.description}</p>
                    <a 
                      href={paper.downloadUrl}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300"
                    >
                      Download Whitepaper
                      <span aria-hidden>↓</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Tools Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Interactive Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tools.map((tool) => (
                  <div key={tool.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{tool.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{tool.description}</p>
                    <div className="space-y-2 mb-6">
                      <span className="inline-block px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        {tool.type}
                      </span>
                      <span className="block text-white/60 text-xs">Est. time: {tool.estimatedTime}</span>
                    </div>
                    <Link 
                      href={`/resources/tools/${tool.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300"
                    >
                      Launch Tool
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Training Programs */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Training & Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingPrograms.map(program => (
                  <div key={program.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-xs rounded-full border border-fuchsia-400/30">
                        {program.level}
                      </span>
                      <span className="text-white/60 text-xs">{program.duration}</span>
                      <span className="text-white/60 text-xs">•</span>
                      <span className="text-white/60 text-xs">{program.format}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{program.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{program.description}</p>
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Webinars */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Webinars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.map(webinar => (
                  <div key={webinar.id} className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        {webinar.duration}
                      </span>
                      <span className="text-white/60 text-xs">{webinar.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{webinar.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{webinar.description}</p>
                    <div className="mb-4">
                      <p className="text-white/60 text-xs mb-2">Speakers:</p>
                      <div className="flex flex-wrap gap-2">
                        {webinar.speakers.map((speaker, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded border border-white/20">
                            {speaker}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-lg font-medium hover:from-green-500 hover:to-emerald-500 transition-all duration-300">
                      Reserve Your Spot
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Stay Updated with New Resources</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Get notified when we release new case studies, whitepapers, and tools. 
                  Be the first to access our latest AI automation insights and resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </section>
            
            {/* Related Pages */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Explore More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Our Services</h3>
                  <p className="text-white/80 text-sm">Discover our comprehensive AI automation solutions</p>
                </Link>
                
                <Link href="/blog" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Blog & Insights</h3>
                  <p className="text-white/80 text-sm">Read our latest thoughts on AI and automation</p>
                </Link>
                
                <Link href="/contact" className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Get in Touch</h3>
                  <p className="text-white/80 text-sm">Have questions about our resources?</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
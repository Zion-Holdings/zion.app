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
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      duration: '6 months',
      teamSize: '8 engineers',
      technologies: ['Computer Vision', 'IoT Sensors', 'Predictive Analytics', 'Robotic Process Automation']
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      duration: '4 months',
      teamSize: '5 developers',
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'Social Media Integration']
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      duration: '8 months',
      teamSize: '12 engineers',
      technologies: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Auto-scaling Algorithms']
    },
    {
      id: 'financial-fraud-detection',
      title: 'AI-Powered Financial Fraud Detection',
      company: 'Major Banking Institution',
      industry: 'Financial Services',
      results: '95% fraud detection accuracy, 80% reduction in false positives',
      description: 'Implementing machine learning systems to detect and prevent financial fraud in real-time.',
      duration: '10 months',
      teamSize: '15 data scientists',
      technologies: ['Machine Learning', 'Real-time Analytics', 'Anomaly Detection', 'Blockchain Integration']
    },
    {
      id: 'healthcare-diagnostic-automation',
      title: 'Healthcare Diagnostic Automation',
      company: 'Regional Hospital Network',
      industry: 'Healthcare',
      results: '70% faster diagnosis, 90% accuracy improvement',
      description: 'Automating medical image analysis and diagnostic processes using advanced AI algorithms.',
      duration: '12 months',
      teamSize: '20 specialists',
      technologies: ['Computer Vision', 'Medical Imaging AI', 'HIPAA Compliance', 'Real-time Processing']
    },
    {
      id: 'retail-inventory-optimization',
      title: 'Retail Inventory Optimization',
      company: 'National Retail Chain',
      industry: 'Retail',
      results: '30% reduction in inventory costs, 25% increase in sales',
      description: 'AI-powered demand forecasting and inventory management optimization.',
      duration: '5 months',
      teamSize: '6 analysts',
      technologies: ['Predictive Analytics', 'Demand Forecasting', 'Supply Chain Optimization', 'Real-time Monitoring']
    }
  ];

  const whitepapers = [
    {
      id: 'autonomous-systems-guide',
      title: 'The Complete Guide to Autonomous Systems',
      description: 'A comprehensive overview of autonomous technology, implementation strategies, and best practices.',
      downloadUrl: '#',
      pages: '45',
      category: 'Technology',
      lastUpdated: 'January 2025',
      author: 'Dr. Sarah Chen, AI Research Director'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
      downloadUrl: '#',
      pages: '32',
      category: 'Ethics',
      lastUpdated: 'December 2024',
      author: 'Prof. Michael Rodriguez, Ethics & AI Specialist'
    },
    {
      id: 'automation-roi-calculator',
      title: 'Automation ROI Calculator Guide',
      description: 'How to calculate and maximize return on investment for automation initiatives.',
      downloadUrl: '#',
      pages: '28',
      category: 'Business',
      lastUpdated: 'November 2024',
      author: 'Lisa Thompson, Business Strategy Consultant'
    },
    {
      id: 'cybersecurity-ai-implementation',
      title: 'Cybersecurity Best Practices for AI Systems',
      description: 'Comprehensive security guidelines for implementing and maintaining AI systems in enterprise environments.',
      downloadUrl: '#',
      pages: '38',
      category: 'Security',
      lastUpdated: 'January 2025',
      author: 'David Kim, Cybersecurity Expert'
    },
    {
      id: 'machine-learning-production',
      title: 'Machine Learning in Production: A Practical Guide',
      description: 'Best practices for deploying, monitoring, and maintaining machine learning models in production environments.',
      downloadUrl: '#',
      pages: '52',
      category: 'Technology',
      lastUpdated: 'December 2024',
      author: 'Dr. Emily Watson, ML Engineering Lead'
    },
    {
      id: 'ai-transformation-roadmap',
      title: 'AI Transformation Roadmap for Enterprises',
      description: 'A step-by-step guide to planning and executing successful AI transformation initiatives.',
      downloadUrl: '#',
      pages: '41',
      category: 'Strategy',
      lastUpdated: 'January 2025',
      author: 'James Wilson, Digital Transformation Advisor'
    }
  ];

  const tools = [
    {
      id: 'automation-assessment',
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes',
      features: ['Customized scoring', 'Industry benchmarking', 'Actionable recommendations', 'Progress tracking']
    },
    {
      id: 'ai-maturity-model',
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes',
      features: ['5-level maturity assessment', 'Capability mapping', 'Gap analysis', 'Roadmap planning']
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes',
      features: ['Real-time metrics', 'Industry comparisons', 'Performance trends', 'Optimization suggestions']
    },
    {
      id: 'security-assessment',
      title: 'AI Security Assessment Tool',
      description: 'Comprehensive security evaluation for AI systems and implementations.',
      type: 'Security Tool',
      estimatedTime: '45 minutes',
      features: ['Vulnerability scanning', 'Compliance checking', 'Risk assessment', 'Security recommendations']
    },
    {
      id: 'cost-calculator',
      title: 'AI Implementation Cost Calculator',
      description: 'Estimate the total cost of ownership for AI automation initiatives.',
      type: 'Financial Tool',
      estimatedTime: '25 minutes',
      features: ['Cost breakdown', 'ROI projections', 'Budget planning', 'Resource allocation']
    },
    {
      id: 'talent-assessment',
      title: 'AI Talent Assessment Framework',
      description: 'Evaluate your team\'s AI capabilities and identify skill gaps.',
      type: 'Assessment Tool',
      estimatedTime: '35 minutes',
      features: ['Skill evaluation', 'Gap analysis', 'Training recommendations', 'Team development planning']
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
            
            {/* Training & Certification Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Training & Certification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Fundamentals Course</h3>
                  <p className="text-white/80 text-sm mb-4">Master the basics of artificial intelligence and machine learning.</p>
                  <div className="space-y-2 mb-6">
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30">
                      Beginner
                    </span>
                    <span className="block text-white/60 text-xs">Duration: 8 weeks</span>
                    <span className="block text-white/60 text-xs">Certification included</span>
                  </div>
                  <Link 
                    href="/training/ai-fundamentals"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300"
                  >
                    Enroll Now
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Advanced Automation</h3>
                  <p className="text-white/80 text-sm mb-4">Deep dive into enterprise automation and AI deployment.</p>
                  <div className="space-y-2 mb-6">
                    <span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full border border-purple-400/30">
                      Advanced
                    </span>
                    <span className="block text-white/60 text-xs">Duration: 12 weeks</span>
                    <span className="block text-white/60 text-xs">Hands-on projects</span>
                  </div>
                  <Link 
                    href="/training/advanced-automation"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-indigo-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
                  >
                    Enroll Now
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Security Specialist</h3>
                  <p className="text-white/80 text-sm mb-4">Learn to secure AI systems and protect against emerging threats.</p>
                  <div className="space-y-2 mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                      Intermediate
                    </span>
                    <span className="block text-white/60 text-xs">Duration: 10 weeks</span>
                    <span className="block text-white/60 text-xs">Security certification</span>
                  </div>
                  <Link 
                    href="/training/ai-security"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Enroll Now
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Community & Events Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Community & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-emerald-400/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-white">AI Automation Summit 2025</h3>
                  <p className="text-white/80 text-sm mb-4">Join industry leaders and experts for the premier AI automation conference.</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>📅</span>
                      <span>March 15-17, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>📍</span>
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>🎯</span>
                      <span>500+ attendees expected</span>
                    </div>
                  </div>
                  <Link 
                    href="/events/summit-2025"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300"
                  >
                    Register Now
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-pink-400/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-white">AI Innovation Lab</h3>
                  <p className="text-white/80 text-sm mb-4">Collaborate with peers in our monthly innovation workshops and hackathons.</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>🔄</span>
                      <span>Monthly workshops</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>👥</span>
                      <span>Open to all skill levels</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span>🏆</span>
                      <span>Prizes and recognition</span>
                    </div>
                  </div>
                  <Link 
                    href="/community/innovation-lab"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transition-all duration-300"
                  >
                    Join Community
                    <span aria-hidden>→</span>
                  </Link>
                </div>
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
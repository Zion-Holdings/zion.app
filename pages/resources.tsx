import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, Star, Zap, BookOpen, Users, Calendar, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, GraduationCap, DollarSign, Clock, Target, Code, Handshake
} from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
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
      id: 'healthcare-ai-transformation',
      title: 'AI-Powered Healthcare Diagnosis',
      company: 'Metropolitan Medical Center',
      industry: 'Healthcare',
      results: '35% improvement in diagnostic accuracy, 45% reduction in wait times',
      description: 'Implementing AI diagnostic systems to enhance patient care and operational efficiency.'
    },
    {
      id: 'financial-services-automation',
      title: 'Intelligent Financial Services Automation',
      company: 'Global Bank International',
      industry: 'Financial Services',
      results: '70% faster transaction processing, 99.99% fraud detection accuracy',
      description: 'Building autonomous financial systems for secure, efficient banking operations.'
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
      id: 'smart-city-infrastructure',
      title: 'Smart City Infrastructure Management',
      company: 'City of Innovation',
      industry: 'Government',
      results: '30% reduction in energy consumption, 50% improvement in traffic flow',
      description: 'Creating intelligent urban infrastructure through AI and IoT integration.'
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

  const upcomingEvents = [
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
      id: 'edge-computing-healthcare',
      title: 'Edge AI in Healthcare: A Comprehensive Guide',
      description: 'Exploring the implementation of edge AI systems in healthcare for improved patient outcomes and operational efficiency.',
      downloadUrl: '#',
      pages: '38',
      category: 'Healthcare'
    },
    {
      id: 'cybersecurity-autonomous-systems',
      title: 'Securing Autonomous Systems: Best Practices',
      description: 'Essential cybersecurity strategies for protecting AI-powered autonomous infrastructure.',
      downloadUrl: '#',
      pages: '41',
      category: 'Security'
    },
    {
      id: 'sustainable-ai-implementation',
      title: 'Sustainable AI: Green Computing for Autonomous Systems',
      description: 'Implementing environmentally conscious AI systems while maintaining performance and reliability.',
      downloadUrl: '#',
      pages: '29',
      category: 'Sustainability'
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

  const researchAreas = [
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
      id: 'cybersecurity-audit-tool',
      title: 'AI Security Audit Tool',
      description: 'Comprehensive security assessment for autonomous systems and AI infrastructure.',
      type: 'Security Tool',
      estimatedTime: '45 minutes'
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes'
    },
    {
      id: 'sustainability-calculator',
      title: 'AI Sustainability Calculator',
      description: 'Measure the environmental impact of your AI systems and identify optimization opportunities.',
      type: 'Environmental Tool',
      estimatedTime: '25 minutes'
    },
    {
      id: 'edge-computing-optimizer',
      title: 'Edge Computing Optimizer',
      description: 'Optimize your edge AI deployment for maximum performance and efficiency.',
      type: 'Optimization Tool',
      estimatedTime: '35 minutes'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Resources</title>
        <meta name="description" content="Access comprehensive resources, whitepapers, case studies, and tools for implementing autonomous systems and AI automation in your organization." />
        <meta property="og:title" content="Resources | Zion Tech Group - AI & Automation Resources" />
        <meta property="og:description" content="Access comprehensive resources, whitepapers, case studies, and tools for implementing autonomous systems and AI automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
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
                Comprehensive resources to help you implement autonomous systems and AI automation in your organization
              </p>
            </header>

            {/* Featured Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Featured Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-xl p-6 border border-cyan-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                      Featured
                    </span>
                    <span className="text-white/60 text-sm">PDF</span>
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
            
            {/* Webinars and Events Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Webinars & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                      Webinar
                    </span>
                    <span className="text-white/60 text-sm">February 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">The Future of Edge AI in Healthcare</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Join us for an in-depth discussion on how edge AI is revolutionizing healthcare delivery, 
                    featuring real-world case studies and expert insights.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-purple-400 text-sm">⏰ 2:00 PM EST</span>
                    <span className="text-purple-400 text-sm">👥 500+ attendees</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-400 to-indigo-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
                    Register Now
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-400/20 text-orange-400 text-sm rounded-full border border-orange-400/30">
                      Conference
                    </span>
                    <span className="text-white/60 text-sm">March 8-10, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Automation Summit 2025</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our flagship conference featuring keynote speakers, hands-on workshops, and networking 
                    opportunities with AI automation leaders.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-orange-400 text-sm">📍 San Francisco, CA</span>
                    <span className="text-orange-400 text-sm">🎯 1000+ attendees</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-red-500 transition-all duration-300">
                    Get Early Bird Tickets
                  </button>
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
              </div>
            </section>

            {/* Resource Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Resource Categories</h2>
              {resources.map((category, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2 py-1 bg-white/20 text-white text-xs rounded border border-white/30">
                            {item.type}
                          </span>
                          <span className="text-white/60 text-xs">{item.fileSize}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
                        <p className="text-white/80 mb-4 text-sm">{item.description}</p>
                        <Link 
                          href={item.downloadUrl} 
                          className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 text-sm"
                        >
                          Download
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Upcoming Events */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Upcoming Events</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-400/10 to-fuchsia-400/10 rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                        Event
                      </span>
                      <span className="text-white/60 text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                    <p className="text-white/60 text-sm mb-2">{event.location}</p>
                    <p className="text-white/80 mb-4 text-sm">{event.description}</p>
                    <Link 
                      href={event.registrationUrl} 
                      className="inline-block px-4 py-2 bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Areas */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">Research & Development</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-xl p-6 border border-green-400/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                        {area.status}
                      </span>
                      <span className="text-white/60 text-sm">{area.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                    <p className="text-white/80 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-3xl font-bold mb-4 text-white">Need Custom Resources?</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our team can create custom resources, 
                  conduct research, or provide personalized guidance for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href="/services" 
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your journey with these essential guides and resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300 mb-6">{resource.description}</p>
                  <a 
                    href={resource.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized resources to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.href}
                        className="block p-3 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors duration-300"
                      >
                        <div className="font-semibold text-white">{resource.name}</div>
                        <div className="text-sm text-gray-400">{resource.description}</div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fast access to frequently used resources and tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a 
                  href="/support"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                >
                  Visit Support Center
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
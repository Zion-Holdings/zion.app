import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Users, MessageCircle, GraduationCap, Star, Brain, Atom, Rocket, Shield } from 'lucide-react';
import Link from 'next/link';

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
      category: 'Business'
    },
    {
      id: 'edge-computing-implementation',
      title: 'Edge Computing Implementation Guide',
      description: 'Step-by-step guide to implementing edge computing solutions for real-time AI applications.',
      downloadUrl: '#',
      pages: '38',
      category: 'Technology'
    },
    {
      id: 'ai-security-best-practices',
      title: 'AI Security Best Practices',
      description: 'Comprehensive security guidelines for protecting AI systems and data in enterprise environments.',
      downloadUrl: '#',
      pages: '41',
      category: 'Security'
    },
    {
      id: 'automation-governance-framework',
      title: 'Automation Governance Framework',
      description: 'Establishing governance structures and policies for enterprise automation initiatives.',
      downloadUrl: '#',
      pages: '35',
      category: 'Governance'
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
      id: 'edge-computing-calculator',
      title: 'Edge Computing ROI Calculator',
      description: 'Calculate the return on investment for edge computing implementations.',
      type: 'Financial Tool',
      estimatedTime: '25 minutes'
    },
    {
      id: 'ai-ethics-checklist',
      title: 'AI Ethics Implementation Checklist',
      description: 'Ensure your AI systems meet ethical standards and compliance requirements.',
      type: 'Compliance Tool',
      estimatedTime: '45 minutes'
    },
    {
      id: 'automation-workflow-builder',
      title: 'Automation Workflow Builder',
      description: 'Design and prototype automation workflows for your business processes.',
      type: 'Design Tool',
      estimatedTime: '60 minutes'
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
                  <h3 className="text-xl font-bold mb-3 text-white">The Future of Autonomous Systems</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive guide covering emerging trends, technologies, and implementation strategies.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block px-4 py-2 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
                  >
                    Download Now
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-purple-400/10 to-fuchsia-400/10 rounded-xl p-6 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                      New
                    </span>
                    <span className="text-white/60 text-sm">Excel</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">AI Automation ROI Calculator</h3>
                  <p className="text-white/80 mb-4">
                    Framework and tools for calculating return on investment from AI automation initiatives.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block px-4 py-2 bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors"
                  >
                    Download Now
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-xl p-6 border border-green-400/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      Popular
                    </span>
                    <span className="text-white/60 text-sm">PDF</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Cybersecurity Best Practices</h3>
                  <p className="text-white/80 mb-4">
                    Security guidelines and implementation checklist for protecting autonomous infrastructure.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block px-4 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
                  >
                    Download Now
                  </Link>
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
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;

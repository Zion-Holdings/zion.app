import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Award, 
  Download, 
  ExternalLink,
  ArrowRight,
  ChevronRight,
  Search,
  Filter,
  Star,
  Clock,
  User,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Code
} from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Whitepapers',
      items: [
        {
          title: 'The Future of Autonomous Systems: A Comprehensive Guide',
          description: 'Deep dive into emerging trends, technologies, and implementation strategies for autonomous systems.',
          downloadUrl: '#',
          fileSize: '2.4 MB',
          type: 'PDF'
        },
        {
          title: 'AI Automation ROI Calculator: Measuring Business Impact',
          description: 'Framework and tools for calculating return on investment from AI automation initiatives.',
          downloadUrl: '#',
          fileSize: '1.8 MB',
          type: 'Excel'
        },
        {
          title: 'Cybersecurity Best Practices for Autonomous Systems',
          description: 'Comprehensive security guidelines and implementation checklist for protecting autonomous infrastructure.',
          downloadUrl: '#',
          fileSize: '3.1 MB',
          type: 'PDF'
        }
      ]
    },
    {
      category: 'Case Studies',
      items: [
        {
          title: 'Manufacturing Automation: 40% Efficiency Increase',
          description: 'How a leading manufacturer transformed operations with autonomous systems and AI optimization.',
          downloadUrl: '#',
          fileSize: '1.2 MB',
          type: 'PDF'
        },
        {
          title: 'Healthcare AI: Improving Patient Outcomes',
          description: 'Real-world implementation of autonomous systems in healthcare delivery and patient monitoring.',
          downloadUrl: '#',
          fileSize: '2.7 MB',
          type: 'PDF'
        },
        {
          title: 'Smart City Infrastructure: Sustainable Urban Development',
          description: 'Case study of autonomous systems integration in modern city planning and management.',
          downloadUrl: '#',
          fileSize: '1.9 MB',
          type: 'PDF'
        }
      ]
    },
    {
      category: 'Templates & Tools',
      items: [
        {
          title: 'AI Project Planning Template',
          description: 'Comprehensive project planning framework for AI automation initiatives.',
          downloadUrl: '#',
          fileSize: '856 KB',
          type: 'Word'
        },
        {
          title: 'Automation Assessment Checklist',
          description: 'Step-by-step checklist for evaluating automation opportunities in your organization.',
          downloadUrl: '#',
          fileSize: '324 KB',
          type: 'PDF'
        },
        {
          title: 'ROI Calculation Spreadsheet',
          description: 'Excel template for calculating and tracking automation project returns.',
          downloadUrl: '#',
          fileSize: '1.1 MB',
          type: 'Excel'
        }
      ]
    },
    {
      category: 'Educational Content',
      items: [
        {
          title: 'AI Fundamentals: Understanding Machine Learning',
          description: 'Beginner-friendly guide to machine learning concepts and applications.',
          downloadUrl: '#',
          fileSize: '4.2 MB',
          type: 'PDF'
        },
        {
          title: 'Automation Strategy Workshop Guide',
          description: 'Facilitator guide for conducting automation strategy workshops with your team.',
          downloadUrl: '#',
          fileSize: '2.8 MB',
          type: 'PDF'
        },
        {
          title: 'Technology Stack Selection Guide',
          description: 'Framework for choosing the right technologies for your automation projects.',
          downloadUrl: '#',
          fileSize: '1.5 MB',
          type: 'PDF'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Automation Summit 2025',
      date: 'February 15-17, 2025',
      location: 'Virtual Event',
      description: 'Join industry leaders and experts for three days of insights into the future of autonomous systems.',
      registrationUrl: '#'
    },
    {
      title: 'Cybersecurity in Autonomous Systems Workshop',
      date: 'February 28, 2025',
      location: 'San Francisco, CA',
      description: 'Hands-on workshop covering security best practices for autonomous infrastructure.',
      registrationUrl: '#'
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
      id: 'quantum-computing-automation',
      title: 'Quantum Computing in Automation: A Practical Guide',
      description: 'Understanding how quantum computing will revolutionize automation and optimization systems.',
      downloadUrl: '#',
      pages: '52',
      category: 'Technology'
    },
    {
      id: 'edge-computing-implementation',
      title: 'Edge Computing Implementation Strategy',
      description: 'Comprehensive guide to implementing edge computing for real-time automation and IoT systems.',
      downloadUrl: '#',
      pages: '38',
      category: 'Technology'
    }
  ];

  const researchAreas = [
    {
      title: 'Quantum AI Integration',
      description: 'Exploring the intersection of quantum computing and artificial intelligence for next-generation autonomous systems.',
      status: 'Active Research',
      timeline: '2025-2027'
    },
    {
      title: 'Edge Computing Optimization',
      description: 'Developing efficient edge computing solutions for autonomous systems in resource-constrained environments.',
      status: 'In Progress',
      timeline: '2025-2026'
    },
    {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes'
    },
    {
      id: 'quantum-readiness-assessment',
      title: 'Quantum Computing Readiness Assessment',
      description: 'Evaluate your organization\'s preparedness for quantum computing integration.',
      type: 'Assessment Tool',
      estimatedTime: '25 minutes'
    },
    {
      id: 'edge-computing-calculator',
      title: 'Edge Computing ROI Calculator',
      description: 'Calculate the return on investment for edge computing implementation projects.',
      type: 'Financial Tool',
      estimatedTime: '20 minutes'
    },
    {
      id: 'security-compliance-checker',
      title: 'Security & Compliance Checker',
      description: 'Assess your current security posture and compliance with industry standards.',
      type: 'Security Tool',
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

        {/* Quick Links */}
        <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Quick Access
              </h2>
              <p className="text-xl text-gray-300">
                Popular resources and frequently accessed content
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group"
                >
                  <link.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Start with these essential guides and resources to get up and running quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {resource.category}
                    </span>
                  </div>
                  
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by topic and type.
              </p>
            </motion.div>

            <div className="space-y-12">
              {resourceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50"
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">{category.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Explore</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and valuable resources
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={resource.href}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${resource.color} text-white rounded-full`}>
                            {resource.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">{resource.description}</p>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Read More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help Finding Resources?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the right resources and get the most 
                out of our technology platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Browse Documentation
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
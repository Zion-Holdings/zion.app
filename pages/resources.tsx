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
      title: 'Sustainable Automation Webinar Series',
      date: 'March 5, 2025',
      location: 'Online',
      description: 'Learn how autonomous systems are driving sustainability initiatives across industries.',
      registrationUrl: '#'
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
      title: 'Human-AI Collaboration',
      description: 'Researching optimal human-AI interaction patterns for enhanced productivity and safety.',
      status: 'Planning Phase',
      timeline: '2025-2028'
    },
    {
      title: 'Sustainable AI Development',
      description: 'Investigating methods to reduce the environmental impact of AI training and deployment.',
      status: 'Active Research',
      timeline: '2025-2026'
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
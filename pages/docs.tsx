import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Cloud, Shield, 
  Brain, Atom, Rocket, Search, ChevronRight, ChevronDown,
  ExternalLink, Download, Copy, Check, Zap, Globe, Cpu,
  Server, Lock, Key, Terminal, Play, Book, Video,
  Users, Award, Lightbulb, Star, GraduationCap
} from 'lucide-react';

const Docs: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Quick Start Guide', href: '/docs/quick-start', description: 'Get up and running in minutes' },
        { title: 'Installation', href: '/docs/installation', description: 'Step-by-step installation guide' },
        { title: 'Configuration', href: '/docs/configuration', description: 'Configure your environment' },
        { title: 'First Project', href: '/docs/first-project', description: 'Build your first project' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Consciousness Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'AI Consciousness API', href: '/docs/ai-consciousness-api', description: 'Integrate AI consciousness features' },
        { title: 'Emotional Intelligence SDK', href: '/docs/emotional-intelligence-sdk', description: 'Build emotionally aware applications' },
        { title: 'Neural Network Framework', href: '/docs/neural-network-framework', description: 'Advanced neural network implementations' },
        { title: 'AI Ethics Guidelines', href: '/docs/ai-ethics-guidelines', description: 'Best practices for ethical AI' }
      ]
    },
    {
      id: 'quantum-services',
      title: 'Quantum Computing Services',
      icon: Atom,
      color: 'from-indigo-500 to-blue-500',
      items: [
        { title: 'Quantum API Reference', href: '/docs/quantum-api', description: 'Complete quantum computing API' },
        { title: 'Quantum Algorithms', href: '/docs/quantum-algorithms', description: 'Pre-built quantum algorithms' },
        { title: 'Quantum Security', href: '/docs/quantum-security', description: 'Quantum-resistant cryptography' },
        { title: 'Quantum Cloud Integration', href: '/docs/quantum-cloud', description: 'Connect to quantum cloud services' }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology Services',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Satellite API', href: '/docs/satellite-api', description: 'Access satellite data and services' },
        { title: 'Space Resource Intelligence', href: '/docs/space-resources', description: 'Space mining and resource management' },
        { title: 'Orbital Computing', href: '/docs/orbital-computing', description: 'Edge computing in space' },
        { title: 'Interplanetary Communication', href: '/docs/interplanetary-comm', description: 'Deep space communication protocols' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        { title: 'Zero Trust Architecture', href: '/docs/zero-trust', description: 'Implement zero trust security' },
        { title: 'Threat Intelligence API', href: '/docs/threat-intelligence', description: 'Real-time threat detection' },
        { title: 'Compliance Automation', href: '/docs/compliance-automation', description: 'Automate compliance processes' },
        { title: 'Security Monitoring', href: '/docs/security-monitoring', description: '24/7 security surveillance' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500',
      items: [
        { title: 'Multi-Cloud Management', href: '/docs/multi-cloud', description: 'Manage multiple cloud providers' },
        { title: 'Edge Computing', href: '/docs/edge-computing', description: 'Distributed computing solutions' },
        { title: 'Serverless Functions', href: '/docs/serverless', description: 'Build serverless applications' },
        { title: 'Container Orchestration', href: '/docs/containers', description: 'Kubernetes and Docker management' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      color: 'from-teal-500 to-green-500',
      items: [
        { title: 'REST API', href: '/docs/rest-api', description: 'Complete REST API documentation' },
        { title: 'GraphQL API', href: '/docs/graphql-api', description: 'GraphQL schema and queries' },
        { title: 'WebSocket API', href: '/docs/websocket-api', description: 'Real-time communication' },
        { title: 'SDK Libraries', href: '/docs/sdk-libraries', description: 'Client libraries and SDKs' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Examples',
      icon: Book,
      color: 'from-pink-500 to-purple-500',
      items: [
        { title: 'Building AI Chatbots', href: '/docs/tutorials/ai-chatbots', description: 'Create intelligent chatbots' },
        { title: 'Quantum Cryptography', href: '/docs/tutorials/quantum-crypto', description: 'Implement quantum security' },
        { title: 'Space Data Analytics', href: '/docs/tutorials/space-analytics', description: 'Analyze space data' },
        { title: 'Zero Trust Implementation', href: '/docs/tutorials/zero-trust', description: 'Secure your infrastructure' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', icon: Server, color: 'text-green-400' },
    { title: 'Support Center', href: '/support', icon: Users, color: 'text-blue-400' },
    { title: 'Community Forum', href: '/community', icon: Users, color: 'text-purple-400' },
    { title: 'Video Tutorials', href: '/tutorials', icon: Video, color: 'text-pink-400' },
    { title: 'Case Studies', href: '/case-studies', icon: Award, color: 'text-yellow-400' },
    { title: 'Training Programs', href: '/training', icon: GraduationCap, color: 'text-cyan-400' }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-6">
                <BookOpen className="w-full h-full text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive guides, API references, and tutorials for all Zion Tech Group services and solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-400/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
              <p className="text-gray-400">Essential resources to get you started quickly</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <link.icon className={`w-8 h-8 mx-auto mb-2 ${link.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link.title}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Documentation Sections</h2>
              <p className="text-gray-400">Explore our comprehensive documentation by category</p>
            </motion.div>

            <div className="space-y-6">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl p-3`}>
                        <section.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{section.title}</h3>
                        <p className="text-gray-400 text-sm">{section.items.length} articles</p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-cyan-400" />
                    )}
                  </button>

                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="group p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-cyan-400/30 hover:bg-gray-700/20 transition-all duration-300"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors mt-1" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Follow our step-by-step guides to integrate Zion Tech Group services into your projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs/quick-start"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Quick Start Guide
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;
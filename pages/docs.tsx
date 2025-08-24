import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Book, FileText, Code, Search, ChevronRight, ChevronDown, 
  ExternalLink, Download, Copy, Check, Globe, Server, Brain,
  Shield, Database, Network, Atom, Users, Settings, Play,
  Zap, Target, Star, Sparkles, Award, Clock, CheckCircle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

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
      icon: Play,
      articles: [
        { title: 'Quick Start Guide', path: '/docs/quick-start', description: 'Get up and running in minutes' },
        { title: 'Installation Guide', path: '/docs/installation', description: 'Step-by-step installation instructions' },
        { title: 'Configuration', path: '/docs/configuration', description: 'Configure your environment' },
        { title: 'First Project', path: '/docs/first-project', description: 'Create your first project' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      articles: [
        { title: 'AI Business Intelligence', path: '/docs/ai-business-intelligence', description: 'AI-powered analytics and insights' },
        { title: 'AI Autonomous Systems', path: '/docs/ai-autonomous-systems', description: 'Self-learning AI systems' },
        { title: 'AI Content Generation', path: '/docs/ai-content-generation', description: 'AI-powered content creation' },
        { title: 'AI Customer Experience', path: '/docs/ai-customer-experience', description: 'Intelligent customer interactions' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      articles: [
        { title: 'Quantum Cybersecurity', path: '/docs/quantum-cybersecurity', description: 'Next-generation security solutions' },
        { title: 'AI Threat Detection', path: '/docs/ai-threat-detection', description: 'AI-powered security monitoring' },
        { title: 'Zero-Trust Architecture', path: '/docs/zero-trust', description: 'Advanced security frameworks' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Server,
      articles: [
        { title: 'Edge Computing', path: '/docs/edge-computing', description: 'Edge computing orchestration' },
        { title: 'Cloud Management', path: '/docs/cloud-management', description: 'Cloud infrastructure management' },
        { title: 'Asset Management', path: '/docs/asset-management', description: 'AI-powered IT asset management' }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technologies',
      icon: Atom,
      articles: [
        { title: 'Quantum Neural Networks', path: '/docs/quantum-neural-networks', description: 'Quantum computing for AI' },
        { title: 'Quantum Financial Trading', path: '/docs/quantum-trading', description: 'Quantum algorithms for finance' },
        { title: 'Quantum Cryptography', path: '/docs/quantum-cryptography', description: 'Quantum security protocols' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      articles: [
        { title: 'REST API', path: '/docs/api/rest', description: 'RESTful API endpoints' },
        { title: 'GraphQL API', path: '/docs/api/graphql', description: 'GraphQL API documentation' },
        { title: 'Webhooks', path: '/docs/api/webhooks', description: 'Webhook configuration' },
        { title: 'SDKs', path: '/docs/api/sdks', description: 'Client libraries and SDKs' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      icon: Book,
      articles: [
        { title: 'Building AI Models', path: '/docs/tutorials/ai-models', description: 'Create custom AI models' },
        { title: 'Security Implementation', path: '/docs/tutorials/security', description: 'Implement security measures' },
        { title: 'Performance Optimization', path: '/docs/tutorials/optimization', description: 'Optimize your applications' },
        { title: 'Deployment Guide', path: '/docs/tutorials/deployment', description: 'Deploy to production' }
      ]
    },
    {
      id: 'examples',
      title: 'Examples & Samples',
      icon: FileText,
      articles: [
        { title: 'Code Samples', path: '/docs/examples/code', description: 'Ready-to-use code examples' },
        { title: 'Use Cases', path: '/docs/examples/use-cases', description: 'Real-world implementation examples' },
        { title: 'Templates', path: '/docs/examples/templates', description: 'Project templates and boilerplates' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Status', path: '/status', icon: Globe, description: 'Check API availability' },
    { title: 'Support Center', path: '/support', icon: Users, description: 'Get help and support' },
    { title: 'Community Forum', path: '/community', icon: Users, description: 'Join the community' },
    { title: 'GitHub Repository', path: 'https://github.com/Zion-Holdings/zion.app', icon: Code, description: 'View source code' }
  ];

  const filteredSections = documentationSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group | Technical Guides & API Reference</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group&apos;s AI, cybersecurity, and IT infrastructure services. API references, tutorials, and implementation guides." />
        <meta name="keywords" content="documentation, API reference, technical guides, tutorials, Zion Tech Group docs" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Documentation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Comprehensive guides, tutorials, and API references to help you build, deploy, and optimize your applications with Zion Tech Group&apos;s cutting-edge technology solutions.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Essential resources and quick access to important documentation sections.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-700/50 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Documentation Sections</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our comprehensive documentation organized by service categories and topics.
              </p>
            </motion.div>

            <div className="space-y-6">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-4">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {section.articles.length} articles available
                        </p>
                      </div>
                    </div>
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
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
                        {section.articles.map((article, articleIndex) => (
                          <a
                            key={articleIndex}
                            href={article.path}
                            className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors duration-200 border border-transparent hover:border-cyan-500/30"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="text-white font-medium mb-2">{article.title}</h4>
                                <p className="text-gray-400 text-sm">{article.description}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
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
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <div className="text-center mb-8">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                  <Book className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">New to Zion Tech Group?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Start with our comprehensive getting started guide to quickly understand our platform and begin building.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Read the Guide',
                    description: 'Start with our comprehensive getting started documentation',
                    action: 'Read Guide',
                    path: '/docs/quick-start'
                  },
                  {
                    step: '02',
                    title: 'Set Up Environment',
                    description: 'Install and configure your development environment',
                    action: 'Setup Guide',
                    path: '/docs/installation'
                  },
                  {
                    step: '03',
                    title: 'Build First Project',
                    description: 'Create your first project with our step-by-step tutorial',
                    action: 'Start Building',
                    path: '/docs/first-project'
                  }
                ].map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>
                    <a
                      href={step.path}
                      className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500/20 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/30 transition-all duration-200 border border-cyan-500/30"
                    >
                      {step.action}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Need Help with Implementation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our technical team is here to help you succeed with our platform and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Contact Support
                  <Users className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/community"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Join Community
                  <Globe className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Video, 
  Download, 
  Search, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Database,
  Cpu,
  Zap,
  Users
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const DocsPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'API Documentation',
      description: 'Complete API reference with examples, authentication, and integration guides.',
      icon: <Code className="w-8 h-8" />,
      href: '/api-documentation',
      color: 'from-blue-500 to-cyan-500',
      items: ['REST API Reference', 'GraphQL API', 'Authentication', 'Rate Limiting', 'Error Codes']
    },
    {
      title: 'Developer Guides',
      description: 'Step-by-step guides for integrating our platforms and services.',
      icon: <FileText className="w-8 h-8" />,
      href: '/developer',
      color: 'from-green-500 to-emerald-500',
      items: ['Getting Started', 'SDK Documentation', 'Code Examples', 'Best Practices', 'Troubleshooting']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Documentation for AI consciousness, neural networks, and machine learning platforms.',
      icon: <Brain className="w-8 h-8" />,
      href: '/services?category=ai-ml',
      color: 'from-purple-500 to-pink-500',
      items: ['AI Consciousness API', 'Neural Network Models', 'Training Data', 'Model Deployment', 'Performance Tuning']
    },
    {
      title: 'Quantum Computing',
      description: 'Guides for quantum computing platforms and quantum-resistant security.',
      icon: <Atom className="w-8 h-8" />,
      href: '/services?category=quantum',
      color: 'from-indigo-500 to-purple-500',
      items: ['Quantum Algorithms', 'Quantum Security', 'Quantum APIs', 'Simulation Tools', 'Hardware Integration']
    },
    {
      title: 'Space Technology',
      description: 'Documentation for space resource intelligence and satellite technology platforms.',
      icon: <Rocket className="w-8 h-8" />,
      href: '/services?category=space-tech',
      color: 'from-orange-500 to-red-500',
      items: ['Satellite APIs', 'Resource Intelligence', 'Orbital Calculations', 'Data Processing', 'Mission Planning']
    },
    {
      title: 'Cybersecurity',
      description: 'Security documentation, compliance guides, and threat intelligence.',
      icon: <Shield className="w-8 h-8" />,
      href: '/services?category=cybersecurity',
      color: 'from-red-500 to-pink-500',
      items: ['Security APIs', 'Compliance Guides', 'Threat Detection', 'Incident Response', 'Security Best Practices']
    }
  ];

  const quickLinks = [
    { title: 'API Status', href: '/status', icon: <Cpu className="w-5 h-5" /> },
    { title: 'Support Center', href: '/support', icon: <Zap className="w-5 h-5" /> },
    { title: 'Community Forum', href: '/community', icon: <Users className="w-5 h-5" /> },
    { title: 'GitHub Repositories', href: 'https://github.com/ziontechgroup', icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <Layout>
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group's platforms and services including API references, developer guides, and integration tutorials."
        keywords={["documentation", "API docs", "developer guides", "integration", "Zion Tech Group", "technical documentation"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides and references to integrate our cutting-edge technology platforms 
                and services into your applications.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the documentation you need for our comprehensive technology platforms and services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential resources and tools for developers and technical teams.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Need Help with Integration?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our technical team is here to help you integrate our platforms successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
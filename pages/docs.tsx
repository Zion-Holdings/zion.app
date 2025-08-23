import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Network, Server, 
  Shield, Brain, Atom, Rocket, Cloud, Zap, Target, 
  ArrowRight, ExternalLink, Search, Download, 
  Github, Globe, Users, Settings, Building
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const docCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Quick start guides and tutorials for new users',
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    docs: [
      {
        title: 'Quick Start Guide',
        description: 'Get up and running with Zion Tech Group services in minutes',
        type: 'Guide',
        link: '/docs/quick-start',
        icon: <Rocket className="w-5 h-5" />,
        difficulty: 'Beginner'
      },
      {
        title: 'Installation Guide',
        description: 'Step-by-step installation instructions for all platforms',
        type: 'Guide',
        link: '/docs/installation',
        icon: <Download className="w-5 h-5" />,
        difficulty: 'Beginner'
      },
      {
        title: 'First Project Tutorial',
        description: 'Build your first AI-powered application',
        type: 'Tutorial',
        link: '/docs/first-project',
        icon: <Code className="w-5 h-5" />,
        difficulty: 'Beginner'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Comprehensive documentation for AI consciousness and automation services',
    icon: <Brain className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    docs: [
      {
        title: 'AI Consciousness API',
        description: 'Complete API reference for conscious AI systems',
        type: 'API Docs',
        link: '/docs/ai-consciousness-api',
        icon: <Code className="w-5 h-5" />,
        difficulty: 'Advanced'
      },
      {
        title: 'AI Automation Guide',
        description: 'How to implement AI automation in your workflows',
        type: 'Guide',
        link: '/docs/ai-automation',
        icon: <Zap className="w-5 h-5" />,
        difficulty: 'Intermediate'
      },
      {
        title: 'AI Ethics Framework',
        description: 'Guidelines for responsible AI development',
        type: 'Guide',
        link: '/docs/ai-ethics',
        icon: <Shield className="w-5 h-5" />,
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Documentation for quantum computing services and APIs',
    icon: <Atom className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    docs: [
      {
        title: 'Quantum Computing Basics',
        description: 'Introduction to quantum computing concepts',
        type: 'Guide',
        link: '/docs/quantum-basics',
        icon: <BookOpen className="w-5 h-5" />,
        difficulty: 'Beginner'
      },
      {
        title: 'Quantum API Reference',
        description: 'Complete API documentation for quantum services',
        type: 'API Docs',
        link: '/docs/quantum-api',
        icon: <Code className="w-5 h-5" />,
        difficulty: 'Advanced'
      },
      {
        title: 'Quantum Algorithms',
        description: 'Implementation guide for quantum algorithms',
        type: 'Guide',
        link: '/docs/quantum-algorithms',
        icon: <Target className="w-5 h-5" />,
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'space-technology',
    title: 'Space Technology',
    description: 'Documentation for space technology and resource intelligence platforms',
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10',
    docs: [
      {
        title: 'Space Resource API',
        description: 'API reference for space resource intelligence',
        type: 'API Docs',
        link: '/docs/space-resource-api',
        icon: <Code className="w-5 h-5" />,
        difficulty: 'Intermediate'
      },
      {
        title: 'Space Tech Integration',
        description: 'How to integrate space technology into your applications',
        type: 'Guide',
        link: '/docs/space-tech-integration',
        icon: <Globe className="w-5 h-5" />,
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description: 'Documentation for enterprise-grade infrastructure and security',
    icon: <Building className="w-8 h-8" />,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
    docs: [
      {
        title: 'Enterprise Architecture',
        description: 'Best practices for enterprise deployment',
        type: 'Guide',
        link: '/docs/enterprise-architecture',
        icon: <Server className="w-5 h-5" />,
        difficulty: 'Advanced'
      },
      {
        title: 'Security Best Practices',
        description: 'Security guidelines and best practices',
        type: 'Guide',
        link: '/docs/security-best-practices',
        icon: <Shield className="w-5 h-5" />,
        difficulty: 'Intermediate'
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize your applications for production',
        type: 'Guide',
        link: '/docs/performance-optimization',
        icon: <Zap className="w-5 h-5" />,
        difficulty: 'Intermediate'
      }
    ]
  }
];

const sdkLibraries = [
  {
    name: 'Python SDK',
    description: 'Official Python client library for Zion Tech Group services',
    version: 'v2.1.0',
    link: 'https://github.com/ziontechgroup/python-sdk',
    icon: <Code className="w-6 h-6" />,
    color: 'text-blue-400'
  },
  {
    name: 'JavaScript SDK',
    description: 'Node.js and browser JavaScript client library',
    version: 'v1.8.0',
    link: 'https://github.com/ziontechgroup/javascript-sdk',
    icon: <Code className="w-6 h-6" />,
    color: 'text-yellow-400'
  },
  {
    name: 'Go SDK',
    description: 'Go client library for high-performance applications',
    version: 'v1.5.0',
    link: 'https://github.com/ziontechgroup/go-sdk',
    icon: <Code className="w-6 h-6" />,
    color: 'text-cyan-400'
  },
  {
    name: 'REST API Client',
    description: 'Lightweight REST API client for any programming language',
    version: 'v1.2.0',
    link: '/docs/rest-api-client',
    icon: <Globe className="w-6 h-6" />,
    color: 'text-green-400'
  }
];

const DocsPage: React.FC = () => {
  return (
    <Layout seo={{
      title: "Documentation - Zion Tech Group | Technical Guides & API References",
      description: "Comprehensive documentation for Zion Tech Group services. Get started with AI consciousness, quantum computing, space technology, and enterprise solutions.",
      keywords: "documentation, API reference, technical guides, developer resources, Zion Tech Group, AI services, quantum computing",
      url: "https://ziontechgroup.com/docs"
    }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <BookOpen className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive guides, API references, and technical documentation to help you 
              build with Zion Tech Group's cutting-edge technology
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDK Libraries */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SDK Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our official client libraries and SDKs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdkLibraries.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 bg-gray-700/50 rounded-lg mr-3 ${sdk.color}`}>
                    {sdk.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{sdk.name}</h3>
                    <span className="text-xs text-gray-400">{sdk.version}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{sdk.description}</p>
                <a 
                  href={sdk.link}
                  target={sdk.link.startsWith('http') ? '_blank' : '_self'}
                  rel={sdk.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore comprehensive documentation organized by service category and difficulty level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${category.bgColor} rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-800/50 rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.docs.map((doc, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-white">{doc.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                          doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {doc.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {doc.icon}
                          <span className="text-xs text-gray-400">{doc.type}</span>
                        </div>
                        <Link 
                          href={doc.link}
                          className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore additional resources to help you succeed with our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'GitHub Repository',
                description: 'Access source code, examples, and contribute to our open-source projects',
                icon: <Github className="w-8 h-8" />,
                link: 'https://github.com/Zion-Holdings',
                color: 'text-gray-400'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers and get help from our community',
                icon: <Users className="w-8 h-8" />,
                link: '/community',
                color: 'text-blue-400'
              },
              {
                title: 'Support Center',
                description: 'Get technical support and troubleshooting assistance',
                icon: <Settings className="w-8 h-8" />,
                link: '/support',
                color: 'text-green-400'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
              >
                <div className={`p-4 bg-gray-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${resource.color}`}>
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <a 
                  href={resource.link}
                  target={resource.link.startsWith('http') ? '_blank' : '_self'}
                  rel={resource.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you succeed with our technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                href="/training"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Training Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DocsPage;
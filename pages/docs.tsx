import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Network, Shield,
  Brain, Atom, Rocket, Globe, ArrowRight, Search
} from 'lucide-react';
import Link from 'next/link';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Documentation for AI consciousness, neural networks, and machine learning services',
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2043', type: 'Guide' },
        { title: 'Neural Network Implementation', href: '/docs/neural-networks', type: 'API' },
        { title: 'AI Ethics & Governance', href: '/docs/ai-ethics', type: 'Guide' }
      ]
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Quantum computing services, algorithms, and implementation guides',
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'Quantum Neural Networks', href: '/quantum-ai-neural-2043', type: 'Guide' },
        { title: 'Quantum API Reference', href: '/docs/quantum-api', type: 'API' },
        { title: 'Quantum Security', href: '/docs/quantum-security', type: 'Guide' }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Security services, best practices, and implementation guides',
      color: 'from-red-500 to-orange-500',
      docs: [
        { title: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-2043', type: 'Guide' },
        { title: 'Security API Reference', href: '/docs/security-api', type: 'API' },
        { title: 'Zero Trust Architecture', href: '/docs/zero-trust', type: 'Guide' }
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Space resource management and autonomous space operations',
      color: 'from-indigo-500 to-purple-500',
      docs: [
        { title: 'Space Resource Intelligence', href: '/space-resource-intelligence-2043', type: 'Guide' },
        { title: 'Space API Reference', href: '/docs/space-api', type: 'API' },
        { title: 'Autonomous Operations', href: '/docs/autonomous-ops', type: 'Guide' }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Services',
      description: 'Quick start guide for implementing AI consciousness and neural networks',
      href: '/docs/ai-quickstart',
      difficulty: 'Beginner'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and our services',
      href: '/docs/quantum-basics',
      difficulty: 'Beginner'
    },
    {
      title: 'Security Implementation',
      description: 'Step-by-step guide to implementing our cybersecurity solutions',
      href: '/docs/security-implementation',
      difficulty: 'Intermediate'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Documentation - Zion Tech Group Technical Resources"
        description="Comprehensive technical documentation for AI services, quantum computing, cybersecurity, and space technology solutions."
        keywords={["documentation", "API reference", "technical guides", "implementation", "AI services", "quantum computing"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technical documentation, API references, and implementation guides 
              for all Zion Tech Group services and solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={guide.href}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                            {guide.difficulty}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">{guide.description}</p>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="font-medium">Get Started</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore comprehensive documentation organized by service category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link key={docIndex} href={doc.href}>
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-400">{doc.type}</span>
                          <span className="text-white hover:text-cyan-400 transition-colors">{doc.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our technical team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Contact Support
                </motion.button>
              </Link>
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Resources
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
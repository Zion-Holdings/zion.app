import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, FileText, Users, Calendar, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, GraduationCap, DollarSign, Clock, Target, Search, Download, Wrench
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      docs: [
        { name: "Quick Start Guide", href: "/docs/quick-start", description: "Get up and running in minutes", difficulty: "Beginner" },
        { name: "Installation Guide", href: "/docs/installation", description: "Step-by-step installation instructions", difficulty: "Beginner" },
        { name: "First Project", href: "/docs/first-project", description: "Build your first project with Zion Tech", difficulty: "Beginner" },
        { name: "Configuration", href: "/docs/configuration", description: "Configure your environment and settings", difficulty: "Beginner" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      docs: [
        { name: "REST API", href: "/docs/api/rest", description: "REST API endpoints and methods", difficulty: "Intermediate" },
        { name: "GraphQL API", href: "/docs/api/graphql", description: "GraphQL schema and queries", difficulty: "Intermediate" },
        { name: "WebSocket API", href: "/docs/api/websocket", description: "Real-time WebSocket connections", difficulty: "Advanced" },
        { name: "SDK Libraries", href: "/docs/api/sdk", description: "Client libraries and SDKs", difficulty: "Intermediate" }
      ]
    },
    {
      title: "AI & Consciousness",
      description: "AI consciousness development and neural networks",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      docs: [
        { name: "AI Consciousness Guide", href: "/docs/ai/consciousness", description: "Develop AI consciousness systems", difficulty: "Advanced" },
        { name: "Neural Networks", href: "/docs/ai/neural-networks", description: "Build and train neural networks", difficulty: "Intermediate" },
        { name: "Machine Learning", href: "/docs/ai/machine-learning", description: "ML algorithms and implementations", difficulty: "Intermediate" },
        { name: "Ethical AI", href: "/docs/ai/ethics", description: "Ethical considerations and guidelines", difficulty: "All Levels" }
      ]
    },
    {
      title: "Quantum Technology",
      description: "Quantum computing and quantum algorithms",
      icon: Target,
      color: "from-cyan-500 to-blue-500",
      docs: [
        { name: "Quantum Basics", href: "/docs/quantum/basics", description: "Introduction to quantum computing", difficulty: "Intermediate" },
        { name: "Quantum Algorithms", href: "/docs/quantum/algorithms", description: "Implement quantum algorithms", difficulty: "Advanced" },
        { name: "Quantum Cryptography", href: "/docs/quantum/cryptography", description: "Quantum-safe encryption", difficulty: "Advanced" },
        { name: "Hybrid Systems", href: "/docs/quantum/hybrid", description: "Quantum-classical hybrid systems", difficulty: "Advanced" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Security best practices and implementation",
      icon: Lock,
      color: "from-red-500 to-orange-500",
      docs: [
        { name: "Security Fundamentals", href: "/docs/security/fundamentals", description: "Core security concepts", difficulty: "Intermediate" },
        { name: "Zero Trust", href: "/docs/security/zero-trust", description: "Implement zero trust architecture", difficulty: "Advanced" },
        { name: "Threat Detection", href: "/docs/security/threat-detection", description: "AI-powered threat detection", difficulty: "Advanced" },
        { name: "Incident Response", href: "/docs/security/incident-response", description: "Security incident handling", difficulty: "Intermediate" }
      ]
    },
    {
      title: "Space Technology",
      description: "Space exploration and satellite systems",
      icon: Rocket,
      color: "from-pink-500 to-red-500",
      docs: [
        { name: "Space Systems", href: "/docs/space/systems", description: "Satellite and space systems", difficulty: "Advanced" },
        { name: "Orbital Mechanics", href: "/docs/space/orbital", description: "Orbital calculations and planning", difficulty: "Advanced" },
        { name: "Resource Management", href: "/docs/space/resources", description: "Space resource utilization", difficulty: "Advanced" },
        { name: "Ground Stations", href: "/docs/space/ground-stations", description: "Ground station operations", difficulty: "Intermediate" }
      ]
    }
  ];

  const featuredDocs = [
    {
      title: "AI Consciousness Development Guide",
      description: "Complete guide to developing AI systems with consciousness-like properties",
      href: "/docs/ai/consciousness-guide",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      difficulty: "Advanced"
    },
    {
      title: "Quantum Computing Primer",
      description: "Introduction to quantum computing and its business applications",
      href: "/docs/quantum/primer",
      icon: Target,
      color: "from-cyan-500 to-blue-500",
      difficulty: "Intermediate"
    },
    {
      title: "Zero Trust Security Implementation",
      description: "Step-by-step guide to implementing zero trust security architecture",
      href: "/docs/security/zero-trust-implementation",
      icon: Lock,
      color: "from-red-500 to-orange-500",
      difficulty: "Advanced"
    }
  ];

  const quickLinks = [
    { name: "API Reference", href: "/docs/api", icon: Code },
    { name: "SDK Downloads", href: "/docs/sdk", icon: Download },
    { name: "Code Examples", href: "/docs/examples", icon: FileText },
    { name: "Troubleshooting", href: "/docs/troubleshooting", icon: Wrench },
    { name: "Release Notes", href: "/docs/releases", icon: FileText },
    { name: "Contributing", href: "/docs/contributing", icon: Users }
  ];

  return (
    <Layout 
      title="Documentation - Zion Tech Group"
      description="Comprehensive technical documentation, API references, and development guides for Zion Tech Group technologies."
      keywords="documentation, API reference, technical guides, development, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/docs"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technical documentation, API references, and development guides 
                to help you build revolutionary solutions with Zion Tech Group technologies.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Documentation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your journey with these essential guides and tutorials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${doc.color} rounded-lg flex items-center justify-center mb-6`}>
                    <doc.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {doc.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{doc.title}</h3>
                  <p className="text-gray-300 mb-6">{doc.description}</p>
                  <a 
                    href={doc.href}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                  >
                    Read Guide <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
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
                    {category.docs.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.href}
                        className="block p-3 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-white">{doc.name}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {doc.difficulty}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">{doc.description}</div>
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
                Fast access to frequently used documentation and resources.
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
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">{link.name}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
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
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a 
                  href="/support"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg"
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

export default DocumentationPage;
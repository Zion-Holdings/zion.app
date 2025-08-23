import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain,
  Atom,
  Rocket,
  Search,
  Download,
  ExternalLink,
  FileText,
  Video,
  Play,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function DocsPage() {
  const docCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Comprehensive guides for AI consciousness, neural networks, and autonomous systems.',
      docs: [
        { title: 'AI Consciousness Framework', type: 'Guide', status: 'Complete' },
        { title: 'Neural Network Architecture', type: 'Technical', status: 'Complete' },
        { title: 'Autonomous Systems Guide', type: 'Guide', status: 'In Progress' },
        { title: 'AI Ethics & Governance', type: 'Policy', status: 'Complete' }
      ]
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Computing',
      description: 'Documentation for quantum algorithms, quantum security, and quantum applications.',
      docs: [
        { title: 'Quantum Algorithm Library', type: 'Technical', status: 'Complete' },
        { title: 'Quantum Security Protocols', type: 'Security', status: 'Complete' },
        { title: 'Quantum Cloud Integration', type: 'Integration', status: 'In Progress' },
        { title: 'Quantum Error Correction', type: 'Technical', status: 'Complete' }
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Guides for space resource mining, autonomous navigation, and space systems.',
      docs: [
        { title: 'Space Resource Mining', type: 'Guide', status: 'Complete' },
        { title: 'Autonomous Navigation', type: 'Technical', status: 'In Progress' },
        { title: 'Satellite Systems', type: 'Technical', status: 'Complete' },
        { title: 'Space Robotics', type: 'Guide', status: 'Planned' }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Documentation for quantum-secure cloud, DevOps, and infrastructure management.',
      docs: [
        { title: 'Quantum-Secure Cloud Setup', type: 'Setup', status: 'Complete' },
        { title: 'DevOps Automation', type: 'Guide', status: 'Complete' },
        { title: 'Infrastructure as Code', type: 'Technical', status: 'Complete' },
        { title: 'Monitoring & Observability', type: 'Guide', status: 'In Progress' }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Security best practices, compliance guides, and security frameworks.',
      docs: [
        { title: 'Zero Trust Security', type: 'Framework', status: 'Complete' },
        { title: 'SOC 2 Compliance', type: 'Compliance', status: 'Complete' },
        { title: 'Quantum Cryptography', type: 'Security', status: 'Complete' },
        { title: 'Security Best Practices', type: 'Guide', status: 'Complete' }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data & Analytics',
      description: 'Data management, analytics platforms, and business intelligence solutions.',
      docs: [
        { title: 'Data Architecture', type: 'Architecture', status: 'Complete' },
        { title: 'Analytics Platform', type: 'Technical', status: 'Complete' },
        { title: 'Business Intelligence', type: 'Guide', status: 'In Progress' },
        { title: 'Data Governance', type: 'Policy', status: 'Complete' }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: 'Getting Started with AI Consciousness',
      description: 'Quick start guide for implementing AI consciousness in your applications.',
      icon: <Brain className="w-6 h-6" />,
      time: '15 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum computing concepts and our platform.',
      icon: <Atom className="w-6 h-6" />,
      time: '20 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Setting Up Quantum-Secure Cloud',
      description: 'Step-by-step guide to deploy quantum-secure cloud infrastructure.',
      icon: <Cloud className="w-6 h-6" />,
      time: '30 min read',
      difficulty: 'Intermediate'
    },
    {
      title: 'AI Autonomous Systems',
      description: 'How to build and deploy autonomous AI systems for your business.',
      icon: <Rocket className="w-6 h-6" />,
      time: '25 min read',
      difficulty: 'Intermediate'
    }
  ];

  const apiDocs = [
    {
      name: 'AI Consciousness API',
      version: 'v2.1.0',
      status: 'Stable',
      description: 'RESTful API for AI consciousness and emotional intelligence features.'
    },
    {
      name: 'Quantum Computing API',
      version: 'v1.8.0',
      status: 'Beta',
      description: 'API for quantum computing operations and quantum algorithm execution.'
    },
    {
      name: 'Space Technology API',
      version: 'v1.2.0',
      status: 'Alpha',
      description: 'API for space resource mining and autonomous navigation systems.'
    },
    {
      name: 'Cloud Infrastructure API',
      version: 'v3.0.0',
      status: 'Stable',
      description: 'Comprehensive API for managing quantum-secure cloud infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive guides, APIs, and resources to help you implement our cutting-edge 
              AI, quantum computing, and space technology solutions.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <BookOpen className="w-8 h-8" />
              <span className="text-lg font-semibold">Your Guide to the Future</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our most popular technologies and solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-cyan-400 mb-4">{guide.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{guide.time}</span>
                  <span className={`px-2 py-1 rounded-full ${
                    guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-medium">Read Guide</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by technology and solution area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex-1">
                        <div className="text-white font-medium">{doc.title}</div>
                        <div className="text-sm text-gray-400">{doc.type}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        doc.status === 'Complete' ? 'bg-green-500/20 text-green-400' :
                        doc.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {doc.status}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              API Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate our technologies into your applications with our comprehensive APIs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {apiDocs.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{api.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    api.status === 'Stable' ? 'bg-green-500/20 text-green-400' :
                    api.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {api.status}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{api.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Version {api.version}</span>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors text-sm"
                    >
                      <FileText className="w-4 h-4 inline mr-1" />
                      Docs
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm"
                    >
                      <Code className="w-4 h-4 inline mr-1" />
                      Examples
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Videos, tutorials, and community resources to help you succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-12 h-12" />,
                title: 'Video Tutorials',
                description: 'Step-by-step video guides for all our technologies.',
                count: '50+ videos'
              },
              {
                icon: <Play className="w-12 h-12" />,
                title: 'Interactive Demos',
                description: 'Try our technologies hands-on with live demonstrations.',
                count: '25+ demos'
              },
              {
                icon: <Download className="w-12 h-12" />,
                title: 'Code Samples',
                description: 'Downloadable code examples and starter templates.',
                count: '100+ samples'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="text-cyan-400 font-semibold">{resource.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our technical team is here to help you implement our solutions successfully. 
              Get expert guidance and support for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Technical Support
              </a>
              <a
                href="/support"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Support Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
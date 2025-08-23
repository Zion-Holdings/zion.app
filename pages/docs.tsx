import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Network, 
  Server, 
  Shield,
  Brain,
  Atom,
  Rocket,
  Users,
  Download,
  ExternalLink,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Star,
  Clock,
  Eye,
  MessageCircle,
  Github,
  Globe,
  Terminal,
  Settings,
  Zap,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'getting-started', name: 'Getting Started', count: 8, icon: <Rocket className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', count: 12, icon: <Brain className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', count: 10, icon: <Atom className="w-5 h-5" /> },
    { id: 'api', name: 'API Reference', count: 8, icon: <Code className="w-5 h-5" /> },
    { id: 'deployment', name: 'Deployment', count: 7, icon: <Server className="w-5 h-5" /> }
  ];

  const documentationSections = {
    'getting-started': [
      {
        id: 'quick-start',
        title: 'Quick Start Guide',
        description: 'Get up and running with Zion Tech Group services in minutes',
        difficulty: 'Beginner',
        readTime: '5 min',
        views: '2.1K',
        featured: true,
        content: 'Learn the basics of setting up your first project with our AI and quantum computing services...'
      },
      {
        id: 'installation',
        title: 'Installation & Setup',
        description: 'Complete installation guide for all our development tools and SDKs',
        difficulty: 'Beginner',
        readTime: '10 min',
        views: '1.8K',
        featured: false,
        content: 'Step-by-step installation instructions for our development environment...'
      },
      {
        id: 'first-project',
        title: 'Your First Project',
        description: 'Create your first AI-powered application with our platform',
        difficulty: 'Beginner',
        readTime: '15 min',
        views: '1.5K',
        featured: false,
        content: 'Build a simple AI application from scratch using our platform...'
      }
    ],
    'ai-services': [
      {
        id: 'ai-consciousness',
        title: 'AI Consciousness Evolution Platform',
        description: 'Complete guide to building conscious AI systems',
        difficulty: 'Advanced',
        readTime: '25 min',
        views: '3.2K',
        featured: true,
        content: 'Deep dive into creating AI systems with genuine consciousness and emotional intelligence...'
      },
      {
        id: 'neural-networks',
        title: 'Advanced Neural Networks',
        description: 'Building and training sophisticated neural network architectures',
        difficulty: 'Intermediate',
        readTime: '20 min',
        views: '2.8K',
        featured: false,
        content: 'Learn to build complex neural networks for advanced AI applications...'
      },
      {
        id: 'ai-ethics',
        title: 'AI Ethics & Governance',
        description: 'Implementing ethical AI practices and governance frameworks',
        difficulty: 'Intermediate',
        readTime: '18 min',
        views: '1.9K',
        featured: false,
        content: 'Best practices for developing ethical and responsible AI systems...'
      }
    ],
    'quantum': [
      {
        id: 'quantum-basics',
        title: 'Quantum Computing Fundamentals',
        description: 'Introduction to quantum computing concepts and principles',
        difficulty: 'Beginner',
        readTime: '30 min',
        views: '2.5K',
        featured: true,
        content: 'Learn the fundamental concepts of quantum computing and quantum mechanics...'
      },
      {
        id: 'quantum-algorithms',
        title: 'Quantum Algorithms',
        description: 'Implementing quantum algorithms for real-world problems',
        difficulty: 'Advanced',
        readTime: '35 min',
        views: '2.1K',
        featured: false,
        content: 'Deep dive into quantum algorithms and their applications...'
      },
      {
        id: 'quantum-ai',
        title: 'Quantum AI Convergence',
        description: 'Combining quantum computing with artificial intelligence',
        difficulty: 'Advanced',
        readTime: '40 min',
        views: '1.7K',
        featured: false,
        content: 'Explore the intersection of quantum computing and AI...'
      }
    ],
    'api': [
      {
        id: 'api-overview',
        title: 'API Overview',
        description: 'Complete API reference and integration guide',
        difficulty: 'Intermediate',
        readTime: '20 min',
        views: '3.5K',
        featured: true,
        content: 'Comprehensive guide to our REST and GraphQL APIs...'
      },
      {
        id: 'authentication',
        title: 'Authentication & Security',
        description: 'Secure API access and authentication methods',
        difficulty: 'Intermediate',
        readTime: '15 min',
        views: '2.9K',
        featured: false,
        content: 'Learn about our security protocols and authentication methods...'
      },
      {
        id: 'rate-limits',
        title: 'Rate Limits & Quotas',
        description: 'Understanding API usage limits and optimization',
        difficulty: 'Beginner',
        readTime: '12 min',
        views: '2.2K',
        featured: false,
        content: 'Optimize your API usage and understand rate limiting...'
      }
    ],
    'deployment': [
      {
        id: 'deployment-guide',
        title: 'Deployment Guide',
        description: 'Deploy your applications to production environments',
        difficulty: 'Intermediate',
        readTime: '25 min',
        views: '2.3K',
        featured: true,
        content: 'Step-by-step deployment guide for production environments...'
      },
      {
        id: 'scaling',
        title: 'Scaling & Performance',
        description: 'Optimize and scale your applications',
        difficulty: 'Advanced',
        readTime: '30 min',
        views: '1.8K',
        featured: false,
        content: 'Learn to scale your applications for high performance...'
      },
      {
        id: 'monitoring',
        title: 'Monitoring & Observability',
        description: 'Monitor and debug your applications in production',
        difficulty: 'Intermediate',
        readTime: '20 min',
        views: '1.6K',
        featured: false,
        content: 'Implement comprehensive monitoring and observability...'
      }
    ]
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = Object.entries(documentationSections).filter(([categoryId]) => 
    selectedCategory === 'all' || categoryId === selectedCategory
  );

  const allDocs = Object.values(documentationSections).flat();
  const filteredDocs = allDocs.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Comprehensive guides, tutorials, and API references to help you build 
              with our cutting-edge AI, quantum computing, and emerging technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, or tutorials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/docs/quick-start" className="block p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
                <p className="text-white/70 text-sm">Get started in 5 minutes</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/docs/api-overview" className="block p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
                <p className="text-white/70 text-sm">Complete API documentation</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/docs/examples" className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <FileText className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Examples</h3>
                <p className="text-white/70 text-sm">Code samples & tutorials</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/docs/support" className="block p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-white/70 text-sm">Get help & support</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Documentation Library</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Organized by category to help you find exactly what you need.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredSections.map(([sectionId, docs]) => (
              <motion.div
                key={sectionId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(sectionId)}
                  className="w-full p-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {categories.find(cat => cat.id === sectionId)?.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {categories.find(cat => cat.id === sectionId)?.name}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {docs.length} guides and tutorials
                        </p>
                      </div>
                    </div>
                    {expandedSections.includes(sectionId) ? (
                      <ChevronDown className="w-6 h-6 text-white/70" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-white/70" />
                    )}
                  </div>
                </button>

                {expandedSections.includes(sectionId) && (
                  <div className="border-t border-white/10 bg-white/5">
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docs.map((doc) => (
                          <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="group"
                          >
                            <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  {doc.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  )}
                                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                    doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                    doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                  }`}>
                                    {doc.difficulty}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-white/60">
                                  <Clock className="w-3 h-3" />
                                  <span>{doc.readTime}</span>
                                </div>
                              </div>

                              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {doc.title}
                              </h4>
                              
                              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                                {doc.description}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 text-xs text-white/60">
                                  <Eye className="w-3 h-3" />
                                  <span>{doc.views}</span>
                                </div>
                                <Link
                                  href={`/docs/${doc.id}`}
                                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                                >
                                  <span>Read Guide</span>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
            <h2 className="text-4xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tools, SDKs, and resources to accelerate your development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <Github className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
              <p className="text-white/70 text-sm mb-4">
                Access our open-source libraries, SDKs, and example projects on GitHub.
              </p>
              <Link
                href="https://github.com/ziontechgroup"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <Terminal className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">CLI Tools</h3>
              <p className="text-white/70 text-sm mb-4">
                Command-line tools for development, deployment, and management.
              </p>
              <Link
                href="/docs/cli"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>CLI Documentation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <Settings className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Configuration</h3>
              <p className="text-white/70 text-sm mb-4">
                Configuration guides and best practices for production deployments.
              </p>
              <Link
                href="/docs/configuration"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>Configuration Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Getting Started?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Our team of experts is here to help you succeed with our technology solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Contact Support
              </Link>
              <Link href="/docs/quick-start" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Start Building
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
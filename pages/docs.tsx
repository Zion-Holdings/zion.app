import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Code, 
  Search, 
  Filter,
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Clock,
  Eye,
  Download as DownloadIcon,
  ChevronRight,
  ChevronDown,
  Terminal,
  Database,
  Settings,
  Zap,
  Cpu,
  Network,
  Lock,
  Server,
  TrendingUp
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, count: 0 },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'space', name: 'Space Technology', icon: Rocket, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'api', name: 'API Reference', icon: Code, count: 0 }
  ];

  const documentation = {
    'getting-started': [
      {
        id: 'quick-start',
        title: 'Quick Start Guide',
        description: 'Get up and running with Zion Tech Group solutions in under 30 minutes',
        difficulty: 'Beginner',
        time: '30 min',
        type: 'Guide',
        url: '/docs/quick-start',
        featured: true
      },
      {
        id: 'installation',
        title: 'Installation Guide',
        description: 'Step-by-step installation instructions for all platforms and environments',
        difficulty: 'Beginner',
        time: '15 min',
        type: 'Guide',
        url: '/docs/installation',
        featured: false
      },
      {
        id: 'first-project',
        title: 'Your First Project',
        description: 'Build your first AI consciousness or quantum computing project',
        difficulty: 'Beginner',
        time: '45 min',
        type: 'Tutorial',
        url: '/docs/first-project',
        featured: true
      }
    ],
    'ai': [
      {
        id: 'ai-consciousness',
        title: 'AI Consciousness Framework',
        description: 'Complete guide to building AI consciousness systems with emotional intelligence',
        difficulty: 'Advanced',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/ai-consciousness',
        featured: true
      },
      {
        id: 'neural-networks',
        title: 'Neural Network Architecture',
        description: 'Deep dive into neural network design and optimization for consciousness',
        difficulty: 'Intermediate',
        time: '1.5 hours',
        type: 'Reference',
        url: '/docs/neural-networks',
        featured: false
      },
      {
        id: 'ethical-ai',
        title: 'Ethical AI Development',
        description: 'Best practices for developing responsible and ethical AI systems',
        difficulty: 'Intermediate',
        time: '1 hour',
        type: 'Guide',
        url: '/docs/ethical-ai',
        featured: false
      }
    ],
    'quantum': [
      {
        id: 'quantum-basics',
        title: 'Quantum Computing Fundamentals',
        description: 'Introduction to quantum computing principles and quantum algorithms',
        difficulty: 'Intermediate',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/quantum-basics',
        featured: true
      },
      {
        id: 'qiskit-integration',
        title: 'Qiskit Integration Guide',
        description: 'Integrate IBM Qiskit with Zion Tech Group quantum solutions',
        difficulty: 'Intermediate',
        time: '1.5 hours',
        type: 'Tutorial',
        url: '/docs/qiskit-integration',
        featured: false
      },
      {
        id: 'quantum-algorithms',
        title: 'Quantum Algorithm Library',
        description: 'Collection of optimized quantum algorithms for common problems',
        difficulty: 'Advanced',
        time: '3 hours',
        type: 'Reference',
        url: '/docs/quantum-algorithms',
        featured: false
      }
    ],
    'space': [
      {
        id: 'space-tech-intro',
        title: 'Space Technology Overview',
        description: 'Introduction to space technology and satellite systems',
        difficulty: 'Intermediate',
        time: '1.5 hours',
        type: 'Guide',
        url: '/docs/space-tech-intro',
        featured: true
      },
      {
        id: 'orbital-mechanics',
        title: 'Orbital Mechanics & Planning',
        description: 'Understanding orbital dynamics and mission planning',
        difficulty: 'Advanced',
        time: '2.5 hours',
        type: 'Reference',
        url: '/docs/orbital-mechanics',
        featured: false
      },
      {
        id: 'satellite-ops',
        title: 'Satellite Operations',
        description: 'Managing satellite systems and ground station operations',
        difficulty: 'Advanced',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/satellite-ops',
        featured: false
      }
    ],
    'security': [
      {
        id: 'quantum-security',
        title: 'Quantum Cybersecurity',
        description: 'Implementing quantum-resistant security protocols',
        difficulty: 'Advanced',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/quantum-security',
        featured: true
      },
      {
        id: 'threat-detection',
        title: 'AI-Powered Threat Detection',
        description: 'Building intelligent security systems with AI',
        difficulty: 'Intermediate',
        time: '1.5 hours',
        type: 'Tutorial',
        url: '/docs/threat-detection',
        featured: false
      },
      {
        id: 'security-compliance',
        title: 'Security Compliance',
        description: 'Meeting industry security standards and regulations',
        difficulty: 'Intermediate',
        time: '1 hour',
        type: 'Reference',
        url: '/docs/security-compliance',
        featured: false
      }
    ],
    'cloud': [
      {
        id: 'cloud-architecture',
        title: 'Cloud Architecture Design',
        description: 'Designing scalable and resilient cloud infrastructure',
        difficulty: 'Intermediate',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/cloud-architecture',
        featured: true
      },
      {
        id: 'autonomous-devops',
        title: 'Autonomous DevOps',
        description: 'Building self-managing infrastructure with AI',
        difficulty: 'Advanced',
        time: '2.5 hours',
        type: 'Tutorial',
        url: '/docs/autonomous-devops',
        featured: false
      },
      {
        id: 'multi-cloud',
        title: 'Multi-Cloud Management',
        description: 'Managing applications across multiple cloud providers',
        difficulty: 'Advanced',
        time: '2 hours',
        type: 'Guide',
        url: '/docs/multi-cloud',
        featured: false
      }
    ],
    'api': [
      {
        id: 'api-overview',
        title: 'API Overview',
        description: 'Introduction to Zion Tech Group APIs and authentication',
        difficulty: 'Beginner',
        time: '30 min',
        type: 'Reference',
        url: '/docs/api-overview',
        featured: true
      },
      {
        id: 'rest-api',
        title: 'REST API Reference',
        description: 'Complete REST API documentation with examples',
        difficulty: 'Intermediate',
        time: '1 hour',
        type: 'Reference',
        url: '/docs/rest-api',
        featured: true
      },
      {
        id: 'graphql-api',
        title: 'GraphQL API',
        description: 'GraphQL API documentation and schema reference',
        difficulty: 'Intermediate',
        time: '1 hour',
        type: 'Reference',
        url: '/docs/graphql-api',
        featured: false
      }
    ]
  };

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = documentation[cat.id as keyof typeof documentation]?.length || 0;
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredDocs = Object.entries(documentation).flatMap(([category, docs]) => {
    if (selectedCategory !== 'all' && category !== selectedCategory) return [];
    
    return docs.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation, guides, and API references for Zion Tech Group's revolutionary technology solutions."
      keywords="documentation, API reference, guides, tutorials, AI consciousness, quantum computing, space technology, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Documentation Hub
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive guides, tutorials, and API references to help you build 
                revolutionary AI consciousness, quantum computing, and space technology solutions
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From quick start guides to advanced implementation details, 
                find everything you need to succeed with Zion Tech Group technologies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, APIs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-300'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="px-2 py-1 bg-gray-700/50 rounded-lg text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Browse Documentation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Organized by category to help you find exactly what you need
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {Object.entries(documentation).map(([categoryId, docs]) => {
                const category = categories.find(c => c.id === categoryId);
                if (!category || docs.length === 0) return null;
                
                const isExpanded = expandedSections.includes(categoryId);
                
                return (
                  <motion.div
                    key={categoryId}
                    variants={fadeInUp}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl border border-gray-700/50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(categoryId)}
                      className="w-full p-6 text-left hover:bg-gray-800/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                            <p className="text-gray-400">{docs.length} documents</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700/50"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {docs.map((doc) => (
                              <div
                                key={doc.id}
                                className="group p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                              >
                                <div className="flex items-center gap-2 mb-3">
                                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                                    doc.type === 'Guide' ? 'bg-blue-500/20 text-blue-400' :
                                    doc.type === 'Tutorial' ? 'bg-green-500/20 text-green-400' :
                                    'bg-purple-500/20 text-purple-400'
                                  }`}>
                                    {doc.type}
                                  </span>
                                  {doc.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  )}
                                </div>
                                
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                  {doc.title}
                                </h4>
                                
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                  {doc.description}
                                </p>
                                
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                  <span className="flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4" />
                                    {doc.difficulty}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {doc.time}
                                  </span>
                                </div>
                                
                                <a
                                  href={doc.url}
                                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm"
                                >
                                  Read Document
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Popular documentation and frequently accessed resources
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: Terminal, title: 'CLI Tools', description: 'Command line interface documentation', url: '/docs/cli' },
                { icon: Database, title: 'Database', description: 'Database setup and management guides', url: '/docs/database' },
                { icon: Settings, title: 'Configuration', description: 'System configuration and optimization', url: '/docs/config' },
                { icon: Zap, title: 'Performance', description: 'Performance tuning and optimization', url: '/docs/performance' },
                { icon: Lock, title: 'Security', description: 'Security best practices and guidelines', url: '/docs/security' },
                { icon: Server, title: 'Deployment', description: 'Deployment guides and strategies', url: '/docs/deployment' },
                { icon: Network, title: 'Networking', description: 'Network configuration and troubleshooting', url: '/docs/networking' },
                { icon: Cpu, title: 'Hardware', description: 'Hardware requirements and specifications', url: '/docs/hardware' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  variants={fadeInUp}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Can't find what you're looking for? Our team of experts is here to help 
                you navigate our documentation and get the most out of our technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  Get Expert Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/resources"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Browse Resources
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
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Code, 
  FileText, 
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Star,
  Clock,
  Users,
  Zap,
  Brain,
  Atom,
  Rocket,
  Shield,
  Database,
  Cloud,
  Terminal,
  GitBranch,
  Package,
  Settings,
  HelpCircle,
  MessageCircle,
  Copy
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', count: 150 },
    { id: 'api', name: 'API Reference', count: 45 },
    { id: 'guides', name: 'Guides & Tutorials', count: 35 },
    { id: 'sdks', name: 'SDKs & Libraries', count: 25 },
    { id: 'deployment', name: 'Deployment', count: 20 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 15 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Quick Start Guide', href: '/docs/quickstart', description: 'Get up and running in 5 minutes', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', href: '/docs/installation', description: 'Step-by-step installation instructions', difficulty: 'Beginner', time: '10 min' },
        { title: 'First Project', href: '/docs/first-project', description: 'Build your first AI application', difficulty: 'Beginner', time: '15 min' },
        { title: 'Configuration', href: '/docs/configuration', description: 'Configure your development environment', difficulty: 'Beginner', time: '8 min' }
      ]
    },
    {
      id: 'ai-platform',
      title: 'AI Platform',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'AI Consciousness API', href: '/docs/ai-consciousness', description: 'Build conscious AI systems', difficulty: 'Advanced', time: '45 min' },
        { title: 'Neural Networks', href: '/docs/neural-networks', description: 'Custom neural network architectures', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Machine Learning Models', href: '/docs/ml-models', description: 'Pre-trained and custom ML models', difficulty: 'Intermediate', time: '25 min' },
        { title: 'AI Ethics & Governance', href: '/docs/ai-ethics', description: 'Responsible AI development', difficulty: 'Intermediate', time: '20 min' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Quantum Algorithms', href: '/docs/quantum-algorithms', description: 'Implement quantum algorithms', difficulty: 'Advanced', time: '60 min' },
        { title: 'Quantum Cryptography', href: '/docs/quantum-crypto', description: 'Quantum-resistant security', difficulty: 'Advanced', time: '40 min' },
        { title: 'Quantum ML', href: '/docs/quantum-ml', description: 'Quantum machine learning', difficulty: 'Advanced', time: '50 min' },
        { title: 'Quantum Simulators', href: '/docs/quantum-simulators', description: 'Local quantum simulation', difficulty: 'Intermediate', time: '25 min' }
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      items: [
        { title: 'Space Resource Intelligence', href: '/docs/space-resources', description: 'Analyze space resources', difficulty: 'Advanced', time: '35 min' },
        { title: 'Satellite Communication', href: '/docs/satellite-comms', description: 'Satellite data processing', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Orbital Mechanics', href: '/docs/orbital-mechanics', description: 'Space mission planning', difficulty: 'Advanced', time: '45 min' },
        { title: 'Space Analytics', href: '/docs/space-analytics', description: 'Space data analysis tools', difficulty: 'Intermediate', time: '25 min' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      items: [
        { title: 'Zero Trust Security', href: '/docs/zero-trust', description: 'Implement zero trust architecture', difficulty: 'Advanced', time: '40 min' },
        { title: 'Threat Detection', href: '/docs/threat-detection', description: 'AI-powered threat detection', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Security Automation', href: '/docs/security-automation', description: 'Automate security processes', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Compliance Tools', href: '/docs/compliance', description: 'Meet security compliance', difficulty: 'Intermediate', time: '20 min' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { title: 'Cloud Deployment', href: '/docs/cloud-deployment', description: 'Deploy to major cloud platforms', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Container Orchestration', href: '/docs/containers', description: 'Docker and Kubernetes setup', difficulty: 'Intermediate', time: '35 min' },
        { title: 'CI/CD Pipelines', href: '/docs/cicd', description: 'Automated deployment workflows', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Monitoring & Logging', href: '/docs/monitoring', description: 'Production monitoring setup', difficulty: 'Intermediate', time: '20 min' }
      ]
    }
  ];

  const popularDocs = [
    {
      title: 'AI Consciousness Quick Start',
      description: 'Build your first conscious AI system in minutes',
      category: 'AI Platform',
      views: '12.5K',
      rating: 4.9,
      href: '/docs/ai-consciousness-quickstart'
    },
    {
      title: 'Quantum Security Implementation',
      description: 'Implement quantum-resistant cryptography',
      category: 'Quantum Computing',
      views: '8.2K',
      rating: 4.8,
      href: '/docs/quantum-security'
    },
    {
      title: 'Space Resource Mining Guide',
      description: 'Complete guide to space resource intelligence',
      category: 'Space Technology',
      views: '6.8K',
      rating: 4.7,
      href: '/docs/space-mining'
    },
    {
      title: 'Zero Trust Security Setup',
      description: 'Step-by-step zero trust implementation',
      category: 'Cybersecurity',
      views: '5.4K',
      rating: 4.9,
      href: '/docs/zero-trust-setup'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = selectedCategory === 'all' 
    ? documentationSections 
    : documentationSections.filter(section => 
        section.items.some(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, API references, and tutorials to help you build with 
                Zion Tech Group's cutting-edge AI, quantum computing, and space technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Popular Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our most popular guides and tutorials to get up and running quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularDocs.map((doc, index) => (
                <motion.article
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {doc.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {doc.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {doc.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {doc.views}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {doc.rating}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Read Guide</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Documentation Library</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by technology area and difficulty level.
              </p>
            </motion.div>

            <div className="space-y-6">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden"
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-gray-700/30 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-gray-400">{section.items.length} guides available</p>
                        </div>
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Section Content */}
                  {expandedSections.includes(section.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {section.items.map((item, itemIndex) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                              className="group cursor-pointer"
                            >
                              <div className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50">
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {item.title}
                                  </h4>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                                </div>
                                
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                  {item.description}
                                </p>
                                
                                <div className="flex items-center justify-between text-xs text-gray-400">
                                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                                    {item.difficulty}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {item.time}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">API Reference</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete API documentation with code examples, authentication, and integration guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* API Overview */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quick API Overview</h3>
                <div className="space-y-4">
                  {[
                    { name: 'AI Consciousness API', endpoints: 25, version: 'v2.1' },
                    { name: 'Quantum Computing API', endpoints: 18, version: 'v1.8' },
                    { name: 'Space Technology API', endpoints: 15, version: 'v1.5' },
                    { name: 'Cybersecurity API', endpoints: 22, version: 'v2.0' }
                  ].map((api, index) => (
                    <div key={api.name} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{api.name}</h4>
                        <p className="text-gray-400 text-sm">{api.endpoints} endpoints</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {api.version}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Code Example */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Code Example</h3>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Python SDK</span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`from zion import AIConsciousness

# Initialize AI consciousness
ai = AIConsciousness(api_key="your_api_key")

# Create conscious AI agent
agent = ai.create_agent(
    name="Assistant",
    personality="helpful and friendly",
    consciousness_level="advanced"
)

# Interact with the agent
response = agent.chat("Hello! How are you?")
print(response.message)`}</code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">SDKs & Libraries</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Official SDKs and libraries for popular programming languages and frameworks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Python SDK', icon: Code, version: 'v2.1.0', downloads: '125K+', color: 'from-blue-500 to-cyan-500' },
                { name: 'JavaScript SDK', icon: Code, version: 'v1.8.5', downloads: '89K+', color: 'from-yellow-500 to-orange-500' },
                { name: 'Go SDK', icon: Code, version: 'v1.5.2', downloads: '45K+', color: 'from-purple-500 to-pink-500' },
                { name: 'Rust SDK', icon: Code, version: 'v1.2.0', downloads: '32K+', color: 'from-red-500 to-pink-500' }
              ].map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${sdk.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <sdk.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{sdk.name}</h3>
                    <div className="text-center space-y-2">
                      <div className="text-sm text-gray-400">Version {sdk.version}</div>
                      <div className="text-sm text-cyan-400">{sdk.downloads} downloads</div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-cyan-400 text-white text-sm font-medium rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                        <Download className="w-4 h-4 mr-1 inline" />
                        Download
                      </button>
                      <button className="px-3 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Community Forum',
                  description: 'Connect with other developers and get help from the community',
                  icon: Users,
                  color: 'from-blue-500 to-cyan-500',
                  action: 'Join Forum'
                },
                {
                  title: 'Support Tickets',
                  description: 'Submit a support ticket for technical assistance',
                  icon: HelpCircle,
                  color: 'from-purple-500 to-pink-500',
                  action: 'Submit Ticket'
                },
                {
                  title: 'Live Chat',
                  description: 'Chat with our support team in real-time',
                  icon: MessageCircle,
                  color: 'from-green-500 to-emerald-500',
                  action: 'Start Chat'
                }
              ].map((help, index) => (
                <motion.div
                  key={help.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${help.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <help.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{help.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{help.description}</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    {help.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
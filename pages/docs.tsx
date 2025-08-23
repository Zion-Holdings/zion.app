import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Search, 
  Filter, 
  ArrowRight,
  FileText,
  Database,
  Cloud,
  Shield,
  Brain,
  Rocket,
  Globe,
  Download,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Terminal,
  Settings,
  Zap,
  Lightbulb,
  AlertCircle,
  Info,
  Clock,
  Users,
  HelpCircle
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const categories = [
    { id: 'all', name: 'All Documentation', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 8 },
    { id: 'api-reference', name: 'API Reference', count: 15 },
    { id: 'tutorials', name: 'Tutorials & Guides', count: 12 },
    { id: 'deployment', name: 'Deployment', count: 6 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 4 }
  ];

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Quick Start Guide', href: '/docs/quick-start', difficulty: 'Beginner', time: '5 min' },
        { title: 'Installation Guide', href: '/docs/installation', difficulty: 'Beginner', time: '10 min' },
        { title: 'Configuration Setup', href: '/docs/configuration', difficulty: 'Beginner', time: '15 min' },
        { title: 'First Project', href: '/docs/first-project', difficulty: 'Beginner', time: '20 min' },
        { title: 'Environment Setup', href: '/docs/environment', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Authentication Setup', href: '/docs/authentication', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Project Structure', href: '/docs/project-structure', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Best Practices', href: '/docs/best-practices', difficulty: 'Intermediate', time: '45 min' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Authentication API', href: '/docs/api/auth', difficulty: 'Intermediate', time: '15 min' },
        { title: 'AI Consciousness API', href: '/docs/api/ai-consciousness', difficulty: 'Advanced', time: '30 min' },
        { title: 'Quantum Computing API', href: '/docs/api/quantum', difficulty: 'Advanced', time: '45 min' },
        { title: 'Space Technology API', href: '/docs/api/space-tech', difficulty: 'Advanced', time: '40 min' },
        { title: 'Cybersecurity API', href: '/docs/api/cybersecurity', difficulty: 'Intermediate', time: '25 min' },
        { title: 'Cloud Infrastructure API', href: '/docs/api/cloud', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Data Analytics API', href: '/docs/api/analytics', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Webhook API', href: '/docs/api/webhooks', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Rate Limiting', href: '/docs/api/rate-limiting', difficulty: 'Beginner', time: '10 min' },
        { title: 'Error Handling', href: '/docs/api/error-handling', difficulty: 'Beginner', time: '15 min' },
        { title: 'Response Formats', href: '/docs/api/response-formats', difficulty: 'Beginner', time: '10 min' },
        { title: 'SDK Downloads', href: '/docs/api/sdks', difficulty: 'Beginner', time: '5 min' },
        { title: 'API Versioning', href: '/docs/api/versioning', difficulty: 'Intermediate', time: '20 min' },
        { title: 'Testing APIs', href: '/docs/api/testing', difficulty: 'Intermediate', time: '25 min' },
        { title: 'API Security', href: '/docs/api/security', difficulty: 'Advanced', time: '35 min' }
      ]
    },
    {
      id: 'tutorials',
      title: 'Tutorials & Guides',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'Building AI Chatbot', href: '/docs/tutorials/ai-chatbot', difficulty: 'Intermediate', time: '60 min' },
        { title: 'Quantum Algorithm Implementation', href: '/docs/tutorials/quantum-algorithm', difficulty: 'Advanced', time: '90 min' },
        { title: 'Space Resource Analysis', href: '/docs/tutorials/space-analysis', difficulty: 'Advanced', time: '75 min' },
        { title: 'Zero Trust Security Setup', href: '/docs/tutorials/zero-trust', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Cloud Migration Guide', href: '/docs/tutorials/cloud-migration', difficulty: 'Intermediate', time: '120 min' },
        { title: 'Data Pipeline Creation', href: '/docs/tutorials/data-pipeline', difficulty: 'Intermediate', time: '90 min' },
        { title: 'Microservices Architecture', href: '/docs/tutorials/microservices', difficulty: 'Advanced', time: '150 min' },
        { title: 'DevOps Automation', href: '/docs/tutorials/devops', difficulty: 'Intermediate', time: '60 min' },
        { title: 'Performance Optimization', href: '/docs/tutorials/performance', difficulty: 'Advanced', time: '80 min' },
        { title: 'Monitoring & Alerting', href: '/docs/tutorials/monitoring', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Security Testing', href: '/docs/tutorials/security-testing', difficulty: 'Advanced', time: '90 min' },
        { title: 'Scalability Patterns', href: '/docs/tutorials/scalability', difficulty: 'Advanced', time: '120 min' }
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      items: [
        { title: 'Docker Deployment', href: '/docs/deployment/docker', difficulty: 'Intermediate', time: '30 min' },
        { title: 'Kubernetes Setup', href: '/docs/deployment/kubernetes', difficulty: 'Advanced', time: '60 min' },
        { title: 'AWS Deployment', href: '/docs/deployment/aws', difficulty: 'Intermediate', time: '45 min' },
        { title: 'Azure Deployment', href: '/docs/deployment/azure', difficulty: 'Intermediate', time: '45 min' },
        { title: 'CI/CD Pipeline', href: '/docs/deployment/cicd', difficulty: 'Advanced', time: '90 min' },
        { title: 'Production Checklist', href: '/docs/deployment/production', difficulty: 'Intermediate', time: '30 min' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-500',
      items: [
        { title: 'Common Issues', href: '/docs/troubleshooting/common-issues', difficulty: 'Beginner', time: '20 min' },
        { title: 'Performance Issues', href: '/docs/troubleshooting/performance', difficulty: 'Intermediate', time: '40 min' },
        { title: 'Security Issues', href: '/docs/troubleshooting/security', difficulty: 'Advanced', time: '60 min' },
        { title: 'Debugging Guide', href: '/docs/troubleshooting/debugging', difficulty: 'Intermediate', time: '45 min' }
      ]
    }
  ];

  const quickStartCode = `# Install Zion Tech Group SDK
npm install @ziontechgroup/sdk

# Initialize the client
import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

# Make your first API call
const response = await client.ai.consciousness.create({
  prompt: "Hello, how are you?",
  model: "consciousness-v2"
});

console.log(response.consciousness);`;

  const apiExample = `curl -X POST https://api.ziontechgroup.com/v1/ai/consciousness \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain quantum computing",
    "model": "consciousness-v2",
    "max_tokens": 1000
  }'`;

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = documentationSections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         section.items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || section.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and API references to help you build 
                with our AI consciousness, quantum computing, and space technology platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
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

        {/* Quick Start Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start
              </h2>
              <p className="text-lg text-gray-400">
                Get up and running in minutes with our SDK
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Install & Initialize</h3>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">JavaScript/Node.js</span>
                    <button
                      onClick={() => copyToClipboard(quickStartCode)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{quickStartCode}</code>
                  </pre>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">API Example</h3>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">cURL</span>
                    <button
                      onClick={() => copyToClipboard(apiExample)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{apiExample}</code>
                  </pre>
                </div>
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Documentation
              </h2>
              <p className="text-lg text-gray-400">
                Explore our comprehensive guides and references
              </p>
            </motion.div>

            {filteredSections.length > 0 ? (
              <div className="space-y-6">
                {filteredSections.map((section, sectionIndex) => {
                  const IconComponent = section.icon;
                  const isExpanded = expandedSections.includes(section.id);
                  
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{section.title}</h3>
                              <p className="text-gray-400">{section.items.length} guides available</p>
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
                          className="border-t border-gray-700"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {section.items.map((item, itemIndex) => (
                                <motion.a
                                  key={item.href}
                                  href={item.href}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                                  className="group p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                      {item.title}
                                    </h4>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                                  </div>
                                  <div className="flex items-center space-x-3 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                                      {item.difficulty}
                                    </span>
                                    <span className="text-gray-400 flex items-center space-x-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{item.time}</span>
                                    </span>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No documentation found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-lg text-gray-400">
                More ways to learn and get help
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'SDK Downloads',
                  description: 'Get the latest SDKs for your preferred programming language',
                  icon: Download,
                  color: 'from-blue-500 to-cyan-500',
                  href: '/docs/sdks'
                },
                {
                  title: 'API Playground',
                  description: 'Test our APIs interactively in your browser',
                  icon: Terminal,
                  color: 'from-green-500 to-emerald-500',
                  href: '/docs/playground'
                },
                {
                  title: 'Community Forum',
                  description: 'Connect with other developers and get help',
                  icon: Users,
                  color: 'from-purple-500 to-pink-500',
                  href: '/community'
                },
                {
                  title: 'Support Center',
                  description: 'Get help from our technical support team',
                  icon: HelpCircle,
                  color: 'from-orange-500 to-red-500',
                  href: '/support'
                }
              ].map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.a
                    key={resource.title}
                    href={resource.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{resource.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/community"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Join Community
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
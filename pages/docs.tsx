import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Play, Download, 
  Search, ArrowRight, CheckCircle, Users, 
  Globe, Zap, Brain, Rocket, Shield
} from 'lucide-react';

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials for new users',
    icon: <Play className="w-8 h-8 text-green-400" />,
    color: 'from-green-500 to-emerald-600',
    docs: [
      { title: 'Quick Start Guide', href: '/docs/quick-start', description: 'Get up and running in 5 minutes' },
      { title: 'Installation Guide', href: '/docs/installation', description: 'Step-by-step installation instructions' },
      { title: 'First Project', href: '/docs/first-project', description: 'Build your first application' },
      { title: 'Configuration', href: '/docs/configuration', description: 'Configure your environment' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Documentation for AI and machine learning services',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600',
    docs: [
      { title: 'AI Consciousness Platform', href: '/docs/ai-consciousness', description: 'AI consciousness development guide' },
      { title: 'Machine Learning APIs', href: '/docs/ml-apis', description: 'ML model training and inference' },
      { title: 'AI Ethics Framework', href: '/docs/ai-ethics', description: 'Ethical AI development guidelines' },
      { title: 'AI Autonomous Systems', href: '/docs/ai-autonomous', description: 'Building autonomous AI systems' }
    ]
  },
  {
    title: 'Quantum Computing',
    description: 'Quantum computing documentation and tutorials',
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    color: 'from-purple-500 to-pink-600',
    docs: [
      { title: 'Quantum Basics', href: '/docs/quantum-basics', description: 'Introduction to quantum computing' },
      { title: 'Quantum Algorithms', href: '/docs/quantum-algorithms', description: 'Quantum algorithm implementations' },
      { title: 'Quantum Neural Networks', href: '/docs/quantum-neural', description: 'Quantum neural network guide' },
      { title: 'Quantum Security', href: '/docs/quantum-security', description: 'Quantum-resistant cryptography' }
    ]
  },
  {
    title: 'Space Technology',
    description: 'Space technology and resource mining documentation',
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    color: 'from-blue-500 to-indigo-600',
    docs: [
      { title: 'Space Resource Mining', href: '/docs/space-mining', description: 'Asteroid mining platform guide' },
      { title: 'Satellite Systems', href: '/docs/satellite-systems', description: 'Satellite technology documentation' },
      { title: 'Space AI Platform', href: '/docs/space-ai', description: 'AI-powered space technology' },
      { title: 'Mission Planning', href: '/docs/mission-planning', description: 'Space mission planning tools' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: <Code className="w-8 h-8 text-orange-400" />,
    color: 'from-orange-500 to-red-600',
    docs: [
      { title: 'REST API', href: '/docs/rest-api', description: 'REST API endpoints and methods' },
      { title: 'GraphQL API', href: '/docs/graphql-api', description: 'GraphQL schema and queries' },
      { title: 'WebSocket API', href: '/docs/websocket-api', description: 'Real-time communication API' },
      { title: 'SDK Documentation', href: '/docs/sdk', description: 'Client library documentation' }
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Security best practices and compliance documentation',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    color: 'from-red-500 to-pink-600',
    docs: [
      { title: 'Security Best Practices', href: '/docs/security', description: 'Security guidelines and practices' },
      { title: 'SOC 2 Compliance', href: '/docs/soc2', description: 'SOC 2 compliance documentation' },
      { title: 'Data Privacy', href: '/docs/privacy', description: 'Data privacy and GDPR compliance' },
      { title: 'Authentication', href: '/docs/auth', description: 'Authentication and authorization' }
    ]
  }
];

const quickStartGuides = [
  {
    title: 'AI Platform Setup',
    description: 'Set up your AI development environment',
    time: '15 min',
    difficulty: 'Beginner',
    href: '/docs/ai-setup'
  },
  {
    title: 'Quantum Computing First Steps',
    description: 'Run your first quantum algorithm',
    time: '30 min',
    difficulty: 'Intermediate',
    href: '/docs/quantum-first-steps'
  },
  {
    title: 'Space Technology Demo',
    description: 'Explore space technology capabilities',
    time: '20 min',
    difficulty: 'Beginner',
    href: '/docs/space-demo'
  },
  {
    title: 'API Integration',
    description: 'Integrate our APIs into your application',
    time: '45 min',
    difficulty: 'Intermediate',
    href: '/docs/api-integration'
  }
];

const popularDocs = [
  { title: 'Getting Started Guide', href: '/docs/getting-started', views: '15.2k' },
  { title: 'API Reference', href: '/docs/api', views: '12.8k' },
  { title: 'AI Consciousness Tutorial', href: '/docs/ai-consciousness-tutorial', views: '9.5k' },
  { title: 'Quantum Computing Basics', href: '/docs/quantum-basics', views: '8.7k' },
  { title: 'Security Best Practices', href: '/docs/security-best-practices', views: '7.3k' },
  { title: 'Space Mining Platform', href: '/docs/space-mining-platform', views: '6.9k' }
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive guides, tutorials, and API references to help you build with our revolutionary technology solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, and tutorials..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/docs/getting-started"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/docs/api"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                API Reference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step tutorials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">{guide.time}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{guide.description}</p>
                
                <Link 
                  href={guide.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                >
                  Start Guide <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organized documentation to help you find exactly what you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {category.docs.map((doc, docIndex) => (
                    <Link 
                      key={docIndex}
                      href={doc.href}
                      className="block p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="font-semibold text-white mb-1">{doc.title}</div>
                      <div className="text-sm text-gray-400">{doc.description}</div>
                    </Link>
                  ))}
                </div>

                <Link 
                  href={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  View All {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and frequently referenced documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                    Popular
                  </span>
                  <span className="text-sm text-gray-400">{doc.views} views</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">{doc.title}</h3>
                
                <Link 
                  href={doc.href}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm"
                >
                  Read Documentation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More resources to help you succeed with our technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides and walkthroughs',
                icon: <Play className="w-8 h-8" />,
                href: '/tutorials',
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Code Examples',
                description: 'Ready-to-use code samples and templates',
                icon: <Code className="w-8 h-8" />,
                href: '/examples',
                color: 'from-orange-500 to-red-600'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers and get help',
                icon: <Users className="w-8 h-8" />,
                href: '/community',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-white">{resource.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                <Link 
                  href={resource.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore {resource.title} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Help with Documentation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our support team is here to help you find the documentation you need
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                href="/support"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
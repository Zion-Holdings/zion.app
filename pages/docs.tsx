import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Terminal, 
  FileText, 
  Search, 
  ChevronRight,
  Download,
  ExternalLink,
  Play,
  Clock,
  Users,
  Star,
  Tag,
  Filter,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const documentationSections = [
  {
    title: 'Getting Started',
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    description: 'Quick start guides and onboarding',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-400/30',
    docs: [
      { title: 'Platform Overview', time: '5 min read', level: 'Beginner' },
      { title: 'Account Setup', time: '10 min read', level: 'Beginner' },
      { title: 'First Integration', time: '15 min read', level: 'Beginner' },
      { title: 'Basic Configuration', time: '12 min read', level: 'Beginner' }
    ]
  },
  {
    title: 'API Reference',
    icon: <Code className="w-6 h-6 text-purple-400" />,
    description: 'Complete API documentation and examples',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-400/30',
    docs: [
      { title: 'Authentication', time: '8 min read', level: 'Intermediate' },
      { title: 'REST API Endpoints', time: '20 min read', level: 'Intermediate' },
      { title: 'GraphQL Schema', time: '15 min read', level: 'Advanced' },
      { title: 'Webhooks', time: '12 min read', level: 'Intermediate' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    description: 'AI platform guides and tutorials',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-400/30',
    docs: [
      { title: 'AI Model Training', time: '25 min read', level: 'Advanced' },
      { title: 'Data Preprocessing', time: '18 min read', level: 'Intermediate' },
      { title: 'Model Deployment', time: '22 min read', level: 'Advanced' },
      { title: 'Performance Optimization', time: '15 min read', level: 'Advanced' }
    ]
  },
  {
    title: 'Security & Compliance',
    icon: <Shield className="w-6 h-6 text-orange-400" />,
    description: 'Security best practices and compliance',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30',
    docs: [
      { title: 'Security Overview', time: '10 min read', level: 'Beginner' },
      { title: 'Access Control', time: '15 min read', level: 'Intermediate' },
      { title: 'Data Encryption', time: '12 min read', level: 'Intermediate' },
      { title: 'Compliance Standards', time: '20 min read', level: 'Advanced' }
    ]
  }
];

const popularDocs = [
  {
    title: 'Quick Start Guide',
    description: 'Get up and running in under 10 minutes',
    category: 'Getting Started',
    readTime: '8 min',
    level: 'Beginner',
    popularity: 95
  },
  {
    title: 'API Authentication',
    description: 'Secure API access with OAuth 2.0 and JWT',
    category: 'API Reference',
    readTime: '12 min',
    level: 'Intermediate',
    popularity: 89
  },
  {
    title: 'Deploying AI Models',
    description: 'Deploy trained models to production',
    category: 'AI & ML',
    readTime: '20 min',
    level: 'Advanced',
    popularity: 87
  },
  {
    title: 'Webhook Integration',
    description: 'Real-time notifications and event handling',
    category: 'API Reference',
    readTime: '15 min',
    level: 'Intermediate',
    popularity: 84
  }
];

const codeExamples = [
  {
    title: 'Initialize SDK',
    language: 'JavaScript',
    code: `import { ZionTechClient } from '@ziontech/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Start using the platform
const response = await client.ai.predict({
  model: 'gpt-advanced',
  input: 'Your input data'
});`
  },
  {
    title: 'Create AI Model',
    language: 'Python',
    code: `from ziontech import AIModel, TrainingConfig

# Configure training parameters
config = TrainingConfig(
    model_type='neural_network',
    epochs=100,
    batch_size=32
)

# Create and train model
model = AIModel(config)
model.train(training_data)
model.deploy()`
  },
  {
    title: 'Query API',
    language: 'cURL',
    code: `curl -X POST https://api.ziontechgroup.com/v1/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "quantum-neural-v2",
    "input": {
      "data": "your_input_data"
    }
  }'`
  }
];

export default function Docs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Getting Started', 'API Reference', 'AI & ML', 'Security'];

  return (
    <Layout>
      <SEO
        title="Documentation | Zion Tech Group"
        description="Comprehensive technical documentation, API references, guides, and tutorials for Zion Tech Group's cutting-edge technology platforms."
        keywords={["documentation", "API reference", "technical guides", "tutorials", "developer resources", "Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need to integrate and build with our cutting-edge AI, quantum computing, 
                and space technology platforms.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 inline mr-2" />
                  Quick Start
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Code className="w-5 h-5 inline mr-2" />
                  API Reference
                </motion.button>
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-4">Documentation Categories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by topic and expertise level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentationSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border ${section.borderColor} bg-gradient-to-br ${section.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <div className="space-y-3">
                    {section.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{doc.title}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-white/10 px-2 py-1 rounded">{doc.level}</span>
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{doc.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Popular Documentation</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Most accessed guides and references by our developer community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-cyan-400">{doc.title}</h3>
                      <p className="text-gray-300 mb-3">{doc.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-1" />
                          {doc.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {doc.readTime}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {doc.level}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-400">{doc.popularity}%</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Code Examples</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get started quickly with these practical code examples and snippets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
                >
                  <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                      <p className="text-sm text-cyan-400">{example.language}</p>
                    </div>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Explore additional resources or get in touch with our team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Tutorials</h3>
                  <p className="text-gray-400 text-sm">Step-by-step tutorials</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Community</h3>
                  <p className="text-gray-400 text-sm">Connect with developers</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p className="text-gray-400 text-sm">Get expert assistance</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
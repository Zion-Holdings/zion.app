import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Rocket, 
  Search, 
  Download,
  ExternalLink,
  CheckCircle,
  Star,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-500',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', time: '5 min read', level: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read', level: 'Beginner' },
        { title: 'First Project Setup', description: 'Create your first project with Zion Tech', time: '15 min read', level: 'Beginner' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      docs: [
        { title: 'REST API Guide', description: 'Complete REST API reference', time: '30 min read', level: 'Intermediate' },
        { title: 'GraphQL API', description: 'GraphQL schema and queries', time: '25 min read', level: 'Intermediate' },
        { title: 'WebSocket API', description: 'Real-time communication API', time: '20 min read', level: 'Advanced' }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guides',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      docs: [
        { title: 'Security Best Practices', description: 'Security guidelines and recommendations', time: '20 min read', level: 'Intermediate' },
        { title: 'Compliance Guide', description: 'Meet regulatory requirements', time: '25 min read', level: 'Intermediate' },
        { title: 'Authentication & Authorization', description: 'User management and access control', time: '30 min read', level: 'Advanced' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'AI model development and deployment guides',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Model Development', description: 'Build and train AI models', time: '45 min read', level: 'Advanced' },
        { title: 'Model Deployment', description: 'Deploy models to production', time: '30 min read', level: 'Advanced' },
        { title: 'AI Ethics & Bias', description: 'Responsible AI development', time: '20 min read', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Cloud deployment and infrastructure management',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      docs: [
        { title: 'Cloud Deployment', description: 'Deploy to major cloud providers', time: '35 min read', level: 'Intermediate' },
        { title: 'Infrastructure as Code', description: 'Terraform and CloudFormation guides', time: '40 min read', level: 'Advanced' },
        { title: 'Monitoring & Logging', description: 'Observability and troubleshooting', time: '25 min read', level: 'Intermediate' }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Data management and analytics solutions',
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      docs: [
        { title: 'Data Pipeline Setup', description: 'Build data processing pipelines', time: '30 min read', level: 'Intermediate' },
        { title: 'Analytics Dashboard', description: 'Create interactive dashboards', time: '25 min read', level: 'Intermediate' },
        { title: 'Data Governance', description: 'Data quality and compliance', time: '20 min read', level: 'Advanced' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', views: '15.2k', rating: 4.9, category: 'Getting Started' },
    { title: 'API Authentication', views: '12.8k', rating: 4.8, category: 'API Reference' },
    { title: 'Security Best Practices', views: '11.5k', rating: 4.9, category: 'Security' },
    { title: 'Cloud Deployment', views: '10.3k', rating: 4.7, category: 'Cloud' }
  ];

  const resources = [
    { title: 'SDK Downloads', description: 'Client libraries and SDKs', icon: <Download className="w-6 h-6" />, href: '/resources/sdk' },
    { title: 'Code Examples', description: 'Sample code and templates', icon: <Code className="w-6 h-6" />, href: '/resources/examples' },
    { title: 'Video Tutorials', description: 'Step-by-step video guides', icon: <ExternalLink className="w-6 h-6" />, href: '/resources/videos' },
    { title: 'Community Forum', description: 'Get help from the community', icon: <Users className="w-6 h-6" />, href: '/community' }
  ];

  return (
    <Layout 
      title="Documentation - Zion Tech Group"
      description="Comprehensive technical documentation, API references, and guides for Zion Tech Group solutions. Get started quickly with our detailed tutorials and examples."
      keywords="documentation, API reference, technical guides, tutorials, Zion Tech Group, developer resources"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Documentation
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive technical documentation, API references, and guides to help you 
                build amazing solutions with Zion Tech Group technology.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View All Guides
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most viewed and highly-rated documentation to help you get started quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{doc.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300 ml-1">{doc.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {doc.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {doc.views} views
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation by topic to help you find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group">
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{doc.title}</h4>
                          <p className="text-sm text-gray-400">{doc.description}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{doc.time}</span>
                          <span className="px-2 py-1 bg-gray-700 rounded text-xs">{doc.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View All {category.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond documentation, we offer additional resources to help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Can't find what you're looking for? Our team is here to help you 
                get the most out of our documentation and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Request Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocumentationPage;
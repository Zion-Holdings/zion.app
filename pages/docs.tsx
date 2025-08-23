import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Shield, 
  Brain, Rocket, Zap, ArrowRight, Download,
  ExternalLink, Search, Filter, Clock
} from 'lucide-react';
import Link from 'next/link';

export default function DocumentationPage() {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      docs: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running in 5 minutes',
          type: 'Guide',
          time: '5 min read',
          link: '/docs/quick-start',
          icon: <Rocket className="w-6 h-6" />
        },
        {
          title: 'Installation Guide',
          description: 'Step-by-step installation instructions',
          type: 'Tutorial',
          time: '15 min read',
          link: '/docs/installation',
          icon: <Download className="w-6 h-6" />
        },
        {
          title: 'First Project',
          description: 'Build your first project with Zion Tech',
          type: 'Tutorial',
          time: '30 min read',
          link: '/docs/first-project',
          icon: <Code className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      docs: [
        {
          title: 'REST API Reference',
          description: 'Complete REST API documentation',
          type: 'API Docs',
          time: 'Reference',
          link: '/api-documentation',
          icon: <Code className="w-6 h-6" />
        },
        {
          title: 'GraphQL API',
          description: 'GraphQL schema and queries',
          type: 'API Docs',
          time: 'Reference',
          link: '/docs/graphql-api',
          icon: <Code className="w-6 h-6" />
        },
        {
          title: 'Webhooks',
          description: 'Webhook configuration and events',
          type: 'API Docs',
          time: 'Reference',
          link: '/docs/webhooks',
          icon: <Code className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Services',
      description: 'AI and machine learning documentation',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      docs: [
        {
          title: 'AI Model Training',
          description: 'Train and deploy custom AI models',
          type: 'Guide',
          time: '45 min read',
          link: '/docs/ai-model-training',
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: 'Natural Language Processing',
          description: 'NLP services and API usage',
          type: 'Guide',
          time: '30 min read',
          link: '/docs/nlp-services',
          icon: <Brain className="w-6 h-6" />
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis services',
          type: 'Guide',
          time: '35 min read',
          link: '/docs/computer-vision',
          icon: <Brain className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guides',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      docs: [
        {
          title: 'Security Best Practices',
          description: 'Secure your applications and data',
          type: 'Guide',
          time: '25 min read',
          link: '/docs/security-best-practices',
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: 'SOC 2 Compliance',
          description: 'Achieve and maintain SOC 2 compliance',
          type: 'Guide',
          time: '60 min read',
          link: '/docs/soc2-compliance',
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: 'Data Privacy',
          description: 'GDPR and data protection guidelines',
          type: 'Guide',
          time: '40 min read',
          link: '/docs/data-privacy',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, tutorials, and API references to help you build amazing applications 
                with Zion Tech Group services.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Documentation Categories
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Find the information you need to build, deploy, and scale your applications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`p-8 rounded-xl border border-gray-700/50 ${category.bgColor} hover:border-cyan-500/50 transition-all duration-300`}
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className={`text-2xl font-bold ml-4 ${category.color}`}>
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <Link
                        key={docIndex}
                        href={doc.link}
                        className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="mt-1">
                              {doc.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                                {doc.title}
                              </h4>
                              <p className="text-gray-400 text-sm mt-1">{doc.description}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs px-2 py-1 bg-gray-700/50 rounded text-gray-300">
                                  {doc.type}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {doc.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need More Help?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Support
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Cloud, Shield, Zap, Users, Search, Download, ExternalLink, ArrowRight, FileText, Play, Terminal, Bookmark, Clock } from 'lucide-react';

const Docs: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: <Play className="w-8 h-8 text-green-400" />,
      guides: [
        'Quick Start Guide',
        'Installation & Setup',
        'First Project',
        'Basic Configuration'
      ],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      guides: [
        'Authentication',
        'Endpoints',
        'Request/Response',
        'Error Handling'
      ],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for popular languages',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      guides: [
        'JavaScript/Node.js',
        'Python',
        'Java',
        'Go',
        'C#'
      ],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Deployment',
      description: 'Deployment guides and infrastructure setup',
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      guides: [
        'Docker Deployment',
        'Kubernetes Setup',
        'Cloud Providers',
        'Monitoring & Logging'
      ],
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Security',
      description: 'Security best practices and configuration',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      guides: [
        'Authentication',
        'Authorization',
        'Data Encryption',
        'Compliance'
      ],
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      title: 'Advanced Topics',
      description: 'Advanced features and optimization guides',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      guides: [
        'Performance Tuning',
        'Scalability',
        'Custom Integrations',
        'Troubleshooting'
      ],
      color: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: <Code className="w-6 h-6" />,
      href: '/api-documentation',
      color: 'text-blue-400'
    },
    {
      title: 'Developer Portal',
      description: 'Developer resources and tools',
      icon: <Terminal className="w-6 h-6" />,
      href: '/developer',
      color: 'text-green-400'
    },
    {
      title: 'Support Center',
      description: 'Get help and support',
      icon: <Users className="w-6 h-6" />,
      href: '/support',
      color: 'text-purple-400'
    },
    {
      title: 'Resources',
      description: 'Additional resources and downloads',
      icon: <Download className="w-6 h-6" />,
      href: '/resources',
      color: 'text-cyan-400'
    }
  ];

  const popularGuides = [
    {
      title: 'Setting Up Your First AI Model',
      description: 'Learn how to deploy and configure your first AI model with our platform',
      readTime: '15 min read',
      difficulty: 'Beginner',
      category: 'Getting Started'
    },
    {
      title: 'API Authentication Best Practices',
      description: 'Secure your API integrations with industry-standard authentication methods',
      readTime: '20 min read',
      difficulty: 'Intermediate',
      category: 'Security'
    },
    {
      title: 'Scaling Your Infrastructure',
      description: 'Optimize your deployment for high performance and scalability',
      readTime: '25 min read',
      difficulty: 'Advanced',
      category: 'Advanced Topics'
    },
    {
      title: 'Integrating with Third-Party Services',
      description: 'Connect your applications with popular third-party services and APIs',
      readTime: '18 min read',
      difficulty: 'Intermediate',
      category: 'SDKs & Libraries'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive guides, tutorials, and API references to help you build amazing applications with our technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative max-w-md mx-auto sm:mx-0">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`mb-4 ${link.color}`}>
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{link.description}</p>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find the information you need organized by topic and complexity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <ul className="space-y-3 mb-6">
                    {category.guides.map((guide, guideIndex) => (
                      <li key={guideIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {guide}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300">
                    Explore {category.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Popular Guides
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Most-read documentation and tutorials from our community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularGuides.map((guide, index) => (
                <motion.article
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {guide.category}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{guide.title}</h3>
                  <p className="text-gray-400 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {guide.readTime}
                    </div>
                    <Bookmark className="w-4 h-4 text-gray-500 hover:text-cyan-400 transition-colors" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tools, examples, and resources to accelerate your development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Code Examples</h3>
                <p className="text-gray-400 mb-4">Ready-to-use code examples and snippets for common use cases</p>
                <button className="px-6 py-3 bg-blue-500/20 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                  Browse Examples
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <Play className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Video Tutorials</h3>
                <p className="text-gray-400 mb-4">Step-by-step video guides for visual learners</p>
                <button className="px-6 py-3 bg-green-500/20 text-green-400 font-semibold rounded-lg hover:bg-green-500/30 transition-all duration-300">
                  Watch Videos
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
              >
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Community</h3>
                <p className="text-gray-400 mb-4">Connect with other developers and get help from the community</p>
                <button className="px-6 py-3 bg-purple-500/20 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                  Join Community
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
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

export default Docs;
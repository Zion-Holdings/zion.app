import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Search, 
  Download, 
  ExternalLink, 
  ArrowRight,
  Github,
  Globe,
  Users,
  Zap
} from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const categories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and tutorials for new users',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      links: [
        { title: 'Quick Start Guide', href: '/docs/getting-started', description: 'Get up and running in minutes' },
        { title: 'Installation', href: '/docs/installation', description: 'Step-by-step installation instructions' },
        { title: 'First Project', href: '/docs/first-project', description: 'Create your first project' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-8 h-8 text-blue-400" />,
      links: [
        { title: 'Authentication', href: '/docs/api/auth', description: 'API authentication methods' },
        { title: 'Endpoints', href: '/docs/api/endpoints', description: 'All available API endpoints' },
        { title: 'SDKs', href: '/docs/api/sdks', description: 'Official SDKs and libraries' }
      ]
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step guides and examples',
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      links: [
        { title: 'Building a Web App', href: '/docs/tutorials/web-app', description: 'Create a complete web application' },
        { title: 'AI Integration', href: '/docs/tutorials/ai-integration', description: 'Integrate AI into your projects' },
        { title: 'Deployment', href: '/docs/tutorials/deployment', description: 'Deploy your applications' }
      ]
    },
    {
      title: 'Reference',
      description: 'Detailed reference materials and specifications',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      links: [
        { title: 'Configuration', href: '/docs/reference/config', description: 'Configuration options and settings' },
        { title: 'CLI Commands', href: '/docs/reference/cli', description: 'Command line interface reference' },
        { title: 'Best Practices', href: '/docs/reference/best-practices', description: 'Development best practices' }
      ]
    }
  ];

  const resources = [
    {
      title: 'GitHub Repository',
      description: 'Source code and issue tracking',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/ziontechgroup',
      external: true
    },
    {
      title: 'Community Forum',
      description: 'Get help from the community',
      icon: <Users className="w-6 h-6" />,
      href: '/community',
      external: false
    },
    {
      title: 'Video Tutorials',
      description: 'Visual learning resources',
      icon: <Globe className="w-6 h-6" />,
      href: '/tutorials',
      external: false
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <BookOpen className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, tutorials, and reference materials to help you build amazing 
                applications with our technology platform.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by category to find exactly what you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="block p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                              {link.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{link.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond documentation, explore these additional resources to enhance your development experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {resource.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{resource.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    target={resource.external ? '_blank' : undefined}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                  >
                    Visit Resource
                    {resource.external && <ExternalLink className="w-4 h-4 ml-2" />}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Contact Support
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Request Feature
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
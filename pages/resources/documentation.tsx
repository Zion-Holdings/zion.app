import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Code, 
  Search, 
  Download, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  Zap
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const DocumentationPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and integration guides',
      icon: <Code className="w-8 h-8" />,
      features: ['REST API Reference', 'SDK Documentation', 'Code Examples', 'Integration Guides'],
      href: '/resources/api',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Developer Guides',
      description: 'Step-by-step guides for developers and engineers',
      icon: <BookOpen className="w-8 h-8" />,
      features: ['Getting Started', 'Best Practices', 'Tutorials', 'Sample Projects'],
      href: '/resources/developer-guides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'User Manuals',
      description: 'User-friendly guides for end users and administrators',
      icon: <Users className="w-8 h-8" />,
      features: ['User Interface Guide', 'Administration Guide', 'Troubleshooting', 'FAQ'],
      href: '/resources/user-manuals',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed technical specifications and architecture',
      icon: <FileText className="w-8 h-8" />,
      features: ['System Architecture', 'Data Models', 'Security Specifications', 'Performance Metrics'],
      href: '/resources/technical-specs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Integration Guides',
      description: 'Guides for integrating with third-party systems',
      icon: <Zap className="w-8 h-8" />,
      features: ['Third-party Integrations', 'Webhook Setup', 'Authentication', 'Data Mapping'],
      href: '/resources/integration-guides',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Release Notes',
      description: 'Detailed information about product updates and releases',
      icon: <Clock className="w-8 h-8" />,
      features: ['Version History', 'New Features', 'Bug Fixes', 'Migration Guides'],
      href: '/resources/release-notes',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const documentationFeatures = [
    {
      title: 'Comprehensive',
      description: 'Complete coverage of all features and functionality',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Up-to-Date',
      description: 'Always current with the latest product versions',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Searchable',
      description: 'Easy to find the information you need quickly',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Downloadable',
      description: 'Available in multiple formats for offline use',
      icon: <Download className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Documentation Pages', value: '1000+', icon: <FileText className="w-6 h-6" /> },
    { label: 'Code Examples', value: '500+', icon: <Code className="w-6 h-6" /> },
    { label: 'Languages', value: '10+', icon: <Globe className="w-6 h-6" /> },
    { label: 'Monthly Updates', value: '50+', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Documentation - Zion Tech Group | Technical Documentation and Developer Resources" 
          description="Access comprehensive technical documentation, API references, developer guides, and user manuals for Zion Tech Group's technology solutions." 
          canonical="https://ziontechgroup.com/resources/documentation/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Documentation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access comprehensive technical documentation, API references, developer guides, and user manuals for all our technology solutions.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Documentation Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Documentation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our documentation is designed to help you quickly find the information you need and get up and running with our solutions efficiently.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {documentationFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by category to find exactly what you need.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {documentationCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Need Help with Documentation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you navigate our documentation and get the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default DocumentationPage;
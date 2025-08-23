import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  BookOpen,
  Terminal
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const APIPage: React.FC = () => {
  const apiCategories = [
    {
      title: 'REST API',
      description: 'Comprehensive REST API reference with authentication and endpoints',
      icon: <Code className="w-8 h-8" />,
      features: ['HTTP Methods', 'Status Codes', 'Authentication', 'Rate Limiting'],
      href: '/resources/api/rest',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GraphQL API',
      description: 'Flexible GraphQL API for complex data queries and mutations',
      icon: <Database className="w-8 h-8" />,
      features: ['Schema Definition', 'Queries & Mutations', 'Subscriptions', 'Introspection'],
      href: '/resources/api/graphql',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'WebSocket API',
      description: 'Real-time communication API for live data streaming',
      icon: <Zap className="w-8 h-8" />,
      features: ['Real-time Updates', 'Bi-directional Communication', 'Event Handling', 'Connection Management'],
      href: '/resources/api/websocket',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SDK Libraries',
      description: 'Client libraries and SDKs for multiple programming languages',
      icon: <Terminal className="w-8 h-8" />,
      features: ['JavaScript/Node.js', 'Python', 'Java', 'C#/.NET'],
      href: '/resources/api/sdk',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Webhook API',
      description: 'Webhook endpoints for event-driven integrations',
      icon: <Zap className="w-8 h-8" />,
      features: ['Event Types', 'Payload Formats', 'Security', 'Retry Logic'],
      href: '/resources/api/webhooks',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Authentication API',
      description: 'Secure authentication and authorization endpoints',
      icon: <Shield className="w-8 h-8" />,
      features: ['OAuth 2.0', 'JWT Tokens', 'API Keys', 'Role-based Access'],
      href: '/resources/api/authentication',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const apiFeatures = [
    {
      title: 'Comprehensive',
      description: 'Complete API reference with examples and best practices',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Interactive',
      description: 'Try API endpoints directly in the browser',
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: 'Secure',
      description: 'Built-in security features and authentication',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Scalable',
      description: 'Designed for high-performance and reliability',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'API Endpoints', value: '500+', icon: <Code className="w-6 h-6" /> },
    { label: 'SDK Languages', value: '10+', icon: <Terminal className="w-6 h-6" /> },
    { label: 'Response Time', value: '< 100ms', icon: <Clock className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.99%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="API Reference - Zion Tech Group | Comprehensive API Documentation and Developer Resources" 
          description="Access comprehensive API documentation, SDKs, and developer resources for Zion Tech Group's technology solutions including REST, GraphQL, and WebSocket APIs." 
          canonical="https://ziontechgroup.com/resources/api/" 
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
              API Reference
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access comprehensive API documentation, SDKs, and developer resources for all our technology solutions.
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

        {/* API Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our APIs?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our APIs are designed to be developer-friendly, secure, and scalable, making integration simple and reliable.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {apiFeatures.map((feature, index) => (
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

        {/* API Categories Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">API Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive API documentation organized by category to find the integration solution you need.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {apiCategories.map((category, index) => (
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
                      Explore API <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quick Start Guide</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our APIs in just a few simple steps.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get Your API Key</h3>
                  <p className="text-gray-400">Sign up for an account and generate your API key from the dashboard.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Choose Your SDK</h3>
                  <p className="text-gray-400">Select the SDK for your programming language or use our REST API directly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Make Your First Call</h3>
                  <p className="text-gray-400">Use the provided examples to make your first API call and start integrating.</p>
                </div>
              </div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Need Help with API Integration?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our developer support team is here to help you integrate our APIs successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Developer Support
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

export default APIPage;
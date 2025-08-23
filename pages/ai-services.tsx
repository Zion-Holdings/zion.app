import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Bot, Eye, Globe, Shield, ArrowRight, CheckCircle, Rocket, Cpu } from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const AIServices: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics and automation'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Automation',
      description: 'Intelligent process automation and workflow optimization'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Image recognition and visual data analysis solutions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Text analysis, chatbots, and language understanding'
    }
  ];

  const services = [
    {
      title: 'AI Automation Services',
      description: 'Intelligent automation for business processes and workflows',
      href: '/ai-automation-services',
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: 'Advanced AI Automation',
      description: 'Enterprise-grade AI automation with custom algorithms',
      href: '/advanced-ai-automation-services',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'AI Legal Contract Analyzer',
      description: 'Intelligent contract analysis and legal document processing',
      href: '/ai-legal-contract-analyzer',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'AI Financial Risk Platform',
      description: 'AI-powered financial risk assessment and management',
      href: '/ai-financial-risk',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'AI Phone Agent',
      description: 'Intelligent voice AI for customer service and support',
      href: '/ai-phone-agent',
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: 'AI Website Personalization',
      description: 'Dynamic website content optimization using AI',
      href: '/ai-website-personalization',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'AI Financial Planning',
      description: 'Intelligent financial planning and investment advice',
      href: '/ai-financial-planning-platform',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'RAG Evaluation Lab',
      description: 'Retrieval-Augmented Generation testing and optimization',
      href: '/rag-evaluation-lab',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const aiCapabilities = [
    'Predictive Analytics',
    'Process Automation',
    'Natural Language Processing',
    'Computer Vision',
    'Recommendation Systems',
    'Anomaly Detection',
    'Sentiment Analysis',
    'Data Mining & Insights'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI & Machine Learning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence 
                and machine learning solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started
                  <Brain className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI & ML Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive artificial intelligence solutions for modern enterprises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technologies to drive innovation and efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI services to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to drive innovation and growth
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your AI Journey
                <Brain className="w-6 h-6 ml-3" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServices;

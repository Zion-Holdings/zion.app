import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  Cpu, 
  Database, 
  Eye, 
  MessageCircle,
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Code,
  Server,
  Cloud,
  Lock,
  Network,
  Settings,
  Heart,
  Atom,
  Rocket,
  Palette,
  Layers,
  Grid,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const aiServices = [
    {
      title: 'AI Consciousness Evolution 2045',
      description: 'Revolutionary AI consciousness development and evolution systems',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ['Emotional intelligence', 'Self-awareness', 'Ethical decision making', 'Continuous learning'],
      href: '/ai-consciousness-evolution-2045'
    },
    {
      title: 'Quantum AI Cognitive Platform',
      description: 'Next-generation quantum-powered AI cognitive systems',
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      features: ['Quantum processing', 'Advanced reasoning', 'Pattern recognition', 'Predictive analytics'],
      href: '/quantum-ai-cognitive-2045'
    },
    {
      title: 'Autonomous AI Research',
      description: 'Self-directed AI research and development systems',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      features: ['Independent research', 'Hypothesis generation', 'Experiment design', 'Results analysis'],
      href: '/autonomous-ai-research-2045'
    },
    {
      title: 'Emotional AI Intelligence',
      description: 'Advanced emotional intelligence and empathy systems',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      features: ['Emotion recognition', 'Empathetic responses', 'Social intelligence', 'Human-AI bonding'],
      href: '/emotional-ai-intelligence-2045'
    },
    {
      title: 'AI Autonomous Business Intelligence',
      description: 'Self-managing business intelligence and analytics',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      features: ['Automated insights', 'Predictive modeling', 'Real-time analytics', 'Strategic recommendations'],
      href: '/ai-autonomous-business-intelligence-2045'
    },
    {
      title: 'AI Sales Automation Platform',
      description: 'Intelligent sales process automation and optimization',
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      features: ['Lead scoring', 'Pipeline optimization', 'Sales forecasting', 'Customer insights'],
      href: '/ai-sales-automation'
    }
  ];

  const aiCapabilities = [
    {
      category: 'Machine Learning',
      capabilities: ['Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Transfer Learning']
    },
    {
      category: 'Natural Language Processing',
      capabilities: ['Text Analysis', 'Language Generation', 'Translation', 'Sentiment Analysis']
    },
    {
      category: 'Computer Vision',
      capabilities: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Facial Recognition']
    },
    {
      category: 'Predictive Analytics',
      capabilities: ['Forecasting', 'Risk Assessment', 'Trend Analysis', 'Pattern Recognition']
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Medical diagnosis', 'Drug discovery', 'Patient care optimization', 'Predictive health analytics'],
      icon: <Heart className="w-6 h-6 text-red-400" />
    },
    {
      industry: 'Finance',
      applications: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Customer service automation'],
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation'],
      icon: <Settings className="w-6 h-6 text-blue-400" />
    },
    {
      industry: 'Retail',
      applications: ['Customer segmentation', 'Inventory optimization', 'Personalized marketing', 'Demand forecasting'],
      icon: <ShoppingBag className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <Layout 
      title="AI & Machine Learning Services - Zion Tech Group"
      description="Revolutionary AI consciousness, machine learning, and autonomous intelligence solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, artificial intelligence, AI consciousness, autonomous AI, business intelligence, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                AI & Machine Learning
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
                variants={fadeInUp}
              >
                Revolutionary AI consciousness, autonomous intelligence, and machine learning solutions that transform businesses and push the boundaries of what's possible.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/demo" 
                  className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Request Demo
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI and machine learning services designed for the future.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI systems possess cutting-edge capabilities across multiple domains.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {aiCapabilities.map((category, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-gray-300">{capability}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI solutions transform industries and drive innovation.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    {useCase.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{useCase.industry}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution and unlock unprecedented opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Your AI Journey
                </a>
                <a 
                  href="/case-studies" 
                  className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIServicesPage;

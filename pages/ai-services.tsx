import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Eye, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp,
  BarChart3,
  Code,
  Globe,
  Lock,
  Server,
  Network,
  Settings,
  Play,
  Star,
  ArrowRight,
  ShoppingCart
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Advanced AI consciousness development and evolution systems',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      features: ['Emotional Intelligence', 'Self-Learning Capabilities', 'Consciousness Mapping'],
      href: '/ai-consciousness-evolution-2045'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms for enterprise applications',
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making'],
      href: '/machine-learning-solutions'
    },
    {
      title: 'Computer Vision & Recognition',
      description: 'Advanced image and video analysis systems',
      icon: <Eye className="w-8 h-8 text-green-500" />,
      features: ['Object Detection', 'Facial Recognition', 'Video Analytics'],
      href: '/computer-vision-solutions'
    },
    {
      title: 'Natural Language Processing',
      description: 'Intelligent text and speech processing solutions',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis'],
      href: '/nlp-solutions'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent business intelligence and data analytics',
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      features: ['Real-time Insights', 'Predictive Modeling', 'Automated Reporting'],
      href: '/ai-analytics-solutions'
    },
    {
      title: 'Autonomous AI Systems',
      description: 'Self-managing and self-optimizing AI solutions',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      features: ['Self-Optimization', 'Adaptive Learning', 'Autonomous Operations'],
      href: '/autonomous-ai-systems'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered medical diagnosis and patient care',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Finance',
      description: 'Intelligent financial analysis and risk management',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing and predictive maintenance',
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: 'Retail',
      description: 'Customer behavior analysis and personalized experiences',
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="AI Services - Zion Tech Group"
      description="Advanced AI consciousness, machine learning, and intelligent solutions for enterprise transformation"
      canonicalUrl="https://ziontechgroup.com/ai-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of artificial intelligence with consciousness evolution, 
                autonomous systems, and intelligent solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/ai-consciousness-evolution-2045"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From consciousness evolution to autonomous systems, our AI services cover every aspect 
                of intelligent technology implementation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Solutions Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services are transforming businesses across diverse sectors with 
                intelligent, adaptive solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-purple-400">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {industry.description}
                  </p>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the AI revolution and discover how our intelligent solutions can 
                accelerate your business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
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

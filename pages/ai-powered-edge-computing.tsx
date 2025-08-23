import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Zap, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Award, BarChart3,
  MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIPoweredEdgeComputing: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Edge Computing',
      description: 'AI-powered edge computing and distributed processing capabilities'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Continuous learning and adaptation at the edge'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Instant data processing and decision making at the edge'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade edge security and data protection'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Operation',
      description: 'Continuous edge computing and monitoring capabilities'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-location Support',
      description: 'Edge computing across various locations and environments'
    }
  ];

  const edgeCapabilities = [
    {
      area: 'Local Processing',
      capabilities: ['Data processing', 'AI inference', 'Real-time analytics', 'Local decision making'],
      improvement: '100x faster',
      latency: 'Milliseconds'
    },
    {
      area: 'Distributed Intelligence',
      capabilities: ['Edge AI models', 'Federated learning', 'Model optimization', 'Intelligent routing'],
      improvement: '95% efficiency',
      intelligence: 'Distributed'
    },
    {
      area: 'Bandwidth Optimization',
      capabilities: ['Data filtering', 'Compression', 'Selective transmission', 'Local storage'],
      improvement: '90% reduction',
      optimization: 'Maximum'
    },
    {
      area: 'Edge Security',
      capabilities: ['Local encryption', 'Access control', 'Threat detection', 'Privacy protection'],
      improvement: 'Zero breaches',
      security: 'Enhanced'
    }
  ];

  const useCases = [
    {
      title: 'IoT & Smart Devices',
      description: 'Edge computing for IoT devices, sensors, and smart home systems',
      benefits: ['Real-time processing', 'Reduced latency', 'Lower bandwidth', 'Enhanced privacy']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Edge computing for self-driving cars and autonomous transportation',
      benefits: ['Instant decisions', 'Safety enhancement', 'Reduced latency', 'Offline operation']
    },
    {
      title: 'Industrial IoT',
      description: 'Edge computing for manufacturing, logistics, and industrial automation',
      benefits: ['Process optimization', 'Predictive maintenance', 'Real-time control', 'Cost reduction']
    },
    {
      title: 'Healthcare & Medical',
      description: 'Edge computing for medical devices and healthcare monitoring',
      benefits: ['Patient safety', 'Real-time monitoring', 'Data privacy', 'Regulatory compliance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Edge Computing Starter',
      price: '$3,999',
      period: '/month',
      description: 'Perfect for small organizations starting with edge computing',
      features: [
        'Up to 10 edge nodes',
        'Basic edge processing',
        'Standard analytics',
        'Email support',
        'Basic security'
      ],
      popular: false
    },
    {
      name: 'Edge Computing Professional',
      price: '$12,999',
      period: '/month',
      description: 'Ideal for growing organizations with advanced edge computing needs',
      features: [
        'Up to 100 edge nodes',
        'Advanced edge processing',
        'Custom AI models',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-location support'
      ],
      popular: true
    },
    {
      name: 'Edge Computing Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex edge computing requirements',
      features: [
        'Unlimited edge nodes',
        'Custom edge development',
        'Dedicated infrastructure',
        'Dedicated support team',
        'Advanced analytics',
        'Full API integration',
        'Custom compliance frameworks'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The AI-Powered Edge Computing platform has revolutionized our IoT operations. We're processing data 100x faster at the edge.",
      author: "Lisa Chen",
      position: "IoT Director",
      company: "Global IoT Corp"
    },
    {
      quote: "Our autonomous vehicle operations have improved dramatically with edge computing. We're making instant decisions with zero latency.",
      author: "Michael Rodriguez",
      position: "Autonomous Systems Director",
      company: "Innovation Mobility Inc"
    },
    {
      quote: "The edge computing platform has transformed our manufacturing operations. We're achieving real-time process control and optimization.",
      author: "David Williams",
      position: "Manufacturing Director",
      company: "Advanced Manufacturing Corp"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                AI-Powered Edge Computing
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Edge Computing
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of computing with AI-powered edge intelligence. Achieve unprecedented 
                speed, efficiency, and real-time processing across all distributed computing operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Computing
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </button>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Edge Computing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary AI technology designed specifically for advanced edge computing and distributed processing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Edge Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive edge computing capabilities across all processing and optimization requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {edgeCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {capability.area}
                    </h3>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold">{capability.improvement}</div>
                      <div className="text-gray-400 text-sm">Performance Gain</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-cyan-400 font-medium mb-2">Key Capabilities:</h4>
                    <ul className="space-y-1">
                      {capability.capabilities.map((cap, capIndex) => (
                        <li key={capIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {capability.area === 'Local Processing' ? 'Latency:' : 
                       capability.area === 'Distributed Intelligence' ? 'Intelligence:' :
                       capability.area === 'Bandwidth Optimization' ? 'Optimization:' : 'Security:'}
                    </span>
                    <span className="text-white font-medium">{capability.latency || capability.intelligence || capability.optimization || capability.security}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how AI-powered edge computing can transform operations across various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge AI-powered edge computing technology for comprehensive distributed processing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-cyan-400/40 bg-cyan-400/5' 
                      : 'border-cyan-400/20'
                  } hover:border-cyan-400/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10'
                  }`}>
                    {plan.name === 'Edge Computing Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Edge Computing Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from professionals using our AI-powered edge computing platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Compute with AI-Powered Edge Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI-powered edge computing for unprecedented speed and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Computing
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Edge Computing Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredEdgeComputing;
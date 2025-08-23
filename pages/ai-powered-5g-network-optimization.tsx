import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Wifi, Brain, Zap, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Award, BarChart3,
  MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIPowered5GNetworkOptimization: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: '5G Network Optimization',
      description: 'AI-powered 5G network optimization and management capabilities'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Continuous learning and adaptation to network patterns'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Optimization',
      description: 'Instant network optimization and performance tuning'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade network security and regulatory compliance'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Monitoring',
      description: 'Continuous network monitoring and optimization'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-carrier Support',
      description: 'Network optimization across various carriers and technologies'
    }
  ];

  const networkCapabilities = [
    {
      area: 'Network Performance',
      capabilities: ['Bandwidth optimization', 'Latency reduction', 'Throughput enhancement', 'QoS management'],
      improvement: '60% performance boost',
      performance: 'Optimized'
    },
    {
      area: 'Resource Management',
      capabilities: ['Dynamic allocation', 'Load balancing', 'Capacity planning', 'Traffic optimization'],
      improvement: '40% efficiency gain',
      efficiency: 'Enhanced'
    },
    {
      area: 'Coverage Optimization',
      capabilities: ['Signal strength', 'Interference reduction', 'Handover optimization', 'Edge computing'],
      improvement: '90% coverage',
      coverage: 'Comprehensive'
    },
    {
      area: 'Predictive Maintenance',
      capabilities: ['Failure prediction', 'Proactive alerts', 'Maintenance scheduling', 'Performance monitoring'],
      improvement: '99.9% uptime',
      reliability: 'Maximum'
    }
  ];

  const useCases = [
    {
      title: 'Mobile Networks',
      description: 'AI-powered 5G optimization for mobile network operators and carriers',
      benefits: ['Improved coverage', 'Better performance', 'Reduced costs', 'Enhanced user experience']
    },
    {
      title: 'Enterprise Networks',
      description: '5G network optimization for enterprise and industrial applications',
      benefits: ['Private networks', 'Low latency', 'High reliability', 'Secure connectivity']
    },
    {
      title: 'Smart Cities',
      description: '5G optimization for smart city infrastructure and IoT applications',
      benefits: ['Traffic management', 'Public safety', 'Environmental monitoring', 'Resource optimization']
    },
    {
      title: 'Industrial IoT',
      description: '5G network optimization for industrial automation and IoT deployments',
      benefits: ['Real-time control', 'Predictive maintenance', 'Remote monitoring', 'Automation efficiency']
    }
  ];

  const pricingPlans = [
    {
      name: '5G Network Optimization Starter',
      price: '$8,999',
      period: '/month',
      description: 'Perfect for small organizations starting with 5G network optimization',
      features: [
        'Basic optimization',
        'Single network support',
        'Standard monitoring',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: '5G Network Optimization Professional',
      price: '$34,999',
      period: '/month',
      description: 'Ideal for growing organizations with advanced 5G optimization needs',
      features: [
        'Advanced optimization',
        'Multi-network support',
        'Custom algorithms',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-carrier support'
      ],
      popular: true
    },
    {
      name: '5G Network Optimization Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex 5G optimization requirements',
      features: [
        'Custom optimization development',
        'Enterprise solutions',
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
      quote: "The AI-Powered 5G Network Optimization platform has revolutionized our network operations. We're achieving 60% performance improvement with automated optimization.",
      author: "Jennifer Martinez",
      position: "Network Director",
      company: "Global Telecom Corp"
    },
    {
      quote: "Our 5G network efficiency has improved dramatically with AI. We're achieving 40% efficiency gains with intelligent resource management.",
      author: "Robert Kim",
      position: "5G Director",
      company: "Innovation Telecom Inc"
    },
    {
      quote: "The 5G optimization platform has transformed our enterprise network operations. We're achieving 99.9% uptime with predictive maintenance.",
      author: "Amanda Thompson",
      position: "Enterprise Director",
      company: "Advanced Networks Corp"
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
                <Wifi className="w-4 h-4 mr-2" />
                AI-Powered 5G Network Optimization
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered 5G Network Optimization
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of 5G network optimization with AI-powered intelligence. Achieve unprecedented 
                performance, efficiency, and reliability across all 5G network operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Optimizing
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
                AI-Powered 5G Network Optimization Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary AI technology designed specifically for advanced 5G network optimization and management
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

        {/* Network Capabilities Section */}
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
                5G Network Optimization Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive 5G network optimization capabilities across all performance and reliability requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {networkCapabilities.map((capability, index) => (
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
                      {capability.area === 'Network Performance' ? 'Performance:' : 
                       capability.area === 'Resource Management' ? 'Efficiency:' :
                       capability.area === 'Coverage Optimization' ? 'Coverage:' : 'Reliability:'}
                    </span>
                    <span className="text-white font-medium">{capability.performance || capability.efficiency || capability.coverage || capability.reliability}</span>
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
                Discover how AI-powered 5G network optimization can transform operations across various industries
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
                5G Network Optimization Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge AI-powered 5G network optimization technology for comprehensive performance
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
                    {plan.name === '5G Network Optimization Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                What 5G Network Optimization Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from professionals using our AI-powered 5G network optimization platform
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
                Ready to Optimize with AI-Powered 5G Network Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI-powered 5G network optimization for unprecedented performance and reliability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Optimizing
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact 5G Network Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPowered5GNetworkOptimization;
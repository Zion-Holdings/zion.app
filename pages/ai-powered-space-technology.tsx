import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Zap, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Award, BarChart3,
  MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIPoweredSpaceTechnology: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Technology',
      description: 'AI-powered intelligent space technology and exploration systems'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for space mission optimization'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Control',
      description: 'Instant space system control and mission management'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Mission Security',
      description: 'Enterprise-grade space mission security and reliability'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Operations',
      description: 'Continuous space operations and mission monitoring'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-mission Support',
      description: 'Space technology support across various missions and applications'
    }
  ];

  const spaceCapabilities = [
    {
      area: 'Mission Planning',
      capabilities: ['Trajectory optimization', 'Resource planning', 'Risk assessment', 'Timeline optimization'],
      improvement: '99.9% accuracy',
      planning: 'Intelligent'
    },
    {
      area: 'Satellite Operations',
      capabilities: ['Orbital control', 'Payload management', 'Communication optimization', 'Power management'],
      improvement: 'Real-time control',
      operations: 'Advanced'
    },
    {
      area: 'Data Processing',
      capabilities: ['Remote sensing', 'Image analysis', 'Signal processing', 'Data fusion'],
      improvement: '1000x faster',
      processing: 'High-performance'
    },
    {
      area: 'Autonomous Systems',
      capabilities: ['Self-navigation', 'Collision avoidance', 'Mission adaptation', 'Failure recovery'],
      improvement: '99.99% reliability',
      autonomy: 'Robust'
    }
  ];

  const useCases = [
    {
      title: 'Satellite Communications',
      description: 'AI-powered space technology for satellite communication and networking',
      benefits: ['Global connectivity', 'High-speed data', 'Reliable communication', 'Coverage optimization']
    },
    {
      title: 'Earth Observation',
      description: 'Space technology for environmental monitoring and Earth observation',
      benefits: ['Climate monitoring', 'Disaster response', 'Resource management', 'Environmental protection']
    },
    {
      title: 'Space Exploration',
      description: 'AI-powered technology for deep space exploration and research',
      benefits: ['Mission optimization', 'Data analysis', 'Autonomous navigation', 'Scientific discovery']
    },
    {
      title: 'Space Infrastructure',
      description: 'Space technology for orbital infrastructure and space station operations',
      benefits: ['Infrastructure management', 'Life support systems', 'Maintenance automation', 'Safety enhancement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Space Technology Starter',
      price: '$12,999',
      period: '/month',
      description: 'Perfect for small organizations starting with space technology development',
      features: [
        'Basic space technology features',
        'Single mission support',
        'Standard operations',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Space Technology Professional',
      price: '$39,999',
      period: '/month',
      description: 'Ideal for growing organizations with advanced space technology needs',
      features: [
        'Advanced space technology features',
        'Multi-mission support',
        'Custom development',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Real-time control'
      ],
      popular: true
    },
    {
      name: 'Space Technology Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex space technology requirements',
      features: [
        'Custom space technology development',
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
      quote: "The AI-Powered Space Technology platform has revolutionized our operations. We're achieving 99.9% accuracy with intelligent mission planning.",
      author: "Sarah Johnson",
      position: "Space Technology Director",
      company: "Global Space Corp"
    },
    {
      quote: "Our space technology has improved dramatically with AI. We're achieving real-time control with intelligent satellite operations.",
      author: "Michael Chen",
      position: "Technology Director",
      company: "Innovation Space Inc"
    },
    {
      quote: "The space technology platform has transformed our missions. We're achieving 1000x faster data processing with intelligent systems.",
      author: "David Thompson",
      position: "Platform Director",
      company: "Advanced Space Corp"
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
                <Rocket className="w-4 h-4 mr-2" />
                AI-Powered Space Technology
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Space Technology
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of space exploration with AI-powered technology intelligence. Achieve unprecedented 
                mission success, efficiency, and discovery across all space operations and applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Exploring
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
                AI-Powered Space Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary AI technology designed specifically for advanced space technology development
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

        {/* Space Capabilities Section */}
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
                Space Technology Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive space technology capabilities across all mission and exploration requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spaceCapabilities.map((capability, index) => (
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
                      {capability.area === 'Mission Planning' ? 'Planning:' : 
                       capability.area === 'Satellite Operations' ? 'Operations:' :
                       capability.area === 'Data Processing' ? 'Processing:' : 'Autonomy:'}
                    </span>
                    <span className="text-white font-medium">{capability.planning || capability.operations || capability.processing || capability.autonomy}</span>
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
                Discover how AI-powered space technology can transform operations across various industries
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
                Space Technology Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge AI-powered space technology for comprehensive mission success
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
                    {plan.name === 'Space Technology Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                What Space Technology Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from professionals using our AI-powered space technology platform
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
                Ready to Explore with AI-Powered Space Technology Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI-powered space technology for unprecedented mission success and discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Exploring
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Space Technology Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSpaceTechnology;
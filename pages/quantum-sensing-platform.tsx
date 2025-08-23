import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Eye, Atom, Zap, Target, Shield, Clock, 
  CheckCircle, ArrowRight, Users, Award,
  TrendingUp, Globe, MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const QuantumSensingPlatform: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Quantum Imaging',
      description: 'Ultra-high resolution quantum imaging with unprecedented sensitivity'
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Quantum Magnetometry',
      description: 'Extremely sensitive magnetic field detection at the quantum level'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Quantum Gravimetry',
      description: 'Precise gravitational field measurements for geophysical applications'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quantum Security',
      description: 'Built-in quantum-resistant security for sensitive sensing data'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-time Sensing',
      description: 'Instant quantum measurements for time-sensitive applications'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Scalable Platform',
      description: 'Handles applications from laboratory to industrial scale'
    }
  ];

  const sensingCapabilities = [
    {
      area: 'Quantum Imaging',
      capabilities: ['Single-photon detection', 'Quantum-enhanced microscopy', 'Quantum radar', 'Quantum lidar'],
      improvement: '1000x better resolution',
      sensitivity: 'Single photon level'
    },
    {
      area: 'Quantum Magnetometry',
      capabilities: ['SQUID sensors', 'Atomic magnetometers', 'NV center sensing', 'Quantum Hall effect'],
      improvement: '100x more sensitive',
      sensitivity: 'Femtotesla range'
    },
    {
      area: 'Quantum Gravimetry',
      capabilities: ['Atom interferometry', 'Quantum gravimeters', 'Gravity gradiometry', 'Tidal measurements'],
      improvement: '10x more precise',
      sensitivity: 'Nanogal precision'
    },
    {
      area: 'Quantum Spectroscopy',
      capabilities: ['Quantum-enhanced spectroscopy', 'Single-molecule detection', 'Quantum frequency combs', 'Quantum metrology'],
      improvement: '100x better resolution',
      sensitivity: 'Molecular level'
    }
  ];

  const useCases = [
    {
      title: 'Medical Imaging',
      description: 'Quantum-enhanced medical imaging for early disease detection and precise diagnostics',
      benefits: ['Sub-cellular resolution', 'Early disease detection', 'Reduced radiation exposure']
    },
    {
      title: 'Environmental Monitoring',
      description: 'Quantum sensing for pollution detection, climate monitoring, and resource exploration',
      benefits: ['Real-time monitoring', 'Ultra-sensitive detection', 'Wide area coverage']
    },
    {
      title: 'Defense & Security',
      description: 'Quantum sensing for threat detection, surveillance, and secure communications',
      benefits: ['Stealth detection', 'Quantum-secure communications', 'Advanced threat identification']
    },
    {
      title: 'Scientific Research',
      description: 'Quantum sensing for fundamental physics research and discovery',
      benefits: ['Unprecedented precision', 'New physics discovery', 'Advanced instrumentation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Sensing Starter',
      price: '$1,799',
      period: '/month',
      description: 'Perfect for research institutions and small sensing projects',
      features: [
        'Up to 100 sensing operations/month',
        'Basic quantum sensors',
        'Standard sensing modes',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Quantum Sensing Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing research teams and industrial applications',
      features: [
        'Up to 500 sensing operations/month',
        'Advanced quantum sensors',
        'Custom sensing configurations',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-user access'
      ],
      popular: true
    },
    {
      name: 'Quantum Sensing Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations and government agencies',
      features: [
        'Unlimited sensing operations',
        'Custom quantum sensor development',
        'Dedicated quantum hardware',
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
      quote: "The Quantum Sensing Platform has revolutionized our medical imaging capabilities. We're detecting conditions at unprecedented levels.",
      author: "Dr. Emily Chen",
      position: "Chief Radiologist",
      company: "Advanced Medical Center"
    },
    {
      quote: "Our environmental monitoring has improved dramatically with quantum sensing. We're detecting pollution at levels previously impossible.",
      author: "Dr. Michael Rodriguez",
      position: "Environmental Director",
      company: "Global Environmental Institute"
    },
    {
      quote: "Quantum sensing has transformed our research capabilities. We're making discoveries that were previously beyond our reach.",
      author: "Dr. James Wilson",
      position: "Research Director",
      company: "Quantum Physics Laboratory"
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
                <Eye className="w-4 h-4 mr-2" />
                Quantum-Powered Sensing
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum Sensing Platform
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of sensing with quantum technology. Achieve unprecedented sensitivity, 
                resolution, and precision across all sensing applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Sensing
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
                Quantum Sensing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary quantum technology designed specifically for ultra-sensitive sensing applications
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

        {/* Sensing Capabilities Section */}
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
                Sensing Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive quantum sensing across all measurement types and sensitivity levels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sensingCapabilities.map((capability, index) => (
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
                    <span className="text-gray-400">Sensitivity:</span>
                    <span className="text-white font-medium">{capability.sensitivity}</span>
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
                Discover how quantum sensing can transform operations across various industries
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
                Quantum Sensing Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge quantum sensing technology for research and industrial applications
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
                    {plan.name === 'Quantum Sensing Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                What Sensing Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from researchers and professionals using our quantum sensing platform
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
                Ready to Sense with Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using quantum sensing for unprecedented detection capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Sensing
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Sensing Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumSensingPlatform;
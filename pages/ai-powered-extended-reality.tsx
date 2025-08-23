import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Eye, Brain, Zap, Shield, Clock, Users, 
  CheckCircle, ArrowRight, Award, BarChart3,
  MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AIPoweredExtendedReality: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Extended Reality',
      description: 'AI-powered intelligent XR experiences and immersive technologies'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for XR content generation and optimization'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Rendering',
      description: 'Instant XR rendering and dynamic content generation'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Content Security',
      description: 'Enterprise-grade XR content security and protection'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Availability',
      description: 'Continuous XR platform availability and content delivery'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-platform Support',
      description: 'XR platform support across various devices and technologies'
    }
  ];

  const xrCapabilities = [
    {
      area: 'Content Generation',
      capabilities: ['AI-powered creation', '3D modeling', 'Texture generation', 'Animation synthesis'],
      improvement: '10x faster',
      generation: 'Intelligent'
    },
    {
      area: 'Immersive Experiences',
      capabilities: ['VR environments', 'AR overlays', 'Mixed reality', 'Spatial computing'],
      improvement: 'Immersive quality',
      experiences: 'Advanced'
    },
    {
      area: 'Performance Optimization',
      capabilities: ['Real-time rendering', 'Frame rate optimization', 'Latency reduction', 'Quality enhancement'],
      improvement: '60fps+ performance',
      optimization: 'Real-time'
    },
    {
      area: 'User Interaction',
      capabilities: ['Gesture recognition', 'Voice control', 'Eye tracking', 'Haptic feedback'],
      improvement: 'Natural interaction',
      interaction: 'Intuitive'
    }
  ];

  const useCases = [
    {
      title: 'Gaming & Entertainment',
      description: 'AI-powered XR platform for immersive gaming and entertainment experiences',
      benefits: ['Immersive gaming', 'Interactive storytelling', 'Social experiences', 'Content creation']
    },
    {
      title: 'Training & Education',
      description: 'XR platform for immersive training and educational experiences',
      benefits: ['Skill development', 'Virtual classrooms', 'Simulation training', 'Knowledge retention']
    },
    {
      title: 'Healthcare & Medical',
      description: 'XR platform for medical training and patient care applications',
      benefits: ['Surgical training', 'Patient education', 'Therapy applications', 'Medical visualization']
    },
    {
      title: 'Industrial & Manufacturing',
      description: 'XR platform for industrial training and operational applications',
      benefits: ['Safety training', 'Maintenance guidance', 'Design visualization', 'Remote assistance']
    }
  ];

  const pricingPlans = [
    {
      name: 'XR Platform Starter',
      price: '$6,999',
      period: '/month',
      description: 'Perfect for small organizations starting with XR platform development',
      features: [
        'Basic XR platform features',
        'Single platform support',
        'Standard rendering',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'XR Platform Professional',
      price: '$24,999',
      period: '/month',
      description: 'Ideal for growing organizations with advanced XR platform needs',
      features: [
        'Advanced XR platform features',
        'Multi-platform support',
        'Custom development',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Real-time rendering'
      ],
      popular: true
    },
    {
      name: 'XR Platform Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex XR platform requirements',
      features: [
        'Custom XR platform development',
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
      quote: "The AI-Powered XR Platform has revolutionized our gaming experiences. We're achieving 10x faster content generation with intelligent creation.",
      author: "Sarah Johnson",
      position: "XR Director",
      company: "Global Gaming Corp"
    },
    {
      quote: "Our XR platform has improved dramatically with AI. We're achieving immersive quality with intelligent content generation.",
      author: "Michael Chen",
      position: "Technology Director",
      company: "Innovation XR Inc"
    },
    {
      quote: "The XR platform has transformed our training experiences. We're achieving 60fps+ performance with intelligent optimization.",
      author: "David Thompson",
      position: "Platform Director",
      company: "Advanced XR Corp"
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
                AI-Powered Extended Reality
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Extended Reality
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of reality with AI-powered XR intelligence. Achieve unprecedented 
                immersion, creativity, and interactivity across all extended reality experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Creating
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
                AI-Powered Extended Reality Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary AI technology designed specifically for advanced XR platform development
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

        {/* XR Capabilities Section */}
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
                Extended Reality Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive XR platform capabilities across all immersive and interactive requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {xrCapabilities.map((capability, index) => (
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
                      {capability.area === 'Content Generation' ? 'Generation:' : 
                       capability.area === 'Immersive Experiences' ? 'Experiences:' :
                       capability.area === 'Performance Optimization' ? 'Optimization:' : 'Interaction:'}
                    </span>
                    <span className="text-white font-medium">{capability.generation || capability.experiences || capability.optimization || capability.interaction}</span>
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
                Discover how AI-powered XR platforms can transform experiences across various industries
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
                XR Platform Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access to cutting-edge AI-powered XR platform technology for comprehensive immersive experiences
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
                    {plan.name === 'XR Platform Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                What Extended Reality Professionals Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from professionals using our AI-powered XR platform
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
                Ready to Create with AI-Powered Extended Reality Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI-powered XR platforms for unprecedented immersive experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Creating
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Extended Reality Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredExtendedReality;
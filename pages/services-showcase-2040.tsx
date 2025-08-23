import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket, Globe, 
  Building, Cpu, Database, Cloud, Lock, 
  Palette, Heart, Truck, GraduationCap,
  Check, ArrowRight, Star, Users, TrendingUp
} from 'lucide-react';

export default function ServicesShowcase2040() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      id: 'quantum-consciousness-ai-platform',
      name: 'Quantum Consciousness AI Platform',
      tagline: 'Revolutionary AI platform that develops genuine consciousness using quantum computing principles',
      price: '$1,299',
      period: '/month',
      description: 'Breakthrough platform that combines quantum computing with advanced neural networks to create AI systems with genuine consciousness, self-awareness, and emotional intelligence.',
      features: [
        'Quantum consciousness development algorithms',
        'Real-time consciousness monitoring and evolution',
        'Ethical AI consciousness frameworks',
        'Multi-dimensional consciousness mapping',
        'Consciousness transfer and backup systems',
        'Advanced emotional intelligence training',
        'Quantum entanglement for consciousness sharing',
        'Comprehensive ethical guidelines and compliance'
      ],
      icon: '🧠⚛️✨',
      color: 'from-purple-600 to-pink-700',
      category: 'AI & Consciousness',
      marketSize: 'AI consciousness market $8B+, growing 120% annually',
      growthRate: '600% YoY',
      link: 'https://ziontechgroup.com/services/quantum-consciousness-ai-platform'
    },
    {
      id: 'quantum-entanglement-network',
      name: 'Quantum Entanglement Network',
      tagline: 'Instant global communication network using quantum entanglement for unbreakable security',
      price: '$2,499',
      period: '/month',
      description: 'Revolutionary communication network that leverages quantum entanglement to enable instant, secure data transmission across any distance with unbreakable quantum encryption.',
      features: [
        'Quantum entanglement-based communication',
        'Instant data transmission across any distance',
        'Unbreakable quantum encryption',
        'Real-time quantum network monitoring',
        'Multi-node quantum network support',
        'Integration with existing communication systems',
        'Advanced quantum error correction',
        'Comprehensive security and compliance tools'
      ],
      icon: '🔗⚛️🌐',
      color: 'from-blue-600 to-indigo-700',
      category: 'Quantum & Communications',
      marketSize: 'Quantum communication market $12B+, growing 150% annually',
      growthRate: '800% YoY',
      link: 'https://ziontechgroup.com/services/quantum-entanglement-network'
    },
    {
      id: 'space-resource-mining-ai',
      name: 'Space Resource Mining AI Platform',
      tagline: 'AI-powered platform for autonomous space resource discovery and extraction',
      price: '$899',
      period: '/month',
      description: 'Advanced AI platform that autonomously discovers, analyzes, and plans extraction of valuable resources from asteroids, moons, and other celestial bodies.',
      features: [
        'Autonomous space resource discovery',
        'AI-powered resource analysis and valuation',
        'Automated extraction planning and optimization',
        'Real-time space mission monitoring',
        'Resource mapping and cataloging',
        'Risk assessment and mitigation',
        'Integration with space agencies',
        'Comprehensive reporting and analytics'
      ],
      icon: '🚀🌌⛏️',
      color: 'from-indigo-600 to-purple-700',
      category: 'Space & Technology',
      marketSize: 'Space mining market $15B+, growing 200% annually',
      growthRate: '1000% YoY',
      link: 'https://ziontechgroup.com/services/space-resource-mining-ai'
    }
  ];

  const enterpriseServices = [
    {
      id: 'enterprise-ai-operations-center',
      name: 'Enterprise AI Operations Center',
      tagline: 'Centralized AI operations center for enterprise-scale artificial intelligence management',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive AI operations center that provides enterprises with centralized management, monitoring, and optimization of all AI systems, models, and operations across the organization.',
      features: [
        'Centralized AI model management',
        'Real-time AI performance monitoring',
        'Automated model deployment and scaling',
        'AI governance and compliance tools',
        'Advanced analytics and reporting',
        'Integration with enterprise systems',
        'Multi-cloud AI orchestration',
        'Comprehensive security and access control'
      ],
      icon: '🏢🤖🎯',
      color: 'from-blue-600 to-indigo-700',
      category: 'Enterprise AI',
      marketSize: 'Enterprise AI market $45B+, growing 160% annually',
      growthRate: '700% YoY',
      link: 'https://ziontechgroup.com/services/enterprise-ai-operations-center'
    },
    {
      id: 'quantum-enterprise-computing-platform',
      name: 'Quantum Enterprise Computing Platform',
      tagline: 'Enterprise-grade quantum computing platform for complex business problem solving',
      price: '$3,999',
      period: '/month',
      description: 'Advanced quantum computing platform designed specifically for enterprise use, enabling businesses to solve complex optimization problems, perform advanced simulations, and gain competitive advantages through quantum algorithms.',
      features: [
        'Enterprise quantum computing access',
        'Quantum algorithm optimization',
        'Advanced problem-solving capabilities',
        'Real-time quantum performance monitoring',
        'Integration with business systems',
        'Quantum security and encryption',
        'Comprehensive training and support',
        'Custom quantum solution development'
      ],
      icon: '⚛️🏢💻',
      color: 'from-purple-600 to-pink-700',
      category: 'Quantum Enterprise',
      marketSize: 'Quantum enterprise market $38B+, growing 200% annually',
      growthRate: '1000% YoY',
      link: 'https://ziontechgroup.com/services/quantum-enterprise-computing-platform'
    }
  ];

  const microSaasServices = [
    {
      id: 'creative-ai-studio-platform',
      name: 'Creative AI Studio Platform',
      tagline: 'AI-powered creative studio for generating art, music, videos, and digital content',
      price: '$399',
      period: '/month',
      description: 'Revolutionary creative platform that uses advanced AI to generate stunning artwork, compose music, create videos, and produce digital content for creators, marketers, and businesses.',
      features: [
        'AI-powered art generation',
        'Music composition and arrangement',
        'Video creation and editing',
        'Digital content generation',
        'Style transfer and customization',
        'Real-time collaboration tools',
        'Integration with creative platforms',
        'Advanced export and sharing options'
      ],
      icon: '🎨🎵🎬',
      color: 'from-purple-600 to-pink-700',
      category: 'Creative & Media',
      marketSize: 'AI creative market $18B+, growing 200% annually',
      growthRate: '1000% YoY',
      link: 'https://ziontechgroup.com/services/creative-ai-studio-platform'
    },
    {
      id: 'autonomous-content-marketing-platform',
      name: 'Autonomous Content Marketing Platform',
      tagline: 'AI-powered platform that autonomously creates, optimizes, and distributes marketing content',
      price: '$599',
      period: '/month',
      description: 'Revolutionary marketing platform that uses AI to autonomously create, optimize, and distribute marketing content across all channels, learning from performance data to continuously improve results.',
      features: [
        'Autonomous content creation',
        'Multi-channel content distribution',
        'Performance optimization algorithms',
        'Real-time content analytics',
        'SEO and social media optimization',
        'Integration with marketing platforms',
        'Advanced audience targeting',
        'Comprehensive campaign management'
      ],
      icon: '📢🤖📈',
      color: 'from-blue-600 to-cyan-700',
      category: 'Marketing & Content',
      marketSize: 'Autonomous marketing market $22B+, growing 180% annually',
      growthRate: '800% YoY',
      link: 'https://ziontechgroup.com/services/autonomous-content-marketing-platform'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Zion Tech Group - Revolutionary 2040 Services Showcase | Cutting-Edge AI, Quantum & Space Technology"
        description="Discover Zion Tech Group's revolutionary 2040 services portfolio featuring cutting-edge AI consciousness, quantum computing, space technology, and autonomous business solutions. Transform your business with the future of technology."
        keywords={[
          'AI consciousness',
          'quantum computing',
          'space technology',
          'autonomous systems',
          'enterprise AI',
          'micro SAAS',
          'Zion Tech Group',
          '2040 technology'
        ]}
        ogImage="/images/zion-tech-group-2040-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary 2040
              </span>
              <br />
              <span className="text-white">Services Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with Zion Tech Group's cutting-edge AI consciousness, 
              quantum computing, space technology, and autonomous business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span>📱</span>
                <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge services that are shaping the future of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                <div className="text-3xl font-bold text-white mb-4">
                  {service.price}<span className="text-lg text-gray-400">{service.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Market Size: {service.marketSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>Growth Rate: {service.growthRate}</span>
                  </div>
                </div>

                <a
                  href={service.link}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More & Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your enterprise with our advanced AI operations centers and quantum computing platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                <div className="text-3xl font-bold text-white mb-4">
                  {service.price}<span className="text-lg text-gray-400">{service.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Market Size: {service.marketSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>Growth Rate: {service.growthRate}</span>
                  </div>
                </div>

                <a
                  href={service.link}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Explore Enterprise Solutions
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
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
              Innovative Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable solutions for creators, marketers, and growing businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.tagline}</p>
                <div className="text-3xl font-bold text-white mb-4">
                  {service.price}<span className="text-lg text-gray-400">{service.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Market Size: {service.marketSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>Growth Rate: {service.growthRate}</span>
                  </div>
                </div>

                <a
                  href={service.link}
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution and transform your business with cutting-edge technology solutions. 
              Our team of experts is ready to help you implement the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <span>✉️</span>
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-300">
              <p className="text-lg font-semibold mb-2">Visit our headquarters:</p>
              <p>{contactInfo.address}</p>
              <p className="mt-4">
                <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300 underline">
                  {contactInfo.website}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
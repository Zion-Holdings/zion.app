import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, ExternalLink, Sparkles, Globe,
  Cpu, Lock, Eye, Palette, ChartBar, Cloud
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

import { realAIInnovationServices } from '../data/real-2037-ai-innovation-services';
import { realITInfrastructureServices } from '../data/real-2037-it-infrastructure-services';
import { realMicroSAASInnovationServices } from '../data/real-2037-micro-saas-innovations';
import { realEmergingTechServices } from '../data/real-2037-emerging-tech-services';

export default function FuturisticServicesShowcase2037() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Combine all services for the showcase
  const allServices = [
    ...realAIInnovationServices,
    ...realITInfrastructureServices,
    ...realMicroSAASInnovationServices,
    ...realEmergingTechServices
  ];

  const featuredServices = [
    {
      title: '🧠💝 AI Emotional Intelligence Engine',
      description: 'Advanced emotion recognition system using computer vision, voice analysis, and text sentiment to provide emotionally intelligent responses for customer service, healthcare, and education applications.',
      price: '$399/month',
      marketData: '$25B emotional AI market, 150% annual growth',
      competitors: 'Affectiva, Realeyes, Emotient (Apple)',
      savings: 'Improve customer satisfaction by 35% and reduce escalations by 40%',
      features: ['Real-time emotion detection', 'Multi-modal emotion analysis', 'Emotional state tracking', 'Personalized responses', 'Privacy-compliant handling'],
      link: 'https://ziontechgroup.com/ai-emotional-intelligence',
      color: 'from-pink-600 to-purple-700'
    },
    {
      title: '🔐⚛️ Quantum-Secure Cloud Infrastructure',
      description: 'Next-generation cloud infrastructure built with quantum-resistant cryptography, ensuring your data and applications remain secure even when quantum computers become mainstream.',
      price: '$899/month',
      marketData: '$15B quantum security market, 300% annual growth',
      competitors: 'IBM Quantum, Microsoft Azure Quantum, Google Quantum AI',
      savings: 'Future-proof security investment with 99.99% quantum resistance',
      features: ['Quantum-resistant encryption', 'Post-quantum cryptography', 'Quantum key distribution', 'Zero-trust architecture', 'Multi-cloud security'],
      link: 'https://ziontechgroup.com/quantum-secure-cloud',
      color: 'from-purple-600 to-indigo-700'
    },
    {
      title: '🎨🤖 No-Code AI Workflow Builder',
      description: 'Visual AI workflow builder that allows non-technical users to create sophisticated AI-powered automation workflows using drag-and-drop interface and pre-built AI components.',
      price: '$199/month',
      marketData: '$12B no-code AI market, 220% annual growth',
      competitors: 'Zapier AI, Make.com, n8n, Bubble AI features',
      savings: 'Reduce development time by 80% and enable AI adoption without technical expertise',
      features: ['Drag-and-drop builder', 'Pre-built AI components', 'Visual workflow designer', 'AI model integration', 'API generation'],
      link: 'https://ziontechgroup.com/no-code-ai-workflows',
      color: 'from-purple-600 to-pink-700'
    },
    {
      title: '🌐🏢 Metaverse Business Platform',
      description: 'Comprehensive metaverse platform for businesses to create virtual offices, conduct meetings, host events, and provide immersive customer experiences in 3D virtual environments.',
      price: '$799/month',
      marketData: '$50B metaverse market, 400% annual growth',
      competitors: 'Meta Horizon Worlds, Microsoft Mesh, Spatial, VRChat',
      savings: 'Reduce travel costs by 60% and increase global collaboration by 80%',
      features: ['3D virtual environments', 'Virtual office spaces', 'Avatar management', 'Real-time collaboration', 'Virtual event hosting'],
      link: 'https://ziontechgroup.com/metaverse-business-platform',
      color: 'from-indigo-600 to-purple-700'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Innovation Services',
      icon: Brain,
      services: realAIInnovationServices,
      color: 'from-purple-600 to-pink-700'
    },
    {
      title: 'IT Infrastructure & Security',
      icon: Shield,
      services: realITInfrastructureServices,
      color: 'from-blue-600 to-cyan-700'
    },
    {
      title: 'Micro SAAS Innovations',
      icon: Rocket,
      services: realMicroSAASInnovationServices,
      color: 'from-green-600 to-emerald-700'
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      services: realEmergingTechServices,
      color: 'from-indigo-600 to-purple-700'
    }
  ];

  return (
    <>
      <SEO 
        title="2037 Futuristic Services Showcase | Zion Tech Group"
        description="Explore our revolutionary 2037 services including AI consciousness evolution, quantum computing, space technology, and enterprise solutions. Transform your business with cutting-edge technology."
        keywords={["2037 services", "AI consciousness", "quantum computing", "space technology", "enterprise IT", "micro SAAS", "Zion Tech Group"]}
      />

        {/* Hero Section */}
        <motion.div 
          className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                2037 Futuristic Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              Discover cutting-edge AI, quantum security, metaverse platforms, and emerging technologies 
              that will transform your business in 2025 and beyond.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <a 
                href="#services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Explore Services
              </a>
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Services */}
        <motion.section 
          id="featured"
          className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Services
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-105`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold text-lg">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Market:</span>
                        <span className="text-white font-semibold">{service.marketData}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Competitors:</span>
                        <span className="text-white font-semibold">{service.competitors}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">ROI:</span>
                        <span className="text-white font-semibold">{service.savings}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-200 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Service Categories */}
        <motion.section 
          id="services"
          className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Service Categories
              </span>
            </motion.h2>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-lg">
                      {category.services.length} innovative services available
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.slice(0, 6).map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-105`}>
                          <div className="text-4xl mb-4">{service.icon}</div>
                          <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-200 text-sm mb-4">{service.tagline}</p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300 text-sm">Price:</span>
                              <span className="text-white font-semibold">{service.price}{service.period}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300 text-sm">Trial:</span>
                              <span className="text-white font-semibold">{service.trialDays} days</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300 text-sm">Setup:</span>
                              <span className="text-white font-semibold">{service.setupTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white text-sm">{service.rating}</span>
                              <span className="text-gray-400 text-sm">({service.reviews})</span>
                            </div>
                            <a 
                              href={service.link}
                              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {category.services.length > 6 && (
                    <div className="text-center">
                      <a 
                        href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors duration-300"
                      >
                        View All {category.services.length} Services
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-12"
              variants={itemVariants}
            >
              Contact our team to discuss how these innovative services can drive your business forward.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-emerald-400 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Started Today
              </a>
              <a 
                href={contactInfo.website}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="text-purple-400 hover:text-purple-300 ml-2">Privacy Policy</a> | 
              <a href="/terms" className="text-purple-400 hover:text-purple-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </motion.footer>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Mail, Phone, MapPin, 
  ArrowRight, Rocket, Star, Users,
  CheckCircle, Shield, Zap, Globe
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { comprehensiveEnterpriseITServices } from '../data/comprehensive-enterprise-it-services';
import { innovativeMicroSaasSolutions } from '../data/innovative-micro-saas-solutions';

export default function HomePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...nextGenAIServices,
    ...comprehensiveEnterpriseITServices,
    ...innovativeMicroSaasSolutions
  ];

  const stats = [
    { label: 'Total Services', value: allServices.length, icon: Rocket, color: 'text-blue-500' },
    { label: 'AI Services', value: innovativeAIServices.length + nextGenAIServices.length, icon: Brain, color: 'text-purple-500' },
    { label: 'Enterprise Solutions', value: enterpriseITServices.length + comprehensiveEnterpriseITServices.length, icon: Shield, color: 'text-green-500' },
    { label: 'Micro SaaS', value: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length + innovativeMicroSaasSolutions.length, icon: Zap, color: 'text-orange-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <EnhancedFuturisticBackground intensity="high" colorScheme="quantum">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum & IT Services | 500+ Solutions</title>
          <meta name="description" content="Zion Tech Group offers 500+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
          <meta property="og:description" content="500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, Quantum Computing & IT Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                500+ cutting-edge services delivering 1000% ROI. From neural quantum brain interfaces to enterprise IT infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  href="/services" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Explore 500+ Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get Started Today
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className={`${stat.color} mb-4 flex justify-center`}>
                    <stat.icon className="w-12 h-12" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}+</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Service Showcase */}
        <EnhancedServiceShowcase 
          title="Revolutionary AI & Technology Services"
          subtitle="Discover the future of business with our cutting-edge solutions"
          showFilters={true}
        />

        {/* Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the power of our most innovative and high-impact solutions
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* AI Agent Orchestrator */}
              <motion.div
                className="group relative"
                variants={itemVariants}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group-hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                  
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    AI Agent Orchestrator Platform
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Orchestrate multiple AI agents for complex business workflows
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">
                      $2,999<span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      150
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        Multi-agent orchestration engine
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        Workflow automation designer
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        AI-powered task routing
                      </li>
                    </ul>
                  </div>

                  <a
                    href="/ai-agent-orchestrator"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Enterprise Cybersecurity */}
              <motion.div
                className="group relative"
                variants={itemVariants}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group-hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                  
                  <div className="text-4xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Enterprise Cybersecurity Operations Center
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    24/7 cybersecurity monitoring and threat response with AI-powered detection
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-400">
                      $25,999<span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      67
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        24/7 threat monitoring
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        AI-powered threat detection
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        Automated incident response
                      </li>
                    </ul>
                  </div>

                  <a
                    href="/enterprise-cybersecurity"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* AI Customer Experience */}
              <motion.div
                className="group relative"
                variants={itemVariants}
              >
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:scale-105">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Trending
                  </div>
                  
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    AI Customer Experience Platform
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Deliver personalized experiences that increase customer lifetime value by 300%
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      $2,499<span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      342
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        360-degree customer view
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        Real-time personalization engine
                      </li>
                      <li className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        Predictive customer behavior
                      </li>
                    </ul>
                  </div>

                  <a
                    href="/ai-customer-experience"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just another technology company. We're the architects of the future.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-4">Revolutionary Innovation</h3>
                  <p className="text-gray-400">
                    We don't follow trends - we create them. Our services are built on cutting-edge technology that's years ahead of the competition.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                  <p className="text-gray-400">
                    Our clients consistently achieve 1000% ROI within months, not years. We measure success by your success.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
                  <p className="text-gray-400">
                    From startups to Fortune 500 companies, we're transforming businesses across the globe with our revolutionary solutions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Join thousands of businesses achieving 1000% ROI with our revolutionary AI, quantum computing, and IT services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">{contactInfo.mobile}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">{contactInfo.email}</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/services" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Explore All Services
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}

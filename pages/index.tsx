import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Star, Users, Globe, Target
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$35B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Quantum AI Brain-Computer Interface',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $2,999/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$1.5B brain-computer interface market, 250% annual growth',
      competitors: 'Neuralink ($1000+ hardware + subscription), CTRL-labs ($500/month)',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🛰️ Space Technology Platform',
      description: 'Comprehensive space tech solutions for commercial and research applications with AI-powered optimization.',
      price: 'Starting at $1,499/month',
      features: ['Satellite constellation management', 'Orbital mechanics calculations', 'Space weather monitoring', 'AI-powered mission planning'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$4.5B commercial space market, 180% annual growth',
      competitors: 'Maxar ($2000+/month), Planet Labs ($1500+/month), Spire ($1200+/month)',
      savings: 'Save 25-40% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered biotechnology research and drug discovery platform with accelerated development cycles.',
      price: 'Starting at $899/month',
      features: ['AI-powered drug discovery', 'Genetic sequence analysis', 'Clinical trial optimization', 'Personalized medicine algorithms'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-green-600 to-emerald-700',
      marketData: '$3.2B AI in drug discovery market, 220% annual growth',
      competitors: 'Insitro ($1500+/month), Atomwise ($1200+/month), BenevolentAI ($1000+/month)',
      savings: 'Save 40-60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏭 Autonomous Manufacturing Platform',
      description: 'AI-driven autonomous manufacturing with predictive maintenance and quality control automation.',
      price: 'Starting at $1,299/month',
      features: ['AI production optimization', 'Predictive maintenance', 'Quality control automation', 'Supply chain optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-600 to-red-700',
      marketData: '$6.8B industrial IoT market, 160% annual growth',
      competitors: 'Siemens Mindsphere ($2000+/month), GE Predix ($1800+/month), PTC ThingWorx ($1500+/month)',
      savings: 'Save 35-50% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for display
  const allServices = [
    ...innovativeMicroSaasServices.slice(0, 6), // Show top 6 innovative services
    ...enhancedRealMicroSaasServices.slice(0, 6), // Show top 6 enhanced services
    ...extraServices.slice(0, 6), // Show top 6 extra services
    ...additionalEnhancedServices.slice(0, 6) // Show top 6 additional services
  ];

  return (
    <QuantumHolographicMatrixBackground variant="quantum" intensity={1.2}>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 300+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms. Get started with 30-day free trials and achieve 1000%+ ROI." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biotech AI, autonomous manufacturing, cybersecurity, blockchain" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="300+ revolutionary micro SaaS services with quantum AI and cutting-edge technology" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Micro SaaS Services</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  & AI Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of business with our cutting-edge micro SaaS platform. 
                From quantum AI to space technology, we deliver innovative solutions that drive 
                unprecedented growth and ROI.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-black/40 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 text-center">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights Section */}
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
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Featured
                </span>
                {' '}Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most revolutionary micro SaaS services that are reshaping industries 
                and delivering unprecedented value to businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-black">
                      FEATURED
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400 mb-4">30-day free trial included</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
                    <div className="text-sm font-semibold text-blue-400 mb-2">Market Position</div>
                    <p className="text-sm text-gray-300">{service.marketData}</p>
                    <div className="text-sm text-green-400 mt-2">Competitors: {service.competitors}</div>
                    <div className="text-sm text-yellow-400 mt-1">{service.savings}</div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      href={service.link}
                      className={`flex-1 bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>📱 {service.contactInfo.mobile}</div>
                      <div>✉️ {service.contactInfo.email}</div>
                      <div>📍 {service.contactInfo.address}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
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
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Complete
                </span>
                {' '}Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of 300+ micro SaaS services, 
                each designed to solve specific business challenges and drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button
                href="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
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
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already leveraging our revolutionary micro SaaS services. 
                Start your 30-day free trial today and experience unprecedented growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-cyan-400 font-semibold">{contactInfo.mobile}</p>
                </div>
                <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-purple-400 font-semibold">{contactInfo.email}</p>
                </div>
                <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-green-400 font-semibold text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </QuantumHolographicMatrixBackground>
  );
}

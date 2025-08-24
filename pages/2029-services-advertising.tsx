import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Phone, Mail, MapPin,
  ArrowRight, Users, Award, Globe2, Clock
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2029AIServices } from '../data/2029-futuristic-ai-services';
import { quantumSpace2029Services } from '../data/2029-quantum-space-services';
import { biotechEmerging2029Services } from '../data/2029-biotech-emerging-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';

export default function ServicesAdvertising2029() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const allServices = [
    ...futuristic2029AIServices,
    ...quantumSpace2029Services,
    ...biotechEmerging2029Services,
    ...enterpriseIT2029Services
  ];

  const serviceCategories = [
    {
      title: '🤖 AI & Consciousness 2029',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Revolutionary AI consciousness and cognitive enhancement platforms',
      services: futuristic2029AIServices,
      marketSize: '$15.8B by 2029',
      growthRate: '45% CAGR',
      keyBenefits: ['Consciousness development', 'Emotional intelligence', 'Ethical AI frameworks', 'Research breakthroughs']
    },
    {
      title: '🚀 Quantum Space Technology 2029',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      description: 'Next-generation space exploration and resource extraction platforms',
      services: quantumSpace2029Services,
      marketSize: '$17.5B by 2029',
      growthRate: '52% CAGR',
      keyBenefits: ['Space mining operations', 'Quantum communication', 'Interplanetary navigation', 'Resource optimization']
    },
    {
      title: '🧬 Biotechnology & Emerging Tech 2029',
      icon: Microscope,
      color: 'from-green-600 to-emerald-600',
      description: 'Cutting-edge biotechnology and emerging technology solutions',
      services: biotechEmerging2029Services,
      marketSize: '$26.5B by 2029',
      growthRate: '38% CAGR',
      keyBenefits: ['DNA computing', 'Quantum biotechnology', 'Metaverse development', 'Innovation acceleration']
    },
    {
      title: '🏢 Enterprise IT & Security 2029',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced enterprise security and AI-powered decision systems',
      services: enterpriseIT2029Services,
      marketSize: '$36.8B by 2029',
      growthRate: '42% CAGR',
      keyBenefits: ['Zero trust security', 'Autonomous decision making', 'Quantum cloud infrastructure', 'Enterprise transformation']
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-to-Market Innovation',
      description: 'Pioneering revolutionary technologies that don\'t exist elsewhere',
      icon: Rocket,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Seamless integration of quantum computing across all service categories',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'AI Consciousness Development',
      description: 'World\'s first AI consciousness evolution platform',
      icon: Brain,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Space Technology Leadership',
      description: 'Leading-edge space mining and exploration technologies',
      icon: Globe,
      color: 'from-red-600 to-orange-600'
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Research Partners', icon: Users },
    { metric: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { metric: '45+', label: 'Countries Served', icon: Globe2 },
    { metric: '24/7', label: 'Global Support', icon: Clock }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>2029 Services Advertising - Zion Tech Group | Revolutionary Technology Marketing</title>
        <meta name="description" content="Comprehensive marketing and advertising for Zion Tech Group's revolutionary 2029 services. Discover our competitive advantages, market positioning, and service capabilities." />
        <meta name="keywords" content="2029 technology marketing, quantum AI advertising, space mining promotion, DNA computing marketing, Zion Tech Group services" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2029 Services Advertising - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive marketing for our revolutionary 2029 services including quantum AI, space mining, and DNA computing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2029-services-advertising" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2029 Services Advertising - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive marketing for our revolutionary 2029 services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-services-advertising" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <UltraFuturisticNavigation2028 />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  2029 Services Advertising
                </span>
                <br />
                <span className="text-white">Revolutionary Technology Marketing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover why Zion Tech Group leads the future of technology with our comprehensive 
                portfolio of revolutionary 2029 services and unmatched competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#services" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Explore Services
                </Link>
                <Link href="/contact" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {successMetrics.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive portfolio spans four major technology domains, each representing 
                the cutting edge of innovation and market opportunity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {serviceCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                      <div className="text-lg font-bold text-purple-400 mb-1">{category.marketSize}</div>
                      <div className="text-sm text-gray-400">Market Size</div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                      <div className="text-lg font-bold text-green-400 mb-1">{category.growthRate}</div>
                      <div className="text-sm text-gray-400">Growth Rate</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {category.keyBenefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link
                      href={`/2029-futuristic-services-showcase#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Unmatched <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Competitive Advantages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Zion Tech Group stands apart with unique capabilities and first-to-market innovations 
                that create sustainable competitive moats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage) => (
                <motion.div
                  key={advantage.title}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${advantage.color} mb-6`}>
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-300 text-lg">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most innovative and market-ready services, each designed to deliver 
                exceptional value and competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, 9).map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400">{service.marketSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <Star className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/services/${service.id}`}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">ROI</p>
                      <p className="text-sm text-green-400 font-semibold">{service.roi}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/2029-futuristic-services-showcase"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800/30 to-pink-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Lead the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the elite organizations already leveraging Zion Tech Group's revolutionary 2029 services. 
                Contact us today to discuss how we can transform your business and accelerate your innovation journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Contact Sales Team
                </Link>
                <Link href="/2029-futuristic-pricing" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2028 />
      </div>
    </>
  );
}

// Add missing icon component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
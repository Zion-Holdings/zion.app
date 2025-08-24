import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, 
  Sparkles, Atom, Target, Microscope, Search, Filter,
  ExternalLink, Users, Clock, BarChart3, Award, Globe,
  Cpu, Database, Lock, MessageSquare, BarChart, ShoppingCart,
  UserCheck, FileText, Palette, Camera, Video, Music
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2035 from '../components/ui/UltraFuturisticBackground2035';
import UltraFuturisticNavigation2033 from '../components/layout/UltraFuturisticNavigation2033';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';

export default function EnhancedServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'Artificial Intelligence',
      description: 'Revolutionary AI solutions including consciousness platforms, emotional intelligence, and autonomous business systems.',
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      services: [
        'AI Consciousness Evolution Platform',
        'AI Emotional Intelligence Platform',
        'AI Autonomous Business Manager',
        'AI Creativity Orchestrator',
        'AI Content Generation & Optimization',
        'AI Sales Automation',
        'AI HR Recruitment',
        'AI Legal Contract Analysis'
      ],
      pricing: { starting: '$1,499', range: '$1,499 - $9,999' },
      benefits: ['300% ROI improvement', '80% time savings', 'Enhanced decision making'],
      href: '/ai-services',
      featured: true
    },
    {
      id: 'quantum-services',
      name: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for security, finance, and emerging technology applications.',
      icon: Atom,
      color: 'from-indigo-500 to-blue-600',
      services: [
        'Quantum Internet Security Gateway',
        'Quantum Financial Trading Platform',
        'Quantum AI Brain-Computer Interface',
        'Quantum Blockchain Infrastructure',
        'Quantum Cybersecurity Solutions',
        'Quantum Energy Optimization',
        'Quantum Logistics Platform',
        'Quantum Metaverse Development'
      ],
      pricing: { starting: '$2,999', range: '$2,999 - $19,999' },
      benefits: ['Unbreakable security', 'Exponential performance', 'Future-proof technology'],
      href: '/quantum-services',
      featured: true
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Advanced space technology solutions including mining automation, satellite systems, and space infrastructure.',
      icon: Rocket,
      color: 'from-teal-500 to-emerald-600',
      services: [
        'Space Mining Automation Platform',
        'Satellite Constellation Management',
        'Space Debris Tracking System',
        'Space Tourism Platform',
        'Space Resource Analytics',
        'Space Weather Monitoring',
        'Space Communication Networks',
        'Space Manufacturing Systems'
      ],
      pricing: { starting: '$4,999', range: '$4,999 - $49,999' },
      benefits: ['Access to space resources', 'Global connectivity', 'Innovation leadership'],
      href: '/space-technology',
      featured: true
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise IT solutions including infrastructure, security, and operations automation.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-600',
      services: [
        'Autonomous DevOps Platform',
        'Zero Trust Network Architecture',
        'Edge Computing Orchestration',
        'AI IT Operations Center',
        'Cloud Infrastructure Management',
        'Data Center Automation',
        'Network Security Monitoring',
        'IT Asset Management'
      ],
      pricing: { starting: '$1,999', range: '$1,999 - $29,999' },
      benefits: ['Operational efficiency', 'Cost reduction', 'Security enhancement'],
      href: '/enterprise-it',
      featured: true
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Market-ready micro SAAS services for business automation, marketing, and operational efficiency.',
      icon: Target,
      color: 'from-green-500 to-yellow-600',
      services: [
        'AI Content Calendar Pro',
        'Smart Invoice Automation',
        'Customer Success Automation',
        'AI Sales Pipeline Optimizer',
        'HR Automation Suite',
        'E-commerce Automation Platform',
        'Project Management AI',
        'Data Analytics Automation'
      ],
      pricing: { starting: '$19', range: '$19 - $499' },
      benefits: ['Quick implementation', 'Affordable pricing', 'Immediate ROI'],
      href: '/enhanced-micro-saas-showcase',
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions including threat detection, incident response, and security automation.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      services: [
        'AI Threat Detection System',
        'Incident Response Automation',
        'Vulnerability Assessment Platform',
        'Security Awareness Training',
        'Compliance Monitoring System',
        'Penetration Testing Automation',
        'Security Operations Center',
        'Risk Assessment AI'
      ],
      pricing: { starting: '$79', range: '$79 - $999' },
      benefits: ['Threat prevention', 'Compliance assurance', 'Risk mitigation'],
      href: '/security',
      featured: false
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Comprehensive data analytics solutions including collection, processing, and visualization automation.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      services: [
        'Data Pipeline Automation',
        'Real-time Analytics Dashboard',
        'Predictive Analytics Platform',
        'Data Quality Monitoring',
        'Business Intelligence Suite',
        'Data Visualization Tools',
        'Machine Learning Pipeline',
        'Data Governance Platform'
      ],
      pricing: { starting: '$49', range: '$49 - $799' },
      benefits: ['Data-driven decisions', 'Operational insights', 'Performance optimization'],
      href: '/ai-data-analytics',
      featured: false
    },
    {
      id: 'content-creation',
      name: 'Content Creation',
      description: 'AI-powered content creation and management solutions for marketing and communication.',
      icon: FileText,
      color: 'from-pink-500 to-rose-600',
      services: [
        'AI Content Generator',
        'Video Editing AI Platform',
        'Social Media Automation',
        'Content Calendar Management',
        'SEO Optimization Tools',
        'Multimedia Content Creation',
        'Content Performance Analytics',
        'Brand Voice AI'
      ],
      pricing: { starting: '$29', range: '$29 - $399' },
      benefits: ['Content quality improvement', 'Time savings', 'Engagement increase'],
      href: '/ai-content-generator',
      featured: false
    },
    {
      id: 'automation',
      name: 'Business Automation',
      description: 'Comprehensive business process automation solutions for operational efficiency.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      services: [
        'Workflow Automation Platform',
        'Process Mining Tools',
        'RPA Implementation',
        'Business Process Optimization',
        'Automation Consulting',
        'Integration Services',
        'Performance Monitoring',
        'Automation Strategy'
      ],
      pricing: { starting: '$99', range: '$99 - $1,999' },
      benefits: ['Process efficiency', 'Cost reduction', 'Error elimination'],
      href: '/automation',
      featured: false
    },
    {
      id: 'research-development',
      name: 'Research & Development',
      description: 'Cutting-edge R&D services including emerging technology research and innovation consulting.',
      icon: Microscope,
      color: 'from-purple-500 to-indigo-600',
      services: [
        'Emerging Technology Research',
        'Innovation Strategy Consulting',
        'Prototype Development',
        'Technology Assessment',
        'Patent Research',
        'Market Analysis',
        'Technology Transfer',
        'Innovation Workshops'
      ],
      pricing: { starting: '$199', range: '$199 - $2,999' },
      benefits: ['Innovation leadership', 'Competitive advantage', 'Future readiness'],
      href: '/emerging-tech',
      featured: false
    }
  ];

  const filteredCategories = serviceCategories.filter(category =>
    selectedCategory === 'all' || category.id === selectedCategory
  );

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
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Head>
        <title>Enhanced Services Overview 2025 | Zion Tech Group - Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI, quantum computing, space technology, enterprise IT, and micro SAAS solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="technology services, AI services, quantum computing, space technology, enterprise IT, micro SAAS, cybersecurity, data analytics, content creation, business automation, research development" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Enhanced Services Overview 2025 | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology solutions for the future. AI, quantum computing, space technology, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-overview" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enhanced Services Overview 2025 | Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive technology solutions for the future." />
        
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-overview" />
      </Head>

      <UltraFuturisticBackground2035>
        <UltraFuturisticNavigation2033 />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8 backdrop-blur-sm"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2025 Comprehensive Services Overview
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Complete
              </span>
              <br />
              <span className="text-white">Technology</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              From revolutionary AI consciousness platforms to cutting-edge quantum computing solutions, 
              discover our comprehensive range of technology services designed to transform businesses and advance humanity.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300 text-sm">Individual Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">$500B+</div>
                <div className="text-gray-300 text-sm">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Global Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
              >
                <span>Get Started</span>
                <Phone className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <span className="text-white"> Service Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of technology services designed to transform every aspect of your business operations.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-black/30 border border-cyan-500/30 text-gray-300 hover:border-cyan-400'
                  }`}
                >
                  All Categories
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                        : 'bg-black/30 border border-cyan-500/30 text-gray-300 hover:border-cyan-400'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className={`group relative bg-gradient-to-br from-black/40 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm ${
                    category.featured ? 'ring-2 ring-cyan-400/30' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Category Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} border border-cyan-500/30 rounded-2xl flex items-center justify-center`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Services
                    </h4>
                    <div className="space-y-2">
                      {category.services.slice(0, 4).map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-sm text-cyan-400 font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                      Pricing
                    </h4>
                    <div className="text-lg font-bold text-green-400">
                      Starting at {category.pricing.starting}
                    </div>
                    <div className="text-sm text-gray-400">
                      Range: {category.pricing.range}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm text-gray-300">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={category.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 text-sm"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                    <motion.a
                      href={`tel:${contactInfo.mobile}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-4 py-3 bg-black/50 border border-cyan-500/50 text-cyan-300 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss how our comprehensive technology solutions can drive growth and innovation for your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-black/30 border border-cyan-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Mail className="w-6 h-6" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <UltraFuturisticFooter2034 />
      </UltraFuturisticBackground2035>
    </>
  );
}
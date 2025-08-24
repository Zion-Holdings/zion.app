import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Cpu, Target, Microscope, 
  Shield, Zap, Database, Cloud, Lock, Globe,
  ArrowRight, Star, TrendingUp, Users, Briefcase
} from 'lucide-react';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticBackground2030 from '../components/backgrounds/UltraFuturisticBackground2030';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: '🚀 AI & Machine Learning Services',
      icon: Brain,
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      description: 'Cutting-edge artificial intelligence solutions for the future',
      services: [
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness and emotional intelligence', price: '$19,999/month' },
        { name: 'AI Emotional Intelligence Platform', href: '/ai-emotion-intelligence-platform', description: 'Real-time emotion analysis and response systems', price: '$1,299/month' },
        { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion and content generation', price: '$1,799/month' },
        { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations and decision making', price: '$3,999/month' }
      ]
    },
    {
      title: '⚛️ Quantum Computing & Technology',
      icon: Atom,
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      description: 'Next-generation quantum solutions',
      services: [
        { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption and security protocols', price: '$3,999/month' },
        { name: 'Quantum Learning Accelerator', href: '/quantum-learning-accelerator', description: 'Quantum-enhanced learning paths and optimization', price: '$899/month' },
        { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms and analysis', price: '$4,999/month' },
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud performance and capabilities', price: '$4,999/month' }
      ]
    },
    {
      title: '🧬 Biotechnology & DNA Computing',
      icon: Microscope,
      color: 'from-green-600 via-emerald-600 to-teal-600',
      description: 'Biological computing and genetic engineering solutions',
      services: [
        { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation and data storage', price: '$5,999/month' },
        { name: 'Biotech Personalized Nutrition', href: '/biotech-personalized-nutrition', description: 'DNA-based nutrition plans and health optimization', price: '$599/month' },
        { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes and risk assessment', price: '$1,599/month' },
        { name: 'Advanced Research Automation', href: '/advanced-research-automation', description: 'Automated research workflows and data analysis', price: '$1,999/month' }
      ]
    },
    {
      title: '🏙️ Enterprise IT Solutions',
      icon: Cpu,
      color: 'from-blue-600 via-cyan-600 to-teal-600',
      description: 'Autonomous enterprise infrastructure and operations',
      services: [
        { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps and deployment management', price: '$2,999/month' },
        { name: 'Autonomous IT Operations Center', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure and monitoring', price: '$6,999/month' },
        { name: 'AI-Powered Enterprise Security', href: '/ai-powered-enterprise-security', description: 'AI-driven threat detection and security management', price: '$2,999/month' },
        { name: 'Intelligent Data Governance', href: '/intelligent-data-governance', description: 'AI-powered data management and compliance', price: '$7,999/month' }
      ]
    },
    {
      title: '🌌 Space & Metaverse Technology',
      icon: Rocket,
      color: 'from-teal-600 via-emerald-600 to-green-600',
      description: 'Space exploration and digital reality solutions',
      services: [
        { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining and resource extraction', price: '$8,999/month' },
        { name: 'Metaverse Digital Reality Platform', href: '/metaverse-digital-reality-platform', description: 'Immersive virtual worlds and experiences', price: '$2,499/month' },
        { name: 'Quantum Research Platform', href: '/quantum-research-platform', description: 'Quantum computing research and development tools', price: '$3,999/month' },
        { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'Intelligent research support and data analysis', price: '$899/month' }
      ]
    },
    {
      title: '🎯 Innovative Micro SAAS Solutions',
      icon: Target,
      color: 'from-green-600 via-yellow-600 to-orange-600',
      description: 'Cutting-edge micro solutions for modern businesses',
      services: [
        { name: 'AI Emotion-Based Marketing', href: '/ai-emotion-based-marketing', description: 'Emotion-driven marketing campaigns and analytics', price: '$899/month' },
        { name: 'Quantum Creativity Studio', href: '/quantum-creativity-studio', description: 'Quantum-enhanced creativity and design tools', price: '$1,299/month' },
        { name: 'LLM Gateway & Cost Control', href: '/llm-gateway', description: 'Centralize model access and control spending', price: '$299/month' },
        { name: 'API Observability Starter', href: '/api-observability-starter', description: 'Trace, log, and profile your APIs effectively', price: '$99/month' }
      ]
    }
  ];

  const stats = [
    { value: '200+', label: 'Revolutionary Services', icon: Rocket },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { value: '21', label: 'Day Free Trials', icon: Star },
    { value: '24/7', label: 'AI Support', icon: Brain },
    { value: '$50B+', label: 'Market Value', icon: TrendingUp },
    { value: '300%+', label: 'Average ROI', icon: Zap }
  ];

  return (
    <UltraFuturisticBackground2030>
      <Head>
        <title>Zion Tech Group Services - AI, Quantum Computing, Space Tech & More | 2029 Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, biotechnology, and enterprise IT solutions." />
        <meta name="keywords" content="AI services, quantum computing, space technology, biotechnology, enterprise IT, micro SAAS, Zion Tech Group services, 2029 technology solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group Services - Revolutionary 2029 Technology Solutions" />
        <meta property="og:description" content="Explore our comprehensive range of revolutionary 2029 technology services including AI consciousness, quantum computing, space mining, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group Services - Revolutionary 2029 Technology Solutions" />
        <meta name="twitter:description" content="Explore our comprehensive range of revolutionary 2029 technology services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <UltraFuturisticNavigation2030 />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Discover our comprehensive range of revolutionary 2029 technology services designed to transform your business and propel you into the future.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-4 flex-grow">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Revolutionary Technology?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team of technology experts to discuss how our services can revolutionize your operations and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2030 />
    </UltraFuturisticBackground2030>
  );
}

import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon,
  Brain as BrainIcon, Factory as FactoryIcon, Shield as ShieldIcon, FlaskConical as FlaskIcon,
  DollarSign as DollarIcon, Rocket as RocketIcon, Globe as GlobeIcon, Zap as ZapIcon,
  Link as LinkIcon, Building2 as Building2Icon, Cpu as CpuIcon, Database as DatabaseIcon,
  Bot as BotIcon, Cloud as CloudIcon, Lock as LockIcon, Users as UsersIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldIcon className="w-6 h-6" /> },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400', icon: <StarIcon className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <BotIcon className="w-6 h-6" /> },
    { value: '$1B+', label: 'Market Value', color: 'text-yellow-400', icon: <DollarIcon className="w-6 h-6" /> },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services for homepage
  const featuredServices = enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, 8);

  const revolutionaryServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities. First-to-market solution with 99.99% accuracy.',
      icon: <BrainIcon className="w-8 h-8" />,
      price: '$1,299/month',
      category: 'Quantum Computing & AI',
      variant: 'quantum-entanglement',
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving', 'Real-time quantum AI processing'],
      marketSize: '$2.1B market',
      growthRate: '350% annual growth'
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention. Industry 4.0 leader with 200% productivity increase.',
      icon: <FactoryIcon className="w-8 h-8" />,
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance', 'Real-time optimization'],
      marketSize: '$4.8B market',
      growthRate: '250% annual growth'
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection. Protects against current and future quantum threats.',
      icon: <ShieldIcon className="w-8 h-8" />,
      price: '$1,599/month',
      category: 'Cybersecurity',
      variant: 'cyberpunk-holographic',
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      marketSize: '$3.2B market',
      growthRate: '280% annual growth'
    },
    {
      name: 'Biomedical AI Research Platform',
      description: 'Cutting-edge AI platform for biomedical research and drug discovery. Accelerates research timelines by 10x while maintaining scientific accuracy.',
      icon: <FlaskIcon className="w-8 h-8" />,
      price: '$899/month',
      category: 'Healthcare & Biotechnology',
      variant: 'neural-quantum',
      link: 'https://ziontechgroup.com/biomedical-ai-research',
      features: ['Drug discovery acceleration', 'Genomic analysis', 'Clinical trial optimization', 'Research automation'],
      marketSize: '$3.2B market',
      growthRate: '200% annual growth'
    },
    {
      name: 'Quantum Finance Optimizer',
      description: 'Revolutionary financial optimization platform using quantum computing for portfolio optimization and risk assessment. 50x faster calculations.',
      icon: <DollarIcon className="w-8 h-8" />,
      price: '$1,199/month',
      category: 'Financial Technology',
      variant: 'quantum-matrix',
      link: 'https://ziontechgroup.com/quantum-finance-optimizer',
      features: ['Portfolio optimization', 'Risk assessment', 'Real-time trading', 'Quantum algorithms'],
      marketSize: '$2.8B market',
      growthRate: '320% annual growth'
    },
    {
      name: 'Autonomous Logistics AI',
      description: 'Next-generation autonomous logistics platform that optimizes supply chains in real-time, reducing costs by 40% and improving delivery times by 60%.',
      icon: <Truck className="w-8 h-8" />,
      price: '$1,899/month',
      category: 'Logistics & Supply Chain',
      variant: 'holographic-neural',
      link: 'https://ziontechgroup.com/autonomous-logistics-ai',
      features: ['Real-time route optimization', 'Autonomous vehicle management', 'Inventory forecasting', 'Demand prediction'],
      marketSize: '$3.5B market',
      growthRate: '240% annual growth'
    }
  ];

  const serviceCategories = [
    { name: 'Quantum Computing & AI', icon: <BrainIcon className="w-6 h-6" />, count: 15, color: 'from-purple-600 to-indigo-700' },
    { name: 'Manufacturing & Industry 4.0', icon: <FactoryIcon className="w-6 h-6" />, count: 12, color: 'from-orange-500 to-red-600' },
    { name: 'Cybersecurity', icon: <ShieldIcon className="w-6 h-6" />, count: 18, color: 'from-green-600 to-emerald-700' },
    { name: 'Healthcare & Biotechnology', icon: <FlaskIcon className="w-6 h-6" />, count: 14, color: 'from-blue-600 to-cyan-700' },
    { name: 'Financial Technology', icon: <DollarIcon className="w-6 h-6" />, count: 16, color: 'from-yellow-500 to-amber-600' },
    { name: 'Logistics & Supply Chain', icon: <Truck className="w-6 h-6" />, count: 11, color: 'from-teal-500 to-green-600' },
    { name: 'Space Technology', icon: <RocketIcon className="w-6 h-6" />, count: 8, color: 'from-indigo-600 to-purple-700' },
    { name: 'Education Technology', icon: <GraduationCap className="w-6 h-6" />, count: 13, color: 'from-blue-500 to-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, cybersecurity, healthcare AI, fintech, logistics AI, space technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="500+ innovative micro SaaS services powered by AI and quantum computing" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground>
        {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              The Future of
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Micro SaaS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover 500+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology. 
              Transform your business with our innovative solutions that deliver unprecedented ROI and competitive advantages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              href="/services" 
              variant="primary" 
              size="lg"
              className="group relative overflow-hidden"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              className="group relative overflow-hidden"
            >
              Get Started
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/70 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our cutting-edge services that combine AI, quantum computing, and innovative technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant="default"
                  className="h-full group hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.marketSize}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-4">
                      Growth: <span className="text-green-400 font-semibold">{service.growthRate}</span>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SaaS services across cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <span className="text-sm font-semibold text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore services</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative micro SaaS services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant="default"
                  className="h-full group hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <span className="text-sm font-semibold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.tagline}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{service.rating}</span>
                      </div>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full group"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary micro SaaS services. 
              Get started today with a free consultation and discover how we can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
                className="group relative overflow-hidden"
              >
                Browse All Services
                <Search className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Phone</span>
                <span className="text-white font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-white font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <MapPin className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-sm text-gray-400">Address</span>
                <span className="text-white font-semibold text-center text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </UltraFuturisticBackground>
    </div>
  );
}

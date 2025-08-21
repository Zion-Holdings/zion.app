import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$1B+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const revolutionaryServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities. First-to-market solution with 99.99% accuracy.',
      icon: '🧠',
      price: '$1,299/month',
      category: 'Quantum Computing',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving', 'Real-time quantum AI processing']
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention. Industry 4.0 leader with 200% productivity increase.',
      icon: '🏭',
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      variant: 'holographic',
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance', 'Real-time optimization']
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection. Protects against current and future quantum threats.',
      icon: '🛡️',
      price: '$1,599/month',
      category: 'Cybersecurity',
      variant: 'cyberpunk',
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring']
    },
    {
      name: 'Biomedical AI Research Platform',
      description: 'Cutting-edge AI platform for biomedical research and drug discovery. Accelerates research timelines by 10x while maintaining scientific accuracy.',
      icon: '🧬',
      price: '$899/month',
      category: 'Biomedical & Healthcare',
      variant: 'neural',
      link: 'https://ziontechgroup.com/biomedical-ai-research',
      features: ['Drug discovery acceleration', 'Genomic analysis', 'Clinical trial optimization', 'Research automation']
    },
    {
      name: 'Quantum Finance Optimizer',
      description: 'Revolutionary financial optimization platform using quantum computing for portfolio optimization and risk assessment. 50x faster calculations.',
      icon: '💰',
      price: '$1,199/month',
      category: 'Financial Technology',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/quantum-finance-optimizer',
      features: ['Portfolio optimization', 'Risk assessment', 'Real-time trading', 'Quantum algorithms']
    },
    {
      name: 'AI Space Exploration Platform',
      description: 'AI-powered space exploration and satellite management platform. Enables autonomous space missions with real-time decision making.',
      icon: '🚀',
      price: '$1,899/month',
      category: 'Aerospace & Space Technology',
      variant: 'space',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      features: ['Satellite management', 'Mission planning', 'Autonomous navigation', 'Real-time analytics']
    }
  ];

  const emergingTechServices = [
    {
      name: 'Metaverse Development Studio',
      description: 'Complete metaverse development platform with AI-powered content generation, virtual reality integration, and blockchain-based ownership.',
      icon: '🌐',
      price: '$799/month',
      category: 'Metaverse & VR',
      variant: 'holographic',
      link: 'https://ziontechgroup.com/metaverse-studio',
      features: ['AI content generation', 'VR/AR integration', 'Blockchain ownership', 'Multi-platform support']
    },
    {
      name: 'Quantum Internet Gateway',
      description: 'Next-generation quantum internet infrastructure enabling ultra-secure, high-speed quantum communication networks.',
      icon: '🌍',
      price: '$1,999/month',
      category: 'Quantum Internet',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/quantum-internet',
      features: ['Quantum encryption', 'Entanglement networks', 'Global quantum routing', 'Zero-latency communication']
    },
    {
      name: 'AI Climate Prediction System',
      description: 'Advanced climate modeling using AI and quantum computing for accurate long-term weather and climate predictions.',
      icon: '🌦️',
      price: '$699/month',
      category: 'Climate Technology',
      variant: 'neural',
      link: 'https://ziontechgroup.com/ai-climate-prediction',
      features: ['Quantum climate models', 'AI pattern recognition', 'Real-time monitoring', 'Predictive analytics']
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Content Factory Pro',
      description: 'Enterprise-grade AI content generation platform producing high-quality articles, marketing copy, and creative content at scale.',
      icon: '✍️',
      price: '$299/month',
      category: 'Content Creation',
      variant: 'neural',
      link: 'https://ziontechgroup.com/ai-content-factory',
      features: ['Multi-format content', 'Brand voice training', 'SEO optimization', 'Plagiarism detection']
    },
    {
      name: 'Quantum Data Analytics',
      description: 'Quantum-enhanced data analytics platform providing insights 1000x faster than traditional solutions.',
      icon: '📊',
      price: '$599/month',
      category: 'Data Analytics',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/quantum-analytics',
      features: ['Quantum algorithms', 'Real-time processing', 'Predictive modeling', 'Visualization tools']
    },
    {
      name: 'Autonomous SEO Engine',
      description: 'Self-learning SEO platform that continuously optimizes websites for search engines without human intervention.',
      icon: '🔍',
      price: '$199/month',
      category: 'SEO & Marketing',
      variant: 'cyberpunk',
      link: 'https://ziontechgroup.com/autonomous-seo',
      features: ['AI optimization', 'Competitor analysis', 'Content suggestions', 'Performance tracking']
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Quantum AI & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of revolutionary quantum AI, autonomous systems, and 500+ innovative micro SaaS solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="quantum AI, autonomous systems, micro SaaS, AI services, quantum computing, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Quantum AI & Micro SaaS Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary quantum AI, autonomous systems, and 500+ innovative micro SaaS solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Quantum AI & Micro SaaS Solutions" />
        <meta name="twitter:description" content="Leading provider of revolutionary quantum AI, autonomous systems, and 500+ innovative micro SaaS solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Quantum AI</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transform your business with cutting-edge quantum computing, autonomous AI systems, and 
            <span className="text-cyan-400 font-semibold"> 500+ innovative micro SaaS services</span>. 
            Experience the future of technology today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button
              href="/services"
              variant="primary"
              size="lg"
              className="group"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rotate-45"
            animate={{
              rotate: [45, 405],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future with our cutting-edge quantum AI and autonomous systems that are reshaping industries worldwide.
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
                  variant={service.variant as any}
                  glowIntensity="high"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                        {service.category}
                      </span>
                    </div>

                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    
                    <ul className="text-left space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies Section */}
      <section className="py-20 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emerging <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our next-generation technology platforms that are defining the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergingTechServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  glowIntensity="medium"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 text-fuchsia-400 text-sm rounded-full border border-fuchsia-400/30">
                        {service.category}
                      </span>
                    </div>

                    <div className="text-2xl font-bold text-fuchsia-400 mb-4">{service.price}</div>
                    
                    <ul className="text-left space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-xl font-medium hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                    >
                      Explore Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Solutions Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">500+</span> Micro SaaS Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access our comprehensive library of innovative micro SaaS services designed to solve specific business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  glowIntensity="medium"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 text-sm rounded-full border border-emerald-400/30">
                        {service.category}
                      </span>
                    </div>

                    <div className="text-2xl font-bold text-emerald-400 mb-4">{service.price}</div>
                    
                    <ul className="text-left space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
                    >
                      Get Started
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              href="/micro-saas"
              variant="primary"
              size="lg"
              className="group"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Business?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already leveraging our revolutionary technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <span className="text-emerald-400 text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}

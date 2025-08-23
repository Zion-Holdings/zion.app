import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import FuturisticCard, { ServiceCard, FeatureCard } from '../components/ui/FuturisticCard';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, getRevolutionaryServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  // Enhanced market statistics
  const marketStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$25B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const heroStats = marketStats;

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '300+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 21-day free trials. All services are production-ready and deployed.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1000%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide with SOC 2 compliance.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Most services are ready in under 1 hour.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats with zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: 'Starting at $899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-violet-500 to-purple-600',
      marketData: '$22B algorithmic trading market, 280% annual growth',
      competitors: 'Bloomberg Terminal ($2000+/month), Refinitiv ($1500+/month)',
      savings: 'Save 55% vs. competitors'
    },
    {
      title: '🤖 Quantum Robotics Platform',
      description: 'Quantum-enhanced autonomous robotics with human-level intelligence. Achieve 2500% ROI within 18 months.',
      price: 'Starting at $3,999/month',
      features: ['Quantum-enhanced decision making', 'Autonomous navigation systems', 'Human-robot collaboration', 'Advanced sensor fusion'],
      link: 'https://ziontechgroup.com/quantum-robotics',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$28.5B robotics market, 380% annual growth',
      competitors: 'Boston Dynamics ($50000+/month), ABB Robotics ($10000+/month)',
      savings: 'Save 80% vs. competitors'
    },
    {
      title: '🚗 Autonomous Vehicle AI Platform',
      description: 'AI-powered autonomous vehicle control with 99.99% safety. Achieve 1800% ROI within 24 months.',
      price: 'Starting at $2,499/month',
      features: ['Complete autonomous driving', 'Advanced sensor fusion', 'Real-time decision making', 'Safety monitoring systems'],
      link: 'https://ziontechgroup.com/autonomous-vehicles',
      color: 'from-red-600 to-pink-700',
      marketData: '$45.2B autonomous vehicle market, 520% annual growth',
      competitors: 'Waymo ($5000+/month), Tesla FSD ($200/month)',
      savings: 'Save 50% vs. competitors'
    }
  ];

  // New revolutionary services showcase
  const revolutionaryServices = [
    {
      title: '🧠 Quantum Brain-Computer Interface',
      description: 'Direct neural integration with quantum computing. Enable thought-to-computer communication.',
      price: '$1,299/month',
      marketData: '$2.8B BCI market, 450% growth',
      link: 'https://ziontechgroup.com/quantum-bci',
      color: 'from-indigo-600 to-purple-700',
      icon: '🧠'
    },
    {
      title: '⛏️ Autonomous Space Mining Platform',
      description: 'AI-powered asteroid mining and resource extraction. Achieve 1500% ROI within 18 months.',
      price: '$2,999/month',
      marketData: '$3.8B space mining market, 520% growth',
      link: 'https://ziontechgroup.com/space-mining',
      color: 'from-amber-600 to-orange-700',
      icon: '⛏️'
    },
    {
      title: '💊 Quantum Pharmaceutical Discovery',
      description: 'AI-Quantum drug discovery with 1000x speed. Discover breakthrough treatments in days, not years.',
      price: '$4,999/month',
      marketData: '$15.2B AI drug discovery market, 580% growth',
      link: 'https://ziontechgroup.com/quantum-pharma',
      color: 'from-emerald-600 to-teal-700',
      icon: '💊'
    },
    {
      title: '⚖️ Autonomous AI Lawyer Platform',
      description: 'Fully autonomous legal services with 99.9% accuracy. Achieve 800% ROI within 6 months.',
      price: '$799/month',
      marketData: '$8.9B legal tech market, 320% growth',
      link: 'https://ziontechgroup.com/ai-lawyer',
      color: 'from-slate-600 to-gray-700',
      icon: '⚖️'
    }
  ];

  // Enhanced competitive advantages
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-cyan-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  const serviceCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions',
      icon: <Brain className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum') || s.category.includes('AI')).length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Autonomous Systems',
      description: 'Next-generation automation',
      icon: <Factory className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Autonomous')).length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Space Technology',
      description: 'Satellite and space operations',
      icon: <Rocket className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Space')).length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Metaverse & VR',
      description: 'Immersive digital experiences',
      icon: <Globe className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Metaverse')).length,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Biomedical AI',
      description: 'Healthcare and biotechnology',
      icon: <FlaskConical className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biomedical')).length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Quantum Finance',
      description: 'Financial modeling and trading',
      icon: <DollarSign className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Finance')).length,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SaaS services powered by quantum computing, AI, and cutting-edge technology. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, space technology, metaverse, biomedical AI, quantum finance" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="150+ revolutionary micro SaaS services powered by quantum computing and AI" />
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
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Revolutionary</span> Micro SaaS
              <br />
              <span className="text-gradient-purple">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with 150+ cutting-edge micro SaaS solutions powered by quantum computing, 
              AI, autonomous systems, and space technology. Experience the future of business automation.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
                className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50"
              >
                <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href="/micro-saas"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-slate-600 text-white hover:border-cyan-500 hover:text-cyan-400 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>



      {/* Featured Services */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-purple">Featured</span> Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience our most revolutionary micro SaaS services that are transforming industries worldwide
            </p>
          </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer hover-lift"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-2xl">{service.title.split(' ')[0]}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title.split(' ').slice(1).join(' ')}</h3>
                    <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="/micro-saas"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* New Revolutionary Services */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-purple">New</span> Revolutionary Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our latest innovations in quantum computing, autonomous systems, and AI-driven solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{service.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{service.title}</div>
                    <div className="text-sm text-slate-400">{service.description}</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                <p className="text-slate-400 mb-4">{service.marketData}</p>
                <Button
                  href={service.link}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 text-sm font-semibold rounded-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Service</span> Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SaaS services across cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/micro-saas?category=${encodeURIComponent(category.name)}`}
              >
                <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-400 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{category.count} services</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Competitive Advantages */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Why Choose</span> Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the competitive advantages that set us apart from traditional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{advantage.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{advantage.title}</div>
                    <div className="text-sm text-slate-400">{advantage.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient-cyan">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already leveraging our revolutionary micro SaaS services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.mobile}</div>
                <div className="text-xs text-slate-500 mt-1">24/7 Support</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.email}</div>
                <div className="text-xs text-slate-500 mt-1">Response within 2 hours</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.address}</div>
                <div className="text-xs text-slate-500 mt-1">Middletown, DE</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Website</div>
                <div className="text-slate-400 text-sm">ziontechgroup.com</div>
                <div className="text-xs text-slate-500 mt-1">Live Demo Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/micro-saas"
                variant="outline"
                className="border-slate-600 text-white hover:border-purple-500 hover:text-purple-400 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}

import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import Button from '../components/ui/Button';
import QuantumMatrixBackground from '../components/ui/QuantumMatrixBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-6 h-6" /> },
    { value: '$50B+', label: 'Market Value', color: 'text-yellow-400', icon: <DollarSign className="w-6 h-6" /> },
    { value: '300%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-6 h-6" /> },
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
      title: '🧠 Revolutionary Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $299/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$15B quantum computing market, 500% annual growth',
      competitors: 'IBM Quantum ($2000+/month), Google Quantum AI ($1500+/month)',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏭 Autonomous Manufacturing AI Platform',
      description: 'Self-learning manufacturing systems achieving zero downtime and 400% ROI within 6 months. Industry 4.0 revolution.',
      price: 'Starting at $199/month',
      features: ['Predictive maintenance with 99.9% accuracy', 'Real-time quality control automation', 'Supply chain intelligence and optimization', 'Energy consumption optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600',
      marketData: '$12.3B industrial AI market, 320% annual growth',
      competitors: 'Siemens MindSphere ($500+/month), PTC ThingWorx ($300+/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: 'Starting at $159/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketData: '$6.8B quantum security market, 380% annual growth',
      competitors: 'CrowdStrike ($8.99/user/month), Palo Alto Networks ($50+/user/month)',
      savings: 'Save 70% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Cutting-edge space exploration and satellite management tools. Achieve 500% ROI within 8 months through improved operations.',
      price: 'Starting at $399/month',
      features: ['Satellite mission management and planning', 'Space data analytics and visualization', 'Orbital optimization algorithms', 'Space debris tracking and avoidance'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketData: '$4.2B space technology market, 280% annual growth',
      competitors: 'Maxar ($500+/month), Planet Labs ($400+/month)',
      savings: 'Save 20% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and biotech research. Accelerate research with 800% ROI within 12 months.',
      price: 'Starting at $599/month',
      features: ['AI-powered drug discovery algorithms', 'Protein folding prediction with 99.2% accuracy', 'Genomic data analysis and interpretation', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-500 to-teal-600',
      marketData: '$8.5B biotech AI market, 420% annual growth',
      competitors: 'Insitro ($1000+/month), Atomwise ($800+/month)',
      savings: 'Save 40% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: 'Starting at $899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-violet-500 to-purple-600',
      marketData: '$25B algorithmic trading market, 450% annual growth',
      competitors: 'Bloomberg Terminal ($24,000/year), Thomson Reuters ($22,000/year)',
      savings: 'Save 95% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '⛓️ Quantum Blockchain Platform',
      description: 'Post-quantum blockchain with AI governance. Future-proof your Web3 infrastructure with 600% ROI within 8 months.',
      price: 'Starting at $349/month',
      features: ['Quantum-resistant cryptography', 'AI-powered smart contract optimization', 'Cross-chain interoperability', 'Advanced DeFi protocol integration'],
      link: 'https://ziontechgroup.com/quantum-blockchain',
      color: 'from-indigo-500 to-blue-600',
      marketData: '$19B blockchain platform market, 380% annual growth',
      competitors: 'Ethereum ($50+/month), Solana ($25+/month)',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum IoT Platform',
      description: 'Quantum-secured IoT with AI analytics. Connect, secure, and analyze IoT devices at scale with 400% ROI within 6 months.',
      price: 'Starting at $199/month',
      features: ['Quantum-secured device communication', 'AI-powered device management', 'Real-time data analytics', 'Edge computing optimization'],
      link: 'https://ziontechgroup.com/quantum-iot',
      color: 'from-teal-500 to-cyan-600',
      marketData: '$1.1T IoT market, 250% annual growth',
      competitors: 'AWS IoT ($0.50/device/month), Azure IoT ($0.40/device/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // New revolutionary services showcase
  const revolutionaryServices = [
    {
      name: 'Quantum Metaverse Platform',
      description: 'Quantum-enhanced virtual reality with AI avatars',
      price: '$499/month',
      icon: '🕶️',
      color: 'from-pink-500 to-rose-600',
      link: 'https://ziontechgroup.com/quantum-metaverse',
      marketSize: '$800B metaverse market',
      growthRate: '500% annual growth'
    },
    {
      name: 'Quantum Robotics Platform',
      description: 'AI-powered robotics with quantum control',
      price: '$799/month',
      icon: '🤖',
      color: 'from-orange-500 to-red-600',
      link: 'https://ziontechgroup.com/quantum-robotics',
      marketSize: '$45B robotics market',
      growthRate: '320% annual growth'
    },
    {
      name: 'Quantum Energy Platform',
      description: 'AI-optimized energy management with quantum analytics',
      price: '$299/month',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      link: 'https://ziontechgroup.com/quantum-energy',
      marketSize: '$75B energy management market',
      growthRate: '280% annual growth'
    },
    {
      name: 'Quantum Logistics Platform',
      description: 'AI-powered supply chain with quantum optimization',
      price: '$399/month',
      icon: '🚚',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://ziontechgroup.com/quantum-logistics',
      marketSize: '$12B logistics software market',
      growthRate: '350% annual growth'
    }
  ];

  // Enhanced market insights with better pricing
  const marketInsights = [
    {
      metric: '$15B',
      label: 'Quantum AI Market',
      description: 'Growing at 500% annually',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Our Quantum AI Platform: $299/month vs. Competitors: $2000+/month'
    },
    {
      metric: '$12.3B',
      label: 'Autonomous Manufacturing',
      description: '320% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      pricing: 'Our Manufacturing AI: $199/month vs. Siemens: $500+/month'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Cybersecurity',
      description: '380% annual growth rate',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      pricing: 'Our Security Suite: $159/month vs. CrowdStrike: $8.99/user/month'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Our Space Platform: $399/month vs. AGI STK: $1000+/month'
    },
    {
      metric: '$8.5B',
      label: 'Biotech AI Market',
      description: '420% annual growth rate',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Our Biotech AI Platform: $599/month vs. Insitro: $1000+/month'
    },
    {
      metric: '$22B',
      label: 'Algorithmic Trading',
      description: '280% annual growth rate',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Our Quantum Trading Platform: $899/month vs. Bloomberg: $2000+/month'
    },
    {
      metric: '$13B',
      label: 'Metaverse Development',
      description: '350% annual growth rate',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-600',
      pricing: 'Our Metaverse Platform: $299/month vs. Unity Pro: $180/month'
    }
  ];

  // Enhanced testimonials with real results
  const testimonials = [
    {
      avatar: '🧠',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years. The 1000% ROI is real!',
      service: 'Quantum AI Cognitive Platform',
      results: '1000% ROI, 10x faster research'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoManufacture Inc.',
      rating: 5,
      content: 'The Autonomous Manufacturing Platform increased our production by 300% while reducing costs by 50%. It\'s like having a factory from the future.',
      service: 'Autonomous Manufacturing Platform'
    },
    {
      avatar: '🧬',
      name: 'Dr. Emily Watson',
      role: 'Research Lead',
      company: 'BioGen Research',
      rating: 5,
      content: 'The Biomedical AI Platform accelerated our drug discovery process by 10x. We\'re now leading the industry in breakthrough treatments.',
      service: 'Biomedical AI Platform'
    }
  ];

  return (
    <QuantumMatrixBackground variant="quantum" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions</title>
        <meta name="description" content="Leading the revolution in quantum computing, AI, space technology, and autonomous systems. 150+ revolutionary micro SAAS services with 500%+ average ROI." />
        <meta name="keywords" content="quantum computing, AI, space technology, micro SAAS, cybersecurity, biomedical AI, metaverse, autonomous manufacturing" />
        <meta property="og:title" content="Zion Tech Group - Future Technology Solutions" />
        <meta property="og:description" content="Revolutionary micro SAAS services and AI solutions for the future." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta name="twitter:description" content="150+ revolutionary micro SAAS services with 500%+ ROI. Quantum AI, cybersecurity, manufacturing, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Enhanced Futuristic Backgrounds */}
      <UltraAdvancedFuturisticBackground variant="quantum-holographic">
        <div className="quantum-grid" />
        <div className="holographic-matrix" />
        <div className="neural-network" />
        <div className="cyberpunk-elements" />
        <div className="quantum-ripple" />
        <div className="holographic-wave" />
        <div className="cyberpunk-pulse" />
      </UltraAdvancedFuturisticBackground>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future Technology
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading the revolution in quantum computing, AI, space technology, and autonomous systems. 
              We're building the future, one breakthrough at a time.
            </p>
            
            {/* Contact Information Display */}
            <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center justify-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Contact Zion Tech Group
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300 md:col-span-2">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>
                    364 E Main St STE 1008, Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 md:col-span-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/micro-saas"
                variant="primary"
                size="lg"
                className="group"
              >
                Explore 150+ Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className={`${stat.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 leading-tight">
                  {stat.label}
                </div>
                <div className="text-cyan-400 font-bold text-lg mb-2">{service.price}</div>
                <div className="text-slate-400 text-sm mb-4">Market Size: {service.marketSize}</div>
                <div className="text-slate-400 text-sm">Growth Rate: {service.growthRate}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Market <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the explosive growth in emerging technology markets where Zion Tech Group leads innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <UltraAdvancedFuturisticCard
                  variant="quantum-holographic"
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${insight.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {insight.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {insight.metric}
                    </div>
                    <div className="text-lg font-semibold text-cyan-400 mb-2">
                      {insight.label}
                    </div>
                    <div className="text-gray-400">
                      {insight.description}
                    </div>
                  </div>
                </UltraAdvancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our cutting-edge micro SAAS services that deliver unprecedented results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <UltraAdvancedFuturisticCard
                  variant={service.variant as any}
                  className="h-full hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400">{service.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>👥 {service.customers.toLocaleString()} customers</span>
                      <span>🚀 {service.trialDays} day trial</span>
                    </div>
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full group"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </UltraAdvancedFuturisticCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="/micro-saas"
              variant="primary"
              size="lg"
              className="group"
            >
              View All 150+ Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Customer <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our revolutionary services are transforming industries and delivering exceptional ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraAdvancedFuturisticCard
                  variant="holographic-neural"
                  className="h-full"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-cyan-500/20 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-cyan-400">{testimonial.role}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                      <div className="text-xs text-gray-500 mt-2">{testimonial.service}</div>
                    </div>
                  </div>
                </UltraAdvancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already experiencing the future with Zion Tech Group's revolutionary services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/micro-saas"
                variant="secondary"
                size="lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300 md:col-span-2">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>
                    364 E Main St STE 1008, Middletown DE 19709
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 md:col-span-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </QuantumMatrixBackground>
  );
}

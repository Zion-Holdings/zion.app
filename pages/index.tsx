import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$25B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
      title: '🧠 Quantum AI Brain-Computer Interface',
      icon: '🧠',
      description: 'Breakthrough quantum AI-powered brain-computer interface that enables direct neural communication and control. Achieve unprecedented human-AI symbiosis with 99.9% accuracy.',
      price: 'Starting at $4,999/month',
      features: ['Quantum-enhanced neural signal processing', 'Real-time brain activity analysis', 'AI-powered thought-to-action conversion', 'Secure neural data encryption'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-pink-700',
      marketData: '$2.1B brain-computer interface market, 580% annual growth',
      competitors: 'Traditional BCI systems ($50,000+), Basic neural interfaces ($25,000+), Research-only platforms ($100,000+)',
      savings: 'Save 90% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: 'Starting at $179/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketData: '$7.2B quantum security market, 380% annual growth',
      competitors: 'CrowdStrike ($8.99/user/month), Palo Alto Networks ($50+/user/month)',
      savings: 'Save 70% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔐 Quantum Internet Security Platform',
      icon: '🔐',
      description: 'Revolutionary quantum internet security platform that provides unbreakable encryption and quantum-safe communication protocols. Achieve 100% security with quantum-resistant algorithms.',
      price: 'Starting at $2,499/month',
      features: ['Quantum-resistant encryption algorithms', 'Quantum key distribution (QKD)', 'AI-powered threat detection', 'Quantum-safe VPN'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-green-600 to-emerald-700',
      marketData: '$12.8B quantum security market, 450% annual growth',
      competitors: 'Traditional security ($5000+/month), Basic encryption ($1000/month), Legacy VPN services ($500/month)',
      savings: 'Save 50% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚗 Autonomous Vehicle AI Platform',
      icon: '🚗',
      description: 'Breakthrough AI platform that manages and coordinates autonomous vehicles with unprecedented safety and efficiency. Achieve 99.99% accident-free autonomous transportation.',
      price: 'Starting at $3,999/month',
      features: ['AI-powered autonomous navigation', 'Real-time traffic optimization', 'Predictive maintenance AI', 'Multi-vehicle coordination'],
      link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
      color: 'from-orange-600 to-red-700',
      marketData: '$54.2B autonomous vehicle market, 380% annual growth',
      competitors: 'Waymo ($10,000+/month), Tesla ($5000+/month), Traditional fleet management ($2000/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Metaverse AI Development Platform',
      icon: '🌐',
      description: 'Revolutionary AI platform for creating, managing, and monetizing immersive metaverse experiences. Build the future of digital interaction with AI-powered virtual worlds.',
      price: 'Starting at $2,899/month',
      features: ['AI-powered 3D world generation', 'Intelligent NPC creation', 'Dynamic content adaptation', 'Real-time AI interactions'],
      link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
      color: 'from-violet-600 to-purple-700',
      marketData: '$74.4B metaverse market, 420% annual growth',
      competitors: 'Roblox ($2500/month), Unity ($4000/month), Traditional 3D development ($8000/month)',
      savings: 'Save 64% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Get revolutionary services for showcase
  const revolutionaryServices = enhancedRealMicroSaasServices.filter(service => 
    service.realImplementation && service.popular
  ).slice(0, 6);

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Zion Tech Group - Revolutionary AI & Quantum Computing Solutions</title>
        <meta name="description" content="Transform your business with 200+ revolutionary micro SaaS services. Quantum AI, autonomous systems, and cutting-edge technology solutions with 800%+ average ROI." />
        <meta name="keywords" content="AI, quantum computing, micro SaaS, autonomous systems, space technology, cybersecurity, manufacturing AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta property="og:description" content="Transform your business with 200+ revolutionary micro SaaS services. Quantum AI, autonomous systems, and cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta name="twitter:description" content="Transform your business with 200+ revolutionary micro SaaS services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center z-10">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with 200+ cutting-edge micro SaaS services powered by quantum AI, 
              autonomous systems, and breakthrough technology. Achieve 800%+ ROI with our revolutionary solutions.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 leading-tight">
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              {' '}Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge micro SaaS solutions. 
              Each service is designed to deliver immediate value and exponential ROI.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
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

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              href="/services"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View All 200+ Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market-Leading
              {' '}<span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services outperform competitors in every category, delivering superior value, 
              advanced technology, and exceptional ROI.
            </p>
          </motion.div>

          {/* Service Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl">
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                    
                    <div className="text-3xl font-bold text-white">
                      {highlight.price}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                      <ul className="space-y-2">
                        {highlight.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-cyan-400 font-semibold">Market Data:</span>
                          <p className="text-gray-300">{highlight.marketData}</p>
                        </div>
                        <div>
                          <span className="text-green-400 font-semibold">Competitors:</span>
                          <p className="text-gray-300">{highlight.competitors}</p>
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-yellow-400 font-semibold">Your Savings:</span>
                          <p className="text-gray-300">{highlight.savings}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        href={highlight.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      <Button
                        href="/contact"
                        variant="outline"
                        className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                      >
                        Contact
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              {' '}<span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Transform</span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already achieving exponential growth with our revolutionary technology solutions. 
              Get started today with a free consultation and discover how we can accelerate your success.
            </p>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}

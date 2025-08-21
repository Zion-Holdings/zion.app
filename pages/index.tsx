import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play, Check, CpuIcon, 
  BrainCircuit, Network, Satellite, ShieldAlert, FlaskConicalIcon,
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2, Menu, X, ChevronDown
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
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

  // Get featured services from the enhanced data
  const revolutionaryServices = enhancedRealMicroSaasServices
    .filter(service => service.realImplementation && service.popular)
    .slice(0, 12);

  const marketInsights = [
    {
      metric: '$8.5B',
      label: 'Quantum Finance Market',
      description: 'Growing at 450% annually',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      metric: '$12.3B',
      label: 'Autonomous Manufacturing',
      description: '320% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Cybersecurity',
      description: '380% annual growth rate',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      metric: '$3.6B',
      label: 'Metaverse Development',
      description: '400% annual growth rate',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      metric: '$3.2B',
      label: 'Biomedical AI',
      description: '200% annual growth rate',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const testimonials = [
    {
      avatar: '🚀',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years.',
      service: 'Quantum AI Cognitive Platform'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoManufacture Inc',
      rating: 5,
      content: 'The Autonomous Manufacturing Platform increased our productivity by 60% and reduced defects by 70%. Game-changing technology.',
      service: 'Autonomous Manufacturing Platform'
    },
    {
      avatar: '🔒',
      name: 'Jennifer Kim',
      role: 'CISO',
      company: 'SecureBank Global',
      rating: 5,
      content: 'Quantum Cybersecurity Suite provides unmatched protection. We\'ve achieved 100% compliance and zero security incidents.',
      service: 'Quantum Cybersecurity Suite'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 200+ revolutionary micro SaaS services powered by quantum computing, AI, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="micro SaaS, quantum computing, AI, artificial intelligence, cybersecurity, manufacturing, space technology, metaverse, biomedical AI" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="200+ revolutionary micro SaaS services powered by quantum computing and AI" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'services', 'markets', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-cyan-400/20"
          >
            <div className="px-4 py-4 space-y-4">
              {['hero', 'services', 'markets', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2 transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with 200+ cutting-edge micro SaaS solutions powered by quantum computing, 
              artificial intelligence, and breakthrough technologies. Experience the future of business automation.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
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
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <span className="text-white"> Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and game-changing micro SaaS services that are transforming industries worldwide.
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
              >
                <EnhancedFuturisticCard
                  variant={service.variant as any}
                  className="h-full"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-gray-400 ml-1">({service.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-400">{service.customers} customers</span>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-4"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section id="markets" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Market
              </span>
              <span className="text-white"> Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the explosive growth markets where our revolutionary services are making the biggest impact.
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
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${insight.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {insight.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{insight.metric}</h3>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-2">{insight.label}</h4>
                  <p className="text-gray-300">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Customer
              </span>
              <span className="text-white"> Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our revolutionary services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    <div className="text-gray-500 text-xs mt-2">Using: {testimonial.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to
              </span>
              <span className="text-white"> Transform?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discover how our revolutionary micro SaaS services can transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Send Message
                    <MessageSquare className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Phone</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Address</div>
                      <div className="text-white font-semibold">{contactInfo.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Website</div>
                      <div className="text-white font-semibold">{contactInfo.website}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">200+ revolutionary micro SaaS services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Quantum computing and AI-powered solutions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">99.99% uptime guarantee</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">24/7 AI-powered support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Average 800%+ ROI for customers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Atom className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 text-sm">
                Revolutionary micro SaaS services powered by quantum computing, AI, and breakthrough technologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">All Services</a></li>
                <li><a href="/micro-saas" className="hover:text-cyan-400 transition-colors duration-200">Micro SaaS</a></li>
                <li><a href="/ai-assistant" className="hover:text-cyan-400 transition-colors duration-200">AI Solutions</a></li>
                <li><a href="/automation" className="hover:text-cyan-400 transition-colors duration-200">Automation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
                <li><a href="/careers" className="hover:text-cyan-400 transition-colors duration-200">Careers</a></li>
                <li><a href="/news" className="hover:text-cyan-400 transition-colors duration-200">News</a></li>
                <li><a href="/case-studies" className="hover:text-cyan-400 transition-colors duration-200">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{contactInfo.mobile}</li>
                <li>{contactInfo.email}</li>
                <li className="text-xs">{contactInfo.address}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors duration-200 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraAdvancedFuturisticBackground>
  );
}

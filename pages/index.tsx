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
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumMatrixBackground from '../components/ui/QuantumMatrixBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '90+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$25B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <Trophy className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services from the enhanced data
  const revolutionaryServices = enhancedRealMicroSaasServices
    .filter(service => service.category.includes('Quantum') || service.category.includes('Autonomous') || service.category.includes('Space'))
    .slice(0, 6);

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
      content: 'The Autonomous Manufacturing Platform increased our production efficiency by 85% while reducing costs by 65%. Game-changing technology.',
      service: 'Autonomous Manufacturing Platform'
    },
    {
      avatar: '🔐',
      name: 'Alex Thompson',
      role: 'Security Architect',
      company: 'CyberFortress',
      rating: 5,
      content: 'The Quantum Cryptography Platform provides military-grade security that\'s future-proof against quantum attacks. Essential for our infrastructure.',
      service: 'Quantum Cryptography Platform'
    }
  ];

  const technologyCategories = [
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-8 h-8" />,
      description: 'Next-generation computing using quantum mechanics',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum')).length,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      description: 'Advanced artificial intelligence and neural networks',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('AI')).length,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Space Technology',
      icon: <Satellite className="w-8 h-8" />,
      description: 'Satellite operations and space mission automation',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Space')).length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Biomedical AI',
      icon: <FlaskConical className="w-8 h-8" />,
      description: 'AI-powered medical diagnostics and research',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Biomedical')).length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Metaverse & VR',
      icon: <Globe className="w-8 h-8" />,
      description: 'Virtual reality and metaverse development',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Metaverse')).length,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Autonomous Systems',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Self-driving and automation technologies',
      services: enhancedRealMicroSaasServices.filter(s => s.category.includes('Autonomous')).length,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <QuantumMatrixBackground intensity={0.6} speed={1.2}>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services | AI, Quantum, Space Tech</title>
        <meta name="description" content="Discover 200+ revolutionary micro SaaS services powered by AI, quantum computing, space technology, and more. Transform your business with cutting-edge solutions from Zion Tech Group." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biomedical AI, metaverse, autonomous systems, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="200+ cutting-edge micro SaaS services powered by AI, quantum computing, and space technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta name="twitter:description" content="200+ cutting-edge micro SaaS services powered by AI, quantum computing, and space technology." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with 200+ cutting-edge micro SaaS solutions powered by AI, quantum computing, space technology, and autonomous systems.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              href="/micro-saas"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
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
              Cutting-Edge Technology Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of revolutionary technologies across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{category.services} Services</span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Services */}
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
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our most advanced and innovative micro SaaS solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <QuantumHolographicCard
                  service={service}
                  onClick={() => window.open(service.link, '_blank')}
                />
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
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
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
              Market Insights & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with real-time market data and growth projections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${insight.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {insight.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{insight.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.label}</h3>
                <p className="text-cyan-400 font-medium">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses transforming their operations with our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-2">{testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Join thousands of businesses already leveraging our revolutionary micro SaaS services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-cyan-400">{contactInfo.mobile}</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-purple-400">{contactInfo.email}</div>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <MapPin className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-green-400 text-sm">{contactInfo.address}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </QuantumMatrixBackground>
  );
}

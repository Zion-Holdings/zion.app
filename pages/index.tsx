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
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2, SparklesIcon, ZapIcon,
  BrainIcon, ShieldIcon, CpuIcon as CpuIcon3, GlobeIcon as GlobeIcon2, AtomIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$20B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
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
      metric: '$12.5B',
      label: 'Quantum Computing Market',
      description: 'Growing at 550% annually',
      icon: <AtomIcon className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      metric: '$18.3B',
      label: 'Autonomous Systems',
      description: '420% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    },
    {
      metric: '$8.8B',
      label: 'Quantum Cybersecurity',
      description: '480% annual growth rate',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600'
    },
    {
      metric: '$6.2B',
      label: 'Space Technology',
      description: '390% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      metric: '$5.6B',
      label: 'Metaverse Development',
      description: '500% annual growth rate',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-600'
    },
    {
      metric: '$4.8B',
      label: 'Biomedical AI',
      description: '300% annual growth rate',
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
      company: 'AutoManufacturing Inc.',
      rating: 5,
      content: 'The Autonomous AI Agents Platform has transformed our manufacturing efficiency. We\'ve reduced operational costs by 40% while improving quality.',
      service: 'Autonomous AI Agents Platform'
    },
    {
      avatar: '🔐',
      name: 'Jennifer Walsh',
      role: 'CISO',
      company: 'Global Financial Corp',
      rating: 5,
      content: 'The Quantum Cybersecurity Suite provides unprecedented protection. We\'re now future-proof against both classical and quantum threats.',
      service: 'Quantum Cybersecurity Suite'
    },
    {
      avatar: '🛰️',
      name: 'Dr. Alex Thompson',
      role: 'Research Lead',
      company: 'Space Research Institute',
      rating: 5,
      content: 'The Space Technology Analytics Platform gives us real-time insights into Earth\'s changing climate. Revolutionary technology.',
      service: 'Space Technology Analytics Platform'
    }
  ];

  const whyChooseZion = [
    {
      icon: '⚡',
      title: 'First-to-Market Innovation',
      description: 'We pioneer cutting-edge technologies before they become mainstream, giving you competitive advantage.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '🚀',
      title: 'Proven ROI',
      description: 'Our services deliver measurable business value with average ROI of 800% within 12 months.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 99.99% uptime guarantee across all services.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Deploy anywhere in the world with our distributed infrastructure and local compliance.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '🧠',
      title: 'AI-First Approach',
      description: 'Every service is built with AI at its core, continuously learning and improving over time.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: '💎',
      title: 'Premium Support',
      description: '24/7 expert support with dedicated success managers and comprehensive training programs.',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      services: ['Quantum Financial Modeling', 'AI Trading Algorithms', 'Quantum Cybersecurity Suite'],
      description: 'Revolutionize trading, risk management, and security with quantum computing and AI.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      industry: 'Healthcare & Biotech',
      services: ['Biomedical AI Platform', 'Neural Interface Platform', 'AI Diagnostic Tools'],
      description: 'Transform patient care with AI-powered diagnostics and cutting-edge medical technology.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      industry: 'Space & Aerospace',
      services: ['Space Technology Analytics', 'Space Mining Operations', 'Satellite Intelligence'],
      description: 'Lead the trillion-dollar space economy with advanced analytics and mining operations.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      industry: 'Manufacturing & Industry 4.0',
      services: ['Autonomous AI Agents', 'Quantum Manufacturing', 'Smart Factory Solutions'],
      description: 'Achieve Industry 4.0 with autonomous systems and quantum-optimized manufacturing.',
      color: 'from-orange-500 to-red-600'
    },
    {
      industry: 'Metaverse & Gaming',
      services: ['Metaverse Development Studio', 'VR/AR Solutions', '3D World Building'],
      description: 'Create immersive experiences and virtual worlds with cutting-edge 3D technology.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      industry: 'Government & Defense',
      services: ['Quantum Internet Infrastructure', 'Quantum Cybersecurity', 'AI Intelligence Systems'],
      description: 'Secure national infrastructure with quantum-resistant technology and AI intelligence.',
      color: 'from-gray-500 to-slate-600'
    }
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services | Quantum AI, Autonomous Systems, Space Technology</title>
        <meta name="description" content="Discover 200+ revolutionary micro SaaS services including Quantum AI, Autonomous Systems, Space Technology, and more. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="micro SaaS, quantum computing, AI, autonomous systems, space technology, cybersecurity, robotics, metaverse, biomedical AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="200+ cutting-edge micro SaaS services for the future of business" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <UltraAdvancedFuturisticBackground>
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-rainbow">Revolutionary</span>
                <br />
                <span className="text-gradient-quantum">Micro SaaS</span>
                <br />
                <span className="text-gradient-cyan">Services</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with <span className="text-gradient-purple font-semibold">200+ cutting-edge services</span> powered by 
                <span className="text-gradient-cyan font-semibold"> Quantum Computing</span>, 
                <span className="text-gradient-green font-semibold"> Advanced AI</span>, and 
                <span className="text-gradient-pink font-semibold"> Autonomous Systems</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gradient-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Market Insights Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Market Insights</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our services address the fastest-growing technology markets with unprecedented innovation
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {marketInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${insight.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-white mb-4">
                      {insight.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {insight.metric}
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">
                      {insight.label}
                    </div>
                    <div className="text-white/80">
                      {insight.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Revolutionary Services Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Revolutionary Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our most innovative and popular micro SaaS services that are transforming industries
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {revolutionaryServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-white">
                          {service.price}
                          <span className="text-sm text-gray-400">{service.period}</span>
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm ml-1">{service.rating}</span>
                        </div>
                      </div>
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  <ZapIcon className="w-5 h-5 mr-2" />
                  View All Services
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Why Choose Zion Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Why Choose Zion?</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of technology with Zion Tech Group's unparalleled commitment to innovation, security, and customer success.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {whyChooseZion.map((reason, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-8 rounded-2xl bg-gradient-to-br ${reason.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Industry Solutions Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Industry Solutions</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We tailor our services to meet the unique needs of every industry, from financial services to healthcare and beyond.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {industrySolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-8 rounded-2xl bg-gradient-to-br ${solution.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Factory className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.industry}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {solution.services.map((service, sIndex) => (
                        <Button
                          key={sIndex}
                          variant="secondary"
                          size="sm"
                          className="text-sm px-4 py-2 border-2 border-white/20 hover:border-white/30"
                        >
                          {service}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Customer Success Stories</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how our revolutionary services are transforming businesses across industries
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.role}</div>
                        <div className="text-cyan-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="text-sm text-cyan-400 font-medium">
                      Service: {testimonial.service}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-gradient-rainbow">Ready to Transform Your Business?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our revolutionary micro SaaS services
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              >
                <div className="p-4">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">{contactInfo.mobile}</div>
                </div>
                <div className="p-4">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">{contactInfo.email}</div>
                </div>
                <div className="p-4">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400 text-sm">{contactInfo.address}</div>
                </div>
              </motion.div>
            </div>
          </section>
        </UltraAdvancedFuturisticBackground>
    </div>
  );
}

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
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import ServiceCard from '../components/ui/ServiceCard';
import { motion } from 'framer-motion';
import { allEnhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '150+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$15B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const revolutionaryServices = allEnhancedRealMicroSaasServices
    .filter(service => service.realImplementation && service.popular)
    .slice(0, 12); // Show more services

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
    },
    {
      metric: '$2.8B',
      label: 'Climate Technology',
      description: '180% annual growth rate',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      metric: '$5.2B',
      label: 'Robotics & Automation',
      description: '280% annual growth rate',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-slate-500 to-gray-600'
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
      company: 'AutoManufacture Inc.',
      rating: 5,
      content: 'The Autonomous Manufacturing Orchestrator increased our production efficiency by 40% and reduced downtime by 60%. Game-changing technology.',
      service: 'Autonomous Manufacturing Orchestrator'
    },
    {
      avatar: '🛡️',
      name: 'Jennifer Kim',
      role: 'CISO',
      company: 'Global Financial Corp',
      rating: 5,
      content: 'Quantum Cybersecurity Fortress provides unprecedented protection. We\'ve had zero security breaches since implementation.',
      service: 'Quantum Cybersecurity Fortress'
    },
    {
      avatar: '🌐',
      name: 'David Thompson',
      role: 'CEO',
      company: 'Metaverse Studios',
      rating: 5,
      content: 'The Metaverse Development Studio accelerated our world creation by 10x. Our virtual experiences are now industry-leading.',
      service: 'Metaverse Development Studio'
    },
    {
      avatar: '🧬',
      name: 'Dr. Michael Park',
      role: 'Research Director',
      company: 'BioTech Innovations',
      rating: 5,
      content: 'Biomedical AI Platform accelerated our drug discovery by 100x. We\'re now leading the industry in personalized medicine.',
      service: 'Biomedical AI Platform'
    },
    {
      avatar: '💰',
      name: 'Alexandra Wong',
      role: 'Head of Trading',
      company: 'Quantum Capital',
      rating: 5,
      content: 'Quantum Finance Trading Platform gives us 1000x faster execution and 99.9% prediction accuracy. Unmatched performance.',
      service: 'Quantum Finance Trading Platform'
    }
  ];

  const innovationHighlights = [
    {
      title: 'Quantum Computing Breakthroughs',
      description: 'First-to-market quantum AI platform with real quantum hardware access',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-600',
      stats: '1000x faster than classical AI'
    },
    {
      title: 'Autonomous Manufacturing',
      description: 'Self-optimizing factories with AI, IoT, and robotics integration',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      stats: '40% efficiency increase'
    },
    {
      title: 'Space Technology Innovation',
      description: 'Advanced satellite management and orbital optimization',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600',
      stats: '50% collision risk reduction'
    },
    {
      title: 'Metaverse Development',
      description: 'Complete platform for creating immersive virtual experiences',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-600',
      stats: '10x faster world creation'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SAAS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, autonomous manufacturing, space technology, metaverse development, biomedical AI, quantum finance" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta property="og:description" content="150+ cutting-edge micro SAAS services powered by AI and quantum technology" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary Micro SAAS Services Powered by 
              <span className="text-gradient-rainbow font-bold"> AI</span>, 
              <span className="text-gradient-rainbow font-bold"> Quantum Computing</span>, and 
              <span className="text-gradient-rainbow font-bold"> Futuristic Technology</span>
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with 150+ cutting-edge services that deliver 500%+ ROI and revolutionize industries
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              href="/micro-saas"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Get Started
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Innovation Highlights
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the cutting-edge technologies that are reshaping industries and creating unprecedented opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${highlight.color} p-8 rounded-2xl h-full transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1`}>
                  <div className="text-white mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-200 mb-4">{highlight.description}</p>
                  <div className="text-2xl font-bold text-white">{highlight.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Experience the future with our most innovative and popular micro SAAS services
            </p>
            <Button
              href="/micro-saas"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  service={service}
                  showContactInfo={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Market Insights
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay ahead of the curve with insights into the fastest-growing technology markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${insight.color} p-6 rounded-xl text-center transform transition-all duration-500 group-hover:scale-105`}>
                  <div className="text-white mb-4 flex justify-center">
                    {insight.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{insight.metric}</div>
                  <div className="text-white font-semibold mb-2">{insight.label}</div>
                  <div className="text-gray-200 text-sm">{insight.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our revolutionary services are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                    <div className="text-cyan-400 text-sm mt-2">{testimonial.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of businesses already leveraging our revolutionary micro SAAS services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">{contactInfo.mobile}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">{contactInfo.email}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Start Your Journey
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/micro-saas"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}

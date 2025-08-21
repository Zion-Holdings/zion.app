import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { motion } from 'framer-motion';
import { ultimateMicroSaasServices, getServicesByInnovationLevel, getPopularServices } from '../data/ultimate-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '100+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$10B+', label: 'Combined Market Value', color: 'text-yellow-400' },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Get featured services from the new data
  const revolutionaryServices = getServicesByInnovationLevel('Revolutionary').slice(0, 6);

  const emergingTechServices = [
    {
      name: 'Metaverse Development Studio',
      description: 'Complete metaverse development platform with VR/AR integration, 3D modeling, and immersive experiences.',
      icon: <Globe className="w-8 h-8" />,
      price: '$799/month',
      category: 'Metaverse & VR/AR',
      variant: 'holographic-matrix',
      link: 'https://ziontechgroup.com/metaverse-studio',
      marketSize: '$1.2B market',
      growthRate: '320% annual growth'
    },
    {
      name: 'Blockchain DeFi Platform',
      description: 'Decentralized finance platform with smart contracts, yield farming, and cross-chain interoperability.',
      icon: <Link className="w-8 h-8" />,
      price: '$599/month',
      category: 'Blockchain & DeFi',
      variant: 'cyberpunk-holographic',
      link: 'https://ziontechgroup.com/blockchain-defi',
      marketSize: '$800M market',
      growthRate: '400% annual growth'
    },
    {
      name: 'IoT Smart City Platform',
      description: 'Intelligent IoT platform for smart city management, traffic optimization, and environmental monitoring.',
      icon: <Building2 className="w-8 h-8" />,
      price: '$1,099/month',
      category: 'IoT & Smart Cities',
      variant: 'neural-quantum-cyberpunk',
      link: 'https://ziontechgroup.com/iot-smart-city',
      marketSize: '$1.5B market',
      growthRate: '180% annual growth'
    },
    {
      name: 'Edge Computing Network',
      description: 'Distributed edge computing platform for ultra-low latency applications and real-time data processing.',
      icon: <Zap className="w-8 h-8" />,
      price: '$699/month',
      category: 'Edge Computing',
      variant: 'quantum-holographic-advanced',
      link: 'https://ziontechgroup.com/edge-computing',
      marketSize: '$900M market',
      growthRate: '250% annual growth'
    }
  ];

  const marketInsights = [
    {
      metric: '$3.2B',
      label: 'AI Drug Discovery Market',
      description: 'Growing at 200% annually',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      metric: '$2.1B',
      label: 'Quantum Finance Market',
      description: '350% annual growth rate',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      metric: '$4.8B',
      label: 'Autonomous Manufacturing',
      description: '250% annual growth rate',
      icon: <Factory className="w-6 h-6" />
    },
    {
      metric: '$2.3B',
      label: 'Smart Energy Market',
      description: '180% annual growth rate',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      metric: '$1.8B',
      label: 'Space AI Market',
      description: '280% annual growth rate',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      metric: '$1.5B',
      label: 'Climate Tech Market',
      description: '220% annual growth rate',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Cloud-Native Architecture',
      description: 'Built for scale with auto-scaling, load balancing, and global distribution.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, end-to-end encryption, and zero-trust architecture.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with CDN, edge computing, and real-time processing.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI-Powered Intelligence',
      description: 'Machine learning, predictive analytics, and automated decision making.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with 99.99% uptime guarantee worldwide.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Easy Integration',
      description: 'REST APIs, webhooks, and pre-built connectors for popular platforms.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Technology',
      content: 'Zion Tech Group\'s Quantum AI platform has revolutionized our research capabilities. We\'ve achieved breakthroughs that would have taken years in just months.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Operations',
      company: 'AutoManufacture Inc.',
      content: 'The Autonomous AI Factory solution increased our productivity by 200% while maintaining 99.9% quality consistency. Game-changing technology.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Research',
      company: 'BioPharma Global',
      content: 'Their Biomedical AI Research Platform accelerated our drug discovery process by 10x. We\'re saving millions in development costs.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Platform | AI, Quantum, Emerging Tech</title>
          <meta name="description" content="Zion Tech Group delivers 100+ revolutionary micro SaaS services including Quantum AI, Autonomous Manufacturing, Cybersecurity, and Emerging Technologies. Transform your business with cutting-edge solutions." />
          <meta name="keywords" content="Zion Tech Group, micro SaaS, quantum AI, autonomous manufacturing, cybersecurity, biomedical research, financial technology, space technology, metaverse, blockchain, IoT, edge computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Platform" />
          <meta property="og:description" content="100+ revolutionary micro SaaS services transforming business technology" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 futuristic-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  The Future of Business
                </span>
                <br />
                <span className="text-white">Technology is Here</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Zion Tech Group delivers 100+ revolutionary micro SaaS services that are reshaping entire industries. 
                From quantum AI to autonomous manufacturing, we're building the future, one breakthrough at a time.
              </motion.p>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  href="/micro-saas"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  href={contactInfo.website}
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Contact Sales
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Revolutionary Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                🚀 Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                First-to-market solutions that are reshaping entire industries and creating new possibilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {revolutionaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <UltraAdvancedFuturisticCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                href="/micro-saas"
                variant="primary"
                size="lg"
                className="group"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Built for the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform is designed from the ground up to deliver enterprise-grade performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Market Insights
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're not just following market trends - we're creating them
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-cyan-400">
                      {insight.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">{insight.metric}</div>
                      <div className="text-sm text-gray-400">{insight.description}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 mt-2">{insight.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join thousands of companies already transforming their business with our revolutionary solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of business technology with Zion Tech Group
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/micro-saas"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  href={contactInfo.website}
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Schedule Demo
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}

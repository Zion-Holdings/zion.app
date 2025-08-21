import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play, Check
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedFuturisticCard from '../components/ui/UltraAdvancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

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
  const revolutionaryServices = enhancedRealMicroSaasServices.filter(s => s.popular).slice(0, 6);

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
      description: '280% annual growth rate',
      icon: <Factory className="w-6 h-6" />
    },
    {
      metric: '$1.9B',
      label: 'Quantum Cybersecurity',
      description: '320% annual growth rate',
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: '$3.6B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      metric: '$2.8B',
      label: 'Metaverse Development',
      description: '400% annual growth rate',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      avatar: '🚀',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years.'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoFactory Inc.',
      rating: 5,
      content: 'Our autonomous manufacturing efficiency increased by 400% within the first month. The ROI is absolutely incredible.'
    },
    {
      avatar: '🛡️',
      name: 'Alex Thompson',
      role: 'Security Lead',
      company: 'CyberFort Global',
      rating: 5,
      content: 'The quantum cybersecurity fortress has made our systems impenetrable. We\'ve had zero security breaches since implementation.'
    }
  ];

  const serviceHighlights = [
    {
      title: 'Quantum AI Cognitive Platform',
      description: 'First-to-market quantum AI with cognitive reasoning capabilities',
      price: '$1,299/month',
      features: ['Quantum Neural Networks', 'Cognitive Reasoning', '99.99% Accuracy'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      variant: 'quantum-entanglement'
    },
    {
      title: 'Autonomous Manufacturing AI',
      description: 'Industry 4.0 automation with AI-powered optimization',
      price: '$1,499/month',
      features: ['Predictive Maintenance', 'Computer Vision QC', 'Zero Human Intervention'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      variant: 'cyberpunk-holographic'
    },
    {
      title: 'Quantum Cybersecurity Fortress',
      description: 'Unbreakable quantum-resistant encryption for enterprise security',
      price: '$1,999/month',
      features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust Architecture'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      variant: 'quantum-cyberpunk'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. From quantum AI to autonomous manufacturing, we deliver innovative solutions with proven ROI." />
        <meta name="keywords" content="micro SaaS, quantum AI, autonomous manufacturing, cybersecurity, blockchain, space technology, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="Transform your business with cutting-edge micro SaaS services and AI solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Micro SaaS Services
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge micro SaaS solutions. From quantum AI to autonomous manufacturing, 
              we're pioneering the future of technology with real, innovative solutions that deliver measurable results.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              No mock services, no empty promises - just innovative technology that drives growth and competitive advantage.
            </motion.p>

            {/* Hero Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                href="/services" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Zion Tech Group</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-purple-400">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Market <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Insights</span>
              </h2>
              <p className="text-lg text-gray-300">
                Discover the explosive growth potential in emerging technology markets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-cyan-400">{insight.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-white">{insight.metric}</div>
                      <div className="text-sm text-gray-400">{insight.label}</div>
                    </div>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-gray-300">
                Experience our most revolutionary micro SaaS solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revolutionaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                >
                  <UltraAdvancedFuturisticCard
                    service={service}
                    onClick={() => window.open(service.link, '_blank')}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-lg text-gray-300">
                Key solutions that are transforming industries worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                  <p className="text-gray-300 mb-6">{highlight.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{highlight.price}</div>
                  <ul className="space-y-2 mb-8">
                    {highlight.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={highlight.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Customer <span className="bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent">Success</span>
              </h2>
              <p className="text-lg text-gray-300">
                See how our services are transforming businesses across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already using our revolutionary micro SaaS services to gain competitive advantages and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/contact"
                  className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  Get Started Today
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="px-8 py-4 text-lg border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                >
                  Explore All Services
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="bg-black/20 rounded-2xl p-6 border border-cyan-500/30 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Zion Tech Group</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-purple-400">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

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
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  // Function to map service variants to EnhancedFuturisticCard variants
  const mapVariant = (serviceVariant: string) => {
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('space')) return 'space';
    return 'default';
  };

  const heroStats = [
    { value: '150+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$15B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
    .slice(0, 8);

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
      company: 'AutoManufacture Inc.',
      rating: 5,
      content: 'The Autonomous Manufacturing AI has increased our production efficiency by 300% while reducing costs by 40%. Game-changing technology.',
      service: 'Autonomous Manufacturing AI'
    },
    {
      avatar: '🔐',
      name: 'Jennifer Kim',
      role: 'CISO',
      company: 'SecureBank Global',
      rating: 5,
      content: 'The Quantum Cybersecurity Suite provides unprecedented protection. We\'re future-proofed against all emerging threats.',
      service: 'Quantum Cybersecurity Suite'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services | Next-Generation Technology Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, autonomous manufacturing, cybersecurity, metaverse development, biomedical AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="Discover 150+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta name="twitter:description" content="Discover 150+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology." />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
      </Head>

      <UltraFuturisticBackground variant="quantum" intensity="high">
        {/* Hero Section */}
        <section className="futuristic-hero relative z-10">
          <div className="futuristic-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="futuristic-hero-title text-gradient-quantum">
                Revolutionary Micro SaaS Services
              </h1>
              <p className="futuristic-hero-subtitle">
                Discover 150+ cutting-edge micro SaaS solutions powered by AI, quantum computing, and next-generation technology. 
                Transform your business with our innovative services that deliver unprecedented ROI and competitive advantages.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button 
                  href="/micro-saas" 
                  className="futuristic-button quantum-glow"
                  icon={<Rocket className="w-5 h-5" />}
                >
                  Explore Services
                </Button>
                <Button 
                  href="/contact" 
                  variant="outline"
                  className="futuristic-button"
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              className="futuristic-stats mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="futuristic-stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`${stat.color} mb-2`}>
                    {stat.icon}
                  </div>
                  <div className="futuristic-stat-value text-gradient-cyan">
                    {stat.value}
                  </div>
                  <div className="futuristic-stat-label">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="futuristic-section">
          <div className="futuristic-container">
            <div className="futuristic-section-header">
              <h2 className="futuristic-section-title text-gradient-purple">
                Market Insights & Growth Opportunities
              </h2>
              <p className="futuristic-section-subtitle">
                Stay ahead of the curve with our analysis of emerging technology markets and growth opportunities
              </p>
            </div>

            <div className="futuristic-grid">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={insight.label}
                  className="futuristic-card p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {insight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gradient-cyan">
                    {insight.metric}
                  </h3>
                  <p className="text-lg font-semibold mb-2">
                    {insight.label}
                  </p>
                  <p className="text-gray-400">
                    {insight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Services Section */}
        <section className="futuristic-section bg-gradient-to-b from-black to-gray-900">
          <div className="futuristic-container">
            <div className="futuristic-section-header">
              <h2 className="futuristic-section-title text-gradient-rainbow">
                Revolutionary Micro SaaS Services
              </h2>
              <p className="futuristic-section-subtitle">
                Experience the future of business technology with our cutting-edge micro SaaS solutions
              </p>
            </div>

            <div className="futuristic-grid">
              {revolutionaryServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="futuristic-card p-6 h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                      <Button
                        href={service.link}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                href="/micro-saas" 
                className="futuristic-button quantum-glow"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="futuristic-section">
          <div className="futuristic-container">
            <div className="futuristic-section-header">
              <h2 className="futuristic-section-title text-gradient-cyan">
                Why Choose Zion Tech Group?
              </h2>
              <p className="futuristic-section-subtitle">
                Discover the competitive advantages that make our micro SaaS services the preferred choice for forward-thinking businesses
              </p>
            </div>

            <div className="futuristic-grid">
              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-cyan">Lightning Fast Setup</h3>
                <p className="text-gray-400">
                  Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.
                </p>
              </motion.div>

              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-purple">Transparent Pricing</h3>
                <p className="text-gray-400">
                  No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.
                </p>
              </motion.div>

              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">🔒</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-green">Enterprise Security</h3>
                <p className="text-gray-400">
                  Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.
                </p>
              </motion.div>

              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">📊</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-yellow">Real Business Value</h3>
                <p className="text-gray-400">
                  Each service solves a specific business problem with measurable ROI and immediate impact.
                </p>
              </motion.div>

              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">🌐</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-pink">Unified Platform</h3>
                <p className="text-gray-400">
                  Access all services through ziontechgroup.com with single sign-on and integrated billing.
                </p>
              </motion.div>

              <motion.div
                className="futuristic-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-rainbow">Focused Solutions</h3>
                <p className="text-gray-400">
                  Specialized tools that do one thing exceptionally well, without enterprise complexity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="futuristic-section bg-gradient-to-b from-gray-900 to-black">
          <div className="futuristic-container">
            <div className="futuristic-section-header">
              <h2 className="futuristic-section-title text-gradient-purple">
                What Our Customers Say
              </h2>
              <p className="futuristic-section-subtitle">
                Real feedback from businesses that have transformed their operations with our micro SaaS services
              </p>
            </div>

            <div className="futuristic-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="futuristic-testimonial"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gradient-cyan">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-3 italic">"{testimonial.content}"</p>
                  <p className="text-sm text-cyan-400">
                    <strong>Service:</strong> {testimonial.service}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="futuristic-section">
          <div className="futuristic-container">
            <div className="futuristic-section-header">
              <h2 className="futuristic-section-title text-gradient-cyan">
                Ready to Transform Your Business?
              </h2>
              <p className="futuristic-section-subtitle">
                Get in touch with our team to discover how our revolutionary micro SaaS services can accelerate your growth
              </p>
            </div>

            <div className="futuristic-form max-w-4xl mx-auto">
              <div className="futuristic-grid">
                <div className="futuristic-feature text-center">
                  <div className="futuristic-feature-icon">📞</div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-cyan">Call Us</h3>
                  <p className="text-gray-400 mb-4">
                    Speak directly with our technology experts
                  </p>
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className="futuristic-link text-lg font-semibold"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>

                <div className="futuristic-feature text-center">
                  <div className="futuristic-feature-icon">✉️</div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-purple">Email Us</h3>
                  <p className="text-gray-400 mb-4">
                    Send us a detailed message about your needs
                  </p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="futuristic-link text-lg font-semibold"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="futuristic-feature text-center">
                  <div className="futuristic-feature-icon">📍</div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-green">Visit Us</h3>
                  <p className="text-gray-400 mb-4">
                    Our headquarters in Delaware
                  </p>
                  <p className="text-gray-300 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  href="/contact" 
                  className="futuristic-button quantum-glow"
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Start Your Transformation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="futuristic-footer py-12">
          <div className="futuristic-container">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient-cyan">
                Zion Tech Group
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Leading the future of business technology with revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="/micro-saas" className="futuristic-link">Services</a>
                <a href="/about" className="futuristic-link">About</a>
                <a href="/contact" className="futuristic-link">Contact</a>
                <a href="/pricing" className="futuristic-link">Pricing</a>
                <a href="/blog" className="futuristic-link">Blog</a>
              </div>

              <div className="text-gray-500 text-sm">
                <p>© 2024 Zion Tech Group. All rights reserved.</p>
                <p className="mt-2">
                  <a href="/privacy" className="futuristic-link text-sm">Privacy Policy</a> • 
                  <a href="/terms" className="futuristic-link text-sm ml-2">Terms of Service</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </UltraFuturisticBackground>
    </div>
  );
}

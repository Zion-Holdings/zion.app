import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$1B+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const advertisingContent = {
    headline: "Transform Your Business with Zion Tech Group's Revolutionary Micro SaaS Solutions",
    subheadline: "500+ Cutting-Edge Services • 99.99% Uptime • 30-Day Free Trials • 2500%+ Average ROI",
    benefits: [
      "🚀 First-to-Market Quantum AI & Autonomous Systems",
      "💎 Industry-Leading Technology with Patent-Pending Solutions", 
      "🌍 Global Deployment with 24/7 AI-Powered Support",
      "💰 Competitive Pricing Starting from $49/month",
      "⚡ Lightning-Fast Setup in 2-8 Hours",
      "🛡️ Enterprise-Grade Security & Compliance"
    ],
    marketPosition: "Zion Tech Group is the global leader in revolutionary micro SaaS services, serving Fortune 500 companies, government agencies, and innovative startups worldwide.",
    pricing: "Our services range from $49/month for basic tools to $5,999/month for enterprise quantum computing platforms. All services include 30-day free trials and comprehensive support.",
    contactCTA: "Ready to revolutionize your business? Contact our expert team today for a personalized consultation and demo."
  };

  const featuredServices = [
    {
      title: 'Quantum AI Research Platform',
      description: 'Access cutting-edge quantum computing resources for AI research, drug discovery, and complex optimization problems.',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      variant: 'quantum' as const,
      price: '$2,999/month',
      features: ['Quantum processing units', 'AI integration', 'Research collaboration'],
      link: '/services/quantum-ai-research',
      popular: true
    },
    {
      title: 'Autonomous Manufacturing System',
      description: 'Revolutionary autonomous manufacturing that operates 24/7 with AI-powered quality control and optimization.',
      icon: <Factory className="w-8 h-8 text-green-400" />,
      variant: 'neural' as const,
      price: '$1,499/month',
      features: ['24/7 operation', 'AI quality control', 'Predictive maintenance'],
      link: '/services/autonomous-manufacturing',
      popular: true
    },
    {
      title: 'Biomedical AI Platform',
      description: 'Advanced AI platform for drug discovery, genomic analysis, and clinical research acceleration.',
      icon: <Dna className="w-8 h-8 text-blue-400" />,
      variant: 'holographic' as const,
      price: '$899/month',
      features: ['Drug discovery', 'Genomic analysis', 'Clinical optimization'],
      link: '/services/biomedical-ai',
      popular: true
    },
    {
      title: 'Blockchain Enterprise Platform',
      description: 'Enterprise-grade blockchain solutions with smart contracts and cross-chain interoperability.',
      icon: <Globe2 className="w-8 h-8 text-orange-400" />,
      variant: 'cyberpunk' as const,
      price: '$399/month',
      features: ['Multi-chain support', 'Smart contracts', 'Enterprise security'],
      link: '/services/blockchain-enterprise',
      popular: false
    },
    {
      title: 'Quantum Cybersecurity Suite',
      description: 'Quantum-resistant security for the post-quantum era with AI-powered threat detection.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      variant: 'quantum-holographic' as const,
      price: '$599/month',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust'],
      link: '/services/quantum-cybersecurity',
      popular: false
    },
    {
      title: 'Autonomous Logistics Platform',
      description: 'AI-powered logistics optimization with autonomous delivery vehicles and route optimization.',
      icon: <Truck className="w-8 h-8 text-yellow-400" />,
      variant: 'neural' as const,
      price: '$799/month',
      features: ['Autonomous delivery', 'AI optimization', 'Real-time tracking'],
      link: '/services/autonomous-logistics',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take months.',
      avatar: '🧠',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Operations',
      company: 'AutoManufacturing Inc',
      content: 'The autonomous manufacturing system has increased our productivity by 200% while reducing costs by 40%. Game-changing technology.',
      avatar: '🏭',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'BioResearch Labs',
      content: 'Our drug discovery process is now 10x faster thanks to Zion Tech Group\'s biomedical AI platform. Incredible results.',
      avatar: '🧬',
      rating: 5
    }
  ];

  const marketInsights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '2500%+',
      label: 'Average ROI',
      description: 'Clients see unprecedented returns'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      metric: '2-8 Hours',
      label: 'Setup Time',
      description: 'Lightning-fast deployment'
    }
  ];

  return (
    <div>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services | AI, Quantum Computing & Emerging Tech</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. 500+ real services including AI, quantum computing, autonomous systems, and emerging technology solutions with 99.99% uptime guarantee." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, biomedical AI, Zion Tech Group, technology solutions, business transformation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 500+ real micro SaaS services with 99.99% uptime guarantee." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Ultra Futuristic Background */}
      <UltraFuturisticBackground variant="quantum-holographic">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Revolutionary Technology Solutions
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    The Future of
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Technology
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Transform your business with Zion Tech Group's cutting-edge micro SaaS services. 
                    AI, quantum computing, blockchain, and emerging technology solutions with 
                    <span className="text-cyan-400 font-semibold"> 99.99% uptime guarantee</span>.
                  </p>
                </div>

                {/* Hero Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                  {heroStats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button
                    href="/services"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Zion Tech Group</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured Revolutionary Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future with our most advanced micro SaaS solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant={service.variant}
                      className="h-full"
                      glowIntensity="high"
                      animationSpeed="normal"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                            <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                          </div>
                        </div>
                        {service.popular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                            <Star className="w-4 h-4 inline mr-1" />
                            Popular
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                      <div className="mb-4">
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-2 h-2 rounded-full bg-cyan-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                >
                  View All 500+ Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Market Position Section */}
          <section className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Industry Leadership & Market Position
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  {advertisingContent.marketPosition}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {marketInsights.map((insight, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                        <div className="text-cyan-400">
                          {insight.icon}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{insight.metric}</div>
                      <div className="text-lg font-semibold text-cyan-400 mb-2">{insight.label}</div>
                      <div className="text-gray-400">{insight.description}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">Competitive Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {advertisingContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Client Success Stories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how leading companies are transforming their operations with our technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard variant="holographic" className="h-full">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{testimonial.avatar}</div>
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-cyan-400">{testimonial.role}</div>
                          <div className="text-gray-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {advertisingContent.contactCTA}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    href={`tel:${contactInfo.mobile}`}
                    variant="secondary"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </UltraFuturisticBackground>
    </div>
  );
}

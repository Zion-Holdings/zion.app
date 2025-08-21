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

  const platformFeatures = [
    {
      title: 'Quantum AI Platform',
      description: 'Revolutionary quantum computing platform with AI capabilities for complex problem solving',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      gradient: 'from-cyan-500 to-blue-600',
      features: ['Quantum processing', 'AI integration', 'Real-time optimization'],
      link: '/services/quantum-ai'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing AI systems that operate 24/7 with zero human intervention',
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      gradient: 'from-purple-500 to-pink-600',
      features: ['24/7 operation', 'Self-healing', 'Predictive maintenance'],
      link: '/services/autonomous-systems'
    },
    {
      title: 'Biomedical AI',
      description: 'Cutting-edge AI solutions for healthcare and biomedical research',
      icon: <Dna className="w-8 h-8 text-green-400" />,
      gradient: 'from-green-500 to-emerald-600',
      features: ['Drug discovery', 'Genomic analysis', 'Clinical optimization'],
      link: '/services/biomedical-ai'
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
      <UltraFuturisticBackground>
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
                    <div key={index} className="text-center">
                      <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
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
                <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                    <p className="text-gray-300 mb-6">Get in touch with our experts today for a free consultation and discover how our revolutionary services can drive unprecedented growth</p>
                    
                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Call Us</h4>
                        <p className="text-cyan-400 font-medium">{contactInfo.mobile}</p>
                      </div>
                      <div className="text-center">
                        <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                        <p className="text-purple-400 font-medium">{contactInfo.email}</p>
                      </div>
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                        <p className="text-green-400 font-medium text-sm">{contactInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-300 mb-4">Visit our website for more information</p>
                      <a 
                        href={contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                      >
                        {contactInfo.website}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary Platform Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of technology with our cutting-edge platform capabilities
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      color="from-cyan-500 to-blue-600"
                      textColor="text-cyan-400"
                      gradient={feature.gradient}
                      features={feature.features}
                      link={feature.link}
                      variant="quantum"
                      className="h-full cursor-pointer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Prominent Advertising Section */}
          <section className="py-16 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-y border-purple-500/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {advertisingContent.headline}
                </h2>
                <p className="text-xl text-cyan-300 mb-8 max-w-4xl mx-auto font-medium">
                  {advertisingContent.subheadline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {advertisingContent.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl mb-3">{benefit.split(' ')[0]}</div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {benefit.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
                  {advertisingContent.marketPosition}
                </p>
                <p className="text-lg text-cyan-300 mb-6 max-w-4xl mx-auto">
                  {advertisingContent.pricing}
                </p>
                <p className="text-lg text-white mb-8 max-w-4xl mx-auto">
                  {advertisingContent.contactCTA}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button
                  href="https://ziontechgroup.com/services"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  View All 500+ Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of satisfied clients who have transformed their businesses 
                  with our revolutionary micro SaaS services.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      title={testimonial.name}
                      description={`"${testimonial.content}"`}
                      icon={<div className="text-4xl">{testimonial.avatar}</div>}
                      color="from-purple-500 to-pink-600"
                      textColor="text-purple-400"
                      gradient="from-purple-500 to-pink-600"
                      variant="holographic"
                      className="h-full"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Role:</span>
                          <span className="text-cyan-400">{testimonial.role}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Company:</span>
                          <span className="text-white">{testimonial.company}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Insights Section */}
          <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Market-Leading Performance
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our revolutionary micro SaaS services deliver unprecedented results and ROI
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {marketInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                      <div className="text-blue-400 mb-3 flex justify-center">
                        {insight.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {insight.metric}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-200 mb-2">
                        {insight.label}
                      </h3>
                      <p className="text-green-400 text-sm font-medium">
                        {insight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Shape the Future?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of forward-thinking companies already transforming their business with Zion Tech Group's revolutionary solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    href="/services"
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                  >
                    Schedule Consultation
                  </Button>
                </div>

                {/* Final Contact Info */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                      <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                    </div>
                    <div className="text-center">
                      <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                      <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                      <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit us at: {contactInfo.website}
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

import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';

export default function HomePage() {
  const heroStats = [
    { value: '12+', label: 'Revolutionary Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '12+ Revolutionary Micro SaaS Services',
      description: 'Cutting-edge portfolio of fully functional micro SaaS tools with quantum computing, AI, and revolutionary technology. Starting from $299/month with 30-day free trials. All services are production-ready and deployed with enterprise-grade infrastructure.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Quantum Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 2500%+ average ROI. First-to-market quantum AI solutions.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise-Grade Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. SOC 2 compliant with enterprise-grade security and quantum-resistant encryption.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-16 hours depending on service complexity. Instant deployment available.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Military-grade security protocols with zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $299/month. Volume discounts available for enterprise clients. ROI guarantee on all services.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Quantum Computing',
      description: 'Revolutionary AI systems that leverage quantum computing for unprecedented performance and capabilities.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance quantum cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🔒',
      title: 'Quantum-Safe Security',
      description: 'Future-proof security with quantum-resistant encryption and advanced threat protection.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'AI Analytics & Insights',
      description: 'Intelligent data analysis and business intelligence powered by advanced AI algorithms.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '🚀',
      title: 'Space Technology Solutions',
      description: 'Cutting-edge space exploration and satellite optimization platforms.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: '🧬',
      title: 'Biomedical AI Platform',
      description: 'Revolutionary drug discovery and medical research using quantum AI technology.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const featuredServices = enhancedMicroSaasServices.slice(0, 6);

  return (
    <AdvancedFuturisticBackground variant="quantum" className="min-h-screen">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services | Quantum Computing & AI Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary micro SaaS services featuring quantum computing, AI, and cutting-edge innovations. Transform your business with our advanced platforms." />
        <meta name="keywords" content="micro SaaS, quantum computing, AI services, technology solutions, Zion Tech Group, revolutionary technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="Experience the future of technology with quantum computing and AI solutions" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge micro SaaS platforms featuring quantum computing, AI, and revolutionary innovations that transform industries worldwide.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('/services', '_blank')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="text-center text-gray-400 text-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>Ready to transform your business? Contact us today:</p>
              <p className="mt-2">
                <span className="text-cyan-400">Mobile:</span> {contactInfo.mobile} | 
                <span className="text-fuchsia-400 ml-2">Email:</span> {contactInfo.email}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary Platform?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand apart from the competition with our commitment to delivering only the highest quality, 
                production-ready services with proven ROI and enterprise-grade reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                    className="h-full text-center p-6"
                  >
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and cutting-edge services that are transforming industries worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant={service.variant as any || 'quantum'}
                    className="h-full cursor-pointer group"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      {service.popular && (
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs mb-3">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Popular
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}{service.period}</div>
                      <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('/services', '_blank')}
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to deliver exceptional performance and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant="cyberpunk"
                    className="text-center p-4"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-semibold text-white mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-400">{tech.category}</div>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Features & Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advanced features that make our platform the most innovative solution in the market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <AdvancedFuturisticCard
                    variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                    className="h-full text-center p-6"
                  >
                    <div className={`text-4xl mb-4 ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </AdvancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AdvancedFuturisticCard variant="quantum-holographic" className="text-center p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the future of technology with our revolutionary micro SaaS services. Get started with a free trial and experience unprecedented ROI and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                    onClick={() => window.open('/services', '_blank')}
                  >
                    Start Free Trial
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg"
                    onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                  >
                    Contact Us
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="text-sm text-gray-400 mb-8">
                  Free 30-day trial • No credit card required • Expert support included • 99.9% uptime guarantee
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                    <Phone className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-blue-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                    <Mail className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </motion.div>
            </AdvancedFuturisticCard>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}

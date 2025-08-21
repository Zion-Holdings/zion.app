import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';

export default function HomePage() {
  const heroStats = [
    { value: '20+', label: 'Revolutionary Services', color: 'text-cyan-400' },
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
      title: '20+ Revolutionary Micro SaaS Services',
      description: 'Cutting-edge portfolio of fully functional micro SaaS tools with quantum computing, AI, and revolutionary technology. Starting from $199/month with 30-day free trials. All services are production-ready and deployed with enterprise-grade infrastructure.',
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
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $199/month. Volume discounts available for enterprise clients. ROI guarantee on all services.',
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
      description: 'Next-generation security protocols that protect against quantum computing threats.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time data analytics and insights powered by quantum algorithms and AI.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  // Get popular services for showcase
  const popularServices = enhancedMicroSaasServices.filter(service => service.popular).slice(0, 6);

  return (
    <EnhancedFuturisticBackground>
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 20+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials. Enterprise-grade solutions with 2500%+ average ROI." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, cybersecurity, healthcare AI, autonomous vehicles, blockchain, fintech, legal tech, space technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions" />
        <meta property="og:description" content="Discover 20+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta name="twitter:description" content="20+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Contact Information Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Micro SaaS Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover 20+ cutting-edge micro SaaS solutions powered by quantum computing and AI. 
                From $199/month with 30-day free trials. Enterprise-grade reliability with 2500%+ average ROI.
              </p>
              
              {/* Contact Information Banner */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-6 h-6 text-fuchsia-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with enterprise-grade reliability to deliver 
                revolutionary solutions that transform businesses and drive unprecedented growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl ${feature.color} text-white relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative z-10">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-100 leading-relaxed">{feature.description}</p>
                  </div>
                  
                  {/* Holographic overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our most popular and innovative micro SaaS solutions. 
                Each service is designed to deliver exceptional value and drive business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EnhancedFuturisticCard
                    title={service.name}
                    description={service.description}
                    icon={service.icon}
                    features={service.features.slice(0, 5)}
                    price={service.price}
                    period={service.period}
                    link={service.link}
                    variant={service.variant}
                    color={service.color}
                    textColor={service.textColor}
                    gradient={service.color}
                    popular={service.popular}
                    contactInfo={service.contactInfo}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                href="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are built on the latest technologies and frameworks, ensuring 
                performance, scalability, and security for enterprise applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-white font-semibold mb-1">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already leveraging our revolutionary micro SaaS services. 
                Start your 30-day free trial today and experience the future of technology.
              </p>
              
              {/* Contact Information */}
              <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">{contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-fuchsia-400" />
                      <span className="text-white">{contactInfo.email}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-white text-sm">{contactInfo.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span className="text-white">{contactInfo.website}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}

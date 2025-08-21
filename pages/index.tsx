import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeEmergingTechServices2025 } from '../data/2025-innovative-emerging-tech-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Services Delivered', value: '500+', icon: <Star className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '1000+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '300%', icon: <TrendingUp className="w-5 h-5" /> }
];

const stats = [
  { number: '50+', label: 'Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: [...innovativeAIServicesEnhanced2025, ...innovativeAIAutomationServices2025].slice(0, 3),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: [...emergingTechServicesEnhanced2025, ...innovativeEmergingTechServices2025].slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services'
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: [...innovativeITServicesEnhanced2025, ...innovativeITInfrastructureServices2025].slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: [...innovativeRealMicroSaasServices2025, ...innovativeMicroSaasSolutions2025].slice(0, 3),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas'
  }
];

const heroFeatures = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and emerging technologies that give you a competitive edge.',
    icon: Zap,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Rapid Implementation',
    description: 'Get up and running in under 24 hours with our streamlined setup process and expert guidance.',
    icon: Rocket,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Global Infrastructure',
    description: 'Enterprise-grade infrastructure available in 150+ countries worldwide with 99.9% uptime guarantee.',
    icon: Globe,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and monitoring for all services with dedicated account managers.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent automation that reduces manual work by 80% and increases operational efficiency.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Future-Proof Solutions',
    description: 'Built with scalability and adaptability in mind to grow with your business needs.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-600'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Inc.',
    content: 'Zion Tech Group transformed our infrastructure with their quantum AI solutions. 40% efficiency improvement in just 3 months!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateLabs',
    content: 'The AI consciousness platform opened new possibilities for human-AI collaboration. Game-changing technology!',
    rating: 5
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director, BioTech Solutions',
    content: 'Their quantum bio-computing platform accelerated our drug discovery process by 1000x. Revolutionary!',
    rating: 5
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, and emerging technology solutions. 500+ services, 99.9% uptime, 24/7 support." />
        <meta name="keywords" content="AI, quantum computing, emerging technology, micro SAAS, enterprise IT, space technology, brain-computer interface" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        {/* Business Information */}
        <meta name="business:name" content="Zion Tech Group" />
        <meta name="business:website" content="https://ziontechgroup.com" />
        <meta name="business:industry" content="Technology Services" />
        <meta name="business:services" content="AI, Quantum Computing, Emerging Technology, Micro SAAS, Enterprise IT" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Enhanced Title with Futuristic Effects */}
            <div className="relative mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Revolutionary
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Technology Solutions
                </span>
              </h1>
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-3xl -z-10 animate-pulse"></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with cutting-edge AI, quantum computing, and emerging technologies. 
              Experience the future of innovation with Zion Tech Group's comprehensive suite of 500+ revolutionary services.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/50"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-purple-400 hover:bg-purple-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <div className="p-2 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-500/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span className="text-white text-center">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-20 bg-black relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Technology Categories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of 500+ cutting-edge technology solutions designed to transform your business and accelerate growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.href}>
                  <div className={`relative p-8 bg-gradient-to-br ${category.color} rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 overflow-hidden`}>
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/30">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-white/90 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {category.description}
                      </p>
                      
                      {/* Sample Services */}
                      <div className="space-y-3 mb-6">
                        {category.services.slice(0, 2).map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                            <span className="text-white/90 truncate group-hover:text-white transition-colors duration-300">
                              {service.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced CTA */}
                      <div className="flex items-center gap-2 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">
                        <span className="text-sm font-semibold">Explore Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Hero Features */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of technology with our comprehensive suite of 500+ innovative solutions and unparalleled expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-black relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our revolutionary technology solutions
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
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rating Stars */}
                  <div className="relative flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="relative">
                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author Information */}
                    <div className="border-t border-gray-700 pt-4">
                      <div className="font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. Get started today and experience the power of our 500+ revolutionary AI, quantum computing, and emerging technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/50">
                    Contact Us Today
                  </button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/comprehensive-services-showcase-2025">
                  <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                    View All Services
                  </button>
                </Link>
              </motion.div>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium">{contactInfo.mobile}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium">{contactInfo.email}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium text-center">{contactInfo.address}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

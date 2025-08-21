import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Database, Lock, Cloud, BarChart3, Settings, Eye, Code, Palette, Layers, CpuIcon, Network, Server, ShieldCheck, ZapIcon, GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { advancedRealMicroSaasServices2025 } from '../data/2025-advanced-real-micro-saas-services';
import { advancedAIServices2025 } from '../data/2025-advanced-ai-services';
import { advancedITServices2025 } from '../data/2025-advanced-it-services';
import { advancedEmergingTechServices2025 } from '../data/2025-advanced-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroFeatures = [
  {
    icon: Brain,
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    color: 'from-violet-500 to-purple-600',
    link: '/ai-services'
  },
  {
    icon: Atom,
    title: 'Quantum & Emerging Tech',
    description: 'Next-generation quantum computing and space technology solutions',
    color: 'from-indigo-500 to-blue-600',
    link: '/quantum-services'
  },
  {
    icon: Shield,
    title: 'Enterprise IT',
    description: 'Cutting-edge enterprise infrastructure and security solutions',
    color: 'from-blue-500 to-cyan-600',
    link: '/enterprise-it'
  },
  {
    icon: Rocket,
    title: 'Micro SAAS',
    description: 'Innovative micro SAAS solutions for modern businesses',
    color: 'from-teal-500 to-emerald-600',
    link: '/micro-saas'
  }
];

const stats = [
  { number: '100+', label: 'Advanced Services', icon: Star, color: 'text-cyan-400' },
  { number: '2000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.99%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const serviceCategories = [
  {
    title: 'Advanced Micro SAAS',
    description: 'Cutting-edge business solutions with AI and quantum computing',
    services: advancedRealMicroSaasServices2025.slice(0, 4),
    icon: Target,
    color: 'from-emerald-500 to-teal-600',
    link: '/micro-saas'
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms for the future',
    services: advancedAIServices2025.slice(0, 4),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    link: '/ai-services'
  },
  {
    title: 'Enterprise IT',
    description: 'Next-generation infrastructure and security',
    services: advancedITServices2025.slice(0, 4),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    link: '/enterprise-it'
  },
  {
    title: 'Emerging Technologies',
    description: 'Breakthrough technologies for tomorrow',
    services: advancedEmergingTechServices2025.slice(0, 4),
    icon: Rocket,
    color: 'from-indigo-500 to-blue-600',
    link: '/emerging-tech'
  }
];

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of revolutionary AI consciousness, quantum computing, space technology, and innovative micro SAAS solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, micro SAAS, enterprise IT, emerging technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary AI, quantum computing, and emerging technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future Technology
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading the future with revolutionary AI consciousness, quantum computing, emerging technologies, and innovative micro SAAS solutions that transform businesses worldwide.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/services" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link href="/contact" className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="flex items-center gap-2">
                Get Started
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Hero Features */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary
              </span>{' '}
              Technology Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge solutions across four revolutionary technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={feature.link} className="block">
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="flex justify-center mb-6">
                      <feature.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-100 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced
              </span>{' '}
              Service Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of revolutionary services designed to transform your business
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link href={service.website} className="block">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-cyan-500 group-hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="text-cyan-400 font-semibold">
                              From ${service.pricing.starter.price}/{service.pricing.starter.period}
                            </div>
                            <div className="text-xs text-gray-500">
                              {service.category}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link href={category.link} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300">
                    View All {category.title} Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our team of experts and discover how our revolutionary technology solutions can drive your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, label: 'Call Us', value: contactInfo.mobile, link: `tel:${contactInfo.mobile}` },
              { icon: Mail, label: 'Email Us', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
              { icon: MapPin, label: 'Visit Us', value: contactInfo.address, link: '#' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <Link href={contact.link} className="block">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-cyan-500 group-hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <contact.icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
              <Mail className="w-6 h-6" />
              Get in Touch
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

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
    services: innovativeAIServicesEnhanced2025.slice(0, 3),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025.slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services'
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025.slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025.slice(0, 3),
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
    description: 'Built with scalability in mind, ensuring your solutions grow with your business needs.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-600'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI, quantum computing, emerging technology, and micro SAAS solutions. Transform your business with revolutionary technology." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise solutions, space technology, metaverse development" />
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
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500/15 to-green-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
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
            <Link href="/cutting-edge-services-showcase-2025">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  Explore Cutting-Edge Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  Get Started
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
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
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionary
              </span>{' '}
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of cutting-edge services designed to transform your business and propel you into the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{service.name}</h4>
                          <p className="text-gray-400 text-xs line-clamp-2">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-400 font-bold text-sm">${service.pricing.starter.price}</div>
                          <div className="text-gray-500 text-xs">/month</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href={category.href}>
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="flex items-center justify-center gap-2">
                        View All {category.title} Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  Explore Complete Services Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
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
              Why Choose{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge solutions and unparalleled expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with our team of experts and discover how our revolutionary technology solutions can drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">{contactInfo.mobile}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 font-medium">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 font-medium text-sm leading-tight">{contactInfo.address}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

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
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: Atom,
    title: 'Quantum & Emerging Tech',
    description: 'Next-generation quantum computing and space technology solutions',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Enterprise IT',
    description: 'Cutting-edge enterprise infrastructure and security solutions',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Rocket,
    title: 'Micro SAAS',
    description: 'Innovative micro SAAS solutions for modern businesses',
    color: 'from-teal-500 to-emerald-600'
  }
];

const stats = [
  { number: '60+', label: 'Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
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
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 font-bold text-lg rounded-2xl transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Hero Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our revolutionary solutions have transformed businesses across industries, delivering unprecedented results and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Technology Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge solutions designed to propel your business into the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Financial Technology</h3>
              <p className="text-gray-400 mb-6">
                Quantum trading algorithms, DeFi platforms, AI credit scoring, and regulatory compliance automation.
              </p>
              <Link
                href="/services#financial-technology"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Healthcare & Biotech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare & Biotech</h3>
              <p className="text-gray-400 mb-6">
                AI diagnostic platforms, telemedicine solutions, biotech research tools, and mental health AI companions.
              </p>
              <Link
                href="/services#healthcare-biotech"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Education Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education Technology</h3>
              <p className="text-gray-400 mb-6">
                AI-powered learning platforms, VR education studios, blockchain credentials, and STEM education hubs.
              </p>
              <Link
                href="/services#education-technology"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Sustainability & Green Tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability & Green Tech</h3>
              <p className="text-gray-400 mb-6">
                Carbon tracking platforms, renewable energy optimization, smart building systems, and circular economy solutions.
              </p>
              <Link
                href="/services#sustainability-green-tech"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Logistics & Supply Chain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistics & Supply Chain</h3>
              <p className="text-gray-400 mb-6">
                Autonomous logistics platforms, supply chain visibility, last-mile delivery optimization, and warehouse automation.
              </p>
              <Link
                href="/services#logistics-supply-chain"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* AI & Consciousness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Consciousness</h3>
              <p className="text-gray-400 mb-6">
                Revolutionary AI consciousness evolution, emotional intelligence, and autonomous ecosystem platforms.
              </p>
              <Link
                href="/services#ai-consciousness"
                className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Join thousands of technology leaders who are already shaping tomorrow with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 font-bold text-lg rounded-2xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

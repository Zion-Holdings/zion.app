import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Sparkles, Zap, Brain, Rocket, Globe, Shield, 
  Cpu, Star, Heart, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';
import InnovativeServicesShowcase from '../components/sections/InnovativeServicesShowcase';
import Layout from '../components/layout/Layout';

export default function InnovativeServicesPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { value: '200+', label: 'Revolutionary Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Star className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$25B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <Zap className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-purple-400', icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <Head>
        <title>Innovative Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Discover the future of technology with our cutting-edge micro SAAS services. From quantum computing to autonomous systems, we're revolutionizing industries with AI-powered solutions." />
        <meta name="keywords" content="micro SAAS, quantum computing, AI services, space technology, biotech AI, autonomous systems, Zion Tech Group" />
        <meta property="og:title" content="Innovative Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Discover the future of technology with our cutting-edge micro SAAS services. From quantum computing to autonomous systems, we're revolutionizing industries with AI-powered solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Micro SAAS Services | Zion Tech Group" />
        <meta name="twitter:description" content="Discover the future of technology with our cutting-edge micro SAAS services." />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,73,153,0.15),transparent_50%)]" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </h1>
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover the future of technology with our cutting-edge micro SAAS services. 
              From quantum computing to autonomous systems, we're revolutionizing industries with AI-powered solutions.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">200+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">99.99% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-400">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Start Free Trial
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Call +1 302 464 0950
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose
              {' '}<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the pioneers of the future, 
              delivering revolutionary solutions that transform industries and accelerate growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <InnovativeServicesShowcase />

      {/* Contact CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              {' '}<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Transform
              </span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already achieving exponential growth with our revolutionary technology solutions. 
              Get started today with a free consultation and discover how we can accelerate your success.
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Start Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/services"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2 inline" />
                Explore All Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
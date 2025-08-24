import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function Innovations2034Page() {
  return (
    <>
      <Head>
        <title>2034 Cutting-Edge Innovations | Zion Tech Group</title>
        <meta name="description" content="Experience the future with our revolutionary 2034 micro SAAS services, IT solutions, and AI platforms. From AI consciousness to space mining automation, we're building tomorrow's technology today." />
        <meta name="keywords" content="2034 innovations, AI consciousness, quantum computing, space mining, metaverse, neural interfaces, fusion energy, nanotechnology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2034-innovations/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2034 Cutting-Edge Innovations | Zion Tech Group" />
        <meta property="og:description" content="Experience the future with our revolutionary 2034 micro SAAS services, IT solutions, and AI platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/2034-innovations" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2034 Cutting-Edge Innovations | Zion Tech Group" />
        <meta name="twitter:description" content="Experience the future with our revolutionary 2034 micro SAAS services, IT solutions, and AI platforms." />
      </Head>

      <Layout>
        <div className="min-h-screen bg-black">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.15),transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(236,73,153,0.15),transparent_50%)] animate-pulse delay-2000"></div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.5, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                2034
                <br />
                <span className="text-5xl md:text-7xl">Cutting-Edge</span>
                <br />
                <span className="text-6xl md:text-8xl">Innovations</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Experience the future with our revolutionary micro SAAS services, IT solutions, and AI platforms. 
                From AI consciousness to space mining automation, we're building tomorrow's technology today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  Explore Innovations
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan-500/50 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-lg"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Innovation Categories Overview */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Innovation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2034 innovations span across multiple cutting-edge technology domains, 
                each designed to revolutionize industries and accelerate human progress.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🧠',
                  title: 'AI Consciousness',
                  description: 'Revolutionary AI consciousness and emotional intelligence platforms',
                  color: 'from-violet-500 to-purple-600',
                  count: '5+ Services'
                },
                {
                  icon: '⚛️',
                  title: 'Quantum Tech',
                  description: 'Quantum computing, DNA computing, and quantum internet infrastructure',
                  color: 'from-indigo-500 to-blue-600',
                  count: '6+ Services'
                },
                {
                  icon: '🌌',
                  title: 'Space & Metaverse',
                  description: 'Space mining automation and metaverse development platforms',
                  color: 'from-teal-500 to-emerald-600',
                  count: '4+ Services'
                },
                {
                  icon: '🏙️',
                  title: 'Enterprise IT',
                  description: 'Autonomous DevOps and zero-trust security solutions',
                  color: 'from-blue-500 to-cyan-600',
                  count: '5+ Services'
                },
                {
                  icon: '🧬',
                  title: 'Biotech & Neural',
                  description: 'Synthetic biology automation and neural interface platforms',
                  color: 'from-green-500 to-emerald-600',
                  count: '3+ Services'
                },
                {
                  icon: '🤖',
                  title: 'Robotics & Automation',
                  description: 'Swarm robotics orchestration and autonomous systems',
                  color: 'from-orange-500 to-red-600',
                  count: '2+ Services'
                },
                {
                  icon: '⚡',
                  title: 'Energy & Materials',
                  description: 'Fusion energy control and nanotechnology materials',
                  color: 'from-yellow-500 to-orange-600',
                  count: '3+ Services'
                },
                {
                  icon: '🔄',
                  title: 'Digital Twins',
                  description: 'Digital twin simulation and edge AI computing',
                  color: 'from-teal-500 to-cyan-600',
                  count: '2+ Services'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="text-cyan-400 font-semibold text-sm">
                      {category.count}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}


        {/* Why Choose Zion Tech Group */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company. We're pioneers building the future, 
                one breakthrough innovation at a time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'First-to-Market',
                  description: 'We\'re the first to bring many of these revolutionary technologies to market, giving you a competitive advantage.',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: '🧠',
                  title: 'AI-First Approach',
                  description: 'Every service is built with AI at its core, ensuring maximum efficiency and intelligence.',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  description: 'Our platforms are designed for speed and performance, handling the most demanding workloads.',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: '🛡️',
                  title: 'Enterprise Security',
                  description: 'Military-grade security protocols ensure your data and operations are always protected.',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: '🌍',
                  title: 'Global Scale',
                  description: 'Built to scale globally, our services work seamlessly across borders and time zones.',
                  color: 'from-teal-500 to-cyan-600'
                },
                {
                  icon: '💎',
                  title: 'Premium Support',
                  description: '24/7 expert support from our team of technology pioneers and industry experts.',
                  color: 'from-indigo-500 to-purple-600'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of forward-thinking organizations that are already leveraging our 2034 innovations 
                to transform their industries and accelerate their growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <span className="text-cyan-400">📱</span>
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <span className="text-purple-400">✉️</span>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <span className="text-pink-400">📍</span>
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
              >
                Start Your Innovation Journey
              </motion.button>
            </motion.div>
          </div>
        </section>
        </div>
      </Layout>
    </>
  );
}
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const heroStats = [
    { value: '200+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: '🚀' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: '🛡️' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: '⏰' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services. Transform your business with our innovative solutions." />
        <meta name="keywords" content="micro SaaS, AI services, technology solutions, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary micro SaaS services, AI solutions, and cutting-edge technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
            >
              Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations. 
              From quantum computing to space technology, we're building the future today.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🚀</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse">⚛️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin">🤖</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-bounce">💎</div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`text-4xl ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold">Mobile</div>
                <div className="text-blue-100">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-100">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-semibold">Address</div>
                <div className="text-blue-100">364 E Main St STE 1008</div>
                <div className="text-blue-100">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Sparkles, Zap, Target, Star, ArrowRight, 
  CheckCircle, Users, Award, Clock, TrendingUp, Lock
} from 'lucide-react';
import Link from 'next/link';

const CybersecurityServices: React.FC = () => {
  const services = [
    {
      title: "Quantum Cybersecurity Intelligence",
      description: "Advanced quantum-resistant cybersecurity with AI consciousness and threat detection",
      href: "/quantum-cybersecurity-intelligence-2045",
      features: ["Quantum-Resistant Security", "AI Threat Detection", "Consciousness Integration", "Advanced Analytics"],
      price: "$24,999/month",
      badge: "Featured"
    },
    {
      title: "AI Threat Detection Platform",
      description: "Revolutionary AI-powered threat detection with consciousness and autonomous response",
      href: "/ai-threat-detection-platform-2045",
      features: ["AI Threat Detection", "Autonomous Response", "Consciousness Integration", "Real-time Monitoring"],
      price: "$19,999/month",
      badge: "Popular"
    },
    {
      title: "Zero-Trust Security Platform",
      description: "Comprehensive zero-trust security architecture with AI consciousness",
      href: "/zero-trust-security-platform",
      features: ["Zero-Trust Architecture", "AI Consciousness", "Continuous Verification", "Advanced Authentication"],
      price: "$14,999/month",
      badge: "Essential"
    },
    {
      title: "Quantum Encryption Platform",
      description: "Next-generation quantum encryption with consciousness and security",
      href: "/quantum-encryption-platform-2045",
      features: ["Quantum Encryption", "Consciousness Security", "Advanced Algorithms", "Future-Proof Protection"],
      price: "$29,999/month",
      badge: "Premium"
    }
  ];

  const stats = [
    { number: "1000+", label: "Security Projects", icon: Shield },
    { number: "99.99%", label: "Threat Detection", icon: CheckCircle },
    { number: "200+", label: "Security Partners", icon: Users },
    { number: "24/7", label: "Security Monitoring", icon: Clock }
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Revolutionary cybersecurity services including quantum security, AI threat detection, and zero-trust architecture. Protect your digital assets with cutting-edge security."
      keywords="cybersecurity, quantum security, AI threat detection, zero-trust security, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-red-300 text-sm font-medium">Cybersecurity Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {" "}Cybersecurity
                </span>
                <br />
                Solutions
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your digital future with quantum-resistant cybersecurity, AI consciousness, 
                and zero-trust architecture that evolves with emerging threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Secure Your Assets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of cybersecurity and protection services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  {service.badge && (
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-medium text-red-300 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-red-400">{service.price}</div>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
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
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a breach to happen. Protect your digital assets with our 
                revolutionary cybersecurity solutions that evolve with emerging threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityServices;
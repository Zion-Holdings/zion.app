import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';

export default function QuantumCybersecurityServices() {
  return (
    <>
      <Head>
        <title>Quantum Cybersecurity Services - ZionTech Group | Unbreakable Security Solutions</title>
        <meta name="description" content="Protect your business with unbreakable quantum cybersecurity. Quantum encryption, threat detection, identity verification, and network security powered by quantum computing. Contact us at +1 302 464 0950" />
        <meta name="keywords" content="quantum cybersecurity, quantum encryption, quantum threat detection, quantum identity verification, quantum network security, ZionTech Group" />
        <meta name="author" content="ZionTech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quantum Cybersecurity Services - ZionTech Group" />
        <meta property="og:description" content="Unbreakable security powered by quantum computing and advanced AI algorithms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-cybersecurity-services" />
        <meta property="og:site_name" content="ZionTech Group" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground2026 intensity="high" theme="cyberpunk">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center z-10 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Quantum Cybersecurity
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
            >
              Unbreakable security powered by quantum computing and advanced AI algorithms. Protect your business from tomorrow's threats today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="#services"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-indigo-500/25"
              >
                View Services
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started
              </a>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-white mb-2">Unbreakable Encryption</h3>
                <p className="text-gray-400 text-sm">Quantum-resistant algorithms that cannot be cracked by current or future computers.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Detection</h3>
                <p className="text-gray-400 text-sm">Advanced threat detection that learns and adapts to new attack patterns.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Protection</h3>
                <p className="text-gray-400 text-sm">Instant threat response and automated incident resolution.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Quantum Security Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Protect your digital assets with the most advanced security technology available, powered by quantum computing and AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumCybersecurityServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026 
                    service={service} 
                    variant="premium"
                    theme="cyberpunk"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Quantum Security Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Why Quantum Security?
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">The Quantum Threat</h3>
                <p className="text-gray-300 mb-4">
                  Quantum computers will eventually break current encryption standards, making traditional security obsolete.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• RSA encryption will be vulnerable</li>
                  <li>• Current SSL/TLS certificates at risk</li>
                  <li>• Blockchain security compromised</li>
                  <li>• Financial systems exposed</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Quantum Solution</h3>
                <p className="text-gray-300 mb-4">
                  We provide quantum-resistant security that protects against both current and future threats.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Post-quantum cryptography</li>
                  <li>• Quantum key distribution</li>
                  <li>• AI-enhanced threat detection</li>
                  <li>• Future-proof security architecture</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Advanced Security Features
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-2">Zero Trust Architecture</h3>
                <p className="text-gray-400 text-sm">Never trust, always verify approach to security.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-white mb-2">Continuous Monitoring</h3>
                <p className="text-gray-400 text-sm">24/7 threat detection and response.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
                <p className="text-gray-400 text-sm">Automated threat response and incident resolution.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Analytics</h3>
                <p className="text-gray-400 text-sm">Comprehensive security insights and reporting.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Secure Your Future Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for quantum computers to break your security. Contact us now to implement quantum-resistant protection.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                  <div className="text-3xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-indigo-400/30 rounded-2xl p-6">
                  <div className="text-3xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Start Your Security Assessment
                </a>
                <a
                  href="https://ziontechgroup.com"
                  className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-400 hover:text-black transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Visit Our Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraFuturisticBackground2026>
    </>
  );
}
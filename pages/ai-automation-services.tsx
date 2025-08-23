import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';

export default function AIAutomationServices() {
  return (
    <>
      <Head>
        <title>AI Automation Services - ZionTech Group | Advanced Business Process Automation</title>
        <meta name="description" content="Transform your business with our advanced AI automation services. Self-learning automation, predictive maintenance, customer intelligence, and supply chain optimization. Contact us at +1 302 464 0950" />
        <meta name="keywords" content="AI automation, business process automation, predictive maintenance, customer intelligence, supply chain optimization, ZionTech Group" />
        <meta name="author" content="ZionTech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Services - ZionTech Group" />
        <meta property="og:description" content="Advanced AI automation services that learn, adapt, and continuously optimize your business processes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-automation-services" />
        <meta property="og:site_name" content="ZionTech Group" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground2026 intensity="high" theme="quantum" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center z-10 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                AI Automation Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed"
            >
              Intelligent automation solutions that learn, adapt, and continuously optimize your business processes for maximum efficiency and ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="#services"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                View Services
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
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
              <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Immediate ROI</h3>
                <p className="text-gray-400 text-sm">See 300-500% ROI within the first year through process optimization and reduced manual work.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-2">Self-Learning AI</h3>
                <p className="text-gray-400 text-sm">Our AI continuously learns and improves, becoming more efficient over time.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-400 text-sm">Get up and running in 1-4 weeks with our proven implementation framework.</p>
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
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Advanced AI Automation Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your business operations with intelligent automation that adapts to your needs and scales with your growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedAIAutomationServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026 
                    service={service} 
                    variant="enterprise"
                    theme="quantum"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Why Choose ZionTech Group?
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
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400 text-sm">Track record of delivering 300-500% ROI for our clients across industries.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-400 text-sm">Latest machine learning and AI technologies for maximum effectiveness.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Implementation</h3>
                <p className="text-gray-400 text-sm">Get up and running in weeks, not months, with our streamlined process.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400 text-sm">Bank-level security and compliance for your most sensitive operations.</p>
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
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Ready to Automate Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI automation services can transform your operations and drive unprecedented growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
                  <div className="text-3xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6">
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
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Automation Journey
                </a>
                <a
                  href="https://ziontechgroup.com"
                  className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Visit Our Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Globe, Brain, Shield, Zap, Cpu, 
  TrendingUp, CheckCircle, ArrowRight, BarChart3, Users
} from 'lucide-react';

export default function RetailSolutions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-6">
                Retail & E-commerce Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered retail solutions that transform customer experience, 
                optimize operations, and drive digital commerce innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Retail Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed specifically for retailers, 
                e-commerce platforms, and digital commerce businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* E-commerce Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <ShoppingCart className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI-Powered E-commerce</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent e-commerce platform with AI-driven personalization, 
                  automated inventory management, and seamless customer experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    AI personalization
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Inventory automation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Customer experience
                  </li>
                </ul>
                <a href="/contact?service=AI-E-commerce" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Customer Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Customer Analytics</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced customer analytics platform with behavioral insights, 
                  predictive modeling, and personalized marketing automation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Behavioral insights
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Predictive modeling
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Marketing automation
                  </li>
                </ul>
                <a href="/contact?service=Customer-Analytics" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Omnichannel Retail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Omnichannel Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Seamless omnichannel retail platform connecting online and offline 
                  channels for unified customer experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Channel integration
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Unified experience
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Inventory sync
                  </li>
                </ul>
                <a href="/contact?service=Omnichannel-Platform" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Supply Chain */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Supply Chain Optimization</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent supply chain optimization with demand forecasting, 
                  inventory management, and logistics automation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Demand forecasting
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Inventory optimization
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Logistics automation
                  </li>
                </ul>
                <a href="/contact?service=Supply-Chain-Optimization" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Fraud Prevention */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Fraud Prevention</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered fraud detection and prevention system with real-time 
                  monitoring and behavioral analysis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Behavioral analysis
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Risk assessment
                  </li>
                </ul>
                <a href="/contact?service=Fraud-Prevention" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Customer Service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <Users className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Customer Service</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent customer service platform with AI chatbots, 
                  automated support, and personalized assistance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    AI chatbots
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Automated support
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Personalized assistance
                  </li>
                </ul>
                <a href="/contact?service=AI-Customer-Service" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Retail?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the retail technology revolution with our cutting-edge AI and e-commerce solutions. 
                Let's build the future of retail together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Retail-Solutions"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services?category=retail"
                  className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-xl hover:bg-pink-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Zap, Brain, Shield, Globe, Cog, 
  TrendingUp, CheckCircle, ArrowRight, BarChart3, Settings
} from 'lucide-react';

export default function ManufacturingSolutions() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Smart Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary Industry 4.0 solutions that transform manufacturing 
                through AI, IoT, and autonomous systems.
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
              <h2 className="text-4xl font-bold text-white mb-4">Our Manufacturing Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed specifically for manufacturers, 
                industrial companies, and supply chain operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart Factory */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Cpu className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Smart Factory Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered smart factory platform with real-time monitoring, 
                  predictive maintenance, and autonomous operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Predictive maintenance
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Autonomous operations
                  </li>
                </ul>
                <a href="/contact?service=Smart-Factory" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* IoT Integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">IoT Integration</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive IoT integration platform connecting machines, 
                  sensors, and systems for seamless data flow.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Machine connectivity
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Sensor integration
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Data flow optimization
                  </li>
                </ul>
                <a href="/contact?service=IoT-Integration" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Quality Control */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Quality Control</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  AI-powered quality control system with computer vision, 
                  defect detection, and automated inspection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Computer vision
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Defect detection
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Automated inspection
                  </li>
                </ul>
                <a href="/contact?service=AI-Quality-Control" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
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
                    <BarChart3 className="w-8 h-8 text-yellow-400" />
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
                    Inventory management
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

              {/* Predictive Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Brain className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Predictive Analytics</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced predictive analytics platform for manufacturing 
                  optimization, risk assessment, and performance forecasting.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Performance forecasting
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Risk assessment
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Optimization insights
                  </li>
                </ul>
                <a href="/contact?service=Predictive-Analytics" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <Settings className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Process Automation</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent process automation with robotic process automation, 
                  workflow optimization, and decision support systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    RPA implementation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Workflow optimization
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Decision support
                  </li>
                </ul>
                <a href="/contact?service=Process-Automation" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the Industry 4.0 revolution with our cutting-edge AI and IoT solutions. 
                Let's build the future of manufacturing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Manufacturing-Solutions"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services?category=manufacturing"
                  className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
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
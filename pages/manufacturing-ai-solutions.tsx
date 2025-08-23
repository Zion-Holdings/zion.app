import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, Factory, Cog, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const manufacturingServices = [
  {
    title: 'AI Predictive Maintenance',
    description: 'Intelligent systems that predict equipment failures and optimize maintenance schedules',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-predictive-maintenance-platform',
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Optimization']
  },
  {
    title: 'Smart Factory Automation',
    description: 'AI-powered automation systems for intelligent manufacturing processes',
    icon: <Factory className="w-8 h-8 text-blue-400" />,
    href: '/smart-factory-automation',
    features: ['Process Automation', 'Quality Control', 'Production Optimization']
  },
  {
    title: 'Supply Chain Intelligence',
    description: 'AI-driven supply chain optimization and demand forecasting',
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    href: '/supply-chain-intelligence',
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management']
  },
  {
    title: 'Quality Assurance AI',
    description: 'Advanced quality control systems using computer vision and AI',
    icon: <Target className="w-8 h-8 text-purple-400" />,
    href: '/quality-assurance-ai',
    features: ['Visual Inspection', 'Defect Detection', 'Quality Analytics']
  },
  {
    title: 'Manufacturing Analytics',
    description: 'Comprehensive analytics platform for manufacturing insights and optimization',
    icon: <Activity className="w-8 h-8 text-yellow-400" />,
    href: '/manufacturing-analytics-platform',
    features: ['Performance Analytics', 'Efficiency Metrics', 'Real-time Monitoring']
  },
  {
    title: 'IoT Manufacturing Platform',
    description: 'Connected devices and sensors for intelligent manufacturing operations',
    icon: <Cog className="w-8 h-8 text-orange-400" />,
    href: '/iot-manufacturing-platform',
    features: ['Sensor Integration', 'Data Collection', 'Remote Monitoring']
  }
];

export default function ManufacturingAISolutions() {
  return (
    <>
      <SEO 
        title="Manufacturing AI Solutions | Zion Tech Group"
        description="Advanced AI solutions for manufacturing including predictive maintenance, smart factory automation, supply chain intelligence, and quality assurance."
        canonical="https://ziontechgroup.com/manufacturing-ai-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent mb-6">
                Manufacturing AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI technology that transforms manufacturing operations, enhances efficiency, and drives Industry 4.0 innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Manufacturing Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Manufacturing Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing AI Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to optimize manufacturing processes and drive operational excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {manufacturingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold group-hover:text-orange-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-yellow-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Manufacturing Innovation Frontiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that are revolutionizing manufacturing and Industry 4.0
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Predictive Maintenance',
                  description: 'AI-powered equipment failure prediction',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Smart Automation',
                  description: 'Intelligent manufacturing process automation',
                  icon: <Factory className="w-12 h-12 text-blue-400" />
                },
                {
                  title: 'Quality Control',
                  description: 'Advanced AI quality assurance systems',
                  icon: <Target className="w-12 h-12 text-purple-400" />
                },
                {
                  title: 'IoT Integration',
                  description: 'Connected manufacturing ecosystem',
                  icon: <Cog className="w-12 h-12 text-orange-400" />
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-400">
                    {innovation.description}
                  </p>
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
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Discover how our AI solutions can optimize your manufacturing operations and drive Industry 4.0 innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Manufacturing Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
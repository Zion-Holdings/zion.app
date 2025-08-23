import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cpu, 
  Shield, 
  Database, 
  Cloud, 
  Lock, 
  Activity, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  Settings,
  Gauge
} from 'lucide-react';
import Link from 'next/link';

const ManufacturingAISolutions: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Predictive Maintenance',
      description: 'Machine learning algorithms for predictive equipment maintenance and optimization',
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      features: ['Equipment health monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization'],
      href: '/ai-predictive-maintenance'
    },
    {
      title: 'Quality Control Automation',
      description: 'Computer vision and AI for automated quality inspection and defect detection',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['Visual inspection', 'Defect detection', 'Quality metrics', 'Real-time monitoring'],
      href: '/quality-control-automation'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-driven supply chain management and inventory optimization',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      features: ['Demand forecasting', 'Inventory management', 'Route optimization', 'Supplier analytics'],
      href: '/supply-chain-optimization'
    },
    {
      title: 'Production Planning & Scheduling',
      description: 'Intelligent production planning and resource allocation systems',
      icon: <Gauge className="w-8 h-8 text-cyan-400" />,
      features: ['Production scheduling', 'Resource allocation', 'Capacity planning', 'Performance tracking'],
      href: '/production-planning-scheduling'
    },
    {
      title: 'IoT Manufacturing Platform',
      description: 'Connected manufacturing systems with real-time monitoring and control',
      icon: <Activity className="w-8 h-8 text-orange-400" />,
      features: ['Device integration', 'Real-time data', 'Remote monitoring', 'Performance analytics'],
      href: '/iot-manufacturing-platform'
    },
    {
      title: 'Energy Management & Optimization',
      description: 'AI-powered energy consumption optimization and sustainability solutions',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['Energy monitoring', 'Consumption optimization', 'Sustainability tracking', 'Cost reduction'],
      href: '/energy-management-optimization'
    }
  ];

  const benefits = [
    'Increased production efficiency and reduced downtime',
    'Improved product quality and reduced defects',
    'Optimized supply chain and inventory management',
    'Enhanced predictive maintenance and equipment longevity',
    'Reduced operational costs and energy consumption',
    'Real-time monitoring and data-driven decision making'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <Factory className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Manufacturing AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing manufacturing with cutting-edge AI, IoT, and automation 
                solutions for Industry 4.0 and smart factory transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Manufacturing Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/market-pricing"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From predictive maintenance to quality control automation, 
                we provide end-to-end manufacturing AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep manufacturing expertise 
                to deliver solutions that drive operational excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our manufacturing AI solutions can 
                revolutionize your production processes and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Manufacturing Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingAISolutions;
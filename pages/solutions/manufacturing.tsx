import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cpu, Database, Users, Activity, 
  Brain, Zap, Target, Award, CheckCircle, ArrowRight,
  Settings, Factory, Gauge, Shield
} from 'lucide-react';

const ManufacturingSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Manufacturing & IoT',
      description: 'Connected IoT solutions for real-time monitoring and predictive maintenance',
      features: [
        'Real-time equipment monitoring',
        'Predictive maintenance alerts',
        'Performance optimization',
        'Energy efficiency tracking'
      ],
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'AI-Powered Quality Control',
      description: 'Advanced AI algorithms for automated quality inspection and defect detection',
      features: [
        'Computer vision inspection',
        'Defect detection algorithms',
        'Quality metrics tracking',
        'Automated reporting'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and automation',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier management',
        'Logistics optimization'
      ],
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical manufacturing processes for simulation and optimization',
      features: [
        'Process simulation',
        'Performance modeling',
        'Scenario planning',
        'Optimization recommendations'
      ],
      icon: Factory,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    'Increased production efficiency and output',
    'Reduced downtime through predictive maintenance',
    'Improved product quality and consistency',
    'Lower operational costs and waste reduction',
    'Enhanced supply chain visibility and control',
    'Scalable solutions for manufacturing growth'
  ];

  return (
    <Layout 
      title="Manufacturing Solutions - Zion Tech Group"
      description="Revolutionary AI-powered manufacturing solutions for smart factories, quality control, and supply chain optimization."
      keywords="smart manufacturing, IoT, quality control, supply chain, digital twin, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Manufacturing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing manufacturing with AI-powered solutions that optimize production, 
                enhance quality control, and transform supply chain operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Manufacturing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge technology solutions address the most critical challenges 
                in modern manufacturing and industrial operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our manufacturing solutions deliver measurable results and transform 
                the way industrial operations function.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading manufacturing companies that trust Zion Tech Group 
                to deliver innovative solutions that optimize production and quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ManufacturingSolutions;
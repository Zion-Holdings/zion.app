import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Brain, Zap, Database, Globe, Lock, Factory, Eye } from 'lucide-react';
import Link from 'next/link';

const ManufacturingAISolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered equipment monitoring and predictive maintenance',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      features: ['Real-time Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization']
    },
    {
      title: 'Quality Control',
      description: 'Computer vision and AI for automated quality inspection',
      icon: <Eye className="w-8 h-8 text-green-400" />,
      features: ['Defect Detection', 'Quality Metrics', 'Process Optimization', 'Real-time Alerts']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain management and optimization',
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: ['Demand Forecasting', 'Inventory Management', 'Route Optimization', 'Supplier Analytics']
    },
    {
      title: 'Process Automation',
      description: 'Robotic process automation for manufacturing workflows',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['Workflow Automation', 'Data Integration', 'Performance Analytics', 'Continuous Improvement']
    }
  ];

  const industryBenefits = [
    '30% Reduction in Downtime', '25% Cost Savings', '50% Faster Production', '99.9% Quality Rate'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Manufacturing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              AI Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform manufacturing with Industry 4.0 AI solutions. 
            From predictive maintenance to quality control, we help manufacturers increase efficiency and reduce costs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {solution.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Industry Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Industry 4.0 Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Manufacturing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">30%</div>
            <div className="text-gray-300">Downtime Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25%</div>
            <div className="text-gray-300">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50%</div>
            <div className="text-gray-300">Faster Production</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Quality Rate</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Manufacturing
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Let's discuss how our AI solutions can revolutionize your manufacturing operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Manufacturing Assessment
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManufacturingAISolutionsPage;
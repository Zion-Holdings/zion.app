import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Zap, Shield, Globe, Rocket, Star, 
  ArrowRight, CheckCircle, TrendingUp, Users, Award
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    price: '$199/month',
    features: ['AI Code Review', 'Testing Automation', 'DevOps Intelligence', 'Security Automation'],
    popular: true
  },
  {
    id: 'micro-saas',
    name: 'Micro SaaS Solutions',
    description: 'Scalable, focused software solutions for specific business needs',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    price: '$99/month',
    features: ['Custom Development', 'API Integration', 'Cloud Deployment', '24/7 Support']
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    description: 'Robust cloud solutions for scalability and reliability',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    price: '$299/month',
    features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Disaster Recovery']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-pink-500',
    price: '$399/month',
    features: ['Threat Detection', 'Penetration Testing', 'Compliance Auditing', 'Incident Response']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Next-generation quantum solutions for complex problems',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    price: '$599/month',
    features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research Support']
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3',
    description: 'Decentralized solutions for the future of the internet',
    icon: <Star className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    price: '$249/month',
    features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'DAO Governance']
  }
];

export default function FuturisticServicesShowcase() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-4 h-4" /> },
    { id: 'ai-automation', name: 'AI & Automation', icon: <Brain className="w-4 h-4" /> },
    { id: 'micro-saas', name: 'Micro SaaS', icon: <Zap className="w-4 h-4" /> },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: <Globe className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: <Rocket className="w-4 h-4" /> },
    { id: 'blockchain-web3', name: 'Blockchain & Web3', icon: <Star className="w-4 h-4" /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.id === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.1)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge technology solutions designed to 
            transform your business and accelerate innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 border border-cyan-500/20 text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-500/40'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative group cursor-pointer ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {/* Service Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Elements */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our revolutionary technology solutions 
              to accelerate growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                View All Services
              </button>
              <button className="border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500/10">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
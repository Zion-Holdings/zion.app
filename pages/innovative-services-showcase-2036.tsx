import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { real2036InnovativeServicesAdditions } from '../data/real-2036-innovative-services-additions';
import { real2036SpaceTechAdditions } from '../data/real-2036-space-tech-additions';
import { real2036CybersecurityAdditions } from '../data/real-2036-cybersecurity-additions';

const InnovativeServicesShowcase2036: React.FC = () => {
  const allInnovativeServices = [
    ...real2036InnovativeServicesAdditions,
    ...real2036SpaceTechAdditions,
    ...real2036CybersecurityAdditions
  ];

  const featuredServices = allInnovativeServices.filter(service => service.popular).slice(0, 6);
  const latestServices = allInnovativeServices
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 6);

  const categories = [
    'Sustainability & ESG',
    'Healthcare & Biotech',
    'Space Technology',
    'Cybersecurity',
    'Quantum Computing',
    'AI & Machine Learning',
    'Education & EdTech',
    'Creative & Marketing'
  ];

  const getServicesByCategory = (category: string) => {
    return allInnovativeServices.filter(service => 
      service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
  };

  return (
    <Layout>
      <SEO 
        title="Innovative Services Showcase 2036 - Zion Tech Group"
        description="Discover our cutting-edge innovative services including AI-powered solutions, quantum computing, space technology, cybersecurity, and more. Transform your business with future-ready technology."
        keywords="innovative services, AI solutions, quantum computing, space technology, cybersecurity, sustainability, healthcare, education, creative technology"
      />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative Services 2036
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our revolutionary technology solutions that are shaping the future of business, 
              science, and human progress
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                {allInnovativeServices.length}+ Innovative Services
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                {categories.length} Technology Categories
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                Future-Ready Solutions
              </span>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI-powered sustainability platforms to quantum-enhanced space technology, 
              our innovative services are designed to solve tomorrow's challenges today
            </p>
          </motion.div>

          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Innovations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <UltraFuturisticServiceCard2026
                      service={service}
                      variant="quantum"
                      theme="quantum"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Latest Services */}
          {latestServices.length > 0 && (
            <motion.section 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Innovations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <UltraFuturisticServiceCard2026
                      service={service}
                      variant="quantum"
                      theme="quantum"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Category Showcase */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Explore by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const categoryServices = getServicesByCategory(category);
                return (
                  <motion.div
                    key={category}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white">{category}</h3>
                    <p className="text-gray-400 mb-4">
                      {categoryServices.length} innovative solutions
                    </p>
                    <div className="space-y-2">
                      {categoryServices.slice(0, 3).map(service => (
                        <div key={service.id} className="flex items-center space-x-2 text-sm text-gray-300">
                          <span className="text-cyan-400">{service.icon}</span>
                          <span className="truncate">{service.name}</span>
                        </div>
                      ))}
                      {categoryServices.length > 3 && (
                        <p className="text-xs text-gray-500">
                          +{categoryServices.length - 3} more services
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Innovation Highlights */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Innovation Highlights
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI-Powered Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Our AI services leverage cutting-edge machine learning and neural networks to 
                  solve complex business challenges and drive innovation across industries.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Natural Language Processing & Understanding</li>
                  <li>• Computer Vision & Image Recognition</li>
                  <li>• Predictive Analytics & Forecasting</li>
                  <li>• Autonomous Systems & Robotics</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Quantum Computing</h3>
                <p className="text-gray-300 mb-4">
                  Harness the power of quantum mechanics to solve previously intractable problems 
                  in cryptography, optimization, and scientific simulation.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Quantum Cryptography & Security</li>
                  <li>• Quantum Machine Learning</li>
                  <li>• Quantum Optimization</li>
                  <li>• Quantum Simulation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-300">Space Technology</h3>
                <p className="text-gray-300 mb-4">
                  Pioneer the next frontier with our space technology solutions, from satellite 
                  systems to space mining operations and interplanetary exploration.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Satellite Communication & Navigation</li>
                  <li>• Space Debris Management</li>
                  <li>• Asteroid Mining Operations</li>
                  <li>• Space Tourism & Research</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-300">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Protect your digital assets with our advanced cybersecurity solutions, 
                  featuring AI-powered threat detection and quantum-resistant encryption.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• AI-Powered Threat Hunting</li>
                  <li>• Zero Trust Architecture</li>
                  <li>• Post-Quantum Cryptography</li>
                  <li>• Compliance & Governance</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Innovate?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge innovative services. 
                Contact us today to discover how we can help you stay ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default InnovativeServicesShowcase2036;
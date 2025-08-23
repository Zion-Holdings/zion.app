import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Satellite, Globe, Zap, Target, Users, 
  Database, Shield, ArrowRight, Star, CheckCircle,
  Cpu, HardDrive, Network, BarChart3
} from 'lucide-react';

const SpaceTechnologyPage: React.FC = () => {
  const spaceServices = [
    {
      category: 'Space Infrastructure',
      services: [
        {
          name: 'Space Resource Mining Platform',
          description: 'Advanced platforms for extracting and processing resources from space',
          href: '/space-resource-mining-platform',
          featured: true,
          icon: <Rocket className="w-6 h-6" />
        },
        {
          name: 'AI-Powered Space Technology',
          description: 'Intelligent systems for space exploration and operations',
          href: '/ai-powered-space-technology',
          featured: true,
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Space Technology AI Platform',
          description: 'Comprehensive AI solutions for space industry applications',
          href: '/space-technology-ai-platform',
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Satellite & Communication',
      services: [
        {
          name: '5G Private Network Solutions',
          description: 'Advanced 5G networks for space and terrestrial applications',
          href: '/5g-private-network-solutions',
          featured: true,
          icon: <Network className="w-6 h-6" />
        },
        {
          name: 'Satellite Communication Systems',
          description: 'Reliable communication infrastructure for space operations',
          href: '/satellite-communication-systems',
          icon: <Satellite className="w-6 h-6" />
        },
        {
          name: 'Space Internet Infrastructure',
          description: 'Global internet connectivity through space-based systems',
          href: '/space-internet-infrastructure',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Space Exploration & Research',
      services: [
        {
          name: 'Space Colonization Services',
          description: 'Comprehensive solutions for establishing human presence in space',
          href: '/space-colonization-services',
          featured: true,
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'Space Mining Automation',
          description: 'Automated systems for resource extraction and processing in space',
          href: '/space-mining-automation-platform',
          icon: <HardDrive className="w-6 h-6" />
        },
        {
          name: 'Space Research Platforms',
          description: 'Advanced research tools and platforms for space science',
          href: '/space-research-platforms',
          icon: <Database className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Space Security & Monitoring',
      services: [
        {
          name: 'Space Security Systems',
          description: 'Comprehensive security solutions for space assets and operations',
          href: '/space-security-systems',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Space Traffic Management',
          description: 'Advanced systems for managing space traffic and preventing collisions',
          href: '/space-traffic-management',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'Space Debris Monitoring',
          description: 'Real-time monitoring and tracking of space debris',
          href: '/space-debris-monitoring',
          icon: <Target className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Space Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary space solutions that push the boundaries of human exploration and unlock the potential of the cosmos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From resource mining to space colonization, our technology enables humanity's expansion into space.
            </p>
          </motion.div>

          <div className="space-y-16">
            {spaceServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 ${
                        service.featured ? 'border-blue-500/30' : 'border-gray-700/50'
                      }`}
                    >
                      {service.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Final Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our space technology solutions can advance your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Space Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SpaceTechnologyPage;


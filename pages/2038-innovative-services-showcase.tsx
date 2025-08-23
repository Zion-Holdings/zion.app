import React from 'react';
import Layout from '../components/layout/Layout';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Brain, Atom, Shield, Zap, 
  TrendingUp, Globe, Rocket, Cpu, Database, 
  Network, Lock, Cloud, Users, Target, Award
} from 'lucide-react';
import Link from 'next/link';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';

const ServicesShowcase2038: React.FC = () => {
  const allServices = [
    ...innovative2038AIServices,
    ...innovative2038ITServices,
    ...innovative2038MicroSaasServices
  ];

  const categories = [
    'AI & Quantum Consciousness',
    'Quantum Cloud Infrastructure',
    'Autonomous DevOps',
    'Quantum Network Security',
    'Quantum Data Center',
    'Quantum Edge Computing',
    'Quantum AI Sales',
    'Quantum AI Marketing',
    'Quantum AI Customer Service',
    'Quantum AI HR',
    'Quantum AI Finance'
  ];

  const getServicesByCategory = (category: string) => {
    return allServices.filter(service => 
      service.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                2038 Innovative Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary quantum AI, autonomous systems, and cutting-edge technology solutions that are transforming industries and businesses worldwide
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{innovative2038AIServices.length}</div>
                  <div className="text-gray-300">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{innovative2038ITServices.length}</div>
                  <div className="text-gray-300">IT Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{innovative2038MicroSaasServices.length}</div>
                  <div className="text-gray-300">Micro SAAS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {categories.map((category, categoryIndex) => {
              const categoryServices = getServicesByCategory(category);
              if (categoryServices.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-20"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categoryServices.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <UltraFuturisticServiceCard2026
                          service={{
                            id: service.id,
                            name: service.name,
                            tagline: service.tagline,
                            description: service.description,
                            price: service.price,
                            period: service.period,
                            features: service.features.slice(0, 3),
                            popular: service.popular,
                            category: service.category,
                            icon: service.icon
                          }}
                          variant={service.variant.includes('ai') ? 'ai' : service.variant.includes('quantum') ? 'quantum' : service.variant.includes('enterprise') ? 'enterprise' : service.variant.includes('it') ? 'it' : 'default'}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Featured Revolutionary Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.filter(service => service.popular).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description.substring(0, 120)}...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="mt-4">
                      <Link href={service.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our revolutionary services and how they can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Contact Us
                  </button>
                </Link>
                <Link href="/get-started">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ServicesShowcase2038;
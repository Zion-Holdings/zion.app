import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Brain, Zap, Target, Cpu, Shield, TrendingUp, Users,
  Rocket, Globe, Lock, Cloud, Settings, Eye, Award, Clock
} from 'lucide-react';

const QuantumServices: React.FC = () => {
  const quantumServices = [
    {
      title: "Quantum Computing Platforms",
      icon: <Atom className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "Quantum Neural Network Platform", href: "/quantum-neural-network-platform", featured: true },
        { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure-platform", featured: true },
        { name: "Quantum Bio-Computing Platform", href: "/quantum-bio-computing-platform" },
        { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery-platform" }
      ]
    },
    {
      title: "Quantum Security & Networks",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      services: [
        { name: "Quantum Internet Security Platform", href: "/quantum-internet-security-platform", featured: true },
        { name: "Quantum Cybersecurity Platform", href: "/quantum-cybersecurity-platform" },
        { name: "Quantum-Secure Cloud Infrastructure", href: "/quantum-secure-cloud-infrastructure" },
        { name: "Quantum Encryption Solutions", href: "/quantum-encryption-solutions" }
      ]
    },
    {
      title: "Quantum Financial & Trading",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "Quantum Financial Trading Platform", href: "/quantum-financial-trading", featured: true },
        { name: "Quantum Risk Analysis", href: "/quantum-risk-analysis" },
        { name: "Quantum Portfolio Optimization", href: "/quantum-portfolio-optimization" },
        { name: "Quantum Market Prediction", href: "/quantum-market-prediction" }
      ]
    },
    {
      title: "Quantum Energy & Materials",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "Quantum Energy Platform", href: "/quantum-energy-platform" },
        { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery-platform" },
        { name: "Quantum Battery Technology", href: "/quantum-battery-technology" },
        { name: "Quantum Solar Optimization", href: "/quantum-solar-optimization" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full">
                  <Atom className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Quantum Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary quantum computing solutions that leverage the power of quantum mechanics 
                to solve complex problems and unlock new possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Explore Quantum Services
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Quantum Service Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive quantum services cover every aspect of quantum computing, 
                from fundamental research to practical business applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {quantumServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Award className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Revolution?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Experience the future of computing with our quantum technology services. 
                Transform your business with quantum-powered solutions that were once science fiction.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumServices;
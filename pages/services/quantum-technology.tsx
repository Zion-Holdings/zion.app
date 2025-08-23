import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, Cpu, Zap, Shield, Target, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, FileText, GraduationCap, DollarSign, Clock
} from 'lucide-react';

const QuantumTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Next-generation quantum processors with unprecedented computational power",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum mechanical principles",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Cpu,
      title: "Hybrid Quantum Systems",
      description: "Seamless integration of quantum and classical computing",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Quantum Algorithms",
      description: "Optimized algorithms for quantum advantage in specific applications",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "Quantum Computing Platform",
      description: "Enterprise quantum computing platform with hybrid classical-quantum capabilities",
      price: "From $200,000",
      features: ["Quantum processors", "Hybrid optimization", "Quantum error correction", "Scalable architecture"]
    },
    {
      title: "Quantum Cryptography Suite",
      description: "Complete quantum-safe encryption and key distribution system",
      price: "From $75,000",
      features: ["Quantum key distribution", "Post-quantum cryptography", "Secure communication", "Compliance ready"]
    },
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for specific business applications",
      price: "From $50,000",
      features: ["Custom algorithms", "Performance optimization", "Integration support", "Ongoing maintenance"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Qubits Capacity", icon: Atom },
    { number: "99.99%", label: "Security Guarantee", icon: Shield },
    { number: "100x", label: "Speed Increase", icon: Zap },
    { number: "24/7", label: "Quantum Access", icon: Clock }
  ];

  return (
    <Layout 
      title="Quantum Technology Services - Zion Tech Group"
      description="Revolutionary quantum computing, cryptography, and hybrid systems. Unlock unprecedented computational power and unbreakable security."
      keywords="quantum computing, quantum cryptography, hybrid quantum systems, quantum algorithms, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/quantum-technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Quantum <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Harnessing the power of quantum mechanics to revolutionize computing, 
                cryptography, and solve problems that were once impossible for classical computers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" /> Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Quantum Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum technology services leverage the fundamental principles of quantum mechanics 
                to deliver unprecedented computational power and security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum solutions designed to give your business a competitive advantage 
                through superior computing power and security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-cyan-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Revolution?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Experience the future of computing with our revolutionary quantum technology solutions.
              </p>
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Start Your Quantum Journey
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumTechnologyPage;
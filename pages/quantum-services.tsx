import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Database, 
  Shield, 
  Cloud, 
  Network, 
  Zap, 
  Target, 
  Brain, 
  Rocket,
  BarChart3,
  Code,
  Globe,
  Lock,
  Server,
  Settings,
  Star,
  ArrowRight,
  Users,
  TrendingUp,
  Heart,
  Eye
} from 'lucide-react';

const QuantumServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Neural Networks',
      description: 'Next-generation quantum neural network platforms for advanced AI',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      features: ['Quantum Superposition', 'Entanglement Processing', 'Quantum Memory'],
      href: '/quantum-neural-network-platform-2045'
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Unbreakable quantum encryption and security solutions',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum-resistant Algorithms'],
      href: '/quantum-cybersecurity-platform-2045'
    },
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Scalable quantum computing in the cloud',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      features: ['Quantum-as-a-Service', 'Hybrid Classical-Quantum', 'Quantum Resource Management'],
      href: '/quantum-cloud-infrastructure-2045'
    },
    {
      title: 'Quantum Data Centers',
      description: 'Advanced quantum data center management systems',
      icon: <Server className="w-8 h-8 text-green-500" />,
      features: ['Quantum Cooling Systems', 'Error Correction', 'Quantum Networking'],
      href: '/quantum-data-center-management-2045'
    },
    {
      title: 'Quantum Financial Trading',
      description: 'Quantum algorithms for financial markets and trading',
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction'],
      href: '/quantum-financial-trading-platform'
    },
    {
      title: 'Quantum Materials Discovery',
      description: 'AI-powered quantum materials research and development',
      icon: <Atom className="w-8 h-8 text-cyan-500" />,
      features: ['Molecular Simulation', 'Property Prediction', 'Optimization Algorithms'],
      href: '/quantum-materials-discovery-platform'
    }
  ];

  const applications = [
    {
      name: 'Drug Discovery',
      description: 'Quantum simulation for pharmaceutical research',
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: 'Climate Modeling',
      description: 'Complex environmental system simulations',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Logistics Optimization',
      description: 'Quantum algorithms for supply chain optimization',
      icon: <Network className="w-6 h-6" />
    },
    {
      name: 'Machine Learning',
      description: 'Quantum-enhanced AI and ML algorithms',
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const advantages = [
    {
      title: 'Exponential Speed',
      description: 'Solve complex problems in seconds that would take classical computers years',
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational capabilities beyond classical computing limits',
      icon: <Star className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Parallel Processing',
      description: 'Process multiple possibilities simultaneously through quantum superposition',
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides theoretically unbreakable encryption',
      icon: <Shield className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <Layout 
      title="Quantum Services - Zion Tech Group"
      description="Revolutionary quantum computing solutions for the future of technology and business transformation"
      canonicalUrl="https://ziontechgroup.com/quantum-services"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {' '}Computing
                </span>
                {' '}Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the quantum revolution with next-generation computing solutions 
                that solve previously impossible problems and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/quantum-neural-network-platform-2045"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Explore Quantum AI
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Advantages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum computing represents the next paradigm shift in computational power, 
                offering unprecedented capabilities for complex problem-solving.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From neural networks to cybersecurity, our quantum services cover the full 
                spectrum of quantum computing applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is revolutionizing industries and solving 
                previously intractable problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={application.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-blue-400">
                      {application.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {application.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {application.description}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and discover how our quantum computing solutions 
                can solve your most complex challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Quantum Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumServicesPage;
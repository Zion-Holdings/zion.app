import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Shield, Lock, Zap, Target, Globe, Users, Award, Check,
  Clock, DollarSign, ArrowUpRight, Play, BookOpen, Code,
  Network, Cpu, Server
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  {
    title: 'Quantum Key Distribution (QKD)',
    description: 'Unbreakable encryption using quantum mechanics principles for secure key exchange',
    icon: Lock,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Real-time Quantum Monitoring',
    description: 'Continuous monitoring of quantum states and network security in real-time',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Multi-node Quantum Network',
    description: 'Distributed quantum network architecture for scalable secure communications',
    icon: Network,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Post-Quantum Cryptography',
    description: 'Future-proof encryption algorithms resistant to quantum computing attacks',
    icon: Cpu,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Quantum Memory Systems',
    description: 'Advanced quantum memory for storing and retrieving quantum information',
    icon: Server,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Compliance & Audit Trails',
    description: 'Comprehensive compliance frameworks and detailed audit logging',
    icon: CheckCircle,
    color: 'from-yellow-500 to-orange-500'
  }
];

const pricingPlans = [
  {
    name: 'Government',
    price: '$15,000',
    period: '/month',
    description: 'For government agencies and critical infrastructure',
    features: [
      'Quantum key distribution (QKD)',
      'Real-time quantum monitoring',
      'Multi-node quantum network',
      'Post-quantum cryptography',
      '24/7 dedicated support',
      'Compliance frameworks',
      'Custom integrations',
      'Security audits'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Enterprise',
    price: '$25,000',
    period: '/month',
    description: 'For large enterprises and financial institutions',
    features: [
      'Everything in Government',
      'Advanced quantum memory',
      'Quantum entanglement distribution',
      'Multi-party quantum protocols',
      'Dedicated account manager',
      'Custom security protocols',
      'White-label solutions',
      'API access'
    ],
    popular: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Defense',
    price: '$50,000',
    period: '/month',
    description: 'For defense contractors and military applications',
    features: [
      'Everything in Enterprise',
      'Military-grade security',
      'Classified information handling',
      'Custom quantum protocols',
      'On-site deployment',
      '24/7 phone support',
      'Security clearances',
      'Defense compliance'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  }
];

const useCases = [
  {
    title: 'Government Communications',
    description: 'Secure communication between government agencies and departments',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Financial Transactions',
    description: 'Unbreakable encryption for high-value financial operations',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Healthcare Data',
    description: 'Secure transmission of sensitive medical information',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Military Communications',
    description: 'Classified information exchange with quantum-level security',
    icon: Target,
    color: 'from-orange-500 to-red-500'
  }
];

const integrations = [
  'Government Systems', 'Financial Platforms', 'Healthcare Networks', 'Military Infrastructure',
  'Cloud Providers', 'VPN Solutions', 'Firewall Systems', 'Identity Management',
  'Compliance Tools', 'Monitoring Systems', 'API Gateways', 'Custom Applications'
];

export default function QuantumSecureCommunicationNetwork() {
  return (
    <Layout>
      <Head>
        <title>Quantum-Secure Communication Network | Zion Tech Group</title>
        <meta name="description" content="Unbreakable communication infrastructure powered by quantum cryptography. Get quantum-secure communications with QKD and post-quantum cryptography." />
        <meta name="keywords" content="quantum secure communication, quantum cryptography, QKD, post-quantum cryptography, unbreakable encryption, quantum networks" />
        <meta property="og:title" content="Quantum-Secure Communication Network | Zion Tech Group" />
        <meta property="og:description" content="Unbreakable communication infrastructure powered by quantum cryptography." />
        <meta property="og:url" content="https://ziontechgroup.com/quantum-secure-communication-network" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-secure-communication-network" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  QUANTUM SECURITY
                </span>
                <span className="text-gray-400 text-sm">Launch Date: February 1, 2025</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Quantum-Secure Communication Network
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Unbreakable communication infrastructure powered by quantum cryptography. Get quantum-secure communications with QKD and post-quantum cryptography.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>1000%+ ROI through security breach prevention</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Unbreakable quantum encryption</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Real-time quantum monitoring</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Quantum Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum-secure communication network provides the highest level of security using cutting-edge quantum technologies.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Perfect For Critical Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum-secure network is designed for applications where security cannot be compromised.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Secure Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs and compliance requirements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-indigo-500' : 'border-gray-700'} rounded-2xl p-8 h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate with your existing security infrastructure and compliance systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Quantum-Secure Communications?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our quantum-secure communication network can protect your critical communications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-400">{contactInfo.mobile}</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-400">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/2025-innovative-new-services-showcase"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
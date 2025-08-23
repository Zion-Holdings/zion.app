import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Target, 
  CheckCircle,
  Star,
  AlertTriangle,
  Network
} from 'lucide-react';

const QuantumCybersecuritySentinel: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quantum Encryption',
      description: 'Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Zero-Trust Architecture',
      description: 'Advanced zero-trust security model with continuous verification and adaptive access controls.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Real-time Threat Detection',
      description: 'AI-powered threat detection that identifies and neutralizes cyber attacks in milliseconds.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quantum Network Security',
      description: 'Protect quantum networks with advanced quantum-resistant security protocols.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Predictive Security',
      description: 'Machine learning algorithms that predict and prevent cyber attacks before they occur.'
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Global Security Network',
      description: 'Distributed security infrastructure that provides protection across all network nodes.'
    }
  ];

  const securityThreats = [
    {
      threat: 'Quantum Attacks',
      description: 'Protection against future quantum computing attacks on current encryption standards.',
      solution: 'Quantum-resistant algorithms and post-quantum cryptography'
    },
    {
      threat: 'AI-Powered Attacks',
      description: 'Defense against sophisticated AI-driven cyber attacks and social engineering.',
      solution: 'Advanced AI threat detection and behavioral analysis'
    },
    {
      threat: 'Supply Chain Attacks',
      description: 'Protection against compromised software and hardware in the supply chain.',
      solution: 'Comprehensive supply chain verification and integrity checks'
    },
    {
      threat: 'Zero-Day Exploits',
      description: 'Detection and prevention of previously unknown vulnerabilities and exploits.',
      solution: 'Behavioral analysis and anomaly detection systems'
    }
  ];

  const pricing = [
    {
      name: 'Essential',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic quantum encryption',
        'Standard threat detection',
        'Email support',
        'Up to 100 endpoints',
        'Basic reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$12,500',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Advanced quantum security',
        'AI-powered threat detection',
        'Priority support',
        'Up to 1000 endpoints',
        'Advanced analytics',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full quantum security suite',
        'Custom development',
        'Dedicated security team',
        'Unlimited endpoints',
        'Advanced threat intelligence',
        '24/7 monitoring'
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Quantum Cybersecurity Sentinel | Zion Tech Group" 
        description="Next-generation quantum cybersecurity platform that provides unbreakable protection against all types of cyber threats."
        canonical="https://ziontechgroup.com/quantum-cybersecurity-sentinel/"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Quantum Security Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600 bg-clip-text text-transparent">
                Quantum Cybersecurity Sentinel
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The future of cybersecurity is here. Our quantum-powered platform provides unbreakable protection against all current and future cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Protected
                </a>
                <a
                  href="#demo"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Request Demo
                </a>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Unbreakable Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span>Quantum-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Future-Proof</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines quantum technology with AI to create the most advanced cybersecurity solution ever developed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Threats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Threats We Protect Against
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From current cyber threats to future quantum attacks, our platform provides comprehensive protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityThreats.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{threat.threat}</h3>
                      <p className="text-gray-300 mb-4">{threat.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Our Solution</h4>
                    <p className="text-gray-300">{threat.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Security Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible security solutions designed to protect organizations of all sizes from cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 border rounded-2xl p-8 ${
                    plan.name === 'Professional' 
                      ? 'border-blue-500/40 scale-105' 
                      : 'border-gray-600/30'
                  }`}
                >
                  {plan.name === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.name === 'Professional'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                    }`}
                  >
                    Get Protected
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for the next cyber attack. Protect your organization with quantum-powered cybersecurity today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Protection
                </a>
                <a
                  href="/security"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumCybersecuritySentinel;
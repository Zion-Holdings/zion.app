import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Brain, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  FileText, Settings, Monitor, Smartphone, AlertTriangle, ShieldCheck,
  Zap as ZapIcon, DollarSign, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function QuantumCybersecurityPage() {
  const features = [
    {
      icon: Shield,
      title: 'Quantum-Resistant Encryption',
      description: 'Advanced cryptographic algorithms that remain secure even against quantum computers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Machine learning algorithms that identify and respond to threats in real-time',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Verify every user and device before granting access to resources',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Advanced Monitoring',
      description: '24/7 surveillance of your digital infrastructure with instant threat response',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const securityLayers = [
    {
      name: 'Network Security',
      description: 'Advanced firewall protection and intrusion detection systems',
      features: ['Next-gen firewalls', 'DDoS protection', 'VPN solutions', 'Network segmentation']
    },
    {
      name: 'Endpoint Security',
      description: 'Comprehensive protection for all devices and endpoints',
      features: ['Antivirus & antimalware', 'Device control', 'Data loss prevention', 'Mobile security']
    },
    {
      name: 'Cloud Security',
      description: 'Secure cloud infrastructure and application protection',
      features: ['Cloud access security', 'API security', 'Container security', 'Cloud compliance']
    },
    {
      name: 'Data Protection',
      description: 'Encryption and access control for sensitive information',
      features: ['Data encryption', 'Access management', 'Backup security', 'Compliance tools']
    }
  ];

  const pricing = {
    starter: {
      price: '$499/month',
      features: [
        'Basic quantum encryption',
        'AI threat detection',
        '24/7 monitoring',
        'Email support',
        'Up to 100 users'
      ]
    },
    professional: {
      price: '$999/month',
      features: [
        'Advanced quantum algorithms',
        'Real-time threat response',
        'Priority support (2hr)',
        'Custom security policies',
        'Up to 1000 users',
        'Compliance reporting',
        'Security training'
      ]
    },
    enterprise: {
      price: '$2,499/month',
      features: [
        'Custom quantum solutions',
        'Dedicated security team',
        '24/7 phone support',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantees',
        'White-label options'
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Quantum Cybersecurity - Zion Tech Group | Future-Proof Security Solutions</title>
        <meta name="description" content="Future-proof your business with quantum-resistant cybersecurity. AI-powered threat detection, zero-trust architecture, and advanced encryption." />
        <meta name="keywords" content="quantum cybersecurity, AI security, threat detection, zero-trust security, encryption" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-cybersecurity" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Quantum Cybersecurity
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              Future-proof your business with quantum-resistant encryption, AI-powered threat detection, and zero-trust security architecture that stays ahead of evolving cyber threats.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
                <Shield className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Watch Demo
                <Rocket className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our quantum cybersecurity platform combines cutting-edge technology with proven security practices to protect your business from all types of threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Multi-Layer Security Architecture</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive protection across all aspects of your digital infrastructure with multiple security layers working together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 mr-2" />
                    {layer.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{layer.description}</p>
                  <ul className="space-y-3">
                    {layer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Intelligence Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">AI-Powered Threat Intelligence</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our advanced AI systems continuously analyze global threat data to identify emerging risks and automatically update your security posture.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Real-time threat detection and response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Machine learning-based anomaly detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Automated incident response and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Predictive threat modeling and prevention</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20"
              >
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Threat Intelligence Dashboard</h3>
                  <p className="text-gray-300 mb-6">
                    Monitor your security posture in real-time with our comprehensive threat intelligence dashboard.
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Active Threats</span>
                      <span className="text-red-400 font-semibold">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Security Score</span>
                      <span className="text-green-400 font-semibold">98/100</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Last Scan</span>
                      <span className="text-cyan-400 font-semibold">2 min ago</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Security Plans</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the security plan that best fits your organization&apos;s needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan === 'professional'
                      ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                      : 'border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  {plan === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{details.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan === 'professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700/50 text-white border border-gray-600/50 hover:bg-gray-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Secure Your Future Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don&apos;t wait for a security breach. Protect your business with quantum-resistant cybersecurity that evolves with emerging threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Security Assessment
                  <Shield className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Atom, Brain, Zap, CheckCircle, 
  ArrowRight, Star, TrendingUp, Key, 
  Eye, AlertTriangle, Clock, Users, Globe, Cpu
} from 'lucide-react';

const QuantumResistantCryptographyPlatform2025 = () => {
  const features = [
    'Post-quantum cryptographic algorithms',
    'Hybrid encryption systems',
    'Quantum key distribution',
    'Secure key management',
    'API encryption services',
    'Database encryption',
    'File encryption',
    'Communication encryption',
    'Compliance certifications',
    'Performance optimization',
    'Multi-platform support',
    'Developer SDKs'
  ];

  const benefits = [
    'Future-proof security against quantum threats',
    'Maintain data confidentiality for decades',
    'Compliance with emerging security standards',
    'Seamless migration from traditional crypto',
    'High-performance encryption',
    'Reduced security risks',
    'Competitive security advantage',
    'Long-term data protection'
  ];

  const useCases = [
    'Financial institutions',
    'Healthcare organizations',
    'Government agencies',
    'Defense contractors',
    'Cloud service providers',
    'IoT device manufacturers',
    'Blockchain platforms',
    'Critical infrastructure'
  ];

  const pricing = {
    starter: {
      price: '$299/month',
      features: [
        'Basic quantum-resistant encryption',
        'Up to 100GB data encryption',
        'Standard algorithms support',
        'Email support',
        'Basic compliance reporting',
        'API access (1000 calls/month)'
      ]
    },
    professional: {
      price: '$799/month',
      features: [
        'Advanced quantum-resistant algorithms',
        'Up to 1TB data encryption',
        'Hybrid encryption systems',
        'Priority support',
        'Advanced compliance features',
        'API access (10,000 calls/month)',
        'Custom key management',
        'Performance optimization'
      ]
    },
    enterprise: {
      price: '$1,999/month',
      features: [
        'Full quantum-resistant suite',
        'Unlimited data encryption',
        'Custom algorithm development',
        'Dedicated support team',
        'Full compliance automation',
        'Unlimited API access',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEO 
        title="Quantum-Resistant Cryptography Platform 2025 | Zion Tech Group"
        description="Future-proof cryptography solutions resistant to quantum computing attacks. Maintain data confidentiality for decades with post-quantum cryptographic algorithms."
        keywords="quantum-resistant cryptography, post-quantum crypto, quantum key distribution, quantum security, encryption, cybersecurity, quantum computing"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum & Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum-Resistant 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Cryptography Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Future-proof cryptography solutions resistant to quantum computing attacks. 
              Provides seamless migration from traditional to quantum-resistant encryption with hybrid systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Future-Proof Your Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum-resistant platform ensures your data remains secure even in the quantum computing era
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Quantum-Resistant", desc: "Protection against future quantum computing attacks" },
              { icon: Lock, title: "Decades of Security", desc: "Maintain data confidentiality for the long term" },
              { icon: Zap, title: "High Performance", desc: "Optimized algorithms for minimal performance impact" },
              { icon: Key, title: "Seamless Migration", desc: "Easy transition from traditional cryptography" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Cryptographic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum-resistant encryption with hybrid systems and advanced key management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financial institutions to government agencies, our platform secures critical data worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 text-center"
              >
                <Users className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Quantum-Resistant Cryptography?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional encryption methods will become vulnerable as quantum computing advances
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">The Quantum Threat</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Traditional RSA Encryption</h4>
                    <p className="text-gray-400">Vulnerable to quantum attacks, can be broken in minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Current ECC Encryption</h4>
                    <p className="text-gray-400">Also vulnerable to quantum computing attacks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Our Quantum-Resistant Solution</h4>
                    <p className="text-gray-400">Mathematically proven to resist quantum attacks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <Cpu className="w-32 h-32 text-indigo-400" />
              </div>
              <p className="text-gray-400 mt-4">Quantum Computing Threat Timeline</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your security requirements and data volume
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, details], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-8 rounded-2xl backdrop-blur-xl border ${
                  plan === 'professional' 
                    ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/50' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">
                    {plan}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    {details.price}
                  </div>
                  {plan === 'professional' && (
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan === 'professional'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Growing Market Demand
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The quantum-resistant cryptography market is expanding rapidly as organizations prepare for quantum threats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-indigo-400 mb-2">$8.7B</div>
              <p className="text-gray-300">Market Size by 2025</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <p className="text-gray-300">Quantum Attack Resistance</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-green-400 mb-2">Decades</div>
              <p className="text-gray-300">Long-term Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Future-Proof Your Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to learn more about quantum-resistant cryptography and secure your data for decades to come
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Globe className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumResistantCryptographyPlatform2025;
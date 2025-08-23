import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Globe, 
  Brain, 
  Target, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
  Atom,
  Network,
  Key
} from 'lucide-react';

const QuantumInternetSecurityGateway: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Quantum Key Distribution",
      description: "Unbreakable encryption using quantum entanglement and quantum key distribution protocols"
    },
    {
      icon: Lock,
      title: "Post-Quantum Cryptography",
      description: "Advanced cryptographic algorithms resistant to quantum computing attacks"
    },
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "AI consciousness-powered threat detection and response systems"
    },
    {
      icon: Atom,
      title: "Quantum-Resistant Algorithms",
      description: "Next-generation algorithms designed to withstand quantum computing threats"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 quantum security monitoring with instant threat response"
    },
    {
      icon: Network,
      title: "Multi-Protocol Support",
      description: "Support for all major internet protocols with quantum security"
    }
  ];

  const benefits = [
    "Unbreakable encryption using quantum mechanics",
    "Future-proof security against quantum computing threats",
    "Quantum advantage in security operations",
    "Enhanced privacy and data protection",
    "Full regulatory compliance and certifications",
    "Scalable security operations for any organization",
    "Reduced security risks and vulnerabilities",
    "Competitive advantage in security",
    "Cost-effective quantum security solutions",
    "Innovation leadership in cybersecurity"
  ];

  const useCases = [
    "Government agencies and defense",
    "Financial institutions and banks",
    "Healthcare organizations",
    "Technology companies",
    "Research institutions",
    "Defense contractors",
    "Telecommunications providers",
    "Energy companies",
    "Transportation companies",
    "Educational institutions"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small organizations and startups",
      features: [
        "Basic quantum key distribution",
        "Post-quantum cryptography",
        "AI threat detection",
        "Real-time monitoring",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for growing businesses and institutions",
      features: [
        "Advanced quantum security",
        "Multi-protocol support",
        "Advanced threat detection",
        "Performance analytics",
        "Priority support",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$24,999",
      period: "/month",
      description: "For large enterprises and government agencies",
      features: [
        "Full quantum security suite",
        "Custom quantum protocols",
        "Dedicated security team",
        "24/7 phone support",
        "Custom development",
        "SLA guarantees",
        "Compliance certifications"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-indigo-600/20 animate-pulse"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Quantum Internet Security Gateway
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Next-generation quantum internet security with AI consciousness and quantum encryption for the quantum internet era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of internet security with quantum computing and AI consciousness
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unbreakable Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum security can protect your organization from future threats
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From government agencies to financial institutions, our quantum security protects all
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/20 text-center hover:border-blue-500/40 transition-all"
                >
                  <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Security Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible quantum security options designed for organizations of all sizes
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border ${
                    index === 1 
                      ? 'border-blue-500/40 shadow-xl shadow-blue-500/20' 
                      : 'border-blue-500/20'
                  } hover:border-blue-500/40 transition-all`}
                >
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                      index === 1
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">$12.7B</div>
                <p className="text-gray-300">Market Size by 2025</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
                <p className="text-gray-300">Security Guarantee</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                <p className="text-gray-300">Quantum Protection</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Quantum Security?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with the future of internet security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to secure your organization with quantum technology? Contact our team today
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <MapPin className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumInternetSecurityGateway;
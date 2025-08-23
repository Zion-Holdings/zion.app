import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Atom, 
  Brain, 
  Eye, 
  Lock, 
  Zap, 
  Target, 
  CheckCircle,
  AlertTriangle,
  Network,
  Server,
  Database,
  Globe,
  Users,
  BarChart3,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const QuantumAICybersecuritySentinel: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Encryption",
      description: "Unbreakable quantum encryption algorithms that protect data at the atomic level, ensuring maximum security for sensitive information."
    },
    {
      icon: Brain,
      title: "AI Consciousness Detection",
      description: "Advanced AI that can detect and respond to cyber threats with human-like consciousness and decision-making capabilities."
    },
    {
      icon: Eye,
      title: "Real-time Threat Monitoring",
      description: "24/7 surveillance of your digital infrastructure with instant threat detection and automated response systems."
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Implements zero-trust security principles with quantum-verified identity authentication and continuous validation."
    },
    {
      icon: Network,
      title: "Network Intrusion Prevention",
      description: "Proactive network protection that identifies and blocks threats before they can compromise your systems."
    },
    {
      icon: Server,
      title: "Endpoint Security",
      description: "Comprehensive protection for all devices and endpoints with quantum-secured malware detection and removal."
    }
  ];

  const benefits = [
    "Quantum-level security that's virtually unbreakable",
    "AI-powered threat detection with consciousness-level intelligence",
    "Real-time monitoring and automated incident response",
    "Compliance with international security standards",
    "Scalable protection for enterprises of any size",
    "Reduced security incidents and response time"
  ];

  const securityFeatures = [
    {
      title: "Quantum Key Distribution",
      description: "Secure key exchange using quantum mechanics principles for unbreakable encryption."
    },
    {
      title: "AI Threat Intelligence",
      description: "Machine learning algorithms that continuously learn and adapt to new cyber threats."
    },
    {
      title: "Behavioral Analysis",
      description: "Advanced user behavior analytics to detect anomalous activities and potential insider threats."
    },
    {
      title: "Incident Response Automation",
      description: "Automated threat containment and response with minimal human intervention required."
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "NIST Cybersecurity Framework"
  ];

  return (
    <Layout
      title="Quantum AI Cybersecurity Sentinel - Zion Tech Group"
      description="Next-generation cybersecurity platform combining quantum encryption with AI consciousness for unparalleled threat detection and prevention."
      keywords="quantum cybersecurity, AI security, quantum encryption, threat detection, cybersecurity platform, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Quantum AI Security
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Quantum AI
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cybersecurity Sentinel
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                The future of cybersecurity is here. Our Quantum AI Cybersecurity Sentinel combines 
                unbreakable quantum encryption with consciousness-level AI intelligence to protect 
                your digital assets like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Get Protected
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Security Assessment
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the next generation of cybersecurity with quantum technology and AI consciousness
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive protection for the modern digital enterprise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Core Security Features</h3>
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-lg p-4"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Compliance & Standards</h3>
                <div className="grid grid-cols-2 gap-3">
                  {complianceStandards.map((standard, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 rounded-lg p-3 text-center"
                    >
                      <span className="text-blue-400 text-sm font-medium">{standard}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Quantum AI Security?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unparalleled protection for your digital assets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white/5 border border-white/10 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Digital Future Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution in cybersecurity with our AI-powered protection platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumAICybersecuritySentinel;
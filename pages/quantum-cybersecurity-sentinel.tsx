import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Atom, Zap, Target, Award, Globe, Rocket, Cpu, Eye, AlertTriangle, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumCybersecuritySentinel() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                Quantum Cybersecurity Sentinel
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The ultimate quantum-powered cybersecurity platform that provides unbreakable protection 
                against current and future threats. Stay ahead of quantum attacks with quantum defense.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Quantum-Powered Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum cybersecurity platform provides unprecedented protection through 
                quantum encryption, threat detection, and automated response systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Encryption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Quantum Encryption</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Unbreakable quantum encryption that protects data from current and future threats.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quantum key distribution (QKD)</li>
                  <li>• Post-quantum cryptography</li>
                  <li>• Quantum-resistant algorithms</li>
                  <li>• End-to-end encryption</li>
                </ul>
              </motion.div>

              {/* Threat Detection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Threat Detection</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced AI-powered threat detection with quantum-enhanced pattern recognition.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real-time threat monitoring</li>
                  <li>• Behavioral analysis</li>
                  <li>• Anomaly detection</li>
                  <li>• Predictive threat modeling</li>
                </ul>
              </motion.div>

              {/* Automated Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Automated Response</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Instant automated response to security threats with minimal human intervention.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Instant threat containment</li>
                  <li>• Automated incident response</li>
                  <li>• Self-healing systems</li>
                  <li>• Recovery automation</li>
                </ul>
              </motion.div>

              {/* Quantum Network Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Network Security</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Comprehensive network protection with quantum-secured communication channels.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Quantum-secured VPN</li>
                  <li>• Network segmentation</li>
                  <li>• Traffic analysis</li>
                  <li>• DDoS protection</li>
                </ul>
              </motion.div>

              {/* Compliance & Governance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Compliance</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Built-in compliance with industry standards and regulatory requirements.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• SOC 2 compliance</li>
                  <li>• GDPR compliance</li>
                  <li>• HIPAA compliance</li>
                  <li>• PCI DSS compliance</li>
                </ul>
              </motion.div>

              {/* Quantum Threat Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Atom className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Threat Intelligence</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Global threat intelligence with quantum-enhanced analysis and prediction.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Global threat feeds</li>
                  <li>• Predictive analytics</li>
                  <li>• Threat correlation</li>
                  <li>• Risk assessment</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Dashboard Preview */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Real-Time Security Dashboard
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor your security posture in real-time with our intuitive quantum-powered dashboard.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-black/30 rounded-2xl border border-purple-500/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>

              <div className="text-center p-6 bg-black/30 rounded-2xl border border-blue-500/20">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-gray-300">Breaches</div>
              </div>

              <div className="text-center p-6 bg-black/30 rounded-2xl border border-cyan-500/20">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">&lt;1ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>

              <div className="text-center p-6 bg-black/30 rounded-2xl border border-green-500/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Detection Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Quantum-Secure Protection?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your organization with the most advanced cybersecurity platform available. 
                Stay ahead of quantum threats with quantum defense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Protected
                </a>
                <a
                  href="/quantum-cybersecurity-platform"
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
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
}
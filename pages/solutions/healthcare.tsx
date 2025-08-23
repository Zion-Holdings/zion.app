import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Shield, Zap, Cpu, Globe, 
  Users, Award, TrendingUp, CheckCircle, ArrowRight
} from 'lucide-react';

export default function HealthcareSolutions() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-6">
                Healthcare & Biotech Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered healthcare solutions that transform patient care, 
                accelerate drug discovery, and revolutionize medical diagnostics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Healthcare Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed specifically for healthcare providers, 
                biotech companies, and medical research institutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Diagnostics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Brain className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI-Powered Diagnostics</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced AI algorithms for early disease detection, medical imaging analysis, 
                  and predictive healthcare analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Medical image analysis
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Predictive diagnostics
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Risk assessment models
                  </li>
                </ul>
                <a href="/contact?service=AI-Diagnostics" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Drug Discovery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quantum Drug Discovery</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Quantum computing-powered molecular modeling and drug discovery 
                  platform for accelerated pharmaceutical research.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Molecular modeling
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Drug interaction simulation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Clinical trial optimization
                  </li>
                </ul>
                <a href="/contact?service=Quantum-Drug-Discovery" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Patient Care */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Heart className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Patient Care Automation</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Intelligent patient monitoring, automated care coordination, 
                  and personalized treatment planning systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Remote monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Care coordination
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Treatment optimization
                  </li>
                </ul>
                <a href="/contact?service=Patient-Care-Automation" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Cybersecurity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Healthcare Cybersecurity</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  HIPAA-compliant security solutions, patient data protection, 
                  and threat detection for healthcare systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    HIPAA compliance
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Data encryption
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Threat monitoring
                  </li>
                </ul>
                <a href="/contact?service=Healthcare-Cybersecurity" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Research Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Cpu className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Research Platform</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Collaborative research platform for medical professionals, 
                  data sharing, and clinical trial management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Clinical trial management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Data collaboration
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Research analytics
                  </li>
                </ul>
                <a href="/contact?service=Research-Platform" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Telemedicine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <Globe className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Telemedicine Solutions</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Advanced telemedicine platform with AI-powered triage, 
                  virtual consultations, and remote patient monitoring.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Virtual consultations
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    AI triage system
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Remote monitoring
                  </li>
                </ul>
                <a href="/contact?service=Telemedicine" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the healthcare revolution with our cutting-edge AI and quantum solutions. 
                Let's build the future of medicine together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Healthcare-Solutions"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services?category=healthcare"
                  className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
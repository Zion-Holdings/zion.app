import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Database, Shield, Zap, Globe, Cpu, 
  BookOpen, CheckCircle, ArrowRight, BarChart3, Lock, Brain
} from 'lucide-react';

export default function APIDocumentation() {
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive API reference for Zion Tech Group's cutting-edge 
                AI, quantum computing, and autonomous systems platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">API Overview</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our APIs provide programmatic access to Zion Tech Group's revolutionary 
                technology platforms and services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Platform API */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Platform API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Access our AI orchestration platform, machine learning models, 
                  and autonomous decision-making systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Model inference
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Training endpoints
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Orchestration
                  </li>
                </ul>
                <a href="#ai-api" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Quantum Computing API */}
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
                  <h3 className="text-2xl font-bold text-white">Quantum Computing API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Interact with our quantum computing platforms, quantum algorithms, 
                  and hybrid quantum-classical systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Quantum circuits
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Algorithm execution
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Hybrid systems
                  </li>
                </ul>
                <a href="#quantum-api" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Cybersecurity API */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cybersecurity API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Access our cybersecurity platform for threat detection, 
                  incident response, and security analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Threat detection
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Incident response
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Security analytics
                  </li>
                </ul>
                <a href="#security-api" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Space Technology API */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Globe className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Space Technology API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Integrate with our space technology platforms for satellite 
                  operations, space resource mining, and orbital analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Satellite operations
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Resource mining
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    Orbital analytics
                  </li>
                </ul>
                <a href="#space-api" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Enterprise IT API */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Cpu className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise IT API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Access our enterprise IT infrastructure, automation tools, 
                  and management systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Infrastructure management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Automation tools
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Monitoring systems
                  </li>
                </ul>
                <a href="#enterprise-api" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Micro SAAS API */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-xl">
                    <Database className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Micro SAAS API</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Integrate with our micro SAAS platforms for business automation, 
                  workflow management, and process optimization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Business automation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Workflow management
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Process optimization
                  </li>
                </ul>
                <a href="#saas-api" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quick Start Guide</h2>
              <p className="text-xl text-gray-400 mb-8">
                Get started with our APIs in minutes with our comprehensive quick start guide.
              </p>
            </motion.div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Authentication</h3>
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">All API requests require authentication using API keys:</p>
                <code className="block bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Base URL</h3>
              <div className="bg-gray-900 rounded-xl p-6 mb-6">
                <p className="text-gray-300 mb-4">All API endpoints use the following base URL:</p>
                <code className="block bg-black rounded-lg p-4 text-blue-400 font-mono text-sm">
                  https://api.ziontechgroup.com/v1
                </code>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Example Request</h3>
              <div className="bg-gray-900 rounded-xl p-6">
                <p className="text-gray-300 mb-4">Here's a simple example using cURL:</p>
                <code className="block bg-black rounded-lg p-4 text-yellow-400 font-mono text-sm">
                  curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \<br/>
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"<br/>
                  &nbsp;&nbsp;-H "Content-Type: application/json"
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Explore our comprehensive API documentation and start building 
                with Zion Tech Group's revolutionary technology platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=API-Integration"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get API Access
                </a>
                <a 
                  href="/developer-resources"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Developer Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
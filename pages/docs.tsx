import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Code, Search, ArrowRight, Calendar, User, Tag, Brain, Atom, Rocket, Star, Clock, Download, ExternalLink } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Docs() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 rounded-full text-slate-300 text-sm mb-6">
                <FileText className="w-4 h-4" />
                Technical Documentation
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Documentation
                <span className="block bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                  & Guides
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technical documentation, API references, and implementation guides for our AI consciousness and quantum technology platforms
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-slate-500/30 text-slate-300 font-semibold rounded-xl hover:bg-slate-500/10 transition-all duration-300"
                >
                  API Reference
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our most popular platforms and technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Consciousness Platform",
                  description: "Learn to integrate and use our revolutionary AI consciousness systems",
                  difficulty: "Beginner",
                  time: "15 min",
                  icon: <Brain className="w-12 h-12 text-blue-400" />,
                  features: ["Quick setup", "Basic integration", "Sample applications", "Troubleshooting"]
                },
                {
                  title: "Quantum Computing SDK",
                  description: "Start building quantum applications with our comprehensive SDK",
                  difficulty: "Intermediate",
                  time: "30 min",
                  icon: <Atom className="w-12 h-12 text-purple-400" />,
                  features: ["SDK installation", "Quantum algorithms", "API integration", "Best practices"]
                },
                {
                  title: "Space Technology API",
                  description: "Access space resource intelligence and autonomous navigation systems",
                  difficulty: "Beginner",
                  time: "20 min",
                  icon: <Rocket className="w-12 h-12 text-green-400" />,
                  features: ["API setup", "Authentication", "Data retrieval", "Real-time updates"]
                }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 border border-slate-500/30 rounded-2xl p-8 hover:border-slate-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {guide.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{guide.title}</h3>
                  <p className="text-gray-300 mb-6">{guide.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full">
                      {guide.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {guide.time}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Star className="w-3 h-3 text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300"
                  >
                    Start Guide
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900/30 to-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation for all our platforms and technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI & Consciousness",
                  description: "Complete documentation for AI consciousness and emotional intelligence systems",
                  sections: [
                    "Platform Overview",
                    "API Reference",
                    "Integration Guides",
                    "Best Practices",
                    "Troubleshooting"
                  ],
                  icon: <Brain className="w-16 h-16 text-blue-400" />
                },
                {
                  title: "Quantum Technology",
                  description: "Comprehensive guides for quantum computing and quantum systems",
                  sections: [
                    "SDK Documentation",
                    "Quantum Algorithms",
                    "API Reference",
                    "Performance Optimization",
                    "Error Correction"
                  ],
                  icon: <Atom className="w-16 h-16 text-purple-400" />
                },
                {
                  title: "Space Technology",
                  description: "Documentation for space resource intelligence and autonomous systems",
                  sections: [
                    "API Documentation",
                    "Data Formats",
                    "Authentication",
                    "Rate Limits",
                    "Webhooks"
                  ],
                  icon: <Rocket className="w-16 h-16 text-green-400" />
                },
                {
                  title: "Enterprise Solutions",
                  description: "Guides for enterprise integration and deployment",
                  sections: [
                    "Architecture Overview",
                    "Security Guidelines",
                    "Scalability",
                    "Monitoring",
                    "Support"
                  ],
                  icon: <Code className="w-16 h-16 text-cyan-400" />
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/30 to-gray-800/30 border border-slate-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <ul className="space-y-2">
                    {category.sections.map((section, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        {section}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                API Reference
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete API documentation with examples and code snippets
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "REST API",
                  description: "HTTP-based API for all platform operations",
                  version: "v2.1",
                  status: "Stable",
                  icon: <Code className="w-12 h-12 text-blue-400" />
                },
                {
                  name: "GraphQL API",
                  description: "Flexible query language for complex data operations",
                  version: "v1.0",
                  status: "Beta",
                  icon: <Code className="w-12 h-12 text-purple-400" />
                },
                {
                  name: "WebSocket API",
                  description: "Real-time communication and streaming data",
                  version: "v1.2",
                  status: "Stable",
                  icon: <Code className="w-12 h-12 text-green-400" />
                },
                {
                  name: "SDK Libraries",
                  description: "Client libraries for popular programming languages",
                  version: "v3.0",
                  status: "Stable",
                  icon: <Code className="w-12 h-12 text-cyan-400" />
                },
                {
                  name: "CLI Tools",
                  description: "Command-line interface for automation",
                  version: "v2.0",
                  status: "Stable",
                  icon: <Code className="w-12 h-12 text-yellow-400" />
                },
                {
                  name: "Webhooks",
                  description: "Event-driven notifications and integrations",
                  version: "v1.1",
                  status: "Stable",
                  icon: <Code className="w-12 h-12 text-orange-400" />
                }
              ].map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-slate-800/20 to-gray-800/20 border border-slate-500/20 rounded-2xl p-6 hover:border-slate-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {api.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{api.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{api.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-slate-400">v{api.version}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      api.status === 'Stable' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {api.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access comprehensive documentation and start building with our revolutionary technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-semibold text-lg rounded-xl hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center gap-3"
                >
                  View Full Documentation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border border-slate-500/30 text-slate-300 font-semibold text-lg rounded-xl hover:bg-slate-500/10 transition-all duration-300"
                >
                  Download SDK
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
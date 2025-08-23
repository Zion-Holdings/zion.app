import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Code, Database, Network, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Brain, Atom, Shield, Rocket, Zap, Users,
  Search, Download, ExternalLink
} from 'lucide-react';

const DocsPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                <span>Technical Documentation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Documentation
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technical documentation, API references, and implementation guides for all Zion Tech Group solutions
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Documentation Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Organized documentation to help you find exactly what you need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI & Consciousness",
                  description: "Documentation for AI consciousness platforms and emotional intelligence systems",
                  color: "from-indigo-500 to-purple-500",
                  link: "/docs/ai-consciousness"
                },
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Technology",
                  description: "Guides for quantum computing, cybersecurity, and materials discovery",
                  color: "from-purple-500 to-pink-500",
                  link: "/docs/quantum-technology"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Cybersecurity",
                  description: "Security best practices, zero-trust architecture, and threat protection",
                  color: "from-pink-500 to-red-500",
                  link: "/docs/cybersecurity"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Space Technology",
                  description: "Space resource mining, exploration, and AI-powered space systems",
                  color: "from-red-500 to-orange-500",
                  link: "/docs/space-technology"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Infrastructure",
                  description: "Cloud infrastructure, edge computing, and network architecture",
                  color: "from-orange-500 to-yellow-500",
                  link: "/docs/infrastructure"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "APIs & SDKs",
                  description: "API references, SDK documentation, and integration guides",
                  color: "from-yellow-500 to-green-500",
                  link: "/docs/apis"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{category.description}</p>
                  <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <span className="text-sm font-medium">View Documentation</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Getting Started
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential guides to help you get up and running quickly
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Quick Start Guide",
                  description: "Get up and running with Zion Tech Group solutions in minutes",
                  category: "Beginner",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "API Integration",
                  description: "Learn how to integrate our APIs into your applications",
                  category: "Developer",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${guide.color}`}>
                      {guide.icon}
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-400 text-xs font-medium mb-2">
                        {guide.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{guide.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{guide.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Developer Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tools and resources to help developers build amazing solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "SDKs", icon: <Code className="w-6 h-6" />, description: "Client libraries" },
                { name: "Examples", icon: <FileText className="w-6 h-6" />, description: "Code samples" },
                { name: "Tools", icon: <Zap className="w-6 h-6" />, description: "Development tools" },
                { name: "Community", icon: <Users className="w-6 h-6" />, description: "Developer forums" }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-3">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{resource.name}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Need Help with Documentation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the information you need
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300">
                  Browse All Docs
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
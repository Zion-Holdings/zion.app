import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Brain, Shield, Rocket, Cpu, Database } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "AI Consciousness Evolution 2029",
      description: "A comprehensive analysis of artificial consciousness development and its implications for the future of AI technology.",
      category: "AI & Consciousness",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      downloadUrl: "/whitepapers/ai-consciousness-evolution-2029.pdf",
      externalUrl: "https://ziontechgroup.com/ai-consciousness-evolution-2029/",
      date: "2025",
      pages: "45"
    },
    {
      title: "Quantum Neural Networks: The Future of AI",
      description: "Exploring the intersection of quantum computing and artificial intelligence for next-generation neural networks.",
      category: "Quantum Computing",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      downloadUrl: "/whitepapers/quantum-neural-networks.pdf",
      externalUrl: "#",
      date: "2025",
      pages: "38"
    },
    {
      title: "Autonomous Business Operations Framework",
      description: "A comprehensive guide to implementing AI-powered autonomous operations in modern enterprises.",
      category: "Business Automation",
      icon: Rocket,
      color: "from-red-500 to-orange-500",
      downloadUrl: "/whitepapers/autonomous-business-operations.pdf",
      externalUrl: "#",
      date: "2025",
      pages: "52"
    },
    {
      title: "Quantum Cybersecurity: Next-Generation Protection",
      description: "Securing the future with quantum-resistant encryption and AI-powered threat detection systems.",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      downloadUrl: "/whitepapers/quantum-cybersecurity.pdf",
      externalUrl: "#",
      date: "2025",
      pages: "41"
    },
    {
      title: "Edge Computing Orchestration Strategies",
      description: "Optimizing distributed computing infrastructure for maximum performance and efficiency.",
      category: "Edge Computing",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      downloadUrl: "/whitepapers/edge-computing-orchestration.pdf",
      externalUrl: "#",
      date: "2025",
      pages: "36"
    },
    {
      title: "AI-Powered IT Asset Management",
      description: "Revolutionizing infrastructure management with intelligent asset tracking and predictive maintenance.",
      category: "IT Management",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
      downloadUrl: "/whitepapers/ai-it-asset-management.pdf",
      externalUrl: "#",
      date: "2025",
      pages: "33"
    }
  ];

  const categories = [
    "All",
    "AI & Consciousness",
    "Quantum Computing",
    "Business Automation",
    "Cybersecurity",
    "Edge Computing",
    "IT Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Whitepapers - Zion Tech Group</title>
        <meta name="description" content="Download comprehensive whitepapers on AI consciousness, quantum computing, cybersecurity, and autonomous business operations from Zion Tech Group." />
        <meta name="keywords" content="whitepapers, AI research, quantum computing, cybersecurity, business automation, technology research" />
        <meta property="og:title" content="Whitepapers - Zion Tech Group" />
        <meta property="og:description" content="Download comprehensive whitepapers on AI consciousness, quantum computing, and autonomous business operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/whitepapers" />
        <link rel="canonical" href="https://ziontechgroup.com/whitepapers" />
      </Head>

      <EnhancedNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Research
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Whitepapers
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Deep insights into the future of technology, AI consciousness, quantum computing,
                and autonomous business operations from our research team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${paper.color} flex items-center justify-center mb-4`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 mb-3">
                      {paper.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{paper.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{paper.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{paper.date}</span>
                    <span>{paper.pages} pages</span>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={paper.downloadUrl}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                    {paper.externalUrl !== "#" && (
                      <a
                        href={paper.externalUrl}
                        className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Read</span>
                      </a>
                    )}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Our Research
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified when we publish new whitepapers and research insights
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  );
}
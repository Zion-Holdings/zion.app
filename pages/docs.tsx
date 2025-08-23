import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, Book, Code, Database, Shield, Rocket, Brain, Cpu } from 'lucide-react';

export default function Docs() {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      icon: Rocket,
      color: "from-cyan-500 to-blue-600",
      docs: [
        { title: "Quick Start Guide", href: "/docs/quick-start", description: "Get up and running in minutes" },
        { title: "Installation", href: "/docs/installation", description: "Step-by-step installation guide" },
        { title: "Configuration", href: "/docs/configuration", description: "Configure your environment" },
        { title: "First Project", href: "/docs/first-project", description: "Create your first project" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      docs: [
        { title: "Authentication", href: "/docs/api/authentication", description: "API authentication methods" },
        { title: "Endpoints", href: "/docs/api/endpoints", description: "All available API endpoints" },
        { title: "Rate Limits", href: "/docs/api/rate-limits", description: "Understanding rate limits" },
        { title: "Error Codes", href: "/docs/api/error-codes", description: "Common error codes and solutions" }
      ]
    },
    {
      title: "SDKs & Libraries",
      description: "Client libraries and SDKs for various languages",
      icon: Database,
      color: "from-green-500 to-emerald-600",
      docs: [
        { title: "JavaScript/Node.js", href: "/docs/sdks/javascript", description: "JavaScript SDK documentation" },
        { title: "Python", href: "/docs/sdks/python", description: "Python client library" },
        { title: "Java", href: "/docs/sdks/java", description: "Java SDK and examples" },
        { title: "Go", href: "/docs/sdks/go", description: "Go client library" }
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step tutorials and examples",
      icon: Book,
      color: "from-orange-500 to-red-600",
      docs: [
        { title: "AI Model Training", href: "/docs/tutorials/ai-training", description: "Train custom AI models" },
        { title: "Quantum Computing", href: "/docs/tutorials/quantum-computing", description: "Quantum computing basics" },
        { title: "Security Implementation", href: "/docs/tutorials/security", description: "Implement security features" },
        { title: "Deployment", href: "/docs/tutorials/deployment", description: "Deploy your applications" }
      ]
    },
    {
      title: "Security",
      description: "Security best practices and guidelines",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      docs: [
        { title: "Security Overview", href: "/docs/security/overview", description: "Security architecture overview" },
        { title: "Authentication", href: "/docs/security/authentication", description: "User authentication methods" },
        { title: "Authorization", href: "/docs/security/authorization", description: "Role-based access control" },
        { title: "Compliance", href: "/docs/security/compliance", description: "SOC 2, GDPR, and other standards" }
      ]
    },
    {
      title: "Advanced Topics",
      description: "Advanced concepts and deep dives",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      docs: [
        { title: "Machine Learning", href: "/docs/advanced/ml", description: "Advanced ML concepts" },
        { title: "Quantum Algorithms", href: "/docs/advanced/quantum", description: "Quantum algorithm implementation" },
        { title: "Performance Optimization", href: "/docs/advanced/performance", description: "Optimize your applications" },
        { title: "Scaling", href: "/docs/advanced/scaling", description: "Scale your infrastructure" }
      ]
    }
  ];

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
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive documentation, tutorials, and API references to help you 
                build amazing applications with our technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-8 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FileText className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {docCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3">
                      {category.docs.map((doc, docIndex) => (
                        <a
                          key={docIndex}
                          href={doc.href}
                          className="block p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {doc.title}
                              </h4>
                              <p className="text-xs text-gray-400 mt-1">
                                {doc.description}
                              </p>
                            </div>
                            <FileText className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-xl text-gray-300">
                Popular documentation sections and resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "API Reference", href: "/docs/api", icon: Code },
                { title: "SDKs", href: "/docs/sdks", icon: Database },
                { title: "Tutorials", href: "/docs/tutorials", icon: Book },
                { title: "Security", href: "/docs/security", icon: Shield }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <link.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
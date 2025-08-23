import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, Code, FileText, Search, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Rocket, Brain, Atom
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const categories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Quick Start Guide", description: "Get up and running in 5 minutes", href: "/docs/quick-start" },
        { title: "Installation", description: "Step-by-step installation guide", href: "/docs/installation" },
        { title: "Configuration", description: "Configure your environment", href: "/docs/configuration" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "AI consciousness and machine learning documentation",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      articles: [
        { title: "AI Consciousness API", description: "Integrate AI consciousness into your apps", href: "/docs/ai-consciousness-api" },
        { title: "Neural Networks", description: "Build and train neural networks", href: "/docs/neural-networks" },
        { title: "Emotional Intelligence", description: "Implement emotional AI systems", href: "/docs/emotional-intelligence" }
      ]
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms and quantum-resistant solutions",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      articles: [
        { title: "Quantum Algorithms", description: "Implement quantum algorithms", href: "/docs/quantum-algorithms" },
        { title: "Quantum Security", description: "Quantum-resistant cryptography", href: "/docs/quantum-security" },
        { title: "Quantum API", description: "Quantum computing API reference", href: "/docs/quantum-api" }
      ]
    },
    {
      title: "Space Technology",
      description: "Space resource intelligence and autonomous systems",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      articles: [
        { title: "Space Resource API", description: "Access space resource intelligence", href: "/docs/space-resource-api" },
        { title: "Satellite Systems", description: "Build autonomous satellite systems", href: "/docs/satellite-systems" },
        { title: "Mission Control", description: "Manage space missions", href: "/docs/mission-control" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and threat detection",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Zero Trust Security", description: "Implement zero trust architecture", href: "/docs/zero-trust" },
        { title: "Threat Detection", description: "AI-powered threat detection", href: "/docs/threat-detection" },
        { title: "Security API", description: "Security and compliance APIs", href: "/docs/security-api" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      articles: [
        { title: "REST API", description: "Complete REST API reference", href: "/docs/rest-api" },
        { title: "GraphQL API", description: "GraphQL API documentation", href: "/docs/graphql-api" },
        { title: "SDKs & Libraries", description: "Client libraries and SDKs", href: "/docs/sdks" }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "Getting Started with AI Consciousness",
      description: "Learn how to integrate AI consciousness into your applications",
      category: "AI & Machine Learning",
      readTime: "10 min read",
      href: "/docs/ai-consciousness-getting-started"
    },
    {
      title: "Quantum Security Implementation",
      description: "Implement quantum-resistant security in your systems",
      category: "Cybersecurity",
      readTime: "15 min read",
      href: "/docs/quantum-security-implementation"
    },
    {
      title: "Space Resource Intelligence API",
      description: "Access and analyze space resource data",
      category: "Space Technology",
      readTime: "12 min read",
      href: "/docs/space-resource-api-guide"
    }
  ];

  const searchSuggestions = [
    "AI consciousness", "Quantum algorithms", "Space technology", "Cybersecurity", "API integration"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Technical Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, API references, and tutorials to help you build 
                with our revolutionary AI consciousness, quantum computing, and space technology platforms.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {searchSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Popular Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these essential guides to get up and running quickly
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by technology area
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                        <div>
                          <h4 className="text-white font-medium">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    View All {category.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond documentation, discover tools and resources to accelerate your development
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: "Code Examples",
                  description: "Ready-to-use code snippets and examples",
                  href: "/docs/code-examples",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: FileText,
                  title: "Tutorials",
                  description: "Step-by-step tutorials and guides",
                  href: "/docs/tutorials",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: BookOpen,
                  title: "Best Practices",
                  description: "Industry best practices and guidelines",
                  href: "/docs/best-practices",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Search,
                  title: "API Explorer",
                  description: "Interactive API testing and exploration",
                  href: "/docs/api-explorer",
                  color: "from-orange-500 to-red-500"
                }
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center group mx-auto"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you succeed with our technology platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Join Community
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
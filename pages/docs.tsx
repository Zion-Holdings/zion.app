import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain,
  Rocket,
  Zap,
  ArrowRight,
  Search,
  Filter,
  FileText,
  Play,
  Download,
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Network,
  Lock,
  Globe,
  Users,
  Settings,
  Monitor,
  Clock
} from 'lucide-react';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      name: "Getting Started",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      description: "Quick start guides and tutorials",
      count: 8,
      items: [
        { name: "Quick Start Guide", href: "/docs/quickstart", type: "Guide", difficulty: "Beginner" },
        { name: "Installation", href: "/docs/installation", type: "Guide", difficulty: "Beginner" },
        { name: "First Project", href: "/docs/first-project", type: "Tutorial", difficulty: "Beginner" },
        { name: "Configuration", href: "/docs/configuration", type: "Guide", difficulty: "Beginner" }
      ]
    },
    {
      name: "API Reference",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      description: "Complete API documentation and examples",
      count: 45,
      items: [
        { name: "Authentication", href: "/docs/api/auth", type: "API", difficulty: "Intermediate" },
        { name: "Core Endpoints", href: "/docs/api/core", type: "API", difficulty: "Intermediate" },
        { name: "Webhooks", href: "/docs/api/webhooks", type: "API", difficulty: "Advanced" },
        { name: "Rate Limits", href: "/docs/api/rate-limits", type: "API", difficulty: "Intermediate" }
      ]
    },
    {
      name: "SDKs & Libraries",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      description: "Client libraries and SDKs",
      count: 12,
      items: [
        { name: "JavaScript SDK", href: "/docs/sdk/javascript", type: "SDK", difficulty: "Intermediate" },
        { name: "Python SDK", href: "/docs/sdk/python", type: "SDK", difficulty: "Intermediate" },
        { name: "Go SDK", href: "/docs/sdk/go", type: "SDK", difficulty: "Intermediate" },
        { name: "Java SDK", href: "/docs/sdk/java", type: "SDK", difficulty: "Intermediate" }
      ]
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      description: "AI platform documentation and guides",
      count: 28,
      items: [
        { name: "AI Models", href: "/docs/ai/models", type: "Guide", difficulty: "Advanced" },
        { name: "Training Data", href: "/docs/ai/training", type: "Guide", difficulty: "Advanced" },
        { name: "Inference API", href: "/docs/ai/inference", type: "API", difficulty: "Intermediate" },
        { name: "Model Deployment", href: "/docs/ai/deployment", type: "Guide", difficulty: "Advanced" }
      ]
    },
    {
      name: "Quantum Computing",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      description: "Quantum platform and algorithms",
      count: 22,
      items: [
        { name: "Quantum Circuits", href: "/docs/quantum/circuits", type: "Guide", difficulty: "Advanced" },
        { name: "Quantum Algorithms", href: "/docs/quantum/algorithms", type: "Guide", difficulty: "Advanced" },
        { name: "Qubit Management", href: "/docs/quantum/qubits", type: "Guide", difficulty: "Advanced" },
        { name: "Quantum Error Correction", href: "/docs/quantum/error-correction", type: "Guide", difficulty: "Expert" }
      ]
    },
    {
      name: "Space Technology",
      icon: Rocket,
      color: "from-yellow-500 to-orange-500",
      description: "Space resource intelligence platform",
      count: 18,
      items: [
        { name: "Satellite Data", href: "/docs/space/satellites", type: "Guide", difficulty: "Intermediate" },
        { name: "Resource Mapping", href: "/docs/space/mapping", type: "Guide", difficulty: "Intermediate" },
        { name: "Orbital Mechanics", href: "/docs/space/orbital", type: "Guide", difficulty: "Advanced" },
        { name: "Space Mining", href: "/docs/space/mining", type: "Guide", difficulty: "Advanced" }
      ]
    }
  ];

  const featuredGuides = [
    {
      title: "Building Your First AI Application",
      description: "Step-by-step guide to creating an AI-powered application using our platform.",
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      href: "/docs/guides/first-ai-app",
      difficulty: "Beginner",
      timeToComplete: "30 min"
    },
    {
      title: "Quantum Algorithm Implementation",
      description: "Learn how to implement quantum algorithms for optimization and cryptography.",
      category: "Quantum Computing",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      href: "/docs/guides/quantum-algorithms",
      difficulty: "Advanced",
      timeToComplete: "2 hours"
    },
    {
      title: "Space Resource Intelligence API",
      description: "Complete guide to using our space technology APIs for resource discovery.",
      category: "Space Technology",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      href: "/docs/guides/space-api",
      difficulty: "Intermediate",
      timeToComplete: "1 hour"
    }
  ];

  const quickStartTutorials = [
    {
      title: "5-Minute Setup",
      description: "Get up and running in just 5 minutes",
      href: "/docs/quickstart/5-minute-setup",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hello World API",
      description: "Make your first API call",
      href: "/docs/quickstart/hello-world",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "First AI Model",
      description: "Train and deploy your first AI model",
      href: "/docs/quickstart/first-ai-model",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Hello World",
      description: "Run your first quantum circuit",
      href: "/docs/quickstart/quantum-hello-world",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500"
    }
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
                <BookOpen className="w-4 h-4 mr-2" />
                Technical Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive guides, API references, and tutorials to help you build 
                revolutionary applications with our AI, quantum, and space technology platforms.
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
                  placeholder="Search documentation, APIs, or guides..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
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
                Quick Start
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our most essential tutorials and guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartTutorials.map((tutorial, index) => (
                <motion.div
                  key={tutorial.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={tutorial.href}>
                    <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tutorial.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tutorial.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master our platforms with comprehensive, step-by-step guides and tutorials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={guide.href}>
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${guide.color} flex items-center justify-center mx-auto mt-8 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="p-6 text-center">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30 mb-4">
                          {guide.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center">
                            <Shield className="w-4 h-4 mr-1" />
                            {guide.difficulty}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {guide.timeToComplete}
                          </span>
                        </div>
                        <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">Read Guide</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation organized by platform and technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="mb-4">
                      <span className="text-cyan-400 font-medium">{category.count} articles</span>
                    </div>
                    
                    {/* Sample Items */}
                    <div className="space-y-2 mb-4">
                      {category.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300 truncate">{item.name}</span>
                          <span className="text-gray-500 text-xs">{item.difficulty}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Tools Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Developer Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential tools and resources to accelerate your development workflow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "API Playground", href: "/api-playground", icon: Code, color: "from-blue-500 to-cyan-500", description: "Test APIs interactively" },
                { name: "SDK Examples", href: "/docs/sdk/examples", icon: Database, color: "from-purple-500 to-pink-500", description: "Code samples and examples" },
                { name: "CLI Tool", href: "/docs/cli", icon: Terminal, color: "from-emerald-500 to-teal-500", description: "Command-line interface" },
                { name: "Postman Collection", href: "/docs/postman", icon: Network, color: "from-orange-500 to-red-500", description: "API testing collection" },
                { name: "Status Page", href: "/status", icon: Monitor, color: "from-indigo-500 to-purple-500", description: "Platform status and uptime" },
                { name: "GitHub Repos", href: "https://github.com/Zion-Holdings", icon: Github, color: "from-gray-500 to-slate-500", description: "Open source projects", external: true },
                { name: "Community Forum", href: "/community", icon: Users, color: "from-yellow-500 to-orange-500", description: "Developer community" },
                { name: "Support Portal", href: "/support", icon: Settings, color: "from-cyan-500 to-blue-500", description: "Technical support" }
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  {tool.external ? (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Visit</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={tool.href}
                      className="block p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Access</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  )}
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
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Support
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DocsPage;
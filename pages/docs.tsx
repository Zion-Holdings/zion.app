import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  FileText, 
  Play, 
  Download, 
  Search, 
  ArrowRight,
  Github,
  Terminal,
  Database,
  Shield,
  Brain,
  Atom,
  Rocket,
  Target,
  Star,
  Clock,
  Copy,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen, color: 'from-cyan-400 to-purple-600' },
    { id: 'api', name: 'API Reference', icon: Code, color: 'from-purple-400 to-pink-600' },
    { id: 'guides', name: 'Getting Started', icon: Play, color: 'from-blue-400 to-cyan-600' },
    { id: 'sdks', name: 'SDKs & Libraries', icon: Download, color: 'from-emerald-400 to-teal-600' },
    { id: 'examples', name: 'Code Examples', icon: FileText, color: 'from-yellow-400 to-orange-600' },
    { id: 'tutorials', name: 'Tutorials', icon: Target, color: 'from-red-400 to-pink-600' }
  ];

  const quickStartGuides = [
    {
      id: 1,
      title: "AI Consciousness Platform Setup",
      description: "Get started with our AI consciousness platform in under 10 minutes",
      category: "guides",
      difficulty: "Beginner",
      time: "10 min",
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing API Integration",
      description: "Integrate quantum computing capabilities into your applications",
      category: "guides",
      difficulty: "Intermediate",
      time: "25 min",
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      featured: true
    },
    {
      id: 3,
      title: "Space Technology Platform",
      description: "Access space resource intelligence and satellite data",
      category: "guides",
      difficulty: "Intermediate",
      time: "20 min",
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      featured: true
    }
  ];

  const apiDocs = [
    {
      id: 1,
      title: "AI Consciousness API",
      description: "Complete API reference for AI consciousness and emotional intelligence",
      category: "api",
      version: "v2.1.0",
      endpoints: 45,
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      status: "stable"
    },
    {
      id: 2,
      title: "Quantum Computing API",
      description: "Quantum algorithms, quantum machine learning, and quantum cryptography",
      category: "api",
      version: "v1.8.0",
      endpoints: 32,
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      status: "stable"
    },
    {
      id: 3,
      title: "Space Technology API",
      description: "Satellite operations, space resource intelligence, and orbital data",
      category: "api",
      version: "v1.5.0",
      endpoints: 28,
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      status: "beta"
    },
    {
      id: 4,
      title: "Cybersecurity API",
      description: "Quantum-resistant security, threat detection, and compliance",
      category: "api",
      version: "v2.0.0",
      endpoints: 38,
      icon: Shield,
      color: "from-red-400 to-orange-600",
      status: "stable"
    }
  ];

  const sdks = [
    {
      id: 1,
      title: "Python SDK",
      description: "Official Python client for Zion Tech Group APIs",
      category: "sdks",
      version: "2.1.0",
      language: "Python",
      icon: Code,
      color: "from-blue-400 to-cyan-600",
      downloads: "15.2K",
      stars: "2.8K"
    },
    {
      id: 2,
      title: "JavaScript SDK",
      description: "Node.js and browser JavaScript client library",
      category: "sdks",
      version: "2.0.0",
      language: "JavaScript",
      icon: Code,
      color: "from-yellow-400 to-orange-600",
      downloads: "28.7K",
      stars: "4.1K"
    },
    {
      id: 3,
      title: "Go SDK",
      description: "High-performance Go client for enterprise applications",
      category: "sdks",
      version: "1.9.0",
      language: "Go",
      icon: Code,
      color: "from-cyan-400 to-blue-600",
      downloads: "8.9K",
      stars: "1.2K"
    },
    {
      id: 4,
      title: "Java SDK",
      description: "Enterprise-grade Java client with Spring Boot support",
      category: "sdks",
      version: "2.0.0",
      language: "Java",
      icon: Code,
      color: "from-red-400 to-orange-600",
      downloads: "12.3K",
      stars: "1.8K"
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Building an AI Chatbot with Consciousness",
      description: "Create an emotionally intelligent chatbot using our AI consciousness platform",
      category: "tutorials",
      difficulty: "Intermediate",
      time: "45 min",
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      featured: false
    },
    {
      id: 2,
      title: "Quantum Machine Learning for Beginners",
      description: "Learn the basics of quantum machine learning with practical examples",
      category: "tutorials",
      difficulty: "Beginner",
      time: "60 min",
      icon: Atom,
      color: "from-blue-400 to-cyan-600",
      featured: false
    },
    {
      id: 3,
      title: "Space Resource Intelligence Dashboard",
      description: "Build a real-time dashboard for space resource monitoring",
      category: "tutorials",
      difficulty: "Advanced",
      time: "90 min",
      icon: Rocket,
      color: "from-indigo-400 to-purple-600",
      featured: false
    }
  ];

  const allDocs = [...quickStartGuides, ...apiDocs, ...sdks, ...tutorials];





  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer Documentation
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive guides, API references, and code examples to help you 
                    build with our revolutionary AI consciousness and quantum computing platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-400/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Quick Start Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Get up and running with our platforms in minutes, not hours.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {quickStartGuides.map((guide, index) => (
                <motion.article
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/docs/quick-start/${guide.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                          <guide.icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {guide.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {guide.description}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Target className="w-4 h-4" />
                              <span>{guide.difficulty}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{guide.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="font-semibold">Get Started</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* API Documentation */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                API Reference
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Complete API documentation with examples, authentication, and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiDocs.map((api, index) => (
                <motion.article
                  key={api.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/docs/api/${api.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl">
                            <api.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            api.status === 'stable' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {api.status}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {api.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {api.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Code className="w-4 h-4" />
                            <span>v{api.version}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Database className="w-4 h-4" />
                            <span>{api.endpoints} endpoints</span>
                          </div>
                        </div>

                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="font-semibold">View API Docs</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                SDKs & Libraries
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Official client libraries and SDKs for popular programming languages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sdks.map((sdk, index) => (
                <motion.article
                  key={sdk.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/docs/sdks/${sdk.id}`}>
                    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl">
                            <sdk.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30">
                            v{sdk.version}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {sdk.title}
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {sdk.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-1">
                            <Code className="w-4 h-4" />
                            <span>{sdk.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{sdk.downloads}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-400">
                            <Star className="w-4 h-4" />
                            <span>{sdk.stars}</span>
                          </div>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                            <span className="font-semibold">View SDK</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Code Examples
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Practical examples and code snippets to help you integrate our APIs quickly.
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* AI Consciousness Example */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI Consciousness Chat Example</h3>
                  </div>

                  <p className="text-gray-300 mb-6">
                    Create an emotionally intelligent chatbot using our AI consciousness platform.
                  </p>

                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Python</span>
                      <button
                        onClick={() => copyToClipboard(`import zion_ai

# Initialize AI consciousness client
client = zion_ai.ConsciousnessClient(api_key="your_api_key")

# Create a conversation with emotional intelligence
response = client.chat(
    message="I'm feeling stressed about my upcoming presentation",
    context="user is experiencing anxiety",
    emotional_state="anxious"
)

print(f"AI Response: {response.message}")
print(f"Emotional Understanding: {response.emotional_insight}")
print(f"Suggested Actions: {response.suggested_actions}")`)}
                        className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Code</span>
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`import zion_ai

# Initialize AI consciousness client
client = zion_ai.ConsciousnessClient(api_key="your_api_key")

# Create a conversation with emotional intelligence
response = client.chat(
    message="I'm feeling stressed about my upcoming presentation",
    context="user is experiencing anxiety",
    emotional_state="anxious"
)

print(f"AI Response: {response.message}")
print(f"Emotional Understanding: {response.emotional_insight}")
print(f"Suggested Actions: {response.suggested_actions}")`}</code>
                    </pre>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>Beginner</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>5 min</span>
                      </div>
                    </div>
                    <Link
                      href="/docs/examples/ai-consciousness-chat"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                    >
                      View Full Example
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Quantum Computing Example */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl">
                      <Atom className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Quantum Machine Learning Example</h3>
                  </div>

                  <p className="text-gray-300 mb-6">
                    Implement quantum machine learning algorithms for optimization problems.
                  </p>

                  <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Python</span>
                      <button
                        onClick={() => copyToClipboard(`import zion_quantum as zq

# Initialize quantum computing client
client = zq.QuantumClient(api_key="your_api_key")

# Create quantum circuit for optimization
circuit = zq.Circuit(qubits=4)
circuit.hadamard(range(4))  # Superposition
circuit.phase_estimation(angle=0.5)
circuit.measure_all()

# Execute on quantum hardware
result = client.execute(circuit, shots=1000)
print(f"Optimization Result: {result.optimized_value}")
print(f"Quantum Advantage: {result.quantum_advantage}x")`)}
                        className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Copy Code</span>
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`import zion_quantum as zq

# Initialize quantum computing client
client = zq.QuantumClient(api_key="your_api_key")

# Create quantum circuit for optimization
circuit = zq.Circuit(qubits=4)
circuit.hadamard(range(4))  # Superposition
circuit.phase_estimation(angle=0.5)
circuit.measure_all()

# Execute on quantum hardware
result = client.execute(circuit, shots=1000)
print(f"Optimization Result: {result.optimized_value}")
print(f"Quantum Advantage: {result.quantum_advantage}x")`}</code>
                    </pre>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>Intermediate</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>15 min</span>
                      </div>
                    </div>
                    <Link
                      href="/docs/examples/quantum-ml-optimization"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                    >
                      View Full Example
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                More tools and resources to help you build amazing applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Open Source</h3>
                <p className="text-gray-300 mb-6">
                  Explore our open-source projects and contribute to the community.
                </p>
                <Link
                  href="https://github.com/ziontechgroup"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">CLI Tools</h3>
                <p className="text-gray-300 mb-6">
                  Command-line tools for development and automation workflows.
                </p>
                <Link
                  href="/docs/cli"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  View CLI Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-cyan-400/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-6">
                  Join our developer community for support and collaboration.
                </p>
                <Link
                  href="/community"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help Getting Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you succeed with our platforms. 
                Get in touch for personalized support and guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/docs/tutorials"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Tutorials
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default DocsPage;
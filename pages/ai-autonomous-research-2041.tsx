import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Search, TestTube, Globe, Zap, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Cpu, Network, Database, Lock, Eye, Sparkles,
  BookOpen, Target, Users, Shield, Atom, Rocket
} from 'lucide-react';

const AIAutonomousResearch2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI Autonomous Research 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                AI Autonomous Research 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Fully autonomous AI research systems that independently discover, analyze, and innovate across all domains of human knowledge
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Launch Research AI
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                  View Research Projects
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Revolutionary Autonomous Research Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI systems conduct research independently, generating breakthrough discoveries and innovations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Independent Discovery",
                  description: "AI systems that autonomously identify research opportunities and formulate hypotheses",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <TestTube className="w-8 h-8" />,
                  title: "Experimental Design",
                  description: "Automated experiment planning and execution across multiple research domains",
                  color: "from-cyan-500 to-teal-500"
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Literature Analysis",
                  description: "Comprehensive analysis of existing research with gap identification",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Goal-Oriented Research",
                  description: "Research focused on specific objectives with measurable outcomes",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaborative AI Teams",
                  description: "Multiple AI agents working together on complex research projects",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Innovation",
                  description: "Continuous research updates and breakthrough discoveries",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Domains */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Research Domains
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous AI research covers all major scientific and technological fields
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Quantum Physics", icon: <Atom className="w-6 h-6" />, description: "Quantum mechanics research" },
                { name: "AI & Machine Learning", icon: <Brain className="w-6 h-6" />, description: "AI advancement research" },
                { name: "Biotechnology", icon: <TestTube className="w-6 h-6" />, description: "Bio-engineering breakthroughs" },
                { name: "Space Technology", icon: <Rocket className="w-6 h-6" />, description: "Space exploration research" }
              ].map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-3">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{domain.name}</h3>
                  <p className="text-gray-400 text-sm">{domain.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Advanced Research Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge technologies for maximum research efficiency and discovery potential
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-8 h-8" />,
                  title: "Quantum Computing",
                  description: "Quantum processors for complex calculations and simulations"
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Distributed Computing",
                  description: "Global network of research computing resources"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Big Data Analytics",
                  description: "Advanced data processing and pattern recognition"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Ready to Launch Autonomous Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the future of AI-driven research and discovery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Research Project
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                  View Research Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousResearch2041;
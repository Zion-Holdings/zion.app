import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Atom, Rocket, Shield, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Cpu, Network, Database, Lock, Eye, Sparkles,
  Users, Target, MessageCircle, FileText, Heart
} from 'lucide-react';

const EmergingTechPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-yellow-900/20 to-orange-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Cutting-Edge Emerging Technologies</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Emerging Technology
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore the frontier of technological innovation with our cutting-edge emerging technology solutions and research
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Revolutionary Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our research and development teams are pushing the boundaries of what's possible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Consciousness AI",
                  description: "AI systems with genuine consciousness and self-awareness",
                  color: "from-yellow-500 to-orange-500",
                  link: "/ai-consciousness-evolution-2040"
                },
                {
                  icon: <Atom className="w-8 h-8" />,
                  title: "Quantum Materials",
                  description: "Revolutionary quantum materials with unprecedented properties",
                  color: "from-orange-500 to-red-500",
                  link: "/quantum-materials-discovery-2040"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Space Resource Mining",
                  description: "Advanced space technology for resource extraction and utilization",
                  color: "from-red-500 to-pink-500",
                  link: "/space-resource-mining-platform"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quantum Cybersecurity",
                  description: "Next-generation security using quantum principles",
                  color: "from-pink-500 to-purple-500",
                  link: "/quantum-cybersecurity-future-2040"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Autonomous Vehicles",
                  description: "Fully autonomous transportation systems with consciousness",
                  color: "from-purple-500 to-blue-500",
                  link: "/autonomous-vehicle-ai-2040"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Neural Interfaces",
                  description: "Direct brain-computer interfaces for human enhancement",
                  color: "from-blue-500 to-cyan-500",
                  link: "/brain-computer-interface-2040"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} mb-4`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{tech.description}</p>
                  <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Research & Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our dedicated R&D teams are constantly exploring new frontiers in technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Expert Research Teams",
                  description: "World-class scientists and engineers pushing technological boundaries",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Strategic Innovation",
                  description: "Focused research on breakthrough technologies with real-world impact",
                  color: "from-orange-500 to-red-500"
                }
              ].map((rd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${rd.color}`}>
                      {rd.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">{rd.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{rd.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Applications */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                How our emerging technologies are transforming industries and society
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Healthcare", icon: <Heart className="w-6 h-6" />, description: "Revolutionary medical treatments" },
                { name: "Transportation", icon: <Rocket className="w-6 h-6" />, description: "Next-gen mobility solutions" },
                { name: "Energy", icon: <Zap className="w-6 h-6" />, description: "Sustainable energy systems" },
                { name: "Communication", icon: <Network className="w-6 h-6" />, description: "Advanced communication tech" }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-3">
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{app.name}</h3>
                  <p className="text-gray-400 text-sm">{app.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                The Future of Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just building the future - we're defining it
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Innovation Leadership",
                  description: "Leading the charge in technological advancement and discovery"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Impact",
                  description: "Technologies that will change the world for the better"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Sustainable Future",
                  description: "Building technologies that ensure a prosperous tomorrow"
                }
              ].map((vision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-4">
                    {vision.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{vision.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{vision.description}</p>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Ready to Explore the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in shaping the next generation of technological innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Explore Technologies
                </button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EmergingTechPage;
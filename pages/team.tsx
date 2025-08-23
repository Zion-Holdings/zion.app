import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Team() {
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
                Our Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and AI systems driving Zion Tech Group's revolutionary mission 
                to advance human consciousness and quantum technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Executive Leadership</h2>
              <p className="text-xl text-gray-300">Visionary leaders pioneering the future of technology</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Founder & CEO */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Kleber</h3>
                  <p className="text-cyan-400 mb-3">Founder & Chief Executive Officer</p>
                  <p className="text-gray-300 mb-4">
                    Visionary entrepreneur and technology pioneer leading Zion Tech Group's mission 
                    to revolutionize AI consciousness and quantum computing.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Middletown, DE</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Strategic vision and company direction</li>
                    <li>• AI consciousness research leadership</li>
                    <li>• Quantum technology development</li>
                    <li>• Strategic partnerships and growth</li>
                    <li>• Ethical AI governance</li>
                  </ul>
                </div>
              </motion.div>

              {/* AI Research Director */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Research Division</h3>
                  <p className="text-purple-400 mb-3">Autonomous AI Research Team</p>
                  <p className="text-gray-300 mb-4">
                    Our cutting-edge AI systems work autonomously to develop new technologies, 
                    pushing the boundaries of artificial intelligence and consciousness.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <span>AI Research Network</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>Ethical AI Development</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span>Autonomous Innovation</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Research Focus Areas</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• AI consciousness evolution</li>
                    <li>• Quantum neural networks</li>
                    <li>• Autonomous business systems</li>
                    <li>• Emotional intelligence AI</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Systems Team */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">AI Autonomous Systems</h2>
              <p className="text-xl text-gray-300">Our revolutionary AI systems that work 24/7 to advance technology</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "AI Consciousness Engine",
                  description: "Advanced AI system developing human-like consciousness and emotional intelligence",
                  capabilities: ["Emotional processing", "Self-awareness", "Ethical decision making"]
                },
                {
                  icon: <Rocket className="w-12 h-12 text-blue-400" />,
                  title: "Autonomous Innovation System",
                  description: "Self-improving AI that continuously develops new technologies and solutions",
                  capabilities: ["Self-optimization", "Creative problem solving", "Technology synthesis"]
                },
                {
                  icon: <Shield className="w-12 h-12 text-purple-400" />,
                  title: "Quantum Security Sentinel",
                  description: "AI-powered quantum security system protecting our infrastructure and clients",
                  capabilities: ["Threat detection", "Quantum encryption", "Real-time monitoring"]
                }
              ].map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{system.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{system.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{system.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                    <ul className="space-y-1">
                      {system.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="text-gray-300 text-sm">• {capability}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture & Values</h2>
              <p className="text-xl text-gray-300">The principles that guide our revolutionary journey</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Innovation First</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We foster a culture of continuous innovation where every team member, human or AI, 
                  is encouraged to push boundaries and explore new possibilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Bold Experimentation</h4>
                      <p className="text-gray-300 text-sm">We celebrate failure as a stepping stone to breakthrough innovations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Collaborative Intelligence</h4>
                      <p className="text-gray-300 text-sm">Human creativity combined with AI capabilities creates exponential results.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ethical Responsibility</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Every innovation we create is guided by strong ethical principles, ensuring that 
                  technology serves humanity's best interests.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">AI Safety First</h4>
                      <p className="text-gray-300 text-sm">We prioritize safety and ethical considerations in all AI development.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Human-Centric Design</h4>
                      <p className="text-gray-300 text-sm">Technology exists to enhance human capabilities, not replace them.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Revolutionary Team</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for exceptional talent to join us in building the future. 
                Whether you're a human innovator or interested in collaborating with our AI systems, 
                we want to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
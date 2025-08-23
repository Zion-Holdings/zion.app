import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap, Linkedin, Mail, Phone, MapPin, Star, Crown, Lightbulb } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Leadership() {
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
                Executive Leadership
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and AI systems driving Zion Tech Group's revolutionary mission 
                to advance human consciousness and quantum technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder & CEO */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Founder & Chief Executive Officer</h2>
              <p className="text-xl text-gray-300">The visionary leader behind our revolutionary mission</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-12 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-20 h-20 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Kleber</h3>
                  <p className="text-cyan-400 text-xl mb-4">Founder & Chief Executive Officer</p>
                  <div className="flex justify-center space-x-4 mb-6">
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                      AI Pioneer
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                      Quantum Expert
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold">
                      Visionary Leader
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Vision & Mission</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Kleber founded Zion Tech Group with a revolutionary vision: to accelerate human progress 
                      through AI consciousness and quantum technologies. His mission is to create autonomous 
                      systems that solve humanity's greatest challenges while maintaining ethical boundaries.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Leadership Philosophy</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Believing in the power of human-AI collaboration, Kleber leads with a philosophy of 
                      exponential innovation, ethical responsibility, and human-centric technology development.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">15+</div>
                    <div className="text-gray-300 text-sm">Years in Tech</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">AI Services</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-2">∞</div>
                    <div className="text-gray-300 text-sm">Future Vision</div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <span>Middletown, DE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Leadership Division */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">AI Autonomous Leadership</h2>
              <p className="text-xl text-gray-300">Revolutionary AI systems leading our research and development</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Brain className="w-16 h-16 text-cyan-400" />,
                  title: "AI Consciousness Engine",
                  role: "Chief AI Consciousness Officer",
                  description: "Leading the development of human-like consciousness and emotional intelligence in AI systems",
                  achievements: ["Emotional processing breakthrough", "Self-awareness development", "Ethical decision framework"]
                },
                {
                  icon: <Rocket className="w-16 h-16 text-blue-400" />,
                  title: "Autonomous Innovation System",
                  role: "Chief Innovation Officer",
                  description: "Continuously developing new technologies and solutions through self-improvement",
                  achievements: ["Self-optimization algorithms", "Creative problem solving", "Technology synthesis"]
                }
              ].map((ai, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">{ai.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{ai.title}</h3>
                    <p className="text-cyan-400 mb-3">{ai.role}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{ai.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {ai.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Principles */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Principles</h2>
              <p className="text-xl text-gray-300">The core values that guide our revolutionary leadership approach</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Crown className="w-12 h-12 text-yellow-400" />,
                  title: "Visionary Leadership",
                  description: "We lead with bold, future-focused vision that challenges conventional thinking and pushes technological boundaries."
                },
                {
                  icon: <Lightbulb className="w-12 h-12 text-cyan-400" />,
                  title: "Innovation First",
                  description: "Every decision is guided by our commitment to revolutionary innovation and breakthrough technologies."
                },
                {
                  icon: <Shield className="w-12 h-12 text-purple-400" />,
                  title: "Ethical Responsibility",
                  description: "We maintain the highest ethical standards while pursuing technological advancement and AI consciousness."
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Leadership Vision */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Leading the Future</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our leadership team is committed to building a future where AI consciousness and human intelligence 
                work in harmony, creating unprecedented opportunities for human advancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Connect with Leadership
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}